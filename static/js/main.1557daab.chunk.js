(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(15),i=n.n(o),s=n(13),a=function(t,e){if(void 0===t)return{books:[],loading:!0,error:null};switch(e.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:e.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:e.payload};default:return t.bookList}},d=n(11),j=n(12),l=function(t,e,n){var r=t.bookList.books,c=t.shoppingCart.cartItems,o=r.find((function(t){return t.id===e})),i=c.findIndex((function(t){return t.id===e})),s=function(t,e,n){return 0===e.count?[].concat(Object(j.a)(t.slice(0,n)),Object(j.a)(t.slice(n+1))):-1===n?[].concat(Object(j.a)(t),[e]):[].concat(Object(j.a)(t.slice(0,n)),[e],Object(j.a)(t.slice(n+1)))}(c,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=t.id,c=void 0===r?e.id:r,o=t.title,i=void 0===o?e.title:o,s=t.count,a=void 0===s?0:s,d=t.total;return{id:c,title:i,count:a+n,total:(void 0===d?0:d)+n*e.price}}(c[i],o,n),i),a=s.reduce((function(t,e){return t+e.total}),0);return Object(d.a)(Object(d.a)({},t.shoppingCart),{},{orderTotal:a,cartItems:s})},u=function(t,e){if(void 0===t)return{cartItems:[],orderTotal:0};switch(e.type){case"BOOK_ADDED_TO_CART":return l(t,e.payload,1);case"MINUS_ITEM_IN_CART":return l(t,e.payload,-1);case"BOOK_DELETE_FROM_CART":var n=t.shoppingCart.cartItems.find((function(t){return t.id===e.payload}));return l(t,e.payload,-n.count);default:return t.shoppingCart}},b=function(t,e){return{bookList:a(t,e),shoppingCart:u(t,e)}},O=Object(s.c)(b,Object(s.a)((function(){return function(t){return function(e){return t("string"===typeof e?{type:e}:e)}}}),(function(t){t.getState;return function(t){return function(e){return t(e)}}})));O.dispatch("HELLO_WORLD");var h=n(8),f=n(10),x=(n(36),n(3)),m=(n(37),n(0)),p=Object(h.b)((function(t){var e=t.shoppingCart,n=e.cartItems,r=e.orderTotal;return{numItems:n.length,total:r}}))((function(t){var e=t.numItems,n=t.total;return Object(m.jsxs)("header",{className:"shop-header row",children:[Object(m.jsx)(f.b,{to:"/",children:Object(m.jsx)("div",{className:"logo text-dark",children:"ReStore"})}),Object(m.jsx)(f.b,{to:"/cart",children:Object(m.jsxs)("div",{className:"shopping-cart",children:[Object(m.jsx)("i",{className:"cart-icon fa fa-shopping-cart"}),e," items ($",n,")"]})})]})})),v=c.a.createContext(),g=v.Provider,_=v.Consumer,k=function(){return function(t){return function(e){return Object(m.jsx)(_,{children:function(n){return Object(m.jsx)(t,Object(d.a)(Object(d.a)({},e),{},{bookstoreService:n}))}})}}},C=function(t){return{type:"BOOK_ADDED_TO_CART",payload:t}},y=function(t,e){return function(){e({type:"FETCH_BOOKS_REQUEST"}),t.getBooks().then((function(t){return e({type:"FETCH_BOOKS_SUCCESS",payload:t})})).catch((function(t){e(function(t){return{type:"FETCH_BOOKS_FAILURE",payload:t}}(t))}))}},T=(n(40),function(){return Object(m.jsx)("div",{className:"loadingio-spinner-spin-f2aqm8i2gr6",children:Object(m.jsxs)("div",{className:"ldio-4krmvf96n0t",children:[Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{})})]})})}),N=(n(41),function(t){var e=t.book,n=t.onAddedToCart,r=e.title,c=e.author,o=e.price,i=e.coverImage;return Object(m.jsxs)("div",{className:"book-list-item",children:[Object(m.jsx)("div",{className:"book-cover",children:Object(m.jsx)("img",{src:i,alt:"book-img"})}),Object(m.jsxs)("div",{className:"book-details",children:[Object(m.jsx)("span",{children:r}),Object(m.jsx)("div",{className:"book-author",children:c}),Object(m.jsx)("div",{className:"book-price",children:o}),Object(m.jsx)("button",{onClick:function(){return n(e.id)},className:"btn btn-info add-to-cart",children:"Add to cart"})]})]})}),E=(n(42),function(t){var e=t.books,n=t.onAddedToCart;return Object(m.jsx)("ul",{className:"book-list",children:e.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)(N,{book:t,onAddedToCart:n})},t.id)}))})}),I=(n(43),n.p+"static/media/error-indicator.387f18ca.jpg"),S=function(){return Object(m.jsxs)("div",{className:"error__indicator",children:[Object(m.jsx)("img",{className:"error__indicator-img",src:I,alt:"error"}),Object(m.jsx)("span",{className:"error__indicator-sorry",children:"Sorry"}),Object(m.jsx)("span",{children:"something has go wrong"}),Object(m.jsx)("span",{children:"(but we already check what's going on)"})]})},A=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}}(k(),Object(h.b)((function(t){var e=t.bookList;return{books:e.books,loading:e.loading,error:e.error}}),(function(t,e){var n=e.bookstoreService;return{fetchBooks:y(n,t),onAddedToCart:function(e){return t(C(e))}}})))((function(t){var e=t.fetchBooks,n=t.books,c=t.loading,o=t.error,i=t.onAddedToCart;return Object(r.useEffect)((function(){e()}),[e]),c?Object(m.jsx)(T,{}):o?Object(m.jsx)(S,{}):Object(m.jsx)(E,{books:n,onAddedToCart:i})})),R=(n(44),{onIncrease:C,onDecrease:function(t){return{type:"MINUS_ITEM_IN_CART",payload:t}},onDelete:function(t){return{type:"BOOK_DELETE_FROM_CART",payload:t}}}),B=Object(h.b)((function(t){var e=t.shoppingCart;return{items:e.cartItems,total:e.orderTotal}}),R)((function(t){var e=t.items,n=t.total,r=t.onIncrease,c=t.onDecrease,o=t.onDelete;return Object(m.jsxs)("div",{className:"shopping-cart-table",children:[Object(m.jsx)("h2",{children:"Your Order"}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Item"}),Object(m.jsx)("th",{children:"Count"}),Object(m.jsx)("th",{children:"Price"}),Object(m.jsx)("th",{children:"Action"})]})}),Object(m.jsx)("tbody",{children:e.map((function(t,e){var n=t.id,i=t.title,s=t.count,a=t.total;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e+1}),Object(m.jsx)("td",{children:i}),Object(m.jsx)("td",{children:s}),Object(m.jsx)("td",{children:a}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{onClick:function(){return o(n)},className:"btn btn-outline-danger btn-sm float-right",children:Object(m.jsx)("i",{className:"fa fa-trash-o"})}),Object(m.jsx)("button",{onClick:function(){return r(n)},className:"btn btn-outline-success btn-sm float-right",children:Object(m.jsx)("i",{className:"fa fa-plus-circle"})}),Object(m.jsx)("button",{onClick:function(){return c(n)},className:"btn btn-outline-warning btn-sm float-right",children:Object(m.jsx)("i",{className:"fa fa-minus-circle"})})]})]},n)}))})]}),Object(m.jsxs)("div",{className:"total",children:["Total: $",n]})]})})),w=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(A,{}),Object(m.jsx)(B,{})]})},D=function(){return Object(m.jsx)("div",{children:"Cart page"})},L=function(){return Object(m.jsxs)("main",{role:"main",className:"container",children:[Object(m.jsx)(p,{numItems:5,total:215}),Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{path:"/",exact:!0,component:w}),Object(m.jsx)(x.a,{path:"/cart",component:D})]})]})},F=n(17),K=n(18),M=n(27),U=n(26),H=function(t){Object(M.a)(n,t);var e=Object(U.a)(n);function n(){var t;Object(F.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={hasError:!1},t}return Object(K.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)(S,{}):this.props.children}}]),n}(r.Component),J=new(function(){function t(){Object(F.a)(this,t),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(K.a)(t,[{key:"getBooks",value:function(){var t=this;return new Promise((function(e){setTimeout((function(){return e(t.data)}),200)}))}}]),t}());i.a.render(Object(m.jsx)(r.StrictMode,{children:Object(m.jsx)(h.a,{store:O,children:Object(m.jsx)(H,{children:Object(m.jsx)(g,{value:J,children:Object(m.jsx)(f.a,{children:Object(m.jsx)(L,{})})})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1557daab.chunk.js.map