<template>
    <div  class="col-md-8  card p-3" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">
        <div v-if="conv">
            <div class="card">
                <div v-if="Role!='customer'" class="card-body d-flex justify-content-between align-items-center">
                    <h6>{{ conv.Client }}</h6>
                </div>
                <div v-else class="card-body d-flex justify-content-between align-items-center">
                    <h6>Commande N: {{ conv.Commande }}</h6>
                </div>
            </div>
            <div class="d-flex flex-column overflow-scroll messages-side" ref="messagesContainer">
                <div class="p-2" v-for="msg in messages" :key="msg.id">

                    <div class="d-flex flex-row align-items-center" v-if="msg.si_client">
                        <img src="https://via.placeholder.com/60" alt="" class="rounded-circle align-self-center mx-3 col-1">
                        <div>
                            <div class="bg-light p-2">
                                {{ msg.Contenu }}
                            </div>
                            <p class="small text-muted text-end">{{  new Date(msg.Date).toISOString().split('T')[0] + " | "  + msg.Utilisateur}}</p>
                        </div>
                    </div>

                    <div class="d-flex flex-row justify-content-end" v-else>
                        <img src="https://via.placeholder.com/60" alt="" class="rounded-circle align-self-center mx-3 col-1">
                        <div>
                            <div class="bg-primary text-light p-2">
                                {{ msg.Contenu }}
                            </div>
                            <p class="small text-muted text-end">{{ new Date(msg.Date).toISOString().split('T')[0] + " | "  + msg.Utilisateur}}</p>
                        </div>
                    </div>
                </div>


            </div>

            <div class="card p-4 m-0">
                <div class="ard-body row d-flex align-items-center">

                    <input_text v-model="Message" type="text" Class_Content="col-md-10 my-2" :value="formData.Message"
                        @update:value="formData.Message = $event" />
                    <div class="col-md-2">
                        <button class="btn btn-primary w-100 my-2" @click="submitForm">Sent <i
                                class="far fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>

        </div>

        <div v-else class="d-flex align-items-center justify-content-center">
                <h3 class="color-grey">aucun conversation selectionne</h3>
        </div>



    </div>
</template>


<style scoped>
.messages-side {
    height: 42vh;
}
</style>



<script>
import { ref, onMounted, watch } from 'vue';
import { fetchData, addData, getRole } from '../../composition/crud.js';

import input_text from '../../components/inputs/input.vue'
import button_simple from '../../components/buttons/simple.vue'
export default {

    props: {
        conv: {
            type:Array,
            required: true
        },
    },
    components: {
        input_text,
        button_simple,
    },
    data() {
        return {
            formData: {
                Message: "",
                ConversationId: null,
            },
            messages: [],
            Role:getRole(),

        }
    },

    async mounted() {
        await this.displayMessages()
        if(this.$route.params.id) this.formData.ConversationId = this.$route.params.conversation
    },
    methods: {
        async submitForm() {
            const res = await addData('https://api.gestion-livraison.pro/api/message/new', this.formData)
            console.log(res)
            this.messages.push(res.message)
            this.formData.Message="";

        },
        async displayMessages() {
            if (this.conv.id) {
                const response = await fetchData(`https://api.gestion-livraison.pro/api/messages/${this.conv.id}`);
                this.messages = response;

                //scroll to bottom
                scrollToBottom()

            }
        },
        scrollToBottom() {
            const container = this.$refs.messagesContainer;
            container.scrollTop = container.scrollHeight;
        },
    },
    watch: {
        conv: {
            immediate: true, // Trigger the watcher immediately on component mount
            async handler() {
                this.formData.ConversationId = this.conv.id;
                await this.displayMessages();
            },
        },
    },
}
</script>