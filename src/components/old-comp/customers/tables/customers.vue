<template>
  <div class="custom_table shadow-sm">
    <div class="custom_table_header p-3 bg--dark radius-top shadow-sm border bg-light">
      <!-- Header row -->
      <div class="row m-0">
        <div class="col-md-1 bold d-none d-md-inline text-weight-bold">ID</div>
        <div class="col-md-2 bold d-none d-md-inline text-weight-bold">Nom de Client</div>
        <div class="col-md-2 bold d-none d-md-inline">tele</div>
        <div class="col-md-2 bold d-none d-md-inline">Ville</div>
        <div class="col-md-2 bold d-none d-md-inline">Statut</div>
        <div class="col-md-2 bold d-none d-md-inline">Store</div>
        <div class="col-md-1 bold d-none d-md-inline">Action</div>
        <div class="col-md-2 bold d-md-none d-sm-inline">Clients</div>
      </div>
    </div>
    <div class="custom_table_body">
      <!-- Table rows -->
      <div v-for="item in items" :key="item.id" class="row mb-3 mb-sm-0 m-0 p-3 shadow border">
        <div class="ctb_item col-md-1 d-flex justify-content-left collapsed" data-bs-toggle="collapse"
          :data-bs-target="'#item-' + item.id" aria-expanded="false" aria-controls="">
          <div class="badge bg-dark rounded-pill text-uppercase mb-2 mb-sm-0"><span>{{ item.id }}</span></div>
        </div>
        <div class="ctb_item col-md-2 mb-2 mb-sm-0">{{ item.name }}</div>
        <div class="ctb_item col-md-2 mb-2 mb-sm-0">{{ item.phone }}</div>
        <div class="ctb_item col-md-2 col-12 mb-2 mb-sm-0">{{ item.ville }}</div>
        <div class="ctb_item col-md-2 mb-2 mb-sm-0">
          <a href="#" id="inline-sex" data-type="select" data-pk="1" data-value="" data-title="Select sex"></a>
        </div>
        <div class="ctb_item col-md-2 mb-2 mb-sm-0">{{ item.store }}</div>

        <div class="ctb_item col-md-1 mb-1 mb-sm-0">
          <div class="d-flex order-actions">
            <button type="button" class="btn bg-light btn-sm waves-effect mx-1"><i class="fas fa-pencil-alt"></i></button>
            <button type="button" class="btn bg-light"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>

        <!-- Additional details -->
        <div :id="'item-' + item.id" class="collapse bg-gray p-3 mt-3 border mb-2 mb-sm-0" aria-labelledby=""
          :data-bs-parent="'#item-' + item.id" style="">
          <div class="accordion-body">
            <div class="row">
              <div class="col-md-6">
                <div class="row hr_bottom pb-3">
                  <div>E-mail: {{ item.email }}</div>
                  <div>ICE: {{ item.ice }}</div>
                  <div>IF: {{ item.if }}</div>
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

<script>
import axios from 'axios';

export default {
  name: 'DataTable',
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // Set default header
    this.fetchData();
  },
  methods: {
    fetchData() {

      axios.get('http://localhost:8000/api/customers')
        .then(response => {
          this.items = response.data.customers;
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
