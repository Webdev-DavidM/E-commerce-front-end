(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[8],{124:function(t,e,n){t.exports={shoppingbasket:"ShoppingBasket_shoppingbasket__3hPIk",buttoncheckout:"ShoppingBasket_buttoncheckout__1THlB",error:"ShoppingBasket_error__PUUnt",gobackbtn:"ShoppingBasket_gobackbtn__3CoM3",buttonshopping:"ShoppingBasket_buttonshopping__4IUxQ",buttoncontainer:"ShoppingBasket_buttoncontainer__4kodM"}},125:function(t,e,n){t.exports={itemcontainer:"CheckoutItem_itemcontainer__1VqFn",details:"CheckoutItem_details__2NmzK",error:"CheckoutItem_error__qhsIS",imagecontainer:"CheckoutItem_imagecontainer__3MEKK",itemdetails:"CheckoutItem_itemdetails__2eEq2",qtybtn1:"CheckoutItem_qtybtn1__3bs4s",qtybtn2:"CheckoutItem_qtybtn2__1jllo",bin:"CheckoutItem_bin__3zcE1",priceandquanity:"CheckoutItem_priceandquanity__BpTRf",amount:"CheckoutItem_amount__33tZf",rule:"CheckoutItem_rule__3l5bu",qtybtn:"CheckoutItem_qtybtn__3PoBx",itemcost:"CheckoutItem_itemcost__Ct5b3"}},152:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(15),c=n(16),o=n(18),s=n(17),i=n(0),u=n(11),l=n(124),b=n.n(l),h=n(125),p=n.n(h),d=n(9),j=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={quantity:null,error:""},t.componentDidMount=function(){var e=t.props.details.quantity;t.setState({quantity:e})},t.removeItem=function(e,n){var a=t.props.details.size,r={id:e,size:a};t.props.deleteItem(r);var c=t.props.basket.filter((function(n){return n.id===e&&n.size===t.props.details.size}));localStorage.removeItem("item".concat(c[0].localStorageKey))},t.adjustQuantity=function(e){var n=t.props.updateBasket,a=t.props.details.qtyOfSizeInStock,r=t.props,c=r.id,o=r.localStorageKey;if("-"===e)if(0!==t.state.quantity){n(c,t.state.quantity-1),t.setState((function(t){return{quantity:t.quantity-1,error:""}}));var s=JSON.parse(localStorage.getItem("".concat(o)));s.quantity=t.state.quantity-1,localStorage.setItem("".concat(o),JSON.stringify(s))}else t.setState({error:"Nothing in basket"});if("+"===e)if(t.state.quantity<a){n(c,t.state.quantity+1),t.setState((function(t){return{quantity:t.quantity+1,error:""}}));var i=JSON.parse(localStorage.getItem("".concat(o)));i.quantity=t.state.quantity+1,localStorage.setItem("".concat(o),JSON.stringify(i))}else t.setState({error:"Maximum quantity available"})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props.details,n=e.name,r=e.images,c=e.price,o=e.size,s=e.id,i=this.props.localStorageKey;return Object(a.jsxs)("div",{className:p.a.itemcontainer,children:[Object(a.jsxs)("div",{className:p.a.details,children:[Object(a.jsx)("div",{className:p.a.imagecontainer,children:Object(a.jsx)("img",{src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(r[0]),alt:""})}),Object(a.jsxs)("div",{className:p.a.itemdetails,children:[Object(a.jsx)("span",{children:n}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["Size:",o]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{style:{color:"#3498db"},children:["\xa3",c]}),Object(a.jsx)("br",{})]})]}),Object(a.jsx)("div",{children:" "}),Object(a.jsxs)("div",{className:p.a.priceandquanity,children:[Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("button",{className:p.a.qtybtn1,onClick:function(){return t.adjustQuantity("-")},children:"-"}),Object(a.jsx)("span",{style:{color:"#27ae60"},className:p.a.amount,children:this.state.quantity}),Object(a.jsx)("button",{className:p.a.qtybtn2,onClick:function(){return t.adjustQuantity("+")},children:"+"})]}),Object(a.jsx)("button",{className:p.a.bin,onClick:function(){return t.removeItem(s,i)},children:Object(a.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})}),Object(a.jsxs)("h2",{className:p.a.itemcost,style:{color:"#3498db"},children:["Total: \xa3",c*this.state.quantity]})]}),Object(a.jsx)("div",{className:p.a.error,children:this.state.error&&Object(a.jsx)("span",{children:this.state.error})})]})}}]),n}(i.Component),m=Object(u.b)((function(t){return{basket:t.products.basket}}),(function(t){return{updateBasket:function(e,n){return t(Object(d.x)(e,n))},deleteItem:function(e){return t(Object(d.f)(e))}}}))(j),k=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={error:""},t.componentDidMount=function(){var e=t.props,n=e.basket,a=e.addBasket;0!==n.length&&(Object.keys(localStorage).map((function(t){return"userInfo"!==t&&localStorage.removeItem("".concat(t))})),n.map((function(t,e){return console.log(t.localStorageKey),localStorage.setItem("item".concat(t.localStorageKey),JSON.stringify(t))})));var r=Object.keys(localStorage).map((function(t){return JSON.parse(localStorage.getItem("".concat(t)))}));0===n.length&&r&&r.map((function(t){return void 0===t.firstName&&a(t)}))},t.isUserSignedIn=function(){JSON.parse(localStorage.getItem("userInfo"))?t.props.history.push("check-out"):t.setState({error:"Please sign in or create an account to buy"})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.basket,r=(0,e.basketTotal)();return Object(a.jsxs)("div",{className:b.a.shoppingbasket,children:[Object(a.jsx)("h2",{children:"Your Shopping Basket"}),""!==this.state.error&&Object(a.jsx)("div",{className:b.a.error,children:this.state.error}),Object(a.jsxs)("div",{className:b.a.buttoncontainer,children:[" ",Object(a.jsx)("button",{className:b.a.buttonshopping,onClick:function(){return t.props.history.push("/")},children:"Continue Shopping"}),Object(a.jsx)("button",{disabled:0===n.length,onClick:function(){return t.isUserSignedIn()},className:b.a.buttoncheckout,children:"Proceed to checkout"}),Object(a.jsx)("br",{})]}),n.map((function(t,e){return!t.token&&Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{details:t,id:e,localStorageKey:"item".concat(e)},e),Object(a.jsx)("hr",{})]},e)})),0===n.length&&Object(a.jsx)("h2",{style:{color:"#e74c3c"},children:"Basket empty "}),Object(a.jsxs)("h1",{style:{textAlign:"right",marginRight:"4rem",color:"#27ae60"},children:["Total price: \xa3",r.Total]}),Object(a.jsx)("button",{disabled:0===n.length,className:b.a.buttoncheckout,onClick:function(){return t.isUserSignedIn()},children:"Proceed to checkout"}),""!==this.state.error&&Object(a.jsx)("div",{className:b.a.error,children:this.state.error})]})}}]),n}(i.Component);e.default=Object(u.b)((function(t){return{basket:t.products.basket,basketTotal:function(){var e=0;return 0!==t.products.basket.length&&(e=t.products.basket.map((function(t){return t.price*t.quantity})).reduce((function(t,e){return t+e}))),{Total:e}}}}),(function(t){return{addBasket:function(e){return t(Object(d.a)(e))}}}))(k)}}]);
//# sourceMappingURL=8.c5d508ac.chunk.js.map