(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[4],{129:function(e,t,r){e.exports={productitems:"Products_productitems__2zjOc",products:"Products_products__1k3j8",gobackbtn:"Products_gobackbtn__M352D",route:"Products_route__3mtzn",filtericon:"Products_filtericon__ewLCt",type:"Products_type__3nDaI",typeandfilter:"Products_typeandfilter__3gBPO","mobilefilter-enter":"Products_mobilefilter-enter__1x--w","mobilefilter-enter-active":"Products_mobilefilter-enter-active__1VMV8","mobilefilter-exit":"Products_mobilefilter-exit__1ksIR","mobilefilter-exit-active":"Products_mobilefilter-exit-active__njJzT"}},130:function(e,t,r){e.exports={mobilefilter:"MobileProductFilterMenu_mobilefilter__3I82k",optionscontainer:"MobileProductFilterMenu_optionscontainer__3NiwB",importedfilter:"MobileProductFilterMenu_importedfilter__vKjya",filtercat:"MobileProductFilterMenu_filtercat__24Smp",filterdesc:"MobileProductFilterMenu_filterdesc__3Hfh-",filterbtn:"MobileProductFilterMenu_filterbtn__21voD"}},131:function(e,t,r){e.exports={dropdown:"CustomerReview_dropdown__LW4Cv",dropbtn:"CustomerReview_dropbtn__1ayQI",dropbtnclicked:"CustomerReview_dropbtnclicked__3aXfr",dropdowncontent:"CustomerReview_dropdowncontent__35YTc",dropdownclicked:"CustomerReview_dropdownclicked__b1nku",inputbtn:"CustomerReview_inputbtn__KjSK6",resetbest:"CustomerReview_resetbest__3vcRx"}},132:function(e,t,r){e.exports={dropdown:"PriceRangeFilter_dropdown__1L58S",dropbtn:"PriceRangeFilter_dropbtn__1qCFU",dropbtnclicked:"PriceRangeFilter_dropbtnclicked__1l34_",dropdowncontent:"PriceRangeFilter_dropdowncontent__1xbgQ",dropdownclicked:"PriceRangeFilter_dropdownclicked__1SN34",inputvalues:"PriceRangeFilter_inputvalues__p-zo0",applyprice:"PriceRangeFilter_applyprice__lHo_8",resetprice:"PriceRangeFilter_resetprice__3MI0K"}},133:function(e,t,r){e.exports={dropdown:"StockFilter_dropdown__ljWiO",dropbtn:"StockFilter_dropbtn__3o5Mf",dropbtnclicked:"StockFilter_dropbtnclicked__fSW2P",dropdowncontent:"StockFilter_dropdowncontent__1KhzK",dropdownclicked:"StockFilter_dropdownclicked__39eV1",inputbtn:"StockFilter_inputbtn__31GQH",clearselection:"StockFilter_clearselection__1Dy9K"}},134:function(e,t,r){e.exports={dropdown:"BrandFilter_dropdown__qcnUb",dropbtn:"BrandFilter_dropbtn__1G3mo",dropbtnclicked:"BrandFilter_dropbtnclicked__1WXs2",dropdowncontent:"BrandFilter_dropdowncontent__34Fcz",dropdownclicked:"BrandFilter_dropdownclicked__1ybN0",inputbtn:"BrandFilter_inputbtn__2BHRJ",clearbrand:"BrandFilter_clearbrand__1rkNL"}},135:function(e,t,r){e.exports={productitem:"ProductItem_productitem__rg47f",name:"ProductItem_name__2BwgC",price:"ProductItem_price__2ZcgQ",outofstock:"ProductItem_outofstock__1puPD",stars:"ProductItem_stars__1AY7b",reviews:"ProductItem_reviews__3vno5",outofstockdiv:"ProductItem_outofstockdiv__3hD8K",productdetails:"ProductItem_productdetails__30ma2"}},136:function(e,t,r){e.exports={filters:"ProductFilters_filters__1GgBI"}},150:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(15),o=r(16),s=r(18),i=r(17),a=r(0),l=r(10),u=r(37),d=r(11),p=r(108),b=r(129),j=r.n(b),f=r(130),h=r.n(f),m=r(109),_=r(110),O=r(8),x=r(131),v=r.n(x),g=r(9),w=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={menu:!1,categories:["Best Customer reviews"],selectedDropDown:""},e.dropdownMenu=function(){e.setState((function(e){return{menu:!e.menu}}))},e.reset=function(){e.setState({selectedDropDown:!1}),e.props.getProducts(e.props.match.params.category),e.props.globalReset(!0)},e.componentDidMount=function(){e.props.mobile&&e.setState({menu:!0})},e.selected=function(){e.props.globalReset(!1),e.props.bestReviews(e.props.products)},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.state.menu?v.a.dropdownclicked:null,r=this.props.reset||this.state.menu?v.a.dropbtnclicked:null,c=this.state.categories.map((function(t,r){return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:v.a.inputbtn,name:t,style:!e.props.reset&&e.props.selected?{backgroundColor:"#f1c40f"}:null,onClick:function(){return e.selected()}}),Object(n.jsxs)("span",{children:["\xa0\xa0\xa0",t]}),Object(n.jsx)("br",{})]},r)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:v.a.dropdown,children:[Object(n.jsxs)("div",{className:"".concat(v.a.dropbtn," ").concat(r),onClick:function(){e.dropdownMenu()},children:[Object(n.jsx)("span",{children:"Reviews \x7f \x7f \x7f \x7f"}),this.state.menu?Object(n.jsx)(m.a,{icon:_.b}):Object(n.jsx)(m.a,{icon:_.a})]}),Object(n.jsxs)("div",{className:"".concat(v.a.dropdowncontent," ").concat(t),children:[c,Object(n.jsxs)("button",{disabled:!this.props.selected||this.props.reset,onClick:function(){return e.reset()},className:v.a.resetbest,children:[" ","Reset all filters"]})]})]})})}}]),r}(a.Component),k=Object(O.g)(Object(d.b)((function(e){return{products:e.products.products,reset:e.products.globalFilterReset,selected:e.products.filterReview}}),(function(e){return{bestReviews:function(t){return e(Object(g.s)(t))},getProducts:function(t){return e(Object(g.i)(t))},globalReset:function(t){return e(Object(g.k)(t))}}}))(w)),P=r(132),y=r.n(P),F=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={menu:!1},e.dropdownMenu=function(){e.setState((function(e){return{menu:!e.menu}}))},e.inputLowerPriceRange=function(t){var r=parseInt(t);Number.isInteger(r)&&e.props.updateFilter({price:r,higher:!1})},e.inputHigherPriceRange=function(t){var r=parseInt(t);Number.isInteger(r)&&e.props.updateFilter({price:r,higher:!0})},e.submitValues=function(){var t=e.props.submitRange;0!==e.props.lowerPrice&&0!==e.props.higherPrice&&(t(e.props.lowerPrice,e.props.higherPrice),e.props.globalReset(!1))},e.resetValues=function(){var t=e.props.match.params.category;e.props.updateFilter({price:0,higher:!0}),e.props.updateFilter({price:0,higher:!1}),e.props.resetProducts(t),e.props.globalReset(!0)},e.componentDidMount=function(){e.props.mobile&&e.setState({menu:!0})},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.state.menu?y.a.dropdownclicked:null,r=this.props.reset||this.state.menu?y.a.dropbtnclicked:null;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:y.a.dropdown,children:[Object(n.jsxs)("div",{className:"".concat(y.a.dropbtn," ").concat(r),onClick:function(){e.dropdownMenu()},children:["Price Range \x7f \x7f \x7f \x7f",this.state.menu?Object(n.jsx)(m.a,{icon:_.b}):Object(n.jsx)(m.a,{icon:_.a})]}),Object(n.jsxs)("div",{className:"".concat(y.a.dropdowncontent," ").concat(t),children:[Object(n.jsx)("span",{children:"From"}),Object(n.jsxs)("div",{className:y.a.inputvalues,children:[Object(n.jsx)("span",{children:"\xa3"}),Object(n.jsx)("input",{type:"text",value:this.props.lowerPrice,onChange:function(t){return e.inputLowerPriceRange(t.target.value)}})]}),Object(n.jsx)("span",{children:"To"}),Object(n.jsxs)("div",{className:y.a.inputvalues,children:[Object(n.jsx)("span",{children:"\xa3"}),Object(n.jsx)("input",{onFocus:function(){return e.setState({higherPriceRange:""})},type:"text",value:this.props.higherPrice,onChange:function(t){return e.inputHigherPriceRange(t.target.value)}})]}),Object(n.jsx)("button",{onClick:function(){return e.submitValues()},className:y.a.applyprice,children:"Apply"}),Object(n.jsxs)("button",{disabled:0===this.props.higherPrice||0===this.props.lowerPrice||this.props.reset||!this.props.selected,onClick:function(){return e.resetValues()},className:y.a.resetprice,children:[" ","Reset all filters"]})]})]})})}}]),r}(a.Component),R=Object(O.g)(Object(d.b)((function(e){return{brands:e.products.filteredBrands,products:e.products.products,reset:e.products.globalFilterReset,selected:e.products.filterPrice,lowerPrice:e.products.filterLowerPrice,higherPrice:e.products.filterHigherPrice}}),(function(e){return{submitRange:function(t,r){return e(Object(g.t)(t,r))},resetProducts:function(t){return e(Object(g.i)(t))},globalReset:function(t){return e(Object(g.k)(t))},updateFilter:function(t){return e(Object(g.w)(t))}}}))(F)),N=r(133),C=r.n(N),S=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={menu:!1},e.dropdownMenu=function(){e.setState((function(e){return{menu:!e.menu}}))},e.reset=function(){(0,e.props.resetProducts)(e.props.match.params.category),e.props.globalReset(!0)},e.returnOnlyInStock=function(){(0,e.props.inStock)(),e.props.globalReset(!1)},e.componentDidMount=function(){e.props.mobile&&e.setState({menu:!0})},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.state.menu?C.a.dropdownclicked:null,r=this.props.reset||this.state.menu?C.a.dropbtnclicked:null,c=Object(n.jsx)("button",{className:C.a.inputbtn,style:!this.props.reset&&this.props.selected?{backgroundColor:"#f1c40f"}:null,onClick:function(){return e.returnOnlyInStock()}});return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:C.a.dropdown,children:[Object(n.jsxs)("div",{className:"".concat(C.a.dropbtn," ").concat(r),onClick:function(){e.dropdownMenu()},children:["Stock \x7f \x7f \x7f \x7f",this.state.menu?Object(n.jsx)(m.a,{icon:_.b}):Object(n.jsx)(m.a,{icon:_.a})]}),Object(n.jsx)("div",{className:"".concat(C.a.dropdowncontent," ").concat(t),children:Object(n.jsxs)("div",{children:[c,Object(n.jsx)("span",{children:"\xa0\xa0\xa0In stock"}),Object(n.jsx)("button",{disabled:!this.props.selected||this.props.reset,className:C.a.clearselection,onClick:function(){return e.reset()},children:"Reset all filters"}),Object(n.jsx)("br",{})]})})]})})}}]),r}(a.Component),M=Object(O.g)(Object(d.b)((function(e){return{brands:e.products.filteredBrands,products:e.products.products,reset:e.products.globalFilterReset,selected:e.products.filterStock}}),(function(e){return{inStock:function(){return e(Object(g.p)())},resetProducts:function(t){return e(Object(g.i)(t))},globalReset:function(t){return e(Object(g.k)(t))}}}))(S)),D=r(134),B=r.n(D),I=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={menu:!1},e.dropdownMenu=function(){e.setState((function(e){return{menu:!e.menu}}))},e.dropdownSelected=function(t){var r=e.props.brandToFilter;e.setState((function(e){return{selectedDropDown:t}})),e.props.globalReset(!1),r(t)},e.reset=function(){e.setState((function(e){return{selectedDropDown:""}}));var t=e.props.match.params.category,r=e.props,n=r.resetProducts,c=r.globalReset;n(t),c(!0)},e.componentDidMount=function(){e.props.mobile&&e.setState({menu:!0})},e}return Object(o.a)(r,[{key:"render",value:function(){var e,t=this,r=this.state.menu?B.a.dropdownclicked:null,c=this.props.reset||this.state.menu?B.a.dropbtnclicked:null,o=this.props.brands;return 0!==this.props.brands.length&&(e=o.map((function(e,r){return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{disabled:t.state.filterBrand,className:B.a.inputbtn,name:e,style:t.props.selected!==e||t.props.reset?null:{backgroundColor:"#f1c40f"},onClick:function(){return t.dropdownSelected(e)}}),Object(n.jsxs)("span",{children:["\xa0\xa0\xa0",e]}),Object(n.jsx)("br",{})]},r)}))),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:B.a.dropdown,children:[Object(n.jsxs)("div",{className:"".concat(B.a.dropbtn," ").concat(c),onClick:function(){t.dropdownMenu()},children:[Object(n.jsx)("span",{children:"Brands \x7f \x7f \x7f \x7f"}),this.state.menu?Object(n.jsx)(m.a,{icon:_.b}):Object(n.jsx)(m.a,{icon:_.a})]}),Object(n.jsxs)("div",{className:"".concat(B.a.dropdowncontent," ").concat(r),children:[e,Object(n.jsxs)("button",{disabled:!this.props.selected||this.props.reset,onClick:function(){return t.reset()},className:B.a.clearbrand,children:[" ","Reset all filters"]})]})]})})}}]),r}(a.Component),A=Object(O.g)(Object(d.b)((function(e){return{brands:e.products.filteredBrands,products:e.products.products,reset:e.products.globalFilterReset,selected:e.products.filterBrand}}),(function(e){return{brandToFilter:function(t){return e(Object(g.b)(t))},resetProducts:function(t){return e(Object(g.i)(t))},globalReset:function(t){return e(Object(g.k)(t))}}}))(I)),K=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={chosenFilter:"",filters:["Best selling","Price range","Stock","Brand"]},e.componentDidMount=function(){},e}return Object(o.a)(r,[{key:"render",value:function(){var e,t=this;switch(this.state.chosenFilter){case"Best selling":e=Object(n.jsx)(k,{mobile:!0,showDropDown:!0});break;case"Price range":e=Object(n.jsx)(R,{mobile:!0,showDropDown:!0});break;case"Stock":e=Object(n.jsx)(M,{mobile:!0,showDropDown:!0});break;case"Brand":e=Object(n.jsx)(A,{mobile:!0,showDropDown:!0});break;default:e=null}var r=this.state.filters.map((function(e,r){return Object(n.jsxs)("div",{className:h.a.filtercat,children:[Object(n.jsx)("button",{onClick:function(){return t.setState({chosenFilter:e})},className:h.a.filterbtn,style:t.state.chosenFilter===e?{backgroundColor:"#f1c40f"}:null}),Object(n.jsx)("span",{className:h.a.filterdesc,children:e})]},r)}));return Object(n.jsx)("div",{className:h.a.mobilefilter,children:Object(n.jsx)("div",{className:h.a.optionscontainer,children:""===this.state.chosenFilter?r:Object(n.jsx)("div",{className:h.a.importedfilter,children:e})})})}}]),r}(a.Component),H=r(135),L=r.n(H),V=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={stars:[1,2,3,4,5]},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props.details,t=e.images,r=e._id,c=e.name,o=e.price,s=e.stock,i=e.rating,a=t[0];return Object(n.jsxs)("div",{className:L.a.productitem,children:[Object(n.jsx)("div",{children:Object(n.jsxs)(l.b,{to:"/product/".concat(r),children:[" ",Object(n.jsx)("img",{src:"https://my-ecommerce-site-fitness.herokuapp.com/".concat(a),alt:""})]})}),Object(n.jsx)("div",{className:L.a.productdetails,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(l.b,{to:"/product/".concat(r),style:{textDecoration:"none"},children:Object(n.jsx)("p",{className:L.a.name,children:c})}),Object(n.jsxs)("p",{className:L.a.price,children:["\xa3",o]}),Object(n.jsx)("div",{className:L.a.stars,children:c&&this.state.stars.map((function(e,t){var r=e<=i?"#f1c40f":"#2c3e50";return Object(n.jsx)("span",{style:{color:"".concat(r)},children:Object(n.jsx)(m.a,{icon:_.d})},"productItem".concat(t))}))}),0===s&&Object(n.jsx)("h2",{className:L.a.outofstock,children:"Sorry out of stock"})]})})]})}}]),r}(a.Component),z=r(136),T=r.n(z),U=function(){return Object(n.jsxs)("div",{className:T.a.filters,children:[Object(n.jsx)(k,{}),Object(n.jsx)(R,{}),Object(n.jsx)(M,{}),Object(n.jsx)(A,{})]})},q=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={showFilterMenu:!1},e.componentDidMount=function(){var t=e.props,r=t.getUserProducts,n=t.clearSelected,c=e.props.match.params.category;n(),r(c)},e.componentDidUpdate=function(){var t=e.props.filterBrands,r=e.props.match.params.subcat;t(e.props.products.filter((function(e){return e.subcategory===r})).reduce((function(e,t){return!1===e.includes(t.brand)&&e.push(t.brand),e}),[]))},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.props.match.params,r=t.subcat,c=t.type,o=t.category,s=this.props.products,i=s.filter((function(e){return e.subcategory===r}));return i=i.map((function(e,t){return Object(n.jsx)(V,{details:e},t)})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:j.a.products,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:j.a.gobackbtn,onClick:function(){return e.props.history.goBack()},children:"Go back"}),Object(n.jsxs)("p",{className:j.a.route,children:["You are here: ",Object(n.jsx)(l.b,{to:"/".concat(o),children:o}),": ",c," ",": ",r]})]}),Object(n.jsx)(u.a,{query:"(max-width: 768px)",render:function(){return Object(n.jsx)(p.a,{in:e.state.showFilterMenu,timeout:300,classNames:"mobilefilter",unmountOnExit:!0,children:Object(n.jsx)(K,{})})}})]}),Object(n.jsx)(u.a,{query:"(min-width: 768px)",render:function(){return Object(n.jsx)(U,{products:s})}}),Object(n.jsx)("div",{className:j.a.productitems,children:i})]})}}]),r}(a.Component);t.default=Object(d.b)((function(e){return{products:e.products.products}}),(function(e){return{getUserProducts:function(t){return e(Object(g.i)(t))},filterBrands:function(t){return e(Object(g.j)(t))},clearSelected:function(){return e(Object(g.e)())}}}))(q)}}]);
//# sourceMappingURL=4.93d51536.chunk.js.map