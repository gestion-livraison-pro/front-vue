
<template>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <form @submit.prevent="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Role Access</h5>
                                    <div class="row mt-4">
                                        <div class="col-md-6 ">
                                            <h5>Utilisateurs</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <input class="form-check form-switch" type="checkbox" id="switch1"
                                                switch="primary" checked>
                                            <label class="form-label" for="switch1" data-on-label="Yes"
                                                data-off-label="No"></label>
                                        </div>
                                    </div>
                                    <hr>

                                    <div class="row mt-4">
                                        <div class="col-md-6 ">
                                            <h5>Clients</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <input class="form-check form-switch" type="checkbox" id="switch2"
                                                switch="primary" checked>
                                            <label class="form-label" for="switch2" data-on-label="Yes"
                                                data-off-label="No"></label>
                                        </div>
                                    </div>
                                    <hr>


                                    <div class="row mt-4">
                                        <div class="col-md-6 ">
                                            <h5>Commandes</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <input class="form-check form-switch" type="checkbox" id="switch3"
                                                switch="primary" checked>
                                            <label class="form-label" for="switch3" data-on-label="Yes"
                                                data-off-label="No"></label>
                                        </div>
                                    </div>
                                    <hr>

                                    <div class="row mt-4">
                                        <div class="col-md-6 ">
                                            <h5>Ramassages</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <input class="form-check form-switch" type="checkbox" id="switch4"
                                                switch="primary" checked>
                                            <label class="form-label" for="switch4" data-on-label="Yes"
                                                data-off-label="No"></label>
                                        </div>
                                    </div>
                                    <hr>


                                    <div class="row mt-4">
                                        <div class="col-md-6 ">
                                            <h5>Factures</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <input class="form-check form-switch" type="checkbox" id="switch5"
                                                switch="primary" checked>
                                            <label class="form-label" for="switch5" data-on-label="Yes"
                                                data-off-label="No"></label>
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="row mt-4">
                                        <div class="col-md-6 ">
                                            <h5>Bons</h5>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <input class="form-check form-switch" type="checkbox" id="switch6"
                                                switch="primary" checked>
                                            <label class="form-label" for="switch6" data-on-label="Yes"
                                                data-off-label="No"></label>
                                        </div>
                                    </div>
                                    <hr>


                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Role Information</h5>
                                    <div class="row">
                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">Label</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Rabat" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">field 1</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="3000" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">field 2</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="AB123456" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">field 2</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="AB123456" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>





                                        <div class="col-md-12 mt-4">
                                            <button type="submit" class="btn btn-primary w-100">Ajouter Role</button>
                                        </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div></template>

