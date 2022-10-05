(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],d=0,b=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);a&&a(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,i=1;i<c.length;i++){var l=c[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/learningresources/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"12c7":function(e,t,c){},"1cde":function(e,t,c){"use strict";c("6fe7")},2959:function(e,t,c){"use strict";c("12c7")},3390:function(e,t,c){"use strict";c("f4f8")},"3b74":function(e,t,c){},"3d41":function(e,t,c){"use strict";c("9d87")},"4cd9":function(e,t,c){},5212:function(e,t,c){"use strict";c("4cd9")},"56d7":function(e,t,c){"use strict";c.r(t);var n=c("7a23");function o(e,t,c,o,r,s){const i=Object(n["q"])("the-header"),l=Object(n["q"])("the-resources");return Object(n["l"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(i,{title:"RememberMe"}),Object(n["j"])(l)],64)}function r(e,t,c,o,r,s){return Object(n["l"])(),Object(n["g"])("header",null,[Object(n["h"])("h1",null,Object(n["s"])(c.title),1)])}var s={props:["title"]},i=(c("996f"),c("6b0d")),l=c.n(i);const u=l()(s,[["render",r],["__scopeId","data-v-aee8eba6"]]);var a=u;function d(e,t,c,o,r,s){const i=Object(n["q"])("base-button"),l=Object(n["q"])("base-card");return Object(n["l"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(l,null,{default:Object(n["t"])(()=>[Object(n["j"])(i,{onClick:t[0]||(t[0]=e=>s.setSelectedTab("stored-resources")),mode:s.storedResButtonMode},{default:Object(n["t"])(()=>[Object(n["i"])("Stored Resources")]),_:1},8,["mode"]),Object(n["j"])(i,{onClick:t[1]||(t[1]=e=>s.setSelectedTab("add-resource")),mode:s.addResButtonMode},{default:Object(n["t"])(()=>[Object(n["i"])("Add Resource")]),_:1},8,["mode"])]),_:1}),(Object(n["l"])(),Object(n["e"])(n["b"],null,[(Object(n["l"])(),Object(n["e"])(Object(n["r"])(r.selectedTab)))],1024))],64)}c("3c65");function b(e,t,c,o,r,s){const i=Object(n["q"])("learning-resource");return Object(n["l"])(),Object(n["g"])("ul",null,[(Object(n["l"])(!0),Object(n["g"])(n["a"],null,Object(n["o"])(s.resources,e=>(Object(n["l"])(),Object(n["e"])(i,{key:e.id,id:e.id,title:e.title,description:e.description,link:e.link},null,8,["id","title","description","link"]))),128))])}const j=["href"];function O(e,t,c,o,r,s){const i=Object(n["q"])("base-button"),l=Object(n["q"])("base-card");return Object(n["l"])(),Object(n["g"])("li",null,[Object(n["j"])(l,null,{default:Object(n["t"])(()=>[Object(n["h"])("header",null,[Object(n["h"])("h3",null,Object(n["s"])(c.title),1),Object(n["j"])(i,{mode:"flat",onClick:t[0]||(t[0]=e=>s.removeResource(c.id))},{default:Object(n["t"])(()=>[Object(n["i"])("Delete")]),_:1})]),Object(n["h"])("p",null,Object(n["s"])(c.description),1),Object(n["h"])("nav",null,[Object(n["h"])("a",{href:c.link,target:"blank"},"View Resource",8,j)])]),_:1})])}var f={inject:["removeResource"],props:["id","title","description","link"]};c("2959");const p=l()(f,[["render",O],["__scopeId","data-v-7e571130"]]);var h=p,v={inject:["resources"],components:{LearningResource:h}};c("f4b8");const m=l()(v,[["render",b],["__scopeId","data-v-3e5af100"]]);var g=m;const _=e=>(Object(n["n"])("data-v-ce07109a"),e=e(),Object(n["m"])(),e),k=_(()=>Object(n["h"])("p",null,"Unfortunately, at least one input is invalid.",-1)),R=_(()=>Object(n["h"])("p",null," Please check all inputs and make sure you enter at least a few characters into each input field. ",-1)),y={class:"form-control"},I=_(()=>Object(n["h"])("label",{for:"title"},"Title",-1)),T={id:"title",name:"title",type:"text",ref:"titleInput"},w={class:"form-control"},S=_(()=>Object(n["h"])("label",{for:"description"},"Description",-1)),q={id:"description",name:"description",rows:"3",ref:"descInput"},C={class:"form-control"},$=_(()=>Object(n["h"])("label",{for:"link"},"Link",-1)),x={id:"link",name:"link",type:"url",ref:"urlInput"};function B(e,t,c,o,r,s){const i=Object(n["q"])("base-button"),l=Object(n["q"])("base-dialog"),u=Object(n["q"])("base-card");return Object(n["l"])(),Object(n["g"])(n["a"],null,[r.inputIsInvalid?(Object(n["l"])(),Object(n["e"])(l,{key:0,title:"Invalid Input",onClose:s.confirmError},{default:Object(n["t"])(()=>[k,R]),actions:Object(n["t"])(()=>[Object(n["j"])(i,{onClick:s.confirmError},{default:Object(n["t"])(()=>[Object(n["i"])("Okay")]),_:1},8,["onClick"])]),_:1},8,["onClose"])):Object(n["f"])("",!0),Object(n["j"])(u,null,{default:Object(n["t"])(()=>[Object(n["h"])("form",{onSubmit:t[0]||(t[0]=Object(n["u"])((...e)=>s.submitData&&s.submitData(...e),["prevent"]))},[Object(n["h"])("div",y,[I,Object(n["h"])("input",T,null,512)]),Object(n["h"])("div",w,[S,Object(n["h"])("textarea",q,null,512)]),Object(n["h"])("div",C,[$,Object(n["h"])("input",x,null,512)]),Object(n["h"])("div",null,[Object(n["j"])(i,{type:"submit"},{default:Object(n["t"])(()=>[Object(n["i"])("Add Resource")]),_:1})])],32)]),_:1})],64)}function M(e,t,c,o,r,s){return Object(n["l"])(),Object(n["g"])("button",{class:Object(n["k"])(c.mode)},[Object(n["p"])(e.$slots,"default",{},void 0,!0)],2)}var P={props:["mode"]};c("5212");const D=l()(P,[["render",M],["__scopeId","data-v-cdeb61ca"]]);var A=D;const E={open:""};function L(e,t,c,o,r,s){const i=Object(n["q"])("base-button");return Object(n["l"])(),Object(n["e"])(n["c"],{to:"body"},[Object(n["h"])("div",{onClick:t[0]||(t[0]=t=>e.$emit("close"))}),Object(n["h"])("dialog",E,[Object(n["h"])("header",null,[Object(n["p"])(e.$slots,"header",{},()=>[Object(n["h"])("h2",null,Object(n["s"])(c.title),1)],!0)]),Object(n["h"])("section",null,[Object(n["p"])(e.$slots,"default",{},void 0,!0)]),Object(n["h"])("menu",null,[Object(n["p"])(e.$slots,"actions",{},()=>[Object(n["j"])(i,{onClick:t[1]||(t[1]=t=>e.$emit("close"))},{default:Object(n["t"])(()=>[Object(n["i"])("Close")]),_:1})],!0)])])])}var G={components:{BaseButton:A},props:["title"],emits:["close"]};c("1cde");const J=l()(G,[["render",L],["__scopeId","data-v-3c782f10"]]);var V=J,H={components:{BaseDialog:V,BaseButton:A},inject:["addResource"],data(){return{inputIsInvalid:!1}},methods:{submitData(){const e=this.$refs.titleInput.value,t=this.$refs.descInput.value,c=this.$refs.urlInput.value;""!==e.trim()&&""!==t.trim()&&""!==c.trim()?this.addResource(e,t,c):this.inputIsInvalid=!0},confirmError(){this.inputIsInvalid=!1}}};c("e1d5");const U=l()(H,[["render",B],["__scopeId","data-v-ce07109a"]]);var z=U,F={components:{StoredResources:g,AddResource:z},data(){return{selectedTab:"stored-resources",storedResources:[{id:"official-giude",title:"Official Guiide",description:"The official Vue.js documentation",link:"http://vuejs.org"},{id:"google",title:"Google",description:"Learn to google...",link:"https://google.com"}]}},provide(){return{resources:this.storedResources,addResource:this.addResource,removeResource:this.removeResource}},computed:{storedResButtonMode(){return"stored-resources"===this.selectedTab?null:"flat"},addResButtonMode(){return"add-resource"===this.selectedTab?null:"flat"}},methods:{setSelectedTab(e){this.selectedTab=e},addResource(e,t,c){const n={id:(new Date).toISOString(),title:e,description:t,link:c};this.storedResources.unshift(n),this.selectedTab="stored-resources"},removeResource(e){const t=this.storedResources.findIndex(t=>t.id===e);this.storedResources.splice(t,1)}}};const K=l()(F,[["render",d]]);var N=K,Q={components:{TheHeader:a,TheResources:N}};c("3d41");const W=l()(Q,[["render",o]]);var X=W;function Y(e,t){return Object(n["l"])(),Object(n["g"])("div",null,[Object(n["p"])(e.$slots,"default",{},void 0,!0)])}c("3390");const Z={},ee=l()(Z,[["render",Y],["__scopeId","data-v-7c65bcc1"]]);var te=ee;const ce=Object(n["d"])(X);ce.component("base-card",te),ce.component("base-button",A),ce.component("base-dialog",V),ce.mount("#app")},"6fe7":function(e,t,c){},"8c4b":function(e,t,c){},"996f":function(e,t,c){"use strict";c("3b74")},"9d87":function(e,t,c){},e1d5:function(e,t,c){"use strict";c("8c4b")},e82a:function(e,t,c){},f4b8:function(e,t,c){"use strict";c("e82a")},f4f8:function(e,t,c){}});
//# sourceMappingURL=app.adf8a88a.js.map