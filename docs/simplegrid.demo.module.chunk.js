webpackJsonp(["simplegrid.demo.module"],{mTjC:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},a=e("KhCp"),d=e("kL+h"),i=e("tfJK"),_=e("drlO"),o=e("Un6q"),r=e("TMwh"),p=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/data/simplegrid/simplegrid.html").subscribe(function(n){l=n.text()},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/data/simplegrid/simplegrid.text").subscribe(function(l){n=l.text()},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/componentdata/country.json").subscribe(function(l){n=l.text()},function(l){},function(){e.dataSource=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.getSelectedData=function(l){this.selectedData=l},l}(),m=t._1({encapsulation:2,styles:[],data:{}});function c(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),t._2(4,4243456,null,0,d.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function h(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),t._2(3,4243456,null,0,d.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function s(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,a.b,a.a)),t._2(3,4243456,null,0,d.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSource,"json")},null)}function x(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,170,"amexio-card",[["header","true"]],null,null,null,i._41,i.f)),t._2(2,114688,null,0,_.g,[],{header:[0,"header"]},null),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(4,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),t._2(5,114688,null,0,_.q,[],null,null),(l()(),t._25(-1,0,["\n         Simple Data Grid \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(8,0,null,1,162,"amexio-body",[],null,null,null,i._38,i.c)),t._2(9,114688,null,0,_.d,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Data grid component to render large amount of data-set with various options like sorting in ascending or descending order, client-side pagination, column hide/unhide, single/multi selection, user define template for rendering for column header and column data, displaying summation of numeric column."])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,155,"amexio-tab-view",[],null,null,null,i._55,i.t)),t._2(15,5357568,null,1,_.D,[t.B],null,null),t._23(603979776,1,{queryTabs:1}),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(18,0,null,0,44,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i._56,i.u)),t._2(19,114688,[[1,4]],0,_.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(21,0,null,0,40,"amexio-row",[],null,null,null,i._52,i.q)),t._2(22,1163264,null,0,_.A,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(24,0,null,0,36,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,i._43,i.h)),t._2(25,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(27,0,null,0,32,"amexio-card",[],null,null,null,i._41,i.f)),t._2(28,114688,null,0,_.g,[],{header:[0,"header"]},null),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(30,0,null,0,2,"amexio-header",[],null,null,null,i._46,i.k)),t._2(31,114688,null,0,_.q,[],null,null),(l()(),t._25(-1,0,["\n                     Simple Data Grid \n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(34,0,null,1,24,"amexio-body",[],null,null,null,i._38,i.c)),t._2(35,114688,null,0,_.d,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(37,0,null,0,19,"amexio-datagrid",[["title","Country Grid"]],null,null,null,i._103,i._15)),t._2(38,1425408,null,1,_._44,[_.Y,t.h],{title:[0,"title"],pagesize:[1,"pagesize"],httpurl:[2,"httpurl"],httpmethod:[3,"httpmethod"],datareader:[4,"datareader"],enablecheckbox:[5,"enablecheckbox"],enablecolumnfiter:[6,"enablecolumnfiter"]},null),t._23(603979776,2,{columnRef:1}),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(41,0,null,null,4,"amexio-data-table-column",[],null,[[null,"selectedRowData"]],function(l,n,e){var t=!0;return"selectedRowData"===n&&(t=!1!==l.component.getSelectedData(e)&&t),t},i._104,i._16)),t._2(42,49152,[[2,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"]},null),t._23(335544320,3,{headerTemplate:0}),t._23(335544320,4,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(48,49152,[[2,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"]},null),t._23(335544320,5,{headerTemplate:0}),t._23(335544320,6,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(52,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(53,49152,[[2,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"]},null),t._23(335544320,7,{headerTemplate:0}),t._23(335544320,8,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,0,["\n                 "])),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(64,0,null,0,70,"amexio-tab",[["title","API Reference"]],null,null,null,i._56,i.u)),t._2(65,114688,[[1,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(67,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,i._103,i._15)),t._2(68,1425408,null,1,_._44,[_.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,9,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(72,49152,[[9,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,10,{headerTemplate:0}),t._23(335544320,11,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(76,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(77,49152,[[9,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,12,{headerTemplate:0}),t._23(335544320,13,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(82,49152,[[9,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,14,{headerTemplate:0}),t._23(335544320,15,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(87,49152,[[9,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,16,{headerTemplate:0}),t._23(335544320,17,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(91,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(93,0,null,0,23,"amexio-datagrid",[["title","Column Properties"]],null,null,null,i._103,i._15)),t._2(94,1425408,null,1,_._44,[_.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,18,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(98,49152,[[18,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,19,{headerTemplate:0}),t._23(335544320,20,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(103,49152,[[18,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,21,{headerTemplate:0}),t._23(335544320,22,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(108,49152,[[18,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,23,{headerTemplate:0}),t._23(335544320,24,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(112,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(113,49152,[[18,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,25,{headerTemplate:0}),t._23(335544320,26,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(118,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(120,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,i._103,i._15)),t._2(121,1425408,null,1,_._44,[_.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t._23(603979776,27,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(124,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(125,49152,[[27,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,28,{headerTemplate:0}),t._23(335544320,29,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,i._104,i._16)),t._2(130,49152,[[27,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,30,{headerTemplate:0}),t._23(335544320,31,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(136,0,null,0,28,"amexio-tab",[["title","Source"]],null,null,null,i._56,i.u)),t._2(137,114688,[[1,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(139,0,null,0,24,"amexio-vertical-tab-view",[],null,null,null,i._58,i.w)),t._2(140,5357568,null,1,_.I,[t.B],null,null),t._23(603979776,32,{queryTabs:1}),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(143,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,i._56,i.u)),t._2(144,114688,[[32,4]],0,_.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,c)),t._2(147,16384,null,0,o.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(150,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,i._56,i.u)),t._2(151,114688,[[32,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,h)),t._2(154,16384,null,0,o.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(157,0,null,0,5,"amexio-tab",[["title","DataSource"]],null,null,null,i._56,i.u)),t._2(158,114688,[[32,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,s)),t._2(161,16384,null,0,o.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(166,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,i._56,i.u)),t._2(167,114688,[[1,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            Work in Progress\n          "])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,"12"),l(n,28,0,!0),l(n,31,0),l(n,35,0),l(n,38,0,"Country Grid",10,"assets/data/componentdata/country.json","get","data",!1,!0),l(n,42,0,"Name","countryName",!1,"string"),l(n,48,0,"Code","countryCode1",!1,"string"),l(n,53,0,"Currency","currencyName",!1,"string"),l(n,65,0,"API Reference"),l(n,68,0,"Properties","assets/apireference/data/grid.json","get","properties",!1,!1),l(n,72,0,"Name","name",!1,"string",20),l(n,77,0,"Type","type",!1,"string",10),l(n,82,0,"Default","default",!1,"string",10),l(n,87,0,"Description","description",!1,"string",65),l(n,94,0,"Column Properties","assets/apireference/data/grid.json","get","columnProperties",!1,!1),l(n,98,0,"Name","name",!1,"string",15),l(n,103,0,"Type","type",!1,"string",10),l(n,108,0,"Default","default",!1,"string",10),l(n,113,0,"Description","description",!1,"string",65),l(n,121,0,"Events","assets/apireference/data/grid.json","get","events",!1),l(n,125,0,"Name","name",!1,"string",20),l(n,130,0,"Description","description",!1,"string",65),l(n,137,0,"Source"),l(n,140,0),l(n,144,0,"HTML",!0),l(n,147,0,e.htmlCode),l(n,151,0,"Type Script"),l(n,154,0,e.typeScriptCode),l(n,158,0,"DataSource"),l(n,161,0,e.dataSource),l(n,167,0,"Live")},function(l,n){l(n,24,0,t._16(n,25).colclass)})}var y=t.Z("simplegridr-demo",p,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"simplegridr-demo",[],null,null,null,x,m)),t._2(1,49152,null,0,p,[r.e],null,null)],null,null)},{},{},[]),g=e("0nO6"),b=e("UHIZ");e.d(n,"SimpleGridDemoModuleNgFactory",function(){return f});var f=t._0(u,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[y]],[3,t.j],t.v]),t._13(4608,o.n,o.m,[t.s,[2,o.u]]),t._13(4608,g.n,g.n,[]),t._13(4608,r.c,r.c,[]),t._13(4608,r.h,r.b,[]),t._13(5120,r.j,r.k,[]),t._13(4608,r.i,r.i,[r.c,r.h,r.j]),t._13(4608,r.g,r.a,[]),t._13(5120,r.e,r.l,[r.i,r.g]),t._13(4608,_.a,_.a,[]),t._13(512,o.b,o.b,[]),t._13(512,g.k,g.k,[]),t._13(512,g.d,g.d,[]),t._13(512,r.f,r.f,[]),t._13(512,d.b,d.b,[]),t._13(512,_.r,_.r,[]),t._13(512,_.p,_.p,[]),t._13(512,_._34,_._34,[]),t._13(512,_.v,_.v,[]),t._13(512,_.y,_.y,[]),t._13(512,_.l,_.l,[]),t._13(512,_.J,_.J,[]),t._13(512,b.m,b.m,[[2,b.r],[2,b.k]]),t._13(512,u,u,[]),t._13(1024,b.i,function(){return[[{path:"",component:p,pathMatch:"full"}]]},[])])})}});