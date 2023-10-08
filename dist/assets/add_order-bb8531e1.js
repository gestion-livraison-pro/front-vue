import{bB as T,aH as p,bD as S,as as x,bC as N,m as D,az as d,q as n,r as l,bx as I,z as a,y as c,F as h,aK as g,bu as Q,bj as E,b7 as j,o as A,p as R,a_ as _,aD as B,aA as F,bG as L}from"./index-3afa6c13.js";import{i as u}from"./input-e668dea8.js";import{b as M}from"./simple-2283d124.js";import{S as C}from"./select-ab6ad5d3.js";import{c as y}from"./check-fe9a82f7.js";import{t as q}from"./texterea-6a15ddd7.js";const i=v=>(B("data-v-98dac721"),v=v(),F(),v),z={class:"main-content"},$={class:"page-content"},G={class:"container-fluid"},H={class:"row"},K={class:"col-md-8"},O={class:"card"},J={class:"card-body"},W={class:"row"},X={class:"card"},Y={class:"card-body"},Z=i(()=>l("h5",null,"Destinataire Informations",-1)),ee={class:"row"},oe={class:"row"},le={class:"row"},te={class:"card"},se={class:"card-body"},ae=i(()=>l("h5",null,"Produits",-1)),ie={class:"row my-4 mx-1"},de={key:0},ne={class:"row p-3 border-bottom"},ue={class:"card shadow"},re={class:"row"},me=i(()=>l("div",{class:"col-2 d-md-flex d-none"},[l("img",{class:"img-fluid",src:"https://via.placeholder.com/300",alt:"Card image cap"})],-1)),ve={class:"list-group list-group-flush col-md-10 col-sm-12 p-0 border shadow"},pe={class:"list-group-item"},ce={class:"d-flex flex-row justify-content-between align-items-center"},_e={class:"d-flex flex-row"},Ce={class:""},fe=["onClick"],be=i(()=>l("i",{class:"fas fa-times"},null,-1)),Ve=[be],he={class:"list-group-item"},ge={class:"d-flex row justify-content-between align-items-center"},ye={class:"d-flex justify-content-between align-items-center col-md-5 mb-3"},we=i(()=>l("span",{class:"col-6"},"Quantité Stock",-1)),Ue={class:"badge bg-success mx-3"},ke=i(()=>l("div",{class:"vertical-border col-md-2 d-md-flex d-none"},null,-1)),Pe={class:"d-flex jsutify-content-between align-items-center mb-3 col-md-5"},Te=i(()=>l("span",{class:"col-6"},"Quantité",-1)),Se={class:"row d-flex align-items-center mt-4"},xe=i(()=>l("h5",{for:"validationCustom01",class:"form-label"},"Selectionner un Produit",-1)),Ne={class:"col-md-12 mt-3"},De={key:0},Ie={class:"row p-3"},Qe={class:"card shadow border"},Ee={class:"row"},je=i(()=>l("div",{class:"col-2 d-flex flex-row"},[l("img",{class:"img-fluid",src:"https://via.placeholder.com/300",alt:"Card image cap"})],-1)),Ae={class:"list-group list-group-flush col-10"},Re={class:"list-group-item"},Be={class:"d-flex flex-row justify-content-between align-items-center"},Fe={class:"d-flex flex-row"},Le={class:""},Me={class:"badge bg-success mx-3"},qe=["onClick"],ze=i(()=>l("i",{class:"fas fa-plus"},null,-1)),$e=[ze],Ge={key:1,class:"p-3 bg-light mt-4"},He=i(()=>l("p",null,"aucun resultat",-1)),Ke=[He],Oe={key:1},Je={class:"row"},We={class:"row"},Xe={class:"col-md-4"},Ye={class:"card"},Ze={class:"card-body"},eo=i(()=>l("h5",null,"Commande Information",-1)),oo={class:"row"},lo={class:"row mt-4 mx-1"},to={__name:"add_order",setup(v){const f=p(""),r=p([]),b=p([]),s=p({Ref:"",Nom:"",Téléphone:"",Email:"",Ville:"",Adresse:"",TitresProduits:"",TypeProduit:"",CategorieProduit:"",ProduitQuantite:"",PrixTotal:"",Commentaire:"",si_Stock:1,ouvrir_colis:1,ClientID:""}),w=S();x(async()=>{console.log("Mounted");try{const t=await N("https://api.gestion-livraison.pro/api/products");console.log(t),t.length>0&&(b.value=t)}catch(t){console.error("Error fetching data:",t)}});const V=D(()=>{const t=f.value.toLowerCase().trim();return console.log(t),t===""?b.value:b.value.filter(o=>o.Titre.toLowerCase().includes(t))}),U=t=>{r.value.some(e=>e.id===t.id)?alertify.error("le produit est deja selectionne"):(t.Qte=1,r.value.push(t))},k=t=>{const o=r.value.findIndex(e=>e.id===t);o!==-1&&r.value.splice(o,1)},P=async()=>{s.value.selectedProducts=r.value,await L("https://api.gestion-livraison.pro/api/order/new",s.value)};return(t,o)=>(d(),n("div",z,[l("div",$,[l("div",G,[l("form",{onSubmit:o[31]||(o[31]=I(()=>{},["prevent"]))},[l("div",H,[l("div",K,[l("div",O,[l("div",J,[l("div",W,[a(u,{modelValue:t.Ref,"onUpdate:modelValue":o[0]||(o[0]=e=>t.Ref=e),label:"Code d'envoi",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.Ref,"onUpdate:value":o[1]||(o[1]=e=>s.value.Ref=e)},null,8,["modelValue","value"])])])]),l("div",X,[l("div",Y,[Z,l("div",ee,[a(u,{modelValue:t.Nom,"onUpdate:modelValue":o[2]||(o[2]=e=>t.Nom=e),label:"Nom de Destinataire",type:"text",Class_Content:"col-md-6 mt-4",value:s.value.Nom,"onUpdate:value":o[3]||(o[3]=e=>s.value.Nom=e)},null,8,["modelValue","value"]),a(u,{modelValue:t.Téléphone,"onUpdate:modelValue":o[4]||(o[4]=e=>t.Téléphone=e),label:"Téléphone",type:"phone",Class_Content:"col-md-6 mt-4",value:s.value.Téléphone,"onUpdate:value":o[5]||(o[5]=e=>s.value.Téléphone=e)},null,8,["modelValue","value"])]),l("div",oe,[a(u,{modelValue:t.Email,"onUpdate:modelValue":o[6]||(o[6]=e=>t.Email=e),label:"E-mail",type:"text",Class_Content:"col-md-6 mt-4",value:s.value.Email,"onUpdate:value":o[7]||(o[7]=e=>s.value.Email=e)},null,8,["modelValue","value"]),a(C,{modelValue:t.Ville,"onUpdate:modelValue":o[8]||(o[8]=e=>t.Ville=e),value:s.value.Ville,apiUrl:"https://api.gestion-livraison.pro/api/cities",fieldName:"Nom",first_option:"Selectionner une Categorie",label:"Ville",Class_Content:"col-md-6 mt-4","onUpdate:value":o[9]||(o[9]=e=>s.value.Ville=e)},null,8,["modelValue","value"])]),l("div",le,[a(u,{modelValue:t.Adresse,"onUpdate:modelValue":o[10]||(o[10]=e=>t.Adresse=e),label:"Adresse",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.Adresse,"onUpdate:value":o[11]||(o[11]=e=>s.value.Adresse=e)},null,8,["modelValue","value"])])])]),l("div",te,[l("div",se,[ae,l("div",ie,[c(" Depuis Stock "),a(y,{modelValue:t.si_Stock,"onUpdate:modelValue":o[12]||(o[12]=e=>t.si_Stock=e),value:s.value.si_Stock,id_check:"is_stock_product",Class_Content:"col-md-1 mb-1 mb-sm-0",is_checked:s.value.si_Stock,checked:s.value.si_Stock===1,"onUpdate:value":o[13]||(o[13]=e=>s.value.si_Stock=e)},null,8,["modelValue","value","is_checked","checked"])]),s.value.si_Stock===1?(d(),n("div",de,[l("div",ne,[(d(!0),n(h,null,g(r.value,e=>(d(),n("div",{key:e.id,class:"col-md-12"},[l("div",ue,[l("div",re,[me,l("ul",ve,[l("li",pe,[l("div",ce,[l("div",_e,[l("strong",Ce,_(e.Titre),1)]),l("button",{class:"btn btn-danger m-0 0-0",onClick:m=>k(e.id)},Ve,8,fe)])]),l("li",he,[l("div",ge,[l("p",ye,[we,c(),l("span",Ue,_(e.Quantite),1)]),ke,l("p",Pe,[Te,c(),a(u,{modelValue:e.qte,"onUpdate:modelValue":m=>e.qte=m,type:"number",Class_Content:"col-6 ",value:e.Qte,"onUpdate:value":m=>e.Qte=m},null,8,["modelValue","onUpdate:modelValue","value","onUpdate:value"])])])])])])])]))),128))]),l("div",Se,[xe,l("div",Ne,[Q(l("input",{type:"text",class:"form-control",id:"validationCustom01",placeholder:"Produit Exemple","onUpdate:modelValue":o[14]||(o[14]=e=>f.value=e)},null,512),[[E,f.value]])])]),V.value.length?(d(),n("div",De,[l("div",Ie,[(d(!0),n(h,null,g(V.value,e=>(d(),n("div",{key:e.id,class:"col-md-6"},[l("div",Qe,[l("div",Ee,[je,l("ul",Ae,[l("li",Re,[l("div",Be,[l("div",Fe,[l("strong",Le,_(e.Titre),1),l("span",Me,_(e.Quantite),1)]),l("div",null,[l("button",{class:"btn btn-primary w-100",onClick:m=>U(e)},$e,8,qe)])])])])])])]))),128))])])):(d(),n("div",Ge,Ke))])):(d(),n("div",Oe,[l("div",Je,[a(u,{modelValue:t.TitresProduits,"onUpdate:modelValue":o[15]||(o[15]=e=>t.TitresProduits=e),label:"Titre des Produits",type:"text",Class_Content:"col-md-6 mt-4",value:s.value.TitresProduits,"onUpdate:value":o[16]||(o[16]=e=>s.value.TitresProduits=e)},null,8,["modelValue","value"]),a(u,{modelValue:t.ProduitQuantite,"onUpdate:modelValue":o[17]||(o[17]=e=>t.ProduitQuantite=e),label:"Quantite",type:"number",Class_Content:"col-md-6 mt-4",value:s.value.ProduitQuantite,"onUpdate:value":o[18]||(o[18]=e=>s.value.ProduitQuantite=e)},null,8,["modelValue","value"])]),l("div",We,[a(C,{modelValue:t.CategorieProduit,"onUpdate:modelValue":o[19]||(o[19]=e=>t.CategorieProduit=e),value:s.value.CategorieProduit,apiUrl:"https://api.gestion-livraison.pro/api/product/categories",fieldName:"Nom",first_option:"Selectionner une Categorie",label:"Categorie",Class_Content:"col-md-6 mt-4","onUpdate:value":o[20]||(o[20]=e=>s.value.CategorieProduit=e)},null,8,["modelValue","value"]),a(C,{modelValue:t.TypeProduit,"onUpdate:modelValue":o[21]||(o[21]=e=>t.TypeProduit=e),value:s.value.TypeProduit,apiUrl:"https://api.gestion-livraison.pro/api/product/types",fieldName:"Nom",first_option:"Selectionner le Type",label:"Type",Class_Content:"col-md-6 mt-4","onUpdate:value":o[22]||(o[22]=e=>s.value.TypeProduit=e)},null,8,["modelValue","value"])])]))])])]),l("div",Xe,[l("div",Ye,[l("div",Ze,[eo,l("div",oo,[l("div",lo,[c(" Ouvrir le Colis "),a(y,{modelValue:t.ouvrir_colis,"onUpdate:modelValue":o[23]||(o[23]=e=>t.ouvrir_colis=e),value:s.value.ouvrir_colis,id_check:"open_package",Class_Content:"col-md-1 mb-1 mb-sm-0 mx-3",is_checked:s.value.ouvrir_colis,checked:s.value.ouvrir_colis===1,"onUpdate:value":o[24]||(o[24]=e=>s.value.ouvrir_colis=e)},null,8,["modelValue","value","is_checked","checked"])]),j(w)!="customer"?(d(),A(C,{key:0,modelValue:t.ClientID,"onUpdate:modelValue":o[25]||(o[25]=e=>t.ClientID=e),value:s.value.ClientID,apiUrl:"https://api.gestion-livraison.pro/api/customers",fieldName:"Nom",first_option:"Selectionner le Client",label:"Client",Class_Content:"col-md-12 mt-4","onUpdate:value":o[26]||(o[26]=e=>s.value.ClientID=e)},null,8,["modelValue","value"])):R("",!0),a(u,{modelValue:t.PrixTotal,"onUpdate:modelValue":o[27]||(o[27]=e=>t.PrixTotal=e),label:"Prix Total (Frais Livraison inclus)",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.PrixTotal,"onUpdate:value":o[28]||(o[28]=e=>s.value.PrixTotal=e)},null,8,["modelValue","value"]),a(q,{modelValue:t.Commentaire,"onUpdate:modelValue":o[29]||(o[29]=e=>t.Commentaire=e),label:"Commentaire",type:"text",Class_Content:"col-md-12 mt-4",value:s.value.Commentaire,"onUpdate:value":o[30]||(o[30]=e=>s.value.Commentaire=e)},null,8,["modelValue","value"]),a(M,{onClick:P,type:"submit",Class_Content:"col-md-12 mt-4",btn_text:"Ajouter Commande"})])])])])])],32)])])]))}},mo=T(to,[["__scopeId","data-v-98dac721"]]);export{mo as default};
