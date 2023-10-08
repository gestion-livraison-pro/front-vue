

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">


        <form @submit.prevent="">
          <div class="row">
            <div class="col-md-8">

              <!----code d'envoi-->
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <input_text v-model="Ref" label="Code d'envoi" type="text" Class_Content="col-md-12 mt-4"
                      :value="formData.Ref" @update:value="formData.Ref = $event" />
                  </div>
                </div>
              </div>


              <!----destinataire-->
              <div class="card">
                <div class="card-body">
                  <h5>Destinataire Informations</h5>
                  <div class="row">

                    <input_text v-model="Nom" label="Nom de Destinataire" type="text" Class_Content="col-md-6 mt-4"
                      :value="formData.Nom" @update:value="formData.Nom = $event" />

                    <input_text v-model="Téléphone" label="Téléphone" type="phone" Class_Content="col-md-6 mt-4"
                      :value="formData.Téléphone" @update:value="formData.Téléphone = $event" />
                  </div>

                  <div class="row">
                    <input_text v-model="Email" label="E-mail" type="text" Class_Content="col-md-6 mt-4"
                      :value="formData.Email" @update:value="formData.Email = $event" />


                    <SelectDropdown v-model="Ville" :value="formData.Ville"
                      apiUrl="https://api.gestion-livraison.pro/api/cities" fieldName="Nom"
                      first_option="Selectionner une Categorie" label="Ville" Class_Content="col-md-6 mt-4"
                      @update:value="formData.Ville = $event" />

                  </div>

                  <div class="row">
                    <input_text v-model="Adresse" label="Adresse" type="text" Class_Content="col-md-12 mt-4"
                      :value="formData.Adresse" @update:value="formData.Adresse = $event" />
                  </div>
                </div>
              </div>


              <!----produits ramasssage-->
              <div class="card">
                <div class="card-body">
                  <h5>Produits</h5>

                  <div class="row my-4 mx-1 ">
                    Depuis Stock
                    <checkd v-model="si_Stock" :value="formData.si_Stock" id_check="is_stock_product"
                      Class_Content="col-md-1 mb-1 mb-sm-0" :is_checked="formData.si_Stock"
                      :checked="formData.si_Stock === 1" @update:value="formData.si_Stock = $event" />
                  </div>

                  <div v-if="formData.si_Stock === 1">
                  
                    <div class="row p-3 border-bottom">
                      <div v-for="selected_product in cartItems" :key="selected_product.id" class="col-md-12">

                        <div class="card shadow">
                          <div class="row">
                            <div class="col-2 d-md-flex d-none">
                              <img class="img-fluid" src="https://via.placeholder.com/300" alt="Card image cap">

                            </div>
                            <ul class="list-group list-group-flush col-md-10 col-sm-12 p-0 border shadow">
                              <li class="list-group-item">
                                <div class="d-flex flex-row justify-content-between align-items-center">
                                  <div class="d-flex flex-row">
                                    <strong class="">{{ selected_product.Titre }}</strong>
                                    
                                  </div>

                                  <button class="btn btn-danger m-0 0-0" @click="removeFromCart(selected_product.id)"> <i
                                      class="fas fa-times"></i></button>
                                </div>
                              </li>
                              <li class="list-group-item">
                                <div class="d-flex row justify-content-between align-items-center">
                                  <p class="d-flex justify-content-between align-items-center col-md-5 mb-3">
                                    <span class="col-6">Quantité Stock</span> <span class="badge bg-success mx-3">{{ selected_product.Quantite }}</span>
                                  </p>

                                  <div class="vertical-border col-md-2 d-md-flex d-none"></div>

                                  <p class="d-flex jsutify-content-between align-items-center mb-3 col-md-5">
                                    <span class="col-6">Quantité</span> <input_text v-model="selected_product.qte" type="number"
                                                       Class_Content="col-6 "
                                                        :value="selected_product.Qte" @update:value="selected_product.Qte = $event" />
                                  </p>
                                  
                                </div>

                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>

                    </div>


                    <div class="row d-flex align-items-center mt-4">
                      <h5 for="validationCustom01" class="form-label">Selectionner un Produit</h5>
                      <div class="col-md-12 mt-3">
                        <input type="text" class="form-control" id="validationCustom01" placeholder="Produit Exemple"
                          v-model="searchInput" />
                      </div>
                    </div>




                    <div v-if="filteredProducts.length">


                      <div class="row p-3">

                        <div v-for="product in filteredProducts" :key="product.id" class="col-md-6">
                          <div class="card shadow border">
                                        <div class="row">
                                            <div class="col-2 d-flex flex-row">
                                                <img class="img-fluid" src="https://via.placeholder.com/300"
                                                    alt="Card image cap">

                                            </div>
                                            <ul class="list-group list-group-flush col-10">
                                                <li class="list-group-item">
                                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                                        <div class="d-flex flex-row">
                                                            <strong class="">{{ product.Titre }}</strong>
                                                            <span class="badge bg-success mx-3">{{ product.Quantite
                                                            }}</span>
                                                        </div>
                                                        <div>
                                                            <button class="btn btn-primary w-100"
                                                                @click="addToCart(product)">
                                                                <i class="fas fa-plus"></i></button>
                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                        </div>

                      </div>
                    </div>
                    <div class="p-3 bg-light mt-4" v-else>
                      <p>aucun resultat</p>
                    </div>


                  </div>


                  <div v-else>
                    <div class="row">
                      <input_text v-model="TitresProduits" label="Titre des Produits" type="text"
                        Class_Content="col-md-6 mt-4" :value="formData.TitresProduits"
                        @update:value="formData.TitresProduits = $event" />

                      <input_text v-model="ProduitQuantite" label="Quantite" type="number" Class_Content="col-md-6 mt-4"
                        :value="formData.ProduitQuantite" @update:value="formData.ProduitQuantite = $event" />
                    </div>

                    <div class="row">
                      <SelectDropdown v-model="CategorieProduit" :value="formData.CategorieProduit"
                        apiUrl="https://api.gestion-livraison.pro/api/product/categories" fieldName="Nom"
                        first_option="Selectionner une Categorie" label="Categorie" Class_Content="col-md-6 mt-4"
                        @update:value="formData.CategorieProduit = $event" />


                      <SelectDropdown v-model="TypeProduit" :value="formData.TypeProduit"
                        apiUrl="https://api.gestion-livraison.pro/api/product/types" fieldName="Nom"
                        first_option="Selectionner le Type" label="Type" Class_Content="col-md-6 mt-4"
                        @update:value="formData.TypeProduit = $event" />
                    </div>
                  </div>






                </div>
              </div>


            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5>Commande Information</h5>


                  <div class="row">
                    <div class="row mt-4 mx-1 ">
                      Ouvrir le Colis
                      <checkd v-model="ouvrir_colis" :value="formData.ouvrir_colis" id_check="open_package"
                        Class_Content="col-md-1 mb-1 mb-sm-0 mx-3" :is_checked="formData.ouvrir_colis"
                        :checked="formData.ouvrir_colis === 1" @update:value="formData.ouvrir_colis = $event" />
                    </div>

                    <div class="row mt-4 mx-1 ">
                      Échange
                      <checkd v-model="formData.echange" :value="formData.echange" id_check="echange"
                        Class_Content="col-md-1 mb-1 mb-sm-0 mx-3" :is_checked="formData.echange"
                        :checked="formData.echange === 1" @update:value="formData.echange = $event" />
                    </div>

                    <input_text v-if="formData.echange" v-model="echangeValue" label="réf de la commande (échange uniquement)" type="text" Class_Content="col-md-12 mt-4"
                      :value="formData.echangeValue" @update:value="formData.echangeValue = $event" />


                    <SelectDropdown v-if="Role != 'customer'" v-model="ClientID" :value="formData.ClientID"
                      apiUrl="https://api.gestion-livraison.pro/api/customers" fieldName="Nom"
                      first_option="Selectionner le Client" label="Client" Class_Content="col-md-12 mt-4"
                      @update:value="formData.ClientID = $event" />

                    <input_text v-model="PrixTotal" label="Prix Total (Frais Livraison inclus)" type="text"
                      Class_Content="col-md-12 mt-4" :value="formData.PrixTotal"
                      @update:value="formData.PrixTotal = $event" />

                    <texterea_text v-model="Commentaire" label="Commentaire" type="text" Class_Content="col-md-12 mt-4"
                      :value="formData.Commentaire" @update:value="formData.Commentaire = $event" />

                    <button_simple @click="submitForm" type="submit" Class_Content="col-md-12 mt-4"
                      btn_text="Ajouter Commande" />
                  </div>



                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
.vertical-border {
  width: 0.25rem; 
  height: 100px; /* Adjust the height as needed */
  border-left:1px solid #eee ;
  
}
</style>

<script setup>

import input_text from '../../components/inputs/input.vue'
import button_simple from '../../components/buttons/simple.vue'
import SelectDropdown from '../../components/inputs/select.vue';
import checkd from '../../components/inputs/check.vue';
import texterea_text from '../../components/inputs/texterea.vue'


import { ref, onMounted, computed } from 'vue';
import { addData, fetchData, getRole } from '../../composition/crud.js';



const searchInput = ref('');
const cartItems = ref([]);
const data = ref([]);

const formData = ref({
  Ref: '',
  Nom: '',
  Téléphone: '',
  Email: '',
  Ville: '',
  Adresse: '',
  TitresProduits: "",
  TypeProduit: "",
  CategorieProduit: "",
  ProduitQuantite: "",
  PrixTotal: "",
  Commentaire: "",
  si_Stock: 1,
  ouvrir_colis: 1,
  ClientID: "",
  echange: 0,
  echangeValue: null,
});

const Role = getRole();

onMounted(async () => {
  console.log("Mounted");
  try {
    const response = await fetchData('https://api.gestion-livraison.pro/api/products');
    console.log(response);
    if (response.length > 0) {
      data.value = response;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const filteredProducts = computed(() => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  console.log(searchTerm);
  if (searchTerm === '') return data.value;

  return data.value.filter((product) => {
    return product.Titre.toLowerCase().includes(searchTerm);

  });
});

const addToCart = (product) => {
  const isInCart = cartItems.value.some((item) => item.id === product.id);

  if (!isInCart) {
    product.Qte=1
    cartItems.value.push(product);
  } else alertify.error("le produit est deja selectionne");

};

const removeFromCart = (productId) => {
  const index = cartItems.value.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};

const submitForm = async () => {
  formData.value.selectedProducts = cartItems.value;
  await addData("https://api.gestion-livraison.pro/api/order/new", formData.value);
};

</script>