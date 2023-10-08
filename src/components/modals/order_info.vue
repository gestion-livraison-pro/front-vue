<template>
  <div id="orderInfo" class="modal modal-lg fade" tabindex="-1" aria-labelledby="orderInfoLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mt-0" id="orderInfoLabel">{{ orderDetails ? orderDetails.Ref : '' }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="my-3">
            <h5 class="mb-2">Destinataire</h5>
            <div class="row">
              <div class="col-6 p-3 border">
                <h6>Nom </h6>
                <p class="mx-4">{{ orderDetails ? orderDetails.Nom : '' }}</p>
              </div>
              <div class="col-6 p-3 border">
                <h6>Ville </h6>
                <p class="mx-4">{{ orderDetails ? orderDetails.Ville : '' }}</p>
              </div>
              <div class="col-md-6 p-3 border align-text-bottom">
                <h6>Adresse </h6>
                <p class="mx-4">{{ orderDetails ? orderDetails.Adresse : '' }}</p>
              </div>
              <div class="col-md-6 p-3 border align-text-bottom">
                <h6>Remarque </h6>
                <p class="mx-4">{{ orderDetails ? orderDetails.Remarque : '' }}</p>
              </div>




            </div>
          </div>


          <div class="my-3" v-if="orderDetails && orderDetails.products.length">
            <h5>Produits</h5>

            <div class="row" v-for="prod in orderDetails.products" :key="prod.id">
              <div>
                <div class="card p-3" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                  <div class="row">
                    <div class="col-md-1 col-2 d-flex flex-row">
                      
                      <img v-if="prod.img && Role != 'deliveryman'" class="rounded-5 avatar-sm" :src="'https://api.gestion-livraison.pro/'+prod.img" alt="Card image cap">
                      <img v-else class="rounded-5 avatar-sm" src="https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537_1280.png" alt="Card image cap">

                      
                    </div>
                    <div class="col-10 d-flex align-items-center justify-content-between flex-row">
                        <div class="d-flex flex-row text-start col-6 mx-1">
                          <strong class="" v-if="Role != 'deliveryman'">{{ prod ? prod.Nom : 'Produit' }} x {{ prod ? prod.Quantite : '' }}</strong>
                          <strong class="" v-else>Produit x {{ prod ? prod.Quantite : '' }}</strong>
                        </div>
                        <div class="d-flex align-items-end col-5">
                          <span>Type : {{ prod ? prod.Type : '' }}</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          

            <div v-if="orderDetails.Echange">

              <div class="text-center my-3">
                <i class="fas fa-exchange-alt fa-3x"></i>
              </div>


          <div class="card-body">
                <p v-if="false">Echange Ref : {{  orderDetails.Echange.OrderRef }}</p>

            <div class="row" v-for="prod in orderDetails.Echange.Produits" :key="prod.id">
              <div>
                <div class="card p-3" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                  <div class="row">
                    <div class="col-md-1 col-2 d-flex flex-row">
                      
                      <img v-if="prod.img && Role != 'deliveryman'" class="rounded-5 avatar-sm" :src="'https://api.gestion-livraison.pro/'+prod.img" alt="Card image cap">
                      <img v-else class="rounded-5 avatar-sm" src="https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537_1280.png" alt="Card image cap">

                      
                    </div>
                    <div class="col-10 d-flex align-items-center justify-content-between flex-row">
                        <div class="d-flex flex-row text-start col-6 mx-1">
                          <strong class="" v-if="Role != 'deliveryman'">{{ prod ? prod.Nom : '' }} x {{ prod ? prod.Quantite : '' }}</strong>
                          <strong class="" v-else>Produit x {{ prod ? prod.Quantite : '' }}</strong>
                        </div>
                        <div class="d-flex align-items-end col-5">
                          <span>Type : {{ prod ? prod.Type : '' }}</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              </div>
            </div>



          </div>




          <div class="row mt-3">
            <div class="col-6 text-start">
              <h5>Total : </h5>
            </div>
            <div class="col-6 text-end">
              <h5>{{ orderDetails ? orderDetails.Montant : '' }} DH</h5>
            </div>
          </div>

        </div>




        <div class="">
          <a :href="'tel:' + (orderDetails ? orderDetails.Téléphone : '')"
            class="btn btn-success waves-effect waves-light col-4"><i class="fas fa-2x fa-phone-alt"></i></a>
          <a :href="'sms:' + (orderDetails ? orderDetails.Téléphone : '') + '?body=Bonjour'"
            class="btn btn-primary waves-effect waves-light col-4"><i class="far fa-2x fa-envelope"></i></a>
          <a :href="'https://wa.me/' + (orderDetails ? orderDetails.Téléphone : '')" target="__blank"
            class="btn btn-primary waves-effect waves-light col-4 btn-whatsapp"><i class="fab fa-2x fa-whatsapp"></i></a>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>

import { ref, onMounted, watch } from 'vue';
import { getRow, getRole } from '../../composition/crud.js';

export default {
  props: {
    orderId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      Role: getRole(),
    }
  },

  setup(props) {
    console.log("newOrderId-setup");

    const orderDetails = ref(null);

    onMounted(async () => {
      console.log("newOrderId-mouted");

      if (props.orderId) {
        try {
          const response = await getRow(`https://api.gestion-livraison.pro/api/order/${props.orderId}/get`);
          orderDetails.value = response;
          console.log(response);
        } catch (error) {
          console.error("Error fetching order details:", error);
        }
      }
    });

    // Watch for changes in orderId prop and fetch order details again if it changes
    watch(() => props.orderId, async (newOrderId) => {
      console.log("newOrderId1");
      if (newOrderId) {
        console.log("newOrderId");

        try {
          const response = await getRow(`https://api.gestion-livraison.pro/api/order/${newOrderId}/get`);
          orderDetails.value = response;
          console.log(response);
        } catch (error) {
          console.error("Error fetching order details:", error);
        }
      }
    });

    return {
      orderDetails,
    };
  }
};


</script>