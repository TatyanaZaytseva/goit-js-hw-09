refs={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},refs.startBtn.addEventListener("click",(function({target:e}){if(e.classList.contains("isActive"))return;e.classList.add("isActive"),e.disabled=!0,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),refs.stopBtn.addEventListener("click",(function(){refs.startBtn.classList.remove("isActive"),refs.startBtn.disabled=!1,clearInterval(t)}));let t=null;
//# sourceMappingURL=01-color-switcher.1b56101e.js.map
