import{bB as f,az as d,q as c,aD as m,aA as h,r as t,aH as g,bH as b,bI as p,aM as v,z as y,a_ as u,y as _,p as S}from"./index-3afa6c13.js";import{R as k}from"./vue-qrcode-reader-5b2db72e.js";const B={},x=s=>(m("data-v-0b6386fd"),s=s(),h(),s),w={class:"mt-5 fixed-bottom"},C=x(()=>t("div",{class:"card card-scan-cam mb-0 shadow"},[t("div",{class:"card-body text-center"},[t("div",{class:"camera-icon","data-bs-toggle":"modal","data-bs-target":"#ScanBonRamassage"},[t("i",{class:"fas fa-qrcode"})])])],-1)),R=[C];function I(s,e){return d(),c("div",w,R)}const $=f(B,[["render",I],["__scopeId","data-v-0b6386fd"]]);const P={components:{QrcodeStream:k},props:{getDataUrl:{type:String,required:!0},updateDataUrl:{type:String,required:!0}},data(){const s=[{text:"nothing (default)",value:void 0},{text:"outline",value:this.paintOutline},{text:"centered text",value:this.paintCenterText},{text:"bounding box",value:this.paintBoundingBox}],e=s[1];return{isPaused:g(!1),BonInfo:null,getError:null,orderRef:null,options:s,selected:e}},mounted(){},methods:{async onDetect(s){this.isPaused=!0,this.orderRef=s[0].rawValue,console.log(s[0].rawValue),alert(s[0].rawValue);const e=await b(`${this.getDataUrl+s[0].rawValue}/get`);e.error?this.getError=e.error:(console.log("Bon Info"),console.log(e),this.BonInfo=e)},skipOrderScan(){this.isPaused=!1,this.BonInfo=null,this.orderRef=null,this.getError=null},async order_validate(){const s=await p(this.updateDataUrl,{orderRef:this.orderRef});console.log(s),s&&(this.isPaused=!1,this.skipOrderScan())},pauseCam(){this.isPaused=!0},opencam(){console.log(this.isPaused),this.isPaused=!this.isPaused,console.log(this.isPaused)},paintOutline(s,e){for(const i of s){const[a,...n]=i.cornerPoints;e.strokeStyle="red",e.beginPath(),e.moveTo(a.x,a.y);for(const{x:o,y:l}of n)e.lineTo(o,l);e.lineTo(a.x,a.y),e.closePath(),e.stroke()}},paintBoundingBox(s,e){for(const i of s){const{boundingBox:{x:a,y:n,width:o,height:l}}=i;e.lineWidth=2,e.strokeStyle="#007bff",e.strokeRect(a,n,o,l)}},paintCenterText(s,e){for(const i of s){const{boundingBox:a,rawValue:n}=i,o=a.x+a.width/2,l=a.y+a.height/2,r=Math.max(12,50*a.width/e.canvas.width);console.log(a.width,e.canvas.width),e.font=`bold ${r}px sans-serif`,e.textAlign="center",e.lineWidth=3,e.strokeStyle="#35495e",e.strokeText(i.rawValue,o,l),e.fillStyle="#5cb984",e.fillText(n,o,l)}},logErrors:console.error}},V={ref:"ScanBonRamassage",id:"ScanBonRamassage",class:"modal modal-lg fade",tabindex:"-1","aria-labelledby":"ScanBonRamassageLabel","aria-hidden":"true"},D={class:"modal-dialog modal-fullscreen"},E={class:"modal-content"},O={class:"modal-header"},T=t("h5",{class:"modal-title mt-0",id:"ScanBonRamassageLabel"},"Bon Scanner",-1),q={class:"modal-body"},j={key:0},z={class:"text-center my-5"},N={class:"row my-3 text-center"},U={class:"col-6"},A=t("strong",null,"Client",-1),H={class:"col-6"},L=t("strong",null,"Validation",-1),M={class:"modal-footer d-flex justify-content-evenly align-items-center"},W={key:1,class:"text-center my-5 shadow",style:{color:"#ffffff"}},Q={class:"card p-3 d-flex align-items-center justify-content-cente bg-warning"},X={class:"modal-footer d-flex justify-content-evenly align-items-center"},Y={key:2,class:"text-center my-5 shadow bg-light"},F=t("div",{class:"card p-3 d-flex align-items-center justify-content-center"},[t("p",null,"Scannez Vos Commandes")],-1),G=[F];function J(s,e,i,a,n,o){const l=v("qrcode-stream");return d(),c("div",V,[t("div",D,[t("div",E,[t("div",O,[T,t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[0]||(e[0]=(...r)=>o.pauseCam&&o.pauseCam(...r))})]),t("div",q,[t("div",null,[t("div",null,[y(l,{onDetect:o.onDetect,formats:["qr_code","code_128","codabar"],track:n.selected.value,onError:o.logErrors,paused:n.isPaused},null,8,["onDetect","track","onError","paused"])]),n.BonInfo!=null?(d(),c("div",j,[t("div",z,[t("h5",null,"Ref : "+u(n.BonInfo.Ref),1)]),t("div",N,[t("div",U,[A,_(" : "+u(n.BonInfo.Client),1)]),t("div",H,[L,_(" : "+u(n.BonInfo.Valide+" / "+n.BonInfo.Colis),1)])]),t("div",M,[t("button",{class:"btn btn-secondary btn-lg",onClick:e[1]||(e[1]=(...r)=>o.skipOrderScan&&o.skipOrderScan(...r))},"Skip"),t("button",{class:"btn btn-success btn-lg",onClick:e[2]||(e[2]=(...r)=>o.order_validate&&o.order_validate(...r))},"Valider"),t("button",{class:"btn btn-primary btn-lg",onClick:e[3]||(e[3]=(...r)=>o.opencam&&o.opencam(...r))},"Confidddddrmer")])])):S("",!0),n.getError!=null?(d(),c("div",W,[t("div",Q,[t("h6",null,u(n.getError),1)]),t("div",X,[t("button",{class:"btn btn-secondary btn-lg",onClick:e[4]||(e[4]=(...r)=>o.skipOrderScan&&o.skipOrderScan(...r))},"Skip"),t("button",{class:"btn btn-primary btn-lg",onClick:e[5]||(e[5]=(...r)=>o.opencam&&o.opencam(...r))},"Open")])])):(d(),c("div",Y,G))])])])])],512)}const ee=f(P,[["render",J]]);export{ee as b,$ as s};