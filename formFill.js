$(document).ready(function () {

    $("#button").click(function () {

        const d = new Date();
        let n = d.getMilliseconds()
                                          // append is so better to used than (getElementById.innerHTML): better use append
        $(".demo").append("<li id= " + n + " >" + $("input").val() //append is used in jquery to display values in particular selected items
            +  "</li>" +"<span id= "+ n +'_span'+" >" +"<button type='button' onclick='deleteit(" + n + ")'>del</button>" + "<button type='button'  onclick='editit(" + n + ")'>edit</button>" +"</span>" +"<br>");
        $("input").val("");

    })
});

function deleteit(num) {
    
    $("#" + num).empty();
    $("#" + num+"_span").empty();// "#"+num+"_span" is for buttons id ......a good way(  to be remembered )
    
    $("li:empty").remove();// tells if the list is empty ...then remove (  :is used for different selectors )
}


function editit(num) {
    let x = confirm("are you sure want to edit");
    if (x == true) {
       // $(".demo").html();
        let edits = prompt("please edit the name", $("#"+num).text());
         if (edits != null) {
            
           $("#"+num).html(edits);// .html() is method of jquery used to print values in only onscreen..saved list will not be changed 
           return;
        }

    }



}


