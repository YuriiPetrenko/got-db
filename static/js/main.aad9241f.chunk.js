(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/err.22389cf4.jpg"},27:function(e,t,n){e.exports=n(53)},36:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),s=n(3),u=n(4),o=n(6),i=n(5),m=n(7),h=n(55),f=n(56),d=n(57),p=n(12),E=n(13);function v(){var e=Object(p.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return v=function(){return e},e}function g(){var e=Object(p.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return g=function(){return e},e}function b(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return b=function(){return e},e}var y=E.a.div(b()),C=E.a.h3(g()),w=E.a.ul(v()),j=function(){return r.a.createElement(y,null,r.a.createElement(C,null,r.a.createElement("a",{href:"#"},"Game of Thrones DB")),r.a.createElement(w,null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Characters")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Houses")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Books"))))},k=(n(36),n(9)),O=n.n(k),N=n(14),x=function(){function e(){var t=this;Object(s.a)(this,e),this.getResource=function(){var e=Object(N.a)(O.a.mark(function e(n){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{name:t.isEmpty(e.name),gender:t.isEmpty(e.gender),born:t.isEmpty(e.born),died:t.isEmpty(e.died),culture:t.isEmpty(e.culture)}},this._apiBase="https://www.anapioficeandfire.com/api"}return Object(u.a)(e,[{key:"getAllBooks",value:function(){return this.getResource("/books/")}},{key:"getBook",value:function(e){return this.getResource("/books/".concat(e,"/"))}},{key:"getAllCharacters",value:function(){var e=Object(N.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters?page=5&pageSize=10");case 2:return t=e.sent,console.log(t),e.abrupt("return",t.map(this._transformCharacter));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCharacter",value:function(){var e=Object(N.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformCharacter(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllHouses",value:function(){return this.getResource("/houses/")}},{key:"getHouse",value:function(e){return this.getResource("/houses/".concat(e,"/"))}},{key:"isEmpty",value:function(e){return e||"no-data..."}},{key:"_transformHouse",value:function(e){return{name:e.name,region:e.region,words:e.words,titles:e.titles,overlord:e.overlord,ancestralWeapons:e.ancestralWeapons}}},{key:"_transformBook",value:function(e){return{name:e.name,numberOfPages:e.numberOfPages,publisher:e.publisher,released:e.released}}}]),e}(),R=(n(40),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spin"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),S=n(22),I=n.n(S),B=(n(42),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:I.a,alt:"error"}),r.a.createElement("span",null,"Something goes wrong :("))}),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).service=new x,n.state={char:{},loading:!0,error:!1},n.onCharLoaded=function(e){n.setState({char:e,loading:!1})},n.onError=function(e){n.setState({error:!0,loading:!1})},n.updateChar=function(){var e=Math.floor(140*Math.random()+25);n.service.getCharacter(e).then(n.onCharLoaded).catch(n.onError)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,10500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,l=a?r.a.createElement(B,null):null,c=n?r.a.createElement(R,null):null,s=n||a?null:r.a.createElement(D,{char:t});return r.a.createElement("div",{className:"random-block rounded"},l,c,s)}}]),t}(a.Component),D=function(e){var t=e.char,n=t.name,a=t.gender,l=t.born,c=t.died,s=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,s))))},_=(n(44),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).service=new x,n.state={charList:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getAllCharacters().then(function(t){e.setState({charList:t})}).catch(function(e){console.log(e)})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e,n){return r.a.createElement("li",{key:n,className:"list-group-item",onClick:function(){return t.props.onCharSelected(41+n)}},e.name)})}},{key:"render",value:function(){var e=this.state.charList;if(!e)return r.a.createElement(R,null);var t=this.renderItems(e);return r.a.createElement("ul",{className:"item-list list-group mb-5"},t)}}]),t}(a.Component)),L=(n(46),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).service=new x,n.state={char:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"updateChar",value:function(){var e=this,t=this.props.charId;t&&this.service.getCharacter(t).then(function(t){e.setState({char:t})})}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){if(!this.state.char)return r.a.createElement("span",{className:"select-error"},"Choose Character");var e=this.state.char,t=e.name,n=e.gender,a=e.born,l=e.died,c=e.culture;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,t),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born"),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died"),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture"),r.a.createElement("span",null,c))))}}]),t}(a.Component)),M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={showRandomChar:!0,error:!1,selectedChar:null},n.onCharSelected=function(e){n.setState({selectedChar:e})},n.toggleRandomChar=function(){n.setState(function(e){return{showRandomChar:!e.showRandomChar}})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.showRandomChar?r.a.createElement(A,null):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(j,null)),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(d.a,{lg:{size:5,offset:0}},e,r.a.createElement("button",{onClick:this.toggleRandomChar,className:"btn btn-primary mb-4"},"Toggle random Char"))),r.a.createElement(f.a,null,r.a.createElement(d.a,{md:"6"},r.a.createElement(_,{onCharSelected:this.onCharSelected})),r.a.createElement(d.a,{md:"6"},r.a.createElement(L,{charId:this.state.selectedChar})))))}}]),t}(a.Component);n(49),n(51);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.aad9241f.chunk.js.map