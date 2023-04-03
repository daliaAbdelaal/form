var param=new URLSearchParams(location.search);
var userName=param.get("name");
document.getElementById("content").innerHTML=`<h1>welcome ${userName} </h1>`

