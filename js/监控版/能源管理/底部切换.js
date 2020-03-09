$(function () {
    $(".tabItem").click(function() {
        $(".tabItem").removeClass("tabItemSelect");
        $(this).addClass("tabItemSelect");
    });
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
});