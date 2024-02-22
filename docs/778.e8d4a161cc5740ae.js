"use strict";(self.webpackChunkinsuranceAI=self.webpackChunkinsuranceAI||[]).push([[778],{7778:(Ut,F,_)=>{_.r(F),_.d(F,{GoogleaiModule:()=>wt});var I=_(6814);function H(t,i,e,o,r,s,c){try{var u=t[s](c),a=u.value}catch(d){return void e(d)}u.done?i(a):Promise.resolve(a).then(o,r)}function l(t){return function(){var i=this,e=arguments;return new Promise(function(o,r){var s=t.apply(i,e);function c(a){H(s,o,r,c,u,"next",a)}function u(a){H(s,o,r,c,u,"throw",a)}c(void 0)})}}var v=function(t){return t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER",t}(v||{});class C extends Error{constructor(i){super(`[GoogleGenerativeAI Error]: ${i}`)}}class K extends C{constructor(i,e){super(i),this.response=e}}const et="0.2.1",nt="genai-js";var h=function(t){return t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents",t}(h||{});class T{constructor(i,e,o,r){this.model=i,this.task=e,this.apiKey=o,this.stream=r}toString(){let i=`https://generativelanguage.googleapis.com/v1/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function y(t,i,e){return N.apply(this,arguments)}function N(){return(N=l(function*(t,i,e){let o;try{if(o=yield fetch(t.toString(),Object.assign(Object.assign({},function rt(t){const i={};if(t?.timeout>=0){const e=new AbortController,o=e.signal;setTimeout(()=>e.abort(),t.timeout),i.signal=o}return i}(e)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":`${nt}/${et}`,"x-goog-api-key":t.apiKey},body:i})),!o.ok){let r="";try{const s=yield o.json();r=s.error.message,s.error.details&&(r+=` ${JSON.stringify(s.error.details)}`)}catch{}throw new Error(`[${o.status} ${o.statusText}] ${r}`)}}catch(r){const s=new C(`Error fetching from ${t.toString()}: ${r.message}`);throw s.stack=r.stack,s}return o})).apply(this,arguments)}function b(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Z(t.candidates[0]))throw new K(`${O(t)}`,t);return function it(t){var i,e,o,r;return null!==(r=null===(o=null===(e=null===(i=t.candidates)||void 0===i?void 0:i[0].content)||void 0===e?void 0:e.parts)||void 0===o?void 0:o[0])&&void 0!==r&&r.text?t.candidates[0].content.parts[0].text:""}(t)}if(t.promptFeedback)throw new K(`Text not available. ${O(t)}`,t);return""},t}const st=[v.RECITATION,v.SAFETY];function Z(t){return!!t.finishReason&&st.includes(t.finishReason)}function O(t){var i,e,o;let r="";if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null!==(o=t.candidates)&&void 0!==o&&o[0]){const s=t.candidates[0];Z(s)&&(r+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(r+=`: ${s.finishMessage}`))}}else r+="Response was blocked",!(null===(i=t.promptFeedback)||void 0===i)&&i.blockReason&&(r+=` due to ${t.promptFeedback.blockReason}`),null!==(e=t.promptFeedback)&&void 0!==e&&e.blockReasonMessage&&(r+=`: ${t.promptFeedback.blockReasonMessage}`);return r}function x(t){return this instanceof x?(this.v=t,this):new x(t)}"function"==typeof SuppressedError&&SuppressedError;const Y=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ut(t){return S.apply(this,arguments)}function S(){return(S=l(function*(t){const i=[],e=t.getReader();for(;;){const{done:o,value:r}=yield e.read();if(o)return b(gt(i));i.push(r)}})).apply(this,arguments)}function lt(t){return function at(t,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e.apply(t,i||[]),s=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(g){o[g]&&(r[g]=function(E){return new Promise(function(L,Pt){s.push([g,E,L,Pt])>1||u(g,E)})})}function u(g,E){try{!function a(g){g.value instanceof x?Promise.resolve(g.value.v).then(d,m):q(s[0][2],g)}(o[g](E))}catch(L){q(s[0][3],L)}}function d(g){u("next",g)}function m(g){u("throw",g)}function q(g,E){g(E),s.shift(),s.length&&u(s[0][0],s[0][1])}}(this,arguments,function*(){const e=t.getReader();for(;;){const{value:o,done:r}=yield x(e.read());if(r)break;yield yield x(b(o))}})}function gt(t){const i=t[t.length-1],e={promptFeedback:i?.promptFeedback};for(const o of t)if(o.candidates)for(const r of o.candidates){const s=r.index;if(e.candidates||(e.candidates=[]),e.candidates[s]||(e.candidates[s]={index:r.index}),e.candidates[s].citationMetadata=r.citationMetadata,e.candidates[s].finishReason=r.finishReason,e.candidates[s].finishMessage=r.finishMessage,e.candidates[s].safetyRatings=r.safetyRatings,r.content&&r.content.parts){e.candidates[s].content||(e.candidates[s].content={role:r.content.role||"user",parts:[{text:""}]});for(const c of r.content.parts)c.text&&(e.candidates[s].content.parts[0].text+=c.text)}}return e}function D(t,i,e,o){return R.apply(this,arguments)}function R(){return(R=l(function*(t,i,e,o){const r=new T(i,h.STREAM_GENERATE_CONTENT,t,!0);return function ct(t){const e=function dt(t){const i=t.getReader();return new ReadableStream({start(o){let r="";return function s(){return i.read().then(({value:c,done:u})=>{if(u)return r.trim()?void o.error(new C("Failed to parse stream")):void o.close();r+=c;let d,a=r.match(Y);for(;a;){try{d=JSON.parse(a[1])}catch{return void o.error(new C(`Error parsing JSON response: "${a[1]}"`))}o.enqueue(d),r=r.substring(a[0].length),a=r.match(Y)}return s()})}()}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[o,r]=e.tee();return{stream:lt(o),response:ut(r)}}(yield y(r,JSON.stringify(e),o))})).apply(this,arguments)}function k(t,i,e,o){return M.apply(this,arguments)}function M(){return(M=l(function*(t,i,e,o){const r=new T(i,h.GENERATE_CONTENT,t,!1);return{response:b(yield(yield y(r,JSON.stringify(e),o)).json())}})).apply(this,arguments)}function A(t,i){let e=[];if("string"==typeof t)e=[{text:t}];else for(const o of t)e.push("string"==typeof o?{text:o}:o);return{role:i,parts:e}}function G(t){return t.contents?t:{contents:[A(t,"user")]}}const B="SILENT_ERROR";class pt{constructor(i,e,o,r){this.model=e,this.params=o,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=i,o?.history&&(this._history=o.history.map(s=>{if(!s.role)throw new Error("Missing role for history item: "+JSON.stringify(s));return A(s.parts,s.role)}))}getHistory(){var i=this;return l(function*(){return yield i._sendPromise,i._history})()}sendMessage(i){var e=this;return l(function*(){var o,r;yield e._sendPromise;const s=A(i,"user"),c={safetySettings:null===(o=e.params)||void 0===o?void 0:o.safetySettings,generationConfig:null===(r=e.params)||void 0===r?void 0:r.generationConfig,contents:[...e._history,s]};let u;return e._sendPromise=e._sendPromise.then(()=>k(e._apiKey,e.model,c,e.requestOptions)).then(a=>{var d;if(a.response.candidates&&a.response.candidates.length>0){e._history.push(s);const m=Object.assign({parts:[],role:"model"},null===(d=a.response.candidates)||void 0===d?void 0:d[0].content);e._history.push(m)}else{const m=O(a.response);m&&console.warn(`sendMessage() was unsuccessful. ${m}. Inspect response object for details.`)}u=a}),yield e._sendPromise,u})()}sendMessageStream(i){var e=this;return l(function*(){var o,r;yield e._sendPromise;const s=A(i,"user"),c={safetySettings:null===(o=e.params)||void 0===o?void 0:o.safetySettings,generationConfig:null===(r=e.params)||void 0===r?void 0:r.generationConfig,contents:[...e._history,s]},u=D(e._apiKey,e.model,c,e.requestOptions);return e._sendPromise=e._sendPromise.then(()=>u).catch(a=>{throw new Error(B)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){e._history.push(s);const d=Object.assign({},a.candidates[0].content);d.role||(d.role="model"),e._history.push(d)}else{const d=O(a);d&&console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`)}}).catch(a=>{a.message!==B&&console.error(a)}),u})()}}function w(){return(w=l(function*(t,i,e,o){const r=new T(i,h.COUNT_TOKENS,t,!1);return(yield y(r,JSON.stringify(Object.assign(Object.assign({},e),{model:i})),o)).json()})).apply(this,arguments)}function P(){return(P=l(function*(t,i,e,o){const r=new T(i,h.EMBED_CONTENT,t,!1);return(yield y(r,JSON.stringify(e),o)).json()})).apply(this,arguments)}function U(){return(U=l(function*(t,i,e,o){const r=new T(i,h.BATCH_EMBED_CONTENTS,t,!1),s=e.requests.map(u=>Object.assign(Object.assign({},u),{model:i}));return(yield y(r,JSON.stringify({requests:s}),o)).json()})).apply(this,arguments)}class Et{constructor(i,e,o){this.apiKey=i,this.model=e.model.includes("/")?e.model:`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.requestOptions=o||{}}generateContent(i){var e=this;return l(function*(){const o=G(i);return k(e.apiKey,e.model,Object.assign({generationConfig:e.generationConfig,safetySettings:e.safetySettings},o),e.requestOptions)})()}generateContentStream(i){var e=this;return l(function*(){const o=G(i);return D(e.apiKey,e.model,Object.assign({generationConfig:e.generationConfig,safetySettings:e.safetySettings},o),e.requestOptions)})()}startChat(i){return new pt(this.apiKey,this.model,i,this.requestOptions)}countTokens(i){var e=this;return l(function*(){const o=G(i);return function ft(t,i,e,o){return w.apply(this,arguments)}(e.apiKey,e.model,o)})()}embedContent(i){var e=this;return l(function*(){const o=function _t(t){return"string"==typeof t||Array.isArray(t)?{content:A(t,"user")}:t}(i);return function mt(t,i,e,o){return P.apply(this,arguments)}(e.apiKey,e.model,o)})()}batchEmbedContents(i){var e=this;return l(function*(){return function ht(t,i,e,o){return U.apply(this,arguments)}(e.apiKey,e.model,i,e.requestOptions)})()}}var n=_(9468),f=_(95),J=_(594),p=_(2507),Tt=_(6593);let yt=(()=>{class t{constructor(e){this.sanitize=e}transform(e){return this.sanitize.bypassSecurityTrustUrl(e)}static#t=this.\u0275fac=function(o){return new(o||t)(n.Y36(Tt.H7,16))};static#e=this.\u0275pipe=n.Yjl({name:"sanitizeUrl",type:t,pure:!0})}return t})();const xt=function(t){return{scanning:t}};function At(t,i){if(1&t&&(n.ynx(0),n._UZ(1,"br"),n.TgZ(2,"div",8),n._UZ(3,"img",9),n.ALo(4,"sanitizeUrl"),n.qZA(),n.BQk()),2&t){const e=i.$implicit,o=n.oxw();n.xp6(2),n.Q6J("ngClass",n.VKq(4,xt,o.submmited)),n.xp6(1),n.Q6J("src",n.lcZ(4,2,e),n.LSH)}}function It(t,i){if(1&t&&(n.ynx(0),n.TgZ(1,"div",10)(2,"div",11),n._UZ(3,"p",12),n.qZA()(),n.BQk()),2&t){const e=n.oxw();n.xp6(3),n.Q6J("innerText",e.content)}}function Ot(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"button",25),n.NdJ("click",function(){n.CHM(e);const r=n.oxw(2);return n.KtG(r.textInput())}),n._uU(1,"Submit"),n.qZA()}}function vt(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div")(1,"button",26),n.NdJ("click",function(){n.CHM(e),n.oxw();const r=n.MAs(20);return n.KtG(r.click())}),n._uU(2,"Upload Picture"),n.qZA()(),n.TgZ(3,"div",27)(4,"button",28),n.NdJ("click",function(){n.CHM(e);const r=n.oxw(2);return n.KtG(r.ImageWithText())}),n._uU(5,"Get the Results"),n.qZA()()}}function Nt(t,i){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"div",13)(2,"label",14)(3,"b"),n._uU(4,"Enter your message"),n.qZA()(),n.TgZ(5,"textarea",15),n.NdJ("ngModelChange",function(r){n.CHM(e);const s=n.oxw();return n.KtG(s.prompt=r)})("keyup.enter",function(){n.CHM(e);const r=n.oxw();return n.KtG(r.textInput())})("input",function(){n.CHM(e);const r=n.oxw();return n.KtG(r.clearContent())}),n.qZA()(),n._UZ(6,"br"),n.TgZ(7,"ul",16,17),n.NdJ("activeIdChange",function(r){n.CHM(e);const s=n.oxw();return n.KtG(s.active=r)}),n.TgZ(9,"li",18)(10,"button",19),n._uU(11,"Text Only"),n.qZA(),n.YNc(12,Ot,2,0,"ng-template",20),n.qZA(),n.TgZ(13,"li",18)(14,"button",19),n._uU(15,"Text & Picture"),n.qZA(),n.YNc(16,vt,6,0,"ng-template",20),n.qZA()(),n._UZ(17,"div",21),n.TgZ(18,"form",22)(19,"input",23,24),n.NdJ("change",function(r){n.CHM(e);const s=n.oxw();return n.KtG(s.onFileChanged(r))}),n.qZA()(),n.BQk()}if(2&t){const e=n.MAs(8),o=n.oxw();n.xp6(5),n.Q6J("ngModel",o.prompt),n.xp6(2),n.Q6J("activeId",o.active),n.xp6(2),n.Q6J("ngbNavItem",1),n.xp6(4),n.Q6J("ngbNavItem",2),n.xp6(4),n.Q6J("ngbNavOutlet",e)}}function bt(t,i){if(1&t){const e=n.EpF();n._UZ(0,"br"),n.TgZ(1,"button",29),n.NdJ("click",function(){n.CHM(e);const r=n.oxw();return n.KtG(r.reset())}),n._uU(2,"Reset"),n.qZA()}}function St(t,i){1&t&&(n.TgZ(0,"div",31),n._UZ(1,"img",32),n.TgZ(2,"h4"),n._uU(3,"wait a second. searching for information..."),n.qZA()())}function Rt(t,i){if(1&t&&n.YNc(0,St,4,0,"div",30),2&t){const e=n.oxw();n.Q6J("ngIf",e.submmited&&0===e.uploadImages.length)}}const j=new class Ct{constructor(i){this.apiKey=i}getGenerativeModel(i,e){if(!i.model)throw new C("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Et(this.apiKey,i,e)}}("AIzaSyBEip1TZnfHNbMXlImJ1jr7ZV136BhcKII"),Gt=[{path:"",component:(()=>{class t{constructor(){this.prompt="",this.content=null,this.submmited=!1,this.active=1,this.selectedFiles=[],this.uploadImages=[]}ngOnInit(){}clearContent(){this.content=null}textInput(){var e=this;return l(function*(){console.log("TEXT ONLY"),e.submmited=!0;const c=(yield(yield j.getGenerativeModel({model:"gemini-pro"}).generateContent(e.prompt)).response).text();console.log(c),e.content=c,e.prompt="",e.submmited=!1})()}onFileChanged(e){this.selectedFiles=e.target.files,this.selectedFiles&&Array.from(this.selectedFiles).length>0&&Array.from(this.selectedFiles).forEach(o=>{this.uploadImages.push(URL.createObjectURL(o))})}ImageWithText(){var e=this;return l(function*(){if(0===e.prompt.length)return void alert("Type your prompt");if(0===Array.from(e.selectedFiles).length)return void alert("Upload Picture");console.log("TEXT - IMAGE"),e.submmited=!0;const o=j.getGenerativeModel({model:"gemini-pro-vision"}),r=yield Promise.all(Array.from(e.selectedFiles).map(e.fileToGenerativePart)),u=(yield(yield o.generateContent([e.prompt,...r])).response).text();console.log(u),e.content=u,e.submmited=!1,e.prompt=""})()}fileToGenerativePart(e){return l(function*(){return{inlineData:{data:yield new Promise(r=>{const s=new FileReader;s.onloadend=()=>r(s.result.split(",")[1]),s.readAsDataURL(e)}),mimeType:e.type}}})()}reset(){this.prompt="",this.content=null,this.submmited=!1,this.uploadImages=[]}static#t=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-googleai"]],decls:16,vars:5,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],["routerLink","/"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["resetBtn",""],["loading",""],[1,"fingerprint",3,"ngClass"],[3,"src"],[1,"card"],[1,"card-body"],[1,"mt-4",3,"innerText"],[1,"form-group"],["for","exampleTextarea",1,"form-label","mt-4"],["id","exampleTextarea","rows","3","spellcheck","false","placeholder","text your input",1,"form-control",3,"ngModel","ngModelChange","keyup.enter","input"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"text-center","mt-4",2,"max-width","300px",3,"ngbNavOutlet"],[1,"my-5"],["type","file","name","images","multiple","multiple","accept","image/png, image/gif, image/jpeg",2,"display","none",3,"change"],["fileInput",""],["type","submit",1,"btn","btn-primary","w-100",3,"click"],["type","button",1,"btn","btn-primary","w-100",3,"click"],[1,"mt-3"],["type","button",1,"btn","btn-success","w-100",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["class","loading",4,"ngIf"],[1,"loading"],["src","https://chkumarpersistent.github.io/insuranceAI/assets/dataloading.gif","alt","dataloading"]],template:function(o,r){if(1&o&&(n.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2),n._UZ(4,"br"),n.TgZ(5,"button",3),n._uU(6,"Home"),n.qZA(),n._UZ(7,"br"),n.YNc(8,At,5,6,"ng-container",4),n._UZ(9,"br"),n.YNc(10,It,4,1,"ng-container",5),n.YNc(11,Nt,21,5,"ng-container",5),n.YNc(12,bt,3,0,"ng-template",null,6,n.W1O),n.YNc(14,Rt,1,1,"ng-template",null,7,n.W1O),n.qZA()()()()),2&o){const s=n.MAs(13),c=n.MAs(15);n.xp6(8),n.Q6J("ngForOf",r.uploadImages),n.xp6(2),n.Q6J("ngIf",r.content)("ngIfElse",c),n.xp6(1),n.Q6J("ngIf",!r.content&&!r.submmited)("ngIfElse",s)}},dependencies:[I.mk,I.sg,I.O5,f._Y,f.Fj,f.JJ,f.JL,f.On,f.F,J.rH,p.uN,p.Pz,p.nv,p.Is,p.Fh,p.tO,p.Dy,yt],styles:['.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:300px}.fingerprint[_ngcontent-%COMP%]{position:relative;border:solid 3px #AAB8BE;width:100%;max-width:900px}.fingerprint[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:900px;max-height:600px;object-fit:contain;height:100%}.fingerprint.scanning[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;width:100%;max-width:900px;height:30px;background-image:linear-gradient(to bottom,rgba(170,184,190,0),rgba(0,150,136,.5));animation:_ngcontent-%COMP%_scanning 2.5s linear infinite alternate;z-index:9999}@keyframes _ngcontent-%COMP%_scanning{0%,to{height:18px}50%{height:calc(100% + -0px)}}']})}return t})()}];let wt=(()=>{class t{static#t=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275mod=n.oAB({type:t});static#n=this.\u0275inj=n.cJS({imports:[I.ez,f.u5,J.Bz.forChild(Gt),p.Oz]})}return t})()}}]);