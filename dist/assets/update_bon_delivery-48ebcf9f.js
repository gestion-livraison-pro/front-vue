import{t as p}from"./add_bon-0d655d19.js";import{h as u}from"./heading-f00730b6.js";import{S as r}from"./select-ab6ad5d3.js";import{b as a}from"./simple-2283d124.js";import{bB as h,az as n,q as c,r as o,z as l,p as v,F as _,aH as d,bK as y,bI as b,aD as g,aA as C}from"./index-3afa6c13.js";import{T as m}from"./eticket-5e32969c.js";const f=t=>(g("data-v-d0d68396"),t=t(),C(),t),D={class:"main-content"},w={class:"page-content"},U={class:"container-fluid"},V={class:"row"},I={class:"col-md-8"},S={class:"col-md-4"},N={class:"card"},O={class:"card-body"},k=f(()=>o("h5",null,"Bon de livraison",-1)),T={class:"row"},B={class:"col-md-12 mt-4"},F={key:0,class:"card"},P={class:"card-body"},q=f(()=>o("h5",null,"Telechergement",-1)),L={class:"row"},A={components:{table_add_bon:p,heading:u,SelectDropdown:r,button_simple:a,Tickets:m},data(){return{openDownload:!0,selectedOrders:d([]),selectedOrdersIds:d([]),test:d([]),bonID:this.$route.params.id,filters:{customer:"",city:"",codecity:""},Driver:"",newUrl:null,query_search:"",driver_filter:"?",city_filter:"?"}},methods:{async GenerateBon(){await y(this.bonID,"delivery","https://api.gestion-livraison.pro/api/bon/delivery/"+this.bonID+"/download/get")},search(t,e){this.query_search=this.constructApiUrlWithFilters(),t=="codecity"&&(e?(this.driver_filter="?",this.city_filter="?",this.driver_filter+="codecity="+e,this.city_filter+="codecity="+e):(this.driver_filter="?",this.city_filter="?")),t=="city"&&(e?(this.driver_filter="?",this.driver_filter+="city="+e):this.filters.codecity?this.driver_filter+="citycode="+this.filters.codecity:this.driver_filter="?"),window.history.pushState({},"",this.newUrl)},constructApiUrlWithFilters(){const t=new URLSearchParams;for(const e in this.filters)this.filters[e]&&t.append(e,this.filters[e]);return this.newUrl=`${window.location.pathname}?${t.toString()}`,`?${t.toString()}`},async submitForm(){console.log(this.selectedOrders),console.log(this.Driver);const t={deliverymanId:this.Driver,selectedRows:this.selectedOrders,colis:this.selectedOrders.length};await b(`https://api.gestion-livraison.pro/api/bon/delivery/${this.bonID}/update`,t)},handleTableData(t){console.log(t),this.selectedOrders=t,t&&(this.selectedOrdersIds=t.map(e=>e.id))}},onMounted(){this.$on("selectedOrders",t=>{this.selectedOrders=t,t&&(this.selectedOrdersIds=t.map(e=>e.id)),console.log("orders"),console.log(t)})}},G=Object.assign(A,{__name:"update_bon_delivery",setup(t){return(e,s)=>(n(),c(_,null,[o("div",D,[o("div",w,[o("div",U,[l(u,{pageTitle:"Nouveau Bon de Livraison"}),o("div",V,[o("div",I,[l(p,{apiUrl:"https://api.gestion-livraison.pro/api/bon/delivery/orders/",onTableData:e.handleTableData,updateSelected:`https://api.gestion-livraison.pro/api/bon/delivery/${e.bonID}/get`,filters_update:e.query_search},null,8,["onTableData","updateSelected","filters_update"])]),o("div",S,[o("div",N,[o("div",O,[k,o("div",T,[l(r,{apiUrl:"https://api.gestion-livraison.pro/api/customers?per_page=200",fieldName:"Nom",first_option:"Selectionner un Client",label:"Filtrer Par Client",Class_Content:"col-md-12 mt-4",modelValue:e.filters.customer,"onUpdate:modelValue":s[0]||(s[0]=i=>e.filters.customer=i),value:e.filters.customer,"onUpdate:value":s[1]||(s[1]=i=>{e.filters.customer=i,e.search("customer",i)})},null,8,["modelValue","value"]),l(r,{apiUrl:"https://api.gestion-livraison.pro/api/cities/codes?per_page=200",fieldName:"Nom",first_option:"Selectionner un Code",label:"Filtrer Par Code Villes",Class_Content:"col-md-12 mt-4",modelValue:e.filters.codecity,"onUpdate:modelValue":s[2]||(s[2]=i=>e.filters.codecity=i),value:e.filters.codecity,"onUpdate:value":s[3]||(s[3]=i=>{e.filters.codecity=i,e.search("codecity",i)})},null,8,["modelValue","value"]),l(r,{apiUrl:`https://api.gestion-livraison.pro/api/cities${e.city_filter}?per_page=200`,fieldName:"Nom",first_option:"Selectionner une Ville",label:"Filtrer Par Ville",Class_Content:"col-md-12 mt-4",modelValue:e.filters.city,"onUpdate:modelValue":s[4]||(s[4]=i=>e.filters.city=i),value:e.filters.city,"onUpdate:value":s[5]||(s[5]=i=>{e.filters.city=i,e.search("city",i)})},null,8,["apiUrl","modelValue","value"]),l(r,{apiUrl:`https://api.gestion-livraison.pro/api/deliverymans${e.driver_filter}?per_page=200`,modelValue:e.Driver,"onUpdate:modelValue":s[6]||(s[6]=i=>e.Driver=i),value:e.Driver,"onUpdate:value":s[7]||(s[7]=i=>{e.Driver=i}),fieldName:"Nom",first_option:"Selectionner un Livreur",label:"Livreur",Class_Content:"col-md-12 mt-4"},null,8,["apiUrl","modelValue","value"]),o("div",B,[l(a,{onClick:e.submitForm,Class_Content:"col-md-12 mt-4",btn_text:"Modifier Bon de livraison"},null,8,["onClick"])])])])]),e.openDownload?(n(),c("div",F,[o("div",P,[q,o("div",L,[l(a,{onClick:e.GenerateBon,Class_Content:"col-md-12 mt-4",btn_text:"Telecharger le bon",icon:"fas fa-download"},null,8,["onClick"]),l(a,{"data-bs-toggle":"modal","data-bs-target":"#Tickets",Class_Content:"col-md-12 mt-4",btn_text:"Telecharger les E-tickets",icon:"fas fa-download"})])])])):v("",!0)])])])])]),l(m,{ordersId:e.selectedOrdersIds},null,8,["ordersId"])],64))}}),j=h(G,[["__scopeId","data-v-d0d68396"]]);export{j as default};