webpackJsonp([3],{81:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),n=l(r),o=a(20),u=l(o),c=a(39),d=a(38),i=a(82),f=(l(i),u.default.div.withConfig({displayName:"Speakers__Clickable"})(["cursor:pointer;"]));t.default=(0,c.withRouteData)(function(e){var t=e.speakers;return n.default.createElement("div",null,n.default.createElement(d.Flex,{flexWrap:"wrap",flexFlow:"rowwrap",p:32},t.map(function(e){return n.default.createElement(f,null,n.default.createElement(d.Box,{width:256,height:400},n.default.createElement(d.Card,{m:16,p:2,width:[1,1,.5],borderRadius:8,boxShadow:"0 0 16px rgba(0, 0, 0, .25)",Flex:!0,onClick:function(){window.location="/speakers/"+e.id}},n.default.createElement(d.Image,{src:e.photo}),n.default.createElement(d.Box,{px:2},n.default.createElement(d.Text,{color:"black",fontSize:4},e.firstName),n.default.createElement(d.Text,{color:"black",fontSize:4},e.lastName)))))})))})}});