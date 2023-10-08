import{bB as R,bD as T,bI as L,bC as M,aM as k,az as d,q as c,r as e,a_ as _,p as m,F as w,aK as O,al as C,z as g,aD as q,aA as H,bU as se,aH as p,as as j,bn as B,bJ as oe,bG as ae,o as D,y as I,bs as le,bu as ne,bi as de,aj as E,x as F,bH as U}from"./index-3afa6c13.js";import{i as W}from"./input-e668dea8.js";import{S as z}from"./select-ab6ad5d3.js";import{b as re}from"./simple-2283d124.js";import{S as ie}from"./delete-6aebbd9b.js";import{b as ce}from"./basic-8cbb2de4.js";import{R as ue}from"./vue-qrcode-reader-5b2db72e.js";import{T as G}from"./eticket-5e32969c.js";const _e={components:{input_text:W,SelectDropdown:z},props:{orderId:{type:String,required:!0},orderref:{type:String,required:!0},old_status:{type:String,required:!0},old_status_color:{type:String,required:!0},old_status_id:{type:String,required:!0}},data(o){return{newStatusName:null,newStatusColor:null,formData:{nextStatusId:null,orderId:null},formAdresseChange:{Nom:"",Adresse:"",Téléphone:"",orderId:null},Role:T()}},methods:{async submitFormUpdate(){const o=await L("https://api.gestion-livraison.pro/api/order/status/update/selected",this.formData);this.$emit("status-updated",o.order),$("#orderStatusConfirmation").modal("toggle")},async submitAdresseChange(){const o=await L(`https://api.gestion-livraison.pro/api/order/${this.orderId}/adresse/update/`,this.formAdresseChange);this.$emit("status-updated",o.order),$("#AdresseChange").modal("toggle")},selectStatus(o,t,r){this.newStatusColor=o,this.newStatusName=t,this.formData.nextStatusId=r,this.formData.orderId=this.orderId,r==34?(this.formAdresseChange.orderId=this.orderId,$("#AdresseChange").modal("show")):$("#orderStatusConfirmation").modal("toggle")}},async mounted(){console.log("newOrderId-setup");try{const o=await M("https://api.gestion-livraison.pro/api/role/order/statuses/modify/permissions");this.Statuses=o,console.log(this.Statuses)}catch(o){console.error("Error fetching order details:",o)}},watch:{"props.orderId":async function(o){console.log("newOrderId1"+o),o&&(console.log(o),this.OrderID=o)}}},x=o=>(q("data-v-1eeed6fc"),o=o(),H(),o),he={ref:"orderStatus",id:"orderStatus",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"orderStatusLabel","aria-hidden":"true"},me={class:"modal-dialog"},pe={class:"modal-content"},fe={key:0,class:"modal-header"},ve={class:"modal-title mt-0",id:"orderStatusLabel"},ge=x(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),be={class:"modal-body"},ye={class:"row"},Se=["onClick"],we={class:"card-body text-center"},ke={ref:"AdresseChange",id:"AdresseChange",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"AdresseChangeLabel","aria-hidden":"true"},Ce={class:"modal-dialog"},xe={class:"modal-content"},Ie={key:0,class:"modal-header"},De={class:"modal-title mt-0",id:"AdresseChangeLabel"},Oe=x(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),$e={class:"modal-body"},Re={class:"row"},Ae={class:"row"},Ue={class:"row"},Te={class:"modal-footer"},Ve=x(()=>e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Fermer",-1)),Ne={ref:"orderStatusConfirmation",id:"orderStatusConfirmation",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"orderStatusConfirmationLabel","aria-hidden":"true"},Pe={class:"modal-dialog"},Le={class:"modal-content"},qe=x(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title mt-0",id:"orderStatusConfirmationLabel"},"Confirmation"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),He={class:"modal-body"},je=x(()=>e("p",null,"voullez vous vraiement changer le statut",-1)),Ee={class:"row d-flex align-items-center justify-content-center"},Me={class:"card-body text-center d-flex align-items-center justify-content-center"},Be=x(()=>e("div",{class:"col-1 text-center mx-1 d-flex align-items-center justify-content-center"},[e("i",{class:"fas fa-arrow-right fa-2x"})],-1)),Fe={class:"card-body text-center d-flex align-items-center justify-content-center"},We={class:"modal-footer"},ze=x(()=>e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Non",-1));function Ge(o,t,r,s,l,u){const i=k("input_text");return d(),c(w,null,[e("div",he,[e("div",me,[e("div",pe,[l.Role!="customer"?(d(),c("div",fe,[e("h5",ve,"Changer Status | "+_(r.orderref),1),ge])):m("",!0),e("div",be,[e("div",ye,[(d(!0),c(w,null,O(o.Statuses,n=>(d(),c("div",{class:"col-md-4",key:n.Id},[e("div",{class:"card",style:C({backgroundColor:n.Couleur}),onClick:v=>u.selectStatus(n.Couleur,n.Nom,n.Id),"data-bs-dismiss":"modal"},[e("div",we,[e("span",null,_(n.Nom),1)])],12,Se)]))),128))])])])])],512),e("div",ke,[e("div",Ce,[e("div",xe,[l.Role!="customer"?(d(),c("div",Ie,[e("h5",De,"Changer Changement d'adresse | "+_(r.orderref),1),Oe])):m("",!0),e("div",$e,[e("div",Re,[e("div",Ae,[g(i,{modelValue:o.Nom,"onUpdate:modelValue":t[0]||(t[0]=n=>o.Nom=n),label:"Nom de Destinataire",type:"text",Class_Content:"col-md-6 mt-4",value:l.formAdresseChange.Nom,"onUpdate:value":t[1]||(t[1]=n=>l.formAdresseChange.Nom=n)},null,8,["modelValue","value"]),g(i,{modelValue:o.Téléphone,"onUpdate:modelValue":t[2]||(t[2]=n=>o.Téléphone=n),label:"Téléphone",type:"phone",Class_Content:"col-md-6 mt-4",value:l.formAdresseChange.Téléphone,"onUpdate:value":t[3]||(t[3]=n=>l.formAdresseChange.Téléphone=n)},null,8,["modelValue","value"])]),e("div",Ue,[g(i,{modelValue:o.Adresse,"onUpdate:modelValue":t[4]||(t[4]=n=>o.Adresse=n),label:"Adresse",type:"text",Class_Content:"col-md-12 mt-4",value:l.formAdresseChange.Adresse,"onUpdate:value":t[5]||(t[5]=n=>l.formAdresseChange.Adresse=n)},null,8,["modelValue","value"])])])]),e("div",Te,[Ve,e("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=(...n)=>u.submitAdresseChange&&u.submitAdresseChange(...n))},"Valider")])])])],512),e("div",Ne,[e("div",Pe,[e("div",Le,[qe,e("div",He,[je,e("div",Ee,[e("div",{class:"card col-5 mx-1",style:C({backgroundColor:r.old_status_color})},[e("div",Me,[e("span",null,_(r.old_status),1)])],4),Be,e("div",{class:"card col-5 mx-1 d-flex justify-content-end",style:C({backgroundColor:l.newStatusColor})},[e("div",Fe,[e("span",null,_(l.newStatusName),1)])],4)])]),e("div",We,[ze,e("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=(...n)=>u.submitFormUpdate&&u.submitFormUpdate(...n))},"Oui")])])])],512)],64)}const Qe=R(_e,[["render",Ge],["__scopeId","data-v-1eeed6fc"]]);const Je={components:{order_status:Qe,input_text:W,SelectDropdown:z,button_simple:re,Supprimer:ie},props:["apiUrl","Module"],data(){return{delete_row_id:"",deletedRow:""}},setup(o,{emit:t}){const r=se();console.log("roooooot"+r.currentRoute);const s=p({date:"",status:"",client:"",livreur:"",text:"",per_page:10,page:"",pagination_filters:""}),l=p(!1),u=p([]),i=p([]),n=p([]),v=p(null),V=p(null),N=p(null),P=p(null),a=p(null);j(async()=>{const h=new URLSearchParams(window.location.search);s.value.date=h.get("date")||"",s.value.client=h.get("client")||"",s.value.livreur=h.get("livreur")||"",h.get("status")?s.value.status=h.get("status")||"":s.value.status=r.params.status_id||"",Z(),await A()}),B(()=>r.params.status_id,h=>{s.value.status=h||"",A()});const y=h=>{s.value.page=h,A()},K=()=>{A()},A=async()=>{l.value=!0;const h=X(o.apiUrl),b=await oe(h);u.value=b.data,i.value=b.pagination,l.value=!1,console.log(u.value)},X=h=>{const b=new URLSearchParams;for(const S in s.value)s.value[S]&&b.append(S,s.value[S]);return`${h}?${b.toString()}`},Y=()=>{s.value.page=1;const h=new URLSearchParams;for(const S in s.value)s.value[S]&&h.append(S,s.value[S]);const b=`${window.location.pathname}?${h.toString()}`;window.history.pushState({},"",b),A()},Z=()=>{const h=new URLSearchParams(window.location.search);for(const b of h.keys())s.value[b]!==void 0&&(s.value[b]=h.get(b))};return{data:u,tableFields:n,showOrderDetails:h=>{t("show-order-details",h)},changeOrderStatus:(h,b,S,ee,te)=>{v.value=b,V.value=S,N.value=ee,P.value=te,a.value=h},showOrderHistory:h=>{t("show-order-history",h)},OrderRef:v,OrderStatusName:V,OrderStatusColor:N,OrderStatusId:P,OrderId:a,filter:Y,filters:s,pagination:i,pageCount:K,loadPage:y,loading:l}},data(){return{Role:T(),formData:{Type:0,Contenu:"",Sujet:""},ticketOrderIDS:[],isCkeckAll:!1,windowWidth:p(window.innerWidth)}},methods:{isMobile(){return this.windowWidth},async newConversation(o){await ae("https://api.gestion-livraison.pro/api/conversation/new",{CommandeID:o}),this.$router.push("/messages")},async selectAllOrders(){const o=document.querySelectorAll('input[type="checkbox"]');var t=!0;this.isCkeckAll===!0?(t=!1,this.isCkeckAll=!1):this.isCkeckAll=!0;for(const r of o){r.checked=t,console.log(t);const s=new Event("change");r.dispatchEvent(s)}console.log(this.isCkeckAll),console.log(this.ticketOrderIDS)},async selectOrder(o,t){const r=o,s=t.target.checked;console.log("check "+s+" id : "+r),s?this.ticketOrderIDS.push(o):this.ticketOrderIDS=this.ticketOrderIDS.filter(l=>l!==r),console.log("data eee : "+this.ticketOrderIDS)},async GenerateTicket(){console.log(this.ticketOrderIDS),this.$emit("TicketsordersId",this.ticketOrderIDS),this.ticketOrderIDS=[];const o=document.querySelectorAll('input[type="checkbox"]');for(const t of o)t.checked=!1},async GenerateOneTicket(o){this.ticketOrderIDS.push(o),console.log(this.ticketOrderIDS),this.GenerateTicket()},updateStatusInTable(o){console.log(o.id),this.data=this.data.map(t=>t.id===o.id?o:t),this.OrderId=null}},watch:{deletedRow(o){const t=this.data.findIndex(r=>r.id===parseInt(o));t!==-1&&this.data.splice(t,1)}}},f=o=>(q("data-v-8f63f13b"),o=o(),H(),o),Ke={class:"row mb-3"},Xe={key:1,class:"table-responsive"},Ye={class:"table table-bordered"},Ze={class:"bg-light"},et=f(()=>e("th",null,"Ref",-1)),tt=f(()=>e("th",null,"Montant",-1)),st={key:0},ot=f(()=>e("th",null,"Statut",-1)),at=f(()=>e("th",null,"Ville",-1)),lt={key:1},nt={key:2},dt={key:3},rt=["onChange"],it=f(()=>e("span",{class:"header_side"},"Ref : ",-1)),ct=["onClick"],ut=f(()=>e("span",{class:"header_side"},"Montant : ",-1)),_t={key:0},ht=f(()=>e("span",{class:"header_side"},"Client : ",-1)),mt=f(()=>e("span",{class:"header_side"},"Statut : ",-1)),pt=["onClick","data-bs-target"],ft=f(()=>e("span",{class:"header_side"},"Ville : ",-1)),vt={key:1},gt=f(()=>e("span",{class:"header_side"},"Adresse : ",-1)),bt={key:2},yt={key:3,class:"table_actions"},St={class:"d-flex align-items-center order-actions"},wt=["onClick"],kt=f(()=>e("i",{class:"fas fa-file-download"},null,-1)),Ct=[kt],xt=["onClick"],It=f(()=>e("i",{class:"fas fa-history"},null,-1)),Dt=[It],Ot=["onClick"],$t=f(()=>e("i",{class:"far fa-envelope"},null,-1)),Rt=[$t],At=f(()=>e("i",{class:"fas fa-pencil-alt"},null,-1)),Ut=["onClick"],Tt=f(()=>e("i",{class:"fas fa-trash-alt"},null,-1)),Vt=[Tt],Nt={class:"row d-flex justify-content-between align-items-center"},Pt={class:"col-md-1"},Lt=F('<option value="10" data-v-8f63f13b>10</option><option value="20" data-v-8f63f13b>20</option><option value="50" data-v-8f63f13b>50</option><option value="100" data-v-8f63f13b>100</option><option value="200" data-v-8f63f13b>200</option><option value="500" data-v-8f63f13b>500</option><option value="1000" data-v-8f63f13b>1000</option>',7),qt=[Lt],Ht={class:"col-md-6 d-flex justify-content-end align-items-center"},jt={class:"pagination d-flex align-items-center"},Et={key:0,class:"page-item"},Mt=["onClick"],Bt={key:1,class:"page-item"},Ft={key:2,class:"d-flex justify-content-center py-4 bg-light"},Wt=f(()=>e("span",{class:"loader"},null,-1)),zt=[Wt],Gt={key:3,class:"p-3 text-center bg-light"},Qt=f(()=>e("p",null,"no-data",-1)),Jt=[Qt],Kt=f(()=>e("div",{class:"mx-2 m-3 pb-3 pt-3"},null,-1));function Xt(o,t,r,s,l,u){const i=k("input_text"),n=k("SelectDropdown"),v=k("button_simple"),V=k("router-link"),N=k("order_status"),P=k("Supprimer");return d(),c(w,null,[e("div",Ke,[g(i,{modelValue:s.filters.text,"onUpdate:modelValue":t[0]||(t[0]=a=>s.filters.text=a),type:"text",Class_Content:"col-md mb-3",value:s.filters.text,"onUpdate:value":t[1]||(t[1]=a=>s.filters.text=a),placeholder:"Recherche"},null,8,["modelValue","value"]),g(i,{modelValue:s.filters.date,"onUpdate:modelValue":t[2]||(t[2]=a=>s.filters.date=a),type:"date",Class_Content:"col-md mb-3",value:s.filters.date,"onUpdate:value":t[3]||(t[3]=a=>s.filters.date=a),placeholder:"Date"},null,8,["modelValue","value"]),l.Role!="customer"&&l.Role!="deliveryman"?(d(),D(n,{key:0,modelValue:s.filters.livreur,"onUpdate:modelValue":t[4]||(t[4]=a=>s.filters.livreur=a),value:s.filters.livreur,apiUrl:"https://api.gestion-livraison.pro/api/deliverymans?per_page=200",fieldName:"Nom",first_option:"Tous les Livreurs",Class_Content:"col-md mb-3","onUpdate:value":t[5]||(t[5]=a=>s.filters.livreur=a)},null,8,["modelValue","value"])):m("",!0),l.Role!="customer"&&l.Role!="deliveryman"?(d(),D(n,{key:1,modelValue:s.filters.client,"onUpdate:modelValue":t[6]||(t[6]=a=>s.filters.client=a),value:s.filters.client,apiUrl:"https://api.gestion-livraison.pro/api/customers?per_page=200",fieldName:"Nom",first_option:"Tous les Clients",Class_Content:"col-md mb-3","onUpdate:value":t[7]||(t[7]=a=>s.filters.client=a)},null,8,["modelValue","value"])):m("",!0),g(n,{modelValue:s.filters.status,"onUpdate:modelValue":t[8]||(t[8]=a=>s.filters.status=a),value:s.filters.status,apiUrl:"https://api.gestion-livraison.pro/api/order/status?per_page=200",fieldName:"Nom",first_option:"Tous les Statutes",Class_Content:"col-md mb-3","onUpdate:value":t[9]||(t[9]=a=>s.filters.status=a)},null,8,["modelValue","value"]),g(v,{onClick:s.filter,type:"submit",Class_Content:"col-md-2 mb-3",btn_text:"Filtrer"},null,8,["onClick"])]),l.ticketOrderIDS.length?(d(),D(v,{key:0,"data-bs-toggle":"modal","data-bs-target":"#Tickets",onClick:u.GenerateTicket,Class_Content:"my-2 col-md-1",btn_text:"E-Ticket",icon:"fas fa-download"},null,8,["onClick"])):m("",!0),s.data.length>0?(d(),c("div",Xe,[e("table",Ye,[e("thead",Ze,[e("tr",null,[e("th",null,[e("input",{type:"checkbox",class:"form-check-input",onChange:t[10]||(t[10]=(...a)=>u.selectAllOrders&&u.selectAllOrders(...a))},null,32)]),et,tt,l.Role!="customer"&&l.Role!="deliveryman"?(d(),c("th",st,"Client")):m("",!0),ot,at,l.Role==="deliveryman"?(d(),c("th",lt,"Adresse")):m("",!0),l.Role!="customer"&&l.Role!="deliveryman"?(d(),c("th",nt,"Livreur")):m("",!0),l.Role!="deliveryman"?(d(),c("th",dt,"Action")):m("",!0)])]),e("tbody",null,[(d(!0),c(w,null,O(s.data,a=>(d(),c("tr",{key:a.id},[e("td",null,[e("input",{type:"checkbox",class:"form-check-input",onChange:y=>u.selectOrder(a.id,y)},null,40,rt)]),e("td",null,[it,I(),e("a",{href:"",class:"mx-md-0 mx-4",onClick:y=>s.showOrderDetails(a.id),"data-bs-toggle":"modal","data-bs-target":"#orderInfo"},_(a.Ref),9,ct)]),e("td",null,[ut,I(" "+_(a.Montant)+" DH",1)]),a.Client?(d(),c("td",_t,[ht,I(" "+_(a.Client),1)])):m("",!0),e("td",null,[mt,I(),e("a",{href:"#",onClick:y=>s.changeOrderStatus(a.id,a.Ref,a.Statut,a.StatutCouleur,a.StatutId),"data-bs-toggle":"modal","data-bs-target":a.StatutId!=7?"#orderStatus":"",class:"badge p-2",style:C({backgroundColor:a.StatutCouleur})},_(a.Statut),13,pt)]),e("td",null,[ft,I(" "+_(a.Ville),1)]),l.Role==="deliveryman"?(d(),c("td",vt,[gt,I(" "+_(a.Adresse),1)])):m("",!0),l.Role!="customer"&&l.Role!="deliveryman"?(d(),c("td",bt,"Livreur "+_(a.Livreur),1)):m("",!0),l.Role!="deliveryman"?(d(),c("td",yt,[e("div",St,[e("button",{ype:"button",class:"btn btn-light btn-sm waves-effect mx-1",onClick:y=>u.GenerateOneTicket(a.id),"data-bs-toggle":"modal","data-bs-target":"#Tickets"},Ct,8,wt),e("button",{onClick:y=>s.showOrderHistory(a.id),"data-bs-toggle":"modal","data-bs-target":"#orderHistory",type:"button",class:"btn btn-light btn-sm waves-effect mx-1"},Dt,8,xt),e("button",{onClick:y=>u.newConversation(a.id),type:"button",class:"btn btn-light btn-sm waves-effect mx-1"},Rt,8,Ot),l.Role=="Admin"||a.StatutId===4||a.StatutId===5||a.StatutId===6||a.StatutId===27?(d(),D(V,{key:0,to:`/${r.Module}/${a.id}/update`,class:"btn btn-light btn-sm waves-effect mx-1"},{default:le(()=>[At]),_:2},1032,["to"])):m("",!0),l.Role=="Admin"||a.StatutId===4||a.StatutId===5||a.StatutId===6||a.StatutId===27?(d(),c("button",{key:1,type:"button",class:"btn btn-light btn-sm waves-effect mx-1",onClick:y=>{l.delete_row_id=a.id},"data-bs-toggle":"modal","data-bs-target":"#DeleteRow"},Vt,8,Ut)):m("",!0)])])):m("",!0)]))),128))])]),e("div",Nt,[e("div",Pt,[ne(e("select",{class:"form-control","onUpdate:modelValue":t[11]||(t[11]=a=>s.filters.per_page=a),onChange:t[12]||(t[12]=(...a)=>s.pageCount&&s.pageCount(...a))},qt,544),[[de,s.filters.per_page]])]),e("nav",Ht,[e("ul",jt,[s.pagination.current_page>1?(d(),c("li",Et,[e("a",{class:"page-link",href:"#",onClick:t[13]||(t[13]=a=>s.loadPage(s.pagination.current_page-1))},"Précédent")])):m("",!0),(d(!0),c(w,null,O(s.pagination.last_page,a=>(d(),c("li",{class:E(["page-item",{active:a===s.pagination.current_page}]),key:a},[e("a",{class:"page-link",href:"#",onClick:y=>s.loadPage(a)},_(a),9,Mt)],2))),128)),s.pagination.current_page<s.pagination.last_page?(d(),c("li",Bt,[e("a",{class:"page-link",href:"#",onClick:t[14]||(t[14]=a=>s.loadPage(s.pagination.current_page+1))},"Suivant")])):m("",!0)])])])])):s.loading?(d(),c("div",Ft,zt)):(d(),c("div",Gt,Jt)),Kt,g(N,{onStatusUpdated:u.updateStatusInTable,orderId:s.OrderId,orderref:s.OrderRef,old_status:s.OrderStatusName,old_status_color:s.OrderStatusColor,old_status_id:s.OrderStatusId},null,8,["onStatusUpdated","orderId","orderref","old_status","old_status_color","old_status_id"]),g(P,{apiUrl:`https://api.gestion-livraison.pro/api/order/${l.delete_row_id}/delete`,onDeletedId:t[15]||(t[15]=a=>l.deletedRow=a)},null,8,["apiUrl"])],64)}const Yt=R(Je,[["render",Xt],["__scopeId","data-v-8f63f13b"]]),Zt={props:{orderId:{type:String,required:!0}},data(){return{Role:T()}},setup(o){console.log("newOrderId-setup");const t=p(null);return j(async()=>{if(console.log("newOrderId-mouted"),o.orderId)try{const r=await U(`https://api.gestion-livraison.pro/api/order/${o.orderId}/get`);t.value=r,console.log(r)}catch(r){console.error("Error fetching order details:",r)}}),B(()=>o.orderId,async r=>{if(console.log("newOrderId1"),r){console.log("newOrderId");try{const s=await U(`https://api.gestion-livraison.pro/api/order/${r}/get`);t.value=s,console.log(s)}catch(s){console.error("Error fetching order details:",s)}}}),{orderDetails:t}}},es={id:"orderInfo",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"orderInfoLabel","aria-hidden":"true"},ts={class:"modal-dialog"},ss={class:"modal-content"},os={class:"modal-header"},as={class:"modal-title mt-0",id:"orderInfoLabel"},ls=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ns={class:"modal-body"},ds={class:"my-3"},rs=e("h5",{class:"mb-2"},"Destinataire",-1),is={class:"row"},cs={class:"col-6 p-3 border"},us=e("h6",null,"Nom ",-1),_s={class:"mx-4"},hs={class:"col-6 p-3 border"},ms=e("h6",null,"Ville ",-1),ps={class:"mx-4"},fs={class:"col-md-6 p-3 border align-text-bottom"},vs=e("h6",null,"Adresse ",-1),gs={class:"mx-4"},bs={class:"col-md-6 p-3 border align-text-bottom"},ys=e("h6",null,"Remarque ",-1),Ss={class:"mx-4"},ws={key:0,class:"my-3"},ks=e("h5",null,"Produits",-1),Cs={class:"card p-3",style:{"box-shadow":"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}},xs={class:"row"},Is={class:"col-md-1 col-2 d-flex flex-row"},Ds=["src"],Os={key:1,class:"rounded-5 avatar-sm",src:"https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537_1280.png",alt:"Card image cap"},$s={class:"col-10 d-flex align-items-center justify-content-between flex-row"},Rs={class:"d-flex flex-row text-start col-6 mx-1"},As={class:""},Us={class:"d-flex align-items-end col-5"},Ts={class:"row mt-3"},Vs=e("div",{class:"col-6 text-start"},[e("h5",null,"Total : ")],-1),Ns={class:"col-6 text-end"},Ps={class:""},Ls=["href"],qs=e("i",{class:"fas fa-2x fa-phone-alt"},null,-1),Hs=[qs],js=["href"],Es=e("i",{class:"far fa-2x fa-envelope"},null,-1),Ms=[Es],Bs=["href"],Fs=e("i",{class:"fab fa-2x fa-whatsapp"},null,-1),Ws=[Fs];function zs(o,t,r,s,l,u){return d(),c("div",es,[e("div",ts,[e("div",ss,[e("div",os,[e("h5",as,_(s.orderDetails?s.orderDetails.Ref:""),1),ls]),e("div",ns,[e("div",ds,[rs,e("div",is,[e("div",cs,[us,e("p",_s,_(s.orderDetails?s.orderDetails.Nom:""),1)]),e("div",hs,[ms,e("p",ps,_(s.orderDetails?s.orderDetails.Ville:""),1)]),e("div",fs,[vs,e("p",gs,_(s.orderDetails?s.orderDetails.Adresse:""),1)]),e("div",bs,[ys,e("p",Ss,_(s.orderDetails?s.orderDetails.Remarque:""),1)])])]),s.orderDetails&&s.orderDetails.products.length&&l.Role!="deliveryman"?(d(),c("div",ws,[ks,(d(!0),c(w,null,O(s.orderDetails.products,i=>(d(),c("div",{class:"row",key:i.id},[e("div",null,[e("div",Cs,[e("div",xs,[e("div",Is,[i.img?(d(),c("img",{key:0,class:"rounded-5 avatar-sm",src:"https://api.gestion-livraison.pro/"+i.img,alt:"Card image cap"},null,8,Ds)):(d(),c("img",Os))]),e("div",$s,[e("div",Rs,[e("strong",As,_(i?i.Nom:"")+" x "+_(i?i.Quantite:""),1)]),e("div",Us,[e("span",null,"Type : "+_(i?i.Type:""),1)])])])])])]))),128))])):m("",!0),e("div",Ts,[Vs,e("div",Ns,[e("h5",null,_(s.orderDetails?s.orderDetails.Montant:"")+" DH",1)])])]),e("div",Ps,[e("a",{href:"tel:"+(s.orderDetails?s.orderDetails.Téléphone:""),class:"btn btn-success waves-effect waves-light col-4"},Hs,8,Ls),e("a",{href:"sms:"+(s.orderDetails?s.orderDetails.Téléphone:"")+"?body=Bonjour",class:"btn btn-primary waves-effect waves-light col-4"},Ms,8,js),e("a",{href:"https://wa.me/"+(s.orderDetails?s.orderDetails.Téléphone:""),target:"__blank",class:"btn btn-primary waves-effect waves-light col-4 btn-whatsapp"},Ws,8,Bs)])])])])}const Gs=R(Zt,[["render",zs]]);const Qs={props:{orderId:{type:String,required:!0}},data(){return{Role:T(),orderHistory:[],loading:!1}},async mounted(){if(this.loading=!0,this.orderId)try{const o=await U(`https://api.gestion-livraison.pro/api/order/${this.orderId}/history/get`);this.orderHistory=o}catch(o){console.error("Error fetching order details:",o)}this.loading=!1},watch:{async orderId(o){if(o)try{this.loading=!0;const t=await U(`https://api.gestion-livraison.pro/api/order/${o}/history/get`);this.orderHistory=t,this.loading=!1}catch(t){console.error("Error fetching order details:",t)}}}},Js={id:"orderHistory",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"orderHistoryLabel","aria-hidden":"true"},Ks={class:"modal-dialog"},Xs={class:"modal-content"},Ys={class:"modal-header"},Zs={class:"modal-title mt-0",id:"orderHistoryLabel"},eo=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),to={class:"modal-body pb-5"},so={id:"cd-timeline",class:"cd-container"},oo={key:0,class:"d-flex justify-content-center py-4"},ao=e("span",{class:"loader"},null,-1),lo=[ao],no={key:1},ro={class:"dynamic-text"},io={class:"cd-timeline-content text-white"},co={class:"d-flex justify-content-between align-items-center"},uo={class:"m-0 p-0"},_o={class:"text-end"},ho={class:"mb-0 text-white-50"},mo={key:2,class:"border bg-light p-3 text-center"},po=e("h6",null,"Aucun historique lié à cette Commande",-1),fo=[po];function vo(o,t,r,s,l,u){return d(),c("div",Js,[e("div",Ks,[e("div",Xs,[e("div",Ys,[e("h5",Zs,"Historique de la Commande "+_(l.orderHistory?l.orderHistory.Ref:""),1),eo]),e("div",to,[e("section",so,[l.loading?(d(),c("div",oo,lo)):l.orderHistory.length>0?(d(),c("div",no,[(d(!0),c(w,null,O(l.orderHistory,(i,n)=>(d(),c("div",{key:n,class:E(["cd-timeline-block",{"timeline-right":n%2===0,"timeline-left":n%2!==0}])},[e("div",{class:"cd-timeline-img badge",style:C({backgroundColor:i.StatutCouleur})},[e("span",ro,_(i.Statut),1)],4),e("div",io,[e("div",co,[e("h3",uo,_(i.Utilisateur),1),e("span",_o,_(new Date(i.date).toISOString().split("T")[0]),1)]),e("p",ho,_(i.Note),1)])],2))),128))])):(d(),c("div",mo,fo))])])])])])}const go=R(Qs,[["render",vo]]);const bo={data(){return{formData:{newStatus_id:null,newStatus:null,newStatus_color:null,isActive:!0}}},methods:{scan(o,t,r){this.formData.newStatus_id=o,this.formData.newStatus=t,this.formData.newStatus_color=r,this.formData.isActive=!1,this.$emit("select-new-status",this.formData),console.log("data sent"),console.log(this.formData),$("#ScanQrUpdates").modal("toggle"),$("#orderScanner").modal("toggle")}},setup(){const o=p(null);return j(async()=>{try{const t=await M("https://api.gestion-livraison.pro/api/role/order/statuses/modify/permissions");o.value=t,console.log(o)}catch(t){console.error("Error fetching order details:",t)}}),{Statuses:o}}},yo=o=>(q("data-v-971e2241"),o=o(),H(),o),So=F('<div class="mt-5 fixed-bottom" data-v-971e2241><div class="card card-scan-cam mb-0 shadow" data-v-971e2241><div class="card-body text-center" data-v-971e2241><div class="camera-icon" data-bs-toggle="modal" data-bs-target="#ScanQrUpdates" data-v-971e2241><i class="fas fa-qrcode" data-v-971e2241></i></div></div></div></div>',1),wo={ref:"ScanQrUpdates",id:"ScanQrUpdates",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"orderStatusLabel","aria-hidden":"true"},ko={class:"modal-dialog modal-fullscreen"},Co={class:"modal-content"},xo=yo(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title mt-0",id:"orderStatusLabel"},"selectionner un statut"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Io={class:"modal-body"},Do={class:"row"},Oo=["onClick"],$o={class:"card-body text-center"};function Ro(o,t,r,s,l,u){return d(),c(w,null,[So,e("div",wo,[e("div",ko,[e("div",Co,[xo,e("div",Io,[e("div",Do,[(d(!0),c(w,null,O(s.Statuses,i=>(d(),c("div",{class:"col-md-4",key:i.Id},[e("div",{class:"card",style:C({backgroundColor:i.Couleur,color:"#ffffff",cursor:"pointer"}),onClick:n=>u.scan(i.Id,i.Nom,i.Couleur)},[e("div",$o,[e("span",null,_(i.Nom),1)])],12,Oo)]))),128))])])])])],512)],64)}const Q=R(bo,[["render",Ro],["__scopeId","data-v-971e2241"]]);const Ao={components:{QrcodeStream:ue},props:{NewStatusSelected:{type:Object,required:!0}},data(){const o=[{text:"nothing (default)",value:void 0},{text:"outline",value:this.paintOutline},{text:"centered text",value:this.paintCenterText},{text:"bounding box",value:this.paintBoundingBox}],t=o[1];return{isPaused:p(!0),oldStatus:[null],newStatus:[null],UpdateStatus:{orderId:null,nextStatusId:null},options:o,selected:t}},watch:{NewStatusSelected:{immediate:!0,handler(o){console.log("NewStatus changed:",o),this.isPaused=o.isActive,console.log(this.isPaused),this.newStatus=o}}},mounted(){this.isPaused=!0},methods:{async onDetect(o){this.isPaused=!0,console.log(o),alert(o);const t=await U(`https://api.gestion-livraison.pro/api/selected/order/status/${o[0].rawValue}/get`);this.oldStatus=t,console.log("Old Status"),console.log(this.oldStatus),this.UpdateStatus.orderId=t.orderId,this.UpdateStatus.nextStatusId=this.newStatus.newStatus_id,console.log(this.UpdateStatus.nextStatusId)},skipOrderScan(){this.oldStatus=[],this.UpdateStatus.orderId=null,this.UpdateStatus.nextStatusId=null,this.isPaused=!1},async updateStatus(){const o=await L("https://api.gestion-livraison.pro/api/order/status/update/selected",this.UpdateStatus);console.log(o),o&&(this.isPaused=!1,this.skipOrderScan())},pauseCam(){this.isPaused=!0},opencam(){console.log(this.isPaused),this.isPaused=!this.isPaused,console.log(this.isPaused)},paintOutline(o,t){for(const r of o){const[s,...l]=r.cornerPoints;t.strokeStyle="red",t.beginPath(),t.moveTo(s.x,s.y);for(const{x:u,y:i}of l)t.lineTo(u,i);t.lineTo(s.x,s.y),t.closePath(),t.stroke()}},paintBoundingBox(o,t){for(const r of o){const{boundingBox:{x:s,y:l,width:u,height:i}}=r;t.lineWidth=2,t.strokeStyle="#007bff",t.strokeRect(s,l,u,i)}},paintCenterText(o,t){for(const r of o){const{boundingBox:s,rawValue:l}=r,u=s.x+s.width/2,i=s.y+s.height/2,n=Math.max(12,50*s.width/t.canvas.width);console.log(s.width,t.canvas.width),t.font=`bold ${n}px sans-serif`,t.textAlign="center",t.lineWidth=3,t.strokeStyle="#35495e",t.strokeText(r.rawValue,u,i),t.fillStyle="#5cb984",t.fillText(l,u,i)}},logErrors:console.error}},Uo={ref:"orderScanner",id:"orderScanner",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"orderScannerLabel","aria-hidden":"true"},To={class:"modal-dialog modal-fullscreen"},Vo={class:"modal-content"},No={class:"modal-header"},Po=e("h5",{class:"modal-title mt-0",id:"orderScannerLabel"},"Commande Scanner",-1),Lo={class:"modal-body"},qo={class:"text-center mb-4"},Ho={key:0,class:"row d-flex mb-3 justify-content-center align-items-center"},jo={class:"col-5"},Eo={key:0},Mo={key:1},Bo=e("i",{class:"fas fa-question fa-2x"},null,-1),Fo=[Bo],Wo=e("div",{class:"col-2 text-center"},[e("i",{class:"fas fa-arrow-right fa-2x"})],-1),zo={class:"col-5"},Go={class:"card-body text-center text-light"},Qo={class:"modal-footer d-flex justify-content-evenly align-items-center"};function Jo(o,t,r,s,l,u){const i=k("qrcode-stream");return d(),c("div",Uo,[e("div",To,[e("div",Vo,[e("div",No,[Po,e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=(...n)=>u.pauseCam&&u.pauseCam(...n))})]),e("div",Lo,[e("div",null,[e("div",null,[g(i,{onDetect:u.onDetect,formats:["qr_code","code_128","codabar"],track:l.selected.value,onError:u.logErrors,paused:l.isPaused},null,8,["onDetect","track","onError","paused"])]),e("div",qo,[e("h5",null,"Ref : "+_(l.oldStatus.orderRef?"#"+l.oldStatus.orderRef:"?"),1)]),l.newStatus!=null&&l.oldStatus?(d(),c("div",Ho,[e("div",jo,[e("div",{class:"card border shadow m-0",style:C({backgroundColor:l.oldStatus.StatusColeur})},[e("div",{class:E(["card-body text-center",l.oldStatus.Status?"text-light":""])},[l.oldStatus.Status?(d(),c("span",Eo,_(l.oldStatus.Status),1)):(d(),c("span",Mo,Fo))],2)],4)]),Wo,e("div",zo,[e("div",{class:"card border shadow m-0",style:C({backgroundColor:l.newStatus.newStatus_color})},[e("div",Go,[e("span",null,_(l.newStatus.newStatus),1)])],4)])])):m("",!0),e("div",Qo,[e("button",{class:"btn btn-secondary btn-lg",onClick:t[1]||(t[1]=(...n)=>u.skipOrderScan&&u.skipOrderScan(...n))},"Skip"),e("button",{class:"btn btn-primary btn-lg",onClick:t[2]||(t[2]=(...n)=>u.updateStatus&&u.updateStatus(...n))},"Confirmer")])])])])])],512)}const J=R(Ao,[["render",Jo]]),Ko={class:"main-content"},Xo={class:"page-content"},Yo={class:"container-fluid"},Zo={class:"card"},ea={class:"card-body"},ta={class:"mt-3"},sa={components:{PreScan:Q,scanner:J,Tickets:G},data(){return{Role:T()}}},ma=Object.assign(sa,{__name:"liste_of_orders",setup(o){const t=p(null),r=p([]),s=p([]),l=p(null),u=p([]);return(i,n)=>(d(),c("div",Ko,[e("div",Xo,[e("div",Yo,[g(ce,{pageTitle:"Liste des Commandes",buttonText:"Nouvelle Commande",buttonLink:"order/new",requiredModule:"AjouterCommande"}),e("div",Zo,[e("div",ea,[e("div",ta,[g(Yt,{apiUrl:"https://api.gestion-livraison.pro/api/orders",Module:"order",onShowOrderDetails:n[0]||(n[0]=v=>t.value=v),onShowOrderHistory:n[1]||(n[1]=v=>l.value=v),scannedOrderId:s.value,onTicketsordersId:n[2]||(n[2]=v=>u.value=v)},null,8,["scannedOrderId"]),g(Gs,{orderId:t.value},null,8,["orderId"]),g(go,{orderId:l.value},null,8,["orderId"]),r.value&&i.Role!="customer"?(d(),D(J,{key:0,NewStatusSelected:r.value,is_active:i.isActive,onScannedOrder:n[3]||(n[3]=v=>s.value=v)},null,8,["NewStatusSelected","is_active"])):m("",!0),i.Role!="customer"?(d(),D(Q,{key:1,onSelectNewStatus:n[4]||(n[4]=v=>r.value=v),class:"mt-5"})):m("",!0),g(G,{ordersId:u.value},null,8,["ordersId"])])])])])])]))}});export{ma as default};