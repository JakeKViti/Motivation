(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(18),r=n.n(o),c=(n(30),n(31),n(7)),s=n(8),h=n(10),j=n(9),u=n(1),d=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"Welcome To The Motivational App"})}}]),n}(i.a.Component),b=n(16),l=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("ol",{id:"quote",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:this.props.entry.quote}),Object(u.jsxs)("p",{children:["Said by ",this.props.entry.whosaid," in ",this.props.entry.origin]}),Object(u.jsxs)("p",{children:["Motivation was submitted by ",this.props.entry.sentby]})]},this.props.entry.id)})}}]),n}(i.a.Component),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){e.props.fetchQuote()},e.handleLoading=function(){return console.log(e.props.entry),Object(u.jsx)(l,{entry:e.props.entry})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:["Words To Live By",this.handleLoading()]})}}]),n}(i.a.Component),O=Object(b.b)((function(e){return{entry:e.entry,loading:e.loading}}),{fetchQuote:function(){return function(e){e({type:"LOADING_QUOTE"}),fetch("http://localhost:3001/api/v1/quotes").then((function(e){return e.json()})).then((function(t){return e({type:"ADD_QUOTE",payload:t})}))}}})(p),g=n(12);var y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleCreditChange=function(e){a.setState({credit:e.target.value})},a.handleNameChange=function(e){a.setState({name:e.target.value})},a.handleMotivationChange=function(e){a.setState({message:e.target.value})},a.handleOriginChange=function(e){a.setState({origin:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={quote:{quote:a.state.message,whosaid:a.state.name,origin:a.state.origin,sentby:a.state.credit,approved:!1}};a.props.sendQuote(t)},a.state={name:"Anonymous",message:"Please write your Motivation here.",credit:"Anonymous",origin:"Unknown"},a.handleMotivationChange=a.handleMotivationChange.bind(Object(g.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(g.a)(a)),a.handleCreditChange=a.handleCreditChange.bind(Object(g.a)(a)),a.handleOriginChange=a.handleOriginChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{children:["Enter Your Motivation Here!:",Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{value:this.state.message,onChange:this.handleMotivationChange}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("label",{children:["Said by who?:",Object(u.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleNameChange}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("label",{children:["Where It Was Said?:",Object(u.jsx)("input",{type:"text",value:this.state.origin,onChange:this.handleOriginChange}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("label",{children:["How To Credit You?:",Object(u.jsx)("input",{type:"text",value:this.state.credit,onChange:this.handleCreditChange}),Object(u.jsx)("br",{})]}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})}}]),n}(i.a.Component),v=Object(b.b)(null,(function(e){return{sendQuote:function(t){e(function(e){return function(){fetch("http://localhost:3001/api/v1/quotes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}}(t))}}}))(y),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Information About Site:"}),Object(u.jsx)("p",{children:"1: All Submission Will Be Reviewed By App Admin"}),Object(u.jsx)("p",{children:"2: Motivation could be a Quote, Saying, or Well Words"}),Object(u.jsx)("p",{children:"3: Motivation Doesn't Have To Be From Something, It Can Original."}),Object(u.jsx)("p",{children:"4: If You Don't Know Who Said The Quote or Don't Want To Say Who Its From, Leave Said By As Anonymous"}),Object(u.jsx)("p",{children:"5: If You Don't Know Origin Of Message Leave It As Unknown"}),Object(u.jsx)("p",{children:"6: Write How You Want To Be Credited, If You Don't Want To Be Creadited, Leave It As Anonymous"}),Object(u.jsx)("p",{children:"7: Please Message Any Concerns Or Questions To @JakeKViti On Twitter"}),Object(u.jsx)("p",{children:"8: Rules Will Be Updated As Needed"})]})}}]),n}(i.a.Component),m=n(13),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)(m.b,{to:"/",style:{paddingRight:"15px"},children:"Home"}),Object(u.jsx)(m.b,{to:"/moti",style:{paddingRight:"15px"},children:"Random Motivation"}),Object(u.jsx)(m.b,{to:"/form",style:{paddingRight:"15px"},children:"Submit Motivation"}),Object(u.jsx)(m.b,{to:"/about",style:{paddingRight:"15px"},children:"About"})]})}}]),n}(i.a.Component),C=n(3);var S=function(){return Object(u.jsx)(m.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(f,{}),Object(u.jsx)(C.a,{exact:!0,path:"/",component:d}),Object(u.jsx)(C.a,{exact:!0,path:"/moti",component:O}),Object(u.jsx)(C.a,{exact:!0,path:"/form",component:v}),Object(u.jsx)(C.a,{exact:!0,path:"/about",component:x})]})})})},A=n(19),T=n(25),w=n(14);var M=Object(A.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{entry:[],loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_QUOTE":return Object(w.a)(Object(w.a)({},e),{},{entry:e.entry,loading:!0});case"ADD_QUOTE":return Object(w.a)(Object(w.a)({},e),{},{entry:t.payload,loading:!1});case"SEND_QUOTE":return Object(w.a)(Object(w.a)({},e),{},{entry:t.payload});default:return e}}),Object(A.b)(Object(A.a)(T.a)));r.a.render(Object(u.jsx)(b.a,{store:M,children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a17eeee3.chunk.js.map