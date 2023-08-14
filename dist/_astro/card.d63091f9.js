import{r as x}from"./index.ed373d49.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=x,c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,_=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,a){var r,o={},l=null,p=null;a!==void 0&&(l=""+a),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)m.call(e,r)&&!y.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:l,ref:p,props:o,_owner:_.current}}s.Fragment=u;s.jsx=i;s.jsxs=i;d.exports=s;var n=d.exports;function v(){const e=new URL(location.href).searchParams.get("name");return n.jsxs("div",{className:"flex p-4 bg-gray-50 rounded-md space-x-6",children:[n.jsx("p",{className:"text-3xl font-bold",children:"Hello world "}),n.jsx("p",{children:e}),n.jsx("button",{className:"px-4 h-[30px] leading-[30px] font-bold text-xs rounded-full bg-indigo-500 text-gray-50",children:"Click me"})]})}export{v as default};
