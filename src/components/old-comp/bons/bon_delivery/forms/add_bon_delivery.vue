<template>
    <div class="row">

        <div class="col-md-8">
            <!-- orders table  -->
            <div class="card">
                <div class="card-body">
                    <h5>Selectionner les Commandes</h5>

                    <div class="custom_table shadow-sm mt-4">
                        <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
                            <div class="row m-0">
                                <div class="col-md-1 bold d-none d-md-inline text-weight-bold">
                                    <input type="checkbox" class="pt-5" name="" id="">
                                </div>
                                <div class="col-md-1 bold d-none d-md-inline text-weight-bold">Cmd ID</div>
                                <div class="col-md-2 bold d-none d-md-inline">Client</div>
                                <div class="col-md-2 bold d-none d-md-inline">Statut</div>
                                <div class="col-md-4 bold d-none d-md-inline">Adresse</div>
                                <div class="col-md-1 bold d-none d-md-inline">Action</div>
                                <div class="col-md-2 bold d-md-none d-sm-inline">Commandes</div>
                            </div>
                        </div>
                        <div class="custom_table_body">
                            <!-- start row  -->
                            <div class="row mb-3 mb-sm-0 m-0 p-3 shadow border">
                                <!-- start first  -->
                                <div class="ctb_item col-md-1 mb-2 mb-sm-0">
                                    <input type="checkbox" class="pt-5" name="" id="">
                                </div>

                                <div class="ctb_item col-md-1" data-bs-toggle="collapse" data-bs-target="#item-951407"
                                    aria-expanded="false" aria-controls="">
                                    <div class="badge bg-dark rounded-pill text-uppercase mb-2 mb-sm-0"><span>12345</span>
                                    </div>
                                </div>
                                <div class="ctb_item col-md-2 mb-2 mb-sm-0">Client 1</div>
                                <div class="ctb_item col-md-2 mb-2 mb-sm-0">
                                    <div class="badge bg-warning">Ramassé</div>
                                </div>
                                <div class="ctb_item col-md-4 col-12 mb-2 mb-sm-0">Yaakoub al mansour, Rabat</div>

                                <div class="ctb_item col-md-1 mb-1 mb-sm-0">
                                    <div class="d-flex order-actions">
                                        <button type="button" class="btn bg-primary text-light btn-sm waves-effect mx-1"><i
                                                class="fas fa-plus"></i></button>
                                    </div>
                                </div>
                                <!-- end first  -->



                            </div>
                            <!-- end row  -->




                            <!-- start row  -->
                            <div class="row mb-3 mb-sm-0 m-0 p-3 shadow border">
                                <!-- start first  -->
                                <div class="ctb_item col-md-1 mb-2 mb-sm-0">
                                    <input type="checkbox" class="pt-5" name="" id="">
                                </div>

                                <div class="ctb_item col-md-1" data-bs-toggle="collapse" data-bs-target="#item-951407"
                                    aria-expanded="false" aria-controls="">
                                    <div class="badge bg-dark rounded-pill text-uppercase mb-2 mb-sm-0"><span>12345</span>
                                    </div>
                                </div>
                                <div class="ctb_item col-md-2 mb-2 mb-sm-0">Client 2</div>
                                <div class="ctb_item col-md-2 mb-2 mb-sm-0">
                                    <div class="badge bg-warning">Ramassé</div>
                                </div>
                                <div class="ctb_item col-md-4 col-12 mb-2 mb-sm-0">Hay el hassani, Casablanca</div>

                                <div class="ctb_item col-md-1 mb-1 mb-sm-0">
                                    <div class="d-flex order-actions">
                                        <button type="button" class="btn bg-primary text-light btn-sm waves-effect mx-1"><i
                                                class="fas fa-plus"></i></button>
                                    </div>
                                </div>
                                <!-- end first  -->



                            </div>
                            <!-- end row  -->


                        </div>
                    </div>
                </div>
            </div>

            <!-- selected orders  -->
            <div class="card">
                <div class="card-body">
                    <h5>Les Commandes Sélectionnées</h5>

                    <div class="custom_table shadow-sm mt-4">
                        <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
                            <div class="row m-0">
                                <div class="col-md-1 bold d-none d-md-inline text-weight-bold">
                                    <input type="checkbox" class="pt-5" name="" id="">
                                </div>
                                <div class="col-md-1 bold d-none d-md-inline text-weight-bold">Cmd ID</div>
                                <div class="col-md-2 bold d-none d-md-inline">Client</div>
                                <div class="col-md-2 bold d-none d-md-inline">Ville</div>
                                <div class="col-md-4 bold d-none d-md-inline">Adresse</div>
                                <div class="col-md-1 bold d-none d-md-inline">Action</div>
                                <div class="col-md-2 bold d-md-none d-sm-inline">Les Commandes Sélectionnées</div>
                            </div>
                        </div>
                        <div class="custom_table_body">
                            <!-- start row  -->
                            <div class="row mb-3 mb-sm-0 m-0 p-3 shadow border">
                                <!-- start first  -->
                                <div class="ctb_item col-md-1 mb-2 mb-sm-0">
                                    <input type="checkbox" class="pt-5" name="" id="">
                                </div>

                                <div class="ctb_item col-md-1" data-bs-toggle="collapse" data-bs-target="#item-951407"
                                    aria-expanded="false" aria-controls="">
                                    <div class="badge bg-dark rounded-pill text-uppercase mb-2 mb-sm-0"><span>12345</span>
                                    </div>
                                </div>
                                <div class="ctb_item col-md-2 mb-2 mb-sm-0">Client 1</div>
                                <div class="ctb_item col-md-2 mb-2 mb-sm-0">
                                    <div class="badge bg-warning">Ramassé</div>
                                </div>
                                <div class="ctb_item col-md-4 col-12 mb-2 mb-sm-0">Yaakoub al mansour, Rabat</div>

                                <div class="ctb_item col-md-1 mb-1 mb-sm-0">
                                    <div class="d-flex order-actions">
                                        <button type="button" class="btn bg-danger text-light btn-sm waves-effect mx-1"><i
                                                class="fas fa-times"></i></button>
                                    </div>
                                </div>
                                <!-- end first  -->



                            </div>
                            <!-- end row  -->


                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="col-md-4 ">
            <div class="card">
                <div class="card-body">
                    <h5>Bon de livraison</h5>
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Ville</label>
                            <select name="" id="validationCustom01" class="form-control">
                                <option value="" selected>Rabat</option>
                                <option value="">Casablanca</option>
                            </select>
                            <div class="valid-feedback">Looks good!</div>
                        </div>

                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Livreur</label>
                            <select name="" id="validationCustom01" class="form-control">
                                <option value="" selected>Hassan</option>
                                <option value="">Mohammed</option>
                            </select>
                            <div class="valid-feedback">Looks good!</div>
                        </div>






                        <div class="col-md-12 mt-4">
                            <button type="submit" class="btn btn-primary w-100">Ajouter Bon de Livraison</button>
                        </div>
                    </div>



                </div>
            </div>

            <!-- downloads  -->
            <div class="card">
                <div class="card-body">
                    <h5>Telechergement</h5>
                    <div class="row">





                        <div class="col-md-12 mt-4">
                            <button type="submit" class="btn btn-primary w-100">Ajouter Bon de Livraison</button>
                        </div>

                        <div class="row">
                                        <!-- 1/2  -->
                                        <div class="col-3">
                                <div class="ticket  waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                                    <div class="ticket_squar squar2"></div>
                                    <div class="ticket_squar squar2"></div>
                                </div>
                            </div>
                                        <!-- 1/4  -->
                                        <div class="col-3">
                                <div class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                                    <div class="d-flex flex-row">
                                        <div class="">
                                            <div class="ticket_squar squar4"></div>
                                        </div>
                                        <div class="">
                                            <div class="ticket_squar squar4"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="">
                                            <div class="ticket_squar squar4"></div>
                                        </div>
                                        <div class="">
                                            <div class="ticket_squar squar4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                                        <!-- 1/6  -->
                                        <div class="col-3">
                                <div class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                                    <div class="d-flex flex-row">
                                        <div class="">
                                            <div class="ticket_squar squar6"></div>
                                        </div>
                                        <div class="">
                                            <div class="ticket_squar squar6"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="">
                                            <div class="ticket_squar squar6"></div>
                                        </div>
                                        <div class="">
                                            <div class="ticket_squar squar6"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="">
                                            <div class="ticket_squar squar6"></div>
                                        </div>
                                        <div class="">
                                            <div class="ticket_squar squar6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                    <!-- 10x10  -->
                            <div class="col-3">
                                <div class="ticket waves-effect bg-light d-flex align-items-center justify-content-center flex-column shadow border mt-4">
                                    <div class="ticket_squar squar6"></div>
                                    <div class="ticket_squar squar6"></div>
                                    <div class="ticket_squar squar6"></div>

                                </div>
                            </div>
                        </div>




                    </div>



                </div>
            </div>
        </div>
    </div>


    <div class="mx-2 m-3 pb-3 pt-3"></div>
</template>
  


<style>
.ticket {
    width: 100%;
    height: 12vh;
    padding: 2vw;
    cursor: pointer;
}

.ticket_squar {
    margin: 3px;
    border: 2px solid #555555;
}



.squar4{
    width: 1.5vw;
    height: 3vh;
}

.squar2{
    width: 3vw;
    height: 10vh;
}

.squar6{
    width: 1.5vw;
    height: 3vh;
}
</style>
  