import{r as m,u as f,j as o}from"./index-70618817.js";import{p as c,n as g,F as w}from"./index.esm-700dc731.js";import{S as u}from"./index-5567a365.js";function j(t){let i=1.618,n=0;const r=[];t.setup=()=>{t.createCanvas(innerWidth*.5,innerHeight*.5),n=t.height/2,t.background(0),t.angleMode(c.prototype.DEGREES);for(let e=1,s=0;e<=n;e+=.3,s++){const a=s*(360*i),d=t.width/2+Math.cos(a)*e,h=t.height/2+Math.sin(a)*e;r.push({x:d,y:h})}t.noLoop()},t.windowResized=()=>{innerWidth<=786?t.resizeCanvas(innerWidth*.8,innerHeight*.7):t.resizeCanvas(innerWidth*.5,innerHeight*.5),l(t)};const l=e=>{r.splice(0,r.length);for(let s=1,a=0;s<=n;s+=.3,a++){const d=a*(360*i),h=e.width/2+Math.cos(d)*s,x=e.height/2+Math.sin(d)*s;r.push({x:h,y:x})}e.background(0);for(let s of r){e.stroke(255,255);const a=c.prototype.map(c.prototype.dist(e.width/2,e.height/2,s.x,s.y),0,e.width/2,1,6);e.push(),e.colorMode(c.prototype.HSB),e.stroke(51,51,110),e.strokeWeight(a),e.ellipse(s.x,s.y,a,a),e.pop()}};t.updateWithProps=e=>{i=e.ratio,n=e.radius,l(t)}}const C=()=>{const[t,i]=m.useState({radius:100,ratio:1.618}),n=f(),r=[{backgroundColor:"#fff47f"},{backgroundColor:"black"}],l=[{backgroundColor:"#656032"},{backgroundColor:"white"}],e=" w-10/12 sm:w-1/2 flex flex-col mx-4 gap-4 text-center my-5 mx-auto ";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-3 justify-between my-4 w-11/12 sm:w-1/2 mx-auto  ",children:[o.jsxs("div",{className:e,children:[o.jsxs("p",{children:["Ratio:"," ",t.ratio==1.618?"φ":t.ratio]}),o.jsx(u,{min:.5,max:2,defaultValue:1.618,step:1e-4,onChange:s=>i(a=>({...a,ratio:s})),marks:{1.618:"φ"},trackStyle:r,handleStyle:l,railStyle:{backgroundColor:"white"}})]}),o.jsxs("div",{className:e,children:[o.jsxs("p",{children:["Radius: ",t.radius]}),o.jsx(u,{min:0,max:500,defaultValue:200,step:1,onChange:s=>i(a=>({...a,radius:s})),trackStyle:r,handleStyle:l,railStyle:{backgroundColor:"white"}})]})]}),o.jsx("div",{className:"flex flex-row justify-center ring-2 ring-yellow-400 w-min rounded-2xl bg-black my-5 mx-auto overflow-hidden",children:o.jsx(g,{sketch:j,ratio:t.ratio,radius:t.radius})}),o.jsx("div",{className:"w-max mx-auto flex justify-center  h-max underline hover:font-extrabold transition-all duration-150",children:o.jsxs("a",{className:"flex",href:n.state.sourceCode,target:"_blank",children:[o.jsx("p",{children:"View source code"}),o.jsx("span",{className:"w-2"}),o.jsx(w,{})]})})]})};export{C as default};