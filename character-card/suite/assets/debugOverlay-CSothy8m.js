import{r as e}from"./rolldown-runtime-FWtTx8oQ.js";import{d as t,x as n}from"./vendor-BzRhaCtl.js";var r=e({BC_DEBUG_OVERLAY:()=>a,LS_DEBUG_OVERLAY:()=>i,installDebugOverlay:()=>f,isDebugOverlayOn:()=>o,setDebugOverlay:()=>s});n();var i=`obr-suite/debug-overlay`,a=`com.obr-suite/debug-overlay`;function o(){try{return localStorage.getItem(i)===`1`}catch{return!1}}function s(e){try{localStorage.setItem(i,e?`1`:`0`)}catch{}try{t.broadcast.sendMessage(a,{on:e},{destination:`LOCAL`})}catch{}}var c=!1;function l(){if(c)return;c=!0;let e=document.createElement(`style`);e.textContent=`
body.debug-overlay-on {
  background: rgba(245, 166, 35, 0.18) !important;
  outline: 2px dashed rgba(245, 166, 35, 0.55);
  outline-offset: -2px;
}
body.debug-overlay-on::before {
  content: "DEBUG";
  position: fixed;
  top: 2px; right: 4px;
  font: 700 9px ui-monospace, Consolas, monospace;
  letter-spacing: 0.3px;
  color: rgba(245, 166, 35, 0.9);
  background: rgba(0, 0, 0, 0.45);
  padding: 1px 4px;
  border-radius: 3px;
  pointer-events: none;
  z-index: 99999;
}
`,document.head.appendChild(e)}function u(e){document.body.classList.toggle(`debug-overlay-on`,e)}var d=!1;function f(){if(!d){d=!0,l(),u(o());try{t.broadcast.onMessage(a,e=>{let t=!!e.data?.on;try{localStorage.setItem(i,t?`1`:`0`)}catch{}u(t)})}catch{}}}export{f as n,r as t};