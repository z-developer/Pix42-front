(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{297:function(e,t,n){"use strict";n(10),n(8),n(9),n(18),n(19);var r=n(2),o=n(66);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"snackbar-component",data:function(){return{snackbarOpen:!1,color:""}},computed:l({},Object(o.c)("snackbar",["open","text","status","timeout"])),watch:{open:{immediate:!0,handler:function(e){this.snackbarOpen=e}},snackbarOpen:function(e){e||this.closeSnackbar()}},methods:l(l({},Object(o.b)({closeSnackbar:"snackbar/closeSnackbar"})),{},{close:function(){this.snackbarOpen=!1}})},f=n(43),v=n(61),h=n.n(v),m=n(272),w=n(387),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{staticClass:"snackbar-component",attrs:{color:e.status,timeout:e.timeout,top:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{text:""},on:{click:e.close}},"v-btn",r,!1),[e._v("\n            Close\n        ")])]}}]),model:{value:e.snackbarOpen,callback:function(t){e.snackbarOpen=t},expression:"snackbarOpen"}},[n("span",[e._v("\n        "+e._s(e.text)+"\n    ")])])}),[],!1,null,null,null);t.a=component.exports;h()(component,{VBtn:m.a,VSnackbar:w.a})},298:function(e,t,n){"use strict";var r={name:"social-login-component",mounted:function(){},methods:{loginWithGoogle:function(){var e=this;this.$gAuth.signIn().then((function(t){console.log("GoogleUser",t),console.log("getId",t.getId()),console.log("getBasicProfile",t.getBasicProfile()),console.log("getAuthResponse",t.getAuthResponse());var n={loginType:"google",google:t};e.$store.commit("setLoginUser",n)})).catch((function(e){console.log("error",e)}))},loginWithFacebook:function(){var e=this;window.FB.login((function(t){var n={loginType:"fb",fb:t};console.log("fb response",t),e.$store.commit("setLoginUser",n)}),this.params)}}},o=n(43),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-login-component"},[n("div",{attrs:{id:"fb-root"}}),e._v(" "),n("a",{staticClass:"google-signup mr-2",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.loginWithGoogle(t)}}},[n("svg",{attrs:{"aria-hidden":"true",height:"18",viewBox:"0 0 18 18",width:"18",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[e._v("Google")]),n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z",fill:"#4285F4"}}),n("path",{attrs:{d:"M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z",fill:"#34A853"}}),n("path",{attrs:{d:"M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z",fill:"#FBBC05"}}),n("path",{attrs:{d:"M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z",fill:"#EA4335"}})])]),e._v("\n        Google\n    ")]),e._v("\n    or\n    "),n("a",{staticClass:"facebook-signup",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.loginWithFacebook(t)}}},[n("svg",{attrs:{fill:"#3578E5",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"}})]),e._v("\n        Facebook\n    ")])])}),[],!1,null,null,null);t.a=component.exports},398:function(e,t,n){"use strict";n.r(t);n(10),n(8),n(9),n(18),n(19);var r=n(2),o=(n(31),n(66)),c=n(297);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"register-page",components:{SocialLogin:n(298).a,Snackbar:c.a},data:function(){return{username:"",password:"",passwordConfirm:""}},computed:d({},Object(o.c)("login",["loginUser"])),created:function(){window.addEventListener("keydown",this.handleKeyDown)},destroyed:function(){window.removeEventListener("keydown",this.handleKeyDown)},methods:d(d({},Object(o.b)({register:"login/register"})),{},{userRegister:function(){this.register({username:this.username,password:this.password,passwordConfirm:this.passwordConfirm}),this.loginUser&&this.$nuxt.$router.replace({path:"/dashboard"})},handleKeyDown:function(e){"Enter"===e.code&&this.userRegister()}})},v=n(43),h=n(61),m=n.n(h),w=n(272),O=n(277),k=n(274),y=n(388),j=n(270),_=n(386),C=n(389),x=n(310),P=n(311),S=n(287),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"register-page d-flex justify-center align-center"},[n("v-col",{attrs:{cols:"12",lg:"6",md:"6",xl:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[e._v("Create new acoount")])],1),e._v(" "),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",rules:e.usernameRule,type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",rules:e.passwordRule,type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("v-text-field",{attrs:{id:"repeate-passwird",label:"Repeate password",name:"passwordConfirm","prepend-icon":"mdi-lock",rules:[e.passwordConfirmationRule],type:"password"},model:{value:e.passwordConfirm,callback:function(t){e.passwordConfirm=t},expression:"passwordConfirm"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-card-text",[n("SocialLogin")],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",disabled:""===e.username||""===e.password||""===e.passwordConfirm},on:{click:e.userRegister}},[e._v("\n                    Register\n                ")])],1),e._v(" "),n("v-card-text",{staticClass:"footer"},[n("p",[e._v("Already have an account? "),n("a",{attrs:{href:"/login"}},[e._v(" Login Now")])])])],1)],1),e._v(" "),n("Snackbar")],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:w.a,VCard:O.a,VCardActions:k.a,VCardText:k.b,VCol:y.a,VContainer:j.a,VForm:_.a,VSpacer:C.a,VTextField:x.a,VToolbar:P.a,VToolbarTitle:S.a})}}]);