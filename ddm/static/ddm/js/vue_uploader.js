(function(e){function t(t){for(var c,r,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={vue_uploader:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("ab1f")},"5cd2":function(e,t,n){"use strict";n("826f")},8027:function(e,t,n){"use strict";n("a173")},"826f":function(e,t,n){},"9dfb":function(e,t,n){},a173:function(e,t,n){},ab1f:function(e,t,n){"use strict";n.r(t);var c=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),o=(n("b0c0"),{class:"row"}),r={class:"col"};function i(e,t,n,c,i,s){var l=Object(a["m"])("FileUploader");return Object(a["i"])(),Object(a["e"])(a["a"],null,[(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(i.ul_config,(function(e,t){return Object(a["i"])(),Object(a["c"])(l,{key:t,comp_id:t,zipped:"zip"===e.ul_type,name:e.name,blueprints:e.blueprints,instructions:e.instructions,onChangedData:s.updatePostData},null,8,["comp_id","zipped","name","blueprints","instructions","onChangedData"])})),128)),Object(a["f"])("div",o,[Object(a["f"])("div",r,[Object(a["f"])("button",{class:"flow-btn",type:"button",onClick:t[0]||(t[0]=function(){return s.zipData&&s.zipData.apply(s,arguments)})},"Daten übermitteln  ›")])])],64)}n("d3b7"),n("159b"),n("b64b"),n("e9c4"),n("25f0");var s=function(e){return Object(a["k"])("data-v-ff5c9480"),e=e(),Object(a["j"])(),e},l={class:"mb-5"},d={class:"float-left bg-dark text-white pt-2 ps-2 pb-1 rounded-top"},u={class:"col-sm"},b=["id"],p={class:"accordion-item"},f=["id"],O=["data-bs-target","aria-controls"],j=s((function(){return Object(a["f"])("b",null,"Instruktionen",-1)})),h=[j],m=["id","data-bs-parent"],g={class:"accordion-body"},_={key:1},v={class:"row"},y={class:"col"},x={class:"accordion-header mb-0"},k=s((function(){return Object(a["f"])("b",null,"Datei hochladen:",-1)})),w=[k],S=s((function(){return Object(a["f"])("b",null,"Andere Datei hochladen:",-1)})),D=[S],P=s((function(){return Object(a["f"])("b",null,"Upload erfolgreich abgeschlossen",-1)})),T=[P],A={class:"select-file-btn"},E=["name"],F=Object(a["g"])(" Datei Auswählen "),z=s((function(){return Object(a["f"])("p",null,[Object(a["f"])("span",{class:"spinner-border float-right me-3",role:"status"},[Object(a["f"])("span",{class:"sr-only"})]),Object(a["g"])(" Datei wird hochgeladen... ")],-1)})),I=[z],C={class:"accordion-body border"},N={class:"pb-2"},U=s((function(){return Object(a["f"])("b",null,"Ausgelesene Dateien:",-1)})),J=Object(a["g"])(),M=["set","id"],q={class:"col"},V=["href","aria-controls"],B=["for"],H=["id","onUpdate:modelValue"],L=Object(a["g"])("  Ich bin damit einverstanden, diese Daten zu übermitteln "),R=["set","id","aria-labelledby"],K={class:"modal-dialog fb-modal"},X={class:"modal-content"},Y=s((function(){return Object(a["f"])("div",{class:"modal-header"},[Object(a["f"])("h5",{class:"modal-title"},"Feedback for XY")],-1)})),Z={class:"modal-body"},$=s((function(){return Object(a["f"])("div",{class:"modal-body-intro"},[Object(a["f"])("p",null,"Die folgenden Daten wurden ausgelesen und werden bei Ihrer Zustimmung an die Forschenden übermittelt:")],-1)})),G={class:"modal-body-data"},Q=["id"],W={class:"modal-footer"},ee=["for"],te=["id","onUpdate:modelValue"],ne=Object(a["g"])("  Ich bin damit einverstanden, diese Daten zu übermitteln "),ce=s((function(){return Object(a["f"])("div",null,[Object(a["f"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"OK")],-1)}));function ae(e,t,n,c,o,r){var i=Object(a["m"])("DonationInstructions");return Object(a["i"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",l,[Object(a["f"])("div",d,[Object(a["f"])("div",u,[Object(a["f"])("h4",null,"Upload "+Object(a["n"])(n.name),1)])]),Object(a["f"])("div",{class:"accordion",id:"ul-acc-"+n.comp_id},[Object(a["f"])("div",p,[Object(a["f"])("h3",{class:"accordion-header",id:"acc-instr-head-"+n.comp_id},[Object(a["f"])("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#acc-instr-body-"+n.comp_id,"aria-expanded":"true","aria-controls":"acc-instr-body-"+n.comp_id},h,8,O)],8,f),Object(a["f"])("div",{id:"acc-instr-body-"+n.comp_id,class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#ul-acc-"+n.comp_id},[Object(a["f"])("div",g,[n.instructions.length>0?(Object(a["i"])(),Object(a["c"])(i,{key:0,instructions:n.instructions,comp_id:n.comp_id},null,8,["instructions","comp_id"])):(Object(a["i"])(),Object(a["e"])("div",_,"Es wurden keine Instruktionen definiert."))])],8,m)])],8,b),Object(a["f"])("div",{class:Object(a["h"])(["accordion-body border",{"ul-success":o.extraction_complete}])},[Object(a["f"])("div",v,[Object(a["f"])("div",y,[Object(a["f"])("p",x,[Object(a["f"])("span",{class:Object(a["h"])({"d-none":!o.upload_enabled&o.extraction_complete|o.processing|o.extraction_complete})},w,2),Object(a["f"])("span",{class:Object(a["h"])({"d-none":!o.upload_enabled&o.extraction_complete|o.processing|!o.extraction_complete})},D,2),Object(a["f"])("span",{class:Object(a["h"])(["fs-6 text-success",{"d-none":o.upload_enabled&o.extraction_complete|o.processing|!o.extraction_complete}])},T,2),Object(a["f"])("span",{class:Object(a["h"])({"d-none":o.upload_enabled&o.extraction_complete|o.processing|!o.extraction_complete})},[Object(a["f"])("a",{onClick:t[0]||(t[0]=function(e){return o.upload_enabled=!o.upload_enabled}),class:"upload-other"},"eine andere Datei auswählen")],2),Object(a["f"])("span",{class:Object(a["h"])({"d-none":!o.upload_enabled|o.processing})},[Object(a["f"])("label",A,[Object(a["f"])("input",{name:"ul-"+n.comp_id,type:"file",onChange:t[1]||(t[1]=function(){return r.processFile&&r.processFile.apply(r,arguments)}),class:"d-none"},null,40,E),F])],2)]),Object(a["f"])("div",{class:Object(a["h"])(["clearfix",{"d-none":!o.processing}])},I,2)])])],2),Object(a["f"])("div",C,[Object(a["f"])("div",N,[U,J,Object(a["f"])("span",{class:Object(a["h"])({"d-none":o.extraction_complete})},"Es wurden noch keine Daten ausgelesen.",2)]),(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(n.blueprints,(function(n){return Object(a["i"])(),Object(a["e"])("div",{key:n,set:e.bp_index=n.id.toString(),id:"bp-entry-"+e.bp_index,class:"ul-status row border-top pt-2 pb-2"},[Object(a["f"])("div",q,[Object(a["f"])("p",null,[Object(a["g"])(" Datei "+Object(a["n"])(n.id)+": ",1),Object(a["f"])("span",{class:Object(a["h"])({"d-none":o.extraction_complete})},"Noch nicht hochgeladen",2),Object(a["f"])("span",{class:Object(a["h"])({"d-none":!o.extraction_complete})},"Erfolgreich hochgeladen",2)])]),Object(a["f"])("div",{class:Object(a["h"])(["col",{"d-none":!o.extraction_complete}])},[Object(a["f"])("a",{class:"text-orange text-decoration-none",role:"button","data-bs-toggle":"modal",href:"#bp-fb-"+e.bp_index,"aria-controls":"bp-fb-"+e.bp_index},"Ausgelesene Daten ansehen ↗",8,V)],2),Object(a["f"])("div",{class:Object(a["h"])(["col-6 text-end",{"d-none":!o.extraction_complete}])},[Object(a["f"])("p",null,[Object(a["f"])("label",{class:"form-check-label",for:"ul-consent-"+e.bp_index},[Object(a["q"])(Object(a["f"])("input",{class:"form-check-input consent-checkbox",id:"ul-consent-"+e.bp_index,type:"checkbox",onChange:t[2]||(t[2]=function(){return r.emitToParent&&r.emitToParent.apply(r,arguments)}),"onUpdate:modelValue":function(e){return o.post_data[n.id.toString()].consent=e}},null,40,H),[[a["o"],o.post_data[n.id.toString()].consent]]),L],8,B)])],2)],8,M)})),128))])]),(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(n.blueprints,(function(n){return Object(a["i"])(),Object(a["e"])("div",{key:n,set:e.bp_index=n.id.toString(),class:"modal fade",id:"bp-fb-"+e.bp_index,tabdindex:"-1","aria-labelledby":"bp-fb-"+e.bp_index,"aria-hidden":"true"},[Object(a["f"])("div",K,[Object(a["f"])("div",X,[Y,Object(a["f"])("div",Z,[$,Object(a["f"])("div",G,[Object(a["f"])("table",{id:"ul-result-"+e.bp_index,class:"table table-striped fs-6 text"},[Object(a["f"])("tr",null,[(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(n.f_extract,(function(e){return Object(a["i"])(),Object(a["e"])("th",{key:e},Object(a["n"])(e),1)})),128))]),(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(o.post_data[n.id.toString()].extracted_data,(function(e){return Object(a["i"])(),Object(a["e"])("tr",{key:e},[(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(e,(function(e){return Object(a["i"])(),Object(a["e"])("td",{key:e},Object(a["n"])(e),1)})),128))])})),128))],8,Q)])]),Object(a["f"])("div",W,[Object(a["f"])("div",null,[Object(a["f"])("label",{class:"form-check-label fs-5 me-4",for:"ul-consent-"+e.bp_index},[Object(a["q"])(Object(a["f"])("input",{class:"form-check-input consent-checkbox mt-1",id:"ul-consent--"+e.bp_index,type:"checkbox",onChange:t[3]||(t[3]=function(){return r.emitToParent&&r.emitToParent.apply(r,arguments)}),"onUpdate:modelValue":function(e){return o.post_data[n.id.toString()].consent=e}},null,40,te),[[a["o"],o.post_data[n.id.toString()].consent]]),ne],8,ee)]),ce])])])],8,R)})),128))],64)}n("a9e3"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("caad"),n("2532");var oe=n("c4e3"),re=n.n(oe),ie=function(e){return Object(a["k"])("data-v-052c08e8"),e=e(),Object(a["j"])(),e},se=["id"],le={class:"carousel-indicators"},de=["data-bs-target","data-bs-slide-to","aria-label","aria-current"],ue={class:"carousel-inner"},be=["innerHTML"],pe=["data-bs-target"],fe=ie((function(){return Object(a["f"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1)})),Oe=ie((function(){return Object(a["f"])("span",{class:"visually-hidden"},"Previous",-1)})),je=[fe,Oe],he=["data-bs-target"],me=ie((function(){return Object(a["f"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1)})),ge=ie((function(){return Object(a["f"])("span",{class:"visually-hidden"},"Next",-1)})),_e=[me,ge];function ve(e,t,n,c,o,r){return Object(a["i"])(),Object(a["e"])("div",{id:"carousel-"+n.comp_id,class:"carousel carousel-dark slide","data-bs-interval":"false","data-bs-ride":"carousel"},[Object(a["f"])("div",le,[(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(n.instructions,(function(e,t){return Object(a["i"])(),Object(a["e"])("button",{key:t,type:"button","data-bs-target":"#carousel-"+n.comp_id,"data-bs-slide-to":t,"aria-label":"Step "+t,class:Object(a["h"])({active:0===t}),"aria-current":0===t},null,10,de)})),128))]),Object(a["f"])("div",ue,[(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(n.instructions,(function(e,t){return Object(a["i"])(),Object(a["e"])("div",{key:t,class:Object(a["h"])(["carousel-item",{active:0===t}]),innerHTML:e.text},null,10,be)})),128))]),Object(a["f"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carousel-"+n.comp_id,"data-bs-slide":"prev"},je,8,pe),Object(a["f"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carousel-"+n.comp_id,"data-bs-slide":"next"},_e,8,he)],8,se)}var ye={name:"DonationInstructions",props:{instructions:Array,comp_id:Number},data:function(){return{}},methods:{}},xe=(n("fc88"),n("6b0d")),ke=n.n(xe);const we=ke()(ye,[["render",ve],["__scopeId","data-v-052c08e8"]]);var Se=we,De={name:"ProcessFile",components:{DonationInstructions:Se},props:{zipped:Boolean,blueprints:Array,comp_id:Number,name:String,instructions:Array},emits:["changedData"],data:function(){return{row_data:[],extraction_complete:!1,post_data:{},processing:!1,upload_enabled:!0}},created:function(){var e=this;this.blueprints.forEach((function(t){var n=t.id,c={filename:null,consent:!1,extracted_data:[],status:{ul_complete:!1,errors:[]}};e.post_data[n.toString()]=c})),this.emitToParent()},methods:{processFile:function(e){var t=this;t.processing=!0;var n=e.target.files;if(t.zipped&&1===n.length){var c=new re.a;c.loadAsync(n[0]).then((function(e){t.blueprints.forEach((function(n){var c=new RegExp(n.regex_path);e.file(c).forEach((function(e){e.async("string").then((function(e){t.processContent(e,n)}))}))}))})).catch({})}else if(!this.zipped&&1===n.length){var a=t.blueprints[0];t.processSingleFile(n[0],a)}t.emitToParent(),setTimeout((function(){t.extraction_complete=!0,t.processing=!1,t.upload_enabled=!1}),2e3)},processContent:function(e,t){var n=this,c=n.post_data[t.id.toString()],a=[];if("json"===t.format){var o=JSON.parse(e);o.forEach((function(e){if(t.f_expected.every((function(t){return Object.keys(e).includes(t)}))){for(var n in e)t.f_extract.indexOf(n)<0&&delete e[n];a.push(e)}else c.status.errors.push("some error")})),c.extracted_data=a}0==c.status.errors.length&&(c.status.ul_complete=!0)},processSingleFile:function(e,t){var n=this,c=new FileReader;c.onload=function(e){var c=e.target.result;n.processContent(c,t)},c.readAsText(e)},emitToParent:function(){var e=JSON.parse(JSON.stringify(this.post_data));Object.keys(e).forEach((function(t){e[t].consent||(e[t].extracted_data=[])})),this.$emit("changedData",e)}}};n("5cd2");const Pe=ke()(De,[["render",ae],["__scopeId","data-v-ff5c9480"]]);var Te=Pe,Ae={name:"UApp",components:{FileUploader:Te},props:{uploadconfig:String,actionurl:String},data:function(){return{ul_config:JSON.parse(this.uploadconfig),post_data:{}}},methods:{updatePostData:function(e){var t=this;Object.keys(e).forEach((function(n){t.post_data[n]=e[n]}))},zipData:function(){var e=this,t=document.querySelectorAll("input[type=file]");t.forEach((function(e){e.disabled=!0}));var n=new FormData(document.getElementById("uploader-form")),c=new re.a;c.file("ul_data.json",JSON.stringify(this.post_data)).generateAsync({type:"blob"}).then((function(t){n.append("post_data",t),fetch(e.actionurl,{method:"POST",body:n}).then((function(e){console.log(e),e.redirected&&(window.location.href=e.url)})).catch((function(e){console.info(e)}))}))}}};n("8027");const Ee=ke()(Ae,[["render",i]]);var Fe=Ee,ze="#uapp",Ie=document.querySelector(ze);Object(a["b"])(Fe,Object(c["a"])({},Ie.dataset)).mount(ze)},fc88:function(e,t,n){"use strict";n("9dfb")}});