import{bB as c,az as u,q as _,r as s,z as i,bx as m,p as h,aH as a,bI as v,aD as b,aA as f}from"./index-3afa6c13.js";import{t as n}from"./add_bon-0d655d19.js";import{h as l}from"./heading-f00730b6.js";import{S as d}from"./select-ab6ad5d3.js";import{b as p}from"./simple-2283d124.js";const g=e=>(b("data-v-9861b465"),e=e(),f(),e),w={class:"main-content"},y={class:"page-content"},S={class:"container-fluid"},D={class:"row"},U={class:"col-md-8"},I={class:"col-md-4"},O={class:"card"},B={class:"card-body"},$=g(()=>s("h5",null,"Bon de Retour",-1)),C={class:"row"},N={class:"col-md-12 mt-4"},V={components:{table_add_bon:n,heading:l,SelectDropdown:d,button_simple:p},data(){return{selectedOrders:a([]),test:a([]),bonID:this.$route.params.id,filters:{driver:""},newUrl:null,query_search:""}},methods:{search(e,t){this.query_search=this.constructApiUrlWithFilters(),window.history.pushState({},"",this.newUrl)},constructApiUrlWithFilters(){const e=new URLSearchParams;for(const t in this.filters)this.filters[t]&&e.append(t,this.filters[t]);return this.newUrl=`${window.location.pathname}?${e.toString()}`,`?${e.toString()}`},async submitForm(){console.log(this.selectedOrders),console.log(this.filters.driver);const e={CustomerId:this.filters.driver,selectedRows:this.selectedOrders,colis:this.selectedOrders.length};await v(`https://api.gestion-livraison.pro/api/bon/${this.bonID}/delivery/return/update`,e)},handleTableData(e){console.log(e),this.selectedOrders=e}},onMounted(){this.$on("selectedOrders",e=>{this.selectedOrders=e,console.log("orders"),console.log(e)})}},q=Object.assign(V,{__name:"update_bon_return",setup(e){return(t,o)=>(u(),_("div",w,[s("div",y,[s("div",S,[i(l,{pageTitle:"Nouveau Bon de Livraison"}),s("form",{onSubmit:o[2]||(o[2]=m((...r)=>t.submitForm&&t.submitForm(...r),["prevent"]))},[s("div",D,[s("div",U,[i(n,{apiUrl:"https://api.gestion-livraison.pro/api/bon/return/delivery/orders",onTableData:t.handleTableData,updateSelected:`https://api.gestion-livraison.pro/api/bon/return/${t.bonID}/get`,filters_update:t.query_search},null,8,["onTableData","updateSelected","filters_update"])]),s("div",I,[s("div",O,[s("div",B,[$,s("div",C,[i(d,{apiUrl:"https://api.gestion-livraison.pro/api/deliverymans?per_page=200",modelValue:t.filters.driver,"onUpdate:modelValue":o[0]||(o[0]=r=>t.filters.driver=r),value:t.filters.driver,"onUpdate:value":o[1]||(o[1]=r=>{t.filters.driver=r,t.search("driver",r)}),fieldName:"Nom",first_option:"Selectionner un Livreur",label:"Livreur",Class_Content:"col-md-12 mt-4"},null,8,["apiUrl","modelValue","value"]),s("div",N,[i(p,{type:"submit",Class_Content:"col-md-12 mt-4",btn_text:"Modifier Bon de livraison"})])])])]),h("",!0)])])],32)])])]))}}),M=c(q,[["__scopeId","data-v-9861b465"]]);export{M as default};