(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3m-yZ",button:"ContactForm_button__4nz2s",input:"ContactForm_input__26RDv",label:"ContactForm_label__3DDU0"}},,,function(t,e,n){t.exports={title:"App_title__16Sss"}},,,function(t,e,n){t.exports={button:"ContactItem_button__2GHJl",li:"ContactItem_li__Li6Y3",a:"ContactItem_a__3mbtE"}},,function(t,e,n){t.exports={label:"Filter_label__23P-O",input:"Filter_input__3Xxna"}},,function(t,e,n){t.exports={container:"Container_container__2iwGV"}},,function(t,e,n){t.exports={div:"ContactList_div__2UCkW"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(15),s=n(3),l=n(4),u=n(7),d=n(6),m=n(12),b=n.n(m),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:b.a.container,children:e})};j.defaultProps={children:[]};var f=j,p=n(13),C=n(24),v=n(2),O=n.n(v),_=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(C.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({id:"",name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.form,children:[Object(h.jsxs)("label",{className:O.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,className:O.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,className:O.a.input,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",className:O.a.button,children:"Add contact"})})]})}}]),n}(a.Component),x=_,g=n(10),N=n.n(g),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,className:N.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})};y.defaultProps={value:""};var A=y,S=n(8),w=n.n(S),F=function(t){var e=t.contact,n=t.onDeleteContact;return Object(h.jsxs)("li",{className:w.a.li,children:[Object(h.jsxs)("span",{children:[e.name,": "]}),Object(h.jsx)("a",{href:"tel:".concat(e.number),className:w.a.a,children:e.number}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(e.id)},className:w.a.button,children:"Delete"})]})},z=n(14),D=n.n(z),k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("div",{className:D.a.div,children:Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(F,{contact:t,onDeleteContact:n},t.id)}))})})},Z=n(5),L=n.n(Z),J=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name.toLowerCase();t.state.contacts.find((function(t){return t.name.toLowerCase()===n}))?alert("".concat(e.name," is already on contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(h.jsxs)(f,{children:[Object(h.jsx)("h2",{className:L.a.title,children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:L.a.title,children:"Contacts"}),Object(h.jsx)(A,{value:t,onChange:this.changeFilter}),Object(h.jsx)(k,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),I=J;n(21);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9ef1762f.chunk.js.map