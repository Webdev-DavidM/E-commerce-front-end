/*! For license information please see 6.8bb8547b.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[6],{109:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return h}));var n=r(6),a=r.n(n),s=r(15),c=r(13),o=r.n(c),i=function(e){var t=e.admin;return console.log(t),function(){var e=Object(s.a)(a.a.mark((function e(r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"ORDER_SENT"}),e.prev=1,e.next=4,o()({method:"get",url:"https://my-ecommerce-site-fitness.herokuapp.com/adminuser/allorders",headers:{token:t.token,email:t.email}});case 4:200===(n=e.sent).status&&(console.log(n.data),r({type:"ADMIN_ALL_USER_ORDERS_SUCCESS",orders:n.data})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.request&&0===e.t0.request.status&&r({type:"ORDER_FAIL",error:"Network error, please try again"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"ORDER_SENT"}),t.prev=1,t.next=4,o()({method:"post",url:"https://my-ecommerce-site-fitness.herokuapp.com/orders/new-order",data:{orderInfo:e},headers:{token:e.token}});case 4:201===(n=t.sent).status&&r({type:"ORDER_SUCCESS",products:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.request&&0===t.t0.request.status&&r({type:"ORDER_FAIL",error:"Network error, please try again"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("userInfo")),r({type:"ORDER_SENT"}),t.prev=2,t.next=5,o()({method:"get",url:"https://my-ecommerce-site-fitness.herokuapp.com/orders/order/".concat(e),headers:{token:n.token,userId:n.id}});case 5:200===(s=t.sent).status&&r({type:"INDIVDUAL_ORDER_SUCCESS",order:s.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),r({type:"ORDER_FAIL",error:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){var t=e.token,r=e.user;return function(){var e=Object(s.a)(a.a.mark((function e(n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"ORDER_SENT"}),e.prev=1,e.next=4,o()({method:"get",url:"https://my-ecommerce-site-fitness.herokuapp.com/orders/".concat(r),headers:{token:t}});case 4:200===(s=e.sent).status&&n({type:"ORDER_LIST_RECEIVED",orders:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:"ORDER_FAIL",error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return{type:"CLOSE_MODAL"}}},138:function(e,t,r){var n;!function(r){"use strict";var a={},s={},c={},o="en",i={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},u={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){return e.utc?"+0000":/[\+-]\d{4}/.exec(e.toTimeString())[0]},post:function(e){return e}},d={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var r=(e.exec(t)||[""])[0];return{value:0|r,length:r.length}},find:function(e,t){for(var r,n=-1,a=0,s=0,c=e.length;s<c;s++)r=e[s],!t.indexOf(r)&&r.length>a&&(n=s,a=r.length);return{value:n,length:a}},pre:function(e){return e}},l=function(e,t,r){var n=function(e,t,r){var n=function(e){e&&(this.res=e)};(n.prototype=e).constructor=n;var a,s=new n(r);for(var c in t||{})a=t[c],s[c]=a.slice?a.slice():a;return s},a={res:n(t.res,r.res)};a.formatter=n(t.formatter,r.formatter,a.res),a.parser=n(t.parser,r.parser,a.res),s[e]=a};a.compile=function(e){for(var t,r=/\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,n=[e];t=r.exec(e);)n[n.length]=t[0];return n},a.format=function(e,t,r){var n="string"===typeof t?a.compile(t):t,c=a.addMinutes(e,r?e.getTimezoneOffset():0),i=s[o].formatter,u="";c.utc=r||!1;for(var d,l=1,h=n.length;l<h;l++)u+=i[d=n[l]]?i.post(i[d](c,n[0])):d.replace(/\[(.*)]/,"$1");return u},a.preparse=function(e,t){var r="string"===typeof t?a.compile(t):t,n={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},c=/\[(.*)]/,i=s[o].parser,u=0;e=i.pre(e);for(var d,l,h=1,p=r.length;h<p;h++)if(i[d=r[h]]){if(!(l=i[d](e.slice(u),r[0])).length)break;u+=l.length,n[d.charAt(0)]=l.value,n._match++}else if(d===e.charAt(u)||" "===d)u++;else{if(!c.test(d)||e.slice(u).indexOf(c.exec(d)[1])){if("..."===d){u=e.length;break}break}u+=d.length-2}return n.H=n.H||i.h12(n.h,n.A),n._index=u,n._length=e.length,n},a.isValid=function(e,t){var r="string"===typeof e?a.preparse(e,t):e,n=[31,28+a.isLeapYear(r.Y)|0,31,30,31,30,31,31,30,31,30,31][r.M-1];return!(r._index<1||r._length<1||r._index-r._length||r._match<1||r.Y<1||r.Y>9999||r.M<1||r.M>12||r.D<1||r.D>n||r.H<0||r.H>23||r.m<0||r.m>59||r.s<0||r.s>59||r.S<0||r.S>999||r.Z<-720||r.Z>840)},a.parse=function(e,t,r){var n=a.preparse(e,t);return a.isValid(n)?(n.M-=n.Y<100?22801:1,r||n.Z?new Date(Date.UTC(n.Y,n.M,n.D,n.H,n.m+n.Z,n.s,n.S)):new Date(n.Y,n.M,n.D,n.H,n.m,n.s,n.S)):new Date(NaN)},a.transform=function(e,t,r,n){return a.format(a.parse(e,t),r,n)},a.addYears=function(e,t){return a.addMonths(e,12*t)},a.addMonths=function(e,t){var r=new Date(e.getTime());return r.setMonth(r.getMonth()+t),r},a.addDays=function(e,t){var r=new Date(e.getTime());return r.setDate(r.getDate()+t),r},a.addHours=function(e,t){return a.addMinutes(e,60*t)},a.addMinutes=function(e,t){return a.addSeconds(e,60*t)},a.addSeconds=function(e,t){return a.addMilliseconds(e,1e3*t)},a.addMilliseconds=function(e,t){return new Date(e.getTime()+t)},a.subtract=function(e,t){var r=e.getTime()-t.getTime();return{toMilliseconds:function(){return r},toSeconds:function(){return r/1e3},toMinutes:function(){return r/6e4},toHours:function(){return r/36e5},toDays:function(){return r/864e5}}},a.isLeapYear=function(e){return!(e%4)&&!!(e%100)||!(e%400)},a.isSameDay=function(e,t){return e.toDateString()===t.toDateString()},a.locale=function(e,t){return t?l(e,{res:i,formatter:u,parser:d},t):"function"===typeof e?o=e(a):e&&(r&&!r.date&&console.warn("This method of changing the locale is deprecated. See documentation for details."),o=e),o},a.extend=function(e){var t=e.extender||{};for(var r in t)a[r]||(a[r]=t[r]);(e.formatter||e.parser||e.res)&&l(o,s[o],e)},a.plugin=function(e,t){"function"===typeof e?a.extend(c[e(a)]):(c[e]=c[e]||t,!t&&c[e]&&(a.extend(c[e]),r&&!r.date&&console.warn("This method of applying plugins is deprecated. See documentation for details.")))},a.locale(o,{}),"object"===typeof e.exports?e.exports=a:void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}(this)},139:function(e,t,r){e.exports={checkoutcontainer:"Checkout_checkoutcontainer__REoAB",ordermodal:"Checkout_ordermodal__jUQhl",orderbtn:"Checkout_orderbtn__ua6EP",continueshoppingbtn:"Checkout_continueshoppingbtn__3b7xu",gobackbtn:"Checkout_gobackbtn__2Iz0X",deliveryaddress:"Checkout_deliveryaddress__2PgdP",itemcontainer:"Checkout_itemcontainer__W7T8z",details:"Checkout_details__2EE4Q",imagecontainer:"Checkout_imagecontainer__4V_oq",itemdetails:"Checkout_itemdetails__2Cq9v"}},149:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(17),s=r(18),c=r(20),o=r(19),i=r(1),u=r(12),d=r(7),l=r(11),h=r(138),p=r.n(h),f=r(139),m=r.n(f),b=r(10),g=r(109),j=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){var t=e.props,r=t.basket,n=t.addBasket;0!==r.length&&(Object.keys(localStorage).map((function(e){return"userInfo"!==e&&localStorage.removeItem("".concat(e))})),r.map((function(e,t){return localStorage.setItem("item".concat(t),JSON.stringify(e))})));var a=Object.keys(localStorage).map((function(e){return JSON.parse(localStorage.getItem("".concat(e)))}));0===r.length&&a&&a.map((function(e){return void 0===e.firstName&&n(e)}))},e.placeOrder=function(){var t=e.props,r=t.userDetails,n=t.basket,a=t.basketTotal,s=t.sendOrder,c=a();c=c.Total;var o=new Date;s({date:p.a.format(o,"YYYY/MM/DD HH:mm:ss"),userId:r.id,orderItems:n,total:c,status:"ordered",token:r.token})},e.closeModal=function(){var t=e.props,r=t.clearBasket,n=t.clearModal;e.props.error||(r(),Object.keys(localStorage).map((function(e){return"userInfo"!==e&&localStorage.removeItem("".concat(e))})),n(),e.props.history.push("/"));n()},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this,t=this.props.userDetails,r=t.firstName,a=t.lastName,s=t.address,c=this.props,o=c.basket,i=(0,c.basketTotal)();return Object(n.jsxs)("div",{className:m.a.checkoutcontainer,children:[this.props.showModal?Object(n.jsx)("div",{className:m.a.ordermodal,children:Object(n.jsxs)("div",{className:m.a.basket,children:[Object(n.jsxs)("h2",{children:[" ",Object(n.jsx)("i",{className:"fas fa-check"}),"\xa0",this.props.error?Object(n.jsx)("span",{children:"Order failed!Please try again"}):Object(n.jsx)("span",{children:"Order confirmed!"})]}),Object(n.jsx)("button",{onClick:function(){return e.closeModal()},className:m.a.continueshoppingbtn,children:this.props.error?Object(n.jsx)("span",{children:"Try again"}):Object(n.jsx)("span",{children:"Continue shopping"})}),Object(n.jsx)(d.b,{className:m.a.checkoutbtn,style:{textDecoration:"none",color:"white"},to:"/orders",children:"View orders"})]})}):null,Object(n.jsx)("h2",{children:Object(n.jsx)("span",{className:m.a.gobackbtn,onClick:function(){return e.props.history.goBack()},children:"Go back"})}),Object(n.jsx)("h2",{children:"Summary"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:m.a.deliveryaddress,children:[Object(n.jsx)("h4",{children:"Delivery"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("strong",{children:" Delivering to:"}),"\xa0",s]}),Object(n.jsx)("h4",{children:"Name"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("strong",{children:" Delivering to:"}),"\xa0 ",r," ",a]}),Object(n.jsx)("h4",{children:"Payment method"}),Object(n.jsxs)("table",{border:"0",cellpadding:"10",cellspacing:"0",align:"center",children:[Object(n.jsx)("tr",{children:Object(n.jsx)("td",{align:"center"})}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{align:"left",children:Object(n.jsx)("a",{href:"https://www.paypal.com/uk/webapps/mpp/paypal-popup",title:"How PayPal Works",onClick:"javascript:window.open('https://www.paypal.com/uk/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;",children:Object(n.jsx)("img",{src:"https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png",border:"0",alt:"PayPal Acceptance Mark"})})})})]})]}),Object(n.jsx)("div",{className:m.a.paymentmethod}),Object(n.jsx)("div",{className:m.a.ordersummary,children:Object(n.jsxs)("div",{className:m.a.itemcontainer,children:[o.map((function(e,t){return Object(n.jsxs)("div",{className:m.a.details,children:[Object(n.jsx)("div",{className:m.a.imagecontainer,children:Object(n.jsx)("img",{src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(e.images[0]),alt:""})}),Object(n.jsxs)("div",{className:m.a.itemdetails,children:[Object(n.jsxs)("div",{style:{width:"40%"},children:[" ",Object(n.jsx)("span",{children:e.name})]}),Object(n.jsxs)("div",{style:{width:"20%"},children:[" ",Object(n.jsxs)("span",{children:["Size:\xa0",e.size]})]}),Object(n.jsxs)("div",{style:{width:"15%"},children:[" ",Object(n.jsxs)("span",{children:["Quantity:\xa0",e.quantity]})]}),Object(n.jsxs)("div",{style:{width:"15%"},children:[" ",Object(n.jsxs)("span",{children:["Price: \xa3",e.price]})]})]})]},t)})),Object(n.jsx)("div",{className:m.a.priceandquanity}),Object(n.jsxs)("h3",{className:m.a.itemcost,children:["Total: \xa3",i.Total]}),Object(n.jsx)("span",{className:m.a.orderbtn,onClick:function(){return e.placeOrder()},children:"Place order"})]})})]})}}]),r}(i.Component);t.default=Object(l.g)(Object(u.b)((function(e){return{userDetails:e.user.user,showModal:e.orders.showOrdersModal,basket:e.products.basket,error:e.orders.errors,basketTotal:function(){var t=0;return 0!==e.products.basket.length&&(t=e.products.basket.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}))),{Total:t}}}}),(function(e){return{addBasket:function(t){return e(Object(b.a)(t))},sendOrder:function(t){return e(Object(g.e)(t))},clearBasket:function(){return e(Object(b.m)())},clearModal:function(){return e(Object(g.a)())}}}))(j))}}]);
//# sourceMappingURL=6.8bb8547b.chunk.js.map