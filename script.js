const tower=document.querySelector("#tower");
const ironman=document.querySelector("#ironman");
const moon=document.querySelector("#moon");
const jet=document.querySelector("#jet");
const text=document.querySelector("#text");

window.addEventListener('scroll',()=>{
	let value=window.scrollY;
	tower.style.top=value*0.5+'px';
	moon.style.left=-value*0.5+'px';
	ironman.style.top=`${100-value/9}%`
	ironman.style.transform=`rotate(${-value*0.05}deg)`
	jet.style.transform=`translate(-50%,-50%) scale(${value/800}) translateZ(${value*0.8}px) rotate(${value*0.05}deg)`;
	// text.style.top=value*0.7+'px';
})