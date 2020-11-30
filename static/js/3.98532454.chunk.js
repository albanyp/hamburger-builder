(this["webpackJsonphamburger-builder"]=this["webpackJsonphamburger-builder"]||[]).push([[3],{102:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(24),l=t(103),u=t.n(l);a.a=function(e){var a=null,t=null;e.invalid&&e.touched&&(t=r.a.createElement("p",null,r.a.createElement("strong",null,"Please enter a valid value")));var n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"input":a=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":a=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":a=r.a.createElement("select",{className:u.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:a=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:u.a.Input},r.a.createElement("label",{className:u.a.Label},e.label),r.a.createElement("div",{className:u.a.InputElementContainer},e.icon?r.a.createElement(i.a,{icon:e.icon,style:{color:"#f2a30f",borderRight:"1px solid #f2f2f2",width:"30px",fontSize:"20px",padding:"8px"}}):null,a),t)}},103:function(e,a,t){e.exports={Input:"Input_Input__1Jw2q",Label:"Input_Label__bH7-f",InputElementContainer:"Input_InputElementContainer__2N5hB",InputElement:"Input_InputElement__1ZTnU",Invalid:"Input_Invalid__2vryH"}},104:function(e,a,t){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2hvei",BurgerSummaryContainer:"CheckoutSummary_BurgerSummaryContainer__2vTlu",BurgerSummary:"CheckoutSummary_BurgerSummary__1NkGX"}},105:function(e,a,t){e.exports={ContactDataContainer:"ContactData_ContactDataContainer__23Dk9",ContactData:"ContactData_ContactData__1i3Ld",FormContainer:"ContactData_FormContainer__15U5y",FormTitle:"ContactData_FormTitle__27XlW",Input:"ContactData_Input__ZrD04"}},106:function(e,a,t){e.exports={Checkout:"Checkout_Checkout__1Y6_H"}},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),l=t(5),u=t(58),o=t(104),c=t.n(o),m=function(e){return r.a.createElement("div",{className:c.a.CheckoutSummary},r.a.createElement("div",{className:c.a.BurgerSummaryContainer},r.a.createElement(u.a,{className:c.a.SummaryBurger,ingredients:e.ingredients})))},s=t(19),d=t(14),p=t(24),v=t(26),g=t(40),h=t(105),f=t.n(h),C=t(38),b=t(18),_=t(102),y=t(47),E=t(4),k=t(12),I=Object(i.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(a,t){return e(k.g(a,t))}}}))(Object(y.a)((function(e){var a=Object(l.g)(),t=Object(n.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1,icon:v.k},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1,icon:v.h},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1,icon:v.e},phone:{elementType:"input",elementConfig:{type:"number",placeholder:"Phone Number"},value:"",validation:{required:!0,minLength:10,maxLength:10},valid:!1,touched:!1,icon:v.f},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"Fastest",validation:{},valid:!0,icon:v.a}}),i=Object(d.a)(t,2),u=i[0],o=i[1],c=Object(n.useState)(!1),m=Object(d.a)(c,2),h=m[0],b=m[1],y=[];for(var k in u)y.push({id:k,config:u[k]});var I=r.a.createElement("form",{className:f.a.FormContainer,onSubmit:function(t){t.preventDefault();var n={};for(var r in u)n[r]=u[r].value;var i={ingredients:e.ings,price:e.price,orderData:n,userId:e.userId};e.onOrderBurger(i,e.token),a.push("/")}},y.map((function(e){return r.a.createElement(_.a,{key:e.id,icon:e.config.icon,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(a){return function(e,a){var t=Object(E.b)(u[a],{value:e.target.value,valid:Object(E.a)(e.target.value,u[a]),touched:!0}),n=Object(E.b)(u,Object(s.a)({},a,t)),r=!0;for(var i in n)r=n[i].valid&&r;o(n),b(r)}(a,e.id)}})})),r.a.createElement(g.a,{disabled:!h,btnType:"Success"},"ORDER"));e.loading&&(I=r.a.createElement(C.a,null));return r.a.createElement("div",{className:f.a.ContactDataContainer},r.a.createElement("div",{className:f.a.ContactData},r.a.createElement("div",{className:f.a.FormTitle},"You're almost there!"),r.a.createElement(p.a,{icon:v.g,style:{color:"#f2a30f",fontSize:"32px"}}),I))}),b.a)),N=t(106),S=t.n(N);a.default=Object(i.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))((function(e){var a=r.a.createElement(l.a,{to:"/"});return e.ings&&(a=r.a.createElement("div",{className:S.a.Checkout},r.a.createElement(m,{className:S.a.Summary,ingredients:e.ings,checkoutCancelled:function(){e.history.goBack()},checkoutContinued:function(){e.history.push({pathname:"/checkout/contact-data"})}}),r.a.createElement(I,{className:S.a.ContactData}))),r.a.createElement("div",null,a)}))}}]);
//# sourceMappingURL=3.98532454.chunk.js.map