webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},EIW7:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container boxes"},[e("h1",[this._v("Tar-Q")])])}]};var s=a("VU/8")({name:"App"},r,!1,function(t){a("jiAA")},null,null).exports,i=a("/ocq"),o=a("Xxa5"),u=a.n(o),c=a("exGp"),v=a.n(c),d=a("mtWM"),l=a.n(d),_={name:"Hello",data:function(){return{Header:"Rekap Kehadiran Guru",guru:{}}},mounted:function(){this.getGuru()},methods:{getGuru:function(){var t=this;return v()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://edubox.pinisi.io/tarqi/api/list/user",{params:{model:"user",token:"4I7s9OjWPFOjzM2RBKxFuldEobjzBnUO0IXBu2Hcym0ztJABvz",type:"teachers"}});case 2:a=e.sent,t.guru=a.data;case 4:case"end":return e.stop()}},e,t)}))()}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.Header))]),t._v(" "),a("table",{staticClass:"table",attrs:{striped:"",hover:""}},[t._m(0),t._v(" "),t._l(t.guru.data.results,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[a("router-link",{attrs:{to:"Detail"}},[t._v(t._s(e.display_name))])],1),t._v(" "),a("td",[t._v("0")])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("No. ")]),this._v(" "),e("th",[this._v("Nama Guru")]),this._v(" "),e("th",[this._v("Jumlah Kehadiran")])])}]};var m=a("VU/8")(_,p,!1,function(t){a("eGAy")},"data-v-f0442ea8",null).exports,h=(a("WIDu"),a("rdLu")),f=a.n(h),g={name:"Detail",data:function(){return{detailHeader:"Detail Rekap Kehadiran Guru",lesson:{}}},mounted:function(){this.getLesson()},methods:{getLesson:function(){var t=this;return v()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://edubox.pinisi.io/tarqi/api/list/lesson",{params:{model:"absensi",token:"4I7s9OjWPFOjzM2RBKxFuldEobjzBnUO0IXBu2Hcym0ztJABvz",semester:"2",tahun_ajaran:"2018"}});case 2:a=e.sent,f.a.groupBy(a.data,function(t){return t.lesson_name}),t.lesson=a.data;case 5:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.detailHeader))]),t._v(" "),a("table",{staticClass:"table table-striped table-hover"},[t._m(0),t._v(" "),t._l(t.lesson.data.result,function(e){return a("tr",[a("td",[t._v(t._s(e.lesson_name))]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("8")])])}),t._v(" "),t._m(1)],2),t._v(" "),a("div",[a("b-button",{attrs:{variant:"outline-success",href:"/"}},[t._v("Kembali")])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table-sm"},[a("tr",[a("th",{attrs:{scope:"col",rowspan:"2"}},[t._v("Nama Kelas")]),t._v(" "),a("th",{attrs:{scope:"col",colspan:"8"}},[t._v("Pertemuan")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v("Jumlah")])]),t._v(" "),a("tr",[a("th",[t._v("1")]),t._v(" "),a("th",[t._v("2")]),t._v(" "),a("th",[t._v("3")]),t._v(" "),a("th",[t._v("4")]),t._v(" "),a("th",[t._v("5")]),t._v(" "),a("th",[t._v("6")]),t._v(" "),a("th",[t._v("7")]),t._v(" "),a("th",[t._v("8")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{attrs:{colspan:"9"}},[this._v("Total Jumlah")]),this._v(" "),e("th",[this._v("----")])])}]};var x=a("VU/8")(g,b,!1,function(t){a("zmpZ")},"data-v-7e7f71b4",null).exports,H=(a("TXMN"),{name:"Login",data:function(){return{Header:"Login",user:{username:"",password:""}}},methods:{userLogin:function(){l.a.post("http://edubox.pinisi.io/tarqi/api/post/?model=login&type=android",this.user).then(function(t){alert(t)}).catch(function(t){alert(t)})}}}),w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("form",{staticClass:"boxx col col-lg-6",attrs:{id:"Login",name:"userLogin",method:"post"}},[a("h2",[t._v(t._s(t.Header))]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",name:"username",placeholder:"Username"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),a("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"Sign In"},on:{click:function(e){e.preventDefault(),t.userLogin(e)}}}),t._v(" "),a("b-button",{attrs:{type:"button",href:"/",variant:"outline-primary"}},[t._v("Back")])],1)])},staticRenderFns:[]};var k=a("VU/8")(H,w,!1,function(t){a("EIW7")},"data-v-1ba350ef",null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v(this._s(this.Header))]),this._v(" "),e("div",{attrs:{id:"container"}},[e("h4",[e("router-link",{attrs:{to:"rekapIndex"}},[this._v("Data Guru")])],1),this._v(" "),e("h4",[e("router-link",{attrs:{to:"Login"}},[this._v("Login")])],1)])])},staticRenderFns:[]};var C=a("VU/8")({name:"Home",data:function(){return{Header:"Tar-Q Dashboard",guru:{}}}},y,!1,function(t){a("eGjk")},"data-v-2794eb2d",null).exports;n.a.use(i.a);var j=new i.a({routes:[{path:"/",name:"Home",component:C},{path:"/rekapIndex",name:"rekapIndex",component:m},{path:"/Detail",name:"Detail",component:x},{path:"/Login",name:"Login",component:k}],mode:"history"}),E=a("e6fC");a("Jmt5"),a("9M+g");n.a.config.productionTip=!1,n.a.use(E.a),new n.a({el:"#app",router:j,components:{App:s},template:"<App/>"})},eGAy:function(t,e){},eGjk:function(t,e){},jiAA:function(t,e){},zj2Q:function(t,e){},zmpZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e17284a7f23993262d7.js.map