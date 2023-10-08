<template>
  <div class="custom_table shadow-sm">
    <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
      <div class="row m-0">
        <div class="col-md-1 bold d-none d-md-inline text-weight-bold">Référence</div>
        <div class="col-md-2 bold d-none d-md-inline text-weight-bold">Livreur</div>
        <div class="col-md-2 bold d-none d-md-inline">Date</div>
        <div class="col-md-1 bold d-none d-md-inline">Colis</div>
        <div class="col-md-2 bold d-none d-md-inline">Montant</div>
        <div class="col-md-1 bold d-none d-md-inline">Cloturé</div>
        <div class="col-md-1 bold d-none d-md-inline">Versé</div>
        <div class="col-md-2 bold d-none d-md-inline">Action</div>
        <div class="col-md-2 bold d-md-none d-sm-inline">Livreurs</div>

      </div>
    </div>
    <div class="custom_table_body">
      <!-- start row  -->
      <div class="row mb-3 mb-sm-0 m-0 p-3 shadow border">
        <!-- start first  -->
        <div class="ctb_item col-md-1 d-flex justify-content-left collapsed" data-bs-toggle="collapse"
          data-bs-target="#item-951407" aria-expanded="false" aria-controls="">
          <div class="badge bg-dark rounded-pill text-uppercase mb-2 mb-sm-0"><span>12345</span></div>
        </div>
        <div class="ctb_item col-md-2 mb-2 mb-sm-0">Nom</div>
        <div class="ctb_item col-md-2 col-12 mb-2 mb-sm-0">15/06/2023</div>
        <div class="ctb_item col-md-1 mb-2 mb-sm-0">12</div>
        <div class="ctb_item col-md-2 mb-2 mb-sm-0">1920,00 DH</div>
        <div class="ctb_item col-md-1 mb-2 mb-sm-0">
          <input class="form-check form-switch" type="checkbox" id="switch1" switch="primary" >
          <label class="form-label" for="switch1" data-on-label="Oui" data-off-label="Non"></label>
        </div>
        <div class="ctb_item col-md-1 mb-2 mb-sm-0">
          <input class="form-check form-switch" type="checkbox" id="switch2" switch="primary" >
          <label class="form-label" for="switch2" data-on-label="Oui" data-off-label="Non"></label>
        </div>


        <div class="ctb_item col-md-2 mb-1 mb-sm-0">
          <div class="d-flex order-actions">
            <button type="button" class="btn bg-light btn-sm waves-effect mx-1"><i
                class="fas fa-cloud-download-alt"></i></button>
            <button type="button" class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
        <!-- end first  -->


        <!-- start two  -->
        <div id="item-951407" class="collapse bg-gray p-3 mt-3 border mb-2 mb-sm-0" aria-labelledby=""
          data-bs-parent="#item-951407" style="">
          <div class="accordion-body">
            <div class="row">
              <div class="col-md-6">
                <div class="row hr_bottom pb-3">
                  <div>E-mail : test@gmail.com </div>
                  <div>ICE : 12345678910</div>
                  <div>IF : 12345678</div>
                  <div>CIN : AB123456</div>


                </div>



              </div>


            </div>
          </div>
        </div>
        <!-- end two   -->
      </div>
      <!-- end row  -->


    </div>
  </div>

  <div class="mx-2 m-3 pb-3 pt-3"></div>
</template>
  
  