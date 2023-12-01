var m=Object.defineProperty;var x=(i,e,a)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var l=(i,e,a)=>(x(i,typeof e!="symbol"?e+"":e,a),a);import{r as u,u as f,j as r}from"./index-73933396.js";import{a as h,p,F as g}from"./index.esm-1e6691d2.js";import{S as d}from"./index-bf5588da.js";import{n as w}from"./react-d7d34177.js";class y{constructor(e,a,t){l(this,"p");l(this,"v");l(this,"a");l(this,"maxSpeed");l(this,"maxForce");l(this,"r");l(this,"gravity");l(this,"p5");this.p=new h.Vector(e,a),this.v=h.Vector.random2D(),this.a=new h.Vector,this.maxSpeed=4,this.maxForce=.04,this.r=20,this.gravity=new h.Vector,this.p5=t}edges(){this.p.x>this.p5.width?this.p.x=0:this.p.y>this.p5.height?this.p.y=0:this.p.y<0?this.p.y=this.p5.height:this.p.x<0&&(this.p.x=this.p5.width)}update(){this.p.add(this.v),this.v.add(this.a),this.v.limit(this.maxSpeed),this.a.limit(this.maxForce)}follow(e,a){const t=new h.Vector(e,a),o=h.Vector.sub(t,this.p);o.setMag(this.maxSpeed),o.sub(this.v),o.limit(this.maxForce),this.a.add(o)}separation(e){const t=new h.Vector;let o=0;for(const s of e){const n=this.p5.dist(this.p.x,this.p.y,s.p.x,s.p.y);if(s!=this&&n<100){const c=h.Vector.sub(this.p,s.p);c.div(n*n),t.add(c),o++}}return o>0&&(t.div(o),t.setMag(this.maxSpeed),t.sub(this.v),t.limit(this.maxForce)),t}align(e){const t=new h.Vector;let o=0;for(const s of e){const n=h.prototype.dist(this.p.x,this.p.y,s.p.x,s.p.y);s!=this&&n<100&&(t.add(s.v),o++)}return o>0&&(t.div(o),t.setMag(this.maxSpeed),t.sub(this.v),t.limit(this.maxForce)),t}cohesion(e){const t=new h.Vector;let o=0;for(const s of e){const n=h.prototype.dist(this.p.x,this.p.y,s.p.x,s.p.y);s!=this&&n<50&&(t.add(s.p),o++)}return o>0&&(t.div(o),t.sub(this.p),t.setMag(this.maxSpeed),t.sub(this.v),t.limit(this.maxForce)),t}flock(e,a,t,o){const s=this.align(e),n=this.cohesion(e),c=this.separation(e);s.mult(a),n.mult(t),c.mult(o),this.a.add(s),this.a.add(n),this.a.add(c),this.a.add(this.gravity)}show(){this.p5.push(),this.p5.colorMode(h.prototype.HSB);const e=this.v.heading(),a=h.prototype.map(this.v.mag(),0,this.maxSpeed,0,360);this.p5.stroke(a,255,255);const t=h.Vector.fromAngle(e);t.setMag(this.v.mag()*2.5),this.p5.translate(this.p.x,this.p.y),this.p5.strokeWeight(3),this.p5.line(t.x,t.y,0,0),this.p5.pop()}}function v(i){const e=[];let a=0,t=0,o=0;i.setup=()=>{i.createCanvas(innerWidth*.5,innerHeight*.5);for(let s=0;s<200;s++)e.push(new y(p.prototype.random(i.width),p.prototype.random(i.height),i))},i.updateWithProps=({a:s,c:n,s:c})=>{a=s,t=n,o=c},i.windowResized=()=>{innerWidth<786?i.resizeCanvas(innerWidth*.8,innerHeight*.5):i.resizeCanvas(innerWidth*.5,innerHeight*.5)},i.draw=()=>{i.background(0),i.textAlign(p.prototype.CENTER),i.textSize(20),i.fill(255),i.noStroke();for(const s of e)s.flock(e,a,t,o),s.update(),s.show(),s.edges()}}const V=()=>{const[i,e]=u.useState({a:5,c:2,s:5}),a=f(),t=[{backgroundColor:"grey"},{backgroundColor:"black"}],o=[{backgroundColor:"red"},{backgroundColor:"white"}],s=" w-10/12 sm:w-1/2 flex flex-col mx-4 gap-4 text-center my-5 mx-auto ";return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-3 justify-between w-1/2 mx-auto",children:[r.jsxs("div",{className:s,children:[r.jsxs("p",{className:"whitespace-nowrap",children:["Aligment: ",i.a]}),r.jsx(d,{min:0,max:10,defaultValue:5,step:.1,onChange:n=>e(c=>({...c,a:n})),trackStyle:t,handleStyle:o,railStyle:{backgroundColor:"white"}})]}),r.jsxs("div",{className:s,children:[r.jsxs("p",{className:"whitespace-nowrap",children:["Cohesion: ",i.c]}),r.jsx(d,{min:0,max:10,defaultValue:8,step:.1,onChange:n=>e(c=>({...c,c:n})),trackStyle:t,handleStyle:o,railStyle:{backgroundColor:"white"}})]}),r.jsxs("div",{className:s,children:[r.jsxs("p",{className:"whitespace-nowrap",children:["Seperation: ",i.s]}),r.jsx(d,{min:0,max:10,defaultValue:5,step:.1,onChange:n=>e(c=>({...c,s:n})),trackStyle:t,handleStyle:o,railStyle:{backgroundColor:"white"}})]})]}),r.jsx("div",{className:"flex flex-row justify-center ring-2 ring-slate-800 w-min rounded-2xl bg-black my-5 mx-auto p-5",children:r.jsx(w,{sketch:v,a:i.a,c:i.c,s:i.s})}),r.jsx("div",{className:"w-max mx-auto flex justify-center  h-max underline hover:font-extrabold transition-all duration-150",children:r.jsxs("a",{className:"flex",href:a.state.sourceCode,target:"_blank",children:[r.jsx("p",{children:"View source code"}),r.jsx("span",{className:"w-2"}),r.jsx(g,{})]})})]})};export{V as default};
