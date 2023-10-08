<template>
    <div class="card col-md-4 p-3" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">
        <ul class="list-unstyled overflow-scroll conversations-side">
            <li class="card border-bottom p-3" :class="{ 'active': conv.id === selectConvID }" v-for="conv in conversations"
                :key="conv.id" style="cursor: pointer;" @click="selectConv(conv)">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-9 d-flex flex-row align-items-center overflow-scroll">
                        <img src="https://via.placeholder.com/70" alt="" class="rounded-circle col-1 col-md-2">
                        <div class="m-3">
                            <div v-if="Role != 'customer'">
                                <p class="fw-bold mb-0">Client : <span>{{ conv.Client }}</span></p>
                                <p class="fw-bold mb-0">Livreur : <span>{{ conv.Livreur }}</span></p>
                            </div>

                            <strong class="fw-bold mb-0">Commande: : <span>{{ conv.CommandeRef }}</span></strong>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex justify-content-end align-items-end flex-column text-end">
                        <p class="small text-muted">{{ new Date(conv.Date).toISOString().split('T')[0] }}</p>
                        <span v-if="conv.notification_count" class="badge" style="background: #FF8C00;">{{ conv.notification_count }}</span>
                    </div>
                </div>
            </li>


        </ul>
    </div>
</template>


<style scoped>
.conversations-side {
    height: 62vh;
}

li.card:hover {
    background-color: #e7e6e6;
}

li.card.active {
    background: linear-gradient(to right, #0d3348, #0A2635);
    color: #ffffff;
}
</style>



<script>
import { ref, onMounted } from 'vue';
import { fetchData, getRole } from '../../composition/crud.js';


export default {

    data() {
        return {
            Role: getRole(),
            conversations:"",
            selectConvID: "",
        }
    },
    props: {
        filters_update: {
            type: String,
            required: true,
        }
    },

    setup(props, { emit }) {
        console.log("response");

        const conversations = ref([]);
        const selectConvID = ref(null);

        onMounted(async () => {
            const response = await fetchData("https://api.gestion-livraison.pro/api/conversations");
            console.log(response);

            if (response.length > 0) {
                conversations.value = response;
                console.log(conversations.value);
            }
        });

        // For modal on click on ref
        const selectConv = (conv) => {
            console.log(conv);
            emit('select_conversation', conv);
            console.log(conv);
            selectConvID.value = conv.id;

        };

        return {
            conversations,
            selectConv,
            selectConvID
        };
    },
    methods: {
        async getFetchData(filters = null) {
            this.conversations = await fetchData("https://api.gestion-livraison.pro/api/conversations"+filters);
        },
         selectConv(conv){
            this.$emit('select_conversation', conv);
            console.log(conv);
            this.selectConvID = conv.id;
        }
    },
    mounted() {
        this.getFetchData("");
    },
    watch: {
        // whenever question changes, this function will run
        filters_update(new_filter) {
            alert(new_filter)
            this.filters = new_filter;
            this.getFetchData(new_filter)
        }
    },
}
</script>