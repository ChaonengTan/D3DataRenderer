(this.webpackJsonpd3final=this.webpackJsonpd3final||[]).push([[0],{148:function(t,e,n){},149:function(t,e,n){},152:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(58),i=n.n(c),s=(n(148),n(64)),u=n(2),o=(n(149),n(59)),l=n(60),d=n(61),p=n(65),h=n(4),j=n(0),f=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).myRef=r.a.createRef(),a.state={data:[]},a.filterExists=[],a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.data,n=t.width,a=t.height;this.colorScale=h.e().domain([0,e.length]).interpolator(h.c),this.arcGen=function(t,e){return h.a().innerRadius(t).outerRadius(e).padAngle(.01)},this.countAllProperty=function(t,e,n){for(var a=function(t){return void 0===t?0:parseInt(t.split(",").join(""))},r=t.reduce((function(t,r){return void 0===t[r[e]]?t[r[e]]=a(r[n]):t[r[e]]+=a(r[n]),t}),[]),c=[],i=0,s=Object.entries(r);i<s.length;i++){var o=Object(u.a)(s[i],2),l=o[0],d=o[1];c.push({label:l,value:d})}return c},this.svg=h.f(this.myRef.current).append("svg").attr("width",n).attr("height",a).style("border","1px black solid")}},{key:"componentDidUpdate",value:function(){var t=this,e=this.props,n=e.data,a=e.width,r=e.height,c=e.graphSpacing,i=e.graphSize,s=e.filters;h.b(n).then((function(e){s.forEach((function(n,s){if(!t.filterExists.includes(n)){t.filterExists.push(n);var u=t.svg.append("g").attr("transform","translate(".concat(a/2,", ").concat(r/2,")")),o=h.d(),l=t.countAllProperty(e,n.category,n.reducer),d=o(l.map((function(t){return t.value}))),p=(u.selectAll("path").data(d).enter().append("path").attr("d",t.arcGen(parseInt(c)+parseInt(i)*s,parseInt(i)*(s+1))).attr("fill",(function(e,n){return t.colorScale(n)})),t.svg.append("g").attr("transform","translate(".concat(a/2,", ").concat(r/2,")"))),j=t.arcGen(parseInt(c)+parseInt(i)*s,parseInt(i)*(s+1));p.selectAll("text").data(l).enter().append("text").text((function(t){return t.label})).attr("transform",(function(t,e){return"translate(".concat(j.centroid(d[e]),")")})).attr("text-anchor","middle")}})),t.setState({data:e})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{ref:this.myRef})}}]),n}(r.a.Component),b=n.p+"static/media/gameInfo.a28dd38d.csv";var g=function(){var t=Object(a.useState)(b),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),i=Object(u.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),h=p[0],g=p[1],O=Object(a.useState)(null),v=Object(u.a)(O,2),x=v[0],m=v[1],S=Object(a.useState)("600"),y=Object(u.a)(S,2),C=y[0],I=y[1],k=Object(a.useState)("600"),w=Object(u.a)(k,2),R=w[0],A=w[1],N=Object(a.useState)("10"),z=Object(u.a)(N,2),F=z[0],E=z[1],G=Object(a.useState)("100"),L=Object(u.a)(G,2),P=L[0],D=L[1],U=Object(a.useState)(null),B=Object(u.a)(U,2),J=B[0],M=B[1],T=function(){M(Object(j.jsx)(f,{data:n,width:C,height:R,graphSpacing:F,graphSize:P,filters:o}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"interface",children:[!J&&Object(j.jsxs)("div",{className:"initializer",children:[Object(j.jsxs)("div",{className:"graphSize",children:[Object(j.jsx)("input",{type:"text",onChange:function(t){return I(t.target.value)},placeholder:"width",value:C}),Object(j.jsx)("input",{type:"text",onChange:function(t){return A(t.target.value)},placeholder:"height",value:R})]}),Object(j.jsxs)("div",{className:"graphSettings",children:[Object(j.jsx)("input",{type:"text",onChange:function(t){return E(t.target.value)},placeholder:"graphSpacing",value:F}),Object(j.jsx)("input",{type:"text",onChange:function(t){return D(t.target.value)},placeholder:"graphSize",value:P})]}),Object(j.jsx)("input",{type:"file",id:"customCSV",onChange:function(t){return r(URL.createObjectURL(t.target.files[0]))}}),Object(j.jsx)("button",{onClick:function(){return T()},children:"Initialize Graph"})]}),J&&Object(j.jsxs)("div",{className:"addNewFilter",children:[Object(j.jsx)("input",{type:"text",onChange:function(t){return g(t.target.value)},placeholder:"category"}),Object(j.jsx)("input",{type:"text",onChange:function(t){return m(t.target.value)},placeholder:"reducer"}),Object(j.jsx)("button",{onClick:function(t){var e;e={category:"".concat(h),reducer:"".concat(x)},l([].concat(Object(s.a)(o),[e])),T()},children:"Add Filter"})]})]}),J]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),O()}},[[152,1,2]]]);
//# sourceMappingURL=main.9db52d4b.chunk.js.map