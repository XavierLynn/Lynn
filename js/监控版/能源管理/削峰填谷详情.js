var showRealData = JKB["能源管理"]["削峰填谷详情"]

var table_data = {
    "data": [{
        "title": "日月光半导体",
        "tableValue": [{
                "tr": [
                    { "td1": "线路名称", "td2": "启动原因", "td3": "所属电站" }, { "td1": "张化线13", "td2": "高温", "td3": "漕汐变电站" }
                ]

            },
            {
                "tr": [
                    { "td1": "电压等级", "td2": "总激励金", "td3": "价格策略" }, { "td1": "110kv", "td2": "7.8万", "td3": "0.3元/kwh" }
                ]

            },
            {
                "tr": [
                    { "td1": "发布时间", "td2": "计划总量", "td3": "初始线路负载" }, { "td1": "2019.09.09 14:34", "td2": "6mw", "td3": "109%" }
                ]

            },
            {
                "tr": [
                    { "td1": "执行时间", "td2": "完成总量", "td3": "完成线路负载" }, { "td1": "2019.09.10 12:00", "td2": "-------", "td3": "------" }
                ]

            }
        ],

    }]
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

    tableValues = table_data['data'][0]['tableValue'];
    // alert(tableValues)
    $('.nav').append("<li id='tag'>◀</li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.liLink').click(function() {
        $('#show_table').empty();
        var tabvar = "";
        //行间隔
        //第一行
        var labelValue1 = "         <text class='label'><span style='font-size:40px'>◉ </span>";
        var labelValue2 = "         <text class='label2'>";
        var labelValue = ""
        for (var i = 0; i < tableValues.length; i++) {

            tabvar += " <tr style='height:50px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";

            for (var j = 0; j < tableValues[i]["tr"].length; j++) {
                // labelValue = labelValue1
                if (j == 0) {
                    labelValue = labelValue1
                } else {
                    labelValue = labelValue2
                }
                tabvar += "  <tr style='height:0px;padding:0px,'>";
                tabvar += "    <td style='width:50px;'>";
                tabvar += "    </td>";
                tabvar += "    <td style='width:650px;height:0px;text-align:left'>";
                tabvar += labelValue + tableValues[i]["tr"][j]['td1'] + "</text>";
                tabvar += "    </td>";
                tabvar += "    <td style='width:50px;'>";
                tabvar += "    </td>";
                tabvar += "    <td style='width:500px;text-align:left'>";
                tabvar += labelValue + tableValues[i]["tr"][j]['td2'] + "</text>";
                tabvar += "    </td>";
                tabvar += "    <td style='width:50px;'>";
                tabvar += "    </td>";
                tabvar += "    <td style='width:500px;text-align:left'>";
                tabvar += labelValue + tableValues[i]["tr"][j]['td3'] + "</text>";
                tabvar += "    </td>";
                tabvar += " </tr>";
            }
        }
        $('#show_table').append(tabvar);
        $(".label").css({ "color": c1 });
        // $(".label2").css({ "text-shadow": ctd, "color": c3 })

    })
    $('.liLink')[0].click();
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