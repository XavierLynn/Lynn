
var showRealData = JKB["能源服务"]["接入服务-订单状态"]
var table_data = {
    "data": [{
        "title": "标签全生命周期",
        "data": [
            {
                "index":0,
                "statusName": "待受理",
                "value": 123
            },
            {
                "index":1,
                "statusName": "未付款",
                "value": 11
            },
            {
                "index":2,
                "statusName": "已付款 实施中",
                "value": 23
            },
            {
                "index": 3,
                "statusName": "已办结",
                "value": 11
            },
            {
                "index": 4,
                "statusName": "已退回",
                "value": 11
            },
            {
                "index": 5,
                "statusName": "已关闭",
                "value": 11
            },
            {
                "index": 6,
                "statusName": "待审核退款",
                "value": 11
            },
            {
                "index": 7,
                "statusName": "退款成功"+"<br>" +"已关闭",
                "value": 1
            }
        ]
    }]
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFW.asmx/GetEnteEnergyConsumptionMonth",
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


    $('.nav').empty()
    $('#myTabs').empty();
    $('#myTabs').append( "<ul class='nav nav-tabs' role='tablist'><li id='tag'>◀</li><li class='liLink' role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>订单状态</a></li></ul>")

    for (let i = 0; i < 8; i++) {
        let button = "";

        button += "<button";
        button += " ";
        button += "class= 'myButton button_"+table_data['data'][0]['data'][i]['index'] + "'";;
        button += " ";
        button += "type = 'button'";
        button += ">";
        button += table_data['data'][0]['data'][i]['statusName'];
        button += "<br/>";
        button += table_data['data'][0]['data'][i]['value'];

        button += "</button>"

        $('#myTabs').append(button);
    }
    $(".myButton").click(function () {
        $(this).siblings().removeClass('checkedButton');
        $(this).addClass('checkedButton');
    });

   // setTimeout(function () { $('body').css('background-color', 'rgba(0,0,0,0.01)') }, 500);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFW.asmx/"+jsonData['FunctionName'],
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