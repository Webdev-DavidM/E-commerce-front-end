(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[16],{119:function(n,e,r){n.exports={signincontainer:"Signin_signincontainer__1YYCb",error:"Signin_error__1vu_i",signin:"Signin_signin__3dptC",signup:"Signin_signup__3NOuH"}},143:function(n,e,r){"use strict";r.r(e);var t=r(0),s=r(43),i=r(15),a=r(16),c=r(18),o=r(17),l=r(119),u=r.n(l),d=r(1),g=r(11),p=r(28),j=function(n){Object(c.a)(r,n);var e=Object(o.a)(r);function r(){var n;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(n=e.call.apply(e,[this].concat(a))).state={email:"",password:"",existingUserPassword:"",localErrorSignIn:null,localErrorSignUp:null},n.onInputChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.fieldsCompleted=function(e){if("signin"===e){if(!n.state.email||""===n.state.password)return n.setState({localErrorSignIn:"Please complete all fields"});n.setState({localErrorSignIn:null}),n.props.submitSignIn(n.state.email,n.state.password)}if("signup"===e){if(""===n.state.existingUserPassword)return n.setState({localErrorSignUp:"Please complete all fields"});n.props.history.push("/sign-up/".concat(n.state.existingUserPassword))}},n}return Object(a.a)(r,[{key:"render",value:function(){var n=this,e=this.props,r=e.serverError;e.isSignedIn&&this.props.history.goBack();var s=this.state,i=s.password,a=s.email,c=s.existingUserPassword,o=s.localErrorSignIn,l=s.localErrorSignUp;return Object(t.jsxs)("div",{className:u.a.signincontainer,children:[Object(t.jsxs)("div",{className:u.a.signin,children:[Object(t.jsx)("h1",{children:"Sign in"}),Object(t.jsx)("p",{children:"Email address"}),Object(t.jsx)("input",{onChange:function(e){return n.onInputChange(e)},name:"email",type:"text",value:a}),Object(t.jsx)("br",{}),Object(t.jsx)("p",{children:"Password "}),Object(t.jsx)("input",{onChange:function(e){return n.onInputChange(e)},name:"password",value:i}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{onClick:function(){return n.fieldsCompleted("signin")},children:"Sign in securely"}),o&&Object(t.jsx)("div",{className:u.a.error,children:o}),r&&Object(t.jsx)("div",{className:u.a.error,children:r})]}),Object(t.jsxs)("div",{className:u.a.signup,children:[Object(t.jsx)("h1",{children:"New customer"}),Object(t.jsx)("p",{children:"Email address"}),Object(t.jsx)("input",{type:"text",onChange:function(e){return n.onInputChange(e)},name:"existingUserPassword",value:c}),Object(t.jsx)("br",{}),Object(t.jsx)("button",{onClick:function(){return n.fieldsCompleted("signup")},children:"Sign in securely"}),l&&Object(t.jsx)("div",{className:u.a.error,children:l})]})]})}}]),r}(d.Component);e.default=Object(g.b)((function(n){return{serverError:n.user.error,loading:n.user.loading,isSignedIn:n.user.signedIn}}),(function(n){return{submitSignIn:function(e,r){n(Object(p.c)(e,r))}}}))(j)}}]);
//# sourceMappingURL=16.019efcbd.chunk.js.map