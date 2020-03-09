
var table_data = {
    "data": [{
        "title": "标签全生命周期",
        "data": [
            {
                "index":0,
                "statusName": "创建中",
                "value": 123
            },
            {
                "index":1,
                "statusName": "发布中",
                "value": 11
            },
            {
                "index":2,
                "statusName": "停用中",
                "value": 23
            },
            {
                "index": 3,
                "statusName": "运行中",
                "value": 11
            },
            {
                "index": 4,
                "statusName": "待执行/暂停",
                "value": 1
            }
        ]
    }]
};

var showRealData = JKB["驾驶舱"]["标签生命周期"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-01&endDate=2019-12",
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
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

function Flush(){
    $('#myTabs').empty();
    $('#myTabs').append("<ul class='nav nav-tabs' role='tablist'><li id='tag'>◀</li><li class='liLink' role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>标签全生命周期</a></li></ul>")
    $('#myTabs').append("<button class='chooseButton' type='button'>评估</button>")
    for (let i = 0; i < 5; i++) {

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
        url: "http://localhost:2277/监控版/JSC.asmx/"+jsonData['FunctionName'],
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