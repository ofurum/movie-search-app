(this.webpackJsonpshoppy=this.webpackJsonpshoppy||[]).push([[4],{37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var i=t(6),a=t(32),o=t.n(a),s=t(34),c=t(35),r=t(36),l=t(30),h=t(47),d=t(46),u=t(0),j=(t(37),t(38),function(e){var n=e.placeholder,t=e.handleChange,a=e.searchField,o=e.onEnter;return Object(i.jsx)("div",{className:"search",children:Object(i.jsx)("label",{htmlFor:"search",children:Object(i.jsx)("input",{type:"search",onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),o(e))},placeholder:n,value:a,onChange:t,className:"search-length"})})})}),m=t(45),v=(t(39),function(e){var n=e.movie,t=e.onNominate,a=Object(u.useState)(!1),o=Object(m.a)(a,2),s=o[0],c=o[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},className:"eachCardBackGround shadow",style:{backgroundImage:"url(".concat(n.Poster,")")},children:Object(i.jsx)("div",{className:"button",children:Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("i",{hidden:!s,class:"fas fa-plus fa-2x",onClick:function(){return t(n)}})})})}),Object(i.jsxs)("div",{class:"movie-label",children:[Object(i.jsx)("div",{className:"movie-title",children:n.Title}),Object(i.jsx)("div",{class:"movie-year",children:n.Year})]})]})}),b=(t(40),function(e){var n=e.movieData,t=e.onNominate;return console.log("card component",n),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"movie-card",children:n.map((function(e,n){return Object(i.jsx)(v,{movie:e,onNominate:t},n)}))})})}),f=(t(41),function(e){var n=e.nomination,t=e.onDelete;return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[n.Title,Object(i.jsx)("i",{class:"fas fa-trash-alt fa-1x",onClick:function(){return t()}})]})})})}),O=function(e){var n=e.nominations,t=e.unnominate;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:n.map((function(e,n,a){return Object(i.jsx)("div",{children:Object(i.jsx)(f,{onDelete:function(){return t(a)},nomination:e},n)})}))})})})})},x=t(14),p=t(42),g=t.n(p),N=function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).handleNomination=function(n){var t=e.state.nominations;t.push(n),localStorage.setItem("nominated",JSON.stringify(t)),e.setState({nominations:t}),g()({position:"top-end",icon:"success",title:"movie nominated",showConfirmButton:!1,timer:1500})},e.state={listofMovies:[],nominations:[],searchField:"",isError:!1},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("component",this.state.listofMovies.length),(n=localStorage.getItem("nominated"))&&this.setState({nominations:JSON.parse(n)});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchForMovies",value:function(e){var n=this,t=document.querySelector(".error");0===e.length&&(t.innerHTML="please input a movie name"),fetch("http://www.omdbapi.com/?s=".concat(e,"&apikey=6a3b9a04")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?(n.setState({listofMovies:e.Search}),n.setState({isError:!1})):n.setState({isError:!0})}))}},{key:"handleChange",value:function(e){var n=e.target.value;localStorage.setItem("movie name",n),this.setState({searchField:n})}},{key:"cleanContent",value:function(e){var n;return console.log("api",e),e&&(n=e.map((function(e){return e}))),n}},{key:"handleUnNomination",value:function(e){var n=this.state.nominations;n.splice(e,1),localStorage.setItem("nominated",JSON.stringify(n)),this.setState({nominations:n})}},{key:"render",value:function(){var e=this,n=this.state,t=n.searchField,a=n.listofMovies,o=n.nominations,s=n.isError;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(x.a,{children:Object(i.jsx)("div",{className:"bookmark",children:Object(i.jsx)("i",{class:"far fa-bookmark",children:Object(i.jsx)(x.b,{to:"/nomineeCard"})})})}),Object(i.jsx)("div",{children:Object(i.jsx)("h5",{className:"head-title",style:{textAlign:"center",color:"white",fontSize:"50px",fontFamily:"Hachi Maru Pop, cursive"},children:"Movie Application"})}),Object(i.jsx)(j,{value:t,placeholder:"search for movies",handleChange:this.handleChange,onEnter:function(n){return e.searchForMovies(n.target.value)}})]}),Object(i.jsx)("span",{className:"error"}),Object(i.jsxs)("div",{className:"main-body container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{style:{color:"white",fontSize:"25px"},children:"List of movies searched"}),Object(i.jsx)("span",{style:{color:"white",marginBottom:"15px"},children:"NB: click on the image to nominate the movie"}),s?Object(i.jsx)("h1",{children:"This Movie does not exist"}):Object(i.jsx)(b,{onNominate:this.handleNomination,movieData:a})]}),Object(i.jsxs)("div",{className:"movies",children:[Object(i.jsx)("h3",{className:"sub-head",style:{color:"white",fontSize:"25px"},children:"Nominated movies"}),0===this.state.nominations.length?"":Object(i.jsx)(O,{unnominate:function(n){return e.handleUnNomination(n)},nominations:o})]})]})]})}}]),t}(u.Component);n.default=N}}]);
//# sourceMappingURL=4.c92dcb54.chunk.js.map