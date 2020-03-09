
var showRealData = JKB["能源管理"]["时间轴"]
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYGL.asmx/GetEnteEnergyConsumptionMonth",
        type: "POST",
        async: true,
        data: "regionID=zj&topCount=3&startDate=2019-12&endDate=2020-01",
        error: function() {
            Flush();
        },
       success: function(data) {
            if(showRealData){
                table_data = JSON.parse(data);
                Flush();
            }  
        }
    });
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
   
});

function Flush(){
    $('.nav').empty();
    yiji_title.length = 0;


    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>结算进度</a></li>");
    
    var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 4, /*默认是显示4个*/
        initialSlide: 0, /*默认从第几个显示，999是为了让右边没有*/
        spaceBetween: 0, /*间距*/
        speed: 1000,/*速度*/
        prevButton: ".swiper-button-prev", /*左右按钮*/
        nextButton: ".swiper-button-next"
    })
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYGL.asmx/"+jsonData['FunctionName'],
        type: "POST",
        async: true,
        data: jsonData['FunctionParam'],
        error: function() {
            Flush();
        },
        success: function(data) {
            if(showRealData){
                table_data = JSON.parse(data);
                Flush();
            }  
        }
    });

}