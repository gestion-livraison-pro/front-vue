<template>
    <div class="mt-5 fixed-bottom ">
        <div class="card card-scan-cam mb-0 shadow">
            <div class="card-body text-center">
                <div class="camera-icon" data-bs-toggle="modal"
                                data-bs-target="#ScanQrUpdates" >
                    <i class="fas fa-qrcode"></i>
                </div>
            </div>
        </div>
    </div>




    <div ref="ScanQrUpdates" id="ScanQrUpdates" class="modal modal-lg fade" tabindex="-1" aria-labelledby="orderStatusLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="orderStatusLabel">selectionner un statut</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4" v-for="st in Statuses" :key="st.Id">
                            <div class="card" :style="{ backgroundColor: st.Couleur, color:'#ffffff', cursor:'pointer' }"  @click="scan(st.Id,st.Nom,st.Couleur)" >
                                <div class="card-body text-center">
                                    <span>{{ st.Nom }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->



</template>

<style scoped>

.card.card-scan-cam{
    height: 50px;
    border-radius: .25rem .25rem 0 0;
    background: linear-gradient(to right, #0d3348, #0A2635);
}
.fixed-bottom {
    position: fixed;
    bottom: 0;
    /* Changed to 0 to place it at the bottom */
    left: 0;
    right: 0;
    z-index: 1000;
    height: 50px;

}

.camera-icon {
  position: relative;
  bottom: 40px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: #FF8C00;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.camera-icon i {
  font-size: 24px;
}
</style>



<script>

import { ref, onMounted, watch } from 'vue';
import { getRow, fetchData, updateData } from '../../composition/crud.js';


export default {
    data() {
        return {
            formData: {
                newStatus_id:null,
                newStatus:null,
                newStatus_color:null,
                isActive:true,
            }
        }
    },
    methods: {
        scan(id,name,color){
            this.formData.newStatus_id=id
            this.formData.newStatus=name
            this.formData.newStatus_color=color
            this.formData.isActive=false

            this.$emit('select-new-status', this.formData); // Emit the custom event with updated status
            console.log("data sent")
            console.log( this.formData)

            
            $("#ScanQrUpdates").modal("toggle")
            $("#orderScanner").modal("toggle")

        }

    },

    setup() {
        const Statuses = ref(null);
        onMounted(async () => {

            try {
                const response = await fetchData(`https://api.gestion-livraison.pro/api/role/order/statuses/modify/permissions`);
                Statuses.value = response;
                console.log(Statuses);
            } catch (error) {
                console.error("Error fetching order details:", error);
            }

        });
        return {
            Statuses,
        };
    }
};


</script>