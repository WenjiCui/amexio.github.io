webpackJsonp([29],{ObYc:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=u("TMwh"),i=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getDta=function(){var l=this;this.asyncFlag=!0,setTimeout(function(){l.asyncFlag=!1},3e3)},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,u=this;this.http.get("assets/data/code/border/border.html").subscribe(function(n){l=n.text()},function(l){},function(){u.htmlCode=l}),this.http.get("assets/data/code/border/border.text").subscribe(function(l){n=l.text()},function(l){},function(){u.typeScriptCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),a=function(){},o=u("KhCp"),r=u("kL+h"),d=u("tfJK"),_=u("drlO"),s=u("Un6q"),c=e._1({encapsulation:2,styles:[],data:{}});function m(l){return e._27(0,[(l()(),e._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(3,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e._2(4,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n               "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function p(l){return e._27(0,[(l()(),e._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),e._25(-1,null,["\n                 "])),(l()(),e._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),e._2(3,4243456,null,0,r.a,[e.B,e.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),e._25(-1,null,["\n               "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function b(l){return e._27(0,[(l()(),e._25(-1,null,["\n   "])),(l()(),e._3(1,0,null,null,155,"amexio-card",[["header","true"]],null,null,null,d._41,d.f)),e._2(2,114688,null,0,_.g,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n     "])),(l()(),e._3(4,0,null,0,2,"amexio-header",[],null,null,null,d._46,d.k)),e._2(5,114688,null,0,_.q,[],null,null),(l()(),e._25(-1,0,["\n        Border Layout \n     "])),(l()(),e._25(-1,null,["\n     "])),(l()(),e._3(8,0,null,1,147,"amexio-body",[],null,null,null,d._38,d.c)),e._2(9,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["\n       "])),(l()(),e._3(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e._25(-1,null,["A border layout lays out a container, arranging and resizing its components to fit in five regions: north, south, east, west, and center."])),(l()(),e._25(-1,0,["\n       "])),(l()(),e._3(14,0,null,0,140,"amexio-tab-view",[],null,null,null,d._55,d.t)),e._2(15,5357568,null,1,_.D,[e.B],null,null),e._23(603979776,1,{queryTabs:1}),(l()(),e._25(-1,0,["\n         "])),(l()(),e._3(18,0,null,0,79,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,d._56,d.u)),e._2(19,114688,[[1,4]],0,_.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(21,0,null,0,75,"amexio-card",[["header","true"]],null,null,null,d._41,d.f)),e._2(22,114688,null,0,_.g,[],{header:[0,"header"]},null),(l()(),e._25(-1,null,["\n             "])),(l()(),e._3(24,0,null,0,2,"amexio-header",[],null,null,null,d._46,d.k)),e._2(25,114688,null,0,_.q,[],null,null),(l()(),e._25(-1,0,[" Border Layout"])),(l()(),e._25(-1,null,["\n             "])),(l()(),e._3(28,0,null,1,67,"amexio-body",[],null,null,null,d._38,d.c)),e._2(29,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["\n               "])),(l()(),e._3(31,0,null,0,63,"amexio-borderlayout",[],null,null,null,d._39,d.d)),e._2(32,1163264,null,1,_.e,[],null,null),e._23(603979776,2,{layout:1}),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._3(35,0,null,0,10,"amexio-borderlayout-item",[["position","north"]],[[8,"className",0]],null,null,d._40,d.e)),e._2(36,114688,[[2,4]],0,_.f,[],{position:[0,"position"]},null),(l()(),e._25(-1,0,["\n                   "])),(l()(),e._3(38,0,null,0,6,"amexio-card",[],null,null,null,d._41,d.f)),e._2(39,114688,null,0,_.g,[],null,null),(l()(),e._3(40,0,null,1,4,"amexio-body",[],null,null,null,d._38,d.c)),e._2(41,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["  "])),(l()(),e._3(43,0,null,0,1,"div",[["class","div-padding-layout"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._3(47,0,null,0,10,"amexio-borderlayout-item",[["position","east"]],[[8,"className",0]],null,null,d._40,d.e)),e._2(48,114688,[[2,4]],0,_.f,[],{position:[0,"position"]},null),(l()(),e._25(-1,0,["\n                   "])),(l()(),e._3(50,0,null,0,6,"amexio-card",[],null,null,null,d._41,d.f)),e._2(51,114688,null,0,_.g,[],null,null),(l()(),e._3(52,0,null,1,4,"amexio-body",[],null,null,null,d._38,d.c)),e._2(53,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["  "])),(l()(),e._3(55,0,null,0,1,"div",[["class","div-padding-layout"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._3(59,0,null,0,10,"amexio-borderlayout-item",[["position","center"]],[[8,"className",0]],null,null,d._40,d.e)),e._2(60,114688,[[2,4]],0,_.f,[],{position:[0,"position"]},null),(l()(),e._25(-1,0,["\n                   "])),(l()(),e._3(62,0,null,0,6,"amexio-card",[],null,null,null,d._41,d.f)),e._2(63,114688,null,0,_.g,[],null,null),(l()(),e._3(64,0,null,1,4,"amexio-body",[],null,null,null,d._38,d.c)),e._2(65,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["  "])),(l()(),e._3(67,0,null,0,1,"div",[["class","div-padding-layout"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                   "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._3(71,0,null,0,10,"amexio-borderlayout-item",[["position","west"]],[[8,"className",0]],null,null,d._40,d.e)),e._2(72,114688,[[2,4]],0,_.f,[],{position:[0,"position"]},null),(l()(),e._25(-1,0,["\n                   "])),(l()(),e._3(74,0,null,0,6,"amexio-card",[],null,null,null,d._41,d.f)),e._2(75,114688,null,0,_.g,[],null,null),(l()(),e._3(76,0,null,1,4,"amexio-body",[],null,null,null,d._38,d.c)),e._2(77,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["  "])),(l()(),e._3(79,0,null,0,1,"div",[["class","div-padding-layout"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._3(83,0,null,0,10,"amexio-borderlayout-item",[["position","south"]],[[8,"className",0]],null,null,d._40,d.e)),e._2(84,114688,[[2,4]],0,_.f,[],{position:[0,"position"]},null),(l()(),e._25(-1,0,["\n                   "])),(l()(),e._3(86,0,null,0,6,"amexio-card",[],null,null,null,d._41,d.f)),e._2(87,114688,null,0,_.g,[],null,null),(l()(),e._3(88,0,null,1,4,"amexio-body",[],null,null,null,d._38,d.c)),e._2(89,114688,null,0,_.d,[],null,null),(l()(),e._25(-1,0,["  "])),(l()(),e._3(91,0,null,0,1,"div",[["class","div-padding-layout"]],null,null,null,null,null)),(l()(),e._25(-1,null,["\n                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                   "])),(l()(),e._25(-1,0,["\n                 "])),(l()(),e._25(-1,0,["\n               "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,null,["\n           "])),(l()(),e._25(-1,0,["\n          \n         "])),(l()(),e._25(-1,0,["\n         "])),(l()(),e._3(99,0,null,0,27,"amexio-tab",[["title","API Reference"]],null,null,null,d._56,d.u)),e._2(100,114688,[[1,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(102,0,null,0,23,"amexio-datagrid",[["title","Properties"]],null,null,null,d._103,d._15)),e._2(103,1425408,null,1,_._44,[_.Y,e.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),e._23(603979776,3,{columnRef:1}),(l()(),e._25(-1,null,["\n             "])),(l()(),e._3(106,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),e._2(107,49152,[[3,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,4,{headerTemplate:0}),e._23(335544320,5,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(111,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),e._2(112,49152,[[3,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,6,{headerTemplate:0}),e._23(335544320,7,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(116,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),e._2(117,49152,[[3,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,8,{headerTemplate:0}),e._23(335544320,9,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n              "])),(l()(),e._3(121,0,null,null,3,"amexio-data-table-column",[],null,null,null,d._104,d._16)),e._2(122,49152,[[3,4]],2,_._45,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),e._23(335544320,10,{headerTemplate:0}),e._23(335544320,11,{bodyTemplate:0}),(l()(),e._25(-1,null,["\n           "])),(l()(),e._25(-1,0,["\n\n\n         "])),(l()(),e._25(-1,0,["\n         "])),(l()(),e._3(128,0,null,0,21,"amexio-tab",[["title","Source"]],null,null,null,d._56,d.u)),e._2(129,114688,[[1,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n           "])),(l()(),e._3(131,0,null,0,17,"amexio-vertical-tab-view",[],null,null,null,d._58,d.w)),e._2(132,5357568,null,1,_.I,[e.B],null,null),e._23(603979776,12,{queryTabs:1}),(l()(),e._25(-1,0,["\n             "])),(l()(),e._3(135,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,d._56,d.u)),e._2(136,114688,[[12,4]],0,_.E,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),e._25(-1,0,["\n               "])),(l()(),e.Y(16777216,null,0,1,null,m)),e._2(139,16384,null,0,s.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,0,["\n             "])),(l()(),e._3(142,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,d._56,d.u)),e._2(143,114688,[[12,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n               "])),(l()(),e.Y(16777216,null,0,1,null,p)),e._2(146,16384,null,0,s.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._25(-1,0,["\n             "])),(l()(),e._25(-1,0,["\n           "])),(l()(),e._25(-1,0,["\n         "])),(l()(),e._25(-1,0,["\n         "])),(l()(),e._3(151,0,null,0,2,"amexio-tab",[["title","Live"]],null,null,null,d._56,d.u)),e._2(152,114688,[[1,4]],0,_.E,[],{title:[0,"title"]},null),(l()(),e._25(-1,0,["\n           Work in Progress\n         "])),(l()(),e._25(-1,0,["\n       "])),(l()(),e._25(-1,0,["\n     "])),(l()(),e._25(-1,null,["\n   "])),(l()(),e._25(-1,null,["\n "]))],function(l,n){var u=n.component;l(n,2,0,"true"),l(n,5,0),l(n,9,0),l(n,15,0),l(n,19,0,"Demo","true"),l(n,22,0,"true"),l(n,25,0),l(n,29,0),l(n,32,0),l(n,36,0,"north"),l(n,39,0),l(n,41,0),l(n,48,0,"east"),l(n,51,0),l(n,53,0),l(n,60,0,"center"),l(n,63,0),l(n,65,0),l(n,72,0,"west"),l(n,75,0),l(n,77,0),l(n,84,0,"south"),l(n,87,0),l(n,89,0),l(n,100,0,"API Reference"),l(n,103,0,"Properties","assets/apireference/border/border.json","get","properties",!1,!1),l(n,107,0,"Name","name",!1,"string",15),l(n,112,0,"Type","type",!1,"string",10),l(n,117,0,"Default","default",!1,"string",10),l(n,122,0,"Description","description",!1,"string",65),l(n,129,0,"Source"),l(n,132,0),l(n,136,0,"HTML",!0),l(n,139,0,u.htmlCode),l(n,143,0,"Type Script"),l(n,146,0,u.typeScriptCode),l(n,152,0,"Live")},function(l,n){l(n,35,0,e._16(n,36).positionClass),l(n,47,0,e._16(n,48).positionClass),l(n,59,0,e._16(n,60).positionClass),l(n,71,0,e._16(n,72).positionClass),l(n,83,0,e._16(n,84).positionClass)})}var f=e.Z("border-demo",i,function(l){return e._27(0,[(l()(),e._3(0,0,null,null,1,"border-demo",[],null,null,null,b,c)),e._2(1,49152,null,0,i,[t.e],null,null)],null,null)},{},{},[]),h=u("0nO6"),g=u("UHIZ");u.d(n,"BorderDemoRoutingModuleNgFactory",function(){return x});var x=e._0(a,[],function(l){return e._12([e._13(512,e.j,e.W,[[8,[f]],[3,e.j],e.v]),e._13(4608,s.n,s.m,[e.s,[2,s.u]]),e._13(4608,t.c,t.c,[]),e._13(4608,t.h,t.b,[]),e._13(5120,t.j,t.k,[]),e._13(4608,t.i,t.i,[t.c,t.h,t.j]),e._13(4608,t.g,t.a,[]),e._13(5120,t.e,t.l,[t.i,t.g]),e._13(4608,h.n,h.n,[]),e._13(4608,_.a,_.a,[]),e._13(512,s.b,s.b,[]),e._13(512,t.f,t.f,[]),e._13(512,r.b,r.b,[]),e._13(512,h.k,h.k,[]),e._13(512,h.d,h.d,[]),e._13(512,_.r,_.r,[]),e._13(512,_.p,_.p,[]),e._13(512,_._34,_._34,[]),e._13(512,_.v,_.v,[]),e._13(512,_.y,_.y,[]),e._13(512,_.l,_.l,[]),e._13(512,_.J,_.J,[]),e._13(512,g.m,g.m,[[2,g.r],[2,g.k]]),e._13(512,a,a,[]),e._13(1024,g.i,function(){return[[{path:"",component:i}]]},[])])})}});