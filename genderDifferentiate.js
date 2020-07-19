
// const names = $("#name").val()
// const genders = $("#gender").val()
// $("#submit").onclick()
// // function(){ genderDiff(names, genders)}

var list = [];
function submit() {
    let name = $("#name").val();
    let gender = $("#gender:checked").val();
   
   // var person = new genderDiff(names, gend);
   list.push( {"gender":gender , "fullName":name});
   
//    if(gend=="female"){
//      if(gend=="male"){
//          list.push({"female":[name]});
//      }
      $("#name").val("");
     $("input").prop('checked',false)}
     
     


function select(){
    let result= $("#dropdown").val()
    let filteredlist = list.filter(x=>x.gender==result);
    let i;
    
    
    
    for(i=0;i<filteredlist.length;i++){
      $("#demo").append("<li>"+filteredlist[i].fullName+"</li>");
    }
    }
    // }
    //  document.getElementById("demo").innerHTML = console.log(Object.values(list.result))
    // alert(list[result])
    // $("#demo").append(list.result)
  






// class genderDiff {
//     constructor(name, gender) {
//         this.name = name,
//             this.gender = gender;
//     }

//     get name() {
//         return this.name;
//     }
//     get gender() {
//         retlist.urn this.gender;
//     }
//     set name(newName) {
//         if (this.name === 'text') {
//             this.name = newName;
//         }

//         }

//     }

