$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success(footer){
            $(footer).replaceAll("footer");
            $(`<link rel="stylesheet" href="../entire/css/floot.css">`).appendTo("head");
        }
    })
})