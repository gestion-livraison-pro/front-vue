import{b as r}from"./basic-8cbb2de4.js";import{t as a}from"./basic-451a22b8.js";import{f as c}from"./search-e618f654.js";import{aH as l,az as n,q as d,r as e,z as t}from"./index-3afa6c13.js";import"./check-fe9a82f7.js";import"./delete-6aebbd9b.js";import"./select-ab6ad5d3.js";import"./defineProperty-b185edd1.js";const _={class:"main-content"},p={class:"page-content"},m={class:"container-fluid"},u={class:"card"},f={class:"card-body"},v={class:"mb-3"},L={__name:"liste_of_customers",setup(h){const s=l(null);return(b,o)=>(n(),d("div",_,[e("div",p,[e("div",m,[t(r,{pageTitle:"Liste des clients",buttonText:"Nouveau Client",buttonLink:"customer/new"}),e("div",u,[e("div",f,[e("div",v,[t(c,{placeholder:"Rechercher par Motcle",onFilterUpdated:o[0]||(o[0]=i=>s.value=i),filters_fields:"search"})]),t(a,{apiUrl:"https://api.gestion-livraison.pro/api/customers",Module:"customer",ActiveCol:"1",filters_update:s.value,hidden_columns:["id","user_id","Active"]},null,8,["filters_update"])])])])])]))}};export{L as default};