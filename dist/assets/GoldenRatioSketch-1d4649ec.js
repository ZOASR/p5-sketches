import{r as m,u as f,j as a}from"./index-582985d6.js";import{p as c,n as g,F as w}from"./index.esm-d3188217.js";import{S as u}from"./index-be62b300.js";function j(t){let r=1.618,n=0;const i=[];t.setup=()=>{innerWidth<=786?t.createCanvas(innerWidth*.8,innerHeight*.7):t.createCanvas(innerWidth*.5,innerHeight*.5),n=t.height/2,t.background(0),t.angleMode(c.prototype.DEGREES);for(let e=1,s=0;e<=n;e+=.3,s++){const o=s*(360*r),d=t.width/2+Math.cos(o)*e,h=t.height/2+Math.sin(o)*e;i.push({x:d,y:h})}t.noLoop()},t.windowResized=()=>{innerWidth<=786?t.resizeCanvas(innerWidth*.8,innerHeight*.7):t.resizeCanvas(innerWidth*.5,innerHeight*.5),l(t)};const l=e=>{i.splice(0,i.length);for(let s=1,o=0;s<=n;s+=.3,o++){const d=o*(360*r),h=e.width/2+Math.cos(d)*s,x=e.height/2+Math.sin(d)*s;i.push({x:h,y:x})}e.background(0);for(let s of i){e.stroke(255,255);const o=c.prototype.map(c.prototype.dist(e.width/2,e.height/2,s.x,s.y),0,e.width/2,1,6);e.push(),e.colorMode(c.prototype.HSB),e.stroke(51,51,110),e.strokeWeight(o),e.ellipse(s.x,s.y,o,o),e.pop()}};t.updateWithProps=e=>{r=e.ratio,n=e.radius,l(t)}}const p=()=>{const[t,r]=m.useState({radius:100,ratio:1.618}),n=f(),i=[{backgroundColor:"#fff47f"},{backgroundColor:"black"}],l=[{backgroundColor:"#656032"},{backgroundColor:"white"}],e=" w-10/12 sm:w-1/2 flex flex-col mx-4 gap-4 text-center my-5 mx-auto ";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex gap-3 justify-between my-4 w-11/12 sm:w-1/2 mx-auto  ",children:[a.jsxs("div",{className:e,children:[a.jsxs("p",{className:"whitespace-nowrap",children:["Ratio:"," ",t.ratio==1.618?"φ":t.ratio]}),a.jsx(u,{min:.5,max:2,defaultValue:1.618,step:1e-4,onChange:s=>r(o=>({...o,ratio:s})),marks:{1.618:"φ"},trackStyle:i,handleStyle:l,railStyle:{backgroundColor:"white"}})]}),a.jsxs("div",{className:e,children:[a.jsxs("p",{className:"whitespace-nowrap",children:["Radius: ",t.radius]}),a.jsx(u,{min:0,max:500,defaultValue:200,step:1,onChange:s=>r(o=>({...o,radius:s})),trackStyle:i,handleStyle:l,railStyle:{backgroundColor:"white"}})]})]}),a.jsx("div",{className:"flex flex-row justify-center ring-2 ring-yellow-400 w-min rounded-2xl bg-black my-5 mx-auto overflow-hidden",children:a.jsx(g,{sketch:j,ratio:t.ratio,radius:t.radius})}),a.jsx("div",{className:"w-max mx-auto flex justify-center  h-max underline hover:font-extrabold transition-all duration-150",children:a.jsxs("a",{className:"flex",href:n.state.sourceCode,target:"_blank",children:[a.jsx("p",{children:"View source code"}),a.jsx("span",{className:"w-2"}),a.jsx(w,{})]})})]})};export{p as default};
