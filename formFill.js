$(document).ready(function () {

    $("#button").click(function () {

        const d = new Date();
        let n = d.getMilliseconds()

        $(".demo").append("<li id= " + n + " >" + $("input").val()
            +  "</li>" +"<span id= "+ n +'_span'+" >" +"<button type='button' onclick='deleteit(" + n + ")'>del</button>" + "<button type='button'  onclick='editit(" + n + ")'>edit</button>" +"</span>" +"<br>");
        $("input").val("");

    })
});

function deleteit(num) {
    
    $("#" + num).empty();
    $("#" + num+"_span").empty();
    
    $("li:empty").remove();
}


function editit(num) {
    let x = confirm("are you sure want to edit");
    if (x == true) {
       // $(".demo").html();
        let edits = prompt("please edit the name", $("#"+num).text());
         if (edits != null) {
            
           $("#"+num).html(edits);
           return;
        }

    }



}


