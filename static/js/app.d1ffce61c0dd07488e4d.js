webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},AHHd:function(t,e){},DJkq:function(t,e){},Edbx:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={name:"App",data:function(){return{token:localStorage.getItem("loginToken"),username:localStorage.getItem("username")}},methods:{Logout:function(){localStorage.removeItem("loginToken"),localStorage.removeItem("email"),localStorage.removeItem("role"),localStorage.removeItem("username"),window.location="/"}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[a("p",{staticClass:"lead pcustom",staticStyle:{margin:"10px"}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/"}},[t._v("\n          Tar-Q\n        ")])],1)]),t._v(" "),a("div",{attrs:{id:"container"}},[t.token==t.empty?a("div",[a("nav",[a("router-link",{attrs:{to:"Login"}},[a("b-button",{staticClass:"btn btn-outline-primary",attrs:{variant:"primary"}},[t._v("Login")])],1),t._v("  \n          "),a("router-link",{attrs:{to:"Daftar"}},[a("b-button",{staticClass:"btn btn-outline-success",attrs:{variant:"success"}},[t._v("Daftar")])],1)],1)]):a("div",[a("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[t._v("\n          Welcome, "+t._s(t.username)+" |   \n          "),a("b-button",{staticClass:"btn btn-outline-danger",attrs:{variant:"danger"},on:{click:t.Logout}},[t._v("Logout")])],1)])])]),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")(r,n,!1,function(t){a("zqlz")},null,null).exports,i=a("/ocq"),l=(a("mw3O"),a("mtWM")),u=a.n(l),d=a("Xxa5"),c=a.n(d),m=a("exGp"),v=a.n(m),p={name:"Hello",data:function(){return{Header:"Rekap Kehadiran Guru",guru:{},results:"",username:localStorage.getItem("username"),token:localStorage.getItem("loginToken")}},mounted:function(){this.getGuru()},methods:{getGuru:function(){var t=this;return v()(c.a.mark(function e(){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://edubox.pinisi.io/tarqi/api/list/user",{params:{model:"user",token:localStorage.getItem("loginToken"),type:"teachers"}});case 2:a=e.sent,t.guru=a.data;case 4:case"end":return e.stop()}},e,t)}))()}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row",staticStyle:{margin:"0px"}}),t._v(" "),a("div",{staticClass:"row"},[a("h1",{staticClass:"col-md-8"},[t._v(t._s(t.Header))])]),t._v(" "),a("br"),t._v(" "),t.token!=t.empty?a("table",{staticClass:"table",attrs:{striped:"",hover:""}},[t._m(0),t._v(" "),t._l(t.guru.data.results,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[a("router-link",{attrs:{to:"Detail?="}},[t._v(t._s(e.display_name))])],1),t._v(" "),a("td",[t._v("0")])])})],2):a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("\n    Anda harus login terlebih dahulu ! "),a("router-link",{attrs:{to:"Login"}},[t._v("Login Disini")]),t._v(".\n  ")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("No. ")]),this._v(" "),e("th",[this._v("Nama Guru")]),this._v(" "),e("th",[this._v("Jumlah Kehadiran")])])}]};var f=a("VU/8")(p,_,!1,function(t){a("zghl")},"data-v-25b3345f",null).exports,g=(a("WIDu"),a("rdLu")),h=a.n(g),w={name:"Detail",data:function(){return{detailHeader:"Detail Rekap Kehadiran Guru",lesson:{}}},mounted:function(){this.getLesson()},methods:{getLesson:function(){var t=this;return v()(c.a.mark(function e(){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("http://edubox.pinisi.io/tarqi/api/list/lesson",{params:{model:"absensi",token:localStorage.getItem("loginToken"),semester:"2",tahun_ajaran:"2018"}});case 2:a=e.sent,h.a.groupBy(a.data,function(t){return t.lesson_name}),t.lesson=a.data;case 5:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v(t._s(t.detailHeader))]),t._v(" "),a("table",{staticClass:"table table-striped table-hover"},[t._m(0),t._v(" "),t._l(t.lesson.data.result,function(e){return a("tr",[a("td",[t._v(t._s(e.lesson_name))]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("Hadir")]),t._v(" "),a("td",[t._v("8")])])}),t._v(" "),t._m(1)],2),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"10px"}},[a("b-button",{attrs:{variant:"outline-success",href:"/"}},[t._v("Kembali")])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table-sm"},[a("tr",[a("th",{attrs:{scope:"col",rowspan:"2"}},[t._v("Nama Kelas")]),t._v(" "),a("th",{attrs:{scope:"col",colspan:"8"}},[t._v("Pertemuan")]),t._v(" "),a("th",{attrs:{rowspan:"2"}},[t._v("Jumlah")])]),t._v(" "),a("tr",[a("th",[t._v("1")]),t._v(" "),a("th",[t._v("2")]),t._v(" "),a("th",[t._v("3")]),t._v(" "),a("th",[t._v("4")]),t._v(" "),a("th",[t._v("5")]),t._v(" "),a("th",[t._v("6")]),t._v(" "),a("th",[t._v("7")]),t._v(" "),a("th",[t._v("8")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{attrs:{colspan:"9"}},[this._v("Total Jumlah")]),this._v(" "),e("th",[this._v("----")])])}]};var C=a("VU/8")(w,b,!1,function(t){a("nUng")},"data-v-0825bd61",null).exports,x=(a("TXMN"),{name:"Login",data:function(){return{showModal:!1,Header:"Sign In",username:"",password:"",errAlert:""}},methods:{userLogin:function(){var t=new FormData;u()({method:"post",url:"http://edubox.pinisi.io/tarqi/api/post/?model=login&type=android",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(t){if("TRUE"==t.data.error){var e=t.data.error_msg;alert(e)}else localStorage.setItem("loginToken",t.data.token),localStorage.setItem("role",t.data.role),localStorage.setItem("email",t.data.user.email),localStorage.setItem("username",t.data.user.name),window.location="/"}).catch(function(t){alert(t)}),t.set("username",this.username),t.set("password",this.password)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("div",{staticClass:"col col-lg-4 offset-md-4 text-center"},[a("form",{staticClass:"form-signin",attrs:{id:"Login",name:"userLogin",method:"post"},on:{submit:function(e){e.preventDefault(),t.userLogin(e)}}},[a("h2",{staticClass:"h2 mb-3 font-weight-normal"},[t._v(t._s(t.Header))]),t._v(" "),a("div",{staticClass:"formgroup boxx",attrs:{id:"errorDialogue",hidden:""}}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"username"}},[t._v("username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:"",autofocus:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Sign In"}})])])])},staticRenderFns:[]};var k=a("VU/8")(x,y,!1,function(t){a("DJkq")},"data-v-46e73591",null).exports,H={name:"Home",data:function(){return{Header:"Tar-Q Dashboard",token:localStorage.getItem("loginToken")}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"text-center"},[t._v(t._s(t.Header))]),t._v(" "),a("br"),t._v(" "),t.token!=t.empty?a("div",[a("router-link",{attrs:{to:"rekapIndex"}},[a("h5",[t._v("Lihat Rekap Guru")])])],1):a("div",[a("h4",{staticClass:"text-center"},[t._v("Anda belum Login")])])])},staticRenderFns:[]};var N=a("VU/8")(H,D,!1,function(t){a("AHHd")},"data-v-7275dbb3",null).exports,I={name:"Daftar",data:function(){return{Header:"Registrasi Guru",email:"",displayName:"",username:"",password:"",password2:"",errAlert:""}},methods:{userRegister:function(){var t=new FormData;u()({method:"post",url:"http://edubox.pinisi.io/tarqi/api/post/?model=register&type=android",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(t){if("TRUE"==t.data.error){var e=t.data.error_msg;alert(e)}else console.log(t),alert("Registrasi Berhasil")}).catch(function(t){alert(t)}),t.set("username",this.username),t.set("password",this.password),t.set("display_name",this.displayName),t.set("email",this.email),t.set("password2",this.password2)}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("div",{staticClass:"col col-lg-4 offset-md-4 text-center"},[a("form",{staticClass:"form-signin",attrs:{id:"Daftar",name:"userRegister",method:"post"},on:{submit:function(e){e.preventDefault(),t.userRegister(e)}}},[a("h2",{staticClass:"h2 mb-3 font-weight-normal"},[t._v(t._s(t.Header))]),t._v(" "),a("div",{staticClass:"formgroup boxx",attrs:{id:"errorDialogue",hidden:""}}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"displayName"}},[t._v("Nama Lengkap")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.displayName,expression:"displayName"}],staticClass:"form-control",attrs:{type:"text",id:"displayName",placeholder:"Nama Lengkap",required:"",autofocus:""},domProps:{value:t.displayName},on:{input:function(e){e.target.composing||(t.displayName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"username"}},[t._v("username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:"",autofocus:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"password2"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"form-control",attrs:{type:"password",id:"password2",placeholder:"Password Again",required:"",autofocus:""},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),t._v(" "),a("input",{staticClass:"btn btn-success btn-block",attrs:{type:"submit",value:"Daftar"}})])])])},staticRenderFns:[]};var L=a("VU/8")(I,S,!1,function(t){a("Edbx")},"data-v-2feaa254",null).exports;s.a.use(i.a);var q=new i.a({routes:[{path:"/",name:"Home",component:N},{path:"/Login",name:"Login",component:k},{path:"/rekapIndex",name:"rekapIndex",component:f},{path:"/Detail",name:"Detail",component:C},{path:"/Daftar",name:"Daftar",component:L}]}),R=a("e6fC");a("Jmt5"),a("9M+g");s.a.config.productionTip=!1,s.a.use(R.a),new s.a({el:"#app",router:q,components:{App:o},template:"<App/>"})},nUng:function(t,e){},zghl:function(t,e){},zj2Q:function(t,e){},zqlz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d1ffce61c0dd07488e4d.js.map