
$(document).ready(function(){
 $("button").click(function(){
 var row="<tr><td>1</td><td><input type="text" placeholder="enter name"><td><input type="tel" placeholder="enter number"></td><th><button class="del">remove</button></th></tr>";
 $("#table tbody").append(row);
});
});