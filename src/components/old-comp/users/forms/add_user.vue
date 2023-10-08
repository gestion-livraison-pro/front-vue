<template>
    <form @submit.prevent="">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h5>User Information</h5>
                        <div class="row">
                            <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">Nom Complete </label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mt-4">
                                <label for="validationCustom01" class="form-label">Telephone</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="col-md-6 mt-4">
                                <label for="validationCustom01" class="form-label">E-mail</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">Adresse </label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mt-4">
                                <label for="validationCustom01" class="form-label">Mot de Passe</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="col-md-6 mt-4">
                                <label for="validationCustom01" class="form-label">Confirmer Mot de Passe</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Mark" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>


                        </div>

                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Note</label>
                            <textarea class="form-control" name="" id="validationCustom01" cols="30" rows="7"></textarea>
                            <div class="valid-feedback">Looks good!</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5>autre Information</h5>
                        <div class="row">
                            <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">Ville</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Rabat" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">Salaire</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="3000" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">CIN</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="AB123456" />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="col-md-12 mt-4">
                                <label for="validationCustom01" class="form-label">Role</label>
                                <select name="" id="validationCustom01" class="form-control">
                                    <option value="" selected>Admin</option>
                                    <option value="">Employee</option>
                                </select>
                                <div class="valid-feedback">Looks good!</div>
                            </div>





                            <div class="col-md-12 mt-4">
                                <button type="submit" class="btn btn-primary w-100">Ajouter Utilisateur</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

