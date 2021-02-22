(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[9],{111:function(e,t,r){"use strict";r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return l}));var n=r(12),c=r.n(n),o=r(25),s=r(26),a=r.n(s),u=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"ORDER_SENT"}),t.prev=1,t.next=4,a()({method:"post",url:"http://localhost:5000/orders/new-order",data:{orderInfo:e},headers:{token:e.token}});case 4:201===(n=t.sent).status&&r({type:"ORDER_SUCCESS",products:n.data}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.request),t.t0.request&&0===t.t0.request.status&&r({type:"ORDER_FAIL",error:"Network error, please try again"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(r){var n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("userInfo")),r({type:"ORDER_SENT"}),t.prev=2,t.next=5,a()({method:"get",url:"http://localhost:5000/orders/order/".concat(e),headers:{token:n.token,userId:n.id}});case 5:200===(o=t.sent).status&&r({type:"INDIVDUAL_ORDER_SUCCESS",order:o.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),r({type:"ORDER_FAIL",error:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){var t=e.token,r=e.user;return function(){var e=Object(o.a)(c.a.mark((function e(n){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"ORDER_SENT"}),e.prev=1,e.next=4,a()({method:"get",url:"http://localhost:5000/orders/".concat(r),headers:{token:t}});case 4:200===(o=e.sent).status&&n({type:"ORDER_LIST_RECEIVED",orders:o.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n({type:"ORDER_FAIL",error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return{type:"CLOSE_MODAL"}}},113:function(e,t,r){e.exports={account:"Account_account__1DvIx",orderscontainer:"Account_orderscontainer__3Pw-e",logoutbtnmobile:"Account_logoutbtnmobile__FRGhL",ordersdetails:"Account_ordersdetails__2fT42",largerscreenbanner:"Account_largerscreenbanner__3EeFv",orderbtn:"Account_orderbtn__3JR9v",logoutbtn:"Account_logoutbtn__pKX6Q",headingscontainer:"Account_headingscontainer__2tDc6",lstbtn:"Account_lstbtn__I84s3"}},140:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(15),o=r(16),s=r(18),a=r(17),u=r(0),i=r(37),d=r(11),l=r(8),p=r(113),b=r.n(p),h=r(111),j=r(30),O=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){var t=e.props.getOrders,r=JSON.parse(localStorage.getItem("userInfo"));t({user:r.id,token:r.token})},e.logOut=function(){(0,e.props.logOutUser)(),e.props.history.push("/")},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.orders,c=t.user;return Object(n.jsxs)("div",{className:b.a.account,children:[Object(n.jsx)(i.a,{query:"(min-width: 768px)",render:function(){return Object(n.jsxs)("div",{className:b.a.largerscreenbanner,children:[c&&Object(n.jsxs)("p",{children:["Welcome ",c.firstName," ",c.lastName," | Your Account"]}),Object(n.jsx)("button",{onClick:function(){return e.logOut()},className:b.a.logoutbtn,children:"Log out"})]})}}),Object(n.jsxs)("div",{className:b.a.adminorderscontainer,children:[Object(n.jsx)("h3",{children:"Your Recent orders"}),Object(n.jsx)("button",{onClick:function(){return e.logOut()},className:b.a.logoutbtnmobile,children:"Log out"})]}),Object(n.jsx)("div",{style:{borderTop:"2px solid black ",marginLeft:20,marginRight:20}}),Object(n.jsxs)("div",{className:b.a.orders,children:[Object(n.jsx)(i.a,{query:"(min-width: 768px)",render:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:b.a.headingscontainer,children:[Object(n.jsx)("span",{children:"Date"}),Object(n.jsx)("span",{children:"Number"}),Object(n.jsx)("span",{children:"Total"}),Object(n.jsx)("span",{children:"Status"}),Object(n.jsx)("span",{children:"What next?"})]}),Object(n.jsx)("div",{style:{borderTop:"1px solid #bdc3c7 ",marginLeft:5,marginRight:5}})]})}}),void 0!==r&&0!==r.length&&r.map((function(t,r){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:b.a.ordersdetails,children:[Object(n.jsx)("span",{children:t.dateOfOrder.split(" ")[0]}),Object(n.jsx)("span",{style:{color:"#2980b9"},children:t._id}),Object(n.jsxs)("span",{children:["Total cost: \xa3",t.total]}),Object(n.jsx)("span",{style:{color:"#16a085"},children:t.status}),Object(n.jsx)("div",{className:b.a.lstbtn,children:Object(n.jsx)("button",{onClick:function(){return e.props.history.push("/order/".concat(t._id))},className:b.a.orderbtn,children:"View your order"})})]},r),Object(n.jsx)("div",{style:{borderTop:"1px solid #bdc3c7 ",marginLeft:5,marginRight:5}})]},r)}))]})]})}}]),r}(u.Component);t.default=Object(l.g)(Object(d.b)((function(e){return{orders:e.orders.orders,user:e.user.user}}),(function(e){return{getOrders:function(t){return e(Object(h.c)(t))},logOutUser:function(){return e(Object(j.b)())}}}))(O))}}]);
//# sourceMappingURL=9.bf2fad8b.chunk.js.map