import{az as m,q as n,r as l,bx as i,z as t,bH as r,bI as u}from"./index-3afa6c13.js";import{i as s}from"./input-e668dea8.js";import{b as p}from"./simple-2283d124.js";import{S as f}from"./select-ab6ad5d3.js";const v={class:"main-content"},V={class:"page-content"},b={class:"container-fluid"},D={class:"row"},C={class:"col-md-8"},U={class:"card"},y={class:"card-body"},M=l("h5",null,"Utilisateur Information",-1),P={class:"row"},N={class:"col-md-4"},g={class:"card"},w={class:"card-body"},R={class:"row"},A={data(){return{formData:{Nom:"",Téléphone:"",Email:"",Adresse:"",MotdePasse:"",Role:""}}},async mounted(){const d=this.$route.params.id,e=await r(`https://api.gestion-livraison.pro/api/user/${d}/get`);this.formData={...e}},methods:{async submitForm(){const d=this.$route.params.id;await u(`https://api.gestion-livraison.pro/api/user/${d}/update`,this.formData)}}},B=Object.assign(A,{__name:"update_user",setup(d){return(e,o)=>(m(),n("div",v,[l("div",V,[l("div",b,[l("form",{onSubmit:o[14]||(o[14]=i((...a)=>e.submitForm&&e.submitForm(...a),["prevent"]))},[l("div",D,[l("div",C,[l("div",U,[l("div",y,[M,l("div",P,[t(s,{modelValue:e.Nom,"onUpdate:modelValue":o[0]||(o[0]=a=>e.Nom=a),label:"Nom Complete",type:"text",Class_Content:"col-md-12 mt-4",value:e.formData.Nom,"onUpdate:value":o[1]||(o[1]=a=>e.formData.Nom=a)},null,8,["modelValue","value"]),t(s,{modelValue:e.Téléphone,"onUpdate:modelValue":o[2]||(o[2]=a=>e.Téléphone=a),label:"Telephone",type:"text",Class_Content:"col-md-6 mt-4",value:e.formData.Téléphone,"onUpdate:value":o[3]||(o[3]=a=>e.formData.Téléphone=a)},null,8,["modelValue","value"]),t(s,{modelValue:e.Email,"onUpdate:modelValue":o[4]||(o[4]=a=>e.Email=a),label:"E-mail",type:"email",Class_Content:"col-md-6 mt-4",value:e.formData.Email,"onUpdate:value":o[5]||(o[5]=a=>e.formData.Email=a)},null,8,["modelValue","value"]),t(s,{modelValue:e.Adresse,"onUpdate:modelValue":o[6]||(o[6]=a=>e.Adresse=a),label:"Adresse",type:"text",Class_Content:"col-md-12 mt-4",value:e.formData.Adresse,"onUpdate:value":o[7]||(o[7]=a=>e.formData.Adresse=a)},null,8,["modelValue","value"]),t(s,{modelValue:e.MotdePasse,"onUpdate:modelValue":o[8]||(o[8]=a=>e.MotdePasse=a),label:"Mot de Passe",type:"text",Class_Content:"col-md-6 mt-4",value:e.formData.MotdePasse,"onUpdate:value":o[9]||(o[9]=a=>e.formData.MotdePasse=a)},null,8,["modelValue","value"]),t(s,{modelValue:e.confirmMotdePasse,"onUpdate:modelValue":o[10]||(o[10]=a=>e.confirmMotdePasse=a),label:"Confirmer Mot de Passe",type:"text",Class_Content:"col-md-6 mt-4",value:e.formData.confirmMotdePasse,"onUpdate:value":o[11]||(o[11]=a=>e.formData.confirmMotdePasse=a)},null,8,["modelValue","value"])])])])]),l("div",N,[l("div",g,[l("div",w,[l("div",R,[t(s,{label:"Image de profile",type:"file",Class_Content:"col-md-12 mt-4"}),t(f,{modelValue:e.formData.Role,"onUpdate:modelValue":o[12]||(o[12]=a=>e.formData.Role=a),value:e.formData.Role,apiUrl:"https://api.gestion-livraison.pro/api/roles",fieldName:"Nom",first_option:"Selectionner un Role",label:"Role",Class_Content:"col-md-12 mt-4","onUpdate:value":o[13]||(o[13]=a=>e.formData.Role=a)},null,8,["modelValue","value"]),t(p,{type:"submit",Class_Content:"col-md-12 mt-4",btn_text:"Ajouter Utilisateur"})])])])])])],32)])])]))}});export{B as default};
