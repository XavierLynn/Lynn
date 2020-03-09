$(function () {
    $(".btn").click(function () {
        $("#iframe").attr("src",$(this).attr("value"));
        // alert("ss");
        // $(this).click();
    });

    
})