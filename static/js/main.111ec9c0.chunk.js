(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[1],{10:function(e,t,r){"use strict";r.d(t,"i",(function(){return l})),r.d(t,"l",(function(){return d})),r.d(t,"h",(function(){return b})),r.d(t,"v",(function(){return j})),r.d(t,"c",(function(){return O})),r.d(t,"m",(function(){return p})),r.d(t,"d",(function(){return h})),r.d(t,"n",(function(){return g})),r.d(t,"o",(function(){return f})),r.d(t,"q",(function(){return m})),r.d(t,"r",(function(){return _})),r.d(t,"u",(function(){return v})),r.d(t,"e",(function(){return S})),r.d(t,"a",(function(){return w})),r.d(t,"x",(function(){return E})),r.d(t,"s",(function(){return y})),r.d(t,"t",(function(){return x})),r.d(t,"p",(function(){return C})),r.d(t,"j",(function(){return N})),r.d(t,"b",(function(){return T})),r.d(t,"f",(function(){return R})),r.d(t,"g",(function(){return I})),r.d(t,"k",(function(){return D})),r.d(t,"w",(function(){return L}));var n=r(61),c=r(12),a=r.n(c),o=r(2),s=r(25),i=r(26),u=r.n(i),l=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"PRODUCTS_REQUESTED"}),t.prev=1,t.next=4,u()("http://localhost:5000/products/".concat(e));case 4:200===(n=t.sent).status&&(c=n.data.map((function(e){if(0===e.reviews.length)return Object(o.a)(Object(o.a)({},e),{},{rating:0});if(1===e.reviews.length)return console.log(e),Object(o.a)(Object(o.a)({},e),{},{rating:e.reviews[0].rating});var t=e.reviews.length,r=e.reviews.reduce((function(e,t){return e+t.rating}),0)/t;return console.log(r),console.log(r),Object(o.a)(Object(o.a)({},e),{},{rating:r})})),console.log(c),r({type:"PRODUCTS_SUCCESS",products:c})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"PRODUCTS_FAIL",error:t.t0.response});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"ALLPRODUCTS_STARTED"}),e.prev=1,e.next=4,u()("http://localhost:5000/products/all");case 4:200===(r=e.sent).status&&t({type:"ALLPRODUCTS_SUCCESS",products:r.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t({type:"ALLPRODUCTS_FAIL",error:e.t0.response||e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"PRODUCTS_REQUESTED"}),t.prev=1,t.next=4,u()("http://localhost:5000/products/product/".concat(e));case 4:200===(n=t.sent).status&&r({type:"PRODUCT_SUCCESS",product:n.data}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),r({type:"PRODUCTS_FAIL",error:t.t0.response||t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){var t=e.productId,r=Object(n.a)(e,["productId"]);return function(){var e=Object(s.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"REVIEW_SENT"}),e.prev=1,e.next=4,u()({method:"post",url:"http://localhost:5000/products/review/".concat(t),data:{data:r}});case 4:200===(c=e.sent).status&&n({type:"REVIEW_SUCCESS",product:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:"REVIEW_FAIL",error:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return{type:"CLEAR_PRODUCTS"}},p=function(e){return{type:"SEARCH_PRODUCTS",searchValue:e}},h=function(){return{type:"CLEAR_REVIEW_STATUS"}},g=function(e){return{type:"CATEGORY_CHOSEN",category:e}},f=function(e){return{type:"SHOW_DROP_DOWN",bool:e}},m=function(e){return{type:"SHOW_SIDE_MENU",bool:e}},_=function(e){return{type:"SHOW_SUB_CATEGORY",bool:e}},v=function(e){return{type:"SUB_CAT_SELECTED",subcat:e}},S=function(){return{type:"CLEAR_SELECTED_PRODUCTS"}},w=function(e){return{type:"ADD_TO_BASKET",itemInfo:e}},E=function(e,t){return{type:"UPDATE_BASKET",noPos:e,quantity:t}},y=function(e){return{type:"SORT_BY_BEST_REVIEWS",products:e.map((function(e){if(console.log(e.rating),0===e.reviews.length)return Object(o.a)(Object(o.a)({},e),{},{rating:0});if(1===e.reviews.length)return console.log(e),Object(o.a)(Object(o.a)({},e),{},{rating:e.rating});var t=e.reviews.length,r=e.reviews.reduce((function(e,t){return e+t.rating}),0);return Object(o.a)(Object(o.a)({},e),{},{rating:r/t})})).sort((function(e,t){return e.rating<t.rating?1:-1}))}},x=function(e,t){return{type:"FILTER_PRICE_RANGE",lower:e,higher:t}},C=function(){return{type:"FILTERED_IN_STOCK"}},N=function(e){return{type:"FILTERED_BRANDS",brands:e}},T=function(e){return l(),{type:"CHOSEN_BRAND",brand:e}},R=function(e){return{type:"DELETE_ITEM_FROM_BASKET",id:e}},I=function(e){return{type:"EMPTY_BASKET"}},D=function(e){return{type:"RESET_ALL_FILTERS",bool:e}},L=function(e){var t=e.price,r=e.higher;return console.log(t,r),{type:"UPDATE_PRICE_RANGE",price:t,higher:r}}},22:function(e,t,r){e.exports={landingpage:"LandingPage_landingpage__1iu_j",title2:"LandingPage_title2__1sZp1",mainimagemobile:"LandingPage_mainimagemobile__35TLt",mainimagedesktop:"LandingPage_mainimagedesktop__JYoUa",running:"LandingPage_running__3KYBq",catdetailsrunning:"LandingPage_catdetailsrunning__2wJsu",cycling:"LandingPage_cycling__1rmui",catdetailscycling:"LandingPage_catdetailscycling__1jP-c",swimming:"LandingPage_swimming___Du1A",catdetailsswimming:"LandingPage_catdetailsswimming__1iHId",outdoor:"LandingPage_outdoor__3gm-W",catdetailsoutdoor:"LandingPage_catdetailsoutdoor__uW9DF"}},30:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return b}));var n=r(12),c=r.n(n),a=r(25),o=r(26),s=r.n(o),i=function(e,t){return function(){var r=Object(a.a)(c.a.mark((function r(n){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(d()),r.prev=1,r.next=4,s()({method:"post",url:"http://localhost:5000/users/login",data:{email:e,password:t}});case 4:202===(a=r.sent).status&&(n({type:"LOGIN_SUCCESS",user:a.data}),j(a.data)),401===a.status&&n({type:"LOGIN_FAIL",error:a.data}),r.next=14;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),r.t0.request&&0===r.t0.request.status&&n({type:"LOGIN_FAIL",error:"Network error, please try again"}),r.t0.request&&401===r.t0.request.status&&n({type:"LOGIN_FAIL",error:"Unauthorised"});case 14:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},u=function(){return localStorage.removeItem("userInfo"),{type:"USER_LOGGED_OUT"}},l=function(e){var t=e.email,r=e.address,n=e.password,o=e.lastName,i=e.firstName;return function(){var e=Object(a.a)(c.a.mark((function e(a){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(d()),e.prev=1,e.next=4,s()({method:"post",url:"http://localhost:5000/users/register",data:{email:t,password:n,firstName:i,lastName:o,address:r,reviews:[]}});case 4:201===(u=e.sent).status&&(a({type:"LOGIN_SUCCESS",user:u.data}),j(u.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.request&&0===e.t0.request.status&&a({type:"LOGIN_FAIL",error:"Network error, please try again"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},d=function(){return{type:"LOGIN_STARTED"}},b=function(){var e=null,t=JSON.parse(localStorage.getItem("userInfo"));if(t){var r=(new Date).getTime(),n=Object.entries(t).filter((function(e){return"seconds"===e[0]}));return parseInt(n[0][1])+36e5<parseInt(r)?localStorage.removeItem("userInfo"):e=t,e}},j=function(e){localStorage.setItem("userInfo",JSON.stringify(e))}},4:function(e,t,r){e.exports={navbar:"NavBar_navbar__3L-WI",user:"NavBar_user__3iNNw",searchitem:"NavBar_searchitem__38Pze",logo:"NavBar_logo__2b9K_",search:"NavBar_search__27muG",results:"NavBar_results__2BT58",searchicon:"NavBar_searchicon__37RA9",cartdesktop:"NavBar_cartdesktop__--zPI",menu:"NavBar_menu__35aKG",cart:"NavBar_cart__3X5Br",store:"NavBar_store__1WRDm",links:"NavBar_links__VaUPB",categorylinks:"NavBar_categorylinks__25Tg4",sidemenu:"NavBar_sidemenu__ZDTA6",closebutton:"NavBar_closebutton__1kh64",sidecategories:"NavBar_sidecategories__eaHBo",sidesubcategories:"NavBar_sidesubcategories__2OaXd",categoryItem:"NavBar_categoryItem__2B6Yz",categoryItemMove:"NavBar_categoryItemMove__2rkby",dropdown:"NavBar_dropdown__HEr5k",categories:"NavBar_categories__hVmMN",subcategories:"NavBar_subcategories__7D0zJ",categoryImage:"NavBar_categoryImage__bQaQA"}},53:function(e,t,r){e.exports={shopbutton:"ShopButton_shopbutton__2O7W3"}},94:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),a=r(27),o=r.n(a),s=r(15),i=r(16),u=r(18),l=r(17),d=r(9),b=r(8),j=r(22),O=r.n(j),p=r(53),h=r.n(p),g=function(e){var t=e.url,r=e.name,c=e.width,a=e.height;return Object(n.jsx)("div",{className:h.a.shopbutton,style:{width:"".concat(c),height:"".concat(a)},children:Object(n.jsxs)(d.b,{to:"".concat(t),children:[r," "]})})},f=function(){return Object(n.jsxs)("div",{className:O.a.landingpage,children:[Object(n.jsxs)("header",{children:["THE UK'S ",Object(n.jsx)("span",{children:"\x7f NO.1 \x7f"})," ONLINE FITNESS STORE"]}),Object(n.jsx)("div",{className:O.a.mainimagemobile,children:Object(n.jsx)("img",{src:"".concat("/Webdev-DavidM.github.io/E-commerce-front-end","/images/cycling-desktop.jpg"),alt:"Man on a bike smiling"})}),Object(n.jsx)("div",{className:O.a.mainimagedesktop,children:Object(n.jsx)("img",{src:"".concat("/Webdev-DavidM.github.io/E-commerce-front-end","/images/cycling-desktop.jpg"),alt:"Woman on a bike riding"})}),Object(n.jsxs)("header",{className:O.a.title2,children:[Object(n.jsxs)("strong",{children:["DM Sports ",Object(n.jsx)("span",{children:" + \x7f"})]}),"NEXT DAY DELIVERY AND FREE RETURNS FOR ONLY \x7f"," ",Object(n.jsx)("strong",{children:"\xa39.99"}),Object(n.jsx)("div",{children:Object(n.jsx)(g,{url:"/run",name:"SHOP NOW",width:"8rem"})})]}),Object(n.jsxs)("div",{className:O.a.running,children:[Object(n.jsx)("img",{src:"".concat("/Webdev-DavidM.github.io/E-commerce-front-end","/images/running-montage.png"),alt:"Man running and red running jacket"}),Object(n.jsxs)("div",{className:O.a.catdetailsrunning,children:[" ",Object(n.jsx)("p",{children:"RUN"}),Object(n.jsx)(g,{url:"/run",name:"SHOP"})]})]}),Object(n.jsxs)("div",{className:O.a.cycling,children:[Object(n.jsx)("img",{src:"".concat("/Webdev-DavidM.github.io/E-commerce-front-end","/images/cycling-montage.png"),alt:"cyclist smiling and bike"}),Object(n.jsxs)("div",{className:O.a.catdetailscycling,children:[" ",Object(n.jsx)("p",{children:"CYCLE"}),Object(n.jsx)(g,{url:"/cycle",name:"SHOP"})]})]}),Object(n.jsxs)("div",{className:O.a.swimming,children:[Object(n.jsx)("img",{src:"".concat("/Webdev-DavidM.github.io/E-commerce-front-end","/images/swimming-montage.png"),alt:"woman swimming and a swim suit"}),Object(n.jsxs)("div",{className:O.a.catdetailsswimming,children:[" ",Object(n.jsx)("p",{children:"SWIM"}),Object(n.jsx)(g,{url:"/swim",name:"SHOP"})]})]})]})},m=r(37),_=r(108),v=r(11),S=r(4),w=r.n(S),E=function(){return Object(n.jsx)("div",{className:w.a.logo,children:Object(n.jsx)(d.c,{to:"/",children:Object(n.jsx)("img",{src:"".concat("/Webdev-DavidM.github.io/E-commerce-front-end","/images/Logo.png"),alt:"DM sports logo"})})})},y=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props,t=e.basketValue,r=e.basketNumber,c=t().Total,a=0!==r.length&&Object(n.jsxs)("span",{children:["\x7f",c,"\x7f\x7f(",r,")"]});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:w.a.cartdesktop,style:{width:"5rem",height:"2rem",color:"#2980b9"},children:Object(n.jsxs)(d.b,{to:"/shopping-basket",color:"red",children:[Object(n.jsx)("i",{className:"fas fa-shopping-cart",style:{width:"0.9rem",height:"0.9rem"},children:" "}),a]})}),Object(n.jsx)("div",{className:w.a.cart,style:{width:"1.5rem",height:"1.5rem"},children:Object(n.jsx)(d.b,{to:"/shopping-basket",children:Object(n.jsx)("i",{color:"#2980b9",className:"fas fa-shopping-cart",style:{width:"100%",height:"100%"}})})})]})}}]),r}(c.Component),x=Object(v.b)((function(e){return{basketNumber:e.products.basket.length,basketValue:function(){var t=0;return 0!==e.products.basket.length&&(t=e.products.basket.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}))),{Total:t}}}}))(y),C=r(10),N=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showResults:!1,input:""},e.componentDidMount=function(){e.props.getProducts()},e.userInput=function(t){e.setState((function(e){return{showResults:!0,input:t.target.value}})),t.target.value.length>1&&e.props.search(t.target.value),0===t.target.value.length&&(e.props.getProducts(),e.setState({showResults:!1})),e.state.input.length>t.target.value.length&&e.props.search(t.target.value)},e.selectedItem=function(t){e.setState({showResults:!1,input:""}),e.props.history.push("/product/".concat(t))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:w.a.search,children:[Object(n.jsx)("input",{disabled:!this.props.searchProducts,autoComplete:"off",value:this.state.input,onChange:function(t){return e.userInput(t)}}),Object(n.jsxs)("div",{className:w.a.searchicon,children:[Object(n.jsx)("i",{className:"fas fa-search "})," "]}),Object(n.jsx)(_.a,{in:this.state.showResults,timeout:500,classNames:"searchresultsdropdown",unmountOnExit:!0,children:Object(n.jsxs)("div",{className:w.a.results,children:[" ",this.props.product?0!==Object.keys(this.props.products)&&this.props.products.map((function(t,r){return Object(n.jsxs)("div",{className:w.a.searchitem,onClick:function(){return e.selectedItem(t._id)},children:[t.name,Object(n.jsx)("hr",{})]},r)})):null]})})]})})}}]),r}(c.Component),T=Object(b.g)(Object(v.b)((function(e){return{products:e.products.searchProducts}}),(function(e){return{getProducts:function(){return e(Object(C.l)())},search:function(t){return e(Object(C.m)(t))}}}))(N)),R=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).goToCategory=function(t){e.props.showDropDown(!1),e.props.history.push("".concat(e.props.chosenCategory,"/").concat(e.props.chosenSubCategory,"/").concat(t))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.showSubCat,c=t.subCatToShow,a=t.showSubCategory,o=t.showDropDown,s=this.props,i=s.categories,u=s.chosenCategory,l=s.chosenSubCategory,b=Object.keys(i[u]);return Object(n.jsxs)("div",{className:w.a.dropdown,onMouseEnter:function(){return e.props.mouseEnter()},onMouseLeave:function(){return o(!1)},children:[Object(n.jsx)("div",{className:w.a.categories,children:b.map((function(e){var t=l===e?w.a.categoryItemMove:"";return Object(n.jsxs)("div",{className:"".concat(w.a.categoryItem," ").concat(t," "),onMouseEnter:function(e){c(e.target.textContent),r(!0)},children:[e,Object(n.jsx)("i",{className:"fas fa-arrow-right ".concat(t)})]},e)}))}),Object(n.jsx)("div",{className:w.a.subcategories,children:a?i[u][l].map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)(d.b,{to:"/".concat(u,"/").concat(l,"/").concat(e),children:e})},t)})):null})]})}}]),r}(c.Component),I=Object(b.g)(Object(v.b)((function(e){return{categories:e.products.categories,chosenCategory:e.products.chosenCategory,chosenSubCategory:e.products.chosenSubCategory,showSubCategory:e.products.showSubCategory}}),(function(e){return{showSubCat:function(t){return e(Object(C.r)(t))},subCatToShow:function(t){return e(Object(C.u)(t))},showDropDown:function(t){return e(Object(C.o)(t))}}}))(R)),D=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).goToCategory=function(t){e.props.showSideMenu(!1),e.props.history.push("".concat(e.props.chosenCategory,"/").concat(e.props.chosenSubCategory,"/").concat(t))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.showSubCat,c=t.subCatToShow,a=t.showSideMenu,o=this.props,s=o.categories,i=o.chosenCategory,u=o.chosenSubCategory,l=o.showSubCategory,d=Object.keys(s[i]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:w.a.sidemenu,onMouseLeave:function(){return a(!1)},children:[Object(n.jsx)("div",{className:w.a.maincats}),Object(n.jsx)("div",{className:w.a.sidecategories,children:d.map((function(e,t){var a=u===e?w.a.categoryItemMove:"";return Object(n.jsxs)("div",{className:"".concat(w.a.categoryItem," ").concat(a," "),onClick:function(e){c(e.target.textContent),r(!0)},children:[e,Object(n.jsx)("i",{className:"fas fa-arrow-right ".concat(a)})]},t)}))}),Object(n.jsx)("div",{className:w.a.sidesubcategories,children:l?s[i][u].map((function(t){return Object(n.jsx)("div",{onClick:function(){return e.goToCategory(t)},children:t},t)})):null}),Object(n.jsx)("div",{className:w.a.closebutton,onClick:function(){return a(!1)},style:{width:"1.6rem",height:"1.6rem"},children:Object(n.jsx)("i",{className:"fas fa-window-close",style:{width:"inherit",height:"inherit",backgroundColor:"white"}})})]})})}}]),r}(c.Component),L=Object(b.g)(Object(v.b)((function(e){return{categories:e.products.categories,chosenCategory:e.products.chosenCategory,chosenSubCategory:e.products.chosenSubCategory,showSubCategory:e.products.showSubCategory}}),(function(e){return{showSubCat:function(t){return e(Object(C.r)(t))},subCatToShow:function(t){return e(Object(C.u)(t))},showSideMenu:function(t){return e(Object(C.q)(t))}}}))(D)),k=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.showDrop,c=t.showSide,a=t.showSubCat,o=t.signedIn,s=this.props,i=s.chosenCategory,u=s.showDropDown,l=s.showSideMenu,b=s.clearProds,j=s.getNewProducts;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:w.a.navbar,children:[Object(n.jsx)(E,{size:"2rem"}),Object(n.jsx)("div",{className:w.a.user,onMouseEnter:function(){return l(!0)},style:{width:"1.3rem",height:"1.3rem",color:"#ecf0f1"}}),Object(n.jsx)(T,{}),Object(n.jsx)("div",{className:w.a.user,onClick:function(){o?e.props.history.push("/account"):e.props.history.push("/sign-in")},style:{width:"1.3rem",height:"1.3rem",color:"#ecf0f1",marginLeft:"auto"},children:Object(n.jsx)("i",{className:"fas fa-user",style:{width:"100%",height:"100%"}})}),Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:w.a.links,children:o?Object(n.jsx)(d.b,{to:"/account",children:"Your Account"}):Object(n.jsx)(d.b,{to:"/sign-in",children:"Sign in"})})]})}),Object(n.jsxs)("div",{className:w.a.categorylinks,children:[Object(n.jsx)(d.b,{onClick:function(){a(!1),u(!0),l(!0),i("cycle"),b(),j("cycle")},onMouseLeave:function(){return e.props.mouseEnter&&u(!1)},to:"/cycle",children:"CYCLE"}),Object(n.jsx)(d.b,{onClick:function(e){a(!1),i("run"),u(!0),l(!0),b(),j("run")},onMouseLeave:function(){return e.props.mouseEnter&&u(!1)},to:"/run",children:"RUN"}),Object(n.jsx)(d.b,{onClick:function(){a(!1),u(!0),l(!0),i("swim"),b(),j("swim")},onMouseLeave:function(){return e.props.mouseEnter&&u(!1)},to:"/swim",children:"SWIM"})]}),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)(m.a,{query:"(min-width: 768px)",render:function(){return Object(n.jsx)(_.a,{in:r,timeout:300,classNames:"menufade",unmountOnExit:!0,children:Object(n.jsx)(I,{mouseEnter:function(){return u(!0)},mouseLeave:function(){return u(!1)},closeMain:e.closeDropMenu})})}})}),Object(n.jsx)(m.a,{query:"(max-width: 768px)",render:function(){return Object(n.jsx)(_.a,{in:c,timeout:300,classNames:"sidemenu",unmountOnExit:!0,children:Object(n.jsx)(L,{})})}})]})}}]),r}(c.Component),P=Object(b.g)(Object(v.b)((function(e){return{showSide:e.products.showSideMenu,showDrop:e.products.showDropDownMenu,signedIn:e.user.signedIn}}),(function(e){return{showSubCat:function(t){return e(Object(C.r)(t))},chosenCategory:function(t){return e(Object(C.n)(t))},showDropDown:function(t){return e(Object(C.o)(t))},showSideMenu:function(t){return e(Object(C.q)(t))},clearProds:function(){return e(C.c)},getNewProducts:function(t){return e(Object(C.i)(t))}}}))(k)),A=r(107),U=(r(94),r(30)),B=Object(c.lazy)((function(){return r.e(9).then(r.bind(null,140))})),M=Object(c.lazy)((function(){return r.e(15).then(r.bind(null,141))})),W=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(14)]).then(r.bind(null,142))})),F=Object(c.lazy)((function(){return r.e(16).then(r.bind(null,143))})),H=Object(c.lazy)((function(){return r.e(17).then(r.bind(null,144))})),G=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,151))})),V=Object(c.lazy)((function(){return r.e(8).then(r.bind(null,152))})),z=Object(c.lazy)((function(){return r.e(7).then(r.bind(null,153))})),Y=Object(c.lazy)((function(){return r.e(11).then(r.bind(null,145))})),q=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,150))})),K=Object(c.lazy)((function(){return r.e(10).then(r.bind(null,146))})),J=Object(c.lazy)((function(){return r.e(13).then(r.bind(null,147))})),Q=Object(c.lazy)((function(){return r.e(12).then(r.bind(null,148))})),X=Object(c.lazy)((function(){return r.e(6).then(r.bind(null,149))})),Z=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={showArrowToTop:!1},e.componentDidMount=function(){window.addEventListener("scroll",(function(){window.scrollY>122&&e.setState({showArrowToTop:!0}),window.innerHeight-122<window.innerHeight-window.scrollY&&e.setState({showArrowToTop:!1})}));var t=Object(U.a)();t&&e.props.addAuthenticateduserToRedux(t)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props.adminUser;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"App",children:[this.props.loadingUser||this.props.loadingProducts||this.props.loadingOrders?Object(n.jsx)("div",{className:"generic-loading-container",children:Object(n.jsx)(A.a,{style:{color:"#f1c40f",size:"4rem"}})}):null,Object(n.jsxs)(d.a,{children:[Object(n.jsx)(P,{}),Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)("div",{className:"spinner-container",children:Object(n.jsx)(A.a,{style:{color:"#f1c40f",size:"4rem"}})}),children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/",component:f}),Object(n.jsx)(b.b,{exact:!0,path:"/sign-in",component:F}),Object(n.jsx)(b.b,{exact:!0,path:"/sign-up/:email",component:H}),Object(n.jsx)(b.b,{exact:!0,path:"/run",component:z}),Object(n.jsx)(b.b,{exact:!0,path:"/cycle",component:z}),Object(n.jsx)(b.b,{exact:!0,path:"/swim",component:z}),Object(n.jsx)(b.b,{exact:!0,path:"/account",render:function(){return Object(U.a)()?Object(n.jsx)(B,{}):Object(n.jsx)(b.a,{to:"/"})}}),Object(n.jsx)(b.b,{exact:!0,path:"/admin",children:e?Object(n.jsx)(M,{}):Object(n.jsx)(b.a,{to:"/"})}),Object(n.jsx)(b.b,{exact:!0,path:"/check-out",render:function(){return Object(U.a)()?Object(n.jsx)(X,{}):Object(n.jsx)(b.a,{to:"/"})}}),Object(n.jsx)(b.b,{exact:!0,path:"/admin/create-product",component:Q}),Object(n.jsx)(b.b,{exact:!0,path:"/admin/product/:id",component:J}),Object(n.jsx)(b.b,{exact:!0,path:"/admin-orders",component:W}),Object(n.jsx)(b.b,{exact:!0,path:"/admin/product/id",component:J}),Object(n.jsx)(b.b,{exact:!0,path:"/order/:id",render:function(){return Object(U.a)()?Object(n.jsx)(K,{}):Object(n.jsx)(b.a,{to:"/"})}}),Object(n.jsx)(b.b,{exact:!0,path:"/product/:id",component:G}),Object(n.jsx)(b.b,{exact:!0,path:"/shopping-basket",component:V}),Object(n.jsx)(b.b,{exact:!0,path:"/:category/:type/:subcat",component:q}),Object(n.jsx)(b.b,{component:Y})]})})]})]}),Object(n.jsx)(_.a,{in:this.state.showArrowToTop,onClick:function(){return window.scrollTo(0,0)},timeout:500,classNames:"menuarrow",unmountOnExit:!0,children:Object(n.jsx)("div",{className:"menuarrow",children:Object(n.jsx)("i",{className:"fas fa-arrow-circle-up"})})})]})}}]),r}(c.Component),$=Object(v.b)((function(e){return{loadingUser:e.user.loading,loadingProducts:e.products.loading,loadingOrders:e.orders.loading,adminUser:e.user.user.admin,userSignedIn:e.user.signedIn}}),(function(e){return{addAuthenticateduserToRedux:function(t){return e({type:"LOGIN_SUCCESS",user:t})}}}))(Z),ee=r(29),te=r(2),re={user:{firstName:null,lastName:null,id:null,token:"",isAdmin:null},error:null,loading:!1,signedIn:!1};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_STARTED":return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case"USER_LOGGED_OUT":return Object(te.a)(Object(te.a)({},e),{},{signedIn:!1});case"LOGIN_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{user:t.user,loading:!1,signedIn:!0,error:null});case"LOGIN_FAIL":return console.log(t),Object(te.a)(Object(te.a)({},e),{},{error:t.error,loading:!1});default:return e}},ce=r(34),ae={loading:!1,products:[],showDropDownMenu:!1,showSideMenu:!1,chosenCategory:"cycle",showSubCategory:!1,chosenSubCategory:"bikes",selectedProduct:[],basket:[],basketValue:0,filteredBrands:[],reviewError:null,reviewSuccess:null,searchProducts:null,serverError:null,globalFilterReset:!1,filterStock:!1,filterBrand:!1,filterPrice:!1,filterLowerPrice:0,filterHigherPrice:0,filterReview:!1,categories:{cycle:{bikes:["Mountain bikes","Hybrid bikes","Road bikes"],helmets:["Helmets","Protection"]},run:{clothing:["Tops","Legwear","Jackets"],footwear:["Running Shoes","Trail Shoes"]},swim:{shorts:["Swimming shorts","Swimming briefs"],swimsuits:["One piece","Two piece"]},outdoors:{clothing:["Tops","Legwear"],footWear:["Trail shoes","Boots"]}}};var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_PRODUCTS":return Object(te.a)(Object(te.a)({},e),{},{products:[]});case"ALLPRODUCTS_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{searchProducts:t.products});case"PRODUCTS_REQUESTED":return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case"PRODUCTS_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{products:t.products,loading:!1});case"PRODUCT_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{selectedProduct:t.product,loading:!1});case"SEARCH_PRODUCTS":var r=e.searchProducts.filter((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())}));return Object(te.a)(Object(te.a)({},e),{},{searchProducts:r});case"PRODUCTS_FAIL":case"ALLPRODUCTS_FAIL":return Object(te.a)(Object(te.a)({},e),{},{serverError:t.error,loading:!1});case"CATEGORY_CHOSEN":return Object(te.a)(Object(te.a)({},e),{},{chosenCategory:t.category});case"SHOW_DROP_DOWN":return Object(te.a)(Object(te.a)({},e),{},{showDropDownMenu:t.bool});case"SHOW_SIDE_MENU":return Object(te.a)(Object(te.a)({},e),{},{showSideMenu:t.bool});case"SHOW_SUB_CATEGORY":return Object(te.a)(Object(te.a)({},e),{},{showSubCategory:t.bool});case"CHOSEN_PRODUCT":var n=e.products.filter((function(e){return e._id===t.id}));return Object(te.a)(Object(te.a)({},e),{},{selectedProduct:n[0]});case"SUB_CAT_SELECTED":return Object(te.a)(Object(te.a)({},e),{},{chosenSubCategory:t.subcat});case"CLEAR_SELECTED_PRODUCTS":return Object(te.a)(Object(te.a)({},e),{},{selectedProduct:[]});case"FILTERED_BRANDS":return Object(te.a)(Object(te.a)({},e),{},{filteredBrands:t.brands});case"CHOSEN_BRAND":console.log(t);var c=Object(ce.a)(e.products),a=c.filter((function(e){return e.brand===t.brand}));return Object(te.a)(Object(te.a)({},e),{},{products:a,filterBrand:t.brand});case"RESET_ALL_FILTERS":return console.log(t.bool),t.bool?Object(te.a)(Object(te.a)({},e),{},{globalFilterReset:t.bool,filterStock:!1,filterBrand:!1,filterPrice:!1,filterReview:!1,filterHigherPrice:0,filterLowerPrice:0}):Object(te.a)(Object(te.a)({},e),{},{globalFilterReset:t.bool});case"FILTERED_IN_STOCK":var o=e.products.filter((function(e){return 0!==e.stock}));return console.log(o),Object(te.a)(Object(te.a)({},e),{},{products:o,filterStock:!0});case"SORT_BY_BEST_REVIEWS":return Object(te.a)(Object(te.a)({},e),{},{products:t.products,filterReview:!0});case"CLEAR_REVIEW_FILTER":return Object(te.a)(Object(te.a)({},e),{},{products:t.products});case"UPDATE_PRICE_RANGE":return!0===t.higher?Object(te.a)(Object(te.a)({},e),{},{filterHigherPrice:t.price}):Object(te.a)(Object(te.a)({},e),{},{filterLowerPrice:t.price});case"FILTER_PRICE_RANGE":var s=e.products.filter((function(e){return e.price>=t.lower&e.price<=t.higher}));return Object(te.a)(Object(te.a)({},e),{},{products:s,filterPrice:!0});case"UPDATE_BASKET":var i=Object(ce.a)(e.basket);return i[t.noPos].quantity=t.quantity,Object(te.a)(Object(te.a)({},e),{},{basket:i});case"EMPTY_BASKET":return Object(te.a)(Object(te.a)({},e),{},{basket:[]});case"DELETE_ITEM_FROM_BASKET":var u=Object(ce.a)(e.basket),l=u.findIndex((function(e){return e.id===t.id}));return u.splice(l,1),Object(te.a)(Object(te.a)({},e),{},{basket:u});case"ADD_TO_BASKET":var d=Object(ce.a)(e.basket);d.push(t.itemInfo);var b=0===e.basket.length?t.itemInfo.price:t.itemInfo.price+e.basket.reduce((function(e,t){return e+t.price*t.quantity}),t.itemInfo.price);return Object(te.a)(Object(te.a)({},e),{},{basket:d,basketValue:b});case"CLEAR_REVIEW_STATUS":return Object(te.a)(Object(te.a)({},e),{},{reviewError:null,reviewSuccess:null});case"REVIEW_SENT":return Object(te.a)(Object(te.a)({},e),{},{loading:!0,reviewError:null});case"REVIEW_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,reviewSuccess:!0});case"REVIEW_FAIL":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,reviewError:t.error,reviewSuccess:!1});default:return e}},se={loading:!1,orders:[],order:null,showOrdersModal:!1,errors:null};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER_SENT":return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case"ORDER_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,showOrdersModal:!0,errors:null});case"ORDER_LIST_RECEIVED":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,orders:t.orders});case"ORDER_FAIL":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,showOrdersModal:!0,errors:"Network error, please try again"});case"INDIVDUAL_ORDER_SUCCESS":return Object(te.a)(Object(te.a)({},e),{},{loading:!1,order:t.order[0]});case"CLOSE_MODAL":return Object(te.a)(Object(te.a)({},e),{},{showOrdersModal:!1,error:null});default:return e}},ue=r(59),le=r(60),de=Object(ee.combineReducers)({user:ne,products:oe,orders:ie}),be=Object(ee.createStore)(de,Object(ue.composeWithDevTools)(Object(ee.applyMiddleware)(le.a)));o.a.render(Object(n.jsx)(v.a,{store:be,children:Object(n.jsx)($,{})}),document.getElementById("root"))}},[[95,2,3]]]);
//# sourceMappingURL=main.111ec9c0.chunk.js.map