$(document).ready(function(){
    $("#itemWorks")
    .mouseover(function(){
        $("#crossfitr").fadeIn();
        $("#ldlmarketing").fadeIn("slow");
    })
.mouseout(function() {
    $("#crossfitr").fadeOut("slow");
    $("#ldlmarketing").fadeOut();

});


});
