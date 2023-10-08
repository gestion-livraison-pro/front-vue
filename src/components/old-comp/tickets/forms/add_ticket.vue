<template>
    <form @submit.prevent="" >
    <div class="row">
        <div class="col-md-8">
            <!----destinataire-->
            <div class="card">
                <div class="card-body">
                    <h5>Ticket Information</h5>
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Titre </label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Facture probleme"   />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Type</label>
                            <select name="" class="form-control" id="validationCustom01">
                                <option value="">Type de Ticket</option>
                                <option value="">Colis</option>
                                <option value="">Facture</option>

                            </select>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                    </div>
                

                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <label for="validationCustom01" class="form-label">Description </label>
                            <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="mt-4 d-flex justify-content-end">
                        <buttton class="btn btn-primary">Ajouter Ticket</buttton>
                    </div>
                </div>
            </div>


        
        </div>

        <div class="col-md-4">
            telephone ..... <br>
            email ........
        </div>
    </div>
    </form>
</template>

