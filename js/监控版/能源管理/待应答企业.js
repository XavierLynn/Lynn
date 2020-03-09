globalFontSize = 40;

var showRealData = JKB["能源管理"]["待应答企业"]


var table_data = {
    "title": "待应答企业",
    "data": [
        {
            "企业名称": "上海通用重工集团1",
            "联系人": "李二二",
            "联系电话": "13835352525"
        },
        {
            "企业名称": "上海通用重工集团2",
            "联系人": "李二二",
            "联系电话": "13835352525"
        },
        {
            "企业名称": "上海通用重工集团3",
            "联系人": "李二二",
            "联系电话": "13835352525"
        },
        {
            "企业名称": "上海通用重工集团4",
            "联系人": "李二二",
            "联系电话": "13835352525"
        }
    ]
};


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
        tabvar += "<button>联系人：" + table_data['data'][index]['联系人'] + "</button>";
        tabvar += "<button>联系电话：" + table_data['data'][index]['联系电话'] + "</button>";
        tabvar += "</div>";
        
        $('#regionContent').append(tabvar);
    }

    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
}
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