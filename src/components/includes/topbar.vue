<template>
    <header id="page-topbar">


        <div class="d-flex">
            

            <div class="navbar-header">
                <button @click="toggleMenu" type="button" class="button-menu-mobile waves-effect d-lg-none d-sm-inline" id="vertical-menu-btn">
                    <i class="mdi mdi-menu"></i>
                </button>
                <div class="d-flex ms-auto">
                    <!-- Search input -->
                    <div class="search-wrap" id="search-wrap">
                        <div class="search-bar">
                            <input class="search-input form-control" placeholder="Search">
                            <a href="#" class="close-search toggle-search" data-target="#search-wrap">
                                <i class="mdi mdi-close-circle"></i>
                            </a>
                        </div>
                    </div>




                    <div v-if="Role!='deliveryman'" class="dropdown d-inline-block">
                        <router-link to="/messages"  class="btn header-item noti-icon waves-effect d-flex align-items-center">
                            <i class="fab fa-rocketchat"></i>
                            <span v-if="Role!='customer'"   style="background: #FF8C00;" class="badge rounded-pill">{{ permissions.NotificationsCount.messages }}</span>
                        </router-link>
                    </div>

                

                    <div v-if="false" class="dropdown d-inline-block">
                        <button type="button" class="btn header-item noti-icon waves-effect"
                            id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="mdi mdi-bell-outline"></i>
                            <span class="badge bg-danger rounded-pill">3</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div class="p-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="m-0 font-size-16"> Notification (3) </h5>
                                    </div>
                                </div>
                            </div>

                            <div data-simplebar style="max-height: 230px;">
                                <a href="" class="text-reset notification-item d-block active">
                                    <div class="d-flex">
                                        <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-success rounded-circle font-size-16">
                                                <i class="mdi mdi-cart-outline"></i>
                                            </span>
                                        </div>
                                        <div class="flex-1">
                                            <h6 class="mt-0 font-size-15 mb-1">Your order is placed</h6>
                                            <div class="font-size-12 text-muted">
                                                <p class="mb-1">Dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="text-reset notification-item d-block">
                                    <div class="d-flex">
                                        <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-danger rounded-circle font-size-16">
                                                <i class="mdi mdi-message-text-outline"></i>
                                            </span>
                                        </div>
                                        <div class="flex-1">
                                            <h6 class="mt-0 font-size-15 mb-1">New Message received</h6>
                                            <div class="font-size-12 text-muted">
                                                <p class="mb-1">You have 87 unread messages</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="text-reset notification-item d-block">
                                    <div class="d-flex">
                                        <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-info rounded-circle font-size-16">
                                                <i class="mdi mdi-glass-cocktail"></i>
                                            </span>
                                        </div>
                                        <div class="flex-1">
                                            <h6 class="mt-0 font-size-15 mb-1">Your item is shipped</h6>
                                            <div class="font-size-12 text-muted">
                                                <p class="mb-1">It is a long established fact that a reader will</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="text-reset notification-item d-block">
                                    <div class="d-flex">
                                        <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-success rounded-circle font-size-16">
                                                <i class="mdi mdi-message-text-outline"></i>
                                            </span>
                                        </div>
                                        <div class="flex-1">
                                            <h6 class="mt-0 font-size-15 mb-1">New Message received</h6>
                                            <div class="font-size-12 text-muted">
                                                <p class="mb-1">You have 87 unread messages</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="" class="text-reset notification-item d-block">
                                    <div class="d-flex">
                                        <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-warning rounded-circle font-size-16">
                                                <i class="mdi mdi-cart-outline"></i>
                                            </span>
                                        </div>
                                        <div class="flex-1">
                                            <h6 class="mt-0 font-size-15 mb-1">Your order is placed</h6>
                                            <div class="font-size-12 text-muted">
                                                <p class="mb-1">Dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div class="p-2 border-top">
                                <div class="d-grid">
                                    <a class="btn btn-sm btn-link font-size-14 text-start" href="javascript:void(0)">
                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img class="rounded-circle header-profile-user me-2"
                                :src="profileimg"
                                alt="Header Avatar">
                            <span class="d-none d-md-inline-block ms-1 text-muted">{{ R_order_status }}</span>
                            <span class="d-none d-md-inline-block ms-1">{{ username }} <i
                                    class="mdi mdi-chevron-down"></i></span>

                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                            <!-- item-->
                            <router-link to="/profile" class="dropdown-item waves-effect">
                                <i class="dripicons-user font-size-16 align-middle d-inline-block me-1"></i>
                                    <span>Profile</span>
                                </router-link>

                                <router-link v-if="Role=='Admin'" to="/informations" class="dropdown-item waves-effect">
                                <i class="dripicons-user font-size-16 align-middle d-inline-block me-1"></i>
                                    <span>Informations</span>
                                </router-link>


                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#" @click="logout"><i
                                    class="dripicons-power-off font-size-16 align-middle me-1 text-danger"></i> Se
                                Déconnecter</a>
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i class="mdi mdi-spin mdi-cog"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </header>
    
</template>



<script>


import { mapState, mapActions } from 'vuex';
import { fetchData, getRole, addData } from '../../composition/crud.js';
import { useStore } from 'vuex'; // Import useStore to access the store instance

const store = useStore(); // Get the Vuex store instance

export default {
    computed: {
        ...mapState('auth', ['username','profileimg']),
        ...mapState('permissions', ['permissions']),

    },
    data() {
        return {
            Role: getRole()
        }
    },
    methods: {
        ...mapActions('auth', ['setIsAuth']), // Map the setUsername action from the 'auth' module
        ...mapActions('permissions', ['setPermissions']), // Map the setUsername action from the 'auth' module

        async logout() {
            try {
                await addData('https://api.gestion-livraison.pro/api/logout');
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                this.setIsAuth(false)
                this.setPermissions([])
                this.$router.push('/login'); // Redirect to the login page

            } catch (error) {
                console.error('Logout error:', error);
            }
        },
        toggleMenu() {
            $('body').toggleClass('sidebar-enable');
        },
    
    }

};


</script>