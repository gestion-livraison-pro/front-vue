<script setup>
import conversation from '../../components/messages/conversations.vue'
import messages from '../../components/messages/messages.vue'
import hedding from '../../components/brumbs/heading.vue'

import filters from '../../components/filters/search.vue'
import {ref} from "vue"
const lien_filter = ref(null)

const Conv = ref(null);
</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <hedding pageTitle="Messages" />

        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <filters placeholder="Rechercher par Motcle" @filter-updated="lien_filter=$event" filters_fields="search,customer,date"/>
            </div>
            <div class="row w-100 shadow h-100">
              <conversation @select_conversation="Conv = $event" :filters_update="lien_filter" />
              <messages :conv="Conv" />
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>




