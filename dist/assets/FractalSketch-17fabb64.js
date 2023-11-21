var x=Object.defineProperty;var b=(t,e,i)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var l=(t,e,i)=>(b(t,typeof e!="symbol"?e+"":e,i),i);import{r as f,u as p,j as o}from"./index-b4a8c8c8.js";import{p as u,n as y,F as k}from"./index.esm-73a41341.js";import{S as g}from"./Slider-921c42d7.js";class c{constructor(e,i,s,r){l(this,"a");l(this,"b");l(this,"angle");l(this,"p");this.a=e.copy(),this.b=i.copy(),this.angle=s,this.p=r}show(){this.p.stroke(100,200,34),this.p.strokeWeight(2),this.p.line(this.a.x,this.a.y,this.b.x,this.b.y),this.p.strokeWeight(3),this.p.point(this.a.x,this.a.y),this.p.point(this.b.x,this.b.y)}start(){return this.a.copy()}end(){return this.b.copy()}left(){let e=u.Vector.sub(this.b,this.a);return e.div(3),e.add(this.a),e}right(){let e=u.Vector.sub(this.a,this.b);return e.div(3),e.add(this.b),e}middle(){let e=u.Vector.sub(this.b,this.a);e.copy().div(2),e.div(3);let s=this.a.copy();return s.add(e),e.rotate(-u.prototype.radians(this.angle)),s.add(e),s}}class w{constructor(e,i,s,r,a){l(this,"start");l(this,"end");l(this,"a");l(this,"lines",[]);l(this,"count",0);l(this,"p");this.start=a.createVector(e,i),this.end=a.createVector(e+s,i),this.a=r,this.lines=[],this.count=0,this.p=a,this.lines.push(new c(this.start,this.end,this.a,this.p))}nextLevel(){this.lines=this.iterate(this.lines),this.count++}restart(){this.count=0,this.lines=[],this.lines.push(new c(this.start,this.end,this.a,this.p))}getCount(){return this.count}updateAngle(e){this.a=e}show(){for(let e of this.lines)e.show()}iterate(e){let i=[];for(let s of e){let r=s.start(),a=s.left(),h=s.middle(),d=s.right(),n=s.end();i.push(new c(r,a,this.a,this.p)),i.push(new c(a,h,this.a,this.p)),i.push(new c(h,d,this.a,this.p)),i.push(new c(d,n,this.a,this.p))}return i}}function C(t){let e,i,s=30,r=0;const a=document.getElementById("canvas-wrapper");let h,d;if(a){const n=window.getComputedStyle(a,null);h=a==null?void 0:a.clientWidth,h-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),d=a==null?void 0:a.clientHeight,d-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)}t.updateWithProps=n=>{s=n==null?void 0:n.rotation,r=n==null?void 0:n.iterations},t.setup=()=>{t.createCanvas(h,d),e=new w(t.width/2-t.width/4,t.height/2,t.width/2,s,t),i=new w(t.width/2-t.width/4,t.height/2,t.width/2,360-s,t)},t.windowResized=()=>{if(a){const n=window.getComputedStyle(a,null);h=a==null?void 0:a.clientWidth,h-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),d=a==null?void 0:a.clientHeight,d-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)}e=new w(t.width/2-t.width/4,t.height/2,t.width/2,s,t),i=new w(t.width/2-t.width/4,t.height/2,t.width/2,360-s,t),t.resizeCanvas(h,d)},t.draw=()=>{t.background(0,51,12),t.push(),t.strokeWeight(0),t.fill(100,200,34),t.pop(),e.updateAngle(s),i.updateAngle(360-s);for(let n=0;n<r;n++)e.nextLevel(),i.nextLevel();e.show(),i.show(),e.restart(),i.restart()}}const j="_canvasWrapper_1boxw_1",v="_header_1boxw_23",m={canvasWrapper:j,header:v},L=()=>{const[t,e]=f.useState({rotation:30,iterations:3}),i=p();return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:m.header,children:[o.jsxs("div",{className:"my-6 w-full sm:w-1/3",children:[o.jsxs("p",{children:["Angle: ",t.rotation]}),o.jsx(g,{min:0,max:180,defaultValue:30,step:.1,marks:{30:"30°",60:"60°",90:"90°",180:"180° (Max)"},onChange:s=>e(r=>({...r,rotation:s})),trackStyle:[{backgroundColor:"#53af1e"},{backgroundColor:"black"}],handleStyle:[{backgroundColor:"#00a525"},{backgroundColor:"#005914"}],railStyle:{backgroundColor:"white"}})]}),o.jsxs("div",{className:"my-6 w-full sm:w-1/3",children:[o.jsxs("p",{children:["No. of iterations: ",t.iterations]}),o.jsx(g,{min:1,max:5,defaultValue:3,step:1,marks:{1:"1",2:"2",3:"3",4:"4",5:"5"},onChange:s=>e(r=>({...r,iterations:s})),trackStyle:[{backgroundColor:"#53af1e"},{backgroundColor:"black"}],handleStyle:[{backgroundColor:"#00a525"},{backgroundColor:"#005914"}],railStyle:{backgroundColor:"white"}})]})]}),o.jsx("div",{className:m.canvasWrapper,id:"canvas-wrapper",children:o.jsx(y,{sketch:C,rotation:t==null?void 0:t.rotation,iterations:t==null?void 0:t.iterations})}),o.jsx("div",{className:"w-max mx-auto flex justify-center  h-max underline hover:font-extrabold transition-all duration-150",children:o.jsxs("a",{className:"flex",href:i.state.sourceCode,target:"_blank",children:[o.jsx("p",{children:"View source code"}),o.jsx("span",{className:"w-2"}),o.jsx(k,{})]})})]})};export{L as default};
