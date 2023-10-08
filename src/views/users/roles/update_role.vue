
                     


<template>
    <heading pageTitle="Nouveau Role" />

    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <form @submit.prevent="">
                    <div class="card">
                        <div class="card-body">
                            <input_text v-model="Nom" label="Titre du Role" type="text" Class_Content="col-md-12 mt-4"
                                :value="formData.Nom" @update:value="formData.Nom = $event" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card ">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Utilisateurs</h5>
                                            <p>Access to all users</p>
                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd v-model="si_Stock" id_check="role_Utilisateurs" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Utilisateurs', $event)"
                                                :is_checked="isModuleChecked('Utilisateurs')" />

                                            <a v-if="formData.PermissionsModules.includes('Utilisateurs')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#utilisateurs_mise_a_jour_role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>

                                        </div>
                                    </div>



                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#utilisateurs_mise_a_jour_role" id="utilisateurs_mise_a_jour_role">
                                        <b>Client Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Utilisateurs</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_AjouterUtilisateurs" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterUtilisateurs', $event)"
                                                            :is_checked="isModuleChecked('AjouterUtilisateurs')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Utilisateurs</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierUtilisateurs" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierUtilisateurs', $event)"
                                                            :is_checked="isModuleChecked('ModifierUtilisateurs')" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Commandes</h5>
                                            <p>Access to selected commandes status</p>
                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Commandes" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Commandes', $event)"
                                                :is_checked="isModuleChecked('Commandes')" />

                                            <a v-if="formData.PermissionsModules.includes('Commandes')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Commande-status-role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample" id="Commande-status-role">
                                        <b>Commande Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Commande</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_Ajouter_Commandes" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterCommande', $event)"
                                                            :is_checked="isModuleChecked('AjouterCommande')" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Commande</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_Modifier_Commandes" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierCommande', $event)"
                                                            :is_checked="isModuleChecked('ModifierCommande')" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Changement d'Adresse matche</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_CommandesMatches" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('CommandesMatches', $event)"
                                                            :is_checked="isModuleChecked('CommandesMatches')" />

                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Commandes Statuses</h5>
                                            <p>Access to all selected status</p>
                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Warehouse" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Warehouse', $event)"
                                                :is_checked="isModuleChecked('Warehouse', $event)" />

                                            <a v-if="formData.PermissionsModules.includes('Warehouse')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Warehouse-status-role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample" id="Warehouse-status-role">
                                        <b>Commande Statuses</b>
                                        <div class="row mt-4 border-bottom">
                                            <table class="table table-striped table-responsive w-100 p-5">
                                                <thead>
                                                    <th>Statut</th>
                                                    <th>Afficher</th>
                                                    <th>Modifier</th>
                                                    <th>Menu</th>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in OrderStatus" :key="item.id">
                                                        <td>{{ item.Nom }}</td>
                                                        <td>
                                                            <checkd :id_check="'role_Commande_Statut_display_' + item.id"
                                                                Class_Content="mb-sm-0"
                                                                @change="UpdatePermissionsOrderStatus(item.id, 'Afficher', $event)"
                                                                :is_checked="isOrderStatusChecked(item.id, 'Afficher', $event)" />
                                                        </td>

                                                        <td>
                                                            <checkd :id_check="'role_Commande_Statut_modify_' + item.id"
                                                                Class_Content="mb-sm-0"
                                                                @change="UpdatePermissionsOrderStatus(item.id, 'Modifier', $event)"
                                                                :is_checked="isOrderStatusChecked(item.id, 'Modifier', $event)" />
                                                        </td>

                                                        <td>
                                                            <checkd :id_check="'role_Commande_Statut_menu_' + item.id"
                                                                Class_Content="mb-sm-0"
                                                                @change="UpdatePermissionsOrderStatus(item.id, 'Menu', $event)"
                                                                :is_checked="isOrderStatusChecked(item.id, 'Menu', $event)" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Clients</h5>
                                            <p>Access to all Customers</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd v-model="Clients" :value="formData.Clients" id_check="role_Clients"
                                                Class_Content="mb-sm-0" @update:value="formData.Clients = $event"
                                                @change="updatePermissionModules('Clients', $event)"
                                                :is_checked="isModuleChecked('Clients')" />

                                            <a v-if="formData.PermissionsModules.includes('Clients')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#clients_mise_a_jour_role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>

                                        </div>
                                    </div>

                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#clients_mise_a_jour_role" id="clients_mise_a_jour_role">
                                        <b>Client Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Client</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_AjouterClients" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterClients', $event)"
                                                            :is_checked="isModuleChecked('AjouterClients')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Client</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierClient" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierClients', $event)"
                                                            :is_checked="isModuleChecked('ModifierClients')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Clients Tarifs</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ClientsTarifs" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ClientsTarifs', $event)"
                                                            :is_checked="isModuleChecked('ClientsTarifs')" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Livreurs</h5>
                                            <p>Access to all Customers</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Livreurs" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Livreurs', $event)"
                                                :is_checked="isModuleChecked('Livreurs')" />

                                            <a v-if="formData.PermissionsModules.includes('Livreurs')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#livreurs_mise_a_jour_role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>

                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#livreurs_mise_a_jour_role" id="livreurs_mise_a_jour_role">
                                        <b>Client Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Livreur</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_AjouterLivreurs" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterLivreurs', $event)"
                                                            :is_checked="isModuleChecked('AjouterLivreurs')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Livreur</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierLivreurs" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierLivreurs', $event)"
                                                            :is_checked="isModuleChecked('ModifierLivreurs')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Livreur Tarifs</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_LivreursTarifs" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('LivreursTarifs', $event)"
                                                            :is_checked="isModuleChecked('LivreursTarifs')" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Commandes Factures</h5>
                                            <p>Access to all Customers</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Commandes_Factures" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('CommandesFactures', $event)"
                                                :is_checked="isModuleChecked('CommandesFactures')" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Factures Clients</h5>
                                            <p>Access to all Customers</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Factures_Clients" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('FacturesClients', $event)"
                                                :is_checked="isModuleChecked('FacturesClients')" />

                                            <a v-if="formData.PermissionsModules.includes('FacturesClients')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Factures_clients_status_role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>


                                        </div>
                                    </div>

                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#Factures_clients_status_role" id="Factures_clients_status_role">
                                        <b>Facture Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Clôturer</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_Clôturer_facture_clients"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('FactureClientCloturer', $event)"
                                                            :is_checked="isModuleChecked('FactureClientCloturer')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Payé</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_paye_facture_clients" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('FactureClientPaye', $event)"
                                                            :is_checked="isModuleChecked('FactureClientPaye')" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Factures Livreurs</h5>
                                            <p>Access to all Customers</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Factures_Livreurs" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('FacturesLivreurs', $event)"
                                                :is_checked="isModuleChecked('FacturesLivreurs')" />


                                            <a v-if="formData.PermissionsModules.includes('FacturesLivreurs')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Factures_livreurs_status_role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>

                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#Factures_livreurs_status_role" id="Factures_livreurs_status_role">
                                        <b>Facture Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Clôturer</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_Clôturer_facture_livreurs"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('FactureLivreurCloturer', $event)"
                                                            :is_checked="isModuleChecked('FactureLivreurCloturer')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Payé</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_paye_facture_livreurs"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('FactureLivreurPaye', $event)"
                                                            :is_checked="isModuleChecked('FactureLivreurPaye')" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>r
                                    </div>




                                </div>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Bon de Livraison</h5>
                                            <p>Access to all Bons</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">

                                            <checkd id_check="role_BonDeLivraison" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('BonDeLivraison', $event)"
                                                :is_checked="isModuleChecked('BonDeLivraison')" />


                                            <a v-if="isModuleChecked('BonDeLivraison')" class="mx-3 bg-light p-3"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#BonDeLivraison-role">
                                                <i class="fas fa-angle-down"></i></a>
                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#BonDeLivraison-role" id="BonDeLivraison-role">
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_AjouterBonDeLivraison"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterBonDeLivraison', $event)"
                                                            :is_checked="isModuleChecked('AjouterBonDeLivraison')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierBonDeLivraison"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierBonDeLivraison', $event)"
                                                            :is_checked="isModuleChecked('ModifierBonDeLivraison')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Validation du Bon </strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ValidationBonDeLivraison"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ValidationBonDeLivraison', $event)"
                                                            :is_checked="isModuleChecked('ValidationBonDeLivraison')" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Bon de Ramassage</h5>
                                            <p>Access to all Bons</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">

                                            <checkd id_check="role_BonDeRamassage" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('BonDeRamassage', $event)"
                                                :is_checked="isModuleChecked('BonDeRamassage')" />


                                            <a v-if="isModuleChecked('BonDeRamassage')" class="mx-3 bg-light p-3"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#BonDeRamassage-role">
                                                <i class="fas fa-angle-down"></i></a>
                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#BonDeRamassage-role" id="BonDeRamassage-role">
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_AjouterBonDeRamassage"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterBonDeRamassage', $event)"
                                                            :is_checked="isModuleChecked('AjouterBonDeRamassage')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierBonDeRamassage"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierBonDeRamassage', $event)"
                                                            :is_checked="isModuleChecked('ModifierBonDeRamassage')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Validation du Bon </strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ValidationBonDeRamassage"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ValidationBonDeRamassage', $event)"
                                                            :is_checked="isModuleChecked('ValidationBonDeRamassage')" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Bon de Ramassage Stock</h5>
                                            <p>Access to all Bons</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">

                                            <checkd id_check="role_BonDeRamassageStock" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('BonDeRamassageStock', $event)"
                                                :is_checked="isModuleChecked('BonDeRamassageStock')" />


                                            <a v-if="isModuleChecked('BonDeRamassageStock')" class="mx-3 bg-light p-3"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#BonDeRamassageStock-role">
                                                <i class="fas fa-angle-down"></i></a>
                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#BonDeRamassageStock-role" id="BonDeRamassageStock-role">
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="AjouterBonDeRamassageStock"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterBonDeRamassageStock', $event)"
                                                            :is_checked="isModuleChecked('AjouterBonDeRamassageStock')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierBonDeRamassageStock"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierBonDeRamassageStock', $event)"
                                                            :is_checked="isModuleChecked('ModifierBonDeRamassageStock')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Validation du Bon </strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ValidationBonDeRamassageStock"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ValidationBonDeRamassageStock', $event)"
                                                            :is_checked="isModuleChecked('ValidationBonDeRamassageStock')" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Bon de Retour Client</h5>
                                            <p>Access to all Bons</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">

                                            <checkd id_check="role_BonDeRetourClient" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('BonDeRetourClient', $event)"
                                                :is_checked="isModuleChecked('BonDeRetourClient')" />


                                            <a v-if="isModuleChecked('BonDeRetourClient')" class="mx-3 bg-light p-3"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#BonDeRetourClient-role">
                                                <i class="fas fa-angle-down"></i></a>
                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#BonDeRetourClient-role" id="BonDeRetourClient-role">
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="AjouterBonDeRetourClient" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterBonDeRetourClient', $event)"
                                                            :is_checked="isModuleChecked('AjouterBonDeRetourClient')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierBonDeRetourClient"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierBonDeRetourClient', $event)"
                                                            :is_checked="isModuleChecked('ModifierBonDeRetourClient')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Validation du Bon </strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ValidationBonDeRetourClient"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ValidationBonDeRetourClient', $event)"
                                                            :is_checked="isModuleChecked('ValidationBonDeRetourClient')" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Bon de Retour Livreur</h5>
                                            <p>Access to all Bons</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">

                                            <checkd id_check="role_BonDeRetourLivreur" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('BonDeRetourLivreur', $event)"
                                                :is_checked="isModuleChecked('BonDeRetourLivreur')" />


                                            <a v-if="isModuleChecked('BonDeRetourLivreur')" class="mx-3 bg-light p-3"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#BonDeRetourLivreur-role">
                                                <i class="fas fa-angle-down"></i></a>
                                        </div>
                                    </div>


                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#BonDeRetourLivreur-role" id="BonDeRetourLivreur-role">
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="AjouterBonDeRetourLivreur" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterBonDeRetourLivreur', $event)"
                                                            :is_checked="isModuleChecked('AjouterBonDeRetourLivreur')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Bon</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierBonDeRetourLivreur"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierBonDeRetourLivreur', $event)"
                                                            :is_checked="isModuleChecked('ModifierBonDeRetourLivreur')" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Validation du Bon </strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ValidationBonDeRetourLivreur"
                                                            Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ValidationBonDeRetourLivreur', $event)"
                                                            :is_checked="isModuleChecked('ValidationBonDeRetourLivreur')" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Dashboard</h5>
                                            <p>Access to all Dashboard</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Dashboard" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Dashboard', $event)"
                                                :is_checked="isModuleChecked('Dashboard')" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6">

                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Roles</h5>
                                            <p>Access to selected commandes status</p>
                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Roles" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Roles', $event)"
                                                :is_checked="isModuleChecked('Roles')" />


                                            <a v-if="formData.PermissionsModules.includes('Roles')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Roles_mise_a_jour_role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>

                                        </div>
                                    </div>



                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#Roles_mise_a_jour_role" id="Roles_mise_a_jour_role">
                                        <b>Role Mise a jour</b>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Roles</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_AjouterRoles" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterRoles', $event)"
                                                            :is_checked="isModuleChecked('AjouterRoles')" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Roles</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_ModifierRoles" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierRoles', $event)"
                                                            :is_checked="isModuleChecked('ModifierRoles')" />

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Ramassages</h5>
                                            <p>Access to all Ramassages</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Ramassages" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Ramassages', $event)"
                                                :is_checked="isModuleChecked('Ramassages')" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Stocks</h5>
                                            <p>Access to all Stocks</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Stocks" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Stocks', $event)"
                                                :is_checked="isModuleChecked('Stocks')" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Embalages</h5>
                                            <p>Access to all Stocks</p>

                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Embalages" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Embalages', $event)"
                                                :is_checked="isModuleChecked('Embalages')" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-4">
                                        <div class="col-6">
                                            <h5>Tickets</h5>
                                            <p>Access to selected Tickets Categories</p>
                                        </div>
                                        <div class="col-6 d-flex align-items-center justify-content-end">
                                            <checkd id_check="role_Tickets" Class_Content="mb-sm-0"
                                                @change="updatePermissionModules('Tickets', $event)"
                                                :is_checked="isModuleChecked('Tickets')" />


                                            <a v-if="formData.PermissionsModules.includes('Tickets')"
                                                class="mx-3 bg-light p-3" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Tickets-status-role">
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="accordion-collapse collapse hide p-3" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample" id="Tickets-status-role">
                                        Tickets Statut
                                        <div class="row mt-4 border-bottom">
                                            <div class="col-md-4 border p-3 mb-sm-0" v-for="item in reclamationTypes"
                                                :key="item.id">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>{{ item.Nom }}</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd :id_check="'role_ticket_type_' + item.id"
                                                            Class_Content="mb-sm-0"
                                                            @change="UpdatePermissionsReclamtionTypes(item.id, $event)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <strong>Tickets mise a jour</strong>
                                        <div class="row my-4">
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Ajouter Ticket</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_Ajouter_Ticket" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('AjouterTicket', $event)"
                                                            :is_checked="isModuleChecked('AjouterTicket')" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 border p-3 mb-sm-0">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <strong>Modifier Ticket</strong>
                                                    </div>
                                                    <div class="col-6 d-flex justify-content-end">
                                                        <checkd id_check="role_Modifier_Ticket" Class_Content="mb-sm-0"
                                                            @change="updatePermissionModules('ModifierTicket', $event)"
                                                            :is_checked="isModuleChecked('ModifierTicket')" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mt-4">
                                    <div class="col-6">
                                        <h5>Messages</h5>
                                        <p>Access to all Messages</p>

                                    </div>
                                    <div class="col-6 d-flex align-items-center justify-content-end">
                                        <checkd id_check="role_Messages" Class_Content="mb-sm-0"
                                            @change="updatePermissionModules('Messages', $event)"
                                            :is_checked="isModuleChecked('Messages')" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mt-4">
                                    <div class="col-6">
                                        <h5>Paramettres</h5>
                                        <p>Access to all Paramettres</p>

                                    </div>
                                    <div class="col-6 d-flex align-items-center justify-content-end">
                                        <checkd id_check="role_Paramettres" Class_Content="mb-sm-0"
                                            @change="updatePermissionModules('Paramettres', $event)"
                                            :is_checked="isModuleChecked('Paramettres')" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                    <div class="card d-flex align-items-end">
                        <button_simple @click="submitForm" type="submit" Class_Content="col-md-2 p-3 "
                            btn_text="Modifier le Role" />
                    </div>


                </form>

            </div>
        </div>
    </div>
</template>
  
  
<script>
import { ref, onMounted } from 'vue'
import { updateData, fetchData, getRow } from '../../../composition/crud.js'

import heading from '../../../components/brumbs/heading.vue'
import checkd from '../../../components/inputs/check.vue'
import input_text from '../../../components/inputs/input.vue'
import button_simple from '../../../components/buttons/simple.vue'

import store from '../../../stores/index'; // Import your store.js file


import { useStore } from 'vuex';

export default {
    components: {
        heading,
        checkd,
        input_text,
        button_simple
    },
    data() {
        return {
            formData: {
                Nom: "",
                PermissionsModules: [],
                PermissionsOrderStatus: [],
                PermissionsReclamtionTypes: [],

            },
            OrderStatus: [],
            reclamationTypes: [],
            check: {
                Commandes: 0,
            }

        }
    },
    async mounted() {
        const OrderStatus_Response = await fetchData('https://api.gestion-livraison.pro/api/order/status?per_page=50')
        const reclamationTypes_Response = await fetchData('https://api.gestion-livraison.pro/api/reclamations/types')

        this.OrderStatus = { ...OrderStatus_Response }
        this.reclamationTypes = { ...reclamationTypes_Response }

        //for update
        const Role_id = this.$route.params.id; // Retrieve the customer ID from the URL
        const getData = await getRow(`https://api.gestion-livraison.pro/api/role/${Role_id}/get`)

        this.formData.Nom = getData.Nom
        this.formData.PermissionsModules = getData.RoleAccess.map(item => item.module);
        this.formData.PermissionsOrderStatus = getData.OrderStatus;
        this.formData.PermissionsReclamtionTypes = getData.RecType.map(item => item.id);


        // this.formData.PermissionsOrderStatus = { ...getData. } 
        //this.formData.PermissionsReclamtionTypes = { ...PermissionsReclamtionTypes. } 

        console.log(getData);
        console.log("dt: " + this.formData.PermissionsModules);
        console.log(this.formData.PermissionsModules.includes('Commandes'));


    },
    computed: {
        isModuleChecked() {
            this.check.module = 1;
            return (module) => this.formData.PermissionsModules.includes(module);
        },
        isOrderStatusChecked() {
            return (Id, mode) => {
                // Find the item in formData by id
                const permissionItem = this.formData.PermissionsOrderStatus.find(
                    (item) => item.id === Id
                );

                if (!permissionItem) {
                    // If the item is not found, return false
                    return false;
                }

                if (mode === "Afficher") {
                    // Check if "Afficher" is true
                    return permissionItem.id ? 1 : 0;
                } else if (mode === "Modifier") {
                    // Check if "Modifier" is true
                    return permissionItem.modifier === 1;
                } else if (mode === "Menu") {
                    // Check if "Menu" is true
                    return permissionItem.menu === 1;
                }

                return false;
            };
        },
    },
    methods: {
        async submitForm() {
            const Role_id = this.$route.params.id; // Retrieve the customer ID from the URL

            await updateData(`https://api.gestion-livraison.pro/api/role/${Role_id}/update`, this.formData)

            //call permissions
            await store.dispatch('fetchPermissions');


        },
        updatePermissionModules(name, event) {
            const value = name;
            const checked = event.target.checked;

            console.log("check " + checked + " value : " + value);
            // If the checkbox is checked, add the item's ID to the 'selectedItems' array
            // If the checkbox is unchecked, remove the item's ID from the 'selectedItems' array
            if (checked) {
                this.formData.PermissionsModules.push(value)
            } else {
                this.formData.PermissionsModules = this.formData.PermissionsModules.filter((item) => item !== value)
            }
            console.log("data : " + this.formData.PermissionsModules);

        },
        UpdatePermissionsOrderStatus(id, mode, event) {
            const checked = event.target.checked;

            if (mode === "Afficher") {
                if (checked) {
                    // If Afficher is checked, add the item to formData with Afficher: 1 and Modifier: 0 and Menu: 0
                    this.formData.PermissionsOrderStatus.push({
                        id: id,
                        modifier: 0,
                        menu: 0,
                    });
                } else {
                    // If Afficher is unchecked, remove the item from formData
                    this.formData.PermissionsOrderStatus = this.formData.PermissionsOrderStatus.filter(
                        (item) => item.id !== id
                    );
                }
            } else {
                // Find the item in formData by id
                const permissionItem = this.formData.PermissionsOrderStatus.find(
                    (item) => item.id === id
                );

                if (permissionItem) {
                    if (mode === "Modifier") {
                        // Update the Modifier value based on the checkbox
                        permissionItem["modifier"] = checked ? 1 : 0;
                    } else if (mode === "Menu") {
                        // Update the Menu value based on the checkbox
                        permissionItem["menu"] = checked ? 1 : 0;

                    }
                }
            }

            console.log("check " + checked + " id : " + id);
            console.log("data : ", this.formData.PermissionsOrderStatus);
        },
        UpdatePermissionsReclamtionTypes(name, event) {
            const value = name;
            const checked = event.target.checked;

            console.log("check " + checked + " value : " + value);
            // If the checkbox is checked, add the item's ID to the 'selectedItems' array
            // If the checkbox is unchecked, remove the item's ID from the 'selectedItems' array
            if (checked) {
                this.formData.PermissionsReclamtionTypes.push(value)
            } else {
                this.formData.PermissionsReclamtionTypes = this.formData.PermissionsReclamtionTypes.filter((item) => item !== value)
            }
            console.log("data : " + this.formData.PermissionsReclamtionTypes);

        }
    }
}
</script>
  