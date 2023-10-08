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
            <h5 class="mb-2">Ramassage Info</h5>
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

            </div>
          </div>


          <div class="my-3" v-if="orderDetails && orderDetails.products.length && Role!='deliveryman'">
            <h5>Produits</h5>
            <div class="row p-3 bg-light">
              <div class="col-7">
                <h6>Nom</h6>
              </div>
              <div class="col-2">
                <h6>Qte</h6>
              </div>
            </div>
            <div class="row p-3 border d-flex align-items-center" v-for="prod in orderDetails.products" :key="prod.id">
              <div class="col-7">
                <div class="d-flex flex-row align-items-center">
                  <img :src="prod.Image" class="rounded-5 avatar-xl mx-1" style="width: 70px; height: 70px;" alt="" />
                  <p class="mx-4">{{ prod ? prod.Nom : '' }}</p>
                </div>

              </div>
              <div class="col-2">
                <p class="mx-4">{{ prod ? prod.Quantite : '' }}</p>
              </div>
              <div class="col-3">
                <p class="mx-4">{{ prod ? prod.Type : '' }}</p>
              </div>
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
          const response = await getRow(`https://api.gestion-livraison.pro/api//pickup/${props.orderId}/stock/products/get`);
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