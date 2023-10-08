<template>

<div id="DeleteRow" class="modal modal-lg fade" tabindex="-1" aria-labelledby="DeleteRowlabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="DeleteRowlabel">Supprimer </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Voullez Vous vraiemenet supprimer cette resource ?</p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect waves-light"
                        data-bs-dismiss="modal">Non</button>
                    <button type="submit" class="btn btn-danger waves-effect waves-light"
                        @click="submitFormDelete"  data-bs-dismiss="modal">Oui</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
</template>

<script>

import { ref, onMounted, watch } from 'vue';
import { updateData } from '../../composition/crud.js';

export default {

    props: {
        apiUrl: {
            type: String,
            required: true
        },
        rowId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            id: ""
        }
    },
    methods:{
        async submitFormDelete() {
           // this.formData.id=this.rowId;
            //console.log(this.formData)
            const return_data = await updateData(this.apiUrl);

            //update table
            if (return_data.id) {
                // Update the existing row
                this.$emit('deleted-id', return_data.id)
            }

        },
    },
    
}

</script>