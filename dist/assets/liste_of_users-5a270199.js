import{b as r}from"./basic-8cbb2de4.js";import{t as a}from"./basic-451a22b8.js";import{f as l}from"./search-e618f654.js";import{aH as c,az as d,q as n,r as e,z as t}from"./index-3afa6c13.js";import"./check-fe9a82f7.js";import"./delete-6aebbd9b.js";import"./select-ab6ad5d3.js";import"./defineProperty-b185edd1.js";const u={class:"main-content"},_={class:"page-content"},p={class:"container-fluid"},m={class:"card"},f={class:"card-body"},v={class:"mb-3"},q={__name:"liste_of_users",setup(h){const s=c(null);return(b,i)=>(d(),n("div",u,[e("div",_,[e("div",p,[t(r,{pageTitle:"Liste des Utilisateurs",buttonText:"Nouveau Utilisateur",buttonLink:"user/new",requiredModule:"AjouterUtilisateurs"}),e("div",m,[e("div",f,[e("div",v,[t(l,{placeholder:"Rechercher par Motcle",onFilterUpdated:i[0]||(i[0]=o=>s.value=o),filters_fields:"search,role"})]),t(a,{apiUrl:"https://api.gestion-livraison.pro/api/users",ActiveCol:"1",Module:"user",filters_update:s.value,hidden_columns:["id","user_id","Active"]},null,8,["filters_update"])])])])])]))}};export{q as default};
