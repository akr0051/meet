(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{202:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(66),o=n.n(r),s=(n(202),n(20)),i=n(26),c=n(21),l=n(22),u=n(365),d=n(369),h=n(370),m=n(188),v=n(189),f=n(79),p=n(192),j=n(89),b=n(3),g=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1,showHideDetails:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(b.jsxs)("div",{className:"event",children:[Object(b.jsxs)("div",{className:"event-info",children:[Object(b.jsx)("div",{className:"EventSummary-modal",children:e.summary}),Object(b.jsxs)("div",{className:"EventDate",children:["start: ",e.start.dateTime," - Time Zone: ",e.start.timeZone]}),Object(b.jsxs)("div",{className:"location",children:[Object(b.jsx)(j.a,{className:"loc-icon",color:"white"}),Object(b.jsx)("div",{className:"EventLocation",children:e.location})]})]}),Object(b.jsx)("div",{className:"EventDetails",children:e.description})]})}}]),n}(a.Component),w=(n(204),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1,showHideDetails:!1},e.onClose=function(t){e.props.onClose&&e.props.onClose(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(b.jsx)("section",{className:"modal-container",id:"modal",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)(g,{event:e}),Object(b.jsx)("button",{className:"modal-close-btn",onClick:this.onClose,children:"X"})]})})}}]),n}(a.Component)),O=(n(205),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1,showHideDetails:!1,open:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e.toggleModal=function(t){t.preventDefault(),e.setState({open:!e.state.open})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.open;return Object(b.jsxs)("div",{className:"event",children:[Object(b.jsxs)("div",{className:"event-info",children:[Object(b.jsx)("div",{className:"EventSummary",children:t.summary}),Object(b.jsxs)("div",{className:"EventDate",children:["start: ",t.start.dateTime," - Time Zone: ",t.start.timeZone]}),Object(b.jsxs)("div",{className:"location",children:[Object(b.jsx)(j.a,{className:"loc-icon",color:"white"}),Object(b.jsx)("div",{className:"EventLocation",children:t.location})]})]}),!1===this.state.show&&Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"showMore",onClick:function(t){return e.toggleModal(t)},children:"Show details"}),n&&Object(b.jsx)(w,{event:t,onClose:function(t){return e.toggleModal(t)}})]})]})}}]),n}(a.Component)),x=(n(206),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{className:"list",children:Object(b.jsx)(O,{event:e})},e.id)}))})}}]),n}(a.Component)),y=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),k=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="white",a}return n}(y),T=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(y),S=n(170),N=(n(207),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"Please try another city.",suggestions:[]})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"CitySearch",children:Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)(S.a,{className:"search-icon",color:"white"}),Object(b.jsx)("input",{type:"text",className:"city",placeholder:"Search...",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{className:"sug-list",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{className:"city-list",onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{className:"city-main",children:"See all cities"})})]}),Object(b.jsx)(k,{className:"alert",text:this.state.infoText})]})})}}]),n}(a.Component)),Z=(n(208),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:16,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({errorText:"Please choose a number between 1 and 32",numberOfEvents:""}):(e.setState({numberOfEvents:n,errorText:""}),void e.props.updateEvents("",n))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"NumberOfEvents",children:[Object(b.jsx)("label",{className:"event-label",htmlFor:"numberOfEvent",children:"Number of events"}),Object(b.jsx)("div",{className:"number-input-box",children:Object(b.jsx)("input",{type:"number",className:"event-number-input",placeholder:"Enter Number",value:this.state.numberOfEvents,onChange:this.handleInputChanged})}),Object(b.jsx)(T,{text:this.state.errorText})]})}}]),n}(a.Component)),E=n(19),C=n(372),D=n(183),A=n(94),M=n(74),W=(n(209),function(e){var t=e.events,n=Object(a.useState)([]),r=Object(E.a)(n,2),o=r[0],s=r[1],i=Object(a.useState)(0),c=Object(E.a)(i,2),l=c[0],d=c[1];Object(a.useEffect)((function(){var e=v();s(e),d(e.reduce((function(e,t){return e+t.value}),0))}),[t]);var h=["React","JavaScript","Node","jQuery","AngularJS"],m=["#C99BE4","#73D500","#5AA7A7","#FFDE00","#FD4D7A"],v=function(){var e=h.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e=e.filter((function(e){return e.value}))};return Object(b.jsxs)("div",{className:"pie-container",children:[Object(b.jsx)("div",{className:"pie-title",children:"Technologies"}),Object(b.jsx)(u.a,{height:508,children:Object(b.jsxs)(C.a,{width:400,height:300,children:[Object(b.jsx)(D.a,{data:o,labelLine:!1,outerRadius:80,innerRadius:75,fill:"#8884d8",dataKey:"value",children:o.map((function(e,t){return Object(b.jsx)(A.a,{fill:m[t],name:e.name},"cell-".concat(t))}))}),Object(b.jsx)(M.a,{layout:"vertical",content:function(){return Object(b.jsx)("ul",{children:o.map((function(e,t){return Object(b.jsxs)("li",{style:{color:m[t]},children:[e.name," ",parseInt(100*e.value/l),"%"]},e.name)}))})}})]})})]})}),J=n(191),q=n(34),I=n.n(q),R=n(77),B=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],L=n(122),F=n.n(L),U=n(78),H=n.n(U),z=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Y=function(){var e=Object(R.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.map((function(e){return e.location}));return Object(J.a)(new Set(t))},G=function(){var e=Object(R.a)(I.a.mark((function e(){var t,n,a,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return H.a.done(),e.abrupt("return",B);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),H.a.done(),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,V();case 11:if(!(n=e.sent)){e.next=21;break}return z(),a="https://02ep2xk2eh.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=17,F.a.get(a);case 17:return(r=e.sent).data&&(o=_(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),H.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(R.a)(I.a.mark((function e(){var t,n,a,r,o,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Y(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,F.a.get("https://02ep2xk2eh.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&X(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://02ep2xk2eh.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=(n(362),n(363),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:10,warningText:""},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t){G().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,G().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:_(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"title",children:"meet"}),Object(b.jsx)("h1",{className:"subtitle",children:"Choose your nearest city"}),Object(b.jsxs)("div",{className:"top",children:[Object(b.jsx)(N,{updateEvents:this.updateEvents,locations:t}),Object(b.jsx)(Z,{updateEvents:this.updateEvents,numberOfEvents:n})]}),Object(b.jsxs)("div",{className:"meet-data",children:[Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)("div",{className:"pie",children:Object(b.jsx)(W,{events:a})}),Object(b.jsxs)("div",{className:"scatter-container",children:[Object(b.jsx)("div",{className:"scatter-title",children:"Cities"}),Object(b.jsx)(u.a,{height:284,children:Object(b.jsxs)(d.a,{margin:{top:5,right:42,bottom:-15,left:10},children:[Object(b.jsx)(h.a,{vertical:!1}),Object(b.jsx)(m.a,{type:"category",dataKey:"none",name:"city"}),Object(b.jsx)(v.a,{type:"number",dataKey:"number",name:"number of events",stroke:"#828D99",axisLine:!1}),Object(b.jsx)(f.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(p.a,{data:this.getData(),fill:"#FFFFFF"})]})})]})]}),Object(b.jsx)("div",{className:"event-list",children:Object(b.jsx)(x,{events:this.state.events})})]})]})}}]),n}(a.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(b.jsx)(K,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}()}},[[364,1,2]]]);
//# sourceMappingURL=main.e9acf544.chunk.js.map