import{b as d}from"./bon-c3b3a92b.js";import{b as m}from"./basic-8cbb2de4.js";import{f as _}from"./search-e618f654.js";import{s as l,b as p}from"./bon_scanner-526c19d2.js";import{aH as u,az as t,q as b,r as e,z as o,o as r,p as n,F as f,bD as v}from"./index-3afa6c13.js";import"./check-fe9a82f7.js";import"./delete-6aebbd9b.js";import"./select-ab6ad5d3.js";import"./defineProperty-b185edd1.js";import"./vue-qrcode-reader-5b2db72e.js";const h={class:"main-content"},k={class:"page-content"},g={class:"container-fluid"},R={class:"card"},B={class:"card-body"},y={class:"mb-3"},D={class:"table-responsive mt-3"},N={components:{scan_bar:l,bon_scanner:p},data(){return{Role:v()}}},H=Object.assign(N,{__name:"liste_of_bons",setup(U){const a=u(null);return(s,i)=>(t(),b(f,null,[e("div",h,[e("div",k,[e("div",g,[o(m,{pageTitle:"Bon de Ramassage",buttonText:"Nouveau Bon de Ramassage",buttonLink:"/bons/pickup/new"}),e("div",R,[e("div",B,[e("div",y,[o(_,{placeholder:"Rechercher par Motcle",onFilterUpdated:i[0]||(i[0]=c=>a.value=c),filters_fields:"customer,search,date"})]),e("div",D,[o(d,{apiUrl:"https://api.gestion-livraison.pro/api/bons/pickups",keyword:"pickup",api_name_middle:"pickup",validation_role:"ValidationBonDeRamassage",filters_update:a.value},null,8,["filters_update"])])])])])])]),s.Role!="customer"?(t(),r(l,{key:0})):n("",!0),s.Role!="customer"?(t(),r(p,{key:1,getDataUrl:"https://api.gestion-livraison.pro/api/bon/order/pickup/",updateDataUrl:"https://api.gestion-livraison.pro/api/bon/pickup/order/valid"})):n("",!0)],64))}});export{H as default};
