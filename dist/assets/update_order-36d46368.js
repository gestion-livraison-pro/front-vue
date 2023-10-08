import{bB as N,bU as D,aH as _,bD as Q,as as E,bC as y,m as R,az as d,q as n,r as t,bx as j,z as a,y as g,F as U,aK as w,bu as A,bj as B,b7 as F,o as L,p as M,a_ as f,aD as $,aA as q,bI as z}from"./index-3afa6c13.js";import{i as u}from"./input-e668dea8.js";import{b as H}from"./simple-2283d124.js";import{S as C}from"./select-ab6ad5d3.js";import{c as k}from"./check-fe9a82f7.js";import{t as K}from"./texterea-6a15ddd7.js";const i=p=>($("data-v-3765992a"),p=p(),q(),p),O={class:"main-content"},G={class:"page-content"},J={class:"container-fluid"},W={class:"row"},X={class:"col-md-8"},Y={class:"card"},Z={class:"card-body"},ee={class:"row"},oe={class:"card"},te={class:"card-body"},le=i(()=>t("h5",null,"Destinataire Informations",-1)),se={class:"row"},ae={class:"row"},ie={class:"row"},de={class:"card"},ne={class:"card-body"},ue=i(()=>t("h5",null,"Produits",-1)),re={class:"row my-4 mx-1"},me={key:0},ve={class:"row p-3 border-bottom"},pe={class:"card shadow"},ce={class:"row"},_e=i(()=>t("div",{class:"col-2 d-md-flex d-none"},[t("img",{class:"img-fluid",src:"https://via.placeholder.com/300",alt:"Card image cap"})],-1)),fe={class:"list-group list-group-flush col-md-10 col-sm-12 p-0 border shadow"},Ce={class:"list-group-item"},be={class:"d-flex flex-row justify-content-between align-items-center"},ge={class:"d-flex flex-row"},he={class:""},Ve=["onClick"],ye=i(()=>t("i",{class:"fas fa-times"},null,-1)),Ue=[ye],we={class:"list-group-item"},ke={class:"d-flex row justify-content-between align-items-center"},Pe={class:"d-flex justify-content-between align-items-center col-md-5 mb-3"},Te=i(()=>t("span",{class:"col-6"},"Quantité Stock",-1)),Se={class:"badge bg-success mx-3"},Ie=i(()=>t("div",{class:"vertical-border col-md-2 d-md-flex d-none"},null,-1)),xe={class:"d-flex jsutify-content-between align-items-center mb-3 col-md-5"},Ne=i(()=>t("span",{class:"col-6"},"Quantité",-1)),De={class:"row d-flex align-items-center mt-4"},Qe=i(()=>t("h5",{for:"validationCustom01",class:"form-label"},"Selectionner un Produit",-1)),Ee={class:"col-md-12 mt-3"},Re={key:0},je={class:"row p-3"},Ae={class:"card shadow border"},Be={class:"row"},Fe=i(()=>t("div",{class:"col-2 d-flex flex-row"},[t("img",{class:"img-fluid",src:"https://via.placeholder.com/300",alt:"Card image cap"})],-1)),Le={class:"list-group list-group-flush col-10"},Me={class:"list-group-item"},$e={class:"d-flex flex-row justify-content-between align-items-center"},qe={class:"d-flex flex-row"},ze={class:""},He={class:"badge bg-success mx-3"},Ke=["onClick"],Oe=i(()=>t("i",{class:"fas fa-plus"},null,-1)),Ge=[Oe],Je={key:1,class:"p-3 bg-light mt-4"},We=i(()=>t("p",null,"aucun resultat",-1)),Xe=[We],Ye={key:1},Ze={class:"row"},eo={class:"row"},oo={class:"col-md-4"},to={class:"card"},lo={class:"card-body"},so=i(()=>t("h5",null,"Commande Information",-1)),ao={class:"row"},io={class:"row mt-4 mx-1"},no={__name:"update_order",setup(p){const h=D(),b=_(""),r=_([]),c=_([]),s=_({Ref:"",Nom:"",Téléphone:"",Email:"",VilleId:"",Adresse:"",TitresProduits:"",TypeProduit:"",CategorieProduit:"",ProduitQuantite:"",PrixTotal:"",Commentaire:"",Si_Stock:1,ouvrir_colis:1,ClientID:""}),P=Q();E(async()=>{try{const l=await y("https://api.gestion-livraison.pro/api/products");console.log(l),l.length>0&&(c.value=l);const o=await y(`https://api.gestion-livraison.pro/api/order/${h.params.id}/get`);if(console.log(o),o){s.value={...s.value,...o};for(const e of o.products){const m=r.value.some(v=>v.id===e.id);if(console.log("isInCart"+m),!m){const v=c.value.find(x=>x.id===e.id);console.log("matchingProduct"+v),v&&r.value.push(v)}}}}catch(l){console.error("Error fetching data:",l)}});const V=R(()=>{const l=b.value.toLowerCase().trim();return console.log(l),l===""?c.value:c.value.filter(o=>o.Titre.toLowerCase().includes(l))}),T=l=>{r.value.some(e=>e.id===l.id)?alertify.error("le produit est deja selectionne"):(l.Qte=1,r.value.push(l))},S=l=>{const o=r.value.findIndex(e=>e.id===l);o!==-1&&r.value.splice(o,1)},I=async()=>{s.value.selectedProducts=r.value,await z(`https://api.gestion-livraison.pro/api/order/${h.params.id}/update`,s.value)};return(l,o)=>(d(),n("div",O,[t("div",G,[t("div",J,[t("form",{onSubmit:o[31]||(o[31]=j(()=>{},["prevent"]))},[t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("div",ee,[a(u,{modelValue:l.Ref,"onUpdate:modelValue":o[0]||(o[0]=e=>l.Ref=e),label:"Code d'envoi",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.Ref,"onUpdate:value":o[1]||(o[1]=e=>s.value.Ref=e)},null,8,["modelValue","value"])])])]),t("div",oe,[t("div",te,[le,t("div",se,[a(u,{modelValue:l.Nom,"onUpdate:modelValue":o[2]||(o[2]=e=>l.Nom=e),label:"Nom de Destinataire",type:"text",Class_Content:"col-md-6 mt-4",value:s.value.Nom,"onUpdate:value":o[3]||(o[3]=e=>s.value.Nom=e)},null,8,["modelValue","value"]),a(u,{modelValue:l.Téléphone,"onUpdate:modelValue":o[4]||(o[4]=e=>l.Téléphone=e),label:"Téléphone",type:"phone",Class_Content:"col-md-6 mt-4",value:s.value.Téléphone,"onUpdate:value":o[5]||(o[5]=e=>s.value.Téléphone=e)},null,8,["modelValue","value"])]),t("div",ae,[a(u,{modelValue:l.Email,"onUpdate:modelValue":o[6]||(o[6]=e=>l.Email=e),label:"E-mail",type:"text",Class_Content:"col-md-6 mt-4",value:s.value.Email,"onUpdate:value":o[7]||(o[7]=e=>s.value.Email=e)},null,8,["modelValue","value"]),a(C,{modelValue:l.VilleId,"onUpdate:modelValue":o[8]||(o[8]=e=>l.VilleId=e),value:s.value.VilleId,apiUrl:"https://api.gestion-livraison.pro/api/cities",fieldName:"Nom",first_option:"Selectionner une Categorie",label:"Ville",Class_Content:"col-md-6 mt-4","onUpdate:value":o[9]||(o[9]=e=>s.value.VilleId=e)},null,8,["modelValue","value"])]),t("div",ie,[a(u,{modelValue:l.Adresse,"onUpdate:modelValue":o[10]||(o[10]=e=>l.Adresse=e),label:"Adresse",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.Adresse,"onUpdate:value":o[11]||(o[11]=e=>s.value.Adresse=e)},null,8,["modelValue","value"])])])]),t("div",de,[t("div",ne,[ue,t("div",re,[g(" Depuis Stock "),a(k,{modelValue:l.Si_Stock,"onUpdate:modelValue":o[12]||(o[12]=e=>l.Si_Stock=e),value:s.value.Si_Stock,id_check:"is_stock_product",Class_Content:"col-md-1 mb-1 mb-sm-0",is_checked:s.value.Si_Stock,checked:s.value.Si_Stock===1,"onUpdate:value":o[13]||(o[13]=e=>s.value.Si_Stock=e)},null,8,["modelValue","value","is_checked","checked"])]),s.value.Si_Stock===1?(d(),n("div",me,[t("div",ve,[(d(!0),n(U,null,w(r.value,e=>(d(),n("div",{key:e.id,class:"col-md-12"},[t("div",pe,[t("div",ce,[_e,t("ul",fe,[t("li",Ce,[t("div",be,[t("div",ge,[t("strong",he,f(e.Titre),1)]),t("button",{class:"btn btn-danger m-0 0-0",onClick:m=>S(e.id)},Ue,8,Ve)])]),t("li",we,[t("div",ke,[t("p",Pe,[Te,g(),t("span",Se,f(e.Quantite),1)]),Ie,t("p",xe,[Ne,a(u,{modelValue:e.qte,"onUpdate:modelValue":m=>e.qte=m,type:"number",Class_Content:"col-6 ",value:e.Qte,"onUpdate:value":m=>e.Qte=m},null,8,["modelValue","onUpdate:modelValue","value","onUpdate:value"])])])])])])])]))),128))]),t("div",De,[Qe,t("div",Ee,[A(t("input",{type:"text",class:"form-control",id:"validationCustom01",placeholder:"Produit Exemple","onUpdate:modelValue":o[14]||(o[14]=e=>b.value=e)},null,512),[[B,b.value]])])]),V.value.length?(d(),n("div",Re,[t("div",je,[(d(!0),n(U,null,w(V.value,e=>(d(),n("div",{key:e.id,class:"col-md-6"},[t("div",Ae,[t("div",Be,[Fe,t("ul",Le,[t("li",Me,[t("div",$e,[t("div",qe,[t("strong",ze,f(e.Titre),1),t("span",He,f(e.Quantite),1)]),t("div",null,[t("button",{class:"btn btn-primary w-100",onClick:m=>T(e)},Ge,8,Ke)])])])])])])]))),128))])])):(d(),n("div",Je,Xe))])):(d(),n("div",Ye,[t("div",Ze,[a(u,{modelValue:l.TitresProduits,"onUpdate:modelValue":o[15]||(o[15]=e=>l.TitresProduits=e),label:"Titre des Produits",type:"text",Class_Content:"col-md-6 mt-4",value:s.value.TitresProduits,"onUpdate:value":o[16]||(o[16]=e=>s.value.TitresProduits=e)},null,8,["modelValue","value"]),a(u,{modelValue:l.ProduitQuantite,"onUpdate:modelValue":o[17]||(o[17]=e=>l.ProduitQuantite=e),label:"Quantite",type:"number",Class_Content:"col-md-6 mt-4",value:s.value.ProduitQuantite,"onUpdate:value":o[18]||(o[18]=e=>s.value.ProduitQuantite=e)},null,8,["modelValue","value"])]),t("div",eo,[a(C,{modelValue:l.CategorieProduit,"onUpdate:modelValue":o[19]||(o[19]=e=>l.CategorieProduit=e),value:s.value.CategorieProduit,apiUrl:"https://api.gestion-livraison.pro/api/product/categories",fieldName:"Nom",first_option:"Selectionner une Categorie",label:"Categorie",Class_Content:"col-md-6 mt-4","onUpdate:value":o[20]||(o[20]=e=>s.value.CategorieProduit=e)},null,8,["modelValue","value"]),a(C,{modelValue:l.TypeProduit,"onUpdate:modelValue":o[21]||(o[21]=e=>l.TypeProduit=e),value:s.value.TypeProduit,apiUrl:"https://api.gestion-livraison.pro/api/product/types",fieldName:"Nom",first_option:"Selectionner le Type",label:"Type",Class_Content:"col-md-6 mt-4","onUpdate:value":o[22]||(o[22]=e=>s.value.TypeProduit=e)},null,8,["modelValue","value"])])]))])])]),t("div",oo,[t("div",to,[t("div",lo,[so,t("div",ao,[t("div",io,[g(" Ouvrir le Colis "),a(k,{modelValue:l.ouvrir_colis,"onUpdate:modelValue":o[23]||(o[23]=e=>l.ouvrir_colis=e),value:s.value.ouvrir_colis,id_check:"open_package",Class_Content:"col-md-1 mb-1 mb-sm-0 mx-3",is_checked:s.value.ouvrir_colis,checked:s.value.ouvrir_colis===1,"onUpdate:value":o[24]||(o[24]=e=>s.value.ouvrir_colis=e)},null,8,["modelValue","value","is_checked","checked"])]),F(P)!="customer"?(d(),L(C,{key:0,modelValue:l.ClientID,"onUpdate:modelValue":o[25]||(o[25]=e=>l.ClientID=e),value:s.value.ClientID,apiUrl:"https://api.gestion-livraison.pro/api/customers",fieldName:"Nom",first_option:"Selectionner le Client",label:"Client",Class_Content:"col-md-12 mt-4","onUpdate:value":o[26]||(o[26]=e=>s.value.ClientID=e)},null,8,["modelValue","value"])):M("",!0),a(u,{modelValue:l.PrixTotal,"onUpdate:modelValue":o[27]||(o[27]=e=>l.PrixTotal=e),label:"Prix Total (Frais Livraison inclus)",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.PrixTotal,"onUpdate:value":o[28]||(o[28]=e=>s.value.PrixTotal=e)},null,8,["modelValue","value"]),a(K,{modelValue:l.Commentaire,"onUpdate:modelValue":o[29]||(o[29]=e=>l.Commentaire=e),label:"Commentaire",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.Commentaire,"onUpdate:value":o[30]||(o[30]=e=>s.value.Commentaire=e)},null,8,["modelValue","value"]),a(H,{onClick:I,type:"submit",Class_Content:"col-md-12 mt-4",btn_text:"Modifier Commande"})])])])])])],32)])])]))}},_o=N(no,[["__scopeId","data-v-3765992a"]]);export{_o as default};
