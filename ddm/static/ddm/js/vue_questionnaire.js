(function(e){function t(t){for(var i,r,c=t[0],u=t[1],l=t[2],d=0,b=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&b.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);o&&o(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var u=n[c];0!==s[u]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={vue_questionnaire:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var o=u;a.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("284e")},"284e":function(e,t,n){"use strict";n.r(t);var i=n("5530"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),a={class:"row"},r={class:"col"};function c(e,t,n,i,c,u){var l=Object(s["m"])("SingleChoiceQuestion"),o=Object(s["m"])("MultiChoiceQuestion"),d=Object(s["m"])("OpenQuestion"),b=Object(s["m"])("MatrixQuestion"),h=Object(s["m"])("SemanticDifferential"),f=Object(s["m"])("TransitionQuestion");return Object(s["i"])(),Object(s["e"])(s["a"],null,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(c.q_config,(function(e,t){return Object(s["q"])((Object(s["i"])(),Object(s["e"])("div",{key:t},["single_choice"==e.type?(Object(s["i"])(),Object(s["c"])(l,{key:0,qid:e.question,text:e.text,items:e.items,onAnswerChanged:u.updateAnswers,class:"question-container"},null,8,["qid","text","items","onAnswerChanged"])):Object(s["d"])("",!0),"multi_choice"==e.type?(Object(s["i"])(),Object(s["c"])(o,{key:1,qid:e.question,text:e.text,items:e.items,onAnswerChanged:u.updateAnswers,class:"question-container"},null,8,["qid","text","items","onAnswerChanged"])):Object(s["d"])("",!0),"open"==e.type?(Object(s["i"])(),Object(s["c"])(d,{key:2,qid:e.question,text:e.text,options:e.options,onAnswerChanged:u.updateAnswers,class:"question-container"},null,8,["qid","text","options","onAnswerChanged"])):Object(s["d"])("",!0),"matrix"==e.type?(Object(s["i"])(),Object(s["c"])(b,{key:3,qid:e.question,text:e.text,items:e.items,scale:e.scale,onAnswerChanged:u.updateAnswers,class:"question-container"},null,8,["qid","text","items","scale","onAnswerChanged"])):Object(s["d"])("",!0),"semantic_diff"==e.type?(Object(s["i"])(),Object(s["c"])(h,{key:4,qid:e.question,text:e.text,items:e.items,scale:e.scale,onAnswerChanged:u.updateAnswers,class:"question-container"},null,8,["qid","text","items","scale","onAnswerChanged"])):Object(s["d"])("",!0),"transition"==e.type?(Object(s["i"])(),Object(s["c"])(f,{key:5,text:e.text,onAnswerChanged:u.updateAnswers,class:"question-container"},null,8,["text","onAnswerChanged"])):Object(s["d"])("",!0)],512)),[[s["p"],c.curr_index==e.index]])})),128)),Object(s["f"])("div",a,[Object(s["f"])("div",r,[Object(s["f"])("button",{class:"flow-btn",type:"button",onClick:t[0]||(t[0]=function(){return u.next&&u.next.apply(u,arguments)})},"Weiter  ›")])])],64)}n("d3b7"),n("159b"),n("e9c4");var u=["innerHTML"],l={class:"surquest-gq-response surquest-cq-response"},o={class:"form-check-label rb-cb-label"},d=["dataid","name","value"];function b(e,t,n,i,a,r){return Object(s["i"])(),Object(s["e"])("div",null,[Object(s["f"])("div",{class:"surquest-question-text",innerHTML:n.text},null,8,u),Object(s["f"])("div",l,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.items,(function(e,i){return Object(s["i"])(),Object(s["e"])("div",{key:i,class:"surquest-choice-item form-check"},[Object(s["f"])("label",o,[Object(s["f"])("input",{class:"form-check-input",type:"radio",dataid:n.qid,name:"q-"+n.qid,value:e.value,onChange:t[0]||(t[0]=function(e){return r.answerChanged(e)})},null,40,d),Object(s["g"])(" "+Object(s["n"])(e.label),1)])])})),128))])])}var h={name:"SingleChoiceQuestion",props:["qid","text","items"],emits:["answerChanged"],data:function(){return{answer:""}},created:function(){this.answer=-99,this.$emit("answerChanged",{id:this.qid,answers:this.answer})},methods:{answerChanged:function(e){this.answer=e.target.value,this.$emit("answerChanged",{id:this.qid,answers:this.answer})}}},f=n("6b0d"),O=n.n(f);const j=O()(h,[["render",b]]);var m=j,p=["innerHTML"],w={class:"surquest-choice-item form-check"},q={class:"form-check-label rb-cb-label"},g=["name","value"];function v(e,t,n,i,a,r){return Object(s["i"])(),Object(s["e"])("div",null,[Object(s["f"])("div",{class:"surquest-question-text",innerHTML:n.text},null,8,p),(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.items,(function(e,n){return Object(s["i"])(),Object(s["e"])("div",{key:n,class:"surquest-gq-response surquest-cq-response"},[Object(s["f"])("div",w,[Object(s["f"])("label",q,[Object(s["f"])("input",{class:"form-check-input",type:"checkbox",name:e.id,value:e.value,onChange:t[0]||(t[0]=function(e){return r.answerChanged(e)})},null,40,g),Object(s["g"])(" "+Object(s["n"])(e.label),1)])])])})),128))])}n("b0c0");var x={name:"MultiChoiceQuestion",props:["qid","text","items"],emits:["answerChanged"],data:function(){return{answer:{}}},created:function(){var e=this;this.items.forEach((function(t){e.answer[t.id]=!1})),this.$emit("answerChanged",{id:this.qid,answers:this.answer})},methods:{answerChanged:function(e){this.answer[e.target.name]=e.target.checked,this.$emit("answerChanged",{id:this.qid,answers:this.answer})}}};const y=O()(x,[["render",v]]);var C=y,k=["innerHTML"],M={class:"surquest-gq-response"},_=["name"],A=["name"];function S(e,t,n,i,a,r){return Object(s["i"])(),Object(s["e"])("div",null,[Object(s["f"])("div",{class:"surquest-question-text",innerHTML:n.text},null,8,k),Object(s["f"])("div",M,["small"==n.options.display?(Object(s["i"])(),Object(s["e"])("input",{key:0,class:"surquest-oq-textline",type:"text",name:n.qid,onChange:t[0]||(t[0]=function(e){return r.answerChanged(e)})},null,40,_)):Object(s["d"])("",!0),"large"==n.options.display?(Object(s["i"])(),Object(s["e"])("textarea",{key:1,class:"surquest-oq-textarea",type:"text",name:n.qid,onChange:t[1]||(t[1]=function(e){return r.answerChanged(e)})},null,40,A)):Object(s["d"])("",!0)])])}var T={name:"OpenQuestion",props:["qid","text","options"],emits:["answerChanged"],data:function(){return{answer:"-99"}},created:function(){this.$emit("answerChanged",{id:this.qid,answers:this.answer})},methods:{answerChanged:function(e){this.answer=e.target.value,this.$emit("answerChanged",{id:this.qid,answers:this.answer})}}};const Q=O()(T,[["render",S]]);var H=Q,L=["innerHTML"],$={class:"mq-table"},P={class:"mq-header"},D=Object(s["f"])("th",null,null,-1),E={class:"mq-table-td-item"},J=["name","value"];function I(e,t,n,i,a,r){return Object(s["i"])(),Object(s["e"])("div",null,[Object(s["f"])("div",{class:"surquest-question-text",innerHTML:n.text},null,8,L),Object(s["f"])("table",$,[Object(s["f"])("thead",P,[Object(s["f"])("tr",null,[D,(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.scale,(function(e,t){return Object(s["i"])(),Object(s["e"])("th",{key:t},Object(s["n"])(e.label),1)})),128))])]),Object(s["f"])("tbody",null,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.items,(function(e,i){return Object(s["i"])(),Object(s["e"])("tr",{key:i},[Object(s["f"])("td",E,Object(s["n"])(e.label),1),(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.scale,(function(n,i){return Object(s["i"])(),Object(s["e"])("td",{key:i,class:"mq-table-td-input"},[Object(s["f"])("label",null,[Object(s["f"])("input",{type:"radio",name:e.id,value:n.value,onChange:t[0]||(t[0]=function(e){return r.answerChanged(e)})},null,40,J)])])})),128))])})),128))])])])}var N={name:"SingleChoiceQuestion",props:["qid","text","items","scale"],emits:["answerChanged"],data:function(){return{answer:{}}},created:function(){var e=this;this.items.forEach((function(t){e.answer[t.id]=-99})),this.$emit("answerChanged",{id:this.qid,answers:this.answer})},methods:{answerChanged:function(e){this.answer[e.target.name]=e.target.value,this.$emit("answerChanged",{id:this.qid,answers:this.answer})}}};const F=O()(N,[["render",I]]);var W=F,z=["innerHTML"],B={class:"surquest-gq-response"},G={class:"dq-table"},K=Object(s["f"])("th",null,null,-1),R=Object(s["f"])("th",null,null,-1),U={class:"mq-table-td-item dq-table-td-item-left"},V=["name","value"],X={class:"mq-table-td-item dq-table-td-item-right"};function Y(e,t,n,i,a,r){return Object(s["i"])(),Object(s["e"])("div",null,[Object(s["f"])("div",{class:"surquest-question-text",innerHTML:n.text},null,8,z),Object(s["f"])("div",B,[Object(s["f"])("table",G,[Object(s["f"])("thead",null,[Object(s["f"])("tr",null,[K,(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.scale,(function(e,t){return Object(s["i"])(),Object(s["e"])("th",{key:t},Object(s["n"])(e.label),1)})),128)),R])]),Object(s["f"])("tbody",null,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.items,(function(e,i){return Object(s["i"])(),Object(s["e"])("tr",{key:i},[Object(s["f"])("td",U,Object(s["n"])(e.label),1),(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["l"])(n.scale,(function(n,i){return Object(s["i"])(),Object(s["e"])("td",{key:i,class:"dq-table-td-input"},[Object(s["f"])("label",null,[Object(s["f"])("input",{type:"radio",name:e.id,value:n.value,onChange:t[0]||(t[0]=function(e){return r.answerChanged(e)})},null,40,V)])])})),128)),Object(s["f"])("td",X,Object(s["n"])(e.label_alt),1)])})),128))])])])])}var Z={name:"SingleChoiceQuestion",props:["qid","text","items","scale"],emits:["answerChanged"],data:function(){return{answer:{}}},created:function(){var e=this;this.items.forEach((function(t){e.answer[t.id]=-99})),this.$emit("answerChanged",{id:this.qid,answers:this.answer})},methods:{answerChanged:function(e){this.answer[e.target.name]=e.target.value,this.$emit("answerChanged",{id:this.qid,answers:this.answer})}}};const ee=O()(Z,[["render",Y]]);var te=ee,ne=["innerHTML"];function ie(e,t,n,i,a,r){return Object(s["i"])(),Object(s["e"])("div",null,[Object(s["f"])("div",{class:"surquest-question-text",innerHTML:n.text},null,8,ne)])}var se={name:"TransitionQuestion",props:["text"]};const ae=O()(se,[["render",ie]]);var re=ae,ce={name:"QApp",components:{SingleChoiceQuestion:m,MultiChoiceQuestion:C,OpenQuestion:H,MatrixQuestion:W,SemanticDifferential:te,TransitionQuestion:re},props:{qconfig:String,actionurl:String},data:function(){return{q_config:JSON.parse(this.qconfig),answers:{},curr_index:1,max_index:1}},created:function(){this.setMaxIndex()},methods:{updateAnswers:function(e){this.answers[e.id]=e.answers},setMaxIndex:function(){var e=[];this.q_config.forEach((function(t){return e.push(t.index)})),this.max_index=Math.max.apply(Math,e)},next:function(){this.curr_index==this.max_index?this.submitData():this.curr_index+=1},submitData:function(){var e=new FormData;e.append("post_data",JSON.stringify(this.answers));var t=document.querySelector("input[name='csrfmiddlewaretoken']");e.append("csrfmiddlewaretoken",t.value),fetch(this.actionurl,{method:"POST",body:e}).then((function(e){console.log(e),e.redirected&&(window.location.href=e.url)})).catch((function(e){console.info(e)}))}}};n("dfcc");const ue=O()(ce,[["render",c]]);var le=ue,oe="#qapp",de=document.querySelector(oe);Object(s["b"])(le,Object(i["a"])({},de.dataset)).mount("#qapp")},cbf3:function(e,t,n){},dfcc:function(e,t,n){"use strict";n("cbf3")}});