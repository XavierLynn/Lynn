globalFontSize = 40;

var table_data = {
    "title": "待应答企业",
    "data": [
        {
            "企业名称": "上海通用重工集团1",
            "响应量": "15kW"
        },
        {
            "企业名称": "上海通用重工集团2",
            "响应量": "15kW"
        },
        {
            "企业名称": "上海通用重工集团3",
            "响应量": "15kW"
        },
        {
            "企业名称": "上海通用重工集团4",
            "响应量": "60kW"
        }
    ]
};
var showRealData = JKB["能源管理"]["同意邀约企业"]
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
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "--" + table_data['data'].length + "</a></li>");
    $('#regionContent').empty();
    for (let index = 0; index < table_data['data'].length; index++) {
        let tabvar = "";
        tabvar += "<div class='contentPanel'>";
        tabvar += "<div class='head'>";
        tabvar += "</div>";
        tabvar += "<div class='headBorder'>";
        tabvar += "</div>";
        tabvar += "<button class='headTitle'>" + table_data['data'][index]['企业名称'] + "</button>";
        tabvar += "<button>响应量<label>" + table_data['data'][index]['响应量'] + "</label></button>";
        tabvar += "</div>";
        
        $('#regionContent').append(tabvar);
    }

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

//播放动画
ue.interface.PlayAnimation = function (time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};