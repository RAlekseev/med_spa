"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[296],{296:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var s=r(629),a=r(9806);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l={data:function(){return{form:{email:null,password:null}}},metaInfo:{title:"Корзина"},computed:n(n({},(0,s.Se)(["basketServices","basketSum","isLogged","config_value"])),{},{formValidate:function(){return this.form.email&&this.form.phone&&this.form.first_name&&this.form.last_name},isEnabled:function(){return this.basketServices.length&&(this.isLogged||this.formValidate)}}),components:{Service:a.Z},methods:{createContract:function(){if(this.isEnabled){var e={services:this.basketServices};this.formValidate&&(e.user=this.form),this.$store.dispatch("createMyContract",e)}}}};const c=(0,r(1900).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"h-100 bg-gradient-light"},[r("div",{staticClass:"container py-5"},[r("div",{staticClass:"row d-flex justify-content-center my-4"},[r("div",{staticClass:"col-lg-8"},[r("div",{staticClass:"card mb-4"},[e._m(0),e._v(" "),r("div",{staticClass:"card-body"},[e.basketServices.length?r("div",e._l(e.basketServices,(function(e){return r("div",{key:e.id},[r("Service",{attrs:{service:e}})],1)})),0):r("div",{staticClass:"m-auto"},[r("h3",[e._v("Корзина пуста...")])])])])]),e._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"card mb-4"},[e._m(1),e._v(" "),r("div",{staticClass:"card-body"},[r("ul",{staticClass:"list-group list-group-flush"},[e._l(e.basketServices,(function(t){return r("li",{key:t.id,staticClass:"list-group-item d-flex justify-content-between align-items-center  border-0 px-0 pb-0"},[r("div",{staticStyle:{"max-width":"70%"}},[e._v("\n                                            "+e._s(t.name)+"\n                                        ")]),e._v(" "),r("span",[e._v(e._s(t.price)+" "+e._s(e.config_value("currency")))])])})),e._v(" "),r("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center px-0"}),e._v(" "),r("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"},[e._m(2),e._v(" "),r("span",[r("strong",[e._v(e._s(e.basketSum)+" "+e._s(e.config_value("currency")))])])])],2),e._v(" "),e.isLogged?e._e():r("form",{staticClass:"user text-gray-400 text-center",on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.last_name,expression:"form.last_name"}],staticClass:"form-control form-control-user",attrs:{type:"text","aria-describedby":"emailHelp",placeholder:"Фамилия...",required:""},domProps:{value:e.form.last_name},on:{input:function(t){t.target.composing||e.$set(e.form,"last_name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.first_name,expression:"form.first_name"}],staticClass:"form-control form-control-user",attrs:{type:"text","aria-describedby":"emailHelp",placeholder:"Имя...",required:""},domProps:{value:e.form.first_name},on:{input:function(t){t.target.composing||e.$set(e.form,"first_name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.middle_name,expression:"form.middle_name"}],staticClass:"form-control form-control-user",attrs:{type:"text","aria-describedby":"emailHelp",placeholder:"Отчество..."},domProps:{value:e.form.middle_name},on:{input:function(t){t.target.composing||e.$set(e.form,"middle_name",t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control form-control-user",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"Email Address...",required:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone,expression:"form.phone"},{name:"mask",rawName:"v-mask",value:"+996(###)###-####",expression:"'+996(###)###-####'"}],staticClass:"form-control form-control-user",attrs:{placeholder:"+996(XXX)XXX-XXXX",type:"tel",required:""},domProps:{value:e.form.phone},on:{input:function(t){t.target.composing||e.$set(e.form,"phone",t.target.value)}}})])])]),e._v("\n                                    Для оформления заказа необходимо заплнить данные или\n                                    "),r("router-link",{attrs:{to:{name:"login",query:{redirect:"/basket"}}}},[e._v("\n                                        Авторизоваться\n                                    ")]),e._v(" "),r("br"),e._v(" "),r("router-link",{attrs:{to:{name:"registration"}}},[e._v("\n                                        Нет аккаунта?\n                                    ")])],1),e._v(" "),r("button",{staticClass:"btn btn-primary btn-lg btn-block mt-4",attrs:{type:"button",disabled:!e.isEnabled},on:{click:function(t){return e.createContract()}}},[e._v("\n                                    Оформить заказ\n                                ")])])])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header py-3"},[r("h5",{staticClass:"mb-0"},[e._v("Корзина")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header py-3"},[r("h5",{staticClass:"mb-0"},[e._v("К оплате")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("strong",[e._v("Общая цена")])])}],!1,null,null,null).exports}}]);