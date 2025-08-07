//your JS code here. If required.
let ptag=document.getElementById("counter");
let sum=0;

let btntag=document.getElementById("incrementBtn");
btntag.addEventListener("click",()=>{
	sum++;
	alert(sum);
	ptag.textContent=sum;
})