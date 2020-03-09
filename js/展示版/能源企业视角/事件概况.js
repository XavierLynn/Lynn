
var table_data = {
    "title": "张江南区概况",
    "data": {
        "value1": "XQXY20190819001",
        "value2": "漳化线12",
        "value3": "削峰事件",
        "value4": "供需调控",
        "value5": "6mw",
        "value6": "6.03mw",
        "value7": "2019.09.19 14:30",
        "value8": "25",
        "value9": "5.7万元",
        "value10": "24小时",
        "value11": "2019-09-20 12:30-14:50",
    }

};

var showRealData = ZSB["能源企业视角"]["事件概况"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-08&endDate=2019-12",
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

    $('#show_charts').empty()
    let tabvar = "";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>事件编号：</label>" + table_data['data']['value1'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>线路名称：</label>" + table_data['data']['value2'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>事件类型：</label>" + table_data['data']['value3'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>启动原因：</label>" + table_data['data']['value4'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>计划总需：</label>" + table_data['data']['value5'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>完成总量：</label>" + table_data['data']['value6'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>发起时间：</label>" + table_data['data']['value7'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>参与企业数：</label>" + table_data['data']['value8'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>总金额：</label>" + table_data['data']['value9'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>准备时间：</label>" + table_data['data']['value10'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>执行时间：</label>" + table_data['data']['value11'] + "</label>";
    tabvar += "</button>";
    $('#show_charts').append(tabvar);
    $('span').css("color", mainColor);
    $("#show_charts button").css("color", textColor)
    $(".titleCloumn").css("color", mainColor);
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
        url: "http://localhost:2277/ChartsService.asmx/"+jsonData['FunctionName'],
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