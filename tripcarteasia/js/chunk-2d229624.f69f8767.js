(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229624"],{dce4:function(a,o,r){"use strict";r.r(o);var s=function(){var a=this,o=a.$createElement,r=a._self._c||o;return r("div",{attrs:{id:"form-element-radio-demo"}},[r("radio-default"),r("radio-color")],1)},l=[],i=function(){var a=this,o=a.$createElement,r=a._self._c||o;return r("vx-card",{attrs:{title:"Default","code-toggler":""}},[r("p",[a._v("To implement a radio button you just add the "),r("code",[a._v("vs-radio")]),a._v(" component and add a "),r("code",[a._v("v-model")])]),r("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[r("span",[a._v("The "),r("strong",[a._v("Radio Button")]),a._v(" is always going to replace the current value.")])]),r("ul",{staticClass:"demo-alignment"},[r("li",[r("vs-radio",{attrs:{"vs-value":"luis"},model:{value:a.radios1,callback:function(o){a.radios1=o},expression:"radios1"}},[a._v("Luis")])],1),r("li",[r("vs-radio",{attrs:{"vs-value":"carols"},model:{value:a.radios1,callback:function(o){a.radios1=o},expression:"radios1"}},[a._v("Carols")])],1),r("li",[r("vs-radio",{attrs:{"vs-value":"summer"},model:{value:a.radios1,callback:function(o){a.radios1=o},expression:"radios1"}},[a._v("Summer")])],1),r("li",[r("vs-radio",{attrs:{disabled:"true","vs-value":"lyon"},model:{value:a.radios1,callback:function(o){a.radios1=o},expression:"radios1"}},[a._v("Lyon - disabled")])],1),r("li",{staticClass:"op-block"},[a._v("\n                "+a._s(a.radios1)+"\n            ")])]),r("template",{slot:"codeContainer"},[a._v('\n\n<ul class="centerx">\n  <li>\n    <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>\n  </li>\n  <li>\n    <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>\n  </li>\n  <li>\n    <vs-radio v-model="radios1" vs-value="summer">Summer</vs-radio>\n  </li>\n  <li>\n    <vs-radio disabled="true" v-model="radios1" vs-value="lyon">Lyon - disabled</vs-radio>\n  </li>\n  <li class="modelx">\n    '+a._s("{{ radios1 }}")+"\n  </li>\n</ul>\n\n<script>\nexport default {\n  data(){\n    return {\n      radios1:'luis',\n    }\n  }\n}\n<\/script>\n\n        ")])],2)},n=[],e={data:function(){return{radios1:"luis"}}},d=e,t=r("2877"),v=Object(t["a"])(d,i,n,!1,null,null,null),c=v.exports,u=function(){var a=this,o=a.$createElement,r=a._self._c||o;return r("vx-card",{attrs:{title:"Color","code-toggler":""}},[r("p",[a._v("You can change the color with the property "),r("code",[a._v("color")]),a._v(". You are able to use the "),r("router-link",{attrs:{to:"/colors"}},[a._v("Main Colors")]),a._v(" or "),r("strong",[a._v("RGB")]),a._v(" and "),r("strong",[a._v("HEX")]),a._v(" colors.")],1),r("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[r("span",[a._v("Only "),r("strong",[a._v("RGB")]),a._v(" and "),r("strong",[a._v("HEX")]),a._v(" colors are supported.")])]),r("ul",{staticClass:"demo-alignment"},[r("li",[r("vs-radio",{attrs:{"vs-value":"primary"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("Primary")])],1),r("li",[r("vs-radio",{attrs:{color:"success","vs-value":"Success"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("Success")])],1),r("li",[r("vs-radio",{attrs:{color:"danger","vs-value":"Danger"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("Danger")])],1),r("li",[r("vs-radio",{attrs:{color:"warning","vs-value":"Warning"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("Warning")])],1),r("li",[r("vs-radio",{attrs:{color:"dark","vs-value":"Dark"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("Dark")])],1),r("li",[r("vs-radio",{attrs:{color:"rgb(87, 251, 187)","vs-value":"RGB"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("RGB")])],1),r("li",[r("vs-radio",{attrs:{color:"#e48346","vs-value":"HEX"},model:{value:a.radios2,callback:function(o){a.radios2=o},expression:"radios2"}},[a._v("HEX")])],1),r("li",{staticClass:"op-block"},[a._v("\n                "+a._s(a.radios2)+"\n            ")])]),r("template",{slot:"codeContainer"},[a._v('\n\n<template>\n    <ul class="centerx">\n      <li>\n        <vs-radio v-model="radios2" vs-value="primary">Primary</vs-radio>\n      </li>\n      <li>\n        <vs-radio color="success" v-model="radios2" vs-value="Success">Success</vs-radio>\n      </li>\n      <li>\n        <vs-radio color="danger" v-model="radios2" vs-value="Danger">Danger</vs-radio>\n      </li>\n      <li>\n        <vs-radio color="warning" v-model="radios2" vs-value="Warning">Warning</vs-radio>\n      </li>\n      <li>\n        <vs-radio color="dark" v-model="radios2" vs-value="Dark">Dark</vs-radio>\n      </li>\n      <li>\n        <vs-radio color="rgb(87, 251, 187)" v-model="radios2" vs-value="RGB">RGB</vs-radio>\n      </li>\n      <li>\n        <vs-radio color="#e48346" v-model="radios2" vs-value="HEX">HEX</vs-radio>\n      </li>\n      <li class="modelx">\n        '+a._s("{{ radios2 }}")+"}\n      </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      radios2:'primary',\n    }\n  }\n}\n<\/script>\n\n        ")])],2)},m=[],p={data:function(){return{radios2:"primary"}}},_=p,g=Object(t["a"])(_,u,m,!1,null,null,null),f=g.exports,b={components:{RadioDefault:c,RadioColor:f}},k=b,x=Object(t["a"])(k,s,l,!1,null,null,null);o["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d229624.f69f8767.js.map