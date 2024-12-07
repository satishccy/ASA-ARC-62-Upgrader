import{r as $n,a as Xn,b as Yn,e as Kn}from"./qr-code-styling-D1vvocTS.js";import{b as Jn}from"./index-BQs4gFZ5.js";import"./format-BYIjei2q.js";function Qn(te,re){for(var qe=0;qe<re.length;qe++){const pe=re[qe];if(typeof pe!="string"&&!Array.isArray(pe)){for(const Fe in pe)if(Fe!=="default"&&!(Fe in te)){const Ke=Object.getOwnPropertyDescriptor(pe,Fe);Ke&&Object.defineProperty(te,Fe,Ke.get?Ke:{enumerable:!0,get:()=>pe[Fe]})}}}return Object.freeze(Object.defineProperty(te,Symbol.toStringTag,{value:"Module"}))}var qt={},Ie={},gn={},Qt={exports:{}},vn;function ei(){return vn||(vn=1,function(te){typeof navigator<"u"&&function(re,qe){te.exports?te.exports=qe(re):(re.lottie=qe(re),re.bodymovin=re.lottie)}(window||{},function(re){var qe="http://www.w3.org/2000/svg",pe="",Fe=-999999,Ke=!1,Me=!0,Se="",de,nt=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Oe=Math.pow,xt=Math.sqrt,Ge=Math.floor,Ft=Math.min,ot={};(function(){var e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],t,n=e.length;for(t=0;t<n;t+=1)ot[e[t]]=Math[e[t]]})();function Ze(){return{}}ot.random=Math.random,ot.abs=function(e){var t=typeof e;if(t==="object"&&e.length){var n=he(e.length),i,s=e.length;for(i=0;i<s;i+=1)n[i]=Math.abs(e[i]);return n}return Math.abs(e)};var Pe=150,oe=Math.PI/180,Ue=.5519;function lt(e,t,n,i){this.type=e,this.currentTime=t,this.totalTime=n,this.direction=i<0?-1:1}function gt(e,t){this.type=e,this.direction=t<0?-1:1}function Ct(e,t,n,i){this.type=e,this.currentLoop=n,this.totalLoops=t,this.direction=i<0?-1:1}function Ce(e,t,n){this.type=e,this.firstFrame=t,this.totalFrames=n}function $e(e,t){this.type=e,this.target=t}function Xe(e,t){this.type="renderFrameError",this.nativeError=e,this.currentTime=t}function Rt(e){this.type="configError",this.nativeError=e}var ge=function(){var e=0;return function(){return e+=1,Se+"__lottie_element_"+e}}();function Je(e,t,n){var i,s,a,m,x,v,L,k;switch(m=Math.floor(e*6),x=e*6-m,v=n*(1-t),L=n*(1-x*t),k=n*(1-(1-x)*t),m%6){case 0:i=n,s=k,a=v;break;case 1:i=L,s=n,a=v;break;case 2:i=v,s=n,a=k;break;case 3:i=v,s=L,a=n;break;case 4:i=k,s=v,a=n;break;case 5:i=n,s=v,a=L;break}return[i,s,a]}function it(e,t,n){var i=Math.max(e,t,n),s=Math.min(e,t,n),a=i-s,m,x=i===0?0:a/i,v=i/255;switch(i){case s:m=0;break;case e:m=t-n+a*(t<n?6:0),m/=6*a;break;case t:m=n-e+a*2,m/=6*a;break;case n:m=e-t+a*4,m/=6*a;break}return[m,x,v]}function zt(e,t){var n=it(e[0]*255,e[1]*255,e[2]*255);return n[1]+=t,n[1]>1?n[1]=1:n[1]<=0&&(n[1]=0),Je(n[0],n[1],n[2])}function kt(e,t){var n=it(e[0]*255,e[1]*255,e[2]*255);return n[2]+=t,n[2]>1?n[2]=1:n[2]<0&&(n[2]=0),Je(n[0],n[1],n[2])}function Ye(e,t){var n=it(e[0]*255,e[1]*255,e[2]*255);return n[0]+=t/360,n[0]>1?n[0]-=1:n[0]<0&&(n[0]+=1),Je(n[0],n[1],n[2])}(function(){var e=[],t,n;for(t=0;t<256;t+=1)n=t.toString(16),e[t]=n.length===1?"0"+n:n;return function(i,s,a){return i<0&&(i=0),s<0&&(s=0),a<0&&(a=0),"#"+e[i]+e[s]+e[a]}})();function ht(){}ht.prototype={triggerEvent:function(e,t){if(this._cbs[e])for(var n=this._cbs[e],i=0;i<n.length;i+=1)n[i](t)},addEventListener:function(e,t){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(t),(function(){this.removeEventListener(e,t)}).bind(this)},removeEventListener:function(e,t){if(!t)this._cbs[e]=null;else if(this._cbs[e]){for(var n=0,i=this._cbs[e].length;n<i;)this._cbs[e][n]===t&&(this._cbs[e].splice(n,1),n-=1,i-=1),n+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var me=function(){function e(n,i){var s=0,a=[],m;switch(n){case"int16":case"uint8c":m=1;break;default:m=1.1;break}for(s=0;s<i;s+=1)a.push(m);return a}function t(n,i){return n==="float32"?new Float32Array(i):n==="int16"?new Int16Array(i):n==="uint8c"?new Uint8ClampedArray(i):e(n,i)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?t:e}();function he(e){return Array.apply(null,{length:e})}function K(e){return document.createElementNS(qe,e)}function Ee(e){return document.createElement(e)}function we(){}we.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,t=this.dynamicProperties.length;for(e=0;e<t;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var at=function(){var e={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(t){return e[t]||""}}(),rt={1:"butt",2:"round",3:"square"},Vt={1:"miter",2:"round",3:"bevel"};/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */var ye=function(){var e=Math.cos,t=Math.sin,n=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(g,-S,0,0,S,g,0,0,0,0,1,0,0,0,0,1)}function m(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(1,0,0,0,0,g,-S,0,0,S,g,0,0,0,0,1)}function x(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(g,0,S,0,0,1,0,0,-S,0,g,0,0,0,0,1)}function v(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(g,-S,0,0,S,g,0,0,0,0,1,0,0,0,0,1)}function L(p,g){return this._t(1,g,p,1,0,0)}function k(p,g){return this.shear(n(p),n(g))}function _(p,g){var S=e(g),V=t(g);return this._t(S,V,0,0,-V,S,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(p),1,0,0,0,0,1,0,0,0,0,1)._t(S,-V,0,0,V,S,0,0,0,0,1,0,0,0,0,1)}function w(p,g,S){return!S&&S!==0&&(S=1),p===1&&g===1&&S===1?this:this._t(p,0,0,0,0,g,0,0,0,0,S,0,0,0,0,1)}function C(p,g,S,V,R,X,ae,ne,be,Le,ze,De,He,Te,xe,Ve){return this.props[0]=p,this.props[1]=g,this.props[2]=S,this.props[3]=V,this.props[4]=R,this.props[5]=X,this.props[6]=ae,this.props[7]=ne,this.props[8]=be,this.props[9]=Le,this.props[10]=ze,this.props[11]=De,this.props[12]=He,this.props[13]=Te,this.props[14]=xe,this.props[15]=Ve,this}function M(p,g,S){return S=S||0,p!==0||g!==0||S!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,p,g,S,1):this}function A(p,g,S,V,R,X,ae,ne,be,Le,ze,De,He,Te,xe,Ve){var G=this.props;if(p===1&&g===0&&S===0&&V===0&&R===0&&X===1&&ae===0&&ne===0&&be===0&&Le===0&&ze===1&&De===0)return G[12]=G[12]*p+G[15]*He,G[13]=G[13]*X+G[15]*Te,G[14]=G[14]*ze+G[15]*xe,G[15]*=Ve,this._identityCalculated=!1,this;var ue=G[0],ct=G[1],wt=G[2],ft=G[3],st=G[4],mt=G[5],ut=G[6],je=G[7],yt=G[8],_t=G[9],et=G[10],bt=G[11],tt=G[12],It=G[13],$t=G[14],Xt=G[15];return G[0]=ue*p+ct*R+wt*be+ft*He,G[1]=ue*g+ct*X+wt*Le+ft*Te,G[2]=ue*S+ct*ae+wt*ze+ft*xe,G[3]=ue*V+ct*ne+wt*De+ft*Ve,G[4]=st*p+mt*R+ut*be+je*He,G[5]=st*g+mt*X+ut*Le+je*Te,G[6]=st*S+mt*ae+ut*ze+je*xe,G[7]=st*V+mt*ne+ut*De+je*Ve,G[8]=yt*p+_t*R+et*be+bt*He,G[9]=yt*g+_t*X+et*Le+bt*Te,G[10]=yt*S+_t*ae+et*ze+bt*xe,G[11]=yt*V+_t*ne+et*De+bt*Ve,G[12]=tt*p+It*R+$t*be+Xt*He,G[13]=tt*g+It*X+$t*Le+Xt*Te,G[14]=tt*S+It*ae+$t*ze+Xt*xe,G[15]=tt*V+It*ne+$t*De+Xt*Ve,this._identityCalculated=!1,this}function b(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function d(p){for(var g=0;g<16;){if(p.props[g]!==this.props[g])return!1;g+=1}return!0}function l(p){var g;for(g=0;g<16;g+=1)p.props[g]=this.props[g];return p}function o(p){var g;for(g=0;g<16;g+=1)this.props[g]=p[g]}function r(p,g,S){return{x:p*this.props[0]+g*this.props[4]+S*this.props[8]+this.props[12],y:p*this.props[1]+g*this.props[5]+S*this.props[9]+this.props[13],z:p*this.props[2]+g*this.props[6]+S*this.props[10]+this.props[14]}}function h(p,g,S){return p*this.props[0]+g*this.props[4]+S*this.props[8]+this.props[12]}function f(p,g,S){return p*this.props[1]+g*this.props[5]+S*this.props[9]+this.props[13]}function c(p,g,S){return p*this.props[2]+g*this.props[6]+S*this.props[10]+this.props[14]}function y(){var p=this.props[0]*this.props[5]-this.props[1]*this.props[4],g=this.props[5]/p,S=-this.props[1]/p,V=-this.props[4]/p,R=this.props[0]/p,X=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/p,ae=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/p,ne=new ye;return ne.props[0]=g,ne.props[1]=S,ne.props[4]=V,ne.props[5]=R,ne.props[12]=X,ne.props[13]=ae,ne}function z(p){var g=this.getInverseMatrix();return g.applyToPointArray(p[0],p[1],p[2]||0)}function N(p){var g,S=p.length,V=[];for(g=0;g<S;g+=1)V[g]=z(p[g]);return V}function W(p,g,S){var V=me("float32",6);if(this.isIdentity())V[0]=p[0],V[1]=p[1],V[2]=g[0],V[3]=g[1],V[4]=S[0],V[5]=S[1];else{var R=this.props[0],X=this.props[1],ae=this.props[4],ne=this.props[5],be=this.props[12],Le=this.props[13];V[0]=p[0]*R+p[1]*ae+be,V[1]=p[0]*X+p[1]*ne+Le,V[2]=g[0]*R+g[1]*ae+be,V[3]=g[0]*X+g[1]*ne+Le,V[4]=S[0]*R+S[1]*ae+be,V[5]=S[0]*X+S[1]*ne+Le}return V}function B(p,g,S){var V;return this.isIdentity()?V=[p,g,S]:V=[p*this.props[0]+g*this.props[4]+S*this.props[8]+this.props[12],p*this.props[1]+g*this.props[5]+S*this.props[9]+this.props[13],p*this.props[2]+g*this.props[6]+S*this.props[10]+this.props[14]],V}function P(p,g){if(this.isIdentity())return p+","+g;var S=this.props;return Math.round((p*S[0]+g*S[4]+S[12])*100)/100+","+Math.round((p*S[1]+g*S[5]+S[13])*100)/100}function O(){for(var p=0,g=this.props,S="matrix3d(",V=1e4;p<16;)S+=i(g[p]*V)/V,S+=p===15?")":",",p+=1;return S}function F(p){var g=1e4;return p<1e-6&&p>0||p>-1e-6&&p<0?i(p*g)/g:p}function u(){var p=this.props,g=F(p[0]),S=F(p[1]),V=F(p[4]),R=F(p[5]),X=F(p[12]),ae=F(p[13]);return"matrix("+g+","+S+","+V+","+R+","+X+","+ae+")"}return function(){this.reset=s,this.rotate=a,this.rotateX=m,this.rotateY=x,this.rotateZ=v,this.skew=k,this.skewFromAxis=_,this.shear=L,this.scale=w,this.setTransform=C,this.translate=M,this.transform=A,this.applyToPoint=r,this.applyToX=h,this.applyToY=f,this.applyToZ=c,this.applyToPointArray=B,this.applyToTriplePoints=W,this.applyToPointStringified=P,this.toCSS=O,this.to2dCSS=u,this.clone=l,this.cloneFromProps=o,this.equals=d,this.inversePoints=N,this.inversePoint=z,this.getInverseMatrix=y,this._t=this.transform,this.isIdentity=b,this._identity=!0,this._identityCalculated=!1,this.props=me("float32",16),this.reset()}}();(function(e,t){var n=this,i=256,s=6,a=52,m="random",x=t.pow(i,s),v=t.pow(2,a),L=v*2,k=i-1,_;function w(o,r,h){var f=[];r=r===!0?{entropy:!0}:r||{};var c=b(A(r.entropy?[o,l(e)]:o===null?d():o,3),f),y=new C(f),z=function(){for(var N=y.g(s),W=x,B=0;N<v;)N=(N+B)*i,W*=i,B=y.g(1);for(;N>=L;)N/=2,W/=2,B>>>=1;return(N+B)/W};return z.int32=function(){return y.g(4)|0},z.quick=function(){return y.g(4)/4294967296},z.double=z,b(l(y.S),e),(r.pass||h||function(N,W,B,P){return P&&(P.S&&M(P,y),N.state=function(){return M(y,{})}),B?(t[m]=N,W):N})(z,c,"global"in r?r.global:this==t,r.state)}t["seed"+m]=w;function C(o){var r,h=o.length,f=this,c=0,y=f.i=f.j=0,z=f.S=[];for(h||(o=[h++]);c<i;)z[c]=c++;for(c=0;c<i;c++)z[c]=z[y=k&y+o[c%h]+(r=z[c])],z[y]=r;f.g=function(N){for(var W,B=0,P=f.i,O=f.j,F=f.S;N--;)W=F[P=k&P+1],B=B*i+F[k&(F[P]=F[O=k&O+W])+(F[O]=W)];return f.i=P,f.j=O,B}}function M(o,r){return r.i=o.i,r.j=o.j,r.S=o.S.slice(),r}function A(o,r){var h=[],f=typeof o,c;if(r&&f=="object")for(c in o)try{h.push(A(o[c],r-1))}catch{}return h.length?h:f=="string"?o:o+"\0"}function b(o,r){for(var h=o+"",f,c=0;c<h.length;)r[k&c]=k&(f^=r[k&c]*19)+h.charCodeAt(c++);return l(r)}function d(){try{var o=new Uint8Array(i);return(n.crypto||n.msCrypto).getRandomValues(o),l(o)}catch{var r=n.navigator,h=r&&r.plugins;return[+new Date,n,h,n.screen,l(e)]}}function l(o){return String.fromCharCode.apply(0,o)}b(t.random(),e)})([],ot);var I=function(){var e={};e.getBezierEasing=n;var t={};function n(l,o,r,h,f){var c=f||("bez_"+l+"_"+o+"_"+r+"_"+h).replace(/\./g,"p");if(t[c])return t[c];var y=new d([l,o,r,h]);return t[c]=y,y}var i=4,s=.001,a=1e-7,m=10,x=11,v=1/(x-1),L=typeof Float32Array=="function";function k(l,o){return 1-3*o+3*l}function _(l,o){return 3*o-6*l}function w(l){return 3*l}function C(l,o,r){return((k(o,r)*l+_(o,r))*l+w(o))*l}function M(l,o,r){return 3*k(o,r)*l*l+2*_(o,r)*l+w(o)}function A(l,o,r,h,f){var c,y,z=0;do y=o+(r-o)/2,c=C(y,h,f)-l,c>0?r=y:o=y;while(Math.abs(c)>a&&++z<m);return y}function b(l,o,r,h){for(var f=0;f<i;++f){var c=M(o,r,h);if(c===0)return o;var y=C(o,r,h)-l;o-=y/c}return o}function d(l){this._p=l,this._mSampleValues=L?new Float32Array(x):new Array(x),this._precomputed=!1,this.get=this.get.bind(this)}return d.prototype={get:function(l){var o=this._p[0],r=this._p[1],h=this._p[2],f=this._p[3];return this._precomputed||this._precompute(),o===r&&h===f?l:l===0?0:l===1?1:C(this._getTForX(l),r,f)},_precompute:function(){var l=this._p[0],o=this._p[1],r=this._p[2],h=this._p[3];this._precomputed=!0,(l!==o||r!==h)&&this._calcSampleValues()},_calcSampleValues:function(){for(var l=this._p[0],o=this._p[2],r=0;r<x;++r)this._mSampleValues[r]=C(r*v,l,o)},_getTForX:function(l){for(var o=this._p[0],r=this._p[2],h=this._mSampleValues,f=0,c=1,y=x-1;c!==y&&h[c]<=l;++c)f+=v;--c;var z=(l-h[c])/(h[c+1]-h[c]),N=f+z*v,W=M(N,o,r);return W>=s?b(l,N,o,r):W===0?N:A(l,f,f+v,o,r)}},e}();(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!re.requestAnimationFrame;++n)re.requestAnimationFrame=re[t[n]+"RequestAnimationFrame"],re.cancelAnimationFrame=re[t[n]+"CancelAnimationFrame"]||re[t[n]+"CancelRequestAnimationFrame"];re.requestAnimationFrame||(re.requestAnimationFrame=function(i){var s=new Date().getTime(),a=Math.max(0,16-(s-e)),m=setTimeout(function(){i(s+a)},a);return e=s+a,m}),re.cancelAnimationFrame||(re.cancelAnimationFrame=function(i){clearTimeout(i)})})();function T(e,t){var n,i=e.length,s;for(n=0;n<i;n+=1){s=e[n].prototype;for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t.prototype[a]=s[a])}}function j(e){function t(){}return t.prototype=e,t}function Z(){var e=Math;function t(w,C,M,A,b,d){var l=w*A+C*b+M*d-b*A-d*w-M*C;return l>-.001&&l<.001}function n(w,C,M,A,b,d,l,o,r){if(M===0&&d===0&&r===0)return t(w,C,A,b,l,o);var h=e.sqrt(e.pow(A-w,2)+e.pow(b-C,2)+e.pow(d-M,2)),f=e.sqrt(e.pow(l-w,2)+e.pow(o-C,2)+e.pow(r-M,2)),c=e.sqrt(e.pow(l-A,2)+e.pow(o-b,2)+e.pow(r-d,2)),y;return h>f?h>c?y=h-f-c:y=c-f-h:c>f?y=c-f-h:y=f-h-c,y>-1e-4&&y<1e-4}var i=function(){return function(w,C,M,A){var b=Pe,d,l,o,r,h,f=0,c,y=[],z=[],N=rn.newElement();for(o=M.length,d=0;d<b;d+=1){for(h=d/(b-1),c=0,l=0;l<o;l+=1)r=Oe(1-h,3)*w[l]+3*Oe(1-h,2)*h*M[l]+3*(1-h)*Oe(h,2)*A[l]+Oe(h,3)*C[l],y[l]=r,z[l]!==null&&(c+=Oe(y[l]-z[l],2)),z[l]=y[l];c&&(c=xt(c),f+=c),N.percents[d]=h,N.lengths[d]=f}return N.addedLength=f,N}}();function s(w){var C=an.newElement(),M=w.c,A=w.v,b=w.o,d=w.i,l,o=w._length,r=C.lengths,h=0;for(l=0;l<o-1;l+=1)r[l]=i(A[l],A[l+1],b[l],d[l+1]),h+=r[l].addedLength;return M&&o&&(r[l]=i(A[l],A[0],b[l],d[0]),h+=r[l].addedLength),C.totalLength=h,C}function a(w){this.segmentLength=0,this.points=new Array(w)}function m(w,C){this.partialLength=w,this.point=C}var x=function(){var w={};return function(C,M,A,b){var d=(C[0]+"_"+C[1]+"_"+M[0]+"_"+M[1]+"_"+A[0]+"_"+A[1]+"_"+b[0]+"_"+b[1]).replace(/\./g,"p");if(!w[d]){var l=Pe,o,r,h,f,c,y=0,z,N,W=null;C.length===2&&(C[0]!==M[0]||C[1]!==M[1])&&t(C[0],C[1],M[0],M[1],C[0]+A[0],C[1]+A[1])&&t(C[0],C[1],M[0],M[1],M[0]+b[0],M[1]+b[1])&&(l=2);var B=new a(l);for(h=A.length,o=0;o<l;o+=1){for(N=he(h),c=o/(l-1),z=0,r=0;r<h;r+=1)f=Oe(1-c,3)*C[r]+3*Oe(1-c,2)*c*(C[r]+A[r])+3*(1-c)*Oe(c,2)*(M[r]+b[r])+Oe(c,3)*M[r],N[r]=f,W!==null&&(z+=Oe(N[r]-W[r],2));z=xt(z),y+=z,B.points[o]=new m(z,N),W=N}B.segmentLength=y,w[d]=B}return w[d]}}();function v(w,C){var M=C.percents,A=C.lengths,b=M.length,d=Ge((b-1)*w),l=w*C.addedLength,o=0;if(d===b-1||d===0||l===A[d])return M[d];for(var r=A[d]>l?-1:1,h=!0;h;)if(A[d]<=l&&A[d+1]>l?(o=(l-A[d])/(A[d+1]-A[d]),h=!1):d+=r,d<0||d>=b-1){if(d===b-1)return M[d];h=!1}return M[d]+(M[d+1]-M[d])*o}function L(w,C,M,A,b,d){var l=v(b,d),o=1-l,r=e.round((o*o*o*w[0]+(l*o*o+o*l*o+o*o*l)*M[0]+(l*l*o+o*l*l+l*o*l)*A[0]+l*l*l*C[0])*1e3)/1e3,h=e.round((o*o*o*w[1]+(l*o*o+o*l*o+o*o*l)*M[1]+(l*l*o+o*l*l+l*o*l)*A[1]+l*l*l*C[1])*1e3)/1e3;return[r,h]}var k=me("float32",8);function _(w,C,M,A,b,d,l){b<0?b=0:b>1&&(b=1);var o=v(b,l);d=d>1?1:d;var r=v(d,l),h,f=w.length,c=1-o,y=1-r,z=c*c*c,N=o*c*c*3,W=o*o*c*3,B=o*o*o,P=c*c*y,O=o*c*y+c*o*y+c*c*r,F=o*o*y+c*o*r+o*c*r,u=o*o*r,p=c*y*y,g=o*y*y+c*r*y+c*y*r,S=o*r*y+c*r*r+o*y*r,V=o*r*r,R=y*y*y,X=r*y*y+y*r*y+y*y*r,ae=r*r*y+y*r*r+r*y*r,ne=r*r*r;for(h=0;h<f;h+=1)k[h*4]=e.round((z*w[h]+N*M[h]+W*A[h]+B*C[h])*1e3)/1e3,k[h*4+1]=e.round((P*w[h]+O*M[h]+F*A[h]+u*C[h])*1e3)/1e3,k[h*4+2]=e.round((p*w[h]+g*M[h]+S*A[h]+V*C[h])*1e3)/1e3,k[h*4+3]=e.round((R*w[h]+X*M[h]+ae*A[h]+ne*C[h])*1e3)/1e3;return k}return{getSegmentsLength:s,getNewSegment:_,getPointInSegment:L,buildBezierData:x,pointOnLine2D:t,pointOnLine3D:n}}var q=Z(),$=function(){var e=1,t=[],n,i,s={onmessage:function(){},postMessage:function(w){n({data:w})}},a={postMessage:function(w){s.onmessage({data:w})}};function m(w){if(re.Worker&&re.Blob&&Ke){var C=new Blob(["var _workerSelf = self; self.onmessage = ",w.toString()],{type:"text/javascript"}),M=URL.createObjectURL(C);return new Worker(M)}return n=w,s}function x(){i||(i=m(function(C){function M(){function b(P,O){var F,u,p=P.length,g,S,V,R;for(u=0;u<p;u+=1)if(F=P[u],"ks"in F&&!F.completed){if(F.completed=!0,F.tt&&(P[u-1].td=F.tt),F.hasMask){var X=F.masksProperties;for(S=X.length,g=0;g<S;g+=1)if(X[g].pt.k.i)o(X[g].pt.k);else for(R=X[g].pt.k.length,V=0;V<R;V+=1)X[g].pt.k[V].s&&o(X[g].pt.k[V].s[0]),X[g].pt.k[V].e&&o(X[g].pt.k[V].e[0])}F.ty===0?(F.layers=d(F.refId,O),b(F.layers,O)):F.ty===4?l(F.shapes):F.ty===5&&W(F)}}function d(P,O){for(var F=0,u=O.length;F<u;){if(O[F].id===P)return O[F].layers.__used?JSON.parse(JSON.stringify(O[F].layers)):(O[F].layers.__used=!0,O[F].layers);F+=1}return null}function l(P){var O,F=P.length,u,p;for(O=F-1;O>=0;O-=1)if(P[O].ty==="sh")if(P[O].ks.k.i)o(P[O].ks.k);else for(p=P[O].ks.k.length,u=0;u<p;u+=1)P[O].ks.k[u].s&&o(P[O].ks.k[u].s[0]),P[O].ks.k[u].e&&o(P[O].ks.k[u].e[0]);else P[O].ty==="gr"&&l(P[O].it)}function o(P){var O,F=P.i.length;for(O=0;O<F;O+=1)P.i[O][0]+=P.v[O][0],P.i[O][1]+=P.v[O][1],P.o[O][0]+=P.v[O][0],P.o[O][1]+=P.v[O][1]}function r(P,O){var F=O?O.split("."):[100,100,100];return P[0]>F[0]?!0:F[0]>P[0]?!1:P[1]>F[1]?!0:F[1]>P[1]?!1:P[2]>F[2]?!0:F[2]>P[2]?!1:null}var h=function(){var P=[4,4,14];function O(u){var p=u.t.d;u.t.d={k:[{s:p,t:0}]}}function F(u){var p,g=u.length;for(p=0;p<g;p+=1)u[p].ty===5&&O(u[p])}return function(u){if(r(P,u.v)&&(F(u.layers),u.assets)){var p,g=u.assets.length;for(p=0;p<g;p+=1)u.assets[p].layers&&F(u.assets[p].layers)}}}(),f=function(){var P=[4,7,99];return function(O){if(O.chars&&!r(P,O.v)){var F,u=O.chars.length,p,g,S,V;for(F=0;F<u;F+=1)if(O.chars[F].data&&O.chars[F].data.shapes)for(V=O.chars[F].data.shapes[0].it,g=V.length,p=0;p<g;p+=1)S=V[p].ks.k,S.__converted||(o(V[p].ks.k),S.__converted=!0)}}}(),c=function(){var P=[5,7,15];function O(u){var p=u.t.p;typeof p.a=="number"&&(p.a={a:0,k:p.a}),typeof p.p=="number"&&(p.p={a:0,k:p.p}),typeof p.r=="number"&&(p.r={a:0,k:p.r})}function F(u){var p,g=u.length;for(p=0;p<g;p+=1)u[p].ty===5&&O(u[p])}return function(u){if(r(P,u.v)&&(F(u.layers),u.assets)){var p,g=u.assets.length;for(p=0;p<g;p+=1)u.assets[p].layers&&F(u.assets[p].layers)}}}(),y=function(){var P=[4,1,9];function O(u){var p,g=u.length,S,V;for(p=0;p<g;p+=1)if(u[p].ty==="gr")O(u[p].it);else if(u[p].ty==="fl"||u[p].ty==="st")if(u[p].c.k&&u[p].c.k[0].i)for(V=u[p].c.k.length,S=0;S<V;S+=1)u[p].c.k[S].s&&(u[p].c.k[S].s[0]/=255,u[p].c.k[S].s[1]/=255,u[p].c.k[S].s[2]/=255,u[p].c.k[S].s[3]/=255),u[p].c.k[S].e&&(u[p].c.k[S].e[0]/=255,u[p].c.k[S].e[1]/=255,u[p].c.k[S].e[2]/=255,u[p].c.k[S].e[3]/=255);else u[p].c.k[0]/=255,u[p].c.k[1]/=255,u[p].c.k[2]/=255,u[p].c.k[3]/=255}function F(u){var p,g=u.length;for(p=0;p<g;p+=1)u[p].ty===4&&O(u[p].shapes)}return function(u){if(r(P,u.v)&&(F(u.layers),u.assets)){var p,g=u.assets.length;for(p=0;p<g;p+=1)u.assets[p].layers&&F(u.assets[p].layers)}}}(),z=function(){var P=[4,4,18];function O(u){var p,g=u.length,S,V;for(p=g-1;p>=0;p-=1)if(u[p].ty==="sh")if(u[p].ks.k.i)u[p].ks.k.c=u[p].closed;else for(V=u[p].ks.k.length,S=0;S<V;S+=1)u[p].ks.k[S].s&&(u[p].ks.k[S].s[0].c=u[p].closed),u[p].ks.k[S].e&&(u[p].ks.k[S].e[0].c=u[p].closed);else u[p].ty==="gr"&&O(u[p].it)}function F(u){var p,g,S=u.length,V,R,X,ae;for(g=0;g<S;g+=1){if(p=u[g],p.hasMask){var ne=p.masksProperties;for(R=ne.length,V=0;V<R;V+=1)if(ne[V].pt.k.i)ne[V].pt.k.c=ne[V].cl;else for(ae=ne[V].pt.k.length,X=0;X<ae;X+=1)ne[V].pt.k[X].s&&(ne[V].pt.k[X].s[0].c=ne[V].cl),ne[V].pt.k[X].e&&(ne[V].pt.k[X].e[0].c=ne[V].cl)}p.ty===4&&O(p.shapes)}}return function(u){if(r(P,u.v)&&(F(u.layers),u.assets)){var p,g=u.assets.length;for(p=0;p<g;p+=1)u.assets[p].layers&&F(u.assets[p].layers)}}}();function N(P){P.__complete||(y(P),h(P),f(P),c(P),z(P),b(P.layers,P.assets),P.__complete=!0)}function W(P){P.t.a.length===0&&!("m"in P.t.p)&&(P.singleShape=!0)}var B={};return B.completeData=N,B.checkColors=y,B.checkChars=f,B.checkPathProperties=c,B.checkShapes=z,B.completeLayers=b,B}if(a.dataManager||(a.dataManager=M()),a.assetLoader||(a.assetLoader=function(){function b(l){var o=l.getResponseHeader("content-type");return o&&l.responseType==="json"&&o.indexOf("json")!==-1||l.response&&typeof l.response=="object"?l.response:l.response&&typeof l.response=="string"?JSON.parse(l.response):l.responseText?JSON.parse(l.responseText):null}function d(l,o,r,h){var f,c=new XMLHttpRequest;try{c.responseType="json"}catch{}c.onreadystatechange=function(){if(c.readyState===4)if(c.status===200)f=b(c),r(f);else try{f=b(c),r(f)}catch(y){h&&h(y)}};try{c.open("GET",l,!0)}catch{c.open("GET",o+"/"+l,!0)}c.send()}return{load:d}}()),C.data.type==="loadAnimation")a.assetLoader.load(C.data.path,C.data.fullPath,function(b){a.dataManager.completeData(b),a.postMessage({id:C.data.id,payload:b,status:"success"})},function(){a.postMessage({id:C.data.id,status:"error"})});else if(C.data.type==="complete"){var A=C.data.animation;a.dataManager.completeData(A),a.postMessage({id:C.data.id,payload:A,status:"success"})}else C.data.type==="loadData"&&a.assetLoader.load(C.data.path,C.data.fullPath,function(b){a.postMessage({id:C.data.id,payload:b,status:"success"})},function(){a.postMessage({id:C.data.id,status:"error"})})}),i.onmessage=function(w){var C=w.data,M=C.id,A=t[M];t[M]=null,C.status==="success"?A.onComplete(C.payload):A.onError&&A.onError()})}function v(w,C){e+=1;var M="processId_"+e;return t[M]={onComplete:w,onError:C},M}function L(w,C,M){x();var A=v(C,M);i.postMessage({type:"loadAnimation",path:w,fullPath:re.location.origin+re.location.pathname,id:A})}function k(w,C,M){x();var A=v(C,M);i.postMessage({type:"loadData",path:w,fullPath:re.location.origin+re.location.pathname,id:A})}function _(w,C,M){x();var A=v(C,M);i.postMessage({type:"complete",animation:w,id:A})}return{loadAnimation:L,loadData:k,completeAnimation:_}}();function ie(e){for(var t=e.fStyle?e.fStyle.split(" "):[],n="normal",i="normal",s=t.length,a,m=0;m<s;m+=1)switch(a=t[m].toLowerCase(),a){case"italic":i="italic";break;case"bold":n="700";break;case"black":n="900";break;case"medium":n="500";break;case"regular":case"normal":n="400";break;case"light":case"thin":n="200";break}return{style:i,weight:e.fWeight||n}}var Q=function(){var e=5e3,t={w:0,size:0,shapes:[]},n=[];n=n.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var i=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],s=[65039,8205];function a(r){var h=r.split(","),f,c=h.length,y=[];for(f=0;f<c;f+=1)h[f]!=="sans-serif"&&h[f]!=="monospace"&&y.push(h[f]);return y.join(",")}function m(r,h){var f=Ee("span");f.setAttribute("aria-hidden",!0),f.style.fontFamily=h;var c=Ee("span");c.innerText="giItT1WQy@!-/#",f.style.position="absolute",f.style.left="-10000px",f.style.top="-10000px",f.style.fontSize="300px",f.style.fontVariant="normal",f.style.fontStyle="normal",f.style.fontWeight="normal",f.style.letterSpacing="0",f.appendChild(c),document.body.appendChild(f);var y=c.offsetWidth;return c.style.fontFamily=a(r)+", "+h,{node:c,w:y,parent:f}}function x(){var r,h=this.fonts.length,f,c,y=h;for(r=0;r<h;r+=1)this.fonts[r].loaded?y-=1:this.fonts[r].fOrigin==="n"||this.fonts[r].origin===0?this.fonts[r].loaded=!0:(f=this.fonts[r].monoCase.node,c=this.fonts[r].monoCase.w,f.offsetWidth!==c?(y-=1,this.fonts[r].loaded=!0):(f=this.fonts[r].sansCase.node,c=this.fonts[r].sansCase.w,f.offsetWidth!==c&&(y-=1,this.fonts[r].loaded=!0)),this.fonts[r].loaded&&(this.fonts[r].sansCase.parent.parentNode.removeChild(this.fonts[r].sansCase.parent),this.fonts[r].monoCase.parent.parentNode.removeChild(this.fonts[r].monoCase.parent)));y!==0&&Date.now()-this.initTime<e?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function v(r,h){var f=K("text");f.style.fontSize="100px";var c=ie(h);f.setAttribute("font-family",h.fFamily),f.setAttribute("font-style",c.style),f.setAttribute("font-weight",c.weight),f.textContent="1",h.fClass?(f.style.fontFamily="inherit",f.setAttribute("class",h.fClass)):f.style.fontFamily=h.fFamily,r.appendChild(f);var y=Ee("canvas").getContext("2d");return y.font=h.fWeight+" "+h.fStyle+" 100px "+h.fFamily,f}function L(r,h){if(!r){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=r.list;return}var f=r.list,c,y=f.length,z=y;for(c=0;c<y;c+=1){var N=!0,W,B;if(f[c].loaded=!1,f[c].monoCase=m(f[c].fFamily,"monospace"),f[c].sansCase=m(f[c].fFamily,"sans-serif"),!f[c].fPath)f[c].loaded=!0,z-=1;else if(f[c].fOrigin==="p"||f[c].origin===3){if(W=document.querySelectorAll('style[f-forigin="p"][f-family="'+f[c].fFamily+'"], style[f-origin="3"][f-family="'+f[c].fFamily+'"]'),W.length>0&&(N=!1),N){var P=Ee("style");P.setAttribute("f-forigin",f[c].fOrigin),P.setAttribute("f-origin",f[c].origin),P.setAttribute("f-family",f[c].fFamily),P.type="text/css",P.innerText="@font-face {font-family: "+f[c].fFamily+"; font-style: normal; src: url('"+f[c].fPath+"');}",h.appendChild(P)}}else if(f[c].fOrigin==="g"||f[c].origin===1){for(W=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),B=0;B<W.length;B+=1)W[B].href.indexOf(f[c].fPath)!==-1&&(N=!1);if(N){var O=Ee("link");O.setAttribute("f-forigin",f[c].fOrigin),O.setAttribute("f-origin",f[c].origin),O.type="text/css",O.rel="stylesheet",O.href=f[c].fPath,document.body.appendChild(O)}}else if(f[c].fOrigin==="t"||f[c].origin===2){for(W=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),B=0;B<W.length;B+=1)f[c].fPath===W[B].src&&(N=!1);if(N){var F=Ee("link");F.setAttribute("f-forigin",f[c].fOrigin),F.setAttribute("f-origin",f[c].origin),F.setAttribute("rel","stylesheet"),F.setAttribute("href",f[c].fPath),h.appendChild(F)}}f[c].helper=v(h,f[c]),f[c].cache={},this.fonts.push(f[c])}z===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function k(r){if(r){this.chars||(this.chars=[]);var h,f=r.length,c,y=this.chars.length,z;for(h=0;h<f;h+=1){for(c=0,z=!1;c<y;)this.chars[c].style===r[h].style&&this.chars[c].fFamily===r[h].fFamily&&this.chars[c].ch===r[h].ch&&(z=!0),c+=1;z||(this.chars.push(r[h]),y+=1)}}}function _(r,h,f){for(var c=0,y=this.chars.length;c<y;){if(this.chars[c].ch===r&&this.chars[c].style===h&&this.chars[c].fFamily===f)return this.chars[c];c+=1}return(typeof r=="string"&&r.charCodeAt(0)!==13||!r)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",r,h,f)),t}function w(r,h,f){var c=this.getFontByName(h),y=r.charCodeAt(0);if(!c.cache[y+1]){var z=c.helper;if(r===" "){z.textContent="|"+r+"|";var N=z.getComputedTextLength();z.textContent="||";var W=z.getComputedTextLength();c.cache[y+1]=(N-W)/100}else z.textContent=r,c.cache[y+1]=z.getComputedTextLength()/100}return c.cache[y+1]*f}function C(r){for(var h=0,f=this.fonts.length;h<f;){if(this.fonts[h].fName===r)return this.fonts[h];h+=1}return this.fonts[0]}function M(r,h){var f=r.toString(16)+h.toString(16);return i.indexOf(f)!==-1}function A(r,h){return h?r===s[0]&&h===s[1]:r===s[1]}function b(r){return n.indexOf(r)!==-1}function d(){this.isLoaded=!0}var l=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};l.isModifier=M,l.isZeroWidthJoiner=A,l.isCombinedCharacter=b;var o={addChars:k,addFonts:L,getCharData:_,getFontByName:C,measureText:w,checkLoadedFonts:x,setIsLoaded:d};return l.prototype=o,l}(),E=function(){var e=Fe,t=Math.abs;function n(b,d){var l=this.offsetTime,o;this.propType==="multidimensional"&&(o=me("float32",this.pv.length));for(var r=d.lastIndex,h=r,f=this.keyframes.length-1,c=!0,y,z,N;c;){if(y=this.keyframes[h],z=this.keyframes[h+1],h===f-1&&b>=z.t-l){y.h&&(y=z),r=0;break}if(z.t-l>b){r=h;break}h<f-1?h+=1:(r=0,c=!1)}N=this.keyframesMetadata[h]||{};var W,B,P,O,F,u,p=z.t-l,g=y.t-l,S;if(y.to){N.bezierData||(N.bezierData=q.buildBezierData(y.s,z.s||y.e,y.to,y.ti));var V=N.bezierData;if(b>=p||b<g){var R=b>=p?V.points.length-1:0;for(B=V.points[R].point.length,W=0;W<B;W+=1)o[W]=V.points[R].point[W]}else{N.__fnct?u=N.__fnct:(u=I.getBezierEasing(y.o.x,y.o.y,y.i.x,y.i.y,y.n).get,N.__fnct=u),P=u((b-g)/(p-g));var X=V.segmentLength*P,ae,ne=d.lastFrame<b&&d._lastKeyframeIndex===h?d._lastAddedLength:0;for(F=d.lastFrame<b&&d._lastKeyframeIndex===h?d._lastPoint:0,c=!0,O=V.points.length;c;){if(ne+=V.points[F].partialLength,X===0||P===0||F===V.points.length-1){for(B=V.points[F].point.length,W=0;W<B;W+=1)o[W]=V.points[F].point[W];break}else if(X>=ne&&X<ne+V.points[F+1].partialLength){for(ae=(X-ne)/V.points[F+1].partialLength,B=V.points[F].point.length,W=0;W<B;W+=1)o[W]=V.points[F].point[W]+(V.points[F+1].point[W]-V.points[F].point[W])*ae;break}F<O-1?F+=1:c=!1}d._lastPoint=F,d._lastAddedLength=ne-V.points[F].partialLength,d._lastKeyframeIndex=h}}else{var be,Le,ze,De,He;if(f=y.s.length,S=z.s||y.e,this.sh&&y.h!==1)if(b>=p)o[0]=S[0],o[1]=S[1],o[2]=S[2];else if(b<=g)o[0]=y.s[0],o[1]=y.s[1],o[2]=y.s[2];else{var Te=a(y.s),xe=a(S),Ve=(b-g)/(p-g);s(o,i(Te,xe,Ve))}else for(h=0;h<f;h+=1)y.h!==1&&(b>=p?P=1:b<g?P=0:(y.o.x.constructor===Array?(N.__fnct||(N.__fnct=[]),N.__fnct[h]?u=N.__fnct[h]:(be=y.o.x[h]===void 0?y.o.x[0]:y.o.x[h],Le=y.o.y[h]===void 0?y.o.y[0]:y.o.y[h],ze=y.i.x[h]===void 0?y.i.x[0]:y.i.x[h],De=y.i.y[h]===void 0?y.i.y[0]:y.i.y[h],u=I.getBezierEasing(be,Le,ze,De).get,N.__fnct[h]=u)):N.__fnct?u=N.__fnct:(be=y.o.x,Le=y.o.y,ze=y.i.x,De=y.i.y,u=I.getBezierEasing(be,Le,ze,De).get,y.keyframeMetadata=u),P=u((b-g)/(p-g)))),S=z.s||y.e,He=y.h===1?y.s[h]:y.s[h]+(S[h]-y.s[h])*P,this.propType==="multidimensional"?o[h]=He:o=He}return d.lastIndex=r,o}function i(b,d,l){var o=[],r=b[0],h=b[1],f=b[2],c=b[3],y=d[0],z=d[1],N=d[2],W=d[3],B,P,O,F,u;return P=r*y+h*z+f*N+c*W,P<0&&(P=-P,y=-y,z=-z,N=-N,W=-W),1-P>1e-6?(B=Math.acos(P),O=Math.sin(B),F=Math.sin((1-l)*B)/O,u=Math.sin(l*B)/O):(F=1-l,u=l),o[0]=F*r+u*y,o[1]=F*h+u*z,o[2]=F*f+u*N,o[3]=F*c+u*W,o}function s(b,d){var l=d[0],o=d[1],r=d[2],h=d[3],f=Math.atan2(2*o*h-2*l*r,1-2*o*o-2*r*r),c=Math.asin(2*l*o+2*r*h),y=Math.atan2(2*l*h-2*o*r,1-2*l*l-2*r*r);b[0]=f/oe,b[1]=c/oe,b[2]=y/oe}function a(b){var d=b[0]*oe,l=b[1]*oe,o=b[2]*oe,r=Math.cos(d/2),h=Math.cos(l/2),f=Math.cos(o/2),c=Math.sin(d/2),y=Math.sin(l/2),z=Math.sin(o/2),N=r*h*f-c*y*z,W=c*y*f+r*h*z,B=c*h*f+r*y*z,P=r*y*f-c*h*z;return[W,B,P,N]}function m(){var b=this.comp.renderedFrame-this.offsetTime,d=this.keyframes[0].t-this.offsetTime,l=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(b===this._caching.lastFrame||this._caching.lastFrame!==e&&(this._caching.lastFrame>=l&&b>=l||this._caching.lastFrame<d&&b<d))){this._caching.lastFrame>=b&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var o=this.interpolateValue(b,this._caching);this.pv=o}return this._caching.lastFrame=b,this.pv}function x(b){var d;if(this.propType==="unidimensional")d=b*this.mult,t(this.v-d)>1e-5&&(this.v=d,this._mdf=!0);else for(var l=0,o=this.v.length;l<o;)d=b[l]*this.mult,t(this.v[l]-d)>1e-5&&(this.v[l]=d,this._mdf=!0),l+=1}function v(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var b,d=this.effectsSequence.length,l=this.kf?this.pv:this.data.k;for(b=0;b<d;b+=1)l=this.effectsSequence[b](l);this.setVValue(l),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function L(b){this.effectsSequence.push(b),this.container.addDynamicProperty(this)}function k(b,d,l,o){this.propType="unidimensional",this.mult=l||1,this.data=d,this.v=l?d.k*l:d.k,this.pv=d.k,this._mdf=!1,this.elem=b,this.container=o,this.comp=b.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=v,this.setVValue=x,this.addEffect=L}function _(b,d,l,o){this.propType="multidimensional",this.mult=l||1,this.data=d,this._mdf=!1,this.elem=b,this.container=o,this.comp=b.comp,this.k=!1,this.kf=!1,this.frameId=-1;var r,h=d.k.length;for(this.v=me("float32",h),this.pv=me("float32",h),this.vel=me("float32",h),r=0;r<h;r+=1)this.v[r]=d.k[r]*this.mult,this.pv[r]=d.k[r];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=v,this.setVValue=x,this.addEffect=L}function w(b,d,l,o){this.propType="unidimensional",this.keyframes=d.k,this.keyframesMetadata=[],this.offsetTime=b.data.st,this.frameId=-1,this._caching={lastFrame:e,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=d,this.mult=l||1,this.elem=b,this.container=o,this.comp=b.comp,this.v=e,this.pv=e,this._isFirstFrame=!0,this.getValue=v,this.setVValue=x,this.interpolateValue=n,this.effectsSequence=[m.bind(this)],this.addEffect=L}function C(b,d,l,o){this.propType="multidimensional";var r,h=d.k.length,f,c,y,z;for(r=0;r<h-1;r+=1)d.k[r].to&&d.k[r].s&&d.k[r+1]&&d.k[r+1].s&&(f=d.k[r].s,c=d.k[r+1].s,y=d.k[r].to,z=d.k[r].ti,(f.length===2&&!(f[0]===c[0]&&f[1]===c[1])&&q.pointOnLine2D(f[0],f[1],c[0],c[1],f[0]+y[0],f[1]+y[1])&&q.pointOnLine2D(f[0],f[1],c[0],c[1],c[0]+z[0],c[1]+z[1])||f.length===3&&!(f[0]===c[0]&&f[1]===c[1]&&f[2]===c[2])&&q.pointOnLine3D(f[0],f[1],f[2],c[0],c[1],c[2],f[0]+y[0],f[1]+y[1],f[2]+y[2])&&q.pointOnLine3D(f[0],f[1],f[2],c[0],c[1],c[2],c[0]+z[0],c[1]+z[1],c[2]+z[2]))&&(d.k[r].to=null,d.k[r].ti=null),f[0]===c[0]&&f[1]===c[1]&&y[0]===0&&y[1]===0&&z[0]===0&&z[1]===0&&(f.length===2||f[2]===c[2]&&y[2]===0&&z[2]===0)&&(d.k[r].to=null,d.k[r].ti=null));this.effectsSequence=[m.bind(this)],this.data=d,this.keyframes=d.k,this.keyframesMetadata=[],this.offsetTime=b.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=l||1,this.elem=b,this.container=o,this.comp=b.comp,this.getValue=v,this.setVValue=x,this.interpolateValue=n,this.frameId=-1;var N=d.k[0].s.length;for(this.v=me("float32",N),this.pv=me("float32",N),r=0;r<N;r+=1)this.v[r]=e,this.pv[r]=e;this._caching={lastFrame:e,lastIndex:0,value:me("float32",N)},this.addEffect=L}function M(b,d,l,o,r){var h;if(!d.k.length)h=new k(b,d,o,r);else if(typeof d.k[0]=="number")h=new _(b,d,o,r);else switch(l){case 0:h=new w(b,d,o,r);break;case 1:h=new C(b,d,o,r);break}return h.effectsSequence.length&&r.addDynamicProperty(h),h}var A={getProp:M};return A}(),D=function(){var e=[0,0];function t(v){var L=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||L,this.a&&v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&v.skewFromAxis(-this.sk.v,this.sa.v),this.r?v.rotate(-this.r.v):v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?v.translate(this.px.v,this.py.v,-this.pz.v):v.translate(this.px.v,this.py.v,0):v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function n(v){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||v){var L;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var k,_;if(L=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(k=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/L,0),_=this.p.getValueAtTime(this.p.keyframes[0].t/L,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(k=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/L,0),_=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/L,0)):(k=this.p.pv,_=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/L,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){k=[],_=[];var w=this.px,C=this.py;w._caching.lastFrame+w.offsetTime<=w.keyframes[0].t?(k[0]=w.getValueAtTime((w.keyframes[0].t+.01)/L,0),k[1]=C.getValueAtTime((C.keyframes[0].t+.01)/L,0),_[0]=w.getValueAtTime(w.keyframes[0].t/L,0),_[1]=C.getValueAtTime(C.keyframes[0].t/L,0)):w._caching.lastFrame+w.offsetTime>=w.keyframes[w.keyframes.length-1].t?(k[0]=w.getValueAtTime(w.keyframes[w.keyframes.length-1].t/L,0),k[1]=C.getValueAtTime(C.keyframes[C.keyframes.length-1].t/L,0),_[0]=w.getValueAtTime((w.keyframes[w.keyframes.length-1].t-.01)/L,0),_[1]=C.getValueAtTime((C.keyframes[C.keyframes.length-1].t-.01)/L,0)):(k=[w.pv,C.pv],_[0]=w.getValueAtTime((w._caching.lastFrame+w.offsetTime-.01)/L,w.offsetTime),_[1]=C.getValueAtTime((C._caching.lastFrame+C.offsetTime-.01)/L,C.offsetTime))}else _=e,k=_;this.v.rotate(-Math.atan2(k[1]-_[1],k[0]-_[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function i(){if(!this.a.k)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function s(){}function a(v){this._addDynamicProperty(v),this.elem.addDynamicProperty(v),this._isDirty=!0}function m(v,L,k){if(this.elem=v,this.frameId=-1,this.propType="transform",this.data=L,this.v=new ye,this.pre=new ye,this.appliedTransformations=0,this.initDynamicPropertyContainer(k||v),L.p&&L.p.s?(this.px=E.getProp(v,L.p.x,0,0,this),this.py=E.getProp(v,L.p.y,0,0,this),L.p.z&&(this.pz=E.getProp(v,L.p.z,0,0,this))):this.p=E.getProp(v,L.p||{k:[0,0,0]},1,0,this),L.rx){if(this.rx=E.getProp(v,L.rx,0,oe,this),this.ry=E.getProp(v,L.ry,0,oe,this),this.rz=E.getProp(v,L.rz,0,oe,this),L.or.k[0].ti){var _,w=L.or.k.length;for(_=0;_<w;_+=1)L.or.k[_].to=null,L.or.k[_].ti=null}this.or=E.getProp(v,L.or,1,oe,this),this.or.sh=!0}else this.r=E.getProp(v,L.r||{k:0},0,oe,this);L.sk&&(this.sk=E.getProp(v,L.sk,0,oe,this),this.sa=E.getProp(v,L.sa,0,oe,this)),this.a=E.getProp(v,L.a||{k:[0,0,0]},1,0,this),this.s=E.getProp(v,L.s||{k:[100,100,100]},1,.01,this),L.o?this.o=E.getProp(v,L.o,0,.01,v):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}m.prototype={applyToMatrix:t,getValue:n,precalculateMatrix:i,autoOrient:s},T([we],m),m.prototype.addDynamicProperty=a,m.prototype._addDynamicProperty=we.prototype.addDynamicProperty;function x(v,L,k){return new m(v,L,k)}return{getTransformProperty:x}}();function H(){this.c=!1,this._length=0,this._maxLength=8,this.v=he(this._maxLength),this.o=he(this._maxLength),this.i=he(this._maxLength)}H.prototype.setPathData=function(e,t){this.c=e,this.setLength(t);for(var n=0;n<t;)this.v[n]=Et.newElement(),this.o[n]=Et.newElement(),this.i[n]=Et.newElement(),n+=1},H.prototype.setLength=function(e){for(;this._maxLength<e;)this.doubleArrayLength();this._length=e},H.prototype.doubleArrayLength=function(){this.v=this.v.concat(he(this._maxLength)),this.i=this.i.concat(he(this._maxLength)),this.o=this.o.concat(he(this._maxLength)),this._maxLength*=2},H.prototype.setXYAt=function(e,t,n,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),n){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[];break}(!a[i]||a[i]&&!s)&&(a[i]=Et.newElement()),a[i][0]=e,a[i][1]=t},H.prototype.setTripleAt=function(e,t,n,i,s,a,m,x){this.setXYAt(e,t,"v",m,x),this.setXYAt(n,i,"o",m,x),this.setXYAt(s,a,"i",m,x)},H.prototype.reverse=function(){var e=new H;e.setPathData(this.c,this._length);var t=this.v,n=this.o,i=this.i,s=0;this.c&&(e.setTripleAt(t[0][0],t[0][1],i[0][0],i[0][1],n[0][0],n[0][1],0,!1),s=1);var a=this._length-1,m=this._length,x;for(x=s;x<m;x+=1)e.setTripleAt(t[a][0],t[a][1],i[a][0],i[a][1],n[a][0],n[a][1],x,!1),a-=1;return e};var U=function(){var e=-999999;function t(d,l,o){var r=o.lastIndex,h,f,c,y,z,N,W,B,P,O=this.keyframes;if(d<O[0].t-this.offsetTime)h=O[0].s[0],c=!0,r=0;else if(d>=O[O.length-1].t-this.offsetTime)h=O[O.length-1].s?O[O.length-1].s[0]:O[O.length-2].e[0],c=!0;else{for(var F=r,u=O.length-1,p=!0,g,S,V;p&&(g=O[F],S=O[F+1],!(S.t-this.offsetTime>d));)F<u-1?F+=1:p=!1;if(V=this.keyframesMetadata[F]||{},c=g.h===1,r=F,!c){if(d>=S.t-this.offsetTime)B=1;else if(d<g.t-this.offsetTime)B=0;else{var R;V.__fnct?R=V.__fnct:(R=I.getBezierEasing(g.o.x,g.o.y,g.i.x,g.i.y).get,V.__fnct=R),B=R((d-(g.t-this.offsetTime))/(S.t-this.offsetTime-(g.t-this.offsetTime)))}f=S.s?S.s[0]:g.e[0]}h=g.s[0]}for(N=l._length,W=h.i[0].length,o.lastIndex=r,y=0;y<N;y+=1)for(z=0;z<W;z+=1)P=c?h.i[y][z]:h.i[y][z]+(f.i[y][z]-h.i[y][z])*B,l.i[y][z]=P,P=c?h.o[y][z]:h.o[y][z]+(f.o[y][z]-h.o[y][z])*B,l.o[y][z]=P,P=c?h.v[y][z]:h.v[y][z]+(f.v[y][z]-h.v[y][z])*B,l.v[y][z]=P}function n(){var d=this.comp.renderedFrame-this.offsetTime,l=this.keyframes[0].t-this.offsetTime,o=this.keyframes[this.keyframes.length-1].t-this.offsetTime,r=this._caching.lastFrame;return r!==e&&(r<l&&d<l||r>o&&d>o)||(this._caching.lastIndex=r<d?this._caching.lastIndex:0,this.interpolateShape(d,this.pv,this._caching)),this._caching.lastFrame=d,this.pv}function i(){this.paths=this.localShapeCollection}function s(d,l){if(d._length!==l._length||d.c!==l.c)return!1;var o,r=d._length;for(o=0;o<r;o+=1)if(d.v[o][0]!==l.v[o][0]||d.v[o][1]!==l.v[o][1]||d.o[o][0]!==l.o[o][0]||d.o[o][1]!==l.o[o][1]||d.i[o][0]!==l.i[o][0]||d.i[o][1]!==l.i[o][1])return!1;return!0}function a(d){s(this.v,d)||(this.v=Be.clone(d),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function m(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var d;this.kf?d=this.pv:this.data.ks?d=this.data.ks.k:d=this.data.pt.k;var l,o=this.effectsSequence.length;for(l=0;l<o;l+=1)d=this.effectsSequence[l](d);this.setVValue(d),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function x(d,l,o){this.propType="shape",this.comp=d.comp,this.container=d,this.elem=d,this.data=l,this.k=!1,this.kf=!1,this._mdf=!1;var r=o===3?l.pt.k:l.ks.k;this.v=Be.clone(r),this.pv=Be.clone(this.v),this.localShapeCollection=Ot.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function v(d){this.effectsSequence.push(d),this.container.addDynamicProperty(this)}x.prototype.interpolateShape=t,x.prototype.getValue=m,x.prototype.setVValue=a,x.prototype.addEffect=v;function L(d,l,o){this.propType="shape",this.comp=d.comp,this.elem=d,this.container=d,this.offsetTime=d.data.st,this.keyframes=o===3?l.pt.k:l.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var r=this.keyframes[0].s[0].i.length;this.v=Be.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,r),this.pv=Be.clone(this.v),this.localShapeCollection=Ot.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=e,this.reset=i,this._caching={lastFrame:e,lastIndex:0},this.effectsSequence=[n.bind(this)]}L.prototype.getValue=m,L.prototype.interpolateShape=t,L.prototype.setVValue=a,L.prototype.addEffect=v;var k=function(){var d=Ue;function l(o,r){this.v=Be.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=Ot.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=r.d,this.elem=o,this.comp=o.comp,this.frameId=-1,this.initDynamicPropertyContainer(o),this.p=E.getProp(o,r.p,1,0,this),this.s=E.getProp(o,r.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return l.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var o=this.p.v[0],r=this.p.v[1],h=this.s.v[0]/2,f=this.s.v[1]/2,c=this.d!==3,y=this.v;y.v[0][0]=o,y.v[0][1]=r-f,y.v[1][0]=c?o+h:o-h,y.v[1][1]=r,y.v[2][0]=o,y.v[2][1]=r+f,y.v[3][0]=c?o-h:o+h,y.v[3][1]=r,y.i[0][0]=c?o-h*d:o+h*d,y.i[0][1]=r-f,y.i[1][0]=c?o+h:o-h,y.i[1][1]=r-f*d,y.i[2][0]=c?o+h*d:o-h*d,y.i[2][1]=r+f,y.i[3][0]=c?o-h:o+h,y.i[3][1]=r+f*d,y.o[0][0]=c?o+h*d:o-h*d,y.o[0][1]=r-f,y.o[1][0]=c?o+h:o-h,y.o[1][1]=r+f*d,y.o[2][0]=c?o-h*d:o+h*d,y.o[2][1]=r+f,y.o[3][0]=c?o-h:o+h,y.o[3][1]=r-f*d}},T([we],l),l}(),_=function(){function d(l,o){this.v=Be.newElement(),this.v.setPathData(!0,0),this.elem=l,this.comp=l.comp,this.data=o,this.frameId=-1,this.d=o.d,this.initDynamicPropertyContainer(l),o.sy===1?(this.ir=E.getProp(l,o.ir,0,0,this),this.is=E.getProp(l,o.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=E.getProp(l,o.pt,0,0,this),this.p=E.getProp(l,o.p,1,0,this),this.r=E.getProp(l,o.r,0,oe,this),this.or=E.getProp(l,o.or,0,0,this),this.os=E.getProp(l,o.os,0,.01,this),this.localShapeCollection=Ot.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return d.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var l=Math.floor(this.pt.v)*2,o=Math.PI*2/l,r=!0,h=this.or.v,f=this.ir.v,c=this.os.v,y=this.is.v,z=2*Math.PI*h/(l*2),N=2*Math.PI*f/(l*2),W,B,P,O,F=-Math.PI/2;F+=this.r.v;var u=this.data.d===3?-1:1;for(this.v._length=0,W=0;W<l;W+=1){B=r?h:f,P=r?c:y,O=r?z:N;var p=B*Math.cos(F),g=B*Math.sin(F),S=p===0&&g===0?0:g/Math.sqrt(p*p+g*g),V=p===0&&g===0?0:-p/Math.sqrt(p*p+g*g);p+=+this.p.v[0],g+=+this.p.v[1],this.v.setTripleAt(p,g,p-S*O*P*u,g-V*O*P*u,p+S*O*P*u,g+V*O*P*u,W,!0),r=!r,F+=o*u}},convertPolygonToPath:function(){var l=Math.floor(this.pt.v),o=Math.PI*2/l,r=this.or.v,h=this.os.v,f=2*Math.PI*r/(l*4),c,y=-Math.PI*.5,z=this.data.d===3?-1:1;for(y+=this.r.v,this.v._length=0,c=0;c<l;c+=1){var N=r*Math.cos(y),W=r*Math.sin(y),B=N===0&&W===0?0:W/Math.sqrt(N*N+W*W),P=N===0&&W===0?0:-N/Math.sqrt(N*N+W*W);N+=+this.p.v[0],W+=+this.p.v[1],this.v.setTripleAt(N,W,N-B*f*h*z,W-P*f*h*z,N+B*f*h*z,W+P*f*h*z,c,!0),y+=o*z}this.paths.length=0,this.paths[0]=this.v}},T([we],d),d}(),w=function(){function d(l,o){this.v=Be.newElement(),this.v.c=!0,this.localShapeCollection=Ot.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=l,this.comp=l.comp,this.frameId=-1,this.d=o.d,this.initDynamicPropertyContainer(l),this.p=E.getProp(l,o.p,1,0,this),this.s=E.getProp(l,o.s,1,0,this),this.r=E.getProp(l,o.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return d.prototype={convertRectToPath:function(){var l=this.p.v[0],o=this.p.v[1],r=this.s.v[0]/2,h=this.s.v[1]/2,f=Ft(r,h,this.r.v),c=f*(1-Ue);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(l+r,o-h+f,l+r,o-h+f,l+r,o-h+c,0,!0),this.v.setTripleAt(l+r,o+h-f,l+r,o+h-c,l+r,o+h-f,1,!0),f!==0?(this.v.setTripleAt(l+r-f,o+h,l+r-f,o+h,l+r-c,o+h,2,!0),this.v.setTripleAt(l-r+f,o+h,l-r+c,o+h,l-r+f,o+h,3,!0),this.v.setTripleAt(l-r,o+h-f,l-r,o+h-f,l-r,o+h-c,4,!0),this.v.setTripleAt(l-r,o-h+f,l-r,o-h+c,l-r,o-h+f,5,!0),this.v.setTripleAt(l-r+f,o-h,l-r+f,o-h,l-r+c,o-h,6,!0),this.v.setTripleAt(l+r-f,o-h,l+r-c,o-h,l+r-f,o-h,7,!0)):(this.v.setTripleAt(l-r,o+h,l-r+c,o+h,l-r,o+h,2),this.v.setTripleAt(l-r,o-h,l-r,o-h+c,l-r,o-h,3))):(this.v.setTripleAt(l+r,o-h+f,l+r,o-h+c,l+r,o-h+f,0,!0),f!==0?(this.v.setTripleAt(l+r-f,o-h,l+r-f,o-h,l+r-c,o-h,1,!0),this.v.setTripleAt(l-r+f,o-h,l-r+c,o-h,l-r+f,o-h,2,!0),this.v.setTripleAt(l-r,o-h+f,l-r,o-h+f,l-r,o-h+c,3,!0),this.v.setTripleAt(l-r,o+h-f,l-r,o+h-c,l-r,o+h-f,4,!0),this.v.setTripleAt(l-r+f,o+h,l-r+f,o+h,l-r+c,o+h,5,!0),this.v.setTripleAt(l+r-f,o+h,l+r-c,o+h,l+r-f,o+h,6,!0),this.v.setTripleAt(l+r,o+h-f,l+r,o+h-f,l+r,o+h-c,7,!0)):(this.v.setTripleAt(l-r,o-h,l-r+c,o-h,l-r,o-h,1,!0),this.v.setTripleAt(l-r,o+h,l-r,o+h-c,l-r,o+h,2,!0),this.v.setTripleAt(l+r,o+h,l+r-c,o+h,l+r,o+h,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},T([we],d),d}();function C(d,l,o){var r;if(o===3||o===4){var h=o===3?l.pt:l.ks,f=h.k;f.length?r=new L(d,l,o):r=new x(d,l,o)}else o===5?r=new w(d,l):o===6?r=new k(d,l):o===7&&(r=new _(d,l));return r.k&&d.addDynamicProperty(r),r}function M(){return x}function A(){return L}var b={};return b.getShapeProp=C,b.getConstructorFunction=M,b.getKeyframedConstructorFunction=A,b}(),ee=function(){var e={},t={};e.registerModifier=n,e.getModifier=i;function n(s,a){t[s]||(t[s]=a)}function i(s,a,m){return new t[s](a,m)}return e}();function J(){}J.prototype.initModifierProperties=function(){},J.prototype.addShapeToModifier=function(){},J.prototype.addShape=function(e){if(!this.closed){e.sh.container.addDynamicProperty(e.sh);var t={shape:e.sh,data:e,localShapeCollection:Ot.newShapeCollection()};this.shapes.push(t),this.addShapeToModifier(t),this._isAnimated&&e.setAsAnimated()}},J.prototype.init=function(e,t){this.shapes=[],this.elem=e,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t),this.frameId=Fe,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},J.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},T([we],J);function se(){}T([J],se),se.prototype.initModifierProperties=function(e,t){this.s=E.getProp(e,t.s,0,.01,this),this.e=E.getProp(e,t.e,0,.01,this),this.o=E.getProp(e,t.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=t.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},se.prototype.addShapeToModifier=function(e){e.pathsData=[]},se.prototype.calculateShapeEdges=function(e,t,n,i,s){var a=[];t<=1?a.push({s:e,e:t}):e>=1?a.push({s:e-1,e:t-1}):(a.push({s:e,e:1}),a.push({s:0,e:t-1}));var m=[],x,v=a.length,L;for(x=0;x<v;x+=1)if(L=a[x],!(L.e*s<i||L.s*s>i+n)){var k,_;L.s*s<=i?k=0:k=(L.s*s-i)/n,L.e*s>=i+n?_=1:_=(L.e*s-i)/n,m.push([k,_])}return m.length||m.push([0,0]),m},se.prototype.releasePathsData=function(e){var t,n=e.length;for(t=0;t<n;t+=1)an.release(e[t]);return e.length=0,e},se.prototype.processShapes=function(e){var t,n;if(this._mdf||e){var i=this.o.v%360/360;if(i<0&&(i+=1),this.s.v>1?t=1+i:this.s.v<0?t=0+i:t=this.s.v+i,this.e.v>1?n=1+i:this.e.v<0?n=0+i:n=this.e.v+i,t>n){var s=t;t=n,n=s}t=Math.round(t*1e4)*1e-4,n=Math.round(n*1e4)*1e-4,this.sValue=t,this.eValue=n}else t=this.sValue,n=this.eValue;var a,m,x=this.shapes.length,v,L,k,_,w,C=0;if(n===t)for(m=0;m<x;m+=1)this.shapes[m].localShapeCollection.releaseShapes(),this.shapes[m].shape._mdf=!0,this.shapes[m].shape.paths=this.shapes[m].localShapeCollection,this._mdf&&(this.shapes[m].pathsData.length=0);else if(n===1&&t===0||n===0&&t===1){if(this._mdf)for(m=0;m<x;m+=1)this.shapes[m].pathsData.length=0,this.shapes[m].shape._mdf=!0}else{var M=[],A,b;for(m=0;m<x;m+=1)if(A=this.shapes[m],!A.shape._mdf&&!this._mdf&&!e&&this.m!==2)A.shape.paths=A.localShapeCollection;else{if(a=A.shape.paths,L=a._length,w=0,!A.shape._mdf&&A.pathsData.length)w=A.totalShapeLength;else{for(k=this.releasePathsData(A.pathsData),v=0;v<L;v+=1)_=q.getSegmentsLength(a.shapes[v]),k.push(_),w+=_.totalLength;A.totalShapeLength=w,A.pathsData=k}C+=w,A.shape._mdf=!0}var d=t,l=n,o=0,r;for(m=x-1;m>=0;m-=1)if(A=this.shapes[m],A.shape._mdf){for(b=A.localShapeCollection,b.releaseShapes(),this.m===2&&x>1?(r=this.calculateShapeEdges(t,n,A.totalShapeLength,o,C),o+=A.totalShapeLength):r=[[d,l]],L=r.length,v=0;v<L;v+=1){d=r[v][0],l=r[v][1],M.length=0,l<=1?M.push({s:A.totalShapeLength*d,e:A.totalShapeLength*l}):d>=1?M.push({s:A.totalShapeLength*(d-1),e:A.totalShapeLength*(l-1)}):(M.push({s:A.totalShapeLength*d,e:A.totalShapeLength}),M.push({s:0,e:A.totalShapeLength*(l-1)}));var h=this.addShapes(A,M[0]);if(M[0].s!==M[0].e){if(M.length>1){var f=A.shape.paths.shapes[A.shape.paths._length-1];if(f.c){var c=h.pop();this.addPaths(h,b),h=this.addShapes(A,M[1],c)}else this.addPaths(h,b),h=this.addShapes(A,M[1])}this.addPaths(h,b)}}A.shape.paths=b}}},se.prototype.addPaths=function(e,t){var n,i=e.length;for(n=0;n<i;n+=1)t.addShape(e[n])},se.prototype.addSegment=function(e,t,n,i,s,a,m){s.setXYAt(t[0],t[1],"o",a),s.setXYAt(n[0],n[1],"i",a+1),m&&s.setXYAt(e[0],e[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},se.prototype.addSegmentFromArray=function(e,t,n,i){t.setXYAt(e[1],e[5],"o",n),t.setXYAt(e[2],e[6],"i",n+1),i&&t.setXYAt(e[0],e[4],"v",n),t.setXYAt(e[3],e[7],"v",n+1)},se.prototype.addShapes=function(e,t,n){var i=e.pathsData,s=e.shape.paths.shapes,a,m=e.shape.paths._length,x,v,L=0,k,_,w,C,M=[],A,b=!0;for(n?(_=n._length,A=n._length):(n=Be.newElement(),_=0,A=0),M.push(n),a=0;a<m;a+=1){for(w=i[a].lengths,n.c=s[a].c,v=s[a].c?w.length:w.length+1,x=1;x<v;x+=1)if(k=w[x-1],L+k.addedLength<t.s)L+=k.addedLength,n.c=!1;else if(L>t.e){n.c=!1;break}else t.s<=L&&t.e>=L+k.addedLength?(this.addSegment(s[a].v[x-1],s[a].o[x-1],s[a].i[x],s[a].v[x],n,_,b),b=!1):(C=q.getNewSegment(s[a].v[x-1],s[a].v[x],s[a].o[x-1],s[a].i[x],(t.s-L)/k.addedLength,(t.e-L)/k.addedLength,w[x-1]),this.addSegmentFromArray(C,n,_,b),b=!1,n.c=!1),L+=k.addedLength,_+=1;if(s[a].c&&w.length){if(k=w[x-1],L<=t.e){var d=w[x-1].addedLength;t.s<=L&&t.e>=L+d?(this.addSegment(s[a].v[x-1],s[a].o[x-1],s[a].i[0],s[a].v[0],n,_,b),b=!1):(C=q.getNewSegment(s[a].v[x-1],s[a].v[0],s[a].o[x-1],s[a].i[0],(t.s-L)/d,(t.e-L)/d,w[x-1]),this.addSegmentFromArray(C,n,_,b),b=!1,n.c=!1)}else n.c=!1;L+=k.addedLength,_+=1}if(n._length&&(n.setXYAt(n.v[A][0],n.v[A][1],"i",A),n.setXYAt(n.v[n._length-1][0],n.v[n._length-1][1],"o",n._length-1)),L>t.e)break;a<m-1&&(n=Be.newElement(),b=!0,M.push(n),_=0)}return M},ee.registerModifier("tm",se);function ce(){}T([J],ce),ce.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.rd=E.getProp(e,t.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},ce.prototype.processPath=function(e,t){var n=Be.newElement();n.c=e.c;var i,s=e._length,a,m,x,v,L,k,_=0,w,C,M,A,b,d;for(i=0;i<s;i+=1)a=e.v[i],x=e.o[i],m=e.i[i],a[0]===x[0]&&a[1]===x[1]&&a[0]===m[0]&&a[1]===m[1]?(i===0||i===s-1)&&!e.c?(n.setTripleAt(a[0],a[1],x[0],x[1],m[0],m[1],_),_+=1):(i===0?v=e.v[s-1]:v=e.v[i-1],L=Math.sqrt(Math.pow(a[0]-v[0],2)+Math.pow(a[1]-v[1],2)),k=L?Math.min(L/2,t)/L:0,b=a[0]+(v[0]-a[0])*k,w=b,d=a[1]-(a[1]-v[1])*k,C=d,M=w-(w-a[0])*Ue,A=C-(C-a[1])*Ue,n.setTripleAt(w,C,M,A,b,d,_),_+=1,i===s-1?v=e.v[0]:v=e.v[i+1],L=Math.sqrt(Math.pow(a[0]-v[0],2)+Math.pow(a[1]-v[1],2)),k=L?Math.min(L/2,t)/L:0,M=a[0]+(v[0]-a[0])*k,w=M,A=a[1]+(v[1]-a[1])*k,C=A,b=w-(w-a[0])*Ue,d=C-(C-a[1])*Ue,n.setTripleAt(w,C,M,A,b,d,_),_+=1):(n.setTripleAt(e.v[i][0],e.v[i][1],e.o[i][0],e.o[i][1],e.i[i][0],e.i[i][1],_),_+=1);return n},ce.prototype.processShapes=function(e){var t,n,i=this.shapes.length,s,a,m=this.rd.v;if(m!==0){var x,v;for(n=0;n<i;n+=1){if(x=this.shapes[n],v=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!e))for(v.releaseShapes(),x.shape._mdf=!0,t=x.shape.paths.shapes,a=x.shape.paths._length,s=0;s<a;s+=1)v.addShape(this.processPath(t[s],m));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},ee.registerModifier("rd",ce);function ve(){}T([J],ve),ve.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.amount=E.getProp(e,t.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},ve.prototype.processPath=function(e,t){var n=t/100,i=[0,0],s=e._length,a=0;for(a=0;a<s;a+=1)i[0]+=e.v[a][0],i[1]+=e.v[a][1];i[0]/=s,i[1]/=s;var m=Be.newElement();m.c=e.c;var x,v,L,k,_,w;for(a=0;a<s;a+=1)x=e.v[a][0]+(i[0]-e.v[a][0])*n,v=e.v[a][1]+(i[1]-e.v[a][1])*n,L=e.o[a][0]+(i[0]-e.o[a][0])*-n,k=e.o[a][1]+(i[1]-e.o[a][1])*-n,_=e.i[a][0]+(i[0]-e.i[a][0])*-n,w=e.i[a][1]+(i[1]-e.i[a][1])*-n,m.setTripleAt(x,v,L,k,_,w,a);return m},ve.prototype.processShapes=function(e){var t,n,i=this.shapes.length,s,a,m=this.amount.v;if(m!==0){var x,v;for(n=0;n<i;n+=1){if(x=this.shapes[n],v=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!e))for(v.releaseShapes(),x.shape._mdf=!0,t=x.shape.paths.shapes,a=x.shape.paths._length,s=0;s<a;s+=1)v.addShape(this.processPath(t[s],m));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},ee.registerModifier("pb",ve);function fe(){}T([J],fe),fe.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.c=E.getProp(e,t.c,0,null,this),this.o=E.getProp(e,t.o,0,null,this),this.tr=D.getTransformProperty(e,t.tr,this),this.so=E.getProp(e,t.tr.so,0,.01,this),this.eo=E.getProp(e,t.tr.eo,0,.01,this),this.data=t,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new ye,this.rMatrix=new ye,this.sMatrix=new ye,this.tMatrix=new ye,this.matrix=new ye},fe.prototype.applyTransforms=function(e,t,n,i,s,a){var m=a?-1:1,x=i.s.v[0]+(1-i.s.v[0])*(1-s),v=i.s.v[1]+(1-i.s.v[1])*(1-s);e.translate(i.p.v[0]*m*s,i.p.v[1]*m*s,i.p.v[2]),t.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),t.rotate(-i.r.v*m*s),t.translate(i.a.v[0],i.a.v[1],i.a.v[2]),n.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),n.scale(a?1/x:x,a?1/v:v),n.translate(i.a.v[0],i.a.v[1],i.a.v[2])},fe.prototype.init=function(e,t,n,i){for(this.elem=e,this.arr=t,this.pos=n,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t[n]);n>0;)n-=1,this._elements.unshift(t[n]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},fe.prototype.resetElements=function(e){var t,n=e.length;for(t=0;t<n;t+=1)e[t]._processed=!1,e[t].ty==="gr"&&this.resetElements(e[t].it)},fe.prototype.cloneElements=function(e){var t=JSON.parse(JSON.stringify(e));return this.resetElements(t),t},fe.prototype.changeGroupRender=function(e,t){var n,i=e.length;for(n=0;n<i;n+=1)e[n]._render=t,e[n].ty==="gr"&&this.changeGroupRender(e[n].it,t)},fe.prototype.processShapes=function(e){var t,n,i,s,a,m=!1;if(this._mdf||e){var x=Math.ceil(this.c.v);if(this._groups.length<x){for(;this._groups.length<x;){var v={it:this.cloneElements(this._elements),ty:"gr"};v.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,v),this._groups.splice(0,0,v),this._currentCopies+=1}this.elem.reloadShapes(),m=!0}a=0;var L;for(i=0;i<=this._groups.length-1;i+=1){if(L=a<x,this._groups[i]._render=L,this.changeGroupRender(this._groups[i].it,L),!L){var k=this.elemsData[i].it,_=k[k.length-1];_.transform.op.v!==0?(_.transform.op._mdf=!0,_.transform.op.v=0):_.transform.op._mdf=!1}a+=1}this._currentCopies=x;var w=this.o.v,C=w%1,M=w>0?Math.floor(w):Math.ceil(w),A=this.pMatrix.props,b=this.rMatrix.props,d=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var l=0;if(w>0){for(;l<M;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),l+=1;C&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,C,!1),l+=C)}else if(w<0){for(;l>M;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),l-=1;C&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-C,!0),l-=C)}i=this.data.m===1?0:this._currentCopies-1,s=this.data.m===1?1:-1,a=this._currentCopies;for(var o,r;a;){if(t=this.elemsData[i].it,n=t[t.length-1].transform.mProps.v.props,r=n.length,t[t.length-1].transform.mProps._mdf=!0,t[t.length-1].transform.op._mdf=!0,t[t.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),l!==0){for((i!==0&&s===1||i!==this._currentCopies-1&&s===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14],b[15]),this.matrix.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),this.matrix.transform(A[0],A[1],A[2],A[3],A[4],A[5],A[6],A[7],A[8],A[9],A[10],A[11],A[12],A[13],A[14],A[15]),o=0;o<r;o+=1)n[o]=this.matrix.props[o];this.matrix.reset()}else for(this.matrix.reset(),o=0;o<r;o+=1)n[o]=this.matrix.props[o];l+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)t=this.elemsData[i].it,n=t[t.length-1].transform.mProps.v.props,t[t.length-1].transform.mProps._mdf=!1,t[t.length-1].transform.op._mdf=!1,a-=1,i+=s;return m},fe.prototype.addShape=function(){},ee.registerModifier("rp",fe);function pt(){this._length=0,this._maxLength=4,this.shapes=he(this._maxLength)}pt.prototype.addShape=function(e){this._length===this._maxLength&&(this.shapes=this.shapes.concat(he(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=e,this._length+=1},pt.prototype.releaseShapes=function(){var e;for(e=0;e<this._length;e+=1)Be.release(this.shapes[e]);this._length=0};function At(e,t,n,i){this.elem=e,this.frameId=-1,this.dataProps=he(t.length),this.renderer=n,this.k=!1,this.dashStr="",this.dashArray=me("float32",t.length?t.length-1:0),this.dashoffset=me("float32",1),this.initDynamicPropertyContainer(i);var s,a=t.length||0,m;for(s=0;s<a;s+=1)m=E.getProp(e,t[s].v,0,0,this),this.k=m.k||this.k,this.dataProps[s]={n:t[s].n,p:m};this.k||this.getValue(!0),this._isAnimated=this.k}At.prototype.getValue=function(e){if(!(this.elem.globalData.frameId===this.frameId&&!e)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||e,this._mdf)){var t=0,n=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),t=0;t<n;t+=1)this.dataProps[t].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[t].p.v:this.dashArray[t]=this.dataProps[t].p.v:this.dashoffset[0]=this.dataProps[t].p.v}},T([we],At);function Dt(e,t,n){this.data=t,this.c=me("uint8c",t.p*4);var i=t.k.k[0].s?t.k.k[0].s.length-t.p*4:t.k.k.length-t.p*4;this.o=me("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(n),this.prop=E.getProp(e,t.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Dt.prototype.comparePoints=function(e,t){for(var n=0,i=this.o.length/2,s;n<i;){if(s=Math.abs(e[n*4]-e[t*4+n*2]),s>.01)return!1;n+=1}return!0},Dt.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var e=0,t=this.data.k.k.length;e<t;){if(!this.comparePoints(this.data.k.k[e].s,this.data.p))return!1;e+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Dt.prototype.getValue=function(e){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||e){var t,n=this.data.p*4,i,s;for(t=0;t<n;t+=1)i=t%4===0?100:255,s=Math.round(this.prop.v[t]*i),this.c[t]!==s&&(this.c[t]=s,this._cmdf=!e);if(this.o.length)for(n=this.prop.v.length,t=this.data.p*4;t<n;t+=1)i=t%2===0?100:1,s=t%2===0?Math.round(this.prop.v[t]*100):this.prop.v[t],this.o[t-this.data.p*4]!==s&&(this.o[t-this.data.p*4]=s,this._omdf=!e);this._mdf=!e}},T([we],Dt);var en=function(e,t,n,i){if(t===0)return"";var s=e.o,a=e.i,m=e.v,x,v=" M"+i.applyToPointStringified(m[0][0],m[0][1]);for(x=1;x<t;x+=1)v+=" C"+i.applyToPointStringified(s[x-1][0],s[x-1][1])+" "+i.applyToPointStringified(a[x][0],a[x][1])+" "+i.applyToPointStringified(m[x][0],m[x][1]);return n&&t&&(v+=" C"+i.applyToPointStringified(s[x-1][0],s[x-1][1])+" "+i.applyToPointStringified(a[0][0],a[0][1])+" "+i.applyToPointStringified(m[0][0],m[0][1]),v+="z"),v},kn=function(){function e(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return e.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].pause()},resume:function(){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].resume()},setRate:function(t){var n,i=this.audios.length;for(n=0;n<i;n+=1)this.audios[n].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):Howl?new Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new e}}(),An=function(){var e=function(){var d=Ee("canvas");d.width=1,d.height=1;var l=d.getContext("2d");return l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,1,1),d}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function n(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(d,l,o){var r="";if(d.e)r=d.p;else if(l){var h=d.p;h.indexOf("images/")!==-1&&(h=h.split("/")[1]),r=l+h}else r=o,r+=d.u?d.u:"",r+=d.p;return r}function s(d){var l=0,o=setInterval((function(){var r=d.getBBox();(r.width||l>500)&&(this._imageLoaded(),clearInterval(o)),l+=1}).bind(this),50)}function a(d){var l=i(d,this.assetsPath,this.path),o=K("image");nt?this.testImageLoaded(o):o.addEventListener("load",this._imageLoaded,!1),o.addEventListener("error",(function(){r.img=e,this._imageLoaded()}).bind(this),!1),o.setAttributeNS("http://www.w3.org/1999/xlink","href",l),this._elementHelper.append?this._elementHelper.append(o):this._elementHelper.appendChild(o);var r={img:o,assetData:d};return r}function m(d){var l=i(d,this.assetsPath,this.path),o=Ee("img");o.crossOrigin="anonymous",o.addEventListener("load",this._imageLoaded,!1),o.addEventListener("error",(function(){r.img=e,this._imageLoaded()}).bind(this),!1),o.src=l;var r={img:o,assetData:d};return r}function x(d){var l={assetData:d},o=i(d,this.assetsPath,this.path);return $.loadData(o,(function(r){l.img=r,this._footageLoaded()}).bind(this),(function(){l.img={},this._footageLoaded()}).bind(this)),l}function v(d,l){this.imagesLoadedCb=l;var o,r=d.length;for(o=0;o<r;o+=1)d[o].layers||(!d[o].t||d[o].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(d[o]))):d[o].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(d[o]))))}function L(d){this.path=d||""}function k(d){this.assetsPath=d||""}function _(d){for(var l=0,o=this.images.length;l<o;){if(this.images[l].assetData===d)return this.images[l].img;l+=1}return null}function w(){this.imagesLoadedCb=null,this.images.length=0}function C(){return this.totalImages===this.loadedAssets}function M(){return this.totalFootages===this.loadedFootagesCount}function A(d,l){d==="svg"?(this._elementHelper=l,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function b(){this._imageLoaded=t.bind(this),this._footageLoaded=n.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=x.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return b.prototype={loadAssets:v,setAssetsPath:k,setPath:L,loadedImages:C,loadedFootages:M,destroy:w,getAsset:_,createImgData:m,createImageData:a,imageLoaded:t,footageLoaded:n,setCacheType:A},b}(),tn=function(){var e={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(e.maskType=!1),e}(),Gt=function(){var e={};e.createFilter=t,e.createAlphaToLuminanceFilter=n;function t(i,s){var a=K("filter");return a.setAttribute("id",i),s!==!0&&(a.setAttribute("filterUnits","objectBoundingBox"),a.setAttribute("x","0%"),a.setAttribute("y","0%"),a.setAttribute("width","100%"),a.setAttribute("height","100%")),a}function n(){var i=K("feColorMatrix");return i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","sRGB"),i.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),i}return e}();function Lt(e,t,n){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=e,this._renderType=t,this._elem=n,this._animatorsData=he(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(n)}Lt.prototype.searchProperties=function(){var e,t=this._textData.a.length,n,i=E.getProp;for(e=0;e<t;e+=1)n=this._textData.a[e],this._animatorsData[e]=new Ln(this._elem,n,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},Lt.prototype.getMeasures=function(e,t){if(this.lettersChangedFlag=t,!(!this._mdf&&!this._isFirstFrame&&!t&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var n=this._moreOptions.alignment.v,i=this._animatorsData,s=this._textData,a=this.mHelper,m=this._renderType,x=this.renderedLetters.length,v,L,k,_,w=e.l,C,M,A,b,d,l,o,r,h,f,c,y,z,N,W;if(this._hasMaskedPath){if(W=this._pathData.m,!this._pathData.n||this._pathData._mdf){var B=W.v;this._pathData.r.v&&(B=B.reverse()),C={tLength:0,segments:[]},_=B._length-1;var P;for(y=0,k=0;k<_;k+=1)P=q.buildBezierData(B.v[k],B.v[k+1],[B.o[k][0]-B.v[k][0],B.o[k][1]-B.v[k][1]],[B.i[k+1][0]-B.v[k+1][0],B.i[k+1][1]-B.v[k+1][1]]),C.tLength+=P.segmentLength,C.segments.push(P),y+=P.segmentLength;k=_,W.v.c&&(P=q.buildBezierData(B.v[k],B.v[0],[B.o[k][0]-B.v[k][0],B.o[k][1]-B.v[k][1]],[B.i[0][0]-B.v[0][0],B.i[0][1]-B.v[0][1]]),C.tLength+=P.segmentLength,C.segments.push(P),y+=P.segmentLength),this._pathData.pi=C}if(C=this._pathData.pi,M=this._pathData.f.v,o=0,l=1,b=0,d=!0,f=C.segments,M<0&&W.v.c)for(C.tLength<Math.abs(M)&&(M=-Math.abs(M)%C.tLength),o=f.length-1,h=f[o].points,l=h.length-1;M<0;)M+=h[l].partialLength,l-=1,l<0&&(o-=1,h=f[o].points,l=h.length-1);h=f[o].points,r=h[l-1],A=h[l],c=A.partialLength}_=w.length,v=0,L=0;var O=e.finalSize*1.2*.714,F=!0,u,p,g,S,V;S=i.length;var R,X=-1,ae,ne,be,Le=M,ze=o,De=l,He=-1,Te,xe,Ve,G,ue,ct,wt,ft,st="",mt=this.defaultPropsArray,ut;if(e.j===2||e.j===1){var je=0,yt=0,_t=e.j===2?-.5:-1,et=0,bt=!0;for(k=0;k<_;k+=1)if(w[k].n){for(je&&(je+=yt);et<k;)w[et].animatorJustifyOffset=je,et+=1;je=0,bt=!0}else{for(g=0;g<S;g+=1)u=i[g].a,u.t.propType&&(bt&&e.j===2&&(yt+=u.t.v*_t),p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),R.length?je+=u.t.v*R[0]*_t:je+=u.t.v*R*_t);bt=!1}for(je&&(je+=yt);et<k;)w[et].animatorJustifyOffset=je,et+=1}for(k=0;k<_;k+=1){if(a.reset(),Te=1,w[k].n)v=0,L+=e.yOffset,L+=F?1:0,M=Le,F=!1,this._hasMaskedPath&&(o=ze,l=De,h=f[o].points,r=h[l-1],A=h[l],c=A.partialLength,b=0),st="",ft="",ct="",ut="",mt=this.defaultPropsArray;else{if(this._hasMaskedPath){if(He!==w[k].line){switch(e.j){case 1:M+=y-e.lineWidths[w[k].line];break;case 2:M+=(y-e.lineWidths[w[k].line])/2;break}He=w[k].line}X!==w[k].ind&&(w[X]&&(M+=w[X].extra),M+=w[k].an/2,X=w[k].ind),M+=n[0]*w[k].an*.005;var tt=0;for(g=0;g<S;g+=1)u=i[g].a,u.p.propType&&(p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),R.length?tt+=u.p.v[0]*R[0]:tt+=u.p.v[0]*R),u.a.propType&&(p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),R.length?tt+=u.a.v[0]*R[0]:tt+=u.a.v[0]*R);for(d=!0,this._pathData.a.v&&(M=w[0].an*.5+(y-this._pathData.f.v-w[0].an*.5-w[w.length-1].an*.5)*X/(_-1),M+=this._pathData.f.v);d;)b+c>=M+tt||!h?(z=(M+tt-b)/A.partialLength,ne=r.point[0]+(A.point[0]-r.point[0])*z,be=r.point[1]+(A.point[1]-r.point[1])*z,a.translate(-n[0]*w[k].an*.005,-(n[1]*O)*.01),d=!1):h&&(b+=A.partialLength,l+=1,l>=h.length&&(l=0,o+=1,f[o]?h=f[o].points:W.v.c?(l=0,o=0,h=f[o].points):(b-=A.partialLength,h=null)),h&&(r=A,A=h[l],c=A.partialLength));ae=w[k].an/2-w[k].add,a.translate(-ae,0,0)}else ae=w[k].an/2-w[k].add,a.translate(-ae,0,0),a.translate(-n[0]*w[k].an*.005,-n[1]*O*.01,0);for(g=0;g<S;g+=1)u=i[g].a,u.t.propType&&(p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),(v!==0||e.j!==0)&&(this._hasMaskedPath?R.length?M+=u.t.v*R[0]:M+=u.t.v*R:R.length?v+=u.t.v*R[0]:v+=u.t.v*R));for(e.strokeWidthAnim&&(Ve=e.sw||0),e.strokeColorAnim&&(e.sc?xe=[e.sc[0],e.sc[1],e.sc[2]]:xe=[0,0,0]),e.fillColorAnim&&e.fc&&(G=[e.fc[0],e.fc[1],e.fc[2]]),g=0;g<S;g+=1)u=i[g].a,u.a.propType&&(p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),R.length?a.translate(-u.a.v[0]*R[0],-u.a.v[1]*R[1],u.a.v[2]*R[2]):a.translate(-u.a.v[0]*R,-u.a.v[1]*R,u.a.v[2]*R));for(g=0;g<S;g+=1)u=i[g].a,u.s.propType&&(p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),R.length?a.scale(1+(u.s.v[0]-1)*R[0],1+(u.s.v[1]-1)*R[1],1):a.scale(1+(u.s.v[0]-1)*R,1+(u.s.v[1]-1)*R,1));for(g=0;g<S;g+=1){if(u=i[g].a,p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),u.sk.propType&&(R.length?a.skewFromAxis(-u.sk.v*R[0],u.sa.v*R[1]):a.skewFromAxis(-u.sk.v*R,u.sa.v*R)),u.r.propType&&(R.length?a.rotateZ(-u.r.v*R[2]):a.rotateZ(-u.r.v*R)),u.ry.propType&&(R.length?a.rotateY(u.ry.v*R[1]):a.rotateY(u.ry.v*R)),u.rx.propType&&(R.length?a.rotateX(u.rx.v*R[0]):a.rotateX(u.rx.v*R)),u.o.propType&&(R.length?Te+=(u.o.v*R[0]-Te)*R[0]:Te+=(u.o.v*R-Te)*R),e.strokeWidthAnim&&u.sw.propType&&(R.length?Ve+=u.sw.v*R[0]:Ve+=u.sw.v*R),e.strokeColorAnim&&u.sc.propType)for(ue=0;ue<3;ue+=1)R.length?xe[ue]+=(u.sc.v[ue]-xe[ue])*R[0]:xe[ue]+=(u.sc.v[ue]-xe[ue])*R;if(e.fillColorAnim&&e.fc){if(u.fc.propType)for(ue=0;ue<3;ue+=1)R.length?G[ue]+=(u.fc.v[ue]-G[ue])*R[0]:G[ue]+=(u.fc.v[ue]-G[ue])*R;u.fh.propType&&(R.length?G=Ye(G,u.fh.v*R[0]):G=Ye(G,u.fh.v*R)),u.fs.propType&&(R.length?G=zt(G,u.fs.v*R[0]):G=zt(G,u.fs.v*R)),u.fb.propType&&(R.length?G=kt(G,u.fb.v*R[0]):G=kt(G,u.fb.v*R))}}for(g=0;g<S;g+=1)u=i[g].a,u.p.propType&&(p=i[g].s,R=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),this._hasMaskedPath?R.length?a.translate(0,u.p.v[1]*R[0],-u.p.v[2]*R[1]):a.translate(0,u.p.v[1]*R,-u.p.v[2]*R):R.length?a.translate(u.p.v[0]*R[0],u.p.v[1]*R[1],-u.p.v[2]*R[2]):a.translate(u.p.v[0]*R,u.p.v[1]*R,-u.p.v[2]*R));if(e.strokeWidthAnim&&(ct=Ve<0?0:Ve),e.strokeColorAnim&&(wt="rgb("+Math.round(xe[0]*255)+","+Math.round(xe[1]*255)+","+Math.round(xe[2]*255)+")"),e.fillColorAnim&&e.fc&&(ft="rgb("+Math.round(G[0]*255)+","+Math.round(G[1]*255)+","+Math.round(G[2]*255)+")"),this._hasMaskedPath){if(a.translate(0,-e.ls),a.translate(0,n[1]*O*.01+L,0),this._pathData.p.v){N=(A.point[1]-r.point[1])/(A.point[0]-r.point[0]);var It=Math.atan(N)*180/Math.PI;A.point[0]<r.point[0]&&(It+=180),a.rotate(-It*Math.PI/180)}a.translate(ne,be,0),M-=n[0]*w[k].an*.005,w[k+1]&&X!==w[k+1].ind&&(M+=w[k].an/2,M+=e.tr*.001*e.finalSize)}else{switch(a.translate(v,L,0),e.ps&&a.translate(e.ps[0],e.ps[1]+e.ascent,0),e.j){case 1:a.translate(w[k].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[w[k].line]),0,0);break;case 2:a.translate(w[k].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[w[k].line])/2,0,0);break}a.translate(0,-e.ls),a.translate(ae,0,0),a.translate(n[0]*w[k].an*.005,n[1]*O*.01,0),v+=w[k].l+e.tr*.001*e.finalSize}m==="html"?st=a.toCSS():m==="svg"?st=a.to2dCSS():mt=[a.props[0],a.props[1],a.props[2],a.props[3],a.props[4],a.props[5],a.props[6],a.props[7],a.props[8],a.props[9],a.props[10],a.props[11],a.props[12],a.props[13],a.props[14],a.props[15]],ut=Te}x<=k?(V=new Yt(ut,ct,wt,ft,st,mt),this.renderedLetters.push(V),x+=1,this.lettersChangedFlag=!0):(V=this.renderedLetters[k],this.lettersChangedFlag=V.update(ut,ct,wt,ft,st,mt)||this.lettersChangedFlag)}}},Lt.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Lt.prototype.mHelper=new ye,Lt.prototype.defaultPropsArray=[],T([we],Lt);function Ln(e,t,n){var i={propType:!1},s=E.getProp,a=t.a;this.a={r:a.r?s(e,a.r,0,oe,n):i,rx:a.rx?s(e,a.rx,0,oe,n):i,ry:a.ry?s(e,a.ry,0,oe,n):i,sk:a.sk?s(e,a.sk,0,oe,n):i,sa:a.sa?s(e,a.sa,0,oe,n):i,s:a.s?s(e,a.s,1,.01,n):i,a:a.a?s(e,a.a,1,0,n):i,o:a.o?s(e,a.o,0,.01,n):i,p:a.p?s(e,a.p,1,0,n):i,sw:a.sw?s(e,a.sw,0,0,n):i,sc:a.sc?s(e,a.sc,1,0,n):i,fc:a.fc?s(e,a.fc,1,0,n):i,fh:a.fh?s(e,a.fh,0,0,n):i,fs:a.fs?s(e,a.fs,0,.01,n):i,fb:a.fb?s(e,a.fb,0,.01,n):i,t:a.t?s(e,a.t,0,0,n):i},this.s=En.getTextSelectorProp(e,t.s,n),this.s.t=t.s.t}function Yt(e,t,n,i,s,a){this.o=e,this.sw=t,this.sc=n,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!t,sc:!!n,fc:!!i,m:!0,p:!0}}Yt.prototype.update=function(e,t,n,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var m=!1;return this.o!==e&&(this.o=e,this._mdf.o=!0,m=!0),this.sw!==t&&(this.sw=t,this._mdf.sw=!0,m=!0),this.sc!==n&&(this.sc=n,this._mdf.sc=!0,m=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,m=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,m=!0),a.length&&(this.p[0]!==a[0]||this.p[1]!==a[1]||this.p[4]!==a[4]||this.p[5]!==a[5]||this.p[12]!==a[12]||this.p[13]!==a[13])&&(this.p=a,this._mdf.p=!0,m=!0),m};function Re(e,t){this._frameId=Fe,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=t,this.elem=e,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}Re.prototype.defaultBoxWidth=[0,0],Re.prototype.copyData=function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Re.prototype.setCurrentData=function(e){e.__complete||this.completeTextData(e),this.currentData=e,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},Re.prototype.searchProperty=function(){return this.searchKeyframes()},Re.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},Re.prototype.addEffect=function(e){this.effectsSequence.push(e),this.elem.addDynamicProperty(this)},Re.prototype.getValue=function(e){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!e)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var t=this.currentData,n=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,a=e||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)n!==this.keysIndex?a=this.effectsSequence[i](a,a.t):a=this.effectsSequence[i](this.currentData,a.t);t!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},Re.prototype.getKeyframeValue=function(){for(var e=this.data.d.k,t=this.elem.comp.renderedFrame,n=0,i=e.length;n<=i-1&&!(n===i-1||e[n+1].t>t);)n+=1;return this.keysIndex!==n&&(this.keysIndex=n),this.data.d.k[this.keysIndex].s},Re.prototype.buildFinalText=function(e){for(var t=[],n=0,i=e.length,s,a,m=!1;n<i;)s=e.charCodeAt(n),Q.isCombinedCharacter(s)?t[t.length-1]+=e.charAt(n):s>=55296&&s<=56319?(a=e.charCodeAt(n+1),a>=56320&&a<=57343?(m||Q.isModifier(s,a)?(t[t.length-1]+=e.substr(n,2),m=!1):t.push(e.substr(n,2)),n+=1):t.push(e.charAt(n))):s>56319?(a=e.charCodeAt(n+1),Q.isZeroWidthJoiner(s,a)?(m=!0,t[t.length-1]+=e.substr(n,2),n+=1):t.push(e.charAt(n))):Q.isZeroWidthJoiner(s)?(t[t.length-1]+=e.charAt(n),m=!0):t.push(e.charAt(n)),n+=1;return t},Re.prototype.completeTextData=function(e){e.__complete=!0;var t=this.elem.globalData.fontManager,n=this.data,i=[],s,a,m,x=0,v,L=n.m.g,k=0,_=0,w=0,C=[],M=0,A=0,b,d,l=t.getFontByName(e.f),o,r=0,h=ie(l);e.fWeight=h.weight,e.fStyle=h.style,e.finalSize=e.s,e.finalText=this.buildFinalText(e.t),a=e.finalText.length,e.finalLineHeight=e.lh;var f=e.tr/1e3*e.finalSize,c;if(e.sz)for(var y=!0,z=e.sz[0],N=e.sz[1],W,B;y;){B=this.buildFinalText(e.t),W=0,M=0,a=B.length,f=e.tr/1e3*e.finalSize;var P=-1;for(s=0;s<a;s+=1)c=B[s].charCodeAt(0),m=!1,B[s]===" "?P=s:(c===13||c===3)&&(M=0,m=!0,W+=e.finalLineHeight||e.finalSize*1.2),t.chars?(o=t.getCharData(B[s],l.fStyle,l.fFamily),r=m?0:o.w*e.finalSize/100):r=t.measureText(B[s],e.f,e.finalSize),M+r>z&&B[s]!==" "?(P===-1?a+=1:s=P,W+=e.finalLineHeight||e.finalSize*1.2,B.splice(s,P===s?1:0,"\r"),P=-1,M=0):(M+=r,M+=f);W+=l.ascent*e.finalSize/100,this.canResize&&e.finalSize>this.minimumFontSize&&N<W?(e.finalSize-=1,e.finalLineHeight=e.finalSize*e.lh/e.s):(e.finalText=B,a=e.finalText.length,y=!1)}M=-f,r=0;var O=0,F;for(s=0;s<a;s+=1)if(m=!1,F=e.finalText[s],c=F.charCodeAt(0),c===13||c===3?(O=0,C.push(M),A=M>A?M:A,M=-2*f,v="",m=!0,w+=1):v=F,t.chars?(o=t.getCharData(F,l.fStyle,t.getFontByName(e.f).fFamily),r=m?0:o.w*e.finalSize/100):r=t.measureText(v,e.f,e.finalSize),F===" "?O+=r+f:(M+=r+f+O,O=0),i.push({l:r,an:r,add:k,n:m,anIndexes:[],val:v,line:w,animatorJustifyOffset:0}),L==2){if(k+=r,v===""||v===" "||s===a-1){for((v===""||v===" ")&&(k-=r);_<=s;)i[_].an=k,i[_].ind=x,i[_].extra=r,_+=1;x+=1,k=0}}else if(L==3){if(k+=r,v===""||s===a-1){for(v===""&&(k-=r);_<=s;)i[_].an=k,i[_].ind=x,i[_].extra=r,_+=1;k=0,x+=1}}else i[x].ind=x,i[x].extra=0,x+=1;if(e.l=i,A=M>A?M:A,C.push(M),e.sz)e.boxWidth=e.sz[0],e.justifyOffset=0;else switch(e.boxWidth=A,e.j){case 1:e.justifyOffset=-e.boxWidth;break;case 2:e.justifyOffset=-e.boxWidth/2;break;default:e.justifyOffset=0}e.lineWidths=C;var u=n.a,p,g;d=u.length;var S,V,R=[];for(b=0;b<d;b+=1){for(p=u[b],p.a.sc&&(e.strokeColorAnim=!0),p.a.sw&&(e.strokeWidthAnim=!0),(p.a.fc||p.a.fh||p.a.fs||p.a.fb)&&(e.fillColorAnim=!0),V=0,S=p.s.b,s=0;s<a;s+=1)g=i[s],g.anIndexes[b]=V,(S==1&&g.val!==""||S==2&&g.val!==""&&g.val!==" "||S==3&&(g.n||g.val==" "||s==a-1)||S==4&&(g.n||s==a-1))&&(p.s.rn===1&&R.push(V),V+=1);n.a[b].s.totalChars=V;var X=-1,ae;if(p.s.rn===1)for(s=0;s<a;s+=1)g=i[s],X!=g.anIndexes[b]&&(X=g.anIndexes[b],ae=R.splice(Math.floor(Math.random()*R.length),1)[0]),g.anIndexes[b]=ae}e.yOffset=e.finalLineHeight||e.finalSize*1.2,e.ls=e.ls||0,e.ascent=l.ascent*e.finalSize/100},Re.prototype.updateDocumentData=function(e,t){t=t===void 0?this.keysIndex:t;var n=this.copyData({},this.data.d.k[t].s);n=this.copyData(n,e),this.data.d.k[t].s=n,this.recalculate(t),this.elem.addDynamicProperty(this)},Re.prototype.recalculate=function(e){var t=this.data.d.k[e].s;t.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(t)},Re.prototype.canResizeFont=function(e){this.canResize=e,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},Re.prototype.setMinimumFontSize=function(e){this.minimumFontSize=Math.floor(e)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var En=function(){var e=Math.max,t=Math.min,n=Math.floor;function i(a,m){this._currentTextLength=-1,this.k=!1,this.data=m,this.elem=a,this.comp=a.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(a),this.s=E.getProp(a,m.s||{k:0},0,0,this),"e"in m?this.e=E.getProp(a,m.e,0,0,this):this.e={v:100},this.o=E.getProp(a,m.o||{k:0},0,0,this),this.xe=E.getProp(a,m.xe||{k:0},0,0,this),this.ne=E.getProp(a,m.ne||{k:0},0,0,this),this.sm=E.getProp(a,m.sm||{k:100},0,0,this),this.a=E.getProp(a,m.a,0,.01,this),this.dynamicProperties.length||this.getValue()}i.prototype={getMult:function(a){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var m=0,x=0,v=1,L=1;this.ne.v>0?m=this.ne.v/100:x=-this.ne.v/100,this.xe.v>0?v=1-this.xe.v/100:L=1+this.xe.v/100;var k=I.getBezierEasing(m,x,v,L).get,_=0,w=this.finalS,C=this.finalE,M=this.data.sh;if(M===2)C===w?_=a>=C?1:0:_=e(0,t(.5/(C-w)+(a-w)/(C-w),1)),_=k(_);else if(M===3)C===w?_=a>=C?0:1:_=1-e(0,t(.5/(C-w)+(a-w)/(C-w),1)),_=k(_);else if(M===4)C===w?_=0:(_=e(0,t(.5/(C-w)+(a-w)/(C-w),1)),_<.5?_*=2:_=1-2*(_-.5)),_=k(_);else if(M===5){if(C===w)_=0;else{var A=C-w;a=t(e(0,a+.5-w),C-w);var b=-A/2+a,d=A/2;_=Math.sqrt(1-b*b/(d*d))}_=k(_)}else M===6?(C===w?_=0:(a=t(e(0,a+.5-w),C-w),_=(1+Math.cos(Math.PI+Math.PI*2*a/(C-w)))/2),_=k(_)):(a>=n(w)&&(a-w<0?_=e(0,t(t(C,1)-(w-a),1)):_=e(0,t(C-a,1))),_=k(_));if(this.sm.v!==100){var l=this.sm.v*.01;l===0&&(l=1e-8);var o=.5-l*.5;_<o?_=0:(_=(_-o)/l,_>1&&(_=1))}return _*this.a.v},getValue:function(a){this.iterateDynamicProperties(),this._mdf=a||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,a&&this.data.r===2&&(this.e.v=this._currentTextLength);var m=this.data.r===2?1:100/this.data.totalChars,x=this.o.v/m,v=this.s.v/m+x,L=this.e.v/m+x;if(v>L){var k=v;v=L,L=k}this.finalS=v,this.finalE=L}},T([we],i);function s(a,m,x){return new i(a,m)}return{getTextSelectorProp:s}}(),Ut=function(){return function(e,t,n){var i=0,s=e,a=he(s),m={newElement:x,release:v};function x(){var L;return i?(i-=1,L=a[i]):L=t(),L}function v(L){i===s&&(a=nn.double(a),s*=2),n&&n(L),a[i]=L,i+=1}return m}}(),nn=function(){function e(t){return t.concat(he(t.length))}return{double:e}}(),Et=function(){function e(){return me("float32",2)}return Ut(8,e)}(),Be=function(){function e(){return new H}function t(s){var a=s._length,m;for(m=0;m<a;m+=1)Et.release(s.v[m]),Et.release(s.i[m]),Et.release(s.o[m]),s.v[m]=null,s.i[m]=null,s.o[m]=null;s._length=0,s.c=!1}function n(s){var a=i.newElement(),m,x=s._length===void 0?s.v.length:s._length;for(a.setLength(x),a.c=s.c,m=0;m<x;m+=1)a.setTripleAt(s.v[m][0],s.v[m][1],s.o[m][0],s.o[m][1],s.i[m][0],s.i[m][1],m);return a}var i=Ut(4,e,t);return i.clone=n,i}(),Ot=function(){var e={newShapeCollection:s,release:a},t=0,n=4,i=he(n);function s(){var m;return t?(t-=1,m=i[t]):m=new pt,m}function a(m){var x,v=m._length;for(x=0;x<v;x+=1)Be.release(m.shapes[x]);m._length=0,t===n&&(i=nn.double(i),n*=2),i[t]=m,t+=1}return e}(),an=function(){function e(){return{lengths:[],totalLength:0}}function t(n){var i,s=n.lengths.length;for(i=0;i<s;i+=1)rn.release(n.lengths[i]);n.lengths.length=0}return Ut(8,e,t)}(),rn=function(){function e(){return{addedLength:0,percents:me("float32",Pe),lengths:me("float32",Pe)}}return Ut(8,e)}(),Mn=function(){function e(t){for(var n=t.split(`\r
`),i={},s,a=0,m=0;m<n.length;m+=1)s=n[m].split(":"),s.length===2&&(i[s[0]]=s[1].trim(),a+=1);if(a===0)throw new Error;return i}return function(t){for(var n=[],i=0;i<t.length;i+=1){var s=t[i],a={time:s.tm,duration:s.dr};try{a.payload=JSON.parse(t[i].cm)}catch{try{a.payload=e(t[i].cm)}catch{a.payload={name:t[i]}}}n.push(a)}return n}}();function Ne(){}Ne.prototype.checkLayers=function(e){var t,n=this.layers.length,i;for(this.completeLayers=!0,t=n-1;t>=0;t-=1)this.elements[t]||(i=this.layers[t],i.ip-i.st<=e-this.layers[t].st&&i.op-i.st>e-this.layers[t].st&&this.buildItem(t)),this.completeLayers=this.elements[t]?this.completeLayers:!1;this.checkPendingElements()},Ne.prototype.createItem=function(e){switch(e.ty){case 2:return this.createImage(e);case 0:return this.createComp(e);case 1:return this.createSolid(e);case 3:return this.createNull(e);case 4:return this.createShape(e);case 5:return this.createText(e);case 6:return this.createAudio(e);case 13:return this.createCamera(e);case 15:return this.createFootage(e);default:return this.createNull(e)}},Ne.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Ne.prototype.createAudio=function(e){return new We(e,this.globalData,this)},Ne.prototype.createFootage=function(e){return new FootageElement(e,this.globalData,this)},Ne.prototype.buildAllItems=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.buildItem(e);this.checkPendingElements()},Ne.prototype.includeLayers=function(e){this.completeLayers=!1;var t,n=e.length,i,s=this.layers.length;for(t=0;t<n;t+=1)for(i=0;i<s;){if(this.layers[i].id===e[t].id){this.layers[i]=e[t];break}i+=1}},Ne.prototype.setProjectInterface=function(e){this.globalData.projectInterface=e},Ne.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Ne.prototype.buildElementParenting=function(e,t,n){for(var i=this.elements,s=this.layers,a=0,m=s.length;a<m;)s[a].ind==t&&(!i[a]||i[a]===!0?(this.buildItem(a),this.addPendingElement(e)):(n.push(i[a]),i[a].setAsParent(),s[a].parent!==void 0?this.buildElementParenting(e,s[a].parent,n):e.setHierarchy(n))),a+=1},Ne.prototype.addPendingElement=function(e){this.pendingElements.push(e)},Ne.prototype.searchExtraCompositions=function(e){var t,n=e.length;for(t=0;t<n;t+=1)if(e[t].xt){var i=this.createComp(e[t]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},Ne.prototype.setupGlobalData=function(e,t){this.globalData.fontManager=new Q,this.globalData.fontManager.addChars(e.chars),this.globalData.fontManager.addFonts(e.fonts,t),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=e.fr,this.globalData.nm=e.nm,this.globalData.compSize={w:e.w,h:e.h}};function ke(e,t){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.svgElement=K("svg");var n="";if(t&&t.title){var i=K("title"),s=ge();i.setAttribute("id",s),i.textContent=t.title,this.svgElement.appendChild(i),n+=s}if(t&&t.description){var a=K("desc"),m=ge();a.setAttribute("id",m),a.textContent=t.description,this.svgElement.appendChild(a),n+=" "+m}n&&this.svgElement.setAttribute("aria-labelledby",n);var x=K("defs");this.svgElement.appendChild(x);var v=K("g");this.svgElement.appendChild(v),this.layerElement=v,this.renderConfig={preserveAspectRatio:t&&t.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:t&&t.contentVisibility||"visible",progressiveLoad:t&&t.progressiveLoad||!1,hideOnTransparent:!(t&&t.hideOnTransparent===!1),viewBoxOnly:t&&t.viewBoxOnly||!1,viewBoxSize:t&&t.viewBoxSize||!1,className:t&&t.className||"",id:t&&t.id||"",focusable:t&&t.focusable,filterSize:{width:t&&t.filterSize&&t.filterSize.width||"100%",height:t&&t.filterSize&&t.filterSize.height||"100%",x:t&&t.filterSize&&t.filterSize.x||"0%",y:t&&t.filterSize&&t.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:x,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}T([Ne],ke),ke.prototype.createNull=function(e){return new vt(e,this.globalData,this)},ke.prototype.createShape=function(e){return new _e(e,this.globalData,this)},ke.prototype.createText=function(e){return new Tt(e,this.globalData,this)},ke.prototype.createImage=function(e){return new Zt(e,this.globalData,this)},ke.prototype.createComp=function(e){return new cn(e,this.globalData,this)},ke.prototype.createSolid=function(e){return new Jt(e,this.globalData,this)},ke.prototype.configAnimation=function(e){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+e.w+" "+e.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",e.w),this.svgElement.setAttribute("height",e.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var t=this.globalData.defs;this.setupGlobalData(e,t),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=e;var n=K("clipPath"),i=K("rect");i.setAttribute("width",e.w),i.setAttribute("height",e.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=ge();n.setAttribute("id",s),n.appendChild(i),this.layerElement.setAttribute("clip-path","url("+pe+"#"+s+")"),t.appendChild(n),this.layers=e.layers,this.elements=he(e.layers.length)},ke.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e,t=this.layers?this.layers.length:0;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},ke.prototype.updateContainerSize=function(){},ke.prototype.buildItem=function(e){var t=this.elements;if(!(t[e]||this.layers[e].ty===99)){t[e]=!0;var n=this.createItem(this.layers[e]);t[e]=n,de&&(this.layers[e].ty===0&&this.globalData.projectInterface.registerComposition(n),n.initExpressions()),this.appendElementInPos(n,e),this.layers[e].tt&&(!this.elements[e-1]||this.elements[e-1]===!0?(this.buildItem(e-1),this.addPendingElement(n)):n.setMatte(t[e-1].layerId))}},ke.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();if(e.checkParenting(),e.data.tt)for(var t=0,n=this.elements.length;t<n;){if(this.elements[t]===e){e.setMatte(this.elements[t-1].layerId);break}t+=1}}},ke.prototype.renderFrame=function(e){if(!(this.renderedFrame===e||this.destroyed)){e===null?e=this.renderedFrame:this.renderedFrame=e,this.globalData.frameNum=e,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=e,this.globalData._mdf=!1;var t,n=this.layers.length;for(this.completeLayers||this.checkLayers(e),t=n-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].prepareFrame(e-this.layers[t].st);if(this.globalData._mdf)for(t=0;t<n;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()}},ke.prototype.appendElementInPos=function(e,t){var n=e.getBaseElement();if(n){for(var i=0,s;i<t;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(n,s):this.layerElement.appendChild(n)}},ke.prototype.hide=function(){this.layerElement.style.display="none"},ke.prototype.show=function(){this.layerElement.style.display="block"};function Mt(e,t,n){this.data=e,this.element=t,this.globalData=n,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i=this.globalData.defs,s,a=this.masksProperties?this.masksProperties.length:0;this.viewData=he(a),this.solidPath="";var m,x=this.masksProperties,v=0,L=[],k,_,w=ge(),C,M,A,b,d="clipPath",l="clip-path";for(s=0;s<a;s+=1)if((x[s].mode!=="a"&&x[s].mode!=="n"||x[s].inv||x[s].o.k!==100||x[s].o.x)&&(d="mask",l="mask"),(x[s].mode==="s"||x[s].mode==="i")&&v===0?(C=K("rect"),C.setAttribute("fill","#ffffff"),C.setAttribute("width",this.element.comp.data.w||0),C.setAttribute("height",this.element.comp.data.h||0),L.push(C)):C=null,m=K("path"),x[s].mode==="n")this.viewData[s]={op:E.getProp(this.element,x[s].o,0,.01,this.element),prop:U.getShapeProp(this.element,x[s],3),elem:m,lastPath:""},i.appendChild(m);else{v+=1,m.setAttribute("fill",x[s].mode==="s"?"#000000":"#ffffff"),m.setAttribute("clip-rule","nonzero");var o;if(x[s].x.k!==0?(d="mask",l="mask",b=E.getProp(this.element,x[s].x,0,null,this.element),o=ge(),M=K("filter"),M.setAttribute("id",o),A=K("feMorphology"),A.setAttribute("operator","erode"),A.setAttribute("in","SourceGraphic"),A.setAttribute("radius","0"),M.appendChild(A),i.appendChild(M),m.setAttribute("stroke",x[s].mode==="s"?"#000000":"#ffffff")):(A=null,b=null),this.storedData[s]={elem:m,x:b,expan:A,lastPath:"",lastOperator:"",filterId:o,lastRadius:0},x[s].mode==="i"){_=L.length;var r=K("g");for(k=0;k<_;k+=1)r.appendChild(L[k]);var h=K("mask");h.setAttribute("mask-type","alpha"),h.setAttribute("id",w+"_"+v),h.appendChild(m),i.appendChild(h),r.setAttribute("mask","url("+pe+"#"+w+"_"+v+")"),L.length=0,L.push(r)}else L.push(m);x[s].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[s]={elem:m,lastPath:"",op:E.getProp(this.element,x[s].o,0,.01,this.element),prop:U.getShapeProp(this.element,x[s],3),invRect:C},this.viewData[s].prop.k||this.drawPath(x[s],this.viewData[s].prop.v,this.viewData[s])}for(this.maskElement=K(d),a=L.length,s=0;s<a;s+=1)this.maskElement.appendChild(L[s]);v>0&&(this.maskElement.setAttribute("id",w),this.element.maskedElement.setAttribute(l,"url("+pe+"#"+w+")"),i.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Mt.prototype.getMaskProperty=function(e){return this.viewData[e].prop},Mt.prototype.renderFrame=function(e){var t=this.element.finalTransform.mat,n,i=this.masksProperties.length;for(n=0;n<i;n+=1)if((this.viewData[n].prop._mdf||e)&&this.drawPath(this.masksProperties[n],this.viewData[n].prop.v,this.viewData[n]),(this.viewData[n].op._mdf||e)&&this.viewData[n].elem.setAttribute("fill-opacity",this.viewData[n].op.v),this.masksProperties[n].mode!=="n"&&(this.viewData[n].invRect&&(this.element.finalTransform.mProp._mdf||e)&&this.viewData[n].invRect.setAttribute("transform",t.getInverseMatrix().to2dCSS()),this.storedData[n].x&&(this.storedData[n].x._mdf||e))){var s=this.storedData[n].expan;this.storedData[n].x.v<0?(this.storedData[n].lastOperator!=="erode"&&(this.storedData[n].lastOperator="erode",this.storedData[n].elem.setAttribute("filter","url("+pe+"#"+this.storedData[n].filterId+")")),s.setAttribute("radius",-this.storedData[n].x.v)):(this.storedData[n].lastOperator!=="dilate"&&(this.storedData[n].lastOperator="dilate",this.storedData[n].elem.setAttribute("filter",null)),this.storedData[n].elem.setAttribute("stroke-width",this.storedData[n].x.v*2))}},Mt.prototype.getMaskelement=function(){return this.maskElement},Mt.prototype.createLayerSolidPath=function(){var e="M0,0 ";return e+=" h"+this.globalData.compSize.w,e+=" v"+this.globalData.compSize.h,e+=" h-"+this.globalData.compSize.w,e+=" v-"+this.globalData.compSize.h+" ",e},Mt.prototype.drawPath=function(e,t,n){var i=" M"+t.v[0][0]+","+t.v[0][1],s,a;for(a=t._length,s=1;s<a;s+=1)i+=" C"+t.o[s-1][0]+","+t.o[s-1][1]+" "+t.i[s][0]+","+t.i[s][1]+" "+t.v[s][0]+","+t.v[s][1];if(t.c&&a>1&&(i+=" C"+t.o[s-1][0]+","+t.o[s-1][1]+" "+t.i[0][0]+","+t.i[0][1]+" "+t.v[0][0]+","+t.v[0][1]),n.lastPath!==i){var m="";n.elem&&(t.c&&(m=e.inv?this.solidPath+i:i),n.elem.setAttribute("d",m)),n.lastPath=i}},Mt.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};function Bt(){}Bt.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function St(){}St.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,t){var n,i=this.dynamicProperties.length;for(n=0;n<i;n+=1)(t||this._isParent&&this.dynamicProperties[n].propType==="transform")&&(this.dynamicProperties[n].getValue(),this.dynamicProperties[n]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function Nt(){}Nt.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?D.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new ye},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,t=this.finalTransform.mat,n=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;n<i;){if(this.hierarchy[n].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}n+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,t.cloneFromProps(e),n=0;n<i;n+=1)e=this.hierarchy[n].finalTransform.mProp.v.props,t.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}},globalToLocal:function(e){var t=[];t.push(this.finalTransform);for(var n=!0,i=this.comp;n;)i.finalTransform?(i.data.hasMask&&t.splice(0,0,i.finalTransform),i=i.comp):n=!1;var s,a=t.length,m;for(s=0;s<a;s+=1)m=t[s].mat.applyToPointArray(0,0,0),e=[e[0]-m[0],e[1]-m[1],0];return e},mHelper:new ye};function Kt(){}Kt.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,t=this.renderableComponents.length;for(e=0;e<t;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};function Ht(){}(function(){var e={initElement:function(t,n,i){this.initFrame(),this.initBaseData(t,n,i),this.initTransform(t,n,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var t=this.baseElement||this.layerElement;t.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var t=this.baseElement||this.layerElement;t.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};T([Kt,j(e)],Ht)})();function Sn(e,t){this.elem=e,this.pos=t}function sn(e,t){this.data=e,this.type=e.ty,this.d="",this.lvl=t,this._mdf=!1,this.closed=e.hd===!0,this.pElem=K("path"),this.msElem=null}sn.prototype.reset=function(){this.d="",this._mdf=!1};function on(e,t,n){this.caches=[],this.styles=[],this.transformers=e,this.lStr="",this.sh=n,this.lvl=t,this._isAnimated=!!n.k;for(var i=0,s=e.length;i<s;){if(e[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}on.prototype.setAsAnimated=function(){this._isAnimated=!0};function Pn(e,t,n){this.transform={mProps:e,op:t,container:n},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function ln(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=E.getProp(e,t.o,0,.01,this),this.w=E.getProp(e,t.w,0,null,this),this.d=new At(e,t.d||{},"svg",this),this.c=E.getProp(e,t.c,1,255,this),this.style=n,this._isAnimated=!!this._isAnimated}T([we],ln);function hn(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=E.getProp(e,t.o,0,.01,this),this.c=E.getProp(e,t.c,1,255,this),this.style=n}T([we],hn);function Wt(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.initGradientData(e,t,n)}Wt.prototype.initGradientData=function(e,t,n){this.o=E.getProp(e,t.o,0,.01,this),this.s=E.getProp(e,t.s,1,null,this),this.e=E.getProp(e,t.e,1,null,this),this.h=E.getProp(e,t.h||{k:0},0,.01,this),this.a=E.getProp(e,t.a||{k:0},0,oe,this),this.g=new Dt(e,t.g,this),this.style=n,this.stops=[],this.setGradientData(n.pElem,t),this.setGradientOpacity(t,n),this._isAnimated=!!this._isAnimated},Wt.prototype.setGradientData=function(e,t){var n=ge(),i=K(t.t===1?"linearGradient":"radialGradient");i.setAttribute("id",n),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s=[],a,m,x;for(x=t.g.p*4,m=0;m<x;m+=4)a=K("stop"),i.appendChild(a),s.push(a);e.setAttribute(t.ty==="gf"?"fill":"stroke","url("+pe+"#"+n+")"),this.gf=i,this.cst=s},Wt.prototype.setGradientOpacity=function(e,t){if(this.g._hasOpacity&&!this.g._collapsable){var n,i,s,a=K("mask"),m=K("path");a.appendChild(m);var x=ge(),v=ge();a.setAttribute("id",v);var L=K(e.t===1?"linearGradient":"radialGradient");L.setAttribute("id",x),L.setAttribute("spreadMethod","pad"),L.setAttribute("gradientUnits","userSpaceOnUse"),s=e.g.k.k[0].s?e.g.k.k[0].s.length:e.g.k.k.length;var k=this.stops;for(i=e.g.p*4;i<s;i+=2)n=K("stop"),n.setAttribute("stop-color","rgb(255,255,255)"),L.appendChild(n),k.push(n);m.setAttribute(e.ty==="gf"?"fill":"stroke","url("+pe+"#"+x+")"),e.ty==="gs"&&(m.setAttribute("stroke-linecap",rt[e.lc||2]),m.setAttribute("stroke-linejoin",Vt[e.lj||2]),e.lj===1&&m.setAttribute("stroke-miterlimit",e.ml)),this.of=L,this.ms=a,this.ost=k,this.maskId=v,t.msElem=m}},T([we],Wt);function pn(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.w=E.getProp(e,t.w,0,null,this),this.d=new At(e,t.d||{},"svg",this),this.initGradientData(e,t,n),this._isAnimated=!!this._isAnimated}T([Wt,we],pn);function Tn(){this.it=[],this.prevViewData=[],this.gr=K("g")}var In=function(){var e=new ye,t=new ye,n={createRenderFunction:i};function i(k){switch(k.ty){case"fl":return m;case"gf":return v;case"gs":return x;case"st":return L;case"sh":case"el":case"rc":case"sr":return a;case"tr":return s;default:return null}}function s(k,_,w){(w||_.transform.op._mdf)&&_.transform.container.setAttribute("opacity",_.transform.op.v),(w||_.transform.mProps._mdf)&&_.transform.container.setAttribute("transform",_.transform.mProps.v.to2dCSS())}function a(k,_,w){var C,M,A,b,d,l,o=_.styles.length,r=_.lvl,h,f,c,y,z;for(l=0;l<o;l+=1){if(b=_.sh._mdf||w,_.styles[l].lvl<r){for(f=t.reset(),y=r-_.styles[l].lvl,z=_.transformers.length-1;!b&&y>0;)b=_.transformers[z].mProps._mdf||b,y-=1,z-=1;if(b)for(y=r-_.styles[l].lvl,z=_.transformers.length-1;y>0;)c=_.transformers[z].mProps.v.props,f.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),y-=1,z-=1}else f=e;if(h=_.sh.paths,M=h._length,b){for(A="",C=0;C<M;C+=1)d=h.shapes[C],d&&d._length&&(A+=en(d,d._length,d.c,f));_.caches[l]=A}else A=_.caches[l];_.styles[l].d+=k.hd===!0?"":A,_.styles[l]._mdf=b||_.styles[l]._mdf}}function m(k,_,w){var C=_.style;(_.c._mdf||w)&&C.pElem.setAttribute("fill","rgb("+Ge(_.c.v[0])+","+Ge(_.c.v[1])+","+Ge(_.c.v[2])+")"),(_.o._mdf||w)&&C.pElem.setAttribute("fill-opacity",_.o.v)}function x(k,_,w){v(k,_,w),L(k,_,w)}function v(k,_,w){var C=_.gf,M=_.g._hasOpacity,A=_.s.v,b=_.e.v;if(_.o._mdf||w){var d=k.ty==="gf"?"fill-opacity":"stroke-opacity";_.style.pElem.setAttribute(d,_.o.v)}if(_.s._mdf||w){var l=k.t===1?"x1":"cx",o=l==="x1"?"y1":"cy";C.setAttribute(l,A[0]),C.setAttribute(o,A[1]),M&&!_.g._collapsable&&(_.of.setAttribute(l,A[0]),_.of.setAttribute(o,A[1]))}var r,h,f,c;if(_.g._cmdf||w){r=_.cst;var y=_.g.c;for(f=r.length,h=0;h<f;h+=1)c=r[h],c.setAttribute("offset",y[h*4]+"%"),c.setAttribute("stop-color","rgb("+y[h*4+1]+","+y[h*4+2]+","+y[h*4+3]+")")}if(M&&(_.g._omdf||w)){var z=_.g.o;for(_.g._collapsable?r=_.cst:r=_.ost,f=r.length,h=0;h<f;h+=1)c=r[h],_.g._collapsable||c.setAttribute("offset",z[h*2]+"%"),c.setAttribute("stop-opacity",z[h*2+1])}if(k.t===1)(_.e._mdf||w)&&(C.setAttribute("x2",b[0]),C.setAttribute("y2",b[1]),M&&!_.g._collapsable&&(_.of.setAttribute("x2",b[0]),_.of.setAttribute("y2",b[1])));else{var N;if((_.s._mdf||_.e._mdf||w)&&(N=Math.sqrt(Math.pow(A[0]-b[0],2)+Math.pow(A[1]-b[1],2)),C.setAttribute("r",N),M&&!_.g._collapsable&&_.of.setAttribute("r",N)),_.e._mdf||_.h._mdf||_.a._mdf||w){N||(N=Math.sqrt(Math.pow(A[0]-b[0],2)+Math.pow(A[1]-b[1],2)));var W=Math.atan2(b[1]-A[1],b[0]-A[0]),B=_.h.v;B>=1?B=.99:B<=-1&&(B=-.99);var P=N*B,O=Math.cos(W+_.a.v)*P+A[0],F=Math.sin(W+_.a.v)*P+A[1];C.setAttribute("fx",O),C.setAttribute("fy",F),M&&!_.g._collapsable&&(_.of.setAttribute("fx",O),_.of.setAttribute("fy",F))}}}function L(k,_,w){var C=_.style,M=_.d;M&&(M._mdf||w)&&M.dashStr&&(C.pElem.setAttribute("stroke-dasharray",M.dashStr),C.pElem.setAttribute("stroke-dashoffset",M.dashoffset[0])),_.c&&(_.c._mdf||w)&&C.pElem.setAttribute("stroke","rgb("+Ge(_.c.v[0])+","+Ge(_.c.v[1])+","+Ge(_.c.v[2])+")"),(_.o._mdf||w)&&C.pElem.setAttribute("stroke-opacity",_.o.v),(_.w._mdf||w)&&(C.pElem.setAttribute("stroke-width",_.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",_.w.v))}return n}();function Pt(){}Pt.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,t=this.data.masksProperties.length;e<t;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var e=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(e),this.data.ty===0||this.data.xt?this.compInterface=CompExpressionInterface(this):this.data.ty===4?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var e=at(this.data.bm),t=this.baseElement||this.layerElement;t.style["mix-blend-mode"]=e},initBaseData:function(e,t,n){this.globalData=t,this.comp=n,this.data=e,this.layerId=ge(),this.data.sr||(this.data.sr=1),this.effectsManager=new Rn(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function vt(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initFrame(),this.initTransform(e,t,n),this.initHierarchy()}vt.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},vt.prototype.renderFrame=function(){},vt.prototype.getBaseElement=function(){return null},vt.prototype.destroy=function(){},vt.prototype.sourceRectAtTime=function(){},vt.prototype.hide=function(){},T([Pt,Nt,Bt,St],vt);function jt(){}jt.prototype={initRendererElement:function(){this.layerElement=K("g")},createContainerElements:function(){this.matteElement=K("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null,t,n,i;if(this.data.td){if(this.data.td==3||this.data.td==1){var s=K("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",this.data.td==3?"luminance":"alpha"),s.appendChild(this.layerElement),e=s,this.globalData.defs.appendChild(s),!tn.maskType&&this.data.td==1&&(s.setAttribute("mask-type","luminance"),t=ge(),n=Gt.createFilter(t),this.globalData.defs.appendChild(n),n.appendChild(Gt.createAlphaToLuminanceFilter()),i=K("g"),i.appendChild(this.layerElement),e=i,s.appendChild(i),i.setAttribute("filter","url("+pe+"#"+t+")"))}else if(this.data.td==2){var a=K("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var m=K("g");a.appendChild(m),t=ge(),n=Gt.createFilter(t);var x=K("feComponentTransfer");x.setAttribute("in","SourceGraphic"),n.appendChild(x);var v=K("feFuncA");v.setAttribute("type","table"),v.setAttribute("tableValues","1.0 0.0"),x.appendChild(v),this.globalData.defs.appendChild(n);var L=K("rect");L.setAttribute("width",this.comp.data.w),L.setAttribute("height",this.comp.data.h),L.setAttribute("x","0"),L.setAttribute("y","0"),L.setAttribute("fill","#ffffff"),L.setAttribute("opacity","0"),m.setAttribute("filter","url("+pe+"#"+t+")"),m.appendChild(L),m.appendChild(this.layerElement),e=m,tn.maskType||(a.setAttribute("mask-type","luminance"),n.appendChild(Gt.createAlphaToLuminanceFilter()),i=K("g"),m.appendChild(L),i.appendChild(this.layerElement),e=i,m.appendChild(i)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var k=K("clipPath"),_=K("path");_.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var w=ge();if(k.setAttribute("id",w),k.appendChild(_),this.globalData.defs.appendChild(k),this.checkMasks()){var C=K("g");C.setAttribute("clip-path","url("+pe+"#"+w+")"),C.appendChild(this.layerElement),this.transformedElement=C,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+pe+"#"+w+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Mt(this.data,this,this.globalData),this.renderableEffectsManager=new Fn},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+pe+"#"+e+")")}};function dn(){}dn.prototype={addShapeToModifiers:function(e){var t,n=this.shapeModifiers.length;for(t=0;t<n;t+=1)this.shapeModifiers[t].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var t=0,n=this.shapeModifiers.length;t<n;)if(this.shapeModifiers[t].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,t=this.shapes.length;for(e=0;e<t;e+=1)this.shapes[e].sh.reset();t=this.shapeModifiers.length;var n;for(e=t-1;e>=0&&(n=this.shapeModifiers[e].processShapes(this._isFirstFrame),!n);e-=1);}},searchProcessedElement:function(e){for(var t=this.processedElements,n=0,i=t.length;n<i;){if(t[n].elem===e)return t[n].pos;n+=1}return 0},addProcessedElement:function(e,t){for(var n=this.processedElements,i=n.length;i;)if(i-=1,n[i].elem===e){n[i].pos=t;return}n.push(new Sn(e,t))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};function Qe(){}Qe.prototype.initElement=function(e,t,n){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(e,t,n),this.textProperty=new Re(this,e.t,this.dynamicProperties),this.textAnimator=new Lt(e.t,this.renderType,this),this.initTransform(e,t,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Qe.prototype.prepareFrame=function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},Qe.prototype.createPathShape=function(e,t){var n,i=t.length,s,a="";for(n=0;n<i;n+=1)s=t[n].ks.k,a+=en(s,s.i.length,!0,e);return a},Qe.prototype.updateDocumentData=function(e,t){this.textProperty.updateDocumentData(e,t)},Qe.prototype.canResizeFont=function(e){this.textProperty.canResizeFont(e)},Qe.prototype.setMinimumFontSize=function(e){this.textProperty.setMinimumFontSize(e)},Qe.prototype.applyTextPropertiesToMatrix=function(e,t,n,i,s){switch(e.ps&&t.translate(e.ps[0],e.ps[1]+e.ascent,0),t.translate(0,-e.ls,0),e.j){case 1:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[n]),0,0);break;case 2:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[n])/2,0,0);break}t.translate(i,s,0)},Qe.prototype.buildColor=function(e){return"rgb("+Math.round(e[0]*255)+","+Math.round(e[1]*255)+","+Math.round(e[2]*255)+")"},Qe.prototype.emptyProp=new Yt,Qe.prototype.destroy=function(){};function dt(){}T([Pt,Nt,Bt,St,Ht],dt),dt.prototype.initElement=function(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initTransform(e,t,n),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!t.progressiveLoad)&&this.buildAllItems(),this.hide()},dt.prototype.prepareFrame=function(e){if(this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=e/this.data.sr;else{var t=this.tm.v;t===this.data.op&&(t=this.data.op-1),this.renderedFrame=t}var n,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),n=i-1;n>=0;n-=1)(this.completeLayers||this.elements[n])&&(this.elements[n].prepareFrame(this.renderedFrame-this.layers[n].st),this.elements[n]._mdf&&(this._mdf=!0))}},dt.prototype.renderInnerContent=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},dt.prototype.setElements=function(e){this.elements=e},dt.prototype.getElements=function(){return this.elements},dt.prototype.destroyElements=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy()},dt.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Zt(e,t,n){this.assetData=t.getAssetData(e.refId),this.initElement(e,t,n),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}T([Pt,Nt,jt,Bt,St,Ht],Zt),Zt.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData);this.innerElem=K("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.innerElem)},Zt.prototype.sourceRectAtTime=function(){return this.sourceRect};function Jt(e,t,n){this.initElement(e,t,n)}T([Zt],Jt),Jt.prototype.createContent=function(){var e=K("rect");e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.layerElement.appendChild(e)};function We(e,t,n){this.initFrame(),this.initRenderable(),this.assetData=t.getAssetData(e.refId),this.initBaseData(e,t,n),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=e.tm?E.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}We.prototype.prepareFrame=function(e){if(this.prepareRenderableFrame(e,!0),this.prepareProperties(e,!0),this.tm._placeholder)this._currentTime=e/this.data.sr;else{var t=this.tm.v;this._currentTime=t}},T([Kt,Pt,St],We),We.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},We.prototype.show=function(){},We.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},We.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},We.prototype.resume=function(){this._canPlay=!0},We.prototype.setRate=function(e){this.audio.rate(e)},We.prototype.volume=function(e){this.audio.volume(e)},We.prototype.getBaseElement=function(){return null},We.prototype.destroy=function(){},We.prototype.sourceRectAtTime=function(){},We.prototype.initExpressions=function(){};function cn(e,t,n){this.layers=e.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?he(this.layers.length):[],this.initElement(e,t,n),this.tm=e.tm?E.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}T([ke,dt,jt],cn);function Tt(e,t,n){this.textSpans=[],this.renderType="svg",this.initElement(e,t,n)}T([Pt,Nt,jt,Bt,St,Ht,Qe],Tt),Tt.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=K("text"))},Tt.prototype.buildTextContents=function(e){for(var t=0,n=e.length,i=[],s="";t<n;)e[t]==="\r"||e[t]===""?(i.push(s),s=""):s+=e[t],t+=1;return i.push(s),i},Tt.prototype.buildNewText=function(){var e,t,n=this.textProperty.currentData;this.renderedLetters=he(n?n.l.length:0),n.fc?this.layerElement.setAttribute("fill",this.buildColor(n.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),n.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(n.sc)),this.layerElement.setAttribute("stroke-width",n.sw)),this.layerElement.setAttribute("font-size",n.finalSize);var i=this.globalData.fontManager.getFontByName(n.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=n.fWeight,a=n.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",n.t);var m=n.l||[],x=!!this.globalData.fontManager.chars;t=m.length;var v,L=this.mHelper,k,_="",w=this.data.singleShape,C=0,M=0,A=!0,b=n.tr*.001*n.finalSize;if(w&&!x&&!n.sz){var d=this.textContainer,l="start";switch(n.j){case 1:l="end";break;case 2:l="middle";break;default:l="start";break}d.setAttribute("text-anchor",l),d.setAttribute("letter-spacing",b);var o=this.buildTextContents(n.finalText);for(t=o.length,M=n.ps?n.ps[1]+n.ascent:0,e=0;e<t;e+=1)v=this.textSpans[e]||K("tspan"),v.textContent=o[e],v.setAttribute("x",0),v.setAttribute("y",M),v.style.display="inherit",d.appendChild(v),this.textSpans[e]=v,M+=n.finalLineHeight;this.layerElement.appendChild(d)}else{var r=this.textSpans.length,h,f;for(e=0;e<t;e+=1)(!x||!w||e===0)&&(v=r>e?this.textSpans[e]:K(x?"path":"text"),r<=e&&(v.setAttribute("stroke-linecap","butt"),v.setAttribute("stroke-linejoin","round"),v.setAttribute("stroke-miterlimit","4"),this.textSpans[e]=v,this.layerElement.appendChild(v)),v.style.display="inherit"),L.reset(),L.scale(n.finalSize/100,n.finalSize/100),w&&(m[e].n&&(C=-b,M+=n.yOffset,M+=A?1:0,A=!1),this.applyTextPropertiesToMatrix(n,L,m[e].line,C,M),C+=m[e].l||0,C+=b),x?(f=this.globalData.fontManager.getCharData(n.finalText[e],i.fStyle,this.globalData.fontManager.getFontByName(n.f).fFamily),h=f&&f.data||{},k=h.shapes?h.shapes[0].it:[],w?_+=this.createPathShape(L,k):v.setAttribute("d",this.createPathShape(L,k))):(w&&v.setAttribute("transform","translate("+L.props[12]+","+L.props[13]+")"),v.textContent=m[e].val,v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));w&&v&&v.setAttribute("d",_)}for(;e<this.textSpans.length;)this.textSpans[e].style.display="none",e+=1;this._sizeChanged=!0},Tt.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},Tt.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var e,t,n=this.textAnimator.renderedLetters,i=this.textProperty.currentData.l;t=i.length;var s,a;for(e=0;e<t;e+=1)i[e].n||(s=n[e],a=this.textSpans[e],s._mdf.m&&a.setAttribute("transform",s.m),s._mdf.o&&a.setAttribute("opacity",s.o),s._mdf.sw&&a.setAttribute("stroke-width",s.sw),s._mdf.sc&&a.setAttribute("stroke",s.sc),s._mdf.fc&&a.setAttribute("fill",s.fc))}};function _e(e,t,n){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(e,t,n),this.prevViewData=[]}T([Pt,Nt,jt,dn,Bt,St,Ht],_e),_e.prototype.initSecondaryElement=function(){},_e.prototype.identityMatrix=new ye,_e.prototype.buildExpressionInterface=function(){},_e.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},_e.prototype.filterUniqueShapes=function(){var e,t=this.shapes.length,n,i,s=this.stylesList.length,a,m=[],x=!1;for(i=0;i<s;i+=1){for(a=this.stylesList[i],x=!1,m.length=0,e=0;e<t;e+=1)n=this.shapes[e],n.styles.indexOf(a)!==-1&&(m.push(n),x=n._isAnimated||x);m.length>1&&x&&this.setShapesAsAnimated(m)}},_e.prototype.setShapesAsAnimated=function(e){var t,n=e.length;for(t=0;t<n;t+=1)e[t].setAsAnimated()},_e.prototype.createStyleElement=function(e,t){var n,i=new sn(e,t),s=i.pElem;if(e.ty==="st")n=new ln(this,e,i);else if(e.ty==="fl")n=new hn(this,e,i);else if(e.ty==="gf"||e.ty==="gs"){var a=e.ty==="gf"?Wt:pn;n=new a(this,e,i),this.globalData.defs.appendChild(n.gf),n.maskId&&(this.globalData.defs.appendChild(n.ms),this.globalData.defs.appendChild(n.of),s.setAttribute("mask","url("+pe+"#"+n.maskId+")"))}return(e.ty==="st"||e.ty==="gs")&&(s.setAttribute("stroke-linecap",rt[e.lc||2]),s.setAttribute("stroke-linejoin",Vt[e.lj||2]),s.setAttribute("fill-opacity","0"),e.lj===1&&s.setAttribute("stroke-miterlimit",e.ml)),e.r===2&&s.setAttribute("fill-rule","evenodd"),e.ln&&s.setAttribute("id",e.ln),e.cl&&s.setAttribute("class",e.cl),e.bm&&(s.style["mix-blend-mode"]=at(e.bm)),this.stylesList.push(i),this.addToAnimatedContents(e,n),n},_e.prototype.createGroupElement=function(e){var t=new Tn;return e.ln&&t.gr.setAttribute("id",e.ln),e.cl&&t.gr.setAttribute("class",e.cl),e.bm&&(t.gr.style["mix-blend-mode"]=at(e.bm)),t},_e.prototype.createTransformElement=function(e,t){var n=D.getTransformProperty(this,e,this),i=new Pn(n,n.o,t);return this.addToAnimatedContents(e,i),i},_e.prototype.createShapeElement=function(e,t,n){var i=4;e.ty==="rc"?i=5:e.ty==="el"?i=6:e.ty==="sr"&&(i=7);var s=U.getShapeProp(this,e,i,this),a=new on(t,n,s);return this.shapes.push(a),this.addShapeToModifiers(a),this.addToAnimatedContents(e,a),a},_e.prototype.addToAnimatedContents=function(e,t){for(var n=0,i=this.animatedContents.length;n<i;){if(this.animatedContents[n].element===t)return;n+=1}this.animatedContents.push({fn:In.createRenderFunction(e),element:t,data:e})},_e.prototype.setElementStyles=function(e){var t=e.styles,n,i=this.stylesList.length;for(n=0;n<i;n+=1)this.stylesList[n].closed||t.push(this.stylesList[n])},_e.prototype.reloadShapes=function(){this._isFirstFrame=!0;var e,t=this.itemsData.length;for(e=0;e<t;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),t=this.dynamicProperties.length,e=0;e<t;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers()},_e.prototype.searchShapes=function(e,t,n,i,s,a,m){var x=[].concat(a),v,L=e.length-1,k,_,w=[],C=[],M,A,b;for(v=L;v>=0;v-=1){if(b=this.searchProcessedElement(e[v]),b?t[v]=n[b-1]:e[v]._render=m,e[v].ty==="fl"||e[v].ty==="st"||e[v].ty==="gf"||e[v].ty==="gs")b?t[v].style.closed=!1:t[v]=this.createStyleElement(e[v],s),e[v]._render&&t[v].style.pElem.parentNode!==i&&i.appendChild(t[v].style.pElem),w.push(t[v].style);else if(e[v].ty==="gr"){if(!b)t[v]=this.createGroupElement(e[v]);else for(_=t[v].it.length,k=0;k<_;k+=1)t[v].prevViewData[k]=t[v].it[k];this.searchShapes(e[v].it,t[v].it,t[v].prevViewData,t[v].gr,s+1,x,m),e[v]._render&&t[v].gr.parentNode!==i&&i.appendChild(t[v].gr)}else e[v].ty==="tr"?(b||(t[v]=this.createTransformElement(e[v],i)),M=t[v].transform,x.push(M)):e[v].ty==="sh"||e[v].ty==="rc"||e[v].ty==="el"||e[v].ty==="sr"?(b||(t[v]=this.createShapeElement(e[v],x,s)),this.setElementStyles(t[v])):e[v].ty==="tm"||e[v].ty==="rd"||e[v].ty==="ms"||e[v].ty==="pb"?(b?(A=t[v],A.closed=!1):(A=ee.getModifier(e[v].ty),A.init(this,e[v]),t[v]=A,this.shapeModifiers.push(A)),C.push(A)):e[v].ty==="rp"&&(b?(A=t[v],A.closed=!0):(A=ee.getModifier(e[v].ty),t[v]=A,A.init(this,e,v,t),this.shapeModifiers.push(A),m=!1),C.push(A));this.addProcessedElement(e[v],v+1)}for(L=w.length,v=0;v<L;v+=1)w[v].closed=!0;for(L=C.length,v=0;v<L;v+=1)C[v].closed=!0},_e.prototype.renderInnerContent=function(){this.renderModifiers();var e,t=this.stylesList.length;for(e=0;e<t;e+=1)this.stylesList[e].reset();for(this.renderShape(),e=0;e<t;e+=1)(this.stylesList[e]._mdf||this._isFirstFrame)&&(this.stylesList[e].msElem&&(this.stylesList[e].msElem.setAttribute("d",this.stylesList[e].d),this.stylesList[e].d="M0 0"+this.stylesList[e].d),this.stylesList[e].pElem.setAttribute("d",this.stylesList[e].d||"M0 0"))},_e.prototype.renderShape=function(){var e,t=this.animatedContents.length,n;for(e=0;e<t;e+=1)n=this.animatedContents[e],(this._isFirstFrame||n.element._isAnimated)&&n.data!==!0&&n.fn(n.data,n.element,this._isFirstFrame)},_e.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function Fn(){}var Ae=function(){var e={},t=[],n=0,i=0,s=0,a=!0,m=!1;function x(u){for(var p=0,g=u.target;p<i;)t[p].animation===g&&(t.splice(p,1),p-=1,i-=1,g.isPaused||_()),p+=1}function v(u,p){if(!u)return null;for(var g=0;g<i;){if(t[g].elem===u&&t[g].elem!==null)return t[g].animation;g+=1}var S=new Y;return w(S,u),S.setData(u,p),S}function L(){var u,p=t.length,g=[];for(u=0;u<p;u+=1)g.push(t[u].animation);return g}function k(){s+=1,N()}function _(){s-=1}function w(u,p){u.addEventListener("destroy",x),u.addEventListener("_active",k),u.addEventListener("_idle",_),t.push({elem:p,animation:u}),i+=1}function C(u){var p=new Y;return w(p,null),p.setParams(u),p}function M(u,p){var g;for(g=0;g<i;g+=1)t[g].animation.setSpeed(u,p)}function A(u,p){var g;for(g=0;g<i;g+=1)t[g].animation.setDirection(u,p)}function b(u){var p;for(p=0;p<i;p+=1)t[p].animation.play(u)}function d(u){var p=u-n,g;for(g=0;g<i;g+=1)t[g].animation.advanceTime(p);n=u,s&&!m?re.requestAnimationFrame(d):a=!0}function l(u){n=u,re.requestAnimationFrame(d)}function o(u){var p;for(p=0;p<i;p+=1)t[p].animation.pause(u)}function r(u,p,g){var S;for(S=0;S<i;S+=1)t[S].animation.goToAndStop(u,p,g)}function h(u){var p;for(p=0;p<i;p+=1)t[p].animation.stop(u)}function f(u){var p;for(p=0;p<i;p+=1)t[p].animation.togglePause(u)}function c(u){var p;for(p=i-1;p>=0;p-=1)t[p].animation.destroy(u)}function y(u,p,g){var S=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),V,R=S.length;for(V=0;V<R;V+=1)g&&S[V].setAttribute("data-bm-type",g),v(S[V],u);if(p&&R===0){g||(g="svg");var X=document.getElementsByTagName("body")[0];X.innerText="";var ae=Ee("div");ae.style.width="100%",ae.style.height="100%",ae.setAttribute("data-bm-type",g),X.appendChild(ae),v(ae,u)}}function z(){var u;for(u=0;u<i;u+=1)t[u].animation.resize()}function N(){!m&&s&&a&&(re.requestAnimationFrame(l),a=!1)}function W(){m=!0}function B(){m=!1,N()}function P(u,p){var g;for(g=0;g<i;g+=1)t[g].animation.setVolume(u,p)}function O(u){var p;for(p=0;p<i;p+=1)t[p].animation.mute(u)}function F(u){var p;for(p=0;p<i;p+=1)t[p].animation.unmute(u)}return e.registerAnimation=v,e.loadAnimation=C,e.setSpeed=M,e.setDirection=A,e.play=b,e.pause=o,e.stop=h,e.togglePause=f,e.searchAnimations=y,e.resize=z,e.goToAndStop=r,e.destroy=c,e.freeze=W,e.unfreeze=B,e.setVolume=P,e.mute=O,e.unmute=F,e.getRegisteredAnimations=L,e}(),Y=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=ge(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Me,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=Ze(),this.imagePreloader=new An,this.audioController=kn(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this)};T([ht],Y),Y.prototype.setParams=function(e){(e.wrapper||e.container)&&(this.wrapper=e.wrapper||e.container);var t="svg";switch(e.animType?t=e.animType:e.renderer&&(t=e.renderer),t){case"canvas":this.renderer=new CanvasRenderer(this,e.rendererSettings);break;case"svg":this.renderer=new ke(this,e.rendererSettings);break;default:this.renderer=new HybridRenderer(this,e.rendererSettings);break}this.imagePreloader.setCacheType(t,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=t,e.loop===""||e.loop===null||e.loop===void 0||e.loop===!0?this.loop=!0:e.loop===!1?this.loop=!1:this.loop=parseInt(e.loop,10),this.autoplay="autoplay"in e?e.autoplay:!0,this.name=e.name?e.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(e,"autoloadSegments")?e.autoloadSegments:!0,this.assetsPath=e.assetsPath,this.initialSegment=e.initialSegment,e.audioFactory&&this.audioController.setAudioFactory(e.audioFactory),e.animationData?this.setupAnimation(e.animationData):e.path&&(e.path.lastIndexOf("\\")!==-1?this.path=e.path.substr(0,e.path.lastIndexOf("\\")+1):this.path=e.path.substr(0,e.path.lastIndexOf("/")+1),this.fileName=e.path.substr(e.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),$.loadAnimation(e.path,this.configAnimation,this.onSetupError))},Y.prototype.onSetupError=function(){this.trigger("data_failed")},Y.prototype.setupAnimation=function(e){$.completeAnimation(e,this.configAnimation)},Y.prototype.setData=function(e,t){t&&typeof t!="object"&&(t=JSON.parse(t));var n={wrapper:e,animationData:t},i=e.attributes;n.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",n.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";s==="false"?n.loop=!1:s==="true"?n.loop=!0:s!==""&&(n.loop=parseInt(s,10));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:i.getNamedItem("bm-autoplay")?i.getNamedItem("bm-autoplay").value:!0;n.autoplay=a!=="false",n.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"";var m=i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"";m==="false"&&(n.prerender=!1),this.setParams(n)},Y.prototype.includeLayers=function(e){e.op>this.animationData.op&&(this.animationData.op=e.op,this.totalFrames=Math.floor(e.op-this.animationData.ip));var t=this.animationData.layers,n,i=t.length,s=e.layers,a,m=s.length;for(a=0;a<m;a+=1)for(n=0;n<i;){if(t[n].id===s[a].id){t[n]=s[a];break}n+=1}if((e.chars||e.fonts)&&(this.renderer.globalData.fontManager.addChars(e.chars),this.renderer.globalData.fontManager.addFonts(e.fonts,this.renderer.globalData.defs)),e.assets)for(i=e.assets.length,n=0;n<i;n+=1)this.animationData.assets.push(e.assets[n]);this.animationData.__complete=!1,$.completeAnimation(this.animationData,this.onSegmentComplete)},Y.prototype.onSegmentComplete=function(e){this.animationData=e,de&&de.initExpressions(this),this.loadNextSegment()},Y.prototype.loadNextSegment=function(){var e=this.animationData.segments;if(!e||e.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var t=e.shift();this.timeCompleted=t.time*this.frameRate;var n=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,$.loadData(n,this.includeLayers.bind(this),(function(){this.trigger("data_failed")}).bind(this))},Y.prototype.loadSegments=function(){var e=this.animationData.segments;e||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},Y.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},Y.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},Y.prototype.configAnimation=function(e){if(this.renderer)try{this.animationData=e,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(e),e.assets||(e.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(e.assets),this.markers=Mn(e.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},Y.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},Y.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,de&&de.initExpressions(this),this.renderer.initItems(),setTimeout((function(){this.trigger("DOMLoaded")}).bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},Y.prototype.resize=function(){this.renderer.updateContainerSize()},Y.prototype.setSubframe=function(e){this.isSubframeEnabled=!!e},Y.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},Y.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(e){this.triggerRenderFrameError(e)}},Y.prototype.play=function(e){e&&this.name!==e||this.isPaused===!0&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},Y.prototype.pause=function(e){e&&this.name!==e||this.isPaused===!1&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"),this.audioController.pause())},Y.prototype.togglePause=function(e){e&&this.name!==e||(this.isPaused===!0?this.play():this.pause())},Y.prototype.stop=function(e){e&&this.name!==e||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},Y.prototype.getMarkerData=function(e){for(var t,n=0;n<this.markers.length;n+=1)if(t=this.markers[n],t.payload&&t.payload.name===e)return t;return null},Y.prototype.goToAndStop=function(e,t,n){if(!(n&&this.name!==n)){var i=Number(e);if(isNaN(i)){var s=this.getMarkerData(e);s&&this.goToAndStop(s.time,!0)}else t?this.setCurrentRawFrameValue(e):this.setCurrentRawFrameValue(e*this.frameModifier);this.pause()}},Y.prototype.goToAndPlay=function(e,t,n){if(!(n&&this.name!==n)){var i=Number(e);if(isNaN(i)){var s=this.getMarkerData(e);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,t,n);this.play()}},Y.prototype.advanceTime=function(e){if(!(this.isPaused===!0||this.isLoaded===!1)){var t=this.currentRawFrame+e*this.frameModifier,n=!1;t>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(t>this.totalFrames?t%this.totalFrames:0)||(n=!0,t=this.totalFrames-1):t>=this.totalFrames?(this.playCount+=1,this.checkSegments(t%this.totalFrames)||(this.setCurrentRawFrameValue(t%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(t):t<0?this.checkSegments(t%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+t%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(n=!0,t=0)):this.setCurrentRawFrameValue(t),n&&(this.setCurrentRawFrameValue(t),this.pause(),this.trigger("complete"))}},Y.prototype.adjustSegment=function(e,t){this.playCount=0,e[1]<e[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=e[0]-e[1],this.timeCompleted=this.totalFrames,this.firstFrame=e[1],this.setCurrentRawFrameValue(this.totalFrames-.001-t)):e[1]>e[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=e[1]-e[0],this.timeCompleted=this.totalFrames,this.firstFrame=e[0],this.setCurrentRawFrameValue(.001+t)),this.trigger("segmentStart")},Y.prototype.setSegment=function(e,t){var n=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<e?n=e:this.currentRawFrame+this.firstFrame>t&&(n=t-e)),this.firstFrame=e,this.totalFrames=t-e,this.timeCompleted=this.totalFrames,n!==-1&&this.goToAndStop(n,!0)},Y.prototype.playSegments=function(e,t){if(t&&(this.segments.length=0),typeof e[0]=="object"){var n,i=e.length;for(n=0;n<i;n+=1)this.segments.push(e[n])}else this.segments.push(e);this.segments.length&&t&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},Y.prototype.resetSegments=function(e){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),e&&this.checkSegments(0)},Y.prototype.checkSegments=function(e){return this.segments.length?(this.adjustSegment(this.segments.shift(),e),!0):!1},Y.prototype.destroy=function(e){e&&this.name!==e||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},Y.prototype.setCurrentRawFrameValue=function(e){this.currentRawFrame=e,this.gotoFrame()},Y.prototype.setSpeed=function(e){this.playSpeed=e,this.updaFrameModifier()},Y.prototype.setDirection=function(e){this.playDirection=e<0?-1:1,this.updaFrameModifier()},Y.prototype.setVolume=function(e,t){t&&this.name!==t||this.audioController.setVolume(e)},Y.prototype.getVolume=function(){return this.audioController.getVolume()},Y.prototype.mute=function(e){e&&this.name!==e||this.audioController.mute()},Y.prototype.unmute=function(e){e&&this.name!==e||this.audioController.unmute()},Y.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},Y.prototype.getPath=function(){return this.path},Y.prototype.getAssetsPath=function(e){var t="";if(e.e)t=e.p;else if(this.assetsPath){var n=e.p;n.indexOf("images/")!==-1&&(n=n.split("/")[1]),t=this.assetsPath+n}else t=this.path,t+=e.u?e.u:"",t+=e.p;return t},Y.prototype.getAssetData=function(e){for(var t=0,n=this.assets.length;t<n;){if(e===this.assets[t].id)return this.assets[t];t+=1}return null},Y.prototype.hide=function(){this.renderer.hide()},Y.prototype.show=function(){this.renderer.show()},Y.prototype.getDuration=function(e){return e?this.totalFrames:this.totalFrames/this.frameRate},Y.prototype.trigger=function(e){if(this._cbs&&this._cbs[e])switch(e){case"enterFrame":case"drawnFrame":this.triggerEvent(e,new lt(e,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(e,new Ct(e,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(e,new gt(e,this.frameMult));break;case"segmentStart":this.triggerEvent(e,new Ce(e,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(e,new $e(e,this));break;default:this.triggerEvent(e)}e==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new lt(e,this.currentFrame,this.totalFrames,this.frameMult)),e==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new Ct(e,this.loop,this.playCount,this.frameMult)),e==="complete"&&this.onComplete&&this.onComplete.call(this,new gt(e,this.frameMult)),e==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new Ce(e,this.firstFrame,this.totalFrames)),e==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new $e(e,this))},Y.prototype.triggerRenderFrameError=function(e){var t=new Xe(e,this.currentFrame);this.triggerEvent("error",t),this.onError&&this.onError.call(this,t)},Y.prototype.triggerConfigError=function(e){var t=new Rt(e,this.currentFrame);this.triggerEvent("error",t),this.onError&&this.onError.call(this,t)};function Rn(){this.effectElements=[]}var le={};function zn(e){pe=e}function fn(){Ae.searchAnimations()}function Vn(e){Me=e}function On(e){Se=e}function Bn(e){return Ae.loadAnimation(e)}function Nn(e){if(typeof e=="string")switch(e){case"high":Pe=200;break;default:case"medium":Pe=50;break;case"low":Pe=10;break}else!isNaN(e)&&e>1&&(Pe=e)}function Wn(){return typeof navigator<"u"}function Dn(e,t){e==="expressions"&&(de=t)}function Hn(e){switch(e){case"propertyFactory":return E;case"shapePropertyFactory":return U;case"matrix":return ye;default:return null}}le.play=Ae.play,le.pause=Ae.pause,le.setLocationHref=zn,le.togglePause=Ae.togglePause,le.setSpeed=Ae.setSpeed,le.setDirection=Ae.setDirection,le.stop=Ae.stop,le.searchAnimations=fn,le.registerAnimation=Ae.registerAnimation,le.loadAnimation=Bn,le.setSubframeRendering=Vn,le.resize=Ae.resize,le.goToAndStop=Ae.goToAndStop,le.destroy=Ae.destroy,le.setQuality=Nn,le.inBrowser=Wn,le.installPlugin=Dn,le.freeze=Ae.freeze,le.unfreeze=Ae.unfreeze,le.setVolume=Ae.setVolume,le.mute=Ae.mute,le.unmute=Ae.unmute,le.getRegisteredAnimations=Ae.getRegisteredAnimations,le.useWebWorker=function(e){Ke=e},le.setIDPrefix=On,le.__getFactory=Hn,le.version="5.8.1";function jn(){document.readyState==="complete"&&(clearInterval(Un),fn())}function Zn(e){for(var t=mn.split("&"),n=0;n<t.length;n+=1){var i=t[n].split("=");if(decodeURIComponent(i[0])==e)return decodeURIComponent(i[1])}return null}var mn;{var un=document.getElementsByTagName("script"),qn=un.length-1,Gn=un[qn]||{src:""};mn=Gn.src.replace(/^[^\?]+\??/,""),Zn("renderer")}var Un=setInterval(jn,100);return le})}(Qt)),Qt.exports}var wn;function ti(){if(wn)return gn;wn=1;var te=bn(),re=$n(),qe=ei();function pe(Q){return Q&&typeof Q=="object"&&"default"in Q?Q:{default:Q}}var Fe=pe(re),Ke=pe(qe);function Me(Q,E){E===void 0&&(E={});var D=E.insertAt;if(Q&&typeof document<"u"){var H=document.head||document.getElementsByTagName("head")[0],U=document.createElement("style");U.type="text/css",D==="top"&&H.firstChild?H.insertBefore(U,H.firstChild):H.appendChild(U),U.styleSheet?U.styleSheet.cssText=Q:U.appendChild(document.createTextNode(Q))}}var Se=`.pera-wallet-modal-header {
  position: absolute;
  top: -44px;
  right: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pera-wallet-modal-header--mobile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: static;
}
.pera-wallet-modal-header--mobile .pera-wallet-modal-header__close-button {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: unset;
  box-shadow: unset;
}

.pera-wallet-modal-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #ffffff;
}

.pera-wallet-modal-header__brand-text {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pera-wallet-modal-header__version-number {
  color: #9d9dae;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal-header__close-button {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  background: rgba(44, 53, 89, 0.1);
  border-radius: 8px;
}

.pera-wallet-modal-header__close-button__close-icon {
  width: 20px;
  height: 20px;
}`;Me(Se);const de=document.createElement("template"),nt=te.isMobile()?"pera-wallet-modal-header pera-wallet-modal-header--mobile":"pera-wallet-modal-header pera-wallet-modal-header--desktop";de.innerHTML=`
  <div class="${nt}">
      ${te.isMobile()?"":`<div class="pera-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='4.8' fill='%23FFEE55'/%3e%3cpath d='M13.0408 5.92462C13.413 7.46693 13.2872 8.8236 12.7597 8.95482C12.2322 9.08605 11.5028 7.94214 11.1306 6.39983C10.7583 4.85752 10.8842 3.50085 11.4117 3.36963C11.9391 3.2384 12.6685 4.38231 13.0408 5.92462Z' fill='black'/%3e%3cpath d='M19.1876 7.25063C18.3632 6.37689 16.7231 6.61371 15.5243 7.77959C14.3254 8.94547 14.0219 10.5989 14.8463 11.4727C15.6707 12.3464 17.3108 12.1096 18.5097 10.9437C19.7085 9.77781 20.012 8.12438 19.1876 7.25063Z' fill='black'/%3e%3cpath d='M12.6308 20.6297C13.1583 20.4985 13.2656 19.0651 12.8705 17.4281C12.4754 15.7911 11.7275 14.5705 11.2 14.7017C10.6725 14.8329 10.5652 16.2663 10.9603 17.9033C11.3554 19.5403 12.1033 20.7609 12.6308 20.6297Z' fill='black'/%3e%3cpath d='M7.25371 8.05056C8.77551 8.49933 9.8875 9.28664 9.73741 9.80906C9.58731 10.3315 8.23197 10.3912 6.71016 9.94242C5.18836 9.49364 4.07637 8.70633 4.22646 8.18391C4.37656 7.66149 5.7319 7.60178 7.25371 8.05056Z' fill='black'/%3e%3cpath d='M17.1309 13.9497C18.7461 14.4261 19.9338 15.2357 19.7837 15.7581C19.6336 16.2806 18.2025 16.3179 16.5873 15.8416C14.9721 15.3653 13.7844 14.5556 13.9345 14.0332C14.0846 13.5108 15.5157 13.4734 17.1309 13.9497Z' fill='black'/%3e%3cpath d='M8.96609 12.8536C8.5887 12.4624 7.35088 13.0318 6.20133 14.1253C5.05177 15.2188 4.42581 16.4225 4.80319 16.8137C5.18058 17.2048 6.4184 16.6355 7.56796 15.542C8.71751 14.4484 9.34347 13.2448 8.96609 12.8536Z' fill='black'/%3e%3c/svg%3e" />

              <div class="pera-wallet-modal-header__brand-text">
                <span>Pera Connect</span>

                <span class="pera-wallet-modal-header__version-number">v1.3.5</span>
              </div>
            </div>
            `} 

      <button
        id="pera-wallet-modal-header-close-button"
        class="pera-wallet-button pera-wallet-modal-header__close-button">
        <img
          class="pera-wallet-modal-header__close-button__close-icon"
          src="${te.isMobile()?"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%232C3559' stroke-width='2'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e"}"
        />
      </button>
    </div>
`;class Oe extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const E=document.createElement("style");E.textContent=Se,this.shadowRoot.append(de.content.cloneNode(!0),E),this.onClose()}}onClose(){var E;const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-modal-header-close-button"),H=this.getAttribute("modal-id");D&&H===te.PERA_WALLET_REDIRECT_MODAL_ID&&D.addEventListener("click",()=>{te.removeModalWrapperFromDOM(te.PERA_WALLET_REDIRECT_MODAL_ID)})}}var xt="data:image/svg+xml,%3csvg fill='none' height='80' width='80' xmlns='http://www.w3.org/2000/svg'%3e%3cpath clip-rule='evenodd' d='M39.9 80V68.99h-9.8V80h-.2V68.99h-3.5a6.503 6.503 0 0 1-6.247-4.7 6.514 6.514 0 0 1-4.445-4.444 6.503 6.503 0 0 1-4.695-6.246v-3.5H0v-.2h11.013v-9.8H0v-.2h11.013v-9.8H0v-.2h11.013v-3.5a6.503 6.503 0 0 1 4.694-6.246 6.513 6.513 0 0 1 4.447-4.447 6.503 6.503 0 0 1 6.246-4.696h3.5V0h.2v11.011h9.8V0h.2v11.011h9.8V0h.2v11.011h3.5a6.503 6.503 0 0 1 6.247 4.697 6.514 6.514 0 0 1 4.443 4.444 6.503 6.503 0 0 1 4.701 6.248v3.5H80v.2H68.991v9.8H80v.2H68.991v9.8H80v.2H68.991v3.5a6.503 6.503 0 0 1-4.701 6.248 6.514 6.514 0 0 1-4.443 4.442 6.503 6.503 0 0 1-6.247 4.7h-3.5V80h-.2V68.99h-9.8V80zm28.89-40.1a28.728 28.728 0 0 0-1.746-9.8h-2.5v9.8h4.247zm-4.246.2h4.247a28.729 28.729 0 0 1-1.747 9.8h-2.5zm-.2-.2v-9.8H60.1v9.8zm-4.244.2h4.244v9.8H60.1zm-.2-.2a19.807 19.807 0 0 0-2.633-9.8H50.1v9.8zm-9.8.2h9.8a19.807 19.807 0 0 1-2.633 9.8H50.1zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-7.167a19.807 19.807 0 0 0-2.633 9.8zm-9.8.2h9.8v9.8h-7.167a19.807 19.807 0 0 1-2.633-9.8zm-.2-.2v-9.8h-4.245v9.8zm-4.245.2H19.9v9.8h-4.245zm-.2-.2v-9.8H12.96a28.726 28.726 0 0 0-1.748 9.8h4.242zm-4.242.2h4.242v9.8H12.96a28.726 28.726 0 0 1-1.748-9.8zm0 13.5v-3.5h1.608a28.876 28.876 0 0 0 2.634 5.327v2.617c0 .543.066 1.07.192 1.575a6.303 6.303 0 0 1-4.434-6.019zm4.242 1.449a28.674 28.674 0 0 1-2.42-4.949h2.42zm.2.32V50.1H19.9v9.8h-.702a28.915 28.915 0 0 1-3.543-4.53zM20.1 59.9v-9.8h2.518a20.2 20.2 0 0 0 7.282 7.282V59.9zm0-10h2.403a19.966 19.966 0 0 1-2.403-7.053zm9.8 7.25a20 20 0 0 1-7.05-7.05h7.05zm.2.117V50.1h9.8v9.8a19.807 19.807 0 0 1-9.8-2.633zm10 2.633v-9.8h9.8v7.167a19.807 19.807 0 0 1-9.8 2.633zm10-2.75V50.1h7.05a20 20 0 0 1-7.05 7.05zm0 .232a20.2 20.2 0 0 0 7.282-7.282H59.9v9.8h-9.8zm7.397-7.482H59.9v-7.053a19.966 19.966 0 0 1-2.403 7.053zm2.603 10v-9.8h4.244v5.28a28.91 28.91 0 0 1-3.538 4.52zm4.444-4.841V50.1h2.426a28.67 28.67 0 0 1-2.426 4.959zm0 .378a28.881 28.881 0 0 0 2.64-5.337h1.607v3.5a6.303 6.303 0 0 1-4.44 6.021 6.514 6.514 0 0 0 .193-1.577zm2.713-5.537h1.534v-6.477a28.817 28.817 0 0 1-1.534 6.477zm-56.044 0h1.535a28.807 28.807 0 0 1-1.535-6.477zm57.578-20v-3.5a6.303 6.303 0 0 0-4.44-6.02c.126.504.193 1.031.193 1.575v2.608a28.877 28.877 0 0 1 2.639 5.337zm-1.534.2h1.534v6.477a28.815 28.815 0 0 0-1.534-6.477zm-.288-.2a28.673 28.673 0 0 0-2.425-4.958V29.9zm-2.625 0v-5.279a28.911 28.911 0 0 0-3.538-4.521H60.1v9.8zm-4.444 0v-9.8h-9.8v2.518a20.2 20.2 0 0 1 7.282 7.282zm-2.403.2H59.9v7.053a19.966 19.966 0 0 0-2.403-7.053zm-.347-.2a20 20 0 0 0-7.05-7.05v7.05zm-7.25 0v-7.167a19.807 19.807 0 0 0-9.8-2.633v9.8zm-10 0v-9.8a19.807 19.807 0 0 0-9.8 2.633V29.9zm-10 0v-7.05a20 20 0 0 0-7.05 7.05zm-7.282 0a20.2 20.2 0 0 1 7.282-7.282V20.1h-9.8v9.8zm-2.518.2h2.403a19.966 19.966 0 0 0-2.403 7.053zm-.2-.2v-9.8h-.701a28.915 28.915 0 0 0-3.544 4.53v5.27zm-4.445 0v-4.948a28.665 28.665 0 0 0-2.42 4.948zm-2.634 0a28.874 28.874 0 0 1 2.634-5.327v-2.618c0-.543.066-1.07.191-1.574a6.303 6.303 0 0 0-4.433 6.019v3.5zm-1.608.2h1.535a28.81 28.81 0 0 0-1.535 6.477zM36.58 68.79H30.1v-1.536c2.06.749 4.23 1.27 6.479 1.535zm3.321-.001a28.726 28.726 0 0 1-9.8-1.748v-2.497h9.8zm-10-1.822v-2.423h-4.953a28.678 28.678 0 0 0 4.953 2.423zm10-2.623h-9.8V60.1h9.8zm-10 0V60.1h-9.8v.702a28.915 28.915 0 0 0 4.526 3.542H29.9zm7.254-4.444H30.1v-2.403a19.966 19.966 0 0 0 7.053 2.403zm0-39.8a19.966 19.966 0 0 0-7.054 2.403V20.1h7.053zm2.746-.2h-9.8v-4.245h9.8zm-10 0v-4.245h-5.27a28.907 28.907 0 0 0-4.53 3.544v.701zm10-4.445h-9.8V12.96a28.729 28.729 0 0 1 9.8-1.749zm-10 0v-2.421a28.668 28.668 0 0 0-4.95 2.42h4.95zm6.679-4.244a28.81 28.81 0 0 0-6.479 1.536V11.21h6.479zm-6.679 1.61v-1.61h-3.5a6.303 6.303 0 0 0-6.02 4.436 6.514 6.514 0 0 1 1.575-.192h2.617A28.877 28.877 0 0 1 29.9 12.82zm0 55.968V67.18a28.878 28.878 0 0 1-5.331-2.636h-2.614c-.543 0-1.07-.067-1.575-.192a6.303 6.303 0 0 0 6.02 4.437zm20.2 0h3.5a6.303 6.303 0 0 0 6.02-4.438 6.513 6.513 0 0 1-1.576.193h-2.608a28.879 28.879 0 0 1-5.336 2.638zm-.2-1.534v1.534h-6.475a28.808 28.808 0 0 0 6.475-1.534zm.2-.287a28.671 28.671 0 0 0 4.957-2.424H50.1v2.424zm-.2-2.424v2.499a28.728 28.728 0 0 1-9.8 1.746v-4.245zm.2-.2h5.278a28.914 28.914 0 0 0 4.522-3.538V60.1h-9.8zm-.2-4.244v4.244h-9.8V60.1zm0-2.603V59.9h-7.053a19.966 19.966 0 0 0 7.053-2.403zm0-37.397v2.403a19.966 19.966 0 0 0-7.053-2.403H49.9zm.2-.2h9.8v-.705a28.911 28.911 0 0 0-4.526-3.54H50.1V19.9zm-.2-4.245V19.9h-9.8v-4.245h9.8zm.2-.2h4.954a28.676 28.676 0 0 0-4.954-2.423zm-.2-2.497v2.497h-9.8V11.21a28.75 28.75 0 0 1 9.8 1.747zm.2-.14a28.877 28.877 0 0 1 5.332 2.637h2.612c.543 0 1.071.066 1.576.192a6.303 6.303 0 0 0-6.02-4.436h-3.5zm-.2-1.607v1.534a28.812 28.812 0 0 0-6.475-1.534H49.9zm-34.245 44.53v2.303c0 .567.075 1.117.215 1.64a6.309 6.309 0 0 0 1.643.216h1.41a29.118 29.118 0 0 1-3.268-4.16zm3.458 4.359h-1.6a6.513 6.513 0 0 1-1.578-.193 6.315 6.315 0 0 0 4.157 4.157 6.517 6.517 0 0 1-.192-1.575v-1.602a29.35 29.35 0 0 1-.787-.787zm.787.509a29.029 29.029 0 0 1-.508-.509h.508zm.2.469v1.411c0 .567.075 1.117.215 1.64.523.14 1.073.215 1.64.215h2.3a29.118 29.118 0 0 1-4.155-3.266zm35.649 3.266h2.295c.567 0 1.117-.075 1.64-.216a6.286 6.286 0 0 0 .216-1.639v-1.407a29.116 29.116 0 0 1-4.151 3.262zm4.35-3.454v1.598a6.53 6.53 0 0 1-.192 1.574 6.314 6.314 0 0 0 4.155-4.154 6.509 6.509 0 0 1-1.572.191h-1.6a29.08 29.08 0 0 1-.791.791zm.982-.991h1.41c.565 0 1.114-.075 1.636-.215a6.31 6.31 0 0 0 .216-1.641V55.75a29.113 29.113 0 0 1-3.262 4.15zm3.262-35.65v-2.295c0-.568-.075-1.117-.216-1.64a6.307 6.307 0 0 0-1.637-.215h-1.41a29.112 29.112 0 0 1 3.263 4.15zM60.89 19.9h1.6c.542 0 1.069.066 1.573.192a6.314 6.314 0 0 0-4.156-4.157 6.51 6.51 0 0 1 .192 1.576v1.598c.269.259.532.522.79.791zm-.991-.981V17.51a6.31 6.31 0 0 0-.216-1.64 6.308 6.308 0 0 0-1.64-.216h-2.299a29.108 29.108 0 0 1 4.155 3.264zm-35.641-3.264h-2.304a6.31 6.31 0 0 0-1.639.215 6.306 6.306 0 0 0-.216 1.641v1.412a29.115 29.115 0 0 1 4.159-3.268zM19.9 19.113v-1.602c0-.543.067-1.072.193-1.577a6.315 6.315 0 0 0-4.159 4.16 6.518 6.518 0 0 1 1.58-.194h1.6c.257-.267.519-.53.786-.787zm-.508.787h.508v-.508c-.171.167-.34.337-.508.508zm-.47.2h-1.409a6.31 6.31 0 0 0-1.643.216 6.308 6.308 0 0 0-.215 1.639v2.305a29.107 29.107 0 0 1 3.268-4.16zm41.178-.712c.173.168.344.34.512.512H60.1zm.513 40.712c-.169.173-.34.344-.513.513V60.1z' fill='%2394a3b8' fill-rule='evenodd'/%3e%3crect fill='black' height='80' rx='16' width='80'/%3e%3cpath d='M43.47 19.752c1.24 5.14.821 9.663-.937 10.1-1.758.438-4.19-3.375-5.43-8.517-1.241-5.14-.822-9.663.936-10.1 1.759-.438 4.19 3.376 5.43 8.517zm20.49 4.42c-2.749-2.913-8.216-2.123-12.212 1.763s-5.008 9.398-2.26 12.31 8.215 2.123 12.211-1.763 5.008-9.398 2.26-12.31zM42.102 68.769c1.758-.438 2.116-5.216.8-10.673-1.318-5.456-3.81-9.525-5.57-9.088-1.757.438-2.115 5.216-.798 10.672 1.317 5.457 3.81 9.526 5.568 9.089zM24.18 26.838c5.073 1.496 8.78 4.12 8.28 5.862-.5 1.741-5.019 1.94-10.091.444-5.073-1.496-8.78-4.12-8.28-5.861.501-1.742 5.019-1.941 10.092-.445zm32.924 19.664c5.384 1.588 9.343 4.286 8.843 6.028-.5 1.741-5.27 1.866-10.654.278-5.385-1.588-9.343-4.286-8.843-6.028.5-1.741 5.27-1.866 10.654-.278zm-27.216-3.654c-1.258-1.304-5.384.594-9.215 4.24-3.832 3.644-5.919 7.656-4.66 8.96 1.257 1.304 5.383-.594 9.215-4.239s5.918-7.657 4.66-8.96z' fill='%23fe5'/%3e%3c/svg%3e",Ge=`.pera-wallet-download-qr-code-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 26px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

@media (max-width: 767px) {
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 51px;
  }
}`;Me(Ge);const Ft=document.createElement("template");Ft.innerHTML=`
  <div id="pera-wallet-download-qr-code-wrapper" class="pera-wallet-download-qr-code-wrapper"></div>  
`;class ot extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const E=document.createElement("style");E.textContent=Ge,this.shadowRoot.append(Ft.content.cloneNode(!0),E)}}connectedCallback(){var E;const D=new Fe.default({width:205,height:205,type:"svg",data:te.PERA_DOWNLOAD_URL,image:xt,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:10},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),H=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-download-qr-code-wrapper");H&&D.append(H)}}var Ze="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 19L15.5 12L8.5 5' stroke='%233C3C49' stroke-width='2'/%3e%3c/svg%3e",Pe=`.pera-wallet-connect-modal-desktop-mode {
  display: grid;
  grid-template-columns: 205px auto;
  gap: 70px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 364px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item--web-wallet {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 434px;
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-connect-modal-desktop-mode__download-pera-description {
  margin-top: 50px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__download-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__default-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view .pera-wallet-connect-modal-download-pera-view__footer a {
  display: flex;
  cursor: pointer;
}
.pera-wallet-connect-modal-desktop-mode--compact {
  grid-template-columns: unset;
  gap: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet {
  padding: 28px 40px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet .pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  width: 172px;
  height: 40px;
  margin: 0 auto;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view {
  overflow: hidden;
  border-radius: 24px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item {
  margin-bottom: 0;
  border-radius: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item:not(:last-child) {
  border-bottom: 1px solid #e6e8ee;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item #pera-wallet-iframe {
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle {
  padding: 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__text, .pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-toggle__bold-color {
  font-weight: 600;
  color: #1a1a1a;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 265px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-container {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 20px;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-description,
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  margin: 0;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-modal-desktop-mode__download-pera-button {
  font-weight: 500;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper {
  margin: 4px auto 0;
  padding: 0;
  box-shadow: unset;
}
.pera-wallet-connect-modal-desktop-mode--compact .pera-wallet-connect-modal-desktop-mode__default-view .pera-wallet-connect-qr-code-wrapper svg {
  padding: 8px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 12px;
}
.pera-wallet-connect-modal-desktop-mode--select-account {
  width: 100%;
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--select-account.pera-wallet-connect-modal-desktop-mode--default {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: unset;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-accordion {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account #pera-wallet-iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.pera-wallet-connect-modal-desktop-mode__accordion__description,
.pera-wallet-connect-modal-desktop-mode__connect-button-wrapper {
  padding: 0 40px 20px 64px;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 88px);
  padding: 48px 52px 40px;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06);
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin: 0 auto 32px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #6a6a81;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 0;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1;
  border: none;
  outline: none;
  cursor: pointer;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__connect-button {
  display: block;
  width: 100%;
  height: 48px;
  border: unset;
  border-radius: 6px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 13px;
}

.pera-wallet-connect-qr-code-wrapper {
  width: fit-content;
  margin: 24px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-description {
  color: #838aa6;
  text-align: center;
  margin: 32px 0 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-button {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0;
  color: #6b46fe;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view__back-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
  padding: 12px 24px;
  color: #3c3c49;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border: unset;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view {
  padding: 32px 37px 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 24px;
}

.pera-wallet-connect-modal-download-pera-view__title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.13px;
}

.pera-wallet-connect-modal-download-pera-view__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 53px;
}

.pera-wallet-connect-modal-download-pera-view__footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 13px;
  line-height: 200%;
  letter-spacing: -0.04px;
  cursor: pointer;
}

#pera-wallet-iframe {
  width: 285px;
  height: 376px;
  margin: 0 auto;
  border: none;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-desktop-mode {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .pera-wallet-connect-qr-code-wrapper {
    margin-top: 16px;
  }
  .pera-wallet-connect-modal-download-pera-view {
    padding: 24px;
  }
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 32px;
  }
  .pera-wallet-connect-modal-download-pera-view__footer {
    margin-top: 40px;
  }
}`;Me(Pe);var oe=`.pera-wallet-accordion-item {
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.02), 0px 4px 12px rgba(0, 0, 0, 0.03);
}
.pera-wallet-accordion-item:not(:last-of-type) {
  margin-bottom: 20px;
}
.pera-wallet-accordion-item:not(:last-of-type) .pera-wallet-accordion-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 0;
  overflow: hidden;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}

.pera-wallet-accordion-toggle {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  color: #2c3559;
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.1px;
  font-weight: 600;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-toggle__text, .pera-wallet-accordion-toggle__content-with-label__text {
  color: #626268;
}

.pera-wallet-accordion-icon {
  transition: all ease-in 0.2s;
}

.pera-wallet-accordion-toggle__bold-color {
  color: #1A1A1A;
  font-weight: 600;
}

.pera-wallet-accordion-toggle__content-with-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pera-wallet-accordion-toggle__label {
  padding: 4px 9px;
  color: #1C786C;
  background: #E0FAEE;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01px;
}

.pera-wallet-accordion-toggle__button {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 767px) {
  .pera-wallet-accordion-toggle {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.1px;
  }
}`;Me(oe);const Ue=document.createElement("template"),lt=document.createElement("style"),gt=document.createElement("style");lt.textContent=Pe,gt.textContent=oe,Ue.innerHTML=`
  <div id="pera-wallet-connect-modal-desktop-mode" class="pera-wallet-connect-modal-desktop-mode pera-wallet-connect-modal-desktop-mode--default">
      <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

      <div class="pera-wallet-connect-modal-desktop-mode__default-view"></div>
       

      <div class="pera-wallet-connect-modal-desktop-mode__download-view">
        <button
          id="pera-wallet-connect-modal-download-pera-view-back-button"
          class="pera-wallet-connect-modal-download-pera-view__back-button">
          <img
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e"
            alt="Back Arrow"
          />

          Back
        </button>

        <div class="pera-wallet-connect-modal-download-pera-view">
          <h1 class="pera-wallet-connect-modal-download-pera-view__title">
            Download Pera Wallet
          </h1>

          <pera-wallet-download-qr-code></pera-wallet-download-qr-code>

          <div class="pera-wallet-connect-modal-download-pera-view__footer">
            <a
              href="https://apps.apple.com/us/app/algorand-wallet/id1459898525"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.algorand.android"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

            <a
              class="pera-wallet-connect-modal-download-pera-view__footer__button"
              href="https://perawallet.s3-eu-west-3.amazonaws.com/android-releases/app-pera-prod-release-bitrise-signed.apk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 14V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V14' stroke='%232C3559' stroke-width='1.5'/%3e%3cpath d='M11.9998 16V3M11.9998 16L7.47803 11.4783M11.9998 16L16.5215 11.4783' stroke='%232C3559' stroke-width='1.5'/%3e%3c/svg%3e" alt="Download icon" />

              Download APK File
            </a>
          </div>
        </div>
      </div>
    </div>
  `;class Ct extends HTMLElement{constructor(){var E;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){if(this.shadowRoot.append(Ue.content.cloneNode(!0),lt,gt),this.shadowRoot.addEventListener("click",J=>{this.handleAccordion(J)}),this.getAttribute("compact-mode")==="true"){const J=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");J==null||J.classList.add("pera-wallet-connect-modal-desktop-mode--compact")}const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view"),H=this.getAttribute("promote-mobile")==="true",{webWalletOption:U,mobileWalletOption:ee}=function(J){const se=`
  <div id="web-wallet-option" class="pera-wallet-accordion-item ${J?"":"pera-wallet-accordion-item--active"}  pera-wallet-accordion-item--web-wallet">
            <a class="pera-wallet-accordion-toggle">
              <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${Ze}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__content-with-label">
                <div class="pera-wallet-accordion-toggle__content-with-label__text">
                  Connect With
  
                  <span class="pera-wallet-accordion-toggle__bold-color">
                    Pera Web
                  </span>
                </div>
  
                <span id="pera-web-new-label" class="pera-wallet-accordion-toggle__label">NEW</span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div class="pera-wallet-connect-modal-desktop-mode__web-wallet"><div>
              
              <div
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">
                <img src="data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3.5' y='7.5' width='36' height='26' rx='5.5' stroke='%236B46FE' stroke-width='3'/%3e%3cpath d='M22.4973 14.5237C22.8556 16.041 22.7344 17.3757 22.2267 17.5048C21.719 17.6339 21.0169 16.5085 20.6586 14.9912C20.3003 13.4739 20.4214 12.1392 20.9292 12.0101C21.4369 11.881 22.1389 13.0064 22.4973 14.5237Z' fill='%236B46FE'/%3e%3cpath d='M28.4139 15.8282C27.6204 14.9686 26.0417 15.2016 24.8877 16.3486C23.7338 17.4956 23.4417 19.1222 24.2352 19.9818C25.0287 20.8414 26.6074 20.6084 27.7613 19.4614C28.9153 18.3144 29.2074 16.6878 28.4139 15.8282Z' fill='%236B46FE'/%3e%3cpath d='M22.1027 28.9905C22.6104 28.8614 22.7137 27.4512 22.3334 25.8407C21.9531 24.2303 21.2332 23.0294 20.7254 23.1585C20.2177 23.2876 20.1144 24.6978 20.4947 26.3083C20.875 27.9187 21.5949 29.1196 22.1027 28.9905Z' fill='%236B46FE'/%3e%3cpath d='M16.9269 16.6152C18.3917 17.0567 19.4621 17.8312 19.3176 18.3452C19.1731 18.8591 17.8686 18.9179 16.4037 18.4764C14.9389 18.0349 13.8686 17.2603 14.0131 16.7464C14.1575 16.2324 15.4621 16.1737 16.9269 16.6152Z' fill='%236B46FE'/%3e%3cpath d='M26.4342 22.4188C27.9889 22.8874 29.1322 23.6839 28.9877 24.1979C28.8432 24.7118 27.4657 24.7486 25.911 24.28C24.3563 23.8114 23.213 23.0148 23.3575 22.5009C23.502 21.9869 24.8795 21.9502 26.4342 22.4188Z' fill='%236B46FE'/%3e%3cpath d='M18.5752 21.3404C18.2119 20.9555 17.0205 21.5157 15.914 22.5915C14.8075 23.6673 14.2049 24.8514 14.5682 25.2363C14.9314 25.6211 16.1229 25.061 17.2294 23.9852C18.3359 22.9094 18.9384 21.7253 18.5752 21.3404Z' fill='%236B46FE'/%3e%3cpath d='M16 39C21 39.0001 23.5 39.0001 28 39' stroke='%236B46FE' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e" />
              </div>
  
              <p
                class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">
                Connect with Pera Web to continue
              </p>
            </div>
  
            <button
              id="pera-wallet-connect-web-wallet-launch-button"
              class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">
              Launch Pera Web
  
              <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0892 9.41009C13.4147 9.73553 13.4147 10.2632 13.0892 10.5886L8.08924 15.5886C7.7638 15.914 7.23616 15.914 6.91072 15.5886C6.58529 15.2632 6.58529 14.7355 6.91072 14.4101L11.3215 9.99935L6.91073 5.5886C6.58529 5.26317 6.58529 4.73553 6.91073 4.41009C7.23616 4.08466 7.7638 4.08466 8.08924 4.41009L13.0892 9.41009Z' fill='white'/%3e%3c/svg%3e" />
            </button>
          </div>`,ce=`
  <div id="mobile-wallet-option" class="pera-wallet-accordion-item ${J?"pera-wallet-accordion-item--active":""}">
            <a class="pera-wallet-accordion-toggle">
            <button class="pera-wallet-accordion-toggle__button"></button>
  
              <img src="${Ze}" class="pera-wallet-accordion-icon" />
  
              <div class="pera-wallet-accordion-toggle__text">
                Connect with
  
                <span class="pera-wallet-accordion-toggle__bold-color">
                  Pera Mobile
                </span>
              </div>
            </a>
  
            <div class="pera-wallet-accordion-item__content">
              <div id="pera-wallet-connect-modal-connect-qr-code" class="pera-wallet-connect-qr-code-wrapper"></div>
  
              <div class="pera-wallet-connect-modal-desktop-mode__download-pera-container">
                <p
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-description">
                    Don’t have Pera Wallet app?
                </p>
  
                <button
                  id="pera-wallet-connect-modal-desktop-mode-download-pera-button"
                  class="pera-wallet-connect-modal-desktop-mode__download-pera-button">
                  <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />
  
                  Download Pera Wallet
                </button>
              </div>
            </div>
          </div>`;return{mobileWalletOption:document.createRange().createContextualFragment(ce),webWalletOption:document.createRange().createContextualFragment(se)}}(H);H?(D==null||D.appendChild(ee),D==null||D.appendChild(U)):(D==null||D.appendChild(U),D==null||D.appendChild(ee))}}connectedCallback(){var E;const D=this.getAttribute("should-display-new-badge"),H=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-web-new-label");D==="false"&&(H==null||H.setAttribute("style","display:none")),this.handleChangeView()}handleChangeView(){var E,D,H;const U=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-connect-modal-desktop-mode-download-pera-button"),ee=(D=this.shadowRoot)===null||D===void 0?void 0:D.getElementById("pera-wallet-connect-modal-download-pera-view-back-button"),J=(H=this.shadowRoot)===null||H===void 0?void 0:H.getElementById("pera-wallet-connect-web-wallet-launch-button");U&&U.addEventListener("click",()=>{this.onClickDownload()}),ee&&ee.addEventListener("click",()=>{this.onClickBack()}),J&&J.addEventListener("click",()=>{this.webWalletConnect()}),this.renderQRCode(),this.checkWebWalletAvaliability()}webWalletConnect(){this.getAttribute("is-web-wallet-avaliable")==="true"&&window.onWebWalletConnect()}handleAccordion(E){var D,H;if(E.target instanceof Element){if(!E.target.classList.contains("pera-wallet-accordion-toggle__button"))return;if(this.shadowRoot&&(!((D=E.target.parentElement)===null||D===void 0)&&D.parentElement)){const U=(H=E.target.parentElement)===null||H===void 0?void 0:H.parentElement;if(!U||U.classList.contains("pera-wallet-accordion-item--active"))return;const ee=this.shadowRoot.querySelectorAll(".pera-wallet-accordion-item.pera-wallet-accordion-item--active");for(let J=0;J<ee.length;J++)ee[J].classList.remove("pera-wallet-accordion-item--active");U.classList.toggle("pera-wallet-accordion-item--active")}}}renderQRCode(){var E;const D=this.getAttribute("is-web-wallet-avaliable"),H=this.getAttribute("compact-mode")==="true",U=this.getAttribute("single-account")==="true";let ee=this.getAttribute("uri");U&&(ee=`${ee}&singleAccount=true`);let J=D==="false"?250:205;if(H&&(J=190),ee){const se=new Fe.default({width:J,height:J,type:"svg",data:ee,image:xt,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:8},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),ce=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-connect-modal-connect-qr-code");ce&&se.append(ce)}}onClickDownload(){if(this.shadowRoot){const E=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");E&&(E.classList.remove("pera-wallet-connect-modal-desktop-mode--default"),E.classList.add("pera-wallet-connect-modal-desktop-mode--download"))}}onClickBack(){if(this.shadowRoot){const E=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");E&&(E.classList.add("pera-wallet-connect-modal-desktop-mode--default"),E.classList.remove("pera-wallet-connect-modal-desktop-mode--download"))}}checkWebWalletAvaliability(){var E;if(this.getAttribute("is-web-wallet-avaliable")==="false"){const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view");D==null||D.classList.add("pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable")}}}function Ce(Q=!0){let E=te.PERA_WALLET_APP_DEEP_LINK;const D=te.detectBrowser();return Q&&D&&(E=`${E}?browser=${encodeURIComponent(D)}`),E}var $e=`.pera-wallet-connect-modal-touch-screen-mode {
  display: grid;
  grid-template-columns: 1fr;
  gap: 46px;
  padding: 4px;
}

.pera-wallet-connect-modal-touch-screen-mode--pending-message-view {
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button,
.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  display: block;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button {
  margin-bottom: 32px;
  background-color: #6b46fe;
  color: #ffffff;
}

.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  margin-bottom: 20px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box {
  position: relative;
  margin-bottom: 32px;
  border-top: 1px solid #e6e8ee;
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text {
  position: absolute;
  top: -25px;
  right: calc(50% - 56px);
  width: 116px;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
  text-align: center;
}`;Me($e);const Xe=document.createElement("template");class Rt extends HTMLElement{constructor(){var E;if(super(),this.attachShadow({mode:"open"}),Xe.innerHTML=`
  <div class="pera-wallet-connect-modal-touch-screen-mode">
    <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

    <div>
      <a
        id="pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"
        class="pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Launch Pera Wallet
      </a>

      <div
        class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box">
        <p
          class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text"
          >
          New to Pera?
        </p>
      </div>

      <a
        href="https://perawallet.app/download/"
        class="pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Install Pera Wallet
      </a>
    </div>
  </div>
`,this.shadowRoot){const D=document.createElement("style");D.textContent=$e,this.shadowRoot.append(Xe.content.cloneNode(!0),D);const H=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"),U=this.getAttribute("uri"),ee=this.getAttribute("single-account")==="true",J=this.getAttribute("selected-account")||void 0;H&&U&&(H.setAttribute("href",function(se,ce){let ve=Ce(!1);te.isIOS()&&!ve.includes("-wc")&&(ve=ve.replace("://","-wc://"));let fe=`${ve}wc?uri=${encodeURIComponent(se)}`;const pt=te.detectBrowser();return te.isAndroid()&&(fe=se),pt&&(fe=`${fe}&browser=${encodeURIComponent(pt)}`),ce!=null&&ce.singleAccount&&(fe=`${fe}&singleAccount=true`),ce!=null&&ce.selectedAccount&&(fe=`${fe}&selectedAccount=${ce.selectedAccount}`),fe}(U,{singleAccount:ee,selectedAccount:J})),H.addEventListener("click",()=>{this.onClickLaunch()}))}}onClickLaunch(){if(Xe.innerHTML=`
    <div class="pera-wallet-connect-modal-touch-screen-mode pera-wallet-connect-modal-touch-screen-mode--pending-message-view">
      <pera-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-connect-modal-pending-message-section>
    </div>
  `,this.shadowRoot){const E=document.createElement("style");E.textContent=$e,this.shadowRoot.innerHTML="",this.shadowRoot.append(Xe.content.cloneNode(!0),E)}}}var ge=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}`;Me(ge);const Je=document.createElement("template");let it=te.isMobile()?`${te.PERA_WALLET_MODAL_CLASSNAME} ${te.PERA_WALLET_MODAL_CLASSNAME}--mobile`:`${te.PERA_WALLET_MODAL_CLASSNAME} ${te.PERA_WALLET_MODAL_CLASSNAME}--desktop`;class zt extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const E=document.createElement("style");E.textContent=ge,this.getAttribute("compact-mode")==="true"&&(it=`${it} ${te.PERA_WALLET_MODAL_CLASSNAME}--compact`);const D=this.getAttribute("single-account")==="true",H=this.getAttribute("selected-account");te.isMobile()?(Je.innerHTML=`
        <div class="${it}">
          <div class="pera-wallet-modal__body" part="body">
            <pera-wallet-modal-header modal-id="${te.PERA_WALLET_CONNECT_MODAL_ID}"></pera-wallet-modal-header/>
      
            <pera-wallet-modal-touch-screen-mode uri="${this.getAttribute("uri")}" should-use-sound="${this.getAttribute("should-use-sound")}" single-account="${D}" selected-account="${H}"></pera-wallet-modal-touch-screen-mode>
          </div>
        </div>
      `,this.shadowRoot.append(Je.content.cloneNode(!0),E)):(Je.innerHTML=`
          <div class="${it}">
            <div class="pera-wallet-modal__body">
              <pera-wallet-modal-header modal-id="${te.PERA_WALLET_CONNECT_MODAL_ID}"></pera-wallet-modal-header/>
        
              <pera-wallet-modal-desktop-mode id="pera-wallet-modal-desktop-mode" uri="${this.getAttribute("uri")}" is-web-wallet-avaliable="${this.getAttribute("is-web-wallet-avaliable")}" should-display-new-badge="${this.getAttribute("should-display-new-badge")}" compact-mode="${this.getAttribute("compact-mode")}" promote-mobile="${this.getAttribute("promote-mobile")}" single-account="${D}"
        ></pera-wallet-modal-desktop-mode>
            </div>
          </div>
        `,this.shadowRoot.append(Je.content.cloneNode(!0),E))}}}var kt=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-redirect-modal {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-redirect-modal__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pera-wallet-redirect-modal__content__title {
  margin: 20px 0 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.26px;
}

.pera-wallet-redirect-modal__content__description,
.pera-wallet-redirect-modal__content__install-pera-text {
  color: #3c3c49;
  max-width: 271px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__content__description {
  margin-bottom: 24px;
}

.pera-wallet-redirect-modal__content__install-pera-text__link {
  color: #6b46fe;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__launch-pera-wallet-button {
  display: block;
  padding: 14px;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}`;Me(kt);const Ye=document.createElement("template");Ye.innerHTML=`
  <div class="pera-wallet-modal pera-wallet-modal--mobile">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${te.PERA_WALLET_REDIRECT_MODAL_ID}"></pera-wallet-modal-header/>

      <div class="pera-wallet-redirect-modal">
        <div class="pera-wallet-redirect-modal__content">
          <img src="data:image/svg+xml,%3csvg width='120' height='38' viewBox='0 0 120 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_38844_290434)'%3e%3cpath d='M103.739 28.6746H109.565' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M112.25 37H100.75C97.5731 37 95 34.2336 95 30.8182V9.18182C95 5.76636 97.5731 3 100.75 3H112.25C115.427 3 118 5.76636 118 9.18182V30.8182C118 34.2336 115.427 37 112.25 37Z' fill='%236B46FE' fill-opacity='0.1' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3crect y='1' width='36' height='36' rx='7.76829' fill='%236B46FE' fill-opacity='0.1'/%3e%3cpath d='M19.6057 9.47351C20.1851 11.8819 19.9967 14.0022 19.1848 14.2093C18.373 14.4164 17.2452 12.6319 16.6658 10.2235C16.0864 7.81514 16.2748 5.69486 17.0867 5.48775C17.8985 5.28063 19.0263 7.06512 19.6057 9.47351Z' fill='%236B46FE'/%3e%3cpath d='M29.0775 11.5213C27.8045 10.1593 25.2795 10.5358 23.4378 12.3621C21.5961 14.1885 21.1352 16.7732 22.4083 18.1352C23.6814 19.4972 26.2064 19.1207 28.048 17.2943C29.8897 15.4679 30.3506 12.8832 29.0775 11.5213Z' fill='%236B46FE'/%3e%3cpath d='M19.0324 32.4518C19.8443 32.2446 20.0039 30.0045 19.3889 27.4483C18.774 24.8921 17.6173 22.9877 16.8055 23.1948C15.9937 23.402 15.834 25.6421 16.449 28.1983C17.064 30.7545 18.2206 32.6589 19.0324 32.4518Z' fill='%236B46FE'/%3e%3cpath d='M10.7016 12.818C13.0471 13.5132 14.7627 14.739 14.5336 15.5559C14.3045 16.3728 12.2175 16.4714 9.87199 15.7762C7.52653 15.0809 5.81087 13.8551 6.03996 13.0383C6.26906 12.2214 8.35615 12.1228 10.7016 12.818Z' fill='%236B46FE'/%3e%3cpath d='M25.9365 21.9967C28.4259 22.7346 30.2583 23.995 30.0292 24.8119C29.8001 25.6287 27.5963 25.6927 25.1069 24.9548C22.6174 24.2169 20.7851 22.9565 21.0141 22.1397C21.2432 21.3228 23.447 21.2588 25.9365 21.9967Z' fill='%236B46FE'/%3e%3cpath d='M13.3578 20.316C12.775 19.7063 10.8709 20.6007 9.10487 22.3139C7.33879 24.0271 6.37952 25.9102 6.96226 26.5199C7.54501 27.1297 9.4491 26.2352 11.2152 24.522C12.9813 22.8089 13.9405 20.9258 13.3578 20.316Z' fill='%236B46FE'/%3e%3cpath d='M70.2098 10L75.3049 15.0945L52 15.0945' stroke='%23D0CAE7' stroke-width='3'/%3e%3cpath d='M60.7902 29.5945L55.6951 24.5L79 24.5' stroke='%23D0CAE7' stroke-width='3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_38844_290434'%3e%3crect width='120' height='38' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />

          <h1 class="pera-wallet-redirect-modal__content__title">
            Can't Launch Pera
          </h1>

          <p class="pera-wallet-redirect-modal__content__description">
            We couldn't redirect you to Pera Wallet automatically. Please try again.
          </p>

          <p class="pera-wallet-redirect-modal__content__install-pera-text">
            Don't have Pera Wallet installed yet?
            <br />
            
            <a
              id="pera-wallet-redirect-modal-download-pera-link"
              class="pera-wallet-redirect-modal__content__install-pera-text__link"
              href="https://perawallet.app/download/"
              rel="noopener noreferrer"
              target="_blank">
              Tap here to install.
            </a>
          </p>
        </div>

        <a
          id="pera-wallet-redirect-modal-launch-pera-link"
          class="pera-wallet-redirect-modal__launch-pera-wallet-button"
          rel="noopener noreferrer"
          target="_blank">
          Launch Pera Wallet
        </a>
      </div>
    </div>
  </div>
`;class ht extends HTMLElement{constructor(){var E,D;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const H=document.createElement("style");H.textContent=kt,this.shadowRoot.append(Ye.content.cloneNode(!0),H);const U=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-redirect-modal-download-pera-link");U==null||U.addEventListener("click",()=>{this.onClose()});const ee=(D=this.shadowRoot)===null||D===void 0?void 0:D.getElementById("pera-wallet-redirect-modal-launch-pera-link");ee==null||ee.addEventListener("click",()=>{this.onClose(),window.open(Ce(),"_blank")})}}connectedCallback(){const E=window.open(Ce(),"_blank");E&&!E.closed&&this.onClose()}onClose(){te.removeModalWrapperFromDOM(te.PERA_WALLET_REDIRECT_MODAL_ID)}}var me="data:image/svg+xml,%3csvg width='32' height='35' viewBox='0 0 32 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.2837 5.09271C19.0234 8.12325 18.7827 10.7913 17.7463 11.0519C16.7098 11.3126 15.27 9.06712 14.5304 6.03657C13.7908 3.00603 14.0315 0.337996 15.0679 0.0773547C16.1044 -0.183287 17.5441 2.06216 18.2837 5.09271Z' fill='%233C3C49'/%3e%3cpath d='M30.376 7.66915C28.7507 5.95537 25.5271 6.42918 23.1759 8.72745C20.8247 11.0257 20.2361 14.2781 21.8614 15.9919C23.4866 17.7057 26.7102 17.2319 29.0614 14.9336C31.4127 12.6354 32.0012 9.38294 30.376 7.66915Z' fill='%233C3C49'/%3e%3cpath d='M17.5511 34.0071C18.5876 33.7465 18.7914 30.9276 18.0064 27.711C17.2214 24.4945 15.7448 22.0982 14.7084 22.3589C13.6719 22.6195 13.4681 25.4383 14.2531 28.6549C15.0381 31.8715 16.5147 34.2677 17.5511 34.0071Z' fill='%233C3C49'/%3e%3cpath d='M6.91617 9.3015C9.9105 10.1763 12.1008 11.7187 11.8083 12.7466C11.5158 13.7745 8.85126 13.8986 5.85693 13.0239C2.8626 12.1491 0.672334 10.6067 0.964835 9.57881C1.25734 8.5509 3.92184 8.42674 6.91617 9.3015Z' fill='%233C3C49'/%3e%3cpath d='M26.3656 20.8508C29.5437 21.7793 31.883 23.3652 31.5905 24.3932C31.298 25.4211 28.4845 25.5017 25.3063 24.5732C22.1282 23.6448 19.7889 22.0588 20.0814 21.0309C20.3739 20.003 23.1874 19.9224 26.3656 20.8508Z' fill='%233C3C49'/%3e%3cpath d='M10.3069 18.7365C9.56299 17.9692 7.13209 19.0948 4.87736 21.2506C2.62264 23.4064 1.39791 25.776 2.14185 26.5432C2.8858 27.3105 5.3167 26.1849 7.57143 24.0291C9.82615 21.8733 11.0509 19.5037 10.3069 18.7365Z' fill='%233C3C49'/%3e%3c/svg%3e",he=`.pera-wallet-connect-modal-information-section {
  padding: 12px;
  padding-right: 0;
}
.pera-wallet-connect-modal-information-section--mobile {
  padding: 0;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__connect-pera-title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__title {
  margin-bottom: 24px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.09px;
  font-weight: 400;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  background-color: #f2f3f8;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
}
.pera-wallet-connect-modal-information-section * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 32px;
}

.pera-wallet-connect-modal-information-section__title {
  margin-bottom: 148px;
  color: #3c3c49;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
}

.pera-wallet-connect-modal-information-section__secondary-title {
  margin-bottom: 20px;
  color: #9d9dae;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06px;
  text-transform: uppercase;
}

.pera-wallet-connect-modal-information-section__features-item {
  display: grid;
  align-items: center;
  grid-template-columns: 36px auto;
  gap: 16px;
}
.pera-wallet-connect-modal-information-section__features-item:not(:last-of-type) {
  margin-bottom: 24px;
}

.pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
}

.pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01px;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-information-section--desktop {
    padding: 0;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__pera-icon {
    margin-bottom: 12px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.26px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__features-item {
    display: none;
  }
  .pera-wallet-connect-modal-information-section__secondary-title {
    display: none;
  }
}`;Me(he);const K=document.createElement("template"),Ee=te.isMobile()?"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--mobile":"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--desktop";K.innerHTML=`
  <section class="${Ee}">
    <img
      id="pera-wallet-connect-modal-information-section-pera-icon"
      src="${me}"
      class="pera-wallet-connect-modal-information-section__pera-icon"
      alt="Pera Wallet Logo"
    />

    <h1 id="pera-wallet-connect-modal-information-section-connect-pera-mobile" class="pera-wallet-connect-modal-information-section__connect-pera-title">
        Connect to Pera Wallet
    </h1>

    <h1 class="pera-wallet-connect-modal-information-section__title">
      Simply the best Algorand wallet.
    </h1>

    <h2 id="pera-wallet-connect-modal-information-section-secondary-title" class="pera-wallet-connect-modal-information-section__secondary-title">
      Features
    </h2>

    <ul>
      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 10.1378C2.5 10.8378 3.025 11.6461 3.66667 11.9294L9.325 14.4461C9.75833 14.6378 10.25 14.6378 10.675 14.4461L16.3333 11.9294C16.975 11.6461 17.5 10.8378 17.5 10.1378M2.5 14.3044C2.5 15.0794 2.95833 15.7794 3.66667 16.0961L9.325 18.6128C9.75833 18.8044 10.25 18.8044 10.675 18.6128L16.3333 16.0961C17.0417 15.7794 17.5 15.0794 17.5 14.3044M10.8417 3.4043L15.7583 5.58763C17.175 6.21263 17.175 7.24596 15.7583 7.87096L10.8417 10.0543C10.2833 10.3043 9.36668 10.3043 8.80835 10.0543L3.89168 7.87096C2.47502 7.24596 2.47502 6.21263 3.89168 5.58763L8.80835 3.4043C9.36668 3.1543 10.2833 3.1543 10.8417 3.4043Z' stroke='%239D9DAE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e" alt="Layer Icon" />
        </div>
        
        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Connect to any Algorand dApp securely
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.58033 12.3109C9.28744 12.018 8.81257 12.018 8.51967 12.3109C8.22678 12.6038 8.22678 13.0787 8.51967 13.3716L9.58033 12.3109ZM10.66 14.4512L10.1297 14.9816C10.4226 15.2745 10.8974 15.2745 11.1903 14.9816L10.66 14.4512ZM15.4903 10.6816C15.7832 10.3887 15.7832 9.91381 15.4903 9.62092C15.1974 9.32803 14.7226 9.32803 14.4297 9.62092L15.4903 10.6816ZM19.84 8.09125C19.84 8.50546 20.1758 8.84125 20.59 8.84125C21.0042 8.84125 21.34 8.50546 21.34 8.09125H19.84ZM18.5 5.07125L18.2368 5.77355L18.2373 5.77375L18.5 5.07125ZM13.51 3.20125L13.7732 2.49894L13.7724 2.49866L13.51 3.20125ZM10.49 3.20125L10.2276 2.49865L10.2256 2.49941L10.49 3.20125ZM5.5 5.08125L5.76268 5.78375L5.76442 5.78309L5.5 5.08125ZM5.14 18.9612L4.69102 19.562L4.69135 19.5623L5.14 18.9612ZM9.44 22.1713L9.89069 21.5718L9.88866 21.5702L9.44 22.1713ZM14.58 22.1713L14.1313 21.5702L14.1293 21.5718L14.58 22.1713ZM18.88 18.9612L19.3287 19.5623L19.329 19.562L18.88 18.9612ZM21.36 8.09125C21.36 7.67704 21.0242 7.34125 20.61 7.34125C20.1958 7.34125 19.86 7.67704 19.86 8.09125H21.36ZM8.51967 13.3716L10.1297 14.9816L11.1903 13.9209L9.58033 12.3109L8.51967 13.3716ZM11.1903 14.9816L15.4903 10.6816L14.4297 9.62092L10.1297 13.9209L11.1903 14.9816ZM21.34 8.09125C21.34 7.29392 21.0398 6.50041 20.5931 5.85456C20.1463 5.20881 19.5097 4.64807 18.7627 4.36875L18.2373 5.77375C18.6403 5.92443 19.0487 6.25869 19.3595 6.70794C19.6702 7.15709 19.84 7.65858 19.84 8.09125H21.34ZM18.7632 4.36895L13.7732 2.49895L13.2468 3.90355L18.2368 5.77355L18.7632 4.36895ZM13.7724 2.49866C13.2479 2.30277 12.6051 2.21875 12 2.21875C11.3949 2.21875 10.7521 2.30277 10.2276 2.49866L10.7524 3.90384C11.0579 3.78973 11.5101 3.71875 12 3.71875C12.4899 3.71875 12.9421 3.78973 13.2476 3.90384L13.7724 2.49866ZM10.2256 2.49941L5.23558 4.37941L5.76442 5.78309L10.7544 3.90309L10.2256 2.49941ZM5.23733 4.37875C4.49043 4.65803 3.85398 5.2186 3.40741 5.86265C2.96095 6.50656 2.66 7.2978 2.66 8.09125H4.16C4.16 7.6647 4.32906 7.16594 4.64009 6.71735C4.95103 6.2689 5.35957 5.93447 5.76268 5.78375L5.23733 4.37875ZM2.66 8.09125V15.5212H4.16V8.09125H2.66ZM2.66 15.5212C2.66 16.2602 2.8989 17.059 3.24874 17.7545C3.59871 18.4503 4.09802 19.1188 4.69102 19.562L5.58899 18.3605C5.23198 18.0937 4.86629 17.6322 4.58877 17.0805C4.31111 16.5285 4.16 15.9623 4.16 15.5212H2.66ZM4.69135 19.5623L8.99135 22.7723L9.88866 21.5702L5.58866 18.3602L4.69135 19.5623ZM8.98932 22.7707C9.84721 23.4157 10.9462 23.7163 12.01 23.7163C13.0738 23.7163 14.1728 23.4157 15.0307 22.7707L14.1293 21.5718C13.5772 21.9868 12.8112 22.2163 12.01 22.2163C11.2088 22.2163 10.4428 21.9868 9.89068 21.5718L8.98932 22.7707ZM15.0287 22.7723L19.3287 19.5623L18.4313 18.3602L14.1313 21.5702L15.0287 22.7723ZM19.329 19.562C19.922 19.1188 20.4213 18.4503 20.7713 17.7545C21.1211 17.059 21.36 16.2602 21.36 15.5212H19.86C19.86 15.9623 19.7089 16.5285 19.4312 17.0805C19.1537 17.6322 18.788 18.0937 18.431 18.3605L19.329 19.562ZM21.36 15.5212V8.09125H19.86V15.5212H21.36Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Tick Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Your private keys are safely stored locally
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.05 9.67014L17.3198 9.49894L18.05 9.67014ZM17.2333 13.1535L16.5031 12.9823L16.5029 12.9835L17.2333 13.1535ZM12.55 17.1285L12.6218 16.3818L12.6098 16.3809L12.55 17.1285ZM11.2 16.9035L11.376 16.1744L11.3737 16.1739L11.2 16.9035ZM9.8 16.5701L9.97372 15.8405L9.97324 15.8404L9.8 16.5701ZM6.06667 10.5451L6.79687 10.7163L6.79696 10.7159L6.06667 10.5451ZM6.88334 7.05347L6.15327 6.88169L6.15304 6.88267L6.88334 7.05347ZM7.5 5.22014L8.17303 5.55114L8.17523 5.54659L7.5 5.22014ZM12.9167 3.32014L12.744 4.05L12.7461 4.05049L12.9167 3.32014ZM14.3083 3.64514L14.4791 2.91485L14.4789 2.91479L14.3083 3.64514ZM10.5917 18.0285L10.359 17.3155L10.3572 17.3161L10.5917 18.0285ZM9.27501 18.4618L9.50516 19.1756L9.50947 19.1742L9.27501 18.4618ZM3.15001 15.3285L2.43654 15.5597L2.43672 15.5603L3.15001 15.3285ZM2.08334 12.0368L1.36953 12.267L1.36987 12.268L2.08334 12.0368ZM5.20834 5.91182L5.43849 6.62565L5.44281 6.62423L5.20834 5.91182ZM6.52501 5.47848L6.29831 4.76352L6.29055 4.76608L6.52501 5.47848ZM10.7177 7.35149C10.3162 7.24967 9.90818 7.49261 9.80635 7.89411C9.70453 8.29561 9.94746 8.70364 10.349 8.80546L10.7177 7.35149ZM14.3906 9.83046C14.7921 9.93229 15.2002 9.68935 15.302 9.28785C15.4038 8.88635 15.1609 8.47832 14.7594 8.37649L14.3906 9.83046ZM9.90211 10.5768C9.50076 10.4743 9.09238 10.7167 8.98996 11.118C8.88755 11.5194 9.12988 11.9278 9.53124 12.0302L9.90211 10.5768ZM11.9479 12.6469C12.3493 12.7493 12.7576 12.5069 12.8601 12.1056C12.9625 11.7042 12.7201 11.2958 12.3188 11.1934L11.9479 12.6469ZM17.3198 9.49894L16.5031 12.9823L17.9635 13.3247L18.7802 9.84133L17.3198 9.49894ZM16.5029 12.9835C16.168 14.4224 15.6979 15.2955 15.1165 15.793C14.5605 16.2688 13.7912 16.4944 12.6218 16.3819L12.4782 17.875C13.9088 18.0126 15.1312 17.7548 16.0918 16.9327C17.0271 16.1323 17.5986 14.8928 17.9638 13.3234L16.5029 12.9835ZM12.6098 16.3809C12.2388 16.3512 11.8281 16.2835 11.376 16.1744L11.024 17.6325C11.5386 17.7567 12.0279 17.8391 12.4902 17.8761L12.6098 16.3809ZM11.3737 16.1739L9.97372 15.8405L9.62629 17.2997L11.0263 17.6331L11.3737 16.1739ZM9.97324 15.8404C8.30732 15.4449 7.40652 14.876 6.96107 14.1588C6.51616 13.4425 6.40566 12.385 6.79687 10.7163L5.33647 10.3739C4.91101 12.1887 4.92968 13.7311 5.68685 14.9502C6.44349 16.1685 7.81769 16.8704 9.62676 17.2999L9.97324 15.8404ZM6.79696 10.7159L7.61363 7.22428L6.15304 6.88267L5.33638 10.3743L6.79696 10.7159ZM7.6134 7.22525C7.77277 6.54795 7.95691 5.99053 8.17301 5.55113L6.82699 4.88915C6.54309 5.46641 6.32724 6.14234 6.15327 6.88169L7.6134 7.22525ZM8.17523 5.54659C8.59604 4.67619 9.11898 4.20234 9.77488 3.97598C10.4657 3.73759 11.4133 3.73525 12.744 4.05L13.0893 2.59028C11.6367 2.2467 10.3635 2.18603 9.28554 2.55805C8.17269 2.94211 7.37896 3.74743 6.82478 4.89369L8.17523 5.54659ZM12.7461 4.05049L14.1378 4.37549L14.4789 2.91479L13.0872 2.58979L12.7461 4.05049ZM14.1375 4.37543C15.8111 4.76687 16.7126 5.33603 17.1575 6.05304C17.6023 6.77006 17.7112 7.82942 17.3198 9.49894L18.7802 9.84133C19.2054 8.02753 19.1893 6.48272 18.4321 5.26224C17.6749 4.04175 16.2972 3.34008 14.4791 2.91485L14.1375 4.37543ZM12.1294 16.5075C11.6911 16.8045 11.1123 17.0697 10.359 17.3155L10.8243 18.7415C11.6544 18.4706 12.3756 18.1525 12.9706 17.7494L12.1294 16.5075ZM10.3572 17.3161L9.04055 17.7494L9.50947 19.1742L10.8261 18.7409L10.3572 17.3161ZM9.04486 17.748C7.46037 18.2589 6.43607 18.2362 5.71663 17.8681C4.99693 17.4999 4.37829 16.6816 3.8633 15.0967L2.43672 15.5603C2.99673 17.2837 3.78642 18.5654 5.03339 19.2035C6.28062 19.8416 7.78131 19.7314 9.50516 19.1756L9.04486 17.748ZM3.86348 15.0973L2.79682 11.8056L1.36987 12.268L2.43654 15.5597L3.86348 15.0973ZM2.79716 11.8067C2.28607 10.2215 2.3068 9.19457 2.67362 8.4739C3.03983 7.75443 3.85506 7.13616 5.43849 6.62563L4.9782 5.198C3.25329 5.75414 1.97269 6.54421 1.33682 7.79348C0.701551 9.04157 0.813948 10.5438 1.36953 12.267L2.79716 11.8067ZM5.44281 6.62423L6.75947 6.19089L6.29055 4.76608L4.97388 5.19941L5.44281 6.62423ZM6.75169 6.19341C7.08205 6.08866 7.37424 6.00724 7.63942 5.95707L7.36058 4.48321C7.00909 4.54971 6.6513 4.65164 6.29833 4.76356L6.75169 6.19341ZM10.349 8.80546L14.3906 9.83046L14.7594 8.37649L10.7177 7.35149L10.349 8.80546ZM9.53124 12.0302L11.9479 12.6469L12.3188 11.1934L9.90211 10.5768L9.53124 12.0302Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Note Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          View NFTs, buy and swap crypto and more
        </p>
      </li>
    </ul>
  </section>
`;class we extends HTMLElement{constructor(){var E,D,H,U;super(),this.attachShadow({mode:"open"});const ee=((E=document.querySelector("pera-wallet-connect-modal"))===null||E===void 0?void 0:E.getAttribute("compact-mode"))==="true";if(this.shadowRoot&&(!ee&&!te.isMobile()||te.isMobile())){const J=document.createElement("style");J.textContent=he,this.shadowRoot.append(K.content.cloneNode(!0),J),te.isMobile()?(D=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-title"))===null||D===void 0||D.setAttribute("style","display: none;"):((H=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-pera-icon"))===null||H===void 0||H.setAttribute("src","data:image/svg+xml,%3csvg width='84' height='38' viewBox='0 0 84 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.806 8.62773C20.4416 11.2609 20.2268 13.5772 19.3262 13.8012C18.4256 14.0253 17.1803 12.0723 16.5448 9.43906C15.9092 6.80585 16.1241 4.48959 17.0246 4.26555C17.9252 4.04151 19.1705 5.99452 19.806 8.62773Z' fill='%233C3C49'/%3e%3cpath d='M30.3007 10.8917C28.8932 9.3999 26.0929 9.80424 24.0461 11.7948C21.9994 13.7853 21.4812 16.6082 22.8887 18.1C24.2962 19.5917 27.0964 19.1874 29.1432 17.1969C31.1899 15.2064 31.7082 12.3834 30.3007 10.8917Z' fill='%233C3C49'/%3e%3cpath d='M19.1061 33.734C20.0067 33.5099 20.1899 31.0627 19.5153 28.2678C18.8408 25.473 17.5639 23.3889 16.6633 23.613C15.7627 23.837 15.5795 26.2843 16.2541 29.0791C16.9286 31.874 18.2056 33.958 19.1061 33.734Z' fill='%233C3C49'/%3e%3cpath d='M9.92571 12.2574C12.5239 13.0236 14.4224 14.3678 14.1662 15.2597C13.9099 16.1517 11.5959 16.2536 8.99771 15.4874C6.3995 14.7212 4.50098 13.377 4.75724 12.4851C5.0135 11.5931 7.3275 11.4912 9.92571 12.2574Z' fill='%233C3C49'/%3e%3cpath d='M26.7892 22.3292C29.5469 23.1424 31.5747 24.5247 31.3184 25.4167C31.0621 26.3086 28.6189 26.3724 25.8612 25.5592C23.1035 24.7459 21.0757 23.3636 21.3319 22.4717C21.5882 21.5797 24.0315 21.5159 26.7892 22.3292Z' fill='%233C3C49'/%3e%3cpath d='M12.8493 20.4577C12.205 19.7898 10.0916 20.7619 8.12896 22.6289C6.16631 24.4959 5.09759 26.5509 5.7419 27.2188C6.38622 27.8867 8.49958 26.9146 10.4622 25.0476C12.4249 23.1806 13.4936 21.1256 12.8493 20.4577Z' fill='%233C3C49'/%3e%3cpath d='M41.691 12.5347V11.9635H39.3366V27.1957H41.691V23.0915C41.691 22.6472 41.691 22.2876 41.6482 21.801H41.691C42.5471 23.1973 44.0026 23.9377 45.7148 23.9377C48.6043 23.9377 51.1299 21.7587 51.1299 17.7179C51.1299 13.7617 48.6043 11.625 45.7148 11.625C44.0668 11.625 42.6113 12.3443 41.691 13.7617H41.6482C41.691 13.2963 41.691 12.9578 41.691 12.5347ZM45.1155 21.9279C42.9324 21.9068 41.6696 20.0662 41.6696 17.6967C41.6696 15.4542 42.9324 13.656 45.1155 13.6348C47.2559 13.6137 48.6685 15.2638 48.6685 17.7179C48.6685 20.2354 47.2559 21.9491 45.1155 21.9279Z' fill='%233C3C49'/%3e%3cpath d='M63.4932 16.7236C63.4932 13.8041 61.1388 11.625 57.9283 11.625C54.5037 11.625 52.1279 13.931 52.1279 17.7814C52.1279 21.4836 54.4609 23.9377 57.9283 23.9377C60.7749 23.9377 62.8939 22.2876 63.3862 20.0239H60.8177C60.4111 21.1663 59.2981 21.9279 57.9283 21.9279C56.1732 21.9279 54.889 20.6797 54.6107 18.6064H63.4932V16.7236ZM57.9283 13.6348C59.662 13.6348 60.8606 14.8195 61.1174 16.5332H54.6321C54.9318 14.883 56.1518 13.6348 57.9283 13.6348Z' fill='%233C3C49'/%3e%3cpath d='M65.224 23.5992H67.5784V17.0409C67.5784 14.7984 68.8198 13.6348 70.7462 13.6348H72.009V11.625H71.003C69.2693 11.625 68.1991 12.7674 67.5784 13.7617H67.5356V11.9635H65.224V23.5992Z' fill='%233C3C49'/%3e%3cpath d='M83.0154 21.5683C82.6944 21.5683 82.5445 21.3779 82.5445 20.9971V15.8773C82.5445 13.4233 81.3459 11.625 77.8144 11.625C74.3898 11.625 72.8273 13.3175 72.6561 15.7292H75.0105C75.1603 14.4176 76.2091 13.6348 77.8144 13.6348C79.1842 13.6348 80.1259 14.2272 80.1259 15.158C80.1259 15.9196 79.5909 16.3851 77.8358 16.3851H76.894C74.0901 16.3851 72.2066 17.5063 72.2066 20.0662C72.2066 22.753 74.1972 23.98 76.5301 23.98C78.2638 23.98 79.7407 23.2184 80.3186 21.5894C80.3828 22.7742 81.1747 23.5992 82.673 23.5992H84V21.5683H83.0154ZM80.1902 18.1833C80.1902 20.8067 78.7561 21.9491 76.9154 21.9491C75.3101 21.9491 74.668 21.0182 74.668 20.0662C74.668 19.1565 75.2245 18.416 76.9368 18.416H77.2793C78.9273 18.416 79.9547 17.8448 80.1688 16.8505H80.1902V18.1833Z' fill='%233C3C49'/%3e%3c/svg%3e"),(U=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-connect-pera-mobile"))===null||U===void 0||U.setAttribute("style","display: none;"))}}}var at=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-connect-modal-pending-message-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 48px;
  gap: 56px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-pending-message {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.pera-wallet-connect-modal-pending-message--try-again-view {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__title {
  margin: 16px 0 12px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.26px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__description {
  color: #6a6a81;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__button {
  display: block;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  color: #ffffff;
  background-color: #6b46fe;
  border: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {
  width: 24px;
  height: 24px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #3c3c49;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {
  /* stylelint-disable value-no-vendor-prefix */
  /* stylelint-disable  property-no-vendor-prefix */
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01px;
  color: #9d9dae;
}

.pera-wallet-connect-modal-pending-message__animation-wrapper {
  width: 56px;
  height: 56px;
  background-color: #6b46fe;
  border-radius: 50%;
}

.pera-wallet-connect-modal-pending-message__text {
  max-width: 271px;
  margin-top: 24px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.26px;
}

.pera-wallet-connect-modal-pending-message__cancel-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  border: none;
}`;Me(at);const rt=document.createElement("template");rt.innerHTML=`
  <div class="pera-wallet-connect-modal-pending-message-section">
    <div class="pera-wallet-connect-modal-pending-message">
      <div id="pera-wallet-connect-modal-pending-message-animation-wrapper" class="pera-wallet-connect-modal-pending-message__animation-wrapper"></div>

      <div class="pera-wallet-connect-modal-pending-message__text">
        Please wait while we connect you to Pera Wallet
      </div>
    </div>

    <button
      id="pera-wallet-connect-modal-pending-message-cancel-button"
      class="pera-wallet-button pera-wallet-connect-modal-pending-message__cancel-button">
        Cancel
    </button>
  </div>

  <div id="pera-wallet-connect-modal-pending-message-audio-wrapper"></div>
`;const Vt=`
  <div class="pera-wallet-connect-modal-pending-message--try-again-view">
    <div>
      <img src="${me}" alt="Pera Wallet Logo" />

      <h1 class="pera-wallet-connect-modal-pending-message--try-again-view__title">
        Couldn’t establish connection
      </h1>

      <p class="pera-wallet-connect-modal-pending-message--try-again-view__description">
        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.
      </p>
    </div>

    <div>
      <a
        href="https://support.perawallet.app/en/article/resolving-walletconnect-issues-1tolptm/"
        target="_blank"
        rel="noopener noreferrer"
        class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">
        <img
          class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"
          alt="Help Icon"
        />

        <div>
          <div
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">
            <h1
              class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">
                Resolving WalletConnect issues
            </h1>

            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>
          </div>

          <p
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">
            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...
          </p>
        </div>
      </a>

      <button id="pera-wallet-connect-modal-pending-message-try-again-button" class="pera-wallet-connect-button pera-wallet-connect-modal-pending-message--try-again-view__button">
        Close & Try Again
      </button>
    </div>
  </div>
  `;class ye extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const E=document.createElement("style");E.textContent=at,this.shadowRoot.append(rt.content.cloneNode(!0),E)}}connectedCallback(){var E;const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-connect-modal-pending-message-cancel-button");D==null||D.addEventListener("click",()=>{this.onClose()}),this.addAudioForConnection(),this.renderLottieAnimation(),setTimeout(()=>{var H;if(rt.innerHTML=Vt,this.shadowRoot){const U=document.createElement("style");U.textContent=at,this.shadowRoot.innerHTML="",this.shadowRoot.append(rt.content.cloneNode(!0),U);const ee=(H=this.shadowRoot)===null||H===void 0?void 0:H.getElementById("pera-wallet-connect-modal-pending-message-try-again-button");ee==null||ee.addEventListener("click",()=>{this.onClose()})}},3e4)}onClose(){te.removeModalWrapperFromDOM(te.PERA_WALLET_CONNECT_MODAL_ID)}addAudioForConnection(){var E;if(this.getAttribute("should-use-sound")==="true"&&te.isIOS()){const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-connect-modal-pending-message-audio-wrapper"),H=document.createElement("audio");H.src="https://s3.amazonaws.com/wc.perawallet.app/audio.mp3",H.autoplay=!0,H.loop=!0,D==null||D.appendChild(H)}}renderLottieAnimation(){var E;const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-connect-modal-pending-message-animation-wrapper");D&&Ke.default.loadAnimation({container:D,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/pera-loader-animation.json"})}}var I=`.pera-wallet-sign-txn-toast {
  --pera-wallet-sign-txn-toast-width: 422px;
  --pera-wallet-sign-txn-toast-height: 134px;
  --pera-wallet-sign-txn-toast-font-family: "Inter", sans-serif;
  position: fixed;
  bottom: 28px;
  right: 35px;
  z-index: 11;
  overflow: hidden;
  width: var(--pera-wallet-sign-txn-toast-width);
  height: var(--pera-wallet-sign-txn-toast-height);
  background: #edeffb;
  border-radius: 8px;
  animation: 0.2s PeraWalletSignTxnToastSlideIn ease-out;
}
.pera-wallet-sign-txn-toast * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-sign-txn-toast-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-sign-txn-toast ul,
.pera-wallet-sign-txn-toast ol,
.pera-wallet-sign-txn-toast li {
  list-style-type: none;
}

.pera-wallet-sign-txn-toast__header__close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.pera-wallet-sign-txn-toast__content__lottie-animation {
  position: absolute;
  top: -75px;
  left: -100px;
  width: 368px;
  height: 368px;
}

.pera-wallet-sign-txn-toast__content__description {
  position: absolute;
  top: 40px;
  right: 48px;
  max-width: 197px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .pera-wallet-sign-txn-toast {
    display: none;
  }
}
@keyframes PeraWalletSignTxnToastSlideIn {
  0% {
    bottom: 12px;
    opacity: 0;
  }
  100% {
    bottom: 26px;
    opacity: 1;
  }
}`;Me(I);const T=document.createElement("template");T.innerHTML=`
  <div class="pera-wallet-sign-txn-toast">
    <div class="pera-wallet-sign-txn-toast__header">
      <button
        id="pera-wallet-sign-txn-toast-close-button"
        class="pera-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="pera-wallet-sign-txn-toast__content">
      <div id="pera-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="pera-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="pera-wallet-sign-txn-toast__content__description">
        Please launch <b>Pera Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;class j extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const E=document.createElement("style");E.textContent=I,this.shadowRoot.append(T.content.cloneNode(!0),E);const D=this.shadowRoot.getElementById("pera-wallet-sign-txn-toast-close-button");D==null||D.addEventListener("click",()=>{te.removeModalWrapperFromDOM(te.PERA_WALLET_SIGN_TXN_TOAST_ID)}),this.renderLottieAnimation()}}renderLottieAnimation(){var E;const D=(E=this.shadowRoot)===null||E===void 0?void 0:E.getElementById("pera-wallet-sign-txn-toast-lottie-animation");D&&Ke.default.loadAnimation({container:D,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/sign-toast-animation.json"})}}var Z=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  --pera-wallet-modal-compact-width: 380px;
  --pera-wallet-modal-compact-height: 396px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal--compact:not(.pera-wallet-modal--mobile) .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
  padding: 0;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
  background-image: unset;
  padding: 0;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body .pera-wallet-sign-txn-modal__body__content {
  width: 100%;
  height: 100%;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body #pera-wallet-iframe {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin: 0 auto;
  border: none;
}

.pera-wallet-sign-txn-modal--compact.pera-wallet-modal .pera-wallet-modal__body {
  width: var(--pera-wallet-modal-compact-width);
  height: var(--pera-wallet-modal-compact-height);
}`;Me(Z);const q=document.createElement("template");q.innerHTML=`
  <div id="pera-wallet-sign-txn-modal" class="${te.PERA_WALLET_MODAL_CLASSNAME} pera-wallet-sign-txn-modal">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${te.PERA_WALLET_SIGN_TXN_MODAL_ID}"></pera-wallet-modal-header/>

      <div class="pera-wallet-sign-txn-modal__body__content" />
    </div>
  </div>
`;class $ extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const E=document.createElement("style");if(E.textContent=Z,this.shadowRoot.append(q.content.cloneNode(!0),E),this.getAttribute("compact-mode")==="true"){const D=this.shadowRoot.getElementById("pera-wallet-sign-txn-modal");D==null||D.classList.add("pera-wallet-sign-txn-modal--compact")}}}}function ie(){document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")}return window.addEventListener("DOMContentLoaded",()=>{ie()}),window.addEventListener("resize",()=>{ie()}),window.customElements.define("pera-wallet-connect-modal",zt),window.customElements.define("pera-wallet-modal-desktop-mode",Ct),window.customElements.define("pera-wallet-modal-header",Oe),window.customElements.define("pera-wallet-modal-touch-screen-mode",Rt),window.customElements.define("pera-wallet-redirect-modal",ht),window.customElements.define("pera-wallet-connect-modal-information-section",we),window.customElements.define("pera-wallet-connect-modal-pending-message-section",ye),window.customElements.define("pera-wallet-sign-txn-toast",j),window.customElements.define("pera-wallet-sign-txn-modal",$),window.customElements.define("pera-wallet-download-qr-code",ot),gn}var yn;function bn(){if(yn)return Ie;yn=1;var te=Xn,re=Yn,qe=Kn;function pe(I){return I&&typeof I=="object"&&"default"in I?I:{default:I}}var Fe=pe(te),Ke=pe(re),Me=pe(qe);function Se(I,T,j,Z){return new(j||(j=Promise))(function(q,$){function ie(D){try{E(Z.next(D))}catch(H){$(H)}}function Q(D){try{E(Z.throw(D))}catch(H){$(H)}}function E(D){var H;D.done?q(D.value):(H=D.value,H instanceof j?H:new j(function(U){U(H)})).then(ie,Q)}E((Z=Z.apply(I,[])).next())})}typeof SuppressedError=="function"&&SuppressedError;class de extends Error{constructor(T,j,...Z){super(...Z),Error.captureStackTrace&&Error.captureStackTrace(this,de),this.name="PeraWalletConnectError",this.data=T,this.message=j}}const nt=new class{constructor(I){this.listener=void 0,this.channel=I.channel}setupListener({onReceiveMessage:I}){this.close(),this.listener=T=>{if(typeof T.data=="object")try{T.data.channel===this.channel&&I(T)}catch(j){console.error(j)}},window.addEventListener("message",this.listener)}sendMessage({message:I,targetWindow:T,origin:j,timeout:Z=1e3}){setTimeout(()=>{const q={channel:this.channel,message:I};T.postMessage(q,{targetOrigin:j||"*"})},Z)}close(){this.listener&&(window.removeEventListener("message",this.listener),this.listener=void 0)}}({channel:"pera-web-wallet"}),Oe=700,xt=50;function Ge(){const I=document.querySelector('meta[name="name"]'),T=document.querySelector('meta[name="description"]');let{title:j}=document,Z="";return I instanceof HTMLMetaElement&&(j=I.content),T instanceof HTMLMetaElement&&(Z=T.content),{title:j,description:Z,url:window.location.origin,favicon:Ft()[0]}}function Ft(){const I=document.getElementsByTagName("link"),T=[];for(let j=0;j<I.length;j++){const Z=I[j],q=Z.getAttribute("rel");if(q&&q.toLowerCase().indexOf("icon")>-1){const $=Z.getAttribute("href");if($&&$.toLowerCase().indexOf("https:")===-1&&$.toLowerCase().indexOf("http:")===-1&&$.indexOf("//")!==0){let ie=`${window.location.protocol}//${window.location.host}`;if($.indexOf("/")===0)ie+=$;else{const Q=window.location.pathname.split("/");Q.pop(),ie+=`${Q.join("/")}/${$}`}T.push(ie)}else if(($==null?void 0:$.indexOf("//"))===0){const ie=window.location.protocol+$;T.push(ie)}else $&&T.push($)}}return T}function ot(I){return new Promise((T,j)=>{try{const Z=window.open(I,"_blank");let q=0;const $=setInterval(()=>{if(q+=1,q===xt)return clearInterval($),void j(new de({type:"MESSAGE_NOT_RECEIVED"},"Couldn't open Pera Wallet, please try again."));Z&&(Z.closed===!0&&(clearInterval($),j(new de({type:"OPERATION_CANCELLED"},"Operation cancelled by user"))),nt.sendMessage({message:{type:"TAB_OPEN"},origin:I,targetWindow:Z}))},Oe);nt.setupListener({onReceiveMessage:ie=>{ie.data.message.type==="TAB_OPEN_RECEIVED"&&(clearInterval($),T(Z))}})}catch(Z){j(Z)}})}const Ze="pera-wallet-connect-modal-wrapper",Pe="pera-wallet-redirect-modal-wrapper",oe="pera-wallet-sign-txn-toast-wrapper",Ue="pera-wallet-modal";function lt(I){const T=document.createElement("div");return T.setAttribute("id",I),document.body.appendChild(T),T}function gt(){lt(Pe).innerHTML="<pera-wallet-redirect-modal></pera-wallet-redirect-modal>"}function Ct(){lt(oe).innerHTML="<pera-wallet-sign-txn-toast></pera-wallet-sign-txn-toast>"}function Ce(I){const T=document.getElementById(I);T&&T.remove()}const $e={WALLET:"PeraWallet.Wallet",WALLETCONNECT:"walletconnect"};function Xe(){return typeof localStorage>"u"?void 0:localStorage}function Rt(I,T){var j;(j=Xe())===null||j===void 0||j.setItem($e.WALLET,JSON.stringify({type:T||"pera-wallet",accounts:I,selectedAccount:I[0]}))}function ge(){var I;const T=(I=Xe())===null||I===void 0?void 0:I.getItem($e.WALLET);return T?JSON.parse(T):null}function Je(){return new Promise((I,T)=>{var j,Z;try{(j=Xe())===null||j===void 0||j.removeItem($e.WALLETCONNECT),(Z=Xe())===null||Z===void 0||Z.removeItem($e.WALLET),I(void 0)}catch(q){T(q)}})}function it(I){const T=I.slice();for(let j=T.length-1;j>0;j--){const Z=Math.floor(Math.random()*(j+1));[T[j],T[Z]]=[T[Z],T[j]]}return T}const zt="https://wc.perawallet.app/config.json";function kt(){return function(I,T={}){return fetch(I,T).then(j=>j.json()).then(j=>j)}(zt,{cache:"no-store"})}function Ye(){return Se(this,void 0,void 0,function*(){let I={bridgeURL:"",webWalletURL:"",isWebWalletAvailable:!1,shouldDisplayNewBadge:!1,shouldUseSound:!0,silent:!1,promoteMobile:!1};try{const T=yield kt();T.web_wallet!==void 0&&T.web_wallet_url&&(I.isWebWalletAvailable=T.web_wallet),T.display_new_badge!==void 0&&(I.shouldDisplayNewBadge=T.display_new_badge),T.use_sound!==void 0&&(I.shouldUseSound=T.use_sound),T.silent!==void 0&&(I.silent=T.silent),T.promote_mobile!==void 0&&(I.promoteMobile=T.promote_mobile),I=Object.assign(Object.assign({},I),{bridgeURL:it(T.servers||[])[0]||"",webWalletURL:T.web_wallet_url||""})}catch(T){console.log(T)}return I})}function ht(I){return Uint8Array.from(window.atob(I),T=>T.charCodeAt(0))}function me(I,T){return{id:Date.now()*Math.pow(10,3)+Math.floor(Math.random()*Math.pow(10,3)),jsonrpc:"2.0",method:I,params:T}}function he(){return typeof navigator<"u"}function K(){return he()&&/Android/i.test(navigator.userAgent)}function Ee(){return he()&&/iPhone|iPod|Android/i.test(navigator.userAgent)}const we=K()?"algorand://":"perawallet-wc://";function at(I){return{ROOT:`https://${I}`,CONNECT:`https://${I}/connect`,TRANSACTION_SIGN:`https://${I}/transaction/sign`}}function rt({method:I,signTxnRequestParams:T,signer:j,chainId:Z,webWalletURL:q,resolve:$,reject:ie}){const Q=at(q);(function(){Se(this,void 0,void 0,function*(){try{const E=yield ot(Q.TRANSACTION_SIGN);if(E){let H;I==="SIGN_TXN"?H={type:"SIGN_TXN",txn:T}:I==="SIGN_DATA"&&j&&Z&&(H={type:"SIGN_DATA",data:T,signer:j,chainId:Z}),H&&nt.sendMessage({message:H,origin:Q.TRANSACTION_SIGN,targetWindow:E})}const D=setInterval(()=>{(E==null?void 0:E.closed)===!0&&(ie(new de({type:`${I}_CANCELLED`},"Transaction signing is cancelled by user.")),clearInterval(D))},2e3);nt.setupListener({onReceiveMessage:H=>function({event:U,newPeraWalletTab:ee,method:J,resolve:se,reject:ce}){switch(U.data.message.type){case"SIGN_TXN_CALLBACK":ee==null||ee.close(),se(U.data.message.signedTxns.map(ve=>ht(ve.signedTxn)));break;case"SIGN_DATA_CALLBACK":ee==null||ee.close(),se(U.data.message.signedData.map(ve=>ht(ve.signedData)));break;case"SIGN_TXN_NETWORK_MISMATCH":ce(new de({type:`${J}_NETWORK_MISMATCH`,detail:U.data.message.error},U.data.message.error||"Network mismatch"));break;case"SIGN_TXN_CALLBACK_ERROR":ee==null||ee.close(),ce(new de({type:`${J}_CANCELLED`},U.data.message.error));break;case"SESSION_DISCONNECTED":ee==null||ee.close(),Je(),ce(new de({type:"SESSION_DISCONNECTED",detail:U.data.message.error},U.data.message.error))}}({event:H,newPeraWalletTab:E,method:I,resolve:$,reject:ie})})}catch(E){ie(E)}})})()}function Vt({webWalletURL:I,chainId:T,resolve:j,reject:Z}){const q=at(I);return function(){return Se(this,void 0,void 0,function*(){try{const ie=yield ot(q.CONNECT);ie&&nt.sendMessage({message:{type:"CONNECT",data:Object.assign(Object.assign({},Ge()),{chainId:T})},origin:q.CONNECT,targetWindow:ie});const Q=setInterval(()=>{(ie==null?void 0:ie.closed)===!0&&(Z(new de({type:"CONNECT_CANCELLED"},"Connect is cancelled by user")),clearInterval(Q),$())},2e3);nt.setupListener({onReceiveMessage:E=>function({event:D,newPeraWalletTab:H,resolve:U,reject:ee}){if(U&&D.data.message.type==="CONNECT_CALLBACK"){const J=D.data.message.data.addresses;Rt(J,"pera-wallet-web"),U(J),Ce(Ze),H==null||H.close()}else D.data.message.type==="CONNECT_NETWORK_MISMATCH"&&(ee(new de({type:"CONNECT_NETWORK_MISMATCH",detail:D.data.message.error},D.data.message.error||"Your wallet is connected to a different network to this dApp. Update your wallet to the correct network (MainNet or TestNet) to continue.")),Ce(Ze),H==null||H.close())}({event:E,newPeraWalletTab:ie,resolve:j,reject:Z})})}catch(ie){$(),Z(ie)}})};function $(){Ce(Ze)}}function ye({isWebWalletAvailable:I,shouldDisplayNewBadge:T,shouldUseSound:j,compactMode:Z,promoteMobile:q,singleAccount:$,selectedAccount:ie}){return{open:(Q={isWebWalletAvailable:I,shouldDisplayNewBadge:T,shouldUseSound:j,compactMode:Z,promoteMobile:q,singleAccount:$,selectedAccount:ie},E=>{if(!document.getElementById(Ze)){const D=lt(Ze),H=`${E}&algorand=true`,{isWebWalletAvailable:U,shouldDisplayNewBadge:ee,shouldUseSound:J,compactMode:se,promoteMobile:ce,singleAccount:ve,selectedAccount:fe}=Q;D.innerHTML=`<pera-wallet-connect-modal uri="${H}" is-web-wallet-avaliable="${U}" should-display-new-badge="${ee}" should-use-sound="${J}" compact-mode="${se}" promote-mobile="${ce}" single-account="${ve}" selected-account="${fe||""}"></pera-wallet-connect-modal>`}}),close:()=>Ce(Ze)};var Q}return typeof window<"u"&&(window.global=window,window.Buffer=window.Buffer||Jn.Buffer,Promise.resolve().then(function(){return ti()})),Ie.PERA_DOWNLOAD_URL="https://perawallet.app/download/",Ie.PERA_WALLET_APP_DEEP_LINK=we,Ie.PERA_WALLET_CONNECT_MODAL_ID=Ze,Ie.PERA_WALLET_MODAL_CLASSNAME=Ue,Ie.PERA_WALLET_REDIRECT_MODAL_ID=Pe,Ie.PERA_WALLET_SIGN_TXN_MODAL_ID="pera-wallet-sign-txn-modal-wrapper",Ie.PERA_WALLET_SIGN_TXN_TOAST_ID=oe,Ie.PeraWalletConnect=class{constructor(I){this.bridge=(I==null?void 0:I.bridge)||"",this.connector=null,this.shouldShowSignTxnToast=(I==null?void 0:I.shouldShowSignTxnToast)===void 0||I.shouldShowSignTxnToast,this.chainId=I==null?void 0:I.chainId,this.compactMode=(I==null?void 0:I.compactMode)||!1,this.singleAccount=(I==null?void 0:I.singleAccount)||!1}get platform(){return function(){const I=ge();let T=null;return(I==null?void 0:I.type)==="pera-wallet"?T="mobile":(I==null?void 0:I.type)==="pera-wallet-web"&&(T="web"),T}()}get isConnected(){var I;return this.platform==="mobile"?!!this.connector:this.platform==="web"&&!!(!((I=ge())===null||I===void 0)&&I.accounts.length)}get isPeraDiscoverBrowser(){return this.checkIsPeraDiscoverBrowser()}connect(I){return new Promise((T,j)=>Se(this,void 0,void 0,function*(){var Z;try{if(!((Z=this.connector)===null||Z===void 0)&&Z.connected)try{yield this.connector.killSession()}catch{}const{isWebWalletAvailable:q,bridgeURL:$,webWalletURL:ie,shouldDisplayNewBadge:Q,shouldUseSound:E,promoteMobile:D}=yield Ye(),H=Vt({resolve:T,reject:j,webWalletURL:ie,chainId:this.chainId,isCompactMode:this.compactMode});q&&(window.onWebWalletConnect=H),this.connector=new Fe.default({bridge:this.bridge||$||"https://bridge.walletconnect.org",qrcodeModal:ye({isWebWalletAvailable:q,shouldDisplayNewBadge:Q,shouldUseSound:E,compactMode:this.compactMode,promoteMobile:D,singleAccount:this.singleAccount,selectedAccount:I==null?void 0:I.selectedAccount})}),yield this.connector.createSession({chainId:this.chainId||4160}),function(U,ee){var J,se,ce,ve;const fe=document.getElementById(U),pt=(se=(J=fe==null?void 0:fe.querySelector(U.replace("-wrapper","")))===null||J===void 0?void 0:J.shadowRoot)===null||se===void 0?void 0:se.querySelector(`.${Ue}`),At=(ve=(ce=pt==null?void 0:pt.querySelector("pera-wallet-modal-header"))===null||ce===void 0?void 0:ce.shadowRoot)===null||ve===void 0?void 0:ve.getElementById("pera-wallet-modal-header-close-button");At==null||At.addEventListener("click",()=>{ee(),Ce(U)})}(Ze,()=>j(new de({type:"CONNECT_MODAL_CLOSED"},"Connect modal is closed by user"))),this.connector.on("connect",(U,ee)=>{var J,se;U&&j(U),T(((J=this.connector)===null||J===void 0?void 0:J.accounts)||[]),Rt(((se=this.connector)===null||se===void 0?void 0:se.accounts)||[])})}catch(q){console.log(q),j(new de({type:"SESSION_CONNECT",detail:q},q.message||"There was an error while connecting to Pera Wallet"))}}))}reconnectSession(){return new Promise((I,T)=>Se(this,void 0,void 0,function*(){var j,Z;try{const q=ge();if(!q)return void I([]);if((q==null?void 0:q.type)==="pera-wallet-web"){const{isWebWalletAvailable:$}=yield Ye();$?I(q.accounts||[]):T(new de({type:"SESSION_RECONNECT",detail:"Pera Web is not available"},"Pera Web is not available"))}this.connector&&I(this.connector.accounts||[]),this.bridge=((j=function(){var $;const ie=($=Xe())===null||$===void 0?void 0:$.getItem($e.WALLETCONNECT);return ie?JSON.parse(ie):null}())===null||j===void 0?void 0:j.bridge)||"",this.bridge&&(this.connector=new Fe.default({bridge:this.bridge}),I(((Z=this.connector)===null||Z===void 0?void 0:Z.accounts)||[])),this.isConnected||I([])}catch(q){yield this.disconnect(),T(new de({type:"SESSION_RECONNECT",detail:q},q.message||"There was an error while reconnecting to Pera Wallet"))}}))}disconnect(){var I;return Se(this,void 0,void 0,function*(){let T;this.isConnected&&this.platform==="mobile"&&(T=(I=this.connector)===null||I===void 0?void 0:I.killSession(),T==null||T.then(()=>{this.connector=null})),yield Je()})}signTransactionWithMobile(I){return Se(this,void 0,void 0,function*(){const T=me("algo_signTxn",[I]);try{try{const{silent:j}=yield Ye(),Z=(yield this.connector.sendCustomRequest(T,{forcePushNotification:!j})).filter(Boolean);return typeof Z[0]=="string"?Z.map(ht):Z.map(q=>Uint8Array.from(q))}catch(j){return yield Promise.reject(new de({type:"SIGN_TRANSACTIONS",detail:j},j.message||"Failed to sign transaction"))}}finally{Ce(Pe),Ce(oe)}})}signTransactionWithWeb(I,T){return new Promise((j,Z)=>rt({signTxnRequestParams:I,webWalletURL:T,method:"SIGN_TXN",resolve:j,reject:Z}))}signDataWithMobile({data:I,signer:T,chainId:j}){return Se(this,void 0,void 0,function*(){const Z=me("algo_signData",I.map(q=>Object.assign(Object.assign({},q),{signer:T,chainId:j})));try{try{const{silent:q}=yield Ye(),$=(yield this.connector.sendCustomRequest(Z,{forcePushNotification:!q})).filter(Boolean);return typeof $[0]=="string"?$.map(ht):$.map(ie=>Uint8Array.from(ie))}catch(q){return yield Promise.reject(new de({type:"SIGN_TRANSACTIONS",detail:q},q.message||"Failed to sign transaction"))}}finally{Ce(Pe),Ce(oe)}})}signDataWithWeb({data:I,signer:T,chainId:j,webWalletURL:Z}){return new Promise((q,$)=>rt({method:"SIGN_DATA",signTxnRequestParams:I,signer:T,chainId:j,webWalletURL:Z,resolve:q,reject:$}))}checkIsPeraDiscoverBrowser(){return window.navigator.userAgent.includes("pera")}signTransaction(I,T){return Se(this,void 0,void 0,function*(){if(this.platform==="mobile"&&(Ee()?gt():!Ee()&&this.shouldShowSignTxnToast&&Ct(),!this.connector))throw new Error("PeraWalletConnect was not initialized correctly.");const j=I.flatMap(Z=>Z.map(q=>function($,ie){let Q;ie&&!($.signers||[]).includes(ie)&&(Q=[]);const E={txn:(D=$.txn,Buffer.from(Ke.default.encodeUnsignedTransaction(D)).toString("base64"))};var D;return Array.isArray(Q)&&(E.signers=Q),$.authAddr&&(E.authAddr=$.authAddr),$.message&&(E.message=$.message),$.msig&&(E.msig=$.msig),E}(q,T)));if(this.platform==="web"){const{webWalletURL:Z}=yield Ye();return this.signTransactionWithWeb(j,Z)}return this.signTransactionWithMobile(j)})}signData(I,T){return Se(this,void 0,void 0,function*(){const j=this.chainId||4160;if(this.platform==="mobile"&&(Ee()?gt():!Ee()&&this.shouldShowSignTxnToast&&Ct(),!this.connector))throw new Error("PeraWalletConnect was not initialized correctly.");if(this.platform==="web"){const{webWalletURL:q}=yield Ye();return this.signDataWithWeb({data:I,signer:T,chainId:j,webWalletURL:q})}const Z=I.map(q=>Object.assign(Object.assign({},q),{data:Buffer.from(q.data).toString("base64")}));return this.signDataWithMobile({data:Z,signer:T,chainId:j})})}},Ie.closePeraWalletSignTxnToast=function(){Ce(oe)},Ie.detectBrowser=function(){if(!he())return null;const{userAgent:I}=navigator;let T;return T=I.match(/DuckDuckGo/i)?"DuckDuckGo":I.match(/OPX/i)?"Opera GX":navigator.brave?"Brave":Me.default.getParser(navigator.userAgent).getBrowserName(),T},Ie.isAndroid=K,Ie.isIOS=function(){return he()&&/iPhone|iPad|iPod/i.test(navigator.userAgent)},Ie.isMobile=Ee,Ie.removeModalWrapperFromDOM=Ce,Ie}var xn,Cn;Object.defineProperty(qt,"__esModule",{value:!0});var _n=bn();Cn=qt.PeraWalletConnect=_n.PeraWalletConnect,xn=qt.closePeraWalletSignTxnToast=_n.closePeraWalletSignTxnToast;const ri=Qn({__proto__:null,get PeraWalletConnect(){return Cn},get closePeraWalletSignTxnToast(){return xn},default:qt},[qt]);export{ri as i};
