// function click(){
// alert("hello")
// }

// function mouse(){
//     alert("hi")
// }
// function blurs(){                            
//  let x=   document.getElementById("text")
//   x.value = $("#text").val().toUpperCase();
   
function isNumber(evt) {
 if(evt.keyCode>47 && evt.keyCode<58 || evt.keyCode==8){
     return true;
 }else{return false;}
//    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
//         if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
//  {
//     return false;}
//     return true;
}






//     (.keyCode)allows you to know about the ASCII value of that number 