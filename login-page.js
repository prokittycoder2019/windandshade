
const logForm= document.getElementById("loginForm");
const loginButton= document.getElementById("loginSubmit");

logForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	const username=logForm.user.value;
	const passw=logForm.pass.value;
	if(username=="AdMiN0620" && passw=="KaZtLvCFaexY"){
		document.cookie="browser_granted=1";
		window.location="admin%20page.html";
		
		}
	else{ 
		alert("ERROR 403 Access Denied");}
})
