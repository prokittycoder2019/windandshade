
const logForm= document.getElementById("loginForm");
const loginButton= document.getElementById("loginSubmit");

loginButton.addEventListener("click",(e)=>{
	const username=logForm.user.value;
	const passw=logForm.pass.value;
	if(username=="AdMiN0620" && passw=="KaZtLvCFaexY"){
		document.cookie="browser_granted=1";
		window.location.replace("admin%20page.html");
		
		}
	else{ 
		alert("ERROR 403 Access Denied");}
})
