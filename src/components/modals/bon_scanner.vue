<template>
    <div ref="ScanBonRamassage" id="ScanBonRamassage" class="modal modal-lg fade" tabindex="-1"
        aria-labelledby="ScanBonRamassageLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="ScanBonRamassageLabel">Bon Scanner</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="pauseCam"></button>
                </div>
                <div class="modal-body">
                    <div>
                       

                        <div>
                            <qrcode-stream @detect="onDetect" :formats="['qr_code', 'code_128', 'codabar']"
                                :track="selected.value" @error="logErrors" :paused="isPaused" />
                        </div>

                        <div v-if="BonInfo!=null">
                            <div class="text-center my-5">
                                <h5>Ref : {{ BonInfo.Ref }}</h5>
                            </div>

                            <div class="row my-3 text-center">
                                <div class="col-6"><strong>Client</strong> : {{ BonInfo.Client }}</div>
                                <div class="col-6"><strong>Validation</strong> : {{ BonInfo.Valide + " / " + BonInfo.Colis
                                }}</div>
                            </div>

                            <div class="modal-footer d-flex justify-content-evenly align-items-center">
                                <button class=" btn btn-secondary btn-lg" @click="skipOrderScan">Skip</button>
                                <button class=" btn btn-success btn-lg" @click="order_validate">Valider</button>
                                <button class=" btn btn-primary btn-lg" @click="opencam">Confidddddrmer</button>

                            </div>
                        </div>
                        <div v-if="getError!=null" class="text-center my-5 shadow " style="color: #ffffff;">
                            <div class="card p-3 d-flex align-items-center justify-content-cente bg-warning">
                                <h6>{{ getError }}</h6>
                            </div>

                            <div class="modal-footer d-flex justify-content-evenly align-items-center">
                                <button class=" btn btn-secondary btn-lg" @click="skipOrderScan">Skip</button>
                                <button class=" btn btn-primary btn-lg" @click="opencam">Open</button>
                            </div>

                        </div>
                        <div v-else class="text-center my-5 shadow bg-light">
                            <div class="card p-3 d-flex align-items-center justify-content-center">
                                <p>Scannez Vos Commandes</p>
                            </div>
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
}
.qrcode-stream-camera{
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
}


</style>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'; // Import the specific component
import { onUnmounted, ref } from 'vue';
import { getRow, updateData } from '../../composition/crud.js';

export default {
    components: {
        QrcodeStream,
    },
    props: {
        getDataUrl: {
            type: String,
            required: true
        },
        updateDataUrl: {
            type: String,
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
            isPaused: ref(false),
            BonInfo: null,
            getError: null,
            orderRef: null,
            options: options,
            selected: selected,

        };
    },
    mounted() {
       /// this.isPaused = true;
        //if($("#orderScanner").modal("show")) this.isPaused=false
    },
    methods: {
        async onDetect(detectedCodes) {
            this.isPaused = true;
            this.orderRef = detectedCodes[0].rawValue
            console.log(detectedCodes[0].rawValue)
            alert(detectedCodes[0].rawValue)

            const getBonInfo = await getRow(`${this.getDataUrl + detectedCodes[0].rawValue}/get`)
            if (getBonInfo.error) {
                this.getError = getBonInfo.error
            } else {
                console.log("Bon Info")
                console.log(getBonInfo)
                this.BonInfo = getBonInfo
            }


        },
        skipOrderScan() {
            this.isPaused = false;
            this.BonInfo = null
            this.orderRef = null
            this.getError=null
        },
        async order_validate() {
            const updatedStatus = await updateData(this.updateDataUrl, { orderRef: this.orderRef });
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
    
    