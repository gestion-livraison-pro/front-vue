<template>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">


                <form @submit.prevent="">
                    <div class="row">
                        <div class="col-md-8">
                            <!----destinataire-->
                            <div class="card">
                                <div class="card-body">
                                    <h5>Destinataire Informations</h5>
                                    <div class="row">
                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">Nom Complete </label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">Telephone</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">E-mail</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">Ville</label>
                                            <select name="" class="form-control" id="validationCustom01">
                                                <option value="">Rabat</option>
                                                <option value="">Casablanca</option>

                                            </select>
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">Adresse </label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!----produits ramasssage-->
                            <div class="card">
                                <div class="card-body">
                                    <h5>Produits</h5>
                                    <div class="row">
                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">Nom Complete </label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">Telephone</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">E-mail</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        <div class="col-md-6 mt-4">
                                            <label for="validationCustom01" class="form-label">Ville</label>
                                            <select name="" class="form-control" id="validationCustom01">
                                                <option value="">Rabat</option>
                                                <option value="">Casablanca</option>

                                            </select>
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!----produits stock-->
                            <div class="card">
                                <div class="card-body">
                                    <h5>Produits</h5>
                                    <div class="row mt-4 d-flex align-items-center">
                                        <div class="col-md-2">
                                            <label for="validationCustom01" class="form-label">stock </label>
                                        </div>
                                        <div class="col-md-1">
                                            <input class="form-check form-switch" type="checkbox" id="switch2"
                                                switch="primary">
                                            <label class="form-label" for="switch2" data-on-label="Oui"
                                                data-off-label="Non"></label>
                                        </div>

                                    </div>

                                    <div class="row d-flex align-items-center mt-4">
                                        <label for="validationCustom01" class="form-label">produits selectionne </label>

                                        <div class="col-md-1">
                                            <img src="assets/images/small/img-3.jpg" class="rounded-5 avatar-xl"
                                                style="width: 70px; height: 70px;" alt="">
                                        </div>
                                        <div class="col-md-9 ">
                                            <h6>OneStep 1200W Original</h6>
                                        </div>

                                        <div class="col-md-2">
                                            <input id="demo0" type="text" value="1" name="demo0" data-bts-min="1"
                                                data-bts-max="100" data-bts-init-val="" data-bts-step="1"
                                                data-bts-decimal="0" data-bts-step-interval="100"
                                                data-bts-force-step-divisibility="round" data-bts-step-interval-delay="500"
                                                data-bts-prefix="" data-bts-postfix="" data-bts-prefix-extra-class=""
                                                data-bts-postfix-extra-class="" data-bts-booster="true"
                                                data-bts-boostat="10" data-bts-max-boosted-step="false"
                                                data-bts-mousewheel="true" data-bts-button-down-class="btn btn-default"
                                                data-bts-button-up-class="btn btn-default">
                                        </div>
                                    </div>


                                    <div class="row d-flex align-items-center mt-4">
                                        <label for="validationCustom01" class="form-label">selectionner un produit </label>

                                        <div class="col-md-11 ">
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Mark" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-1">
                                            <button class="btn btn-primary w-100"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>





                                </div>
                            </div>

                          
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Commande Information</h5>

                                    <div class="row mt-4 d-flex align-items-center">
                                        <div class="col-md-6">
                                            <label for="validationCustom01" class="form-label">Ouvrire le colis </label>
                                        </div>
                                        <div class="col-md-6">
                                            <input class="form-check form-switch" type="checkbox" id="switch2"
                                                switch="primary">
                                            <label class="form-label" for="switch2" data-on-label="Oui"
                                                data-off-label="Non"></label>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">Ville</label>
                                            <select name="" id="validationCustom01" class="form-control">
                                                <option value="" selected>Rabat</option>
                                                <option value="">Casablanca</option>
                                            </select>
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-12">
                                            <label for="validationCustom01" class="form-label">Prix Total</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="199" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>


                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">Véhicules</label>
                                            <select name="" id="validationCustom01" class="form-control">
                                                <option value="" selected>Voiture</option>
                                                <option value="">Truck</option>
                                            </select>
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>

                                        <div class="col-md-12 mt-4">
                                            <label for="validationCustom01" class="form-label">CIN</label>
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="AB123456" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>


                                    <div class="col-md-12 mt-4">
                                        <label for="validationCustom01" class="form-label">Note</label>
                                        <textarea class="form-control" name="" id="validationCustom01" cols="30"
                                            rows="7"></textarea>
                                        <div class="valid-feedback">Looks good!</div>
                                    </div>



                                    <div class="col-md-12 mt-4">
                                        <button type="submit" class="btn btn-primary w-100">Ajouter Livreur</button>
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

