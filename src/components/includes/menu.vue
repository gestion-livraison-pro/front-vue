<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="vertical-menu">

        <div data-simplebar class="h-100">

           

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <div class="navbar-brand-box text-center">
                <a href="/" class="logo logo-light">
                    <span class="logo-sm my-3">
                        <img src="https://api.gestion-livraison.pro/public/images/logo-light.png" class="my-3" alt="" height="60">
                    </span>
                    <span class="logo-lg my-3">
                        <img src="https://api.gestion-livraison.pro/public/images/logo-light.png"  class="my-3"  alt="" height="60">
                    </span>
                </a>
                <a href="/" class="logo logo-dark">
                    <span class="logo-sm my-3">
                        <img src="https://api.gestion-livraison.pro/public/images/logo-light.png"  class="my-3"  alt="" height="40">
                    </span>
                    <span class="logo-lg my-3">
                        <img src="https://api.gestion-livraison.pro/public/images/logo-light.png"  class="my-3"  alt="" height="40">
                    </span>
                </a>
            </div>

            <div class="d-flex justify-content-between align-items-center text-light p-3 pb-0 d-md-none">
                <img src="https://api.gestion-livraison.pro/public/images/logo-light.png" class="my-3" alt="" height="60">
                <i class="fas fa-times bg-dark p-2" style="cursor: pointer;" @click="toggleMenu"></i>
            </div>
                <!-- Left Menu Start -->
                <ul class="metismenu list-unstyled mt-3" id="metismenu">
                    <li class="menu-title text-uppercase">Main menu</li>
                    <li class="mm-parent">
                        <router-link to="/" :class="{ 'active': isKeywordInRoute('/dashboard') }">
                            <!---  <span class="badge rounded-pill bg-info float-end">2</span>-->
                            <i class="dripicons-meter"></i>
                            <span> Dashboard</span>
                        </router-link>
                    </li>

                    <!---   <li class="menu-title">Utilisateurs</li>-->

                    <li v-if="isModuleInclude('Clients')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect" aria-expanded="true">
                            <i class="fas fa-user-check"></i>
                            <span>Clients</span>
                        </a>

                        <ul :class="['sub-menu', 'mm-collapse']" aria-expanded="false">
                            <li>
                                <router-link to="/customers" :class="{ 'active': isKeywordInRoute('/customers') }">
                                    <span> liste des clients </span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('AjouterClients')">
                                <router-link to="/customer/new" class="waves-effect">
                                    <span>Nouveau Client </span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('ClientsTarifs')">
                                <router-link to="/customer/fees" class="waves-effect">
                                    <span>Clients Tarifs </span>
                                </router-link>
                            </li>

                        </ul>
                    </li>

                    <li v-if="isModuleInclude('Livreurs')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-users"></i>
                            <span> Livreurs </span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <router-link to="/deliverymans"  :class="{ 'active': isKeywordInRoute('/deliverymans') }">
                                    <span>liste des livreurs </span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('AjouterLivreurs')">
                                <router-link to="/deliveryman/new" class="waves-effect">
                                    <span>Nouveau Livreur </span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('LivreursTarifs')">
                                <router-link to="/deliveryman/fees" class="waves-effect">
                                    <span>Livreurs Tarifs </span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li v-if="isModuleInclude('Utilisateurs')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-users-cog"></i>
                            <span> Utilisateurs </span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <router-link to="/users" class="waves-effect">
                                    <span>liste des utilisateurs</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('AjouterUtilisateurs')">
                                <router-link to="/user/new" class="waves-effect">
                                    <span>Nouveau utilisateur</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('Roles')">
                                <router-link to="/roles" class="waves-effect">
                                    <span>Roles</span>
                                </router-link>
                            </li>

                        </ul>
                    </li>


                    <!---   <li class="menu-title">principales</li>-->

                    <li class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-file-invoice-dollar"></i>
                            <span> Factures </span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <!--      <li v-if="isModuleInclude('CommandesFactures')">
                        <router-link to="/orders/invoices" class="waves-effect">
                                    <span class="badge rounded-pill bg-info float-end">2</span>
                                    <span>Commandes Factures</span>
                                </router-link>  
                            </li>-->
                            <li v-if="isModuleInclude('FacturesClients')">
                                <router-link to="/invoices/customers" class="waves-effect"
                                    :class="{ 'mm-active': isKeywordInRoute('invoice') }">
                                    <span>Factures Client</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('FacturesLivreurs')">
                                <router-link to="/invoices/deliverymans" class="waves-effect">
                                    <span>Factures Livreur</span>
                                </router-link>
                            </li>

                        </ul>
                    </li>

                    <li class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-file-alt"></i>
                            <span> Bons </span>

                            <span v-if="permissions.NotificationsCount.pickups" class="badge rounded-pill float-end"
                                style="background: #FF8C00;">{{ permissions.NotificationsCount.pickups }}</span>

                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li v-if="isModuleInclude('BonDeLivraison')">
                                <router-link to="/bons/delivery" class="waves-effect">
                                    <span>Bon de livraison</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('BonDeRamassage')">
                                <router-link to="/bons/pickup" class="waves-effect">
                                    <span>Bon de Ramassage</span>

                                    <span v-if="permissions.NotificationsCount.bon_pickups" class="badge rounded-pill float-end"
                                        style="background: #FF8C00;">{{ permissions.NotificationsCount.bon_pickups }}</span>

                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('BonDeRamassageStock')">
                                <router-link to="/bons/stock" class="waves-effect">
                                    <span>Bon de Stock</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('BonDeRetourClient')">
                                <router-link to="/bons/customer/return" class="waves-effect">
                                    <span>Bon de Retour Client</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('BonDeRetourLivreur')">
                                <router-link to="/bons/delivery/return" class="waves-effect">
                                    <span>Bon de Retour Livreur</span>
                                </router-link>
                            </li>

                        </ul>
                    </li>

                    <li v-if="isModuleInclude('Commandes') && Role != 'deliveryman'" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-plus"></i>
                            <span> Nouvelle Commandes </span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">


                            <li v-if="isModuleInclude('AjouterCommande')">
                                <router-link to="/order/new" class="waves-effect">
                                    <span>Ajouter Commande</span>
                                </router-link>
                            </li>

                            <li v-if="isModuleInclude('AjouterCommande')">
                                <router-link to="/orders/import" class="waves-effect">
                                    <span>Import Commandes</span>
                                </router-link>
                            </li>

                        </ul>
                    </li>
                    <li v-if="isModuleInclude('Commandes')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-box-open"></i>
                            <span> Commandes </span>

                            <span v-if="totalOrderCount" class="badge rounded-pill float-end"
                                style="background: #FF8C00;">{{ totalOrderCount }}</span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <router-link to="/orders" class="waves-effect">
                                    <span>Tous les Commandes</span>
                                </router-link>
                            </li>


                            <li v-for="item in permissions.OrderStatus" :key="item.id">
                                <router-link v-if="item.Menu === 1" :to="`/orders/status/${item.id}`" class="waves-effect">
                                    <span>{{ item.Nom }}</span>
                                    <span v-if="item.Count" class="badge rounded-pill float-end"
                                        style="background: #FF8C00;">{{ item.Count }}</span>
                                </router-link>
                            </li>

                        </ul>
                    </li>
                    <li v-if="isModuleInclude('CommandesMatches')" class="mm-parent">
                        <router-link to="/orders/match" class="waves-effect">
                            <i class="fas fa-exchange-alt"></i>
                                    <span>Match Adresses</span>
                                    <span v-if="totalOrderCount" class="badge rounded-pill float-end"
                                style="background: #993FF9;">New</span>
                        </router-link>
                    </li>

                    <!---  <li v-if="isModuleInclude('Warehouse')">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="dripicons-message"></i>
                            <span> Warehouse </span>
                        </a>
                        
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li  v-for="item in OrdersStatus" :key="item.Id">
                                <router-link v-if="item.Menu===1" :to="`/orders/status/${item.Id}`" class="waves-effect">
                                    <span class="badge rounded-pill bg-info float-end">2</span>
                                    <span>{{ item.Nom }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>-->

                    <li v-if="isModuleInclude('Ramassages')" class="mm-parent">

                        <router-link to="/pickups" class="waves-effect">
                            <i class="fas fa-truck-pickup"></i>
                            <!---     <span class="badge rounded-pill bg-info float-end">0</span>-->
                            <span>Ramassages</span>

                            <span v-if="permissions.NotificationsCount.pickups && Role != 'customer'"
                                class="badge rounded-pill float-end" style="background: #FF8C00;">{{
                                    permissions.NotificationsCount.pickups }}</span>

                        </router-link>
                    </li>

                    <li v-if="isModuleInclude('Stocks')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-warehouse"></i>
                            <span> Stocks </span>

                            <span v-if="permissions.NotificationsCount.product && Role != 'customer'"
                                class="badge rounded-pill float-end" style="background: #FF8C00;">{{
                                    permissions.NotificationsCount.product }}</span>

                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <router-link to="/stocks" class="waves-effect">
                                    <span>liste des Produits</span>

                                    <span v-if="permissions.NotificationsCount.product && Role != 'customer'"
                                        class="badge rounded-pill float-end" style="background: #FF8C00;">{{
                                            permissions.NotificationsCount.product }}</span>

                                </router-link>
                            </li>


                            <li v-if="isModuleInclude('Stocks')">
                                <router-link to="/product/new" class="waves-effect">
                                    <span>Nouveau Produit</span>
                                </router-link>
                            </li>


                            <!---  <li>
                                <router-link to="/stock/new" class="waves-effect">
                                    <span class="badge rounded-pill bg-info float-end">2</span>
                                    <span>Nouveau Stock</span>
                                </router-link>
                            </li>-->
                        </ul>
                    </li>

                    <li v-if="isModuleInclude('Embalages')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-box"></i>
                            <span> Embalages </span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <router-link to="/packages" class="waves-effect">
                                    <span>liste des Embalages</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/package/new" class="waves-effect">
                                    <span>Nouveau Embalage</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <!---   <li class="menu-title">Service Client</li>-->

                    <li v-if="isModuleInclude('Tickets')" class="mm-parent">
                        <router-link to="/tickets" class="waves-effect">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Tickets</span>

                            <span v-if="permissions.NotificationsCount.tickets && Role != 'customer'"
                                class="badge rounded-pill float-end" style="background: #FF8C00;">{{
                                    permissions.NotificationsCount.tickets }}</span>

                        </router-link>
                    </li>

                    <li v-if="isModuleInclude('Messages')" class="mm-parent">
                        <router-link to="/messages" class="waves-effect">
                            <i class="dripicons-message"></i>
                            <span>Messages</span>

                            <span v-if="permissions.NotificationsCount.messages && Role != 'customer'"
                                class="badge rounded-pill float-end" style="background: #FF8C00;">{{
                                    permissions.NotificationsCount.messages }}</span>

                        </router-link>
                    </li>

                    <!---   <li class="menu-title">Reglages</li>-->

                    <li v-if="isModuleInclude('Paramettres')" class="mm-parent">
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <i class="fas fa-cogs"></i>
                            <span> Paramettres </span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <router-link to="/notes" class="waves-effect">
                                    <i class="dripicons-message"></i>

                                    <span>Remarques</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/orders/status" class="waves-effect">
                                    <i class="dripicons-message"></i>
                                    <span>Status des Commandes</span>
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/cities" class="waves-effect">
                                    <i class="dripicons-message"></i>
                                    <span>Villes</span>
                                </router-link>

                            </li>

                            <li>
                                <router-link to="/expenses" class="waves-effect">
                                    <i class="dripicons-message"></i>
                                    <span>Expenses</span>
                                </router-link>

                            </li>
                        </ul>
                    </li>



                </ul>
            </div>
            <!-- Sidebar -->
        </div>
    </div>
    <!-- Left Sidebar End -->
</template>


<script>


import { mapState, mapActions } from 'vuex';
import { fetchData } from '../../composition/crud.js';

import { useStore } from 'vuex'; // Import useStore to access the store instance

const store = useStore(); // Get the Vuex store instance


export default {
    data() {
        return {
            ordersNitofocationCount: 0,
            userModules: [],
            OrdersStatus: [],
            NotificationsCounts: [],
            Role: "",
        }
    },
    async mounted() {

        try {
            //  const response = await fetchData("https://api.gestion-livraison.pro/api/permissions");
            this.NotificationsCounts =  this.permissions.NotificationsCount
            this.userModules =  this.permissions.RoleAccess
            this.Role =  this.permissions.Role

                $(document).ready(function () {
                    $("#metismenu").metisMenu();

                });

            this.addActive();


        } catch (error) {
            // Handle error if needed
            console.error('Error fetching permissions:', error);
        }



    },
    computed: {
                ...mapState('permissions', ['permissions']),

        isModuleInclude() {
            return (module) => this.userModules.map((role) => role.module).includes(module);
        },
        totalOrderCount() {
            // Calculate the sum of item.Count for all OrdersStatus items
            return this.permissions.OrderStatus.reduce((total, item) => {
                if (item.Menu === 1) {
                    return total + (item.Count || 0);
                }
                return total;
            }, 0);
        },
    },

    methods: {
        isKeywordInRoute(keyword) {
            const result = this.$route.path.includes(keyword);
            console.log(`Checking keyword ${keyword}, Result: ${result}`);
            return result;
        },
        addActive() {
            // Check if any <li> element with the class "active-item" exists
            const activeItem = document.querySelector('.active');

            if (activeItem) {
                // Add the "mm-active" class to its parent <li>
                const parentLi = activeItem.closest('.mm-parent');
                if (parentLi) {
                    parentLi.classList.add('mm-active');
                }
            }
        },
        ...mapActions('permissions', ['setPermissions']), // Map the setUsername action from the 'auth' module

        toggleMenu() {
            $('body').toggleClass('sidebar-enable');
        },

    }
};



</script>

