import{a as p}from"./chunk.XPF5GLVT.js";import{a as c}from"./chunk.MWDEA25W.js";import{a as m}from"./chunk.AR2QSYXF.js";import{a,b as i,f as n}from"./chunk.JFPKWAAH.js";import{c as l}from"./chunk.SYBSOZNG.js";import{e as s}from"./chunk.I4CX4JT3.js";var t=class extends n{constructor(){super(...arguments);this.mode="cors";this.allowScripts=!1}executeScript(e){let r=document.createElement("script");[...e.attributes].forEach(o=>r.setAttribute(o.name,o.value)),r.textContent=e.textContent,e.parentNode.replaceChild(r,e)}async handleSrcChange(){try{let e=this.src,r=await c(e,this.mode);if(e!==this.src)return;if(!r.ok){this.emit("sl-error",{detail:{status:r.status}});return}this.innerHTML=r.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(o=>this.executeScript(o)),this.emit("sl-load")}catch(e){this.emit("sl-error",{detail:{status:-1}})}}render(){return l`<slot></slot>`}};t.styles=p,s([i()],t.prototype,"src",2),s([i()],t.prototype,"mode",2),s([i({attribute:"allow-scripts",type:Boolean})],t.prototype,"allowScripts",2),s([m("src")],t.prototype,"handleSrcChange",1),t=s([a("sl-include")],t);export{t as a};
