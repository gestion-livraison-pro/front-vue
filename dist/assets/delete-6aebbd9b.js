import{bB as d,bI as i,az as l,q as r,r as e}from"./index-3afa6c13.js";const n={props:{apiUrl:{type:String,required:!0},rowId:{type:String,required:!0}},data(){return{id:""}},methods:{async submitFormDelete(){const t=await i(this.apiUrl);t.id&&this.$emit("deleted-id",t.id)}}},c={id:"DeleteRow",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"DeleteRowlabel","aria-hidden":"true"},m={class:"modal-dialog"},u={class:"modal-content"},b=e("div",{class:"modal-header"},[e("h5",{class:"modal-title mt-0",id:"DeleteRowlabel"},"Supprimer "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),p=e("div",{class:"modal-body"},[e("p",null,"Voullez Vous vraiemenet supprimer cette resource ?")],-1),_={class:"modal-footer"},h=e("button",{type:"button",class:"btn btn-secondary waves-effect waves-light","data-bs-dismiss":"modal"},"Non",-1);function f(t,s,v,w,y,a){return l(),r("div",c,[e("div",m,[e("div",u,[b,p,e("div",_,[h,e("button",{type:"submit",class:"btn btn-danger waves-effect waves-light",onClick:s[0]||(s[0]=(...o)=>a.submitFormDelete&&a.submitFormDelete(...o)),"data-bs-dismiss":"modal"},"Oui")])])])])}const D=d(n,[["render",f]]);export{D as S};
