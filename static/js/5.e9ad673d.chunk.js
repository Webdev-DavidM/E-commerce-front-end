(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[5],{121:function(e,t,n){e.exports={product:"Product_product__Pic6D",title:"Product_title__2Vhmj",price:"Product_price__pibV3",basketmodal:"Product_basketmodal__L9uv6",basket:"Product_basket__3PI_-",error:"Product_error__37_GV",productinfo:"Product_productinfo__3vfDt",continueshoppingbtn:"Product_continueshoppingbtn__1GdCm",checkoutbtn:"Product_checkoutbtn__2axGv",sizecontainer:"Product_sizecontainer__3mrmO",qtybtn1:"Product_qtybtn1__2mBnT",qtybtn2:"Product_qtybtn2__2Q_FQ",gobackbtn:"Product_gobackbtn__leJnS",qtybtn:"Product_qtybtn__1guil",quantityinput:"Product_quantityinput__3EkPH",addtocartbtn:"Product_addtocartbtn__3MjGk",column2:"Product_column2__3W6fM",column1:"Product_column1__23wUu"}},122:function(e,t,n){e.exports={next:"ProductImageCarousel_next__1IO8X",myslides:"ProductImageCarousel_myslides__31_Lb",slideshowcontainer:"ProductImageCarousel_slideshowcontainer__3ZdOu",prev:"ProductImageCarousel_prev__ph80r",dot:"ProductImageCarousel_dot__3Wn3r",active:"ProductImageCarousel_active__8fR8P",imagegallery:"ProductImageCarousel_imagegallery__wkSu4"}},123:function(e,t,n){e.exports={reviewcontainer:"Reviews_reviewcontainer__2hUWQ",reviewdivider:"Reviews_reviewdivider__3p2YE"}},151:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(15),r=n(16),a=n(18),o=n(17),i=n(0),l=n(11),u=n(9),d=n(121),j=n.n(d),h=n(37),b=n(8),m=n(122),p=n.n(m),f=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={productId:"",selectedImage:0},e.moveImageByArrow=function(t){return"left"===t&&0!==e.state.selectedImage?e.setState((function(e){return{selectedImage:e.selectedImage-1}})):"right"===t&&e.state.selectedImage!==e.props.product.images.length-1?e.setState((function(e){return{selectedImage:e.selectedImage+1}})):void 0},e.moveImagesByDot=function(t){e.setState((function(e){return{selectedImage:t}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.product.images,n=t.map((function(t,n){return Object(s.jsx)("span",{className:p.a.dot,onClick:function(){return e.moveImagesByDot(n)},style:n===e.state.selectedImage?{backgroundColor:"#f1c40f"}:null},n)})),c=t.map((function(t,n){return Object(s.jsx)("span",{onClick:function(){return e.moveImagesByDot(n)},style:n===e.state.selectedImage?{border:"3px solid #f1c40f"}:null,children:Object(s.jsx)("img",{src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(t),alt:"hello"})},n)}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:p.a.slideshowcontainer,children:Object(s.jsxs)("div",{className:"".concat(p.a.myslides," ").concat(p.a.fade),children:[Object(s.jsx)("button",{disabled:0===this.state.selectedImage,className:p.a.prev,onClick:function(){return e.moveImageByArrow("left")},children:Object(s.jsx)("i",{className:"fas fa-angle-left"})}),Object(s.jsx)("img",{src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(t[this.state.selectedImage]),alt:"hello"}),Object(s.jsx)("button",{className:p.a.next,onClick:function(){return e.moveImageByArrow("right")},children:Object(s.jsx)("i",{className:"fas fa-angle-right"})})]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{textAlign:"center"},children:[" ",Object(s.jsx)("i",{className:"fas fa-angle-left"})," \xa0",this.state.selectedImage+1," \xa0 / \xa0 ",t.length," \xa0",Object(s.jsx)("i",{className:"fas fa-angle-right"})]}),Object(s.jsx)(h.a,{query:"(max-width: 768px)",render:function(){return Object(s.jsx)("div",{style:{textAlign:"center"},children:n})}}),Object(s.jsx)(h.a,{query:"(min-width: 768px)",render:function(){return Object(s.jsx)("div",{className:p.a.imagegallery,style:{textAlign:"center"},children:c})}})]})}}]),n}(i.Component),g=Object(b.g)(Object(l.b)((function(e){return{product:e.products.selectedProduct}}))(f)),O=n(109),v=n(108),x=n(110),_=n(123),y=n.n(_),k=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={showReviews:!1,averageReviewRating:null,stars:[1,2,3,4,5]},e.componentDidMount=function(){var t=e.props.reviews;console.log(t);var n=t.length>0?t.reduce((function(e,t){return e+t.rating}),0)/t.length:0;console.log(n),e.setState({averageReviewRating:n})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,n=t.reviews,c=t.rating;return console.log(n,c),Object(s.jsxs)("div",{className:y.a.reviewcontainer,onClick:function(){return e.setState((function(e){return{showReviews:!e.showReviews}}))},children:[this.state.averageReviewRating&&this.state.stars.map((function(t,n){console.log(t);var c=t<=e.state.averageReviewRating?"#f1c40f":null;return Object(s.jsx)("span",{style:{color:"".concat(c)},children:Object(s.jsx)(O.a,{icon:x.d})},n)})),"\xa0 (",n.length,")",Object(s.jsx)("span",{children:"\xa0Click for review details"}),0===n.length&&Object(s.jsx)("span",{children:"(0) Be the first to review this product"}),Object(s.jsx)(v.a,{in:this.state.showReviews,timeout:400,classNames:"reviews",unmountOnExit:!0,children:Object(s.jsx)("div",{children:n.map((function(t,n){var c=e.state.stars.map((function(e,n){var c=e<=t.rating?"#f1c40f":null;return Object(s.jsx)("span",{style:{color:"".concat(c)},children:Object(s.jsx)(O.a,{icon:x.d})},n)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{className:y.a.reviewdivider}),c," by ",t.firstName,Object(s.jsx)("br",{}),t.comment]})}))})})]})}}]),n}(i.Component),w=n(10),P=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={size:"",showBasketModal:!1,dropdownSelected:!1,quantity:0,error:""},e.selectSize=function(t){e.setState({size:t.target.value,error:""})},e.selectQuantity=function(t){var n=e.props.product;if(""===e.state.size)return e.setState({error:"Please select a size first"});"-"===t&&0!==e.state.quantity&&e.setState((function(e){return{quantity:e.quantity-1,error:""}})),"+"===t&&0!==e.state.size&&(e.state.quantity<n.size[0][e.state.size]?e.setState((function(e){return{quantity:e.quantity+1}})):e.setState({error:"Maximum quantity in ".concat(e.state.size," selected")}))},e.addToBasket=function(){var t=e.props.addProductToBasket,n=e.props.product,s=n.images,c=n.price,r=n._id,a=n.name;""!==e.state.size&&0!==e.state.quantity?(t({size:e.state.size,qtyOfSizeInStock:e.props.product.size[0][e.state.size],quantity:e.state.quantity,name:a,id:r,price:c,images:s}),e.setState({showBasketModal:!0})):e.setState({error:"Please select a size and quantity"})},e.componentDidUpdate=function(t){t.location.pathname!==e.props.match.url&&(0,e.props.getProductFromServer)(t.history.location.pathname.split("/")[2])},e.componentDidMount=function(){(0,e.props.getProductFromServer)(e.props.match.params.id)},e.componentWillUnmount=function(){e.props.clearProduct()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.product,n=this.state.showBasketModal,c=null;if(0!==t.length){var r=Object.keys(t.size[0]);c=Object(s.jsx)(s.Fragment,{children:r.map((function(n,c){return Object(s.jsxs)("option",{value:n,disabled:0===t.size[0][n],onClick:function(t){return e.selectSize(t)},children:[n,"\xa0\xa0\xa0\xa0",t.size[0][n]," in stock"]},c)}))})}return Object(s.jsx)(s.Fragment,{children:t?Object(s.jsxs)("div",{className:j.a.product,children:[n&&Object(s.jsx)("div",{className:j.a.basketmodal,children:Object(s.jsxs)("div",{className:j.a.basket,children:[Object(s.jsxs)("h2",{children:[" ",Object(s.jsx)("i",{className:"fas fa-check"}),"\xa0Added to cart"," "]}),Object(s.jsx)("button",{onClick:function(){return e.setState({showBasketModal:!1})},className:j.a.continueshoppingbtn,children:"Continue shopping"}),Object(s.jsx)(u.b,{className:j.a.checkoutbtn,style:{textDecoration:"none",color:"white"},to:"/shopping-basket",children:"Checkout now"})]})}),Object(s.jsx)("p",{className:"{styles.title}"}),0!==t.length&&0!==t.reviews.length?Object(s.jsx)(k,{reviews:t.reviews}):null,Object(s.jsx)("h2",{children:Object(s.jsx)("span",{className:j.a.gobackbtn,onClick:function(){return e.props.history.goBack()},children:"Go back"})}),Object(s.jsx)("hr",{}),0!==t.length&&Object(s.jsx)(g,{images:t.images}),Object(s.jsxs)("div",{className:j.a.productinfo,children:[Object(s.jsxs)("div",{className:j.a.column1,children:[" ",Object(s.jsxs)("p",{className:j.a.price,children:["\xa3",t.price]}),t.colour&&Object(s.jsxs)("p",{children:["colour: ",t.colour]}),Object(s.jsx)("div",{children:t.name}),Object(s.jsx)("div",{className:j.a.sizecontainer,children:Object(s.jsxs)("form",{onClick:function(){return e.setState((function(e){return{dropdownSelected:!e.dropdownSelected}}))},children:[""!==this.state.size?Object(s.jsx)("span",{children:this.state.size}):Object(s.jsx)("span",{children:"Please select"})," ",!this.state.dropdownSelected&&Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:"fas fa-arrow-down"})}),this.state.dropdownSelected&&c]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:j.a.quantity,children:[Object(s.jsx)("form",{children:"Quantity:"}),Object(s.jsx)("button",{className:j.a.qtybtn1,onClick:function(){return e.selectQuantity("-")},children:"-"}),Object(s.jsx)("input",{onChange:function(t){return e.setState({quantity:t.target.value})},value:this.state.quantity,className:j.a.quantityinput,type:"input"}),Object(s.jsx)("button",{className:j.a.qtybtn2,onClick:function(){return e.selectQuantity("+")},children:"+"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),0!==t.stock?Object(s.jsxs)("span",{style:{color:"red"},children:["Hurry only ",t.stock," left in stock"]}):Object(s.jsx)("span",{style:{color:"red"},children:"Sorry out of stock"})]}),Object(s.jsxs)("button",{onClick:function(){return e.addToBasket()},className:j.a.addtocartbtn,children:[" ",Object(s.jsx)("i",{className:"fas fa-shopping-cart",style:{width:"1rem",height:"1rem"},children:" "}),"\xa0 \xa0Add to Basket"]}),this.state.error&&Object(s.jsx)("div",{className:j.a.error,children:this.state.error})]}),Object(s.jsx)("div",{className:j.a.column2,children:Object(s.jsx)("h3",{children:t.description})})]})]}):null})}}]),n}(i.Component);t.default=Object(l.b)((function(e){return{product:e.products.selectedProduct}}),(function(e){return{addProductToBasket:function(t){return e(Object(w.a)(t))},getProductFromServer:function(t){return e(Object(w.h)(t))},clearProduct:function(){return e(e(Object(w.e)()))}}}))(P)}}]);
//# sourceMappingURL=5.e9ad673d.chunk.js.map