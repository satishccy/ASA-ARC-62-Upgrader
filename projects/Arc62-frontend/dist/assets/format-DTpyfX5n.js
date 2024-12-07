import{c as I,g as st,a as wt}from"./index-C-wbYhbb.js";var rr=t=>encodeURIComponent(t).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),ct="%[a-f0-9]{2}",ot=new RegExp("("+ct+")|([^%]+?)","gi"),at=new RegExp("("+ct+")+","gi");function Ve(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;r=r||1;var n=t.slice(0,r),f=t.slice(r);return Array.prototype.concat.call([],Ve(n),Ve(f))}function xt(t){try{return decodeURIComponent(t)}catch{for(var r=t.match(ot)||[],n=1;n<r.length;n++)t=Ve(r,n).join(""),r=t.match(ot)||[];return t}}function gt(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=at.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch{var f=xt(n[0]);f!==n[0]&&(r[n[0]]=f)}n=at.exec(t)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var v=c[u];t=t.replace(new RegExp(v,"g"),r[v])}return t}var nr=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return gt(t)}},or=(t,r)=>{if(!(typeof t=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[t];const n=t.indexOf(r);return n===-1?[t]:[t.slice(0,n),t.slice(n+r.length)]},lt={exports:{}};/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */(function(t){(function(){var r="input is invalid type",n="finalize already called",f=typeof window=="object",c=f?window:{};c.JS_SHA3_NO_WINDOW&&(f=!1);var u=!f&&typeof self=="object",v=!c.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;v?c=I:u&&(c=self);var _=!c.JS_SHA3_NO_COMMON_JS&&!0&&t.exports,R=!c.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",h="0123456789abcdef".split(""),E=[31,7936,2031616,520093696],S=[4,1024,262144,67108864],g=[1,256,65536,16777216],F=[6,1536,393216,100663296],O=[0,8,16,24],T=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],We=[224,256,384,512],He=[128,256],$e=["hex","buffer","arrayBuffer","array","digest"],Ye={128:168,256:136};(c.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}),R&&(c.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var Qe=function(e,o,a){return function(i){return new w(e,o,e).update(i)[a]()}},Xe=function(e,o,a){return function(i,l){return new w(e,o,l).update(i)[a]()}},Ze=function(e,o,a){return function(i,l,p,d){return C["cshake"+e].update(i,l,p,d)[a]()}},et=function(e,o,a){return function(i,l,p,d){return C["kmac"+e].update(i,l,p,d)[a]()}},U=function(e,o,a,i){for(var l=0;l<$e.length;++l){var p=$e[l];e[p]=o(a,i,p)}return e},tt=function(e,o){var a=Qe(e,o,"hex");return a.create=function(){return new w(e,o,e)},a.update=function(i){return a.create().update(i)},U(a,Qe,e,o)},bt=function(e,o){var a=Xe(e,o,"hex");return a.create=function(i){return new w(e,o,i)},a.update=function(i,l){return a.create(l).update(i)},U(a,Xe,e,o)},vt=function(e,o){var a=Ye[e],i=Ze(e,o,"hex");return i.create=function(l,p,d){return!p&&!d?C["shake"+e].create(l):new w(e,o,l).bytepad([p,d],a)},i.update=function(l,p,d,y){return i.create(p,d,y).update(l)},U(i,Ze,e,o)},_t=function(e,o){var a=Ye[e],i=et(e,o,"hex");return i.create=function(l,p,d){return new ze(e,o,p).bytepad(["KMAC",d],a).bytepad([l],a)},i.update=function(l,p,d,y){return i.create(l,d,y).update(p)},U(i,et,e,o)},rt=[{name:"keccak",padding:g,bits:We,createMethod:tt},{name:"sha3",padding:F,bits:We,createMethod:tt},{name:"shake",padding:E,bits:He,createMethod:bt},{name:"cshake",padding:S,bits:He,createMethod:vt},{name:"kmac",padding:S,bits:He,createMethod:_t}],C={},N=[],B=0;B<rt.length;++B)for(var j=rt[B],H=j.bits,D=0;D<H.length;++D){var Je=j.name+"_"+H[D];if(N.push(Je),C[Je]=j.createMethod(H[D],j.padding),j.name!=="sha3"){var nt=j.name+H[D];N.push(nt),C[nt]=C[Je]}}function w(e,o,a){this.blocks=[],this.s=[],this.padding=o,this.outputBits=a,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=a>>5,this.extraBytes=(a&31)>>3;for(var i=0;i<50;++i)this.s[i]=0}w.prototype.update=function(e){if(this.finalized)throw new Error(n);var o,a=typeof e;if(a!=="string"){if(a==="object"){if(e===null)throw new Error(r);if(R&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!R||!ArrayBuffer.isView(e)))throw new Error(r)}else throw new Error(r);o=!0}for(var i=this.blocks,l=this.byteCount,p=e.length,d=this.blockCount,y=0,x=this.s,b,s;y<p;){if(this.reset)for(this.reset=!1,i[0]=this.block,b=1;b<d+1;++b)i[b]=0;if(o)for(b=this.start;y<p&&b<l;++y)i[b>>2]|=e[y]<<O[b++&3];else for(b=this.start;y<p&&b<l;++y)s=e.charCodeAt(y),s<128?i[b>>2]|=s<<O[b++&3]:s<2048?(i[b>>2]|=(192|s>>6)<<O[b++&3],i[b>>2]|=(128|s&63)<<O[b++&3]):s<55296||s>=57344?(i[b>>2]|=(224|s>>12)<<O[b++&3],i[b>>2]|=(128|s>>6&63)<<O[b++&3],i[b>>2]|=(128|s&63)<<O[b++&3]):(s=65536+((s&1023)<<10|e.charCodeAt(++y)&1023),i[b>>2]|=(240|s>>18)<<O[b++&3],i[b>>2]|=(128|s>>12&63)<<O[b++&3],i[b>>2]|=(128|s>>6&63)<<O[b++&3],i[b>>2]|=(128|s&63)<<O[b++&3]);if(this.lastByteIndex=b,b>=l){for(this.start=b-l,this.block=i[d],b=0;b<d;++b)x[b]^=i[b];M(x),this.reset=!0}else this.start=b}return this},w.prototype.encode=function(e,o){var a=e&255,i=1,l=[a];for(e=e>>8,a=e&255;a>0;)l.unshift(a),e=e>>8,a=e&255,++i;return o?l.push(i):l.unshift(i),this.update(l),l.length},w.prototype.encodeString=function(e){var o,a=typeof e;if(a!=="string"){if(a==="object"){if(e===null)throw new Error(r);if(R&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!R||!ArrayBuffer.isView(e)))throw new Error(r)}else throw new Error(r);o=!0}var i=0,l=e.length;if(o)i=l;else for(var p=0;p<e.length;++p){var d=e.charCodeAt(p);d<128?i+=1:d<2048?i+=2:d<55296||d>=57344?i+=3:(d=65536+((d&1023)<<10|e.charCodeAt(++p)&1023),i+=4)}return i+=this.encode(i*8),this.update(e),i},w.prototype.bytepad=function(e,o){for(var a=this.encode(o),i=0;i<e.length;++i)a+=this.encodeString(e[i]);var l=o-a%o,p=[];return p.length=l,this.update(p),this},w.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,o=this.lastByteIndex,a=this.blockCount,i=this.s;if(e[o>>2]|=this.padding[o&3],this.lastByteIndex===this.byteCount)for(e[0]=e[a],o=1;o<a+1;++o)e[o]=0;for(e[a-1]|=2147483648,o=0;o<a;++o)i[o]^=e[o];M(i)}},w.prototype.toString=w.prototype.hex=function(){this.finalize();for(var e=this.blockCount,o=this.s,a=this.outputBlocks,i=this.extraBytes,l=0,p=0,d="",y;p<a;){for(l=0;l<e&&p<a;++l,++p)y=o[l],d+=h[y>>4&15]+h[y&15]+h[y>>12&15]+h[y>>8&15]+h[y>>20&15]+h[y>>16&15]+h[y>>28&15]+h[y>>24&15];p%e===0&&(M(o),l=0)}return i&&(y=o[l],d+=h[y>>4&15]+h[y&15],i>1&&(d+=h[y>>12&15]+h[y>>8&15]),i>2&&(d+=h[y>>20&15]+h[y>>16&15])),d},w.prototype.arrayBuffer=function(){this.finalize();var e=this.blockCount,o=this.s,a=this.outputBlocks,i=this.extraBytes,l=0,p=0,d=this.outputBits>>3,y;i?y=new ArrayBuffer(a+1<<2):y=new ArrayBuffer(d);for(var x=new Uint32Array(y);p<a;){for(l=0;l<e&&p<a;++l,++p)x[p]=o[l];p%e===0&&M(o)}return i&&(x[l]=o[l],y=y.slice(0,d)),y},w.prototype.buffer=w.prototype.arrayBuffer,w.prototype.digest=w.prototype.array=function(){this.finalize();for(var e=this.blockCount,o=this.s,a=this.outputBlocks,i=this.extraBytes,l=0,p=0,d=[],y,x;p<a;){for(l=0;l<e&&p<a;++l,++p)y=p<<2,x=o[l],d[y]=x&255,d[y+1]=x>>8&255,d[y+2]=x>>16&255,d[y+3]=x>>24&255;p%e===0&&M(o)}return i&&(y=p<<2,x=o[l],d[y]=x&255,i>1&&(d[y+1]=x>>8&255),i>2&&(d[y+2]=x>>16&255)),d};function ze(e,o,a){w.call(this,e,o,a)}ze.prototype=new w,ze.prototype.finalize=function(){return this.encode(this.outputBits,!0),w.prototype.finalize.call(this)};var M=function(e){var o,a,i,l,p,d,y,x,b,s,J,z,V,K,q,G,L,W,$,Y,Q,X,Z,ee,te,re,ne,oe,ae,ie,ue,fe,ce,le,he,ye,pe,de,be,ve,_e,se,we,xe,ge,Re,Ee,Oe,Se,Ae,me,Fe,Ce,Be,Ie,je,Ne,De,Me,ke,Pe,Te,Ue;for(i=0;i<48;i+=2)l=e[0]^e[10]^e[20]^e[30]^e[40],p=e[1]^e[11]^e[21]^e[31]^e[41],d=e[2]^e[12]^e[22]^e[32]^e[42],y=e[3]^e[13]^e[23]^e[33]^e[43],x=e[4]^e[14]^e[24]^e[34]^e[44],b=e[5]^e[15]^e[25]^e[35]^e[45],s=e[6]^e[16]^e[26]^e[36]^e[46],J=e[7]^e[17]^e[27]^e[37]^e[47],z=e[8]^e[18]^e[28]^e[38]^e[48],V=e[9]^e[19]^e[29]^e[39]^e[49],o=z^(d<<1|y>>>31),a=V^(y<<1|d>>>31),e[0]^=o,e[1]^=a,e[10]^=o,e[11]^=a,e[20]^=o,e[21]^=a,e[30]^=o,e[31]^=a,e[40]^=o,e[41]^=a,o=l^(x<<1|b>>>31),a=p^(b<<1|x>>>31),e[2]^=o,e[3]^=a,e[12]^=o,e[13]^=a,e[22]^=o,e[23]^=a,e[32]^=o,e[33]^=a,e[42]^=o,e[43]^=a,o=d^(s<<1|J>>>31),a=y^(J<<1|s>>>31),e[4]^=o,e[5]^=a,e[14]^=o,e[15]^=a,e[24]^=o,e[25]^=a,e[34]^=o,e[35]^=a,e[44]^=o,e[45]^=a,o=x^(z<<1|V>>>31),a=b^(V<<1|z>>>31),e[6]^=o,e[7]^=a,e[16]^=o,e[17]^=a,e[26]^=o,e[27]^=a,e[36]^=o,e[37]^=a,e[46]^=o,e[47]^=a,o=s^(l<<1|p>>>31),a=J^(p<<1|l>>>31),e[8]^=o,e[9]^=a,e[18]^=o,e[19]^=a,e[28]^=o,e[29]^=a,e[38]^=o,e[39]^=a,e[48]^=o,e[49]^=a,K=e[0],q=e[1],Re=e[11]<<4|e[10]>>>28,Ee=e[10]<<4|e[11]>>>28,oe=e[20]<<3|e[21]>>>29,ae=e[21]<<3|e[20]>>>29,ke=e[31]<<9|e[30]>>>23,Pe=e[30]<<9|e[31]>>>23,se=e[40]<<18|e[41]>>>14,we=e[41]<<18|e[40]>>>14,le=e[2]<<1|e[3]>>>31,he=e[3]<<1|e[2]>>>31,G=e[13]<<12|e[12]>>>20,L=e[12]<<12|e[13]>>>20,Oe=e[22]<<10|e[23]>>>22,Se=e[23]<<10|e[22]>>>22,ie=e[33]<<13|e[32]>>>19,ue=e[32]<<13|e[33]>>>19,Te=e[42]<<2|e[43]>>>30,Ue=e[43]<<2|e[42]>>>30,Be=e[5]<<30|e[4]>>>2,Ie=e[4]<<30|e[5]>>>2,ye=e[14]<<6|e[15]>>>26,pe=e[15]<<6|e[14]>>>26,W=e[25]<<11|e[24]>>>21,$=e[24]<<11|e[25]>>>21,Ae=e[34]<<15|e[35]>>>17,me=e[35]<<15|e[34]>>>17,fe=e[45]<<29|e[44]>>>3,ce=e[44]<<29|e[45]>>>3,ee=e[6]<<28|e[7]>>>4,te=e[7]<<28|e[6]>>>4,je=e[17]<<23|e[16]>>>9,Ne=e[16]<<23|e[17]>>>9,de=e[26]<<25|e[27]>>>7,be=e[27]<<25|e[26]>>>7,Y=e[36]<<21|e[37]>>>11,Q=e[37]<<21|e[36]>>>11,Fe=e[47]<<24|e[46]>>>8,Ce=e[46]<<24|e[47]>>>8,xe=e[8]<<27|e[9]>>>5,ge=e[9]<<27|e[8]>>>5,re=e[18]<<20|e[19]>>>12,ne=e[19]<<20|e[18]>>>12,De=e[29]<<7|e[28]>>>25,Me=e[28]<<7|e[29]>>>25,ve=e[38]<<8|e[39]>>>24,_e=e[39]<<8|e[38]>>>24,X=e[48]<<14|e[49]>>>18,Z=e[49]<<14|e[48]>>>18,e[0]=K^~G&W,e[1]=q^~L&$,e[10]=ee^~re&oe,e[11]=te^~ne&ae,e[20]=le^~ye&de,e[21]=he^~pe&be,e[30]=xe^~Re&Oe,e[31]=ge^~Ee&Se,e[40]=Be^~je&De,e[41]=Ie^~Ne&Me,e[2]=G^~W&Y,e[3]=L^~$&Q,e[12]=re^~oe&ie,e[13]=ne^~ae&ue,e[22]=ye^~de&ve,e[23]=pe^~be&_e,e[32]=Re^~Oe&Ae,e[33]=Ee^~Se&me,e[42]=je^~De&ke,e[43]=Ne^~Me&Pe,e[4]=W^~Y&X,e[5]=$^~Q&Z,e[14]=oe^~ie&fe,e[15]=ae^~ue&ce,e[24]=de^~ve&se,e[25]=be^~_e&we,e[34]=Oe^~Ae&Fe,e[35]=Se^~me&Ce,e[44]=De^~ke&Te,e[45]=Me^~Pe&Ue,e[6]=Y^~X&K,e[7]=Q^~Z&q,e[16]=ie^~fe&ee,e[17]=ue^~ce&te,e[26]=ve^~se&le,e[27]=_e^~we&he,e[36]=Ae^~Fe&xe,e[37]=me^~Ce&ge,e[46]=ke^~Te&Be,e[47]=Pe^~Ue&Ie,e[8]=X^~K&G,e[9]=Z^~q&L,e[18]=fe^~ee&re,e[19]=ce^~te&ne,e[28]=se^~le&ye,e[29]=we^~he&pe,e[38]=Fe^~xe&Re,e[39]=Ce^~ge&Ee,e[48]=Te^~Be&je,e[49]=Ue^~Ie&Ne,e[0]^=T[i],e[1]^=T[i+1]};if(_)t.exports=C;else for(B=0;B<N.length;++B)c[N[B]]=C[N[B]]})()})(lt);var Rt=lt.exports;const ar=st(Rt),Et="PARSE_ERROR",Ot="INVALID_REQUEST",St="METHOD_NOT_FOUND",At="INVALID_PARAMS",ht="INTERNAL_ERROR",Le="SERVER_ERROR",mt=[-32700,-32600,-32601,-32602,-32603],k={[Et]:{code:-32700,message:"Parse error"},[Ot]:{code:-32600,message:"Invalid Request"},[St]:{code:-32601,message:"Method not found"},[At]:{code:-32602,message:"Invalid params"},[ht]:{code:-32603,message:"Internal error"},[Le]:{code:-32e3,message:"Server error"}},yt=Le;function Ft(t){return mt.includes(t)}function it(t){return Object.keys(k).includes(t)?k[t]:k[yt]}function Ct(t){const r=Object.values(k).find(n=>n.code===t);return r||k[yt]}function ir(t,r,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${r}`):t}var Bt={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ke=function(t,r){return Ke=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,f){n.__proto__=f}||function(n,f){for(var c in f)f.hasOwnProperty(c)&&(n[c]=f[c])},Ke(t,r)};function It(t,r){Ke(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var qe=function(){return qe=Object.assign||function(r){for(var n,f=1,c=arguments.length;f<c;f++){n=arguments[f];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])}return r},qe.apply(this,arguments)};function jt(t,r){var n={};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&r.indexOf(f)<0&&(n[f]=t[f]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,f=Object.getOwnPropertySymbols(t);c<f.length;c++)r.indexOf(f[c])<0&&Object.prototype.propertyIsEnumerable.call(t,f[c])&&(n[f[c]]=t[f[c]]);return n}function Nt(t,r,n,f){var c=arguments.length,u=c<3?r:f===null?f=Object.getOwnPropertyDescriptor(r,n):f,v;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(t,r,n,f);else for(var _=t.length-1;_>=0;_--)(v=t[_])&&(u=(c<3?v(u):c>3?v(r,n,u):v(r,n))||u);return c>3&&u&&Object.defineProperty(r,n,u),u}function Dt(t,r){return function(n,f){r(n,f,t)}}function Mt(t,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,r)}function kt(t,r,n,f){function c(u){return u instanceof n?u:new n(function(v){v(u)})}return new(n||(n=Promise))(function(u,v){function _(E){try{h(f.next(E))}catch(S){v(S)}}function R(E){try{h(f.throw(E))}catch(S){v(S)}}function h(E){E.done?u(E.value):c(E.value).then(_,R)}h((f=f.apply(t,r||[])).next())})}function Pt(t,r){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},f,c,u,v;return v={next:_(0),throw:_(1),return:_(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function _(h){return function(E){return R([h,E])}}function R(h){if(f)throw new TypeError("Generator is already executing.");for(;n;)try{if(f=1,c&&(u=h[0]&2?c.return:h[0]?c.throw||((u=c.return)&&u.call(c),0):c.next)&&!(u=u.call(c,h[1])).done)return u;switch(c=0,u&&(h=[h[0]&2,u.value]),h[0]){case 0:case 1:u=h;break;case 4:return n.label++,{value:h[1],done:!1};case 5:n.label++,c=h[1],h=[0];continue;case 7:h=n.ops.pop(),n.trys.pop();continue;default:if(u=n.trys,!(u=u.length>0&&u[u.length-1])&&(h[0]===6||h[0]===2)){n=0;continue}if(h[0]===3&&(!u||h[1]>u[0]&&h[1]<u[3])){n.label=h[1];break}if(h[0]===6&&n.label<u[1]){n.label=u[1],u=h;break}if(u&&n.label<u[2]){n.label=u[2],n.ops.push(h);break}u[2]&&n.ops.pop(),n.trys.pop();continue}h=r.call(t,n)}catch(E){h=[6,E],c=0}finally{f=u=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}function Tt(t,r,n,f){f===void 0&&(f=n),t[f]=r[n]}function Ut(t,r){for(var n in t)n!=="default"&&!r.hasOwnProperty(n)&&(r[n]=t[n])}function Ge(t){var r=typeof Symbol=="function"&&Symbol.iterator,n=r&&t[r],f=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&f>=t.length&&(t=void 0),{value:t&&t[f++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function pt(t,r){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var f=n.call(t),c,u=[],v;try{for(;(r===void 0||r-- >0)&&!(c=f.next()).done;)u.push(c.value)}catch(_){v={error:_}}finally{try{c&&!c.done&&(n=f.return)&&n.call(f)}finally{if(v)throw v.error}}return u}function Ht(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(pt(arguments[r]));return t}function Jt(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;for(var f=Array(t),c=0,r=0;r<n;r++)for(var u=arguments[r],v=0,_=u.length;v<_;v++,c++)f[c]=u[v];return f}function P(t){return this instanceof P?(this.v=t,this):new P(t)}function zt(t,r,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var f=n.apply(t,r||[]),c,u=[];return c={},v("next"),v("throw"),v("return"),c[Symbol.asyncIterator]=function(){return this},c;function v(g){f[g]&&(c[g]=function(F){return new Promise(function(O,T){u.push([g,F,O,T])>1||_(g,F)})})}function _(g,F){try{R(f[g](F))}catch(O){S(u[0][3],O)}}function R(g){g.value instanceof P?Promise.resolve(g.value.v).then(h,E):S(u[0][2],g)}function h(g){_("next",g)}function E(g){_("throw",g)}function S(g,F){g(F),u.shift(),u.length&&_(u[0][0],u[0][1])}}function Vt(t){var r,n;return r={},f("next"),f("throw",function(c){throw c}),f("return"),r[Symbol.iterator]=function(){return this},r;function f(c,u){r[c]=t[c]?function(v){return(n=!n)?{value:P(t[c](v)),done:c==="return"}:u?u(v):v}:u}}function Kt(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t[Symbol.asyncIterator],n;return r?r.call(t):(t=typeof Ge=="function"?Ge(t):t[Symbol.iterator](),n={},f("next"),f("throw"),f("return"),n[Symbol.asyncIterator]=function(){return this},n);function f(u){n[u]=t[u]&&function(v){return new Promise(function(_,R){v=t[u](v),c(_,R,v.done,v.value)})}}function c(u,v,_,R){Promise.resolve(R).then(function(h){u({value:h,done:_})},v)}}function qt(t,r){return Object.defineProperty?Object.defineProperty(t,"raw",{value:r}):t.raw=r,t}function Gt(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r.default=t,r}function Lt(t){return t&&t.__esModule?t:{default:t}}function Wt(t,r){if(!r.has(t))throw new TypeError("attempted to get private field on non-instance");return r.get(t)}function $t(t,r,n){if(!r.has(t))throw new TypeError("attempted to set private field on non-instance");return r.set(t,n),n}const Yt=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return qe},__asyncDelegator:Vt,__asyncGenerator:zt,__asyncValues:Kt,__await:P,__awaiter:kt,__classPrivateFieldGet:Wt,__classPrivateFieldSet:$t,__createBinding:Tt,__decorate:Nt,__exportStar:Ut,__extends:It,__generator:Pt,__importDefault:Lt,__importStar:Gt,__makeTemplateObject:qt,__metadata:Mt,__param:Dt,__read:pt,__rest:jt,__spread:Ht,__spreadArrays:Jt,__values:Ge},Symbol.toStringTag,{value:"Module"})),Qt=wt(Yt);var A={},ut;function Xt(){if(ut)return A;ut=1,Object.defineProperty(A,"__esModule",{value:!0}),A.isBrowserCryptoAvailable=A.getSubtleCrypto=A.getBrowerCrypto=void 0;function t(){return(I===null||I===void 0?void 0:I.crypto)||(I===null||I===void 0?void 0:I.msCrypto)||{}}A.getBrowerCrypto=t;function r(){const f=t();return f.subtle||f.webkitSubtle}A.getSubtleCrypto=r;function n(){return!!t()&&!!r()}return A.isBrowserCryptoAvailable=n,A}var m={},ft;function Zt(){if(ft)return m;ft=1,Object.defineProperty(m,"__esModule",{value:!0}),m.isBrowser=m.isNode=m.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}m.isReactNative=t;function r(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}m.isNode=r;function n(){return!t()&&!r()}return m.isBrowser=n,m}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const r=Qt;r.__exportStar(Xt(),t),r.__exportStar(Zt(),t)})(Bt);function dt(t=3){const r=Date.now()*Math.pow(10,t),n=Math.floor(Math.random()*Math.pow(10,t));return r+n}function ur(t=6){return BigInt(dt(t))}function fr(t,r,n){return{id:n||dt(),jsonrpc:"2.0",method:t,params:r}}function cr(t,r){return{id:t,jsonrpc:"2.0",result:r}}function lr(t,r,n){return{id:t,jsonrpc:"2.0",error:er(r)}}function er(t,r){return typeof t>"u"?it(ht):(typeof t=="string"&&(t=Object.assign(Object.assign({},it(Le)),{message:t})),Ft(t.code)&&(t=Ct(t.code)),t)}export{or as a,rr as b,Bt as c,nr as d,ar as e,fr as f,ur as g,lr as h,ir as i,cr as j,dt as p,Rt as s};
