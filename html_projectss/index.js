function validate(){
let x=document.forms["name"];
["name"].value;
if(x==""){
alert("name must be filled out");
box1.focus();
box1.style.border="solid 5 px red";
return false;
}