
// const names = $("#name").val()
// const genders = $("#gender").val()
// $("#submit").onclick()
// // function(){ genderDiff(names, genders)}

var list = [];
function submit() {   //events are so imp in for html elements and tags
  let na =$("#name").val();
  let ge= $("#gender:checked").val();

  if(na==""){
    alert("please enter your name");    //this  is used to if the input box has any value
    return false;                       //if we return true the value will be accepted,if false the value will not be accepted
  }
  if(ge==undefined){
    alert("please select your gender");
    return false;
  }
 // validate is not a function
//  jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid"
// });
// $( "#myform" ).validate({
//   rules: {
//     gender: {
//       required: true
//     },
//     name:{
// required:true
//     }
//   }
// });
//   if ($('input:text', this).is(':checked')) {}
//   else {
//     alert("please enter name");
//     return false;
//   };

// if ($('input:radio', this).is(':checked')) {}
// else {
//   alert("please enter gender");
// return false;
// };
 alert("submitted succesfully");

let name = $("#name").val();
let gender = $("#gender:checked").val(); //returns the checked value(chosen value)

// var person = new genderDiff(names, gend);
list.push({ "gender": gender, "fullName": name });// push method is used for adding elements in ana array

//    if(gend=="female"){
//      if(gend=="male"){
//          list.push({"female":[name]});
//      }
$("#name").val("");
$("input").prop('checked', false);  // 
  }




function select() {
  $("#demo").empty();
  $("#demo").children().empty();//empty is used for removing child elements
  $("li:empty").remove();//remove is used to remove parent element too
  let result = $("#dropdown").val()
  let filteredlist = list.filter(x => x.gender == result);// (imp in future) filtering of values
  const d = new Date();
  let n = d.getMilliseconds();
  var i;
  for (i = 0; i < filteredlist.length; i++) {
    $("#demo").append("<li id=" + n + ">" + filteredlist[i].fullName + "</li >" + "<button type='button'  onclick='edit(" + n + ")' >edit</button>");
    n++;
  }
}
// }
//  document.getElementById("demo").innerHTML = console.log(Object.values(list.result))
// alert(list[result])
// $("#demo").append(list.result)
function edit(num) {
  //let filterId =list.filter(y=>y.id== )
  let x = confirm("are you sure want to edit");
  if (x == true) {
    let editValue = prompt("edit your name", $("#" + num).text());
    if (editValue != null) {
      let found = list.find(z => z.fullName == $("#" + num).text())
      found.fullName = editValue;
      list.fullName = found.fullName;
      load();
    }
  }
}
function load() {
  $("#demo").empty();
  $("#demo").load(select()); //load is used in jquery to load a specific element or list

}





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

