
var showRealData = JKB["能源分析"]["异常用能分析"]["人工复查结果"]

var table_data = {
    "title": "人工复检结果",
    "data": {
        "联系人": "张三",
        "联系方式": "13548484848",
        "确认原因": "设备老化",
        "复查人": "里斯",
        "复查日期": "2019-05-31",
        "核查单位": "XXX科技有限公司",
        "备注说明": "设备坏了，需要换新设备设备坏了，需要换新设备设备坏了，需要换新设备设备坏了，需要换新设备设备坏了，需要换新设备设备坏了，需要换新设备",
    }
};  

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetEnteEnergyConsumptionMonth",
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

    yiji_title.length = 0;
    $('.nav').empty()


    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data["title"] + "</a></li>");

    let tabvar = "";
        tabvar += "<table class='dataTable'>";
        tabvar += "<tr>";
        tabvar += " <td width='500px'>";
        tabvar += "<label class='columnTitle'>联系人</label>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td width='570px'>";
        tabvar += "<label class='columnTitle'>联系方式</label>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td>";
        tabvar += "<label class='columnTitle'>确认原因</label>";
        tabvar += "</td>";
        tabvar += "</tr>";
        tabvar += "<tr>";
        tabvar += "<td width='500px'>";
        tabvar += "<input class='columnContent' type='text' value='" + table_data["data"]["联系人"] + "'></input>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td width='570px'>";
        tabvar += "<input class='columnContent' type='text' value='" + table_data["data"]["联系方式"] + "'></input>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td>";
        tabvar += "<input class='columnContent' type='text' value='" + table_data["data"]["确认原因"] + "'></input>";
        tabvar += "</td>";
        tabvar += "</tr>";
        tabvar += "<tr>";
        tabvar += "<td width='500px'>";
        tabvar += "<label class='columnTitle'>复查人</label>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td width='570px'>";
        tabvar += "<label class='columnTitle'>复查日期</label>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td>";
        tabvar += "<label class='columnTitle'>核查单位</label>";
        tabvar += "</td>";
        tabvar += "</tr>";
        tabvar += "<tr>";
        tabvar += "<td width='500px'>";
        tabvar += "<input class='columnContent' type='text' value='" + table_data["data"]["复查人"] + "'></input>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td width='570px'>";
        tabvar += "<input class='columnContent' type='text' value='" + table_data["data"]["复查日期"] + "'></input>";
        tabvar += "</td>";
        tabvar += "<td width='118px'></td>";
        tabvar += "<td>";
        tabvar += "<input class='columnContent' type='text' value='" + table_data["data"]["核查单位"] + "'></input>";
        tabvar += "</td>";
        tabvar += "</tr>";
        tabvar += "<tr>";
        tabvar += "<td colspan='5'>";
        tabvar += "<label class='columnTitle'>备注说明</label>";
        tabvar += "</td>";
        tabvar += "</tr>";
        tabvar += "<tr>";
        tabvar += "<td colspan='5'>";
        tabvar += "<textarea>" + table_data["data"]["备注说明"] + "</textarea>";
        tabvar += "</td>";
        tabvar += "</tr>";
        tabvar += "</table>";
    $('#show_table').empty();
    $('#show_table').append(tabvar);
    //延迟刷新
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
        url: "http://localhost:2277/监控版/NYFX.asmx/"+jsonData['FunctionName'],
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