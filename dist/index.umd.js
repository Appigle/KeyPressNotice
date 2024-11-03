(function(s,Y){typeof exports=="object"&&typeof module<"u"?module.exports=Y(require("react")):typeof define=="function"&&define.amd?define(["react"],Y):(s=typeof globalThis<"u"?globalThis:s||self,s["react-key-press-notice"]=Y(s.React))})(this,function(s){"use strict";var Y={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function Ne(){if(pe)return X;pe=1;var K=s,m=Symbol.for("react.element"),S=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,D=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function k(R,l,F){var f,y={},T=null,N=null;F!==void 0&&(T=""+F),l.key!==void 0&&(T=""+l.key),l.ref!==void 0&&(N=l.ref);for(f in l)b.call(l,f)&&!E.hasOwnProperty(f)&&(y[f]=l[f]);if(R&&R.defaultProps)for(f in l=R.defaultProps,l)y[f]===void 0&&(y[f]=l[f]);return{$$typeof:m,type:R,key:T,ref:N,props:y,_owner:D.current}}return X.Fragment=S,X.jsx=k,X.jsxs=k,X}var H={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function We(){return me||(me=1,process.env.NODE_ENV!=="production"&&function(){var K=s,m=Symbol.for("react.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),R=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),W=Symbol.iterator,I="@@iterator";function U(e){if(e===null||typeof e!="object")return null;var r=W&&e[W]||e[I];return typeof r=="function"?r:null}var P=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];M("error",e,t)}}function M(e,r,t){{var n=P.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var v=!1,w=!1,V=!1,x=!1,_=!1,c;c=Symbol.for("react.module.reference");function h(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===E||_||e===D||e===F||e===f||x||e===N||v||w||V||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===y||e.$$typeof===k||e.$$typeof===R||e.$$typeof===l||e.$$typeof===c||e.getModuleId!==void 0))}function C(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function Q(e){return e.displayName||"Context"}function A(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Portal";case E:return"Profiler";case D:return"StrictMode";case F:return"Suspense";case f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return Q(r)+".Consumer";case k:var t=e;return Q(t._context)+".Provider";case l:return C(e,e.render,"ForwardRef");case y:var n=e.displayName||null;return n!==null?n:A(e.type)||"Memo";case T:{var i=e,u=i._payload,o=i._init;try{return A(o(u))}catch{return null}}}return null}var B=Object.assign,q=0,ye,ge,he,Ee,be,Re,_e;function Se(){}Se.__reactDisabledLog=!0;function Ye(){{if(q===0){ye=console.log,ge=console.info,he=console.warn,Ee=console.error,be=console.group,Re=console.groupCollapsed,_e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function Ue(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},e,{value:ye}),info:B({},e,{value:ge}),warn:B({},e,{value:he}),error:B({},e,{value:Ee}),group:B({},e,{value:be}),groupCollapsed:B({},e,{value:Re}),groupEnd:B({},e,{value:_e})})}q<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=P.ReactCurrentDispatcher,ie;function re(e,r,t){{if(ie===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||""}return`
`+ie+e}}var ue=!1,te;{var Ve=typeof WeakMap=="function"?WeakMap:Map;te=new Ve}function Te(e,r){if(!e||ue)return"";{var t=te.get(e);if(t!==void 0)return t}var n;ue=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=oe.current,oe.current=null,Ye();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(j){n=j}Reflect.construct(e,[],o)}else{try{o.call()}catch(j){n=j}e.call(o.prototype)}}else{try{throw Error()}catch(j){n=j}e()}}catch(j){if(j&&n&&typeof j.stack=="string"){for(var a=j.stack.split(`
`),O=n.stack.split(`
`),d=a.length-1,p=O.length-1;d>=1&&p>=0&&a[d]!==O[p];)p--;for(;d>=1&&p>=0;d--,p--)if(a[d]!==O[p]){if(d!==1||p!==1)do if(d--,p--,p<0||a[d]!==O[p]){var L=`
`+a[d].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,L),L}while(d>=1&&p>=0);break}}}finally{ue=!1,oe.current=u,Ue(),Error.prepareStackTrace=i}var G=e?e.displayName||e.name:"",J=G?re(G):"";return typeof e=="function"&&te.set(e,J),J}function Be(e,r,t){return Te(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ne(e,r,t){if(e==null)return"";if(typeof e=="function")return Te(e,Je(e));if(typeof e=="string")return re(e);switch(e){case F:return re("Suspense");case f:return re("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Be(e.render);case y:return ne(e.type,r,t);case T:{var n=e,i=n._payload,u=n._init;try{return ne(u(i),r,t)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,we={},Ce=P.ReactDebugCurrentFrame;function ae(e){if(e){var r=e._owner,t=ne(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(t)}else Ce.setExtraStackFrame(null)}function ze(e,r,t,n,i){{var u=Function.call.bind($);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var O=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(d){a=d}a&&!(a instanceof Error)&&(ae(i),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),ae(null)),a instanceof Error&&!(a.message in we)&&(we[a.message]=!0,ae(i),g("Failed %s type: %s",t,a.message),ae(null))}}}var Ge=Array.isArray;function se(e){return Ge(e)}function Xe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return Oe(e),!1}catch{return!0}}function Oe(e){return""+e}function ke(e){if(He(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xe(e)),Oe(e)}var ee=P.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},Fe,Pe,ce;ce={};function Qe(e){if($.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function qe(e){if($.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function $e(e,r){if(typeof e.ref=="string"&&ee.current&&r&&ee.current.stateNode!==r){var t=A(ee.current.type);ce[t]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',A(ee.current.type),e.ref),ce[t]=!0)}}function er(e,r){{var t=function(){Fe||(Fe=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function rr(e,r){{var t=function(){Pe||(Pe=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var tr=function(e,r,t,n,i,u,o){var a={$$typeof:m,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function nr(e,r,t,n,i){{var u,o={},a=null,O=null;t!==void 0&&(ke(t),a=""+t),qe(r)&&(ke(r.key),a=""+r.key),Qe(r)&&(O=r.ref,$e(r,i));for(u in r)$.call(r,u)&&!Ze.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var d=e.defaultProps;for(u in d)o[u]===void 0&&(o[u]=d[u])}if(a||O){var p=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&er(o,p),O&&rr(o,p)}return tr(e,a,O,i,n,ee.current,o)}}var le=P.ReactCurrentOwner,xe=P.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=ne(e.type,e._source,r?r.type:null);xe.setExtraStackFrame(t)}else xe.setExtraStackFrame(null)}var fe;fe=!1;function de(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function je(){{if(le.current){var e=A(le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ar(e){return""}var De={};function or(e){{var r=je();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ae(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=or(r);if(De[t])return;De[t]=!0;var n="";e&&e._owner&&e._owner!==le.current&&(n=" It was passed a child from "+A(e._owner.type)+"."),z(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),z(null)}}function Le(e,r){{if(typeof e!="object")return;if(se(e))for(var t=0;t<e.length;t++){var n=e[t];de(n)&&Ae(n,r)}else if(de(e))e._store&&(e._store.validated=!0);else if(e){var i=U(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)de(o.value)&&Ae(o.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===y))t=r.propTypes;else return;if(t){var n=A(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!fe){fe=!0;var i=A(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){z(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),z(null);break}}e.ref!==null&&(z(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),z(null))}}var Ie={};function Ke(e,r,t,n,i,u){{var o=h(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=ar();O?a+=O:a+=je();var d;e===null?d="null":se(e)?d="array":e!==void 0&&e.$$typeof===m?(d="<"+(A(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):d=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",d,a)}var p=nr(e,r,t,i,u);if(p==null)return p;if(o){var L=r.children;if(L!==void 0)if(n)if(se(L)){for(var G=0;G<L.length;G++)Le(L[G],e);Object.freeze&&Object.freeze(L)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Le(L,e)}if($.call(r,"key")){var J=A(e),j=Object.keys(r).filter(function(vr){return vr!=="key"}),ve=j.length>0?"{key: someKey, "+j.join(": ..., ")+": ...}":"{key: someKey}";if(!Ie[J+ve]){var dr=j.length>0?"{"+j.join(": ..., ")+": ...}":"{}";g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ve,J,dr,J),Ie[J+ve]=!0}}return e===b?ur(p):ir(p),p}}function sr(e,r,t){return Ke(e,r,t,!0)}function cr(e,r,t){return Ke(e,r,t,!1)}var lr=cr,fr=sr;H.Fragment=b,H.jsx=lr,H.jsxs=fr}()),H}process.env.NODE_ENV==="production"?Y.exports=Ne():Y.exports=We();var Z=Y.exports;function Me(K,m,S){const b=s.useRef(0),D=s.useRef(0),E=s.useRef(0),k=s.useRef([]),R=s.useRef(),l=s.useRef(),F=s.useRef(K),f=s.useRef(!0);F.current=K;const y=typeof window<"u",T=!m&&m!==0&&y;if(typeof K!="function")throw new TypeError("Expected a function");m=+(m||0),S=S||{};const N=!!S.leading,W="trailing"in S?!!S.trailing:!0,I="maxWait"in S,U="debounceOnServer"in S?!!S.debounceOnServer:!1,P=I?Math.max(+(S.maxWait||0),m):null;return s.useEffect(()=>(f.current=!0,()=>{f.current=!1}),[]),s.useMemo(()=>{const M=c=>{const h=k.current,C=R.current;return k.current=R.current=[],D.current=c,l.current=F.current.apply(C,h||[])},v=(c,h)=>{T&&cancelAnimationFrame(E.current||0),E.current=T?window.requestAnimationFrame(c):window.setTimeout(c,h)},w=c=>{if(!f.current)return!1;const h=c-b.current,C=c-D.current;return!b.current||h>=m||h<0||I&&C>=(P||0)},V=c=>(E.current=0,W&&k.current?M(c):(k.current=R.current=[],l.current)),x=()=>{const c=Date.now();if(w(c))return V(c);if(!f.current)return;const h=c-b.current,C=c-D.current,Q=m-h,A=I?Math.min(Q,(P||0)-C):Q;v(x,A)},_=(...c)=>{if(!y&&!U)return;const h=Date.now(),C=w(h);if(k.current=c,R.current=this,b.current=h,C){if(!E.current&&f.current)return D.current=b.current,v(x,m),N?M(b.current):l.current;if(I)return v(x,m),M(b.current)}return E.current||v(x,m),l.current};return _.cancel=()=>{E.current&&(T?cancelAnimationFrame(E.current):clearTimeout(E.current)),D.current=0,k.current=[],b.current=R.current=E.current=0},_.isPending=()=>!!E.current,_.flush=()=>E.current?V(Date.now()):l.current,_},[N,I,m,P,W,T,y,U])}return K=>{const{top:m="75%",left:S="0",containerCls:b="",containerStyle:D,kbdCls:E,kbdStyles:k={},showTime:R=500,customKeyEmojiMap:l,enable:F=!0}=K,[f]=s.useState({KeyA:"🅰",KeyB:"🅱",KeyC:"🅲",KeyD:"🅳",KeyE:"🅴",KeyF:"🅵",KeyG:"🅶",KeyH:"🅷",KeyI:"🅸",KeyJ:"🅹",KeyK:"🅺",KeyL:"🅻",KeyM:"🅼",KeyN:"🅽",KeyO:"🅾",KeyP:"🅿",KeyQ:"🆀",KeyR:"🆁",KeyS:"🆂",KeyT:"🆃",KeyU:"🆄",KeyV:"🆅",KeyW:"🆆",KeyX:"🆇",KeyY:"🆈",KeyZ:"🆉",Digit0:"0️⃣",Digit1:"1️⃣",Digit2:"2️⃣",Digit3:"3️⃣",Digit4:"4️⃣",Digit5:"5️⃣",Digit6:"6️⃣",Digit7:"7️⃣",Digit8:"8️⃣",Digit9:"9️⃣",Enter:"↵",Space:"␣",Backspace:"⌫",Tab:"⇥",ShiftLeft:"⇧",ControlLeft:"⌃",AltLeft:"⌥",MetaLeft:"⌘",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",CapsLock:"⇪",PageUp:"⇞",PageDown:"⇟",Home:"🏠",End:"🔚",Insert:"Ins",Delete:"Del",F1:"F1",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",F10:"F10",F11:"F11",F12:"F12",NumLock:"Num Lock",Numpad0:"0️⃣",Numpad1:"1️⃣",Numpad2:"2️⃣",Numpad3:"3️⃣",Numpad4:"4️⃣",Numpad5:"5️⃣",Numpad6:"6️⃣",Numpad7:"7️⃣",Numpad8:"8️⃣",Numpad9:"9️⃣",NumpadAdd:"+",NumpadSubtract:"-",NumpadMultiply:"×",NumpadDivide:"÷",NumpadDecimal:".",...l}),[y,T]=s.useState([]),[N,W]=s.useState(!1),[I,U]=s.useState(!1),P=s.useRef(0),g=s.useCallback(()=>{I||y.length===0||(P.current&&clearInterval(P.current),P.current=window.setTimeout(()=>{T([])},R-500))},[I,R,y]),M=Me(g,500);return s.useEffect(()=>{const v=V=>{F&&(U(!0),T(x=>[...x,V]))},w=()=>{U(!1)};return F?(document.addEventListener("keydown",v),document.addEventListener("keyup",w)):(document.removeEventListener("keydown",v),document.removeEventListener("keyup",w)),()=>{document.removeEventListener("keydown",v),document.removeEventListener("keyup",w)}},[F]),s.useEffect(()=>{M()},[M,y]),s.useEffect(()=>{const v=()=>{W(!0)},w=()=>{W(!1)};new MutationObserver(_=>{for(const c of _)c.type==="childList"&&(c.addedNodes.length>0&&c.addedNodes.forEach(h=>{h.querySelectorAll&&h.querySelectorAll('input[type="password"]').forEach(C=>{C.addEventListener("focus",v),C.addEventListener("blur",w)})}),c.removedNodes.length>0&&c.removedNodes.forEach(h=>{h.querySelectorAll&&h.querySelectorAll('input[type="password"]').forEach(C=>{C.removeEventListener("focus",v),C.removeEventListener("blur",w)})}))}).observe(document.documentElement,{childList:!0,subtree:!0});const x=[];return document.querySelectorAll('input[type="password"]').forEach(_=>{x.push(_)}),x.forEach(_=>{_.addEventListener("focus",v),_.addEventListener("blur",w)}),()=>{x==null||x.forEach(_=>{_.removeEventListener("focus",v),_.removeEventListener("blur",w)})}},[]),Z.jsx(Z.Fragment,{children:F&&!N&&y.length>0&&Z.jsx("div",{className:b,style:{position:"absolute",zIndex:20,display:"flex",height:"4rem",width:"100%",alignItems:"center",justifyContent:"center",gap:"1rem",backgroundColor:"transparent",top:m,left:S,...D},children:y.map((v,w)=>Z.jsx("div",{className:E,style:{inset:0,display:"flex",height:"4rem",width:"auto",minWidth:"4rem",alignItems:"center",justifyContent:"center",borderRadius:".5rem",backgroundColor:"#202020",padding:".5rem",fontSize:"1.5rem",fontWeight:"bold",color:"#fff",opacity:.75,...k},children:f[v.code]?Z.jsx("span",{className:"emoji-key",style:{fontSize:"2.5rem"},children:f[v.code]}):v.key},`${w}-${v}`))})})}});
//# sourceMappingURL=index.umd.js.map
