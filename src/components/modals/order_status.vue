<template>
    <div  ref="orderStatus" id="orderStatus" class="modal modal-lg fade" tabindex="-1" aria-labelledby="orderStatusLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div v-if="Role != 'customer'" class="modal-header">
                    <h5 class="modal-title mt-0" id="orderStatusLabel">Changer Status | {{ orderref }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4" v-for="st in Statuses" :key="st.Id">
                            <div class="card" :style="{ backgroundColor: st.Couleur }"
                                @click="selectStatus(st.Couleur, st.Nom, st.Id)" data-bs-dismiss="modal">
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


    <div ref="AdresseChange" id="AdresseChange" class="modal modal-lg fade" tabindex="-1"
        aria-labelledby="AdresseChangeLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div v-if="Role != 'customer'" class="modal-header">
                    <h5 class="modal-title mt-0" id="AdresseChangeLabel">Changer Changement d'adresse | {{ orderref }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="row">

                            <input_text v-model="Nom" label="Nom de Destinataire" type="text" Class_Content="col-md-6 mt-4"
                                :value="formAdresseChange.Nom" @update:value="formAdresseChange.Nom = $event" />

                            <input_text v-model="Téléphone" label="Téléphone" type="phone" Class_Content="col-md-6 mt-4"
                                :value="formAdresseChange.Téléphone" @update:value="formAdresseChange.Téléphone = $event" />
                        </div>

                        <div class="row">
                            <input_text v-model="Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4"
                                :value="formAdresseChange.Adresse" @update:value="formAdresseChange.Adresse = $event" />
                        </div>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-primary" @click="submitAdresseChange">Valider</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


    <div ref="orderStatusConfirmation" id="orderStatusConfirmation" class="modal modal-lg fade" tabindex="-1"
        aria-labelledby="orderStatusConfirmationLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="orderStatusConfirmationLabel">Confirmation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">



                    <p>voullez vous vraiement changer le statut</p>

                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="card col-5 mx-1" :style="{ backgroundColor: old_status_color }">
                            <div class="card-body text-center d-flex align-items-center justify-content-center">
                                <span>{{ old_status }}</span>
                            </div>
                        </div>
                        <div class="col-1 text-center mx-1 d-flex align-items-center justify-content-center "><i class="fas fa-arrow-right fa-2x"></i></div>
                        <div class="card col-5 mx-1 d-flex justify-content-end" :style="{ backgroundColor: newStatusColor }">
                            <div class="card-body text-center d-flex align-items-center justify-content-center">
                                <span>{{ newStatusName }}</span>
                            </div>
                        </div>
                    </div>





                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Non</button>
                    <button type="button" class="btn btn-primary" @click="submitFormUpdate">Oui</button>
                </div>


            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<style scoped>
.card {
    cursor: pointer;
}

.card span {
    color: #ffffff;
    text-align: center;
}
</style>
  
<script>

import { ref, onMounted, watch } from 'vue';
import { getRow, fetchData, updateData, getRole } from '../../composition/crud.js';
import input_text from '../../components/inputs/input.vue'
import SelectDropdown from '../../components/inputs/select.vue';

export default {
    components: {
        input_text,
        SelectDropdown,
    },
    props: {
        orderId: {
            type: String,
            required: true
        },
        orderref: {
            type: String,
            required: true
        },
        old_status: {
            type: String,
            required: true
        },
        old_status_color: {
            type: String,
            required: true
        },
        old_status_id: {
            type: String,
            required: true
        },
        //Statuses:[],
    },

    data(props) {
        return {
            newStatusName: null,
            newStatusColor: null,
            formData: {
                nextStatusId: null,
                orderId: null,
            },
            formAdresseChange: {
                Nom: "",
                Adresse: "",
                Téléphone: "",
                orderId: null,
            },

            Role: getRole(),
        }
    },
    methods: {
        async submitFormUpdate() {
            const updatedStatus = await updateData(`https://api.gestion-livraison.pro/api/order/status/update/selected`, this.formData)
            this.$emit('status-updated', updatedStatus.order); // Emit the custom event with updated status
            $('#orderStatusConfirmation').modal('toggle');
        },
        async submitAdresseChange() {
            const updatedStatus = await updateData(`https://api.gestion-livraison.pro/api/order/${this.orderId}/adresse/update/`, this.formAdresseChange)
            this.$emit('status-updated', updatedStatus.order); // Emit the custom event with updated status
            $('#AdresseChange').modal('toggle');
        },
        selectStatus(StatusColor, StatusName, StatuId) {
            this.newStatusColor = StatusColor;
            this.newStatusName = StatusName;

            this.formData.nextStatusId = StatuId;

            this.formData.orderId = this.orderId;

            if (StatuId == 34) {
                this.formAdresseChange.orderId = this.orderId;

                $("#AdresseChange").modal("show")
            }
            else $("#orderStatusConfirmation").modal("toggle")
        }

    },
    async mounted() {
        console.log("newOrderId-setup");

        try {
            const response = await fetchData(
                "https://api.gestion-livraison.pro/api/role/order/statuses/modify/permissions"
            );
            this.Statuses = response;
            console.log(this.Statuses);
        } catch (error) {
            console.error("Error fetching order details:", error);
        }
    },
    watch: {
        "props.orderId": async function (newOrderId) {
            console.log("newOrderId1" + newOrderId);
            if (newOrderId) {
                console.log(newOrderId);
                this.OrderID = newOrderId;
            }
        },
    },

};


</script>