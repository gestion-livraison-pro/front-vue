import{bB as c,az as r,q as l,r as o,a_ as s,p as i,aj as u}from"./index-3afa6c13.js";const d={props:{Class_Content:String,Cols:Number,Rows:Number,label:String,value:[String,Number],type:{type:String,default:"text"},placeholder:String,error:String}},_={class:"form-label"},m=["cols","rows","value","placeholder"],b={key:0,class:"error"};function f(t,a,e,g,C,p){return r(),l("div",{class:u(e.Class_Content)},[o("label",_,s(e.label),1),o("textarea",{class:"form-control",cols:e.Cols,rows:t.rows,value:e.value,placeholder:e.placeholder,onInput:a[0]||(a[0]=n=>t.$emit("update:value",n.target.value))},null,40,m),e.error?(r(),l("span",b,s(e.error),1)):i("",!0)],2)}const S=c(d,[["render",f]]);export{S as t};