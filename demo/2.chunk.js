webpackJsonp([2],{"D+R9":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=e("TMwh"),a=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/layout/panel/panel.html").subscribe(function(n){l=n.text()},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/layout/panel/panel.text").subscribe(function(l){n=l.text()},function(l){},function(){e.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),i=function(){},o=e("KhCp"),_=e("kL+h"),d=e("tfJK"),r=e("drlO"),s=e("Un6q"),p=t._1({encapsulation:2,styles:[],data:{}});function m(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(4,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function c(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                    "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(3,4243456,null,0,_.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                  "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function h(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,139,"amexio-card",[["header","true"]],null,null,null,d._41,d.f)),t._2(2,114688,null,0,r.g,[],{header:[0,"header"]},null),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(4,0,null,0,2,"amexio-header",[],null,null,null,d._46,d.k)),t._2(5,114688,null,0,r.q,[],null,null),(l()(),t._25(-1,0,["\n         Panel \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(8,0,null,1,131,"amexio-body",[],null,null,null,d._38,d.c)),t._2(9,114688,null,0,r.d,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Panel provides an easy way to organize big forms by grouping the fields in panel"])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,124,"amexio-tab-view",[],null,null,null,d._55,d.t)),t._2(15,5357568,null,1,r.D,[t.B],null,null),t._23(603979776,1,{queryTabs:1}),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(18,0,null,0,45,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,d._56,d.u)),t._2(19,114688,[[1,4]],0,r.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(21,0,null,0,41,"amexio-row",[],null,null,null,d._52,d.q)),t._2(22,1163264,null,0,r.A,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(24,0,null,0,6,"amexio-column",[],[[8,"className",0]],null,null,d._43,d.h)),t._2(25,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(27,0,null,0,2,"amexio-panel",[["expanded","true"],["title","Panel"]],null,null,null,d._102,d._14)),t._2(28,114688,null,0,r._42,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],customheader:[3,"customheader"]},null),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(32,0,null,0,17,"amexio-column",[],[[8,"className",0]],null,null,d._43,d.h)),t._2(33,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(35,0,null,0,13,"amexio-panel",[["expanded","true"],["title","Panel"]],null,null,null,d._102,d._14)),t._2(36,114688,null,0,r._42,[],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],customheader:[3,"customheader"]},null),(l()(),t._25(-1,1,["\n                  "])),(l()(),t._3(38,0,null,0,9,"amexio-header",[],null,null,null,d._46,d.k)),t._2(39,114688,null,0,r.q,[],null,null),(l()(),t._25(-1,0,["\n                    Custom Header\n                      "])),(l()(),t._3(41,0,null,0,5,"span",[["style","padding-left: 130px"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n                        "])),(l()(),t._3(43,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-refresh fa-fw"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n                        "])),(l()(),t._3(45,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-wrench fa-fw"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(51,0,null,0,10,"amexio-column",[],[[8,"className",0]],null,null,d._43,d.h)),t._2(52,114688,null,0,r.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(54,0,null,0,6,"amexio-panel",[["expanded","true"]],null,null,null,d._102,d._14)),t._2(55,114688,null,0,r._42,[],{header:[0,"header"],expanded:[1,"expanded"],height:[2,"height"]},null),(l()(),t._25(-1,1,["\n                  "])),(l()(),t._3(57,0,null,0,2,"amexio-header",[],null,null,null,d._46,d.k)),t._2(58,114688,null,0,r.q,[],null,null),(l()(),t._25(-1,0,["\n                    Custom Header\n                  "])),(l()(),t._25(-1,1,["\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n        \n          "])),(l()(),t._25(-1,0,["\n          \n          "])),(l()(),t._3(65,0,null,0,42,"amexio-tab",[["title","API Reference"]],null,null,null,d._56,d.u)),t._2(66,114688,[[1,4]],0,r.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(68,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,d._103,d._15)),t._2(69,1425408,null,1,r._44,[r.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,2,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(72,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),t._2(73,49152,[[2,4]],2,r._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,3,{headerTemplate:0}),t._23(335544320,4,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),t._2(78,49152,[[2,4]],2,r._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,5,{headerTemplate:0}),t._23(335544320,6,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),t._2(83,49152,[[2,4]],2,r._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,7,{headerTemplate:0}),t._23(335544320,8,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),t._2(88,49152,[[2,4]],2,r._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,9,{headerTemplate:0}),t._23(335544320,10,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n\n            "])),(l()(),t._3(93,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,d._103,d._15)),t._2(94,1425408,null,1,r._44,[r.Y,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,11,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),t._2(98,49152,[[11,4]],2,r._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,12,{headerTemplate:0}),t._23(335544320,13,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(102,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),t._2(103,49152,[[11,4]],2,r._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,14,{headerTemplate:0}),t._23(335544320,15,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n\n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(109,0,null,0,24,"amexio-tab",[["title","Source"]],null,null,null,d._56,d.u)),t._2(110,114688,[[1,4]],0,r.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(112,0,null,0,20,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(114,0,null,null,17,"amexio-vertical-tab-view",[],null,null,null,d._58,d.w)),t._2(115,5357568,null,1,r.I,[t.B],null,null),t._23(603979776,16,{queryTabs:1}),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(118,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,d._56,d.u)),t._2(119,114688,[[16,4]],0,r.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,m)),t._2(122,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(125,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,d._56,d.u)),t._2(126,114688,[[16,4]],0,r.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                  "])),(l()(),t.Y(16777216,null,0,1,null,c)),t._2(129,16384,null,0,s.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,null,["   \n            "])),(l()(),t._25(-1,0,["\n           \n          "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(135,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,d._56,d.u)),t._2(136,114688,[[1,4]],0,r.E,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            Work in Progress\n          "])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0),l(n,25,0,4),l(n,28,0,"Panel",!0,"true",!1),l(n,33,0,4),l(n,36,0,"Panel",!0,"true",!0),l(n,39,0),l(n,52,0,4),l(n,55,0,!1,"true",800),l(n,58,0),l(n,66,0,"API Reference"),l(n,69,0,"Properties","assets/apireference/layout/panel/panel.json","get","properties",!1,!1),l(n,73,0,"Name","name",!1,"string",15),l(n,78,0,"Type","type",!1,"string",10),l(n,83,0,"Default","default",!1,"string",10),l(n,88,0,"Description","description",!1,"string",65),l(n,94,0,"Events","assets/apireference/layout/accordion/acc_event.json","get","properties",!1,!1),l(n,98,0,"Name","name",!1,"string",15),l(n,103,0,"Description","description",!1,"string",65),l(n,110,0,"Source"),l(n,115,0),l(n,119,0,"HTML",!0),l(n,122,0,e.htmlCode),l(n,126,0,"Type Script"),l(n,129,0,e.typeScriptCode),l(n,136,0,"Live")},function(l,n){l(n,24,0,t._16(n,25).colclass),l(n,32,0,t._16(n,33).colclass),l(n,51,0,t._16(n,52).colclass)})}var y=t.Z("panel-demo",a,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"panel-demo",[],null,null,null,h,p)),t._2(1,49152,null,0,a,[u.e],null,null)],null,null)},{},{},[]),f=e("0nO6"),g=e("UHIZ");e.d(n,"PanelDemoModuleNgFactory",function(){return x});var x=t._0(i,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[y]],[3,t.j],t.v]),t._13(4608,s.n,s.m,[t.s,[2,s.u]]),t._13(4608,u.c,u.c,[]),t._13(4608,u.h,u.b,[]),t._13(5120,u.j,u.k,[]),t._13(4608,u.i,u.i,[u.c,u.h,u.j]),t._13(4608,u.g,u.a,[]),t._13(5120,u.e,u.l,[u.i,u.g]),t._13(4608,f.n,f.n,[]),t._13(4608,r.a,r.a,[]),t._13(512,s.b,s.b,[]),t._13(512,u.f,u.f,[]),t._13(512,f.k,f.k,[]),t._13(512,f.d,f.d,[]),t._13(512,r.r,r.r,[]),t._13(512,r.p,r.p,[]),t._13(512,r._34,r._34,[]),t._13(512,r.v,r.v,[]),t._13(512,r.y,r.y,[]),t._13(512,r.l,r.l,[]),t._13(512,r.J,r.J,[]),t._13(512,_.b,_.b,[]),t._13(512,g.m,g.m,[[2,g.r],[2,g.k]]),t._13(512,i,i,[]),t._13(1024,g.i,function(){return[[{path:"",component:a}]]},[])])})}});