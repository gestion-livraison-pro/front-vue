import{b as C}from"./heading_modal-8cb43ed1.js";import{bB as U,bI as V,bG as w,bJ as R,aM as g,az as l,q as i,r as o,F as c,aK as b,a_ as v,y as x,p as _,bu as F,bi as k,aj as S,bx as D,z as n,aD as N,aA as P,x as I,aH as A}from"./index-3afa6c13.js";import{i as M}from"./input-e668dea8.js";import{b as j}from"./simple-2283d124.js";import{S as q}from"./select-ab6ad5d3.js";import{S as T}from"./delete-6aebbd9b.js";import{f as L}from"./search-e618f654.js";import"./defineProperty-b185edd1.js";const B={components:{input_text:M,button_simple:j,SelectDropdown:q,Supprimer:T},data(){return{pagination:[],filters:"",pagination_filters:"",per_page:10,page:1,formData:{Nom:"",Duree:"",Prix:"",Retour:"",Refuse:"",CodeId:"",id:""},data:[],tableFields:[],module:[],delete_row_id:"",deletedRow:"",loading:!1}},props:{apiUrl:{type:String,required:!0},Module:{type:String,required:!0},filters_update:{type:String,required:!0},hidden_columns:{type:Object,required:!0}},methods:{loadPage(a){this.page=a;let e;this.filters?e=this.filters+"&page="+this.page+"&per_page="+this.per_page:e="?page="+this.page+"&per_page="+this.per_page,this.getFetchData(e)},pageCount(){let a;this.filters?a=this.filters+"&page="+this.page+"&per_page="+this.per_page:a="?page="+this.page+"&per_page="+this.per_page,this.getFetchData(a),console.log(a)},async submitFormUpdate(){console.log(this.formData);const a=this.formData.id,e=await V(`https://api.gestion-livraison.pro/api/city/${a}/update`,this.formData);e.data&&(this.formData={id:"",Nom:"",Duree:"",Prix:"",Retour:"",Refuse:"",CodeId:""},$("#modalUpdate").modal("hide"));const d=this.data.findIndex(f=>f.id===e.data.id);d!==-1&&(this.data[d]={...this.data[d],...e.data})},openUpdateModal(a){this.formData={...a},$("#modalUpdate").modal("show")},async submitFormAdd(){console.log(this.formData);const a=await w("https://api.gestion-livraison.pro/api/city/new",this.formData);a.data&&(this.formData={id:"",Nom:"",Duree:"",Prix:"",Retour:"",Refuse:"",CodeId:""},$("#modalAdd").modal("hide")),this.data.push(a.data)},async getFetchData(a=null){this.loading=!0;const e=await R(this.apiUrl+a);this.data=e.data,this.pagination=e.pagination,this.data.length>0&&(this.tableFields=Object.keys(e.data[0]),this.tableFields=this.tableFields.filter(d=>!this.hidden_columns.includes(d))),this.loading=!1}},mounted(){this.getFetchData("")},watch:{filters_update(a){this.page=1,this.filters=a,this.getFetchData(a)},deletedRow(a){const e=this.data.findIndex(d=>d.id===parseInt(a));e!==-1&&this.data.splice(e,1)}}},p=a=>(N("data-v-6c67bef3"),a=a(),P(),a),z={key:0,class:"table-responsive"},H={class:"table table-bordered"},O={class:"bg-light"},E=p(()=>o("th",null,"Action",-1)),G={class:"header_side"},J={key:0},K={class:"table_actions"},Q={class:"d-flex align-items-center order-actions"},W=["onClick"],X=p(()=>o("i",{class:"fas fa-pencil-alt"},null,-1)),Y=[X],Z=["onClick"],ee=p(()=>o("i",{class:"fas fa-trash-alt"},null,-1)),te=[ee],oe={class:"row d-flex justify-content-between align-items-center"},ae={class:"col-md-1"},se=I('<option value="10" data-v-6c67bef3>10</option><option value="20" data-v-6c67bef3>20</option><option value="50" data-v-6c67bef3>50</option><option value="100" data-v-6c67bef3>100</option><option value="200" data-v-6c67bef3>200</option><option value="500" data-v-6c67bef3>500</option><option value="1000" data-v-6c67bef3>1000</option>',7),le=[se],ie={class:"col-md-6 d-flex justify-content-end align-items-center"},ne={class:"pagination d-flex align-items-end"},de={key:0,class:"page-item"},re=["onClick"],ue={key:1,class:"page-item"},me={key:1,class:"d-flex justify-content-center py-4 bg-light"},pe=p(()=>o("span",{class:"loader"},null,-1)),fe=[pe],ce={key:2,class:"p-3 text-center bg-light"},be=p(()=>o("p",null,"no-data",-1)),ve=[be],ge={id:"modalUpdate",class:"modal fade",tabindex:"-1","aria-labelledby":"myModalLabel","aria-hidden":"true"},_e={class:"modal-dialog"},he={class:"modal-content"},De=p(()=>o("div",{class:"modal-header"},[o("h5",{class:"modal-title mt-0",id:"myModalLabel"},"ID"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ye={class:"modal-body"},Ce={class:"row"},Ue=p(()=>o("div",{class:"modal-footer"},[o("button",{type:"button",class:"btn btn-secondary waves-effect waves-light","data-bs-dismiss":"modal"},"Fermer"),o("button",{type:"submit",class:"btn btn-primary waves-effect waves-light"},"Modifier")],-1)),Ve={id:"modalAdd",class:"modal fade",tabindex:"-1","aria-labelledby":"modalAdd","aria-hidden":"true"},we={class:"modal-dialog"},Re={class:"modal-content"},xe=p(()=>o("div",{class:"modal-header"},[o("h5",{class:"modal-title mt-0",id:"modalAdd"},"ID"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Fe={class:"modal-body"},ke={class:"row"},Se=p(()=>o("div",{class:"modal-footer"},[o("button",{type:"button",class:"btn btn-secondary waves-effect waves-light","data-bs-dismiss":"modal"},"Fermer"),o("button",{type:"submit",class:"btn btn-primary waves-effect waves-light"},"Ajouter")],-1));function Ne(a,e,d,f,s,r){const h=g("SelectDropdown"),u=g("input_text"),y=g("Supprimer");return l(),i(c,null,[s.data.length>0?(l(),i("div",z,[o("table",H,[o("thead",O,[o("tr",null,[(l(!0),i(c,null,b(s.tableFields,t=>(l(),i("th",{key:t},v(t),1))),128)),E])]),o("tbody",null,[(l(!0),i(c,null,b(s.data,t=>(l(),i("tr",{key:t.id},[(l(!0),i(c,null,b(s.tableFields,m=>(l(),i("td",{key:m},[o("span",G,v(m)+" : ",1),x(" "+v(t[m])+" ",1),m==="Prix"||m==="Retour"||m==="Refuse"?(l(),i("span",J," DH")):_("",!0)]))),128)),o("td",K,[o("div",Q,[o("button",{type:"button",class:"btn bg-light btn-sm waves-effect mx-1",onClick:m=>r.openUpdateModal(t)},Y,8,W),o("button",{type:"button",class:"btn bg-light btn-sm waves-effect mx-1",onClick:m=>{s.delete_row_id=t.id},"data-bs-toggle":"modal","data-bs-target":"#DeleteRow"},te,8,Z)])])]))),128))])]),o("div",oe,[o("div",ae,[F(o("select",{class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>s.per_page=t),onChange:e[1]||(e[1]=(...t)=>r.pageCount&&r.pageCount(...t))},le,544),[[k,s.per_page]])]),o("nav",ie,[o("ul",ne,[s.pagination.current_page>1?(l(),i("li",de,[o("a",{class:"page-link",href:"#",onClick:e[2]||(e[2]=t=>r.loadPage(s.pagination.current_page-1))},"Précédent")])):_("",!0),(l(!0),i(c,null,b(s.pagination.last_page,t=>(l(),i("li",{class:S(["page-item",{active:t===s.pagination.current_page}]),key:t},[o("a",{class:"page-link",href:"#",onClick:m=>r.loadPage(t)},v(t),9,re)],2))),128)),s.pagination.current_page<s.pagination.last_page?(l(),i("li",ue,[o("a",{class:"page-link",href:"#",onClick:e[3]||(e[3]=t=>r.loadPage(s.pagination.current_page+1))},"Suivant")])):_("",!0)])])])])):s.loading?(l(),i("div",me,fe)):(l(),i("div",ce,ve)),o("div",ge,[o("form",{onSubmit:e[15]||(e[15]=D((...t)=>r.submitFormUpdate&&r.submitFormUpdate(...t),["prevent"]))},[o("div",_e,[o("div",he,[De,o("div",ye,[n(h,{value:s.formData.CodeId,apiUrl:"https://api.gestion-livraison.pro/api/cities/codes",fieldName:"Nom",first_option:"Selectionner le Code",label:"Code",Class_Content:"col-md-12 mt-4","onUpdate:value":e[4]||(e[4]=t=>s.formData.CodeId=t)},null,8,["value"]),n(u,{modelValue:a.Prix,"onUpdate:modelValue":e[5]||(e[5]=t=>a.Prix=t),label:"Prix",type:"text",Class_Content:"col-md-12 mt-4",value:s.formData.Prix,"onUpdate:value":e[6]||(e[6]=t=>s.formData.Prix=t)},null,8,["modelValue","value"]),o("div",Ce,[n(u,{modelValue:a.Refuse,"onUpdate:modelValue":e[7]||(e[7]=t=>a.Refuse=t),label:"Refuse",type:"text",Class_Content:"col-md-6 mt-4",value:s.formData.Refuse,"onUpdate:value":e[8]||(e[8]=t=>s.formData.Refuse=t)},null,8,["modelValue","value"]),n(u,{modelValue:a.Retour,"onUpdate:modelValue":e[9]||(e[9]=t=>a.Retour=t),label:"Retour",type:"text",Class_Content:"col-md-6 mt-4",value:s.formData.Retour,"onUpdate:value":e[10]||(e[10]=t=>s.formData.Retour=t)},null,8,["modelValue","value"])]),n(u,{modelValue:a.Duree,"onUpdate:modelValue":e[11]||(e[11]=t=>a.Duree=t),label:"Duree",type:"text",Class_Content:"col-md-12 mt-4",value:s.formData.Duree,"onUpdate:value":e[12]||(e[12]=t=>s.formData.Duree=t)},null,8,["modelValue","value"]),n(u,{modelValue:a.Nom,"onUpdate:modelValue":e[13]||(e[13]=t=>a.Nom=t),label:"Nom",type:"text",Class_Content:"col-md-12 mt-4",value:s.formData.Nom,"onUpdate:value":e[14]||(e[14]=t=>s.formData.Nom=t)},null,8,["modelValue","value"])]),Ue])])],32)]),o("div",Ve,[o("form",{onSubmit:e[27]||(e[27]=D((...t)=>r.submitFormAdd&&r.submitFormAdd(...t),["prevent"]))},[o("div",we,[o("div",Re,[xe,o("div",Fe,[n(h,{value:s.formData.CodeId,apiUrl:"https://api.gestion-livraison.pro/api/cities/codes",fieldName:"Nom",first_option:"Selectionner le Code",label:"Code",Class_Content:"col-md-12 mt-4","onUpdate:value":e[16]||(e[16]=t=>s.formData.CodeId=t)},null,8,["value"]),n(u,{modelValue:a.Prix,"onUpdate:modelValue":e[17]||(e[17]=t=>a.Prix=t),label:"Prix",type:"text",Class_Content:"col-md-12 mt-4",value:s.formData.Prix,"onUpdate:value":e[18]||(e[18]=t=>s.formData.Prix=t)},null,8,["modelValue","value"]),o("div",ke,[n(u,{modelValue:a.Refuse,"onUpdate:modelValue":e[19]||(e[19]=t=>a.Refuse=t),label:"Refuse",type:"text",Class_Content:"col-md-6 mt-4",value:s.formData.Refuse,"onUpdate:value":e[20]||(e[20]=t=>s.formData.Refuse=t)},null,8,["modelValue","value"]),n(u,{modelValue:a.Retour,"onUpdate:modelValue":e[21]||(e[21]=t=>a.Retour=t),label:"Retour",type:"text",Class_Content:"col-md-6 mt-4",value:s.formData.Retour,"onUpdate:value":e[22]||(e[22]=t=>s.formData.Retour=t)},null,8,["modelValue","value"])]),n(u,{modelValue:a.Duree,"onUpdate:modelValue":e[23]||(e[23]=t=>a.Duree=t),label:"Duree",type:"text",Class_Content:"col-md-12 mt-4",value:s.formData.Duree,"onUpdate:value":e[24]||(e[24]=t=>s.formData.Duree=t)},null,8,["modelValue","value"]),n(u,{modelValue:a.Nom,"onUpdate:modelValue":e[25]||(e[25]=t=>a.Nom=t),label:"Nom",type:"text",Class_Content:"col-md-12 mt-4",value:s.formData.Nom,"onUpdate:value":e[26]||(e[26]=t=>s.formData.Nom=t)},null,8,["modelValue","value"])]),Se])])],32)]),n(y,{apiUrl:`https://api.gestion-livraison.pro/api/city/${s.delete_row_id}/delete`,onDeletedId:e[28]||(e[28]=t=>s.deletedRow=t)},null,8,["apiUrl"])],64)}const Pe=U(B,[["render",Ne],["__scopeId","data-v-6c67bef3"]]),Ie={class:"main-content"},Ae={class:"page-content"},Me={class:"container-fluid"},je={class:"row"},qe={class:"card"},Te={class:"card-body"},Le={class:"mb-3"},Qe={__name:"cities",setup(a){const e=A(null);return(d,f)=>(l(),i("div",Ie,[o("div",Ae,[o("div",Me,[n(C,{pageTitle:"Liste des Villes",buttonText:"Villes Codes",buttonLink:"cities/codes",toggle:"modal",target:"#modalAdd",modalText:"Nouvelle Ville"}),o("div",je,[o("div",qe,[o("div",Te,[o("div",Le,[n(L,{placeholder:"Rechercher par Motcle",onFilterUpdated:f[0]||(f[0]=s=>e.value=s),filters_fields:"search"})]),n(Pe,{apiUrl:"https://api.gestion-livraison.pro/api/cities",onDataToParent:d.handleDataFromChild,onSubmitFormAdd:d.submitFormAdd,filters_update:e.value,hidden_columns:["id","CodeId","Duree"]},null,8,["onDataToParent","onSubmitFormAdd","filters_update"])])])])])])]))}};export{Qe as default};
