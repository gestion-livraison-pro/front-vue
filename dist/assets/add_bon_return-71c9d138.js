import{bB as p,az as _,q as u,r as s,z as i,bx as m,p as h,aH as a,bG as v,aD as f,aA as b}from"./index-3afa6c13.js";import{t as n}from"./add_bon-0d655d19.js";import{h as d}from"./heading-f00730b6.js";import{S as l}from"./select-ab6ad5d3.js";import{b as c}from"./simple-2283d124.js";const g=e=>(f("data-v-d8c963e7"),e=e(),b(),e),w={class:"main-content"},y={class:"page-content"},S={class:"container-fluid"},U={class:"row"},D={class:"col-md-8"},O={class:"col-md-4"},B={class:"card"},N={class:"card-body"},V=g(()=>s("h5",null,"Bon de Retour",-1)),q={class:"row"},C={class:"col-md-12 mt-4"},F={components:{table_add_bon:n,heading:d,SelectDropdown:l,button_simple:c},data(){return{selectedOrders:a([]),test:a([]),filters:{driver:""},newUrl:null,query_search:""}},methods:{search(e,t){this.query_search=this.constructApiUrlWithFilters(),window.history.pushState({},"",this.newUrl)},constructApiUrlWithFilters(){const e=new URLSearchParams;for(const t in this.filters)this.filters[t]&&e.append(t,this.filters[t]);return this.newUrl=`${window.location.pathname}?${e.toString()}`,`?${e.toString()}`},async submitForm(){console.log(this.selectedOrders),console.log(this.filters.driver);const e={deliverymanId:this.filters.driver,selectedRows:this.selectedOrders,colis:this.selectedOrders.length};await v("https://api.gestion-livraison.pro/api/bon/delivery/return/new",e)},handleTableData(e){console.log(e),this.selectedOrders=e}},onMounted(){this.$on("selectedOrders",e=>{this.selectedOrders=e,console.log("orders"),console.log(e)})}},I=Object.assign(F,{__name:"add_bon_return",setup(e){return(t,o)=>(_(),u("div",w,[s("div",y,[s("div",S,[i(d,{pageTitle:"Nouveau Bon de Livraison"}),s("form",{onSubmit:o[2]||(o[2]=m((...r)=>t.submitForm&&t.submitForm(...r),["prevent"]))},[s("div",U,[s("div",D,[i(n,{apiUrl:"https://api.gestion-livraison.pro/api/bon/return/delivery/orders",onTableData:t.handleTableData,filters_update:t.query_search},null,8,["onTableData","filters_update"])]),s("div",O,[s("div",B,[s("div",N,[V,s("div",q,[i(l,{apiUrl:"https://api.gestion-livraison.pro/api/deliverymans?per_page=200",modelValue:t.filters.driver,"onUpdate:modelValue":o[0]||(o[0]=r=>t.filters.driver=r),value:t.filters.driver,"onUpdate:value":o[1]||(o[1]=r=>{t.filters.driver=r,t.search("driver",r)}),fieldName:"Nom",first_option:"Selectionner un Livreur",label:"Livreur",Class_Content:"col-md-12 mt-4"},null,8,["apiUrl","modelValue","value"]),s("div",C,[i(c,{type:"submit",Class_Content:"col-md-12 mt-4",btn_text:"Ajouter le Bon Retour"})])])])]),h("",!0)])])],32)])])]))}}),k=p(I,[["__scopeId","data-v-d8c963e7"]]);export{k as default};
