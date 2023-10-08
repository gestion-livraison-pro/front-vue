<template>
    <div v-if="data.length>0" class="row">
        <div class="col-xl-3 col-md-4 boxs_embalages" v-for="item in data" :key="item.id">
            <div class="card position-relative"
                :class="{ 'selected': selectedItem === item.id || selected_package === item.id }"
                @click="selectItem(item.id)">



                <img class="card-img-top" :src="'https://api.gestion-livraison.pro/' + item.Img" alt="Card image cap">
                <div class="card-body text-center">
                    <p>{{ item.Nom }}</p>
                    <p class="card-title">{{ item.Prix }} Dh</p>
                </div>
            </div>
        </div>


    </div>

    <div v-else-if="loading" class="d-flex justify-content-center py-4">
        <span class="loader"></span>
    </div>

    <div v-else class="card p-3 text-center">
        <p>no-data</p>
    </div>
</template>
      
      
    
  
<script>
import { ref, onMounted, watch } from 'vue';
import { fetchData } from '../../composition/crud.js';

export default {

    props: {
        apiUrl: {
            type: String,
            required: true
        },
        value: [String, Number],
        selected_package: {
            type: String,
            required: true
        },

    },


    setup(props, { emit }) {
        console.log("response");

        const data = ref([]);
        const selectedItem = ref(null);
        const loading = ref(false);

        onMounted(async () => {
            loading.value=true
            const response = await fetchData(props.apiUrl);
            console.log(response);

            if (response.length > 0) {
                data.value = response;
                console.log(data.value);
            }
            loading.value=false

        });



        const selectItem = (itemId) => {
            selectedItem.value = itemId;
            emit('update:modelValue', itemId); // Emit the selected item ID to the parent component

        };

        // Watch for changes in the parent's modelValue and update selectedItem accordingly
        watch(
            () => props.modelValue,
            (newValue) => {
                selectedItem.value = newValue;
            }
        );

        return {
            data,
            selectedItem,
            selectItem,
            loading

        };
    }
}
</script>


<style scoped>
.selected {
    border: 2px solid blue;
    /* You can customize the border style for selected items */
    cursor: pointer;
}

.card:hover {
    border: 2px solid orange;
    /* You can customize the border style for selected items on hover */
}
</style>
  
  
  
  
  
  
  