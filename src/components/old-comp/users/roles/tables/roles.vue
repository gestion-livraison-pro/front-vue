<template>
    <div class="custom_table shadow-sm">
      <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
        <div class="row m-0">
          <div class="col-md-1 bold d-none d-md-inline text-weight-bold">ID</div>
          <div class="col-md-2 bold d-none d-md-inline text-weight-bold">Role</div>
          <div class="col-md-6 bold d-none d-md-inline">Access</div>
          <div class="col-md-1 bold d-none d-md-inline">Action</div>

  
        </div>
      </div>
      <div class="custom_table_body">
          <!-- start row  -->
          <div class="row mb-3 mb-sm-0 m-0 p-3 shadow border"> 
          <!-- start first  -->
          <div
            class="ctb_item col-md-1 d-flex justify-content-left collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#item-951407"
            aria-expanded="false"
            aria-controls="">
            <div class="badge bg-dark rounded-pill text-uppercase mb-2 mb-sm-0"><span>12345</span></div>
          </div>
          <div class="ctb_item col-md-2 mb-2 mb-sm-0">Admin</div>
          <div class="ctb_item col-md-6 mb-2 mb-sm-0">
              commandes, utilisateurs......
          </div>
  
          <div class="ctb_item col-md-1 mb-1 mb-sm-0">
            <div class="d-flex order-actions">
              <button type="button" class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-pencil-alt"></i></button>
              <button type="button" class="btn bg-light"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div> 
          <!-- end first  -->
  
  
          <!-- start two  -->
          <div id="item-951407" class="collapse bg-gray p-3 mt-3 border mb-2 mb-sm-0" aria-labelledby="" data-bs-parent="#item-951407" style="">
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
  
  