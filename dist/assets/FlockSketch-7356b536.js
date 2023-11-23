var x=Object.defineProperty;var m=(i,e,a)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var l=(i,e,a)=>(m(i,typeof e!="symbol"?e+"":e,a),a);import{r as u,u as f,j as n}from"./index-70618817.js";import{a as h,p as d,n as g,F as y}from"./index.esm-700dc731.js";import{S as p}from"./index-5567a365.js";class v{constructor(e,a,t){l(this,"p");l(this,"v");l(this,"a");l(this,"maxSpeed");l(this,"maxForce");l(this,"r");l(this,"gravity");l(this,"p5");this.p=new h.Vector(e,a),this.v=h.Vector.random2D(),this.a=new h.Vector,this.maxSpeed=4,this.maxForce=.04,this.r=20,this.gravity=new h.Vector,this.p5=t}edges(){this.p.x>this.p5.width?this.p.x=0:this.p.y>this.p5.height?this.p.y=0:this.p.y<0?this.p.y=this.p5.height:this.p.x<0&&(this.p.x=this.p5.width)}update(){this.p.add(this.v),this.v.add(this.a),this.v.limit(this.maxSpeed),this.a.limit(this.maxForce)}follow(e,a){const t=new h.Vector(e,a),o=h.Vector.sub(t,this.p);o.setMag(this.maxSpeed),o.sub(this.v),o.limit(this.maxForce),this.a.add(o)}separation(e){const t=new h.Vector;let o=0;for(const s of e){const r=this.p5.dist(this.p.x,this.p.y,s.p.x,s.p.y);if(s!=this&&r<100){const c=h.Vector.sub(this.p,s.p);c.div(r*r),t.add(c),o++}}return o>0&&(t.div(o),t.setMag(this.maxSpeed),t.sub(this.v),t.limit(this.maxForce)),t}align(e){const t=new h.Vector;let o=0;for(const s of e){const r=h.prototype.dist(this.p.x,this.p.y,s.p.x,s.p.y);s!=this&&r<100&&(t.add(s.v),o++)}return o>0&&(t.div(o),t.setMag(this.maxSpeed),t.sub(this.v),t.limit(this.maxForce)),t}cohesion(e){const t=new h.Vector;let o=0;for(const s of e){const r=h.prototype.dist(this.p.x,this.p.y,s.p.x,s.p.y);s!=this&&r<50&&(t.add(s.p),o++)}return o>0&&(t.div(o),t.sub(this.p),t.setMag(this.maxSpeed),t.sub(this.v),t.limit(this.maxForce)),t}flock(e,a,t,o){const s=this.align(e),r=this.cohesion(e),c=this.separation(e);s.mult(a),r.mult(t),c.mult(o),this.a.add(s),this.a.add(r),this.a.add(c),this.a.add(this.gravity)}show(){this.p5.push(),this.p5.colorMode(h.prototype.HSB);const e=this.v.heading(),a=h.prototype.map(this.v.mag(),0,this.maxSpeed,0,360);this.p5.stroke(a,255,255);const t=h.Vector.fromAngle(e);t.setMag(this.v.mag()*2.5),this.p5.translate(this.p.x,this.p.y),this.p5.strokeWeight(3),this.p5.line(t.x,t.y,0,0),this.p5.pop()}}function w(i){const e=[];let a=0,t=0,o=0;i.setup=()=>{i.createCanvas(innerWidth*.5,innerHeight*.5);for(let s=0;s<200;s++)e.push(new v(d.prototype.random(i.width),d.prototype.random(i.height),i))},i.updateWithProps=({a:s,c:r,s:c})=>{a=s,t=r,o=c},i.windowResized=()=>{innerWidth<786?i.resizeCanvas(innerWidth*.8,innerHeight*.5):i.resizeCanvas(innerWidth*.5,innerHeight*.5)},i.draw=()=>{i.background(0),i.textAlign(d.prototype.CENTER),i.textSize(20),i.fill(255),i.noStroke();for(const s of e)s.flock(e,a,t,o),s.update(),s.show(),s.edges()}}const C=()=>{const[i,e]=u.useState({a:5,c:2,s:5}),a=f(),t=[{backgroundColor:"grey"},{backgroundColor:"black"}],o=[{backgroundColor:"red"},{backgroundColor:"white"}],s=" w-10/12 sm:w-1/2 flex flex-col mx-4 gap-4 text-center my-5 mx-auto ";return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex gap-3 justify-between w-1/2 mx-auto",children:[n.jsxs("div",{className:s,children:[n.jsxs("p",{children:["Aligment: ",i.a]}),n.jsx(p,{min:0,max:10,defaultValue:5,step:.1,onChange:r=>e(c=>({...c,a:r})),trackStyle:t,handleStyle:o,railStyle:{backgroundColor:"white"}})]}),n.jsxs("div",{className:s,children:[n.jsxs("p",{children:["Cohesion: ",i.c]}),n.jsx(p,{min:0,max:10,defaultValue:8,step:.1,onChange:r=>e(c=>({...c,c:r})),trackStyle:t,handleStyle:o,railStyle:{backgroundColor:"white"}})]}),n.jsxs("div",{className:s,children:[n.jsxs("p",{children:["Seperation: ",i.s]}),n.jsx(p,{min:0,max:10,defaultValue:5,step:.1,onChange:r=>e(c=>({...c,s:r})),trackStyle:t,handleStyle:o,railStyle:{backgroundColor:"white"}})]})]}),n.jsx("div",{className:"flex flex-row justify-center ring-2 ring-slate-800 w-min rounded-2xl bg-black my-5 mx-auto p-5",children:n.jsx(g,{sketch:w,a:i.a,c:i.c,s:i.s})}),n.jsx("div",{className:"w-max mx-auto flex justify-center  h-max underline hover:font-extrabold transition-all duration-150",children:n.jsxs("a",{className:"flex",href:a.state.sourceCode,target:"_blank",children:[n.jsx("p",{children:"View source code"}),n.jsx("span",{className:"w-2"}),n.jsx(y,{})]})})]})};export{C as default};
