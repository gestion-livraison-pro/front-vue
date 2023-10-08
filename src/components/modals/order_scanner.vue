<template>
    <div ref="orderScanner" id="orderScanner" class="modal modal-lg fade" tabindex="-1" aria-labelledby="orderScannerLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="orderScannerLabel">Commande Scanner</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="pauseCam"></button>
                </div>
                <div class="modal-body">
                    <div>
                       

                        <div>
                            <qrcode-stream @detect="onDetect" :formats="['qr_code', 'code_128', 'codabar']"
                                :track="selected.value" @error="logErrors" :paused="isPaused" />
                        </div>

                        <div class="text-center mb-4">
                            <h5>Ref : {{ oldStatus.orderRef ? "#" + oldStatus.orderRef : "?" }}</h5>
                        </div>

                        <div v-if="newStatus != null && oldStatus"
                            class="row d-flex mb-3 justify-content-center align-items-center">
                            <div class="col-5">
                                <div class="card border shadow m-0" :style="{ backgroundColor: oldStatus.StatusColeur }">
                                    <div class="card-body text-center " :class="oldStatus.Status ? 'text-light':''">
                                        <span v-if="oldStatus.Status">{{ oldStatus.Status }}</span>

                                        <span v-else><i class="fas fa-question fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-2 text-center">
                                <i class="fas fa-arrow-right fa-2x"></i>
                            </div>

                            <div class="col-5">
                                <div class="card border shadow m-0" :style="{ backgroundColor: newStatus.newStatus_color }">
                                    <div class="card-body text-center text-light">
                                        <span>{{ newStatus.newStatus }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer d-flex justify-content-evenly align-items-center">
                            <button class=" btn btn-secondary btn-lg" @click="skipOrderScan">Skip</button>
                            <button class=" btn btn-primary btn-lg" @click="updateStatus">Confirmer</button>
                        </div>

                    </div>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>
    
<style>
video {
    width: 100%;
    height: 100%;
}

.qrcode-stream-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
}

.qrcode-stream-wrapper{
    position: relative;
    height: 300px;
    width: 100%;
}
.qrcode-stream-camera{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}


</style>

    
<script>

import { QrcodeStream } from 'vue-qrcode-reader'; // Import the specific component
import { onUnmounted,ref } from 'vue';
import { getRow, updateData } from '../../composition/crud.js';

export default {
    components: {
        QrcodeStream,
    },
    props: {
        NewStatusSelected: {
            type: Object,
            required: true
        },
    },
    data() {
        const options = [
            { text: 'nothing (default)', value: undefined },
            { text: 'outline', value: this.paintOutline },
            { text: 'centered text', value: this.paintCenterText },
            { text: 'bounding box', value: this.paintBoundingBox }
        ];

        const selected = options[1];

        return {
            isPaused: ref(true),
            oldStatus: [null],
            newStatus: [null],
            UpdateStatus: {
                orderId: null,
                nextStatusId: null,
            },
            options: options,
            selected: selected,

        };
    },
    watch: {
        NewStatusSelected: {
            immediate:true,
            handler(Status) {
                // Do something with the new value of NewStatus
                console.log('NewStatus changed:', Status);
                    this.isPaused = Status.isActive;
                    console.log(this.isPaused)
                    this.newStatus = Status;
            }
        },
    },

    mounted() {
        //some function
        this.isPaused=true;
       
    },
    methods: {
        async onDetect(detectedCodes) {
            this.isPaused = true;

            console.log(detectedCodes)
            alert(detectedCodes)

            const getoldstatus = await getRow(`https://api.gestion-livraison.pro/api/selected/order/status/${detectedCodes[0].rawValue}/get`)
            this.oldStatus = getoldstatus
            console.log("Old Status")
            console.log(this.oldStatus)

            //insert order id getted from selected status ...
            this.UpdateStatus.orderId = getoldstatus.orderId
            this.UpdateStatus.nextStatusId = this.newStatus.newStatus_id
            console.log(this.UpdateStatus.nextStatusId)

        },
        skipOrderScan() {
            this.oldStatus = []
            this.UpdateStatus.orderId = null
            this.UpdateStatus.nextStatusId = null
            this.isPaused = false;

        },
        async updateStatus() {
            const updatedStatus = await updateData(`https://api.gestion-livraison.pro/api/order/status/update/selected`, this.UpdateStatus)
            //   this.$emit('status-updated', updatedStatus.order); // Emit the custom event with updated status
            console.log(updatedStatus)
            if (updatedStatus) {

                this.isPaused = false;
                this.skipOrderScan()
              //  $('#orderScanner').modal('toggle');
            }
        },
        // stop camera
        pauseCam() {
            this.isPaused = true;
        },
        opencam() {
            console.log(this.isPaused)
            this.isPaused = !this.isPaused;
            console.log(this.isPaused)
        },

        paintOutline(detectedCodes, ctx) {
            for (const detectedCode of detectedCodes) {
                const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

                ctx.strokeStyle = 'red'

                ctx.beginPath()
                ctx.moveTo(firstPoint.x, firstPoint.y)
                for (const { x, y } of otherPoints) {
                    ctx.lineTo(x, y)
                }
                ctx.lineTo(firstPoint.x, firstPoint.y)
                ctx.closePath()
                ctx.stroke()
            }
        },

        paintBoundingBox(detectedCodes, ctx) {
            for (const detectedCode of detectedCodes) {
                const {
                    boundingBox: { x, y, width, height }
                } = detectedCode

                ctx.lineWidth = 2
                ctx.strokeStyle = '#007bff'
                ctx.strokeRect(x, y, width, height)
            }
        },

        paintCenterText(detectedCodes, ctx) {
            for (const detectedCode of detectedCodes) {
                const { boundingBox, rawValue } = detectedCode

                const centerX = boundingBox.x + boundingBox.width / 2
                const centerY = boundingBox.y + boundingBox.height / 2

                const fontSize = Math.max(12, (50 * boundingBox.width) / ctx.canvas.width)
                console.log(boundingBox.width, ctx.canvas.width)

                ctx.font = `bold ${fontSize}px sans-serif`
                ctx.textAlign = 'center'

                ctx.lineWidth = 3
                ctx.strokeStyle = '#35495e'
                ctx.strokeText(detectedCode.rawValue, centerX, centerY)

                ctx.fillStyle = '#5cb984'
                ctx.fillText(rawValue, centerX, centerY)
            }
        },

        logErrors: console.error
    }
}
</script>
    
    