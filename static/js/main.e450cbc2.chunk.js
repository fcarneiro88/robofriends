(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),s=n(7),c=n.n(s),o=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))}),l=(n(14),n(2)),h=n(3),u=n(5),d=n(4),m=function(e){return Object(r.jsxs)("div",{className:"contain ph3 pv tc bg-purple b-green dib pa2 mr4 grow br3 bw4 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"125x125")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"avenir tc fw5 f4",children:e.name}),Object(r.jsx)("p",{className:"avenir tc fw3",children:e.email})]})]})},b=function(e){var t=e.robots;return Object(r.jsx)("div",{className:"pb3",children:t.map((function(e,n){return Object(r.jsx)(m,{id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email},n)}))})},j=[{id:1,name:"Frederick Love",username:"Slicky",email:"FrederickLove@why.me"},{id:2,name:"Louis Moses",username:"Opener",email:"LouisMoses@sun.pt"},{id:3,name:"Roosevelt Wu",username:"President",email:"RooseveltWu@aol.com"},{id:4,name:"Ben Mccullough",username:"Movies",email:"BenMccullough@jackmail.ty"},{id:5,name:"Abdul Knight",username:"Warrior",email:"AbdulKnight@urint.tt"},{id:6,name:"Norma Chikatilo",username:"Chika",email:"Norma@from_.hi"},{id:7,name:"Eleanor Juan",username:"Mexico",email:"Elenort@roswell.a51"},{id:8,name:"Alex Joker",username:"Psycho",email:"AlexJoker@jmail.ura"},{id:9,name:"Diana Wright",username:"SpaceCadet",email:"DianaWright@net.gmail"},{id:10,name:"Rhoda Britland",username:"Warrior",email:"RhodaBritland@wearR.iu"}],f=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--blue bg-lightest-blue",type:"search",name:"searchbar",placeholder:"Robot who?",onChange:t})})},p=(n(15),function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"2px solid darkred",borderRadius:"100px",height:"500px",backgroundColor:"#995E7E"},children:e.children})}),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Opppsss!!!!"}):this.props.children}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return j.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(r.jsx)(f,{searchChange:this.onSearchChange}),Object(r.jsx)(p,{children:Object(r.jsx)(g,{children:Object(r.jsx)(b,{robots:t})})})]}):Object(r.jsx)("h1",{children:"Loading"})}}]),n}(a.Component);c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.e450cbc2.chunk.js.map