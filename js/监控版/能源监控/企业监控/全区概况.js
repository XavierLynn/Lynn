var showRealData = JKB["能源监控"]["企业监控"]["全区概况"]

var table_data = {
    "data": [{
        "title": "全区概况",
        "table": [
            [{ "name": "所在区域", "value": "张江科学城", "unit": "" },
                { "name": "行业数量", "value": "18", "unit": "" },
                { "name": "接入企业数量", "value": "719", "unit": "" },
                { "name": "面积", "value": "95", "unit": "km²" },
            ],
            [{ "name": "当月清洁能源消纳率", "value": "100%", "unit": "" },
                { "name": "当月清洁能源占比", "value": "36.51%", "unit": "" },
                { "name": "当月碳排放", "value": "407.0089", "unit": "万吨" },
                { "name": "上月经济增加值", "value": "600", "unit": "万元" },
            ],
            [{ "name": "当月能耗总量", "value": "3.76", "unit": "万tce" },
                { "name": "当月度电经济增加值", "value": "7.98", "unit": "万/kwh" },
                { "name": "当月万元产值能耗", "value": "109", "unit": "tce/万" },
                { "name": "当月单位建筑面积能耗", "value": "1000", "unit": "tce/km³" },
            ]
        ]
    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJK.asmx/GetEnteEnergyConsumptionMonthDetails",
        type: "POST",
        async: true,
        data: "elecID=1352958966&startDate=2019-12&endDate=2020-01",
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
    yiji_title.length=0;

    $('.nav').append("<li id='tag'>◀</li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    var table_values = table_data['data'][0]['table']
    $('.liLink').click(function() {
        $('#show_table').empty();
        for (var i = 0; i < table_values.length; i++) {
            //行间隔
            let tabvar = "";
            tabvar += " <tr style='height:100px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";

            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";

            tabvar += "    <td style='width:950px;height:50px;text-align:center'>";
            tabvar += "         <text class='label'>" + table_values[i][0]['value'] + "<span class='labelUnit'>" + " " + table_values[i][0]['unit'] + "</span>" + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:200px;'>";
            tabvar += "    </td>";

            tabvar += "    <td style='width:0px;text-align:center'>";
            tabvar += "         <text class='label'>" + table_values[i][1]['value'] + "<span class='labelUnit'>" + " " + table_values[i][1]['unit'] + "</span>" + "</text>";
            tabvar += "    </td>";


            tabvar += " </tr>";

            //第二行
            tabvar += "   <tr style='height:0px;padding:0px'>";

            tabvar += "     <td style='width:0px;text-align:center'>";
            tabvar += "       <text class='label2'>" + table_values[i][0]['name'] + "</text>";
            tabvar += "   </td>";

            //竖间隔
            tabvar += "    <td style='width:50px;'>";
            tabvar += "    </td>";

            tabvar += "     <td style='width:0px;text-align:center'>";
            tabvar += "       <text class='label3'>" + table_values[i][1]['name'] + "</text>";
            tabvar += "   </td>";
            tabvar += " </tr>";
            //行间隔
            tabvar += " <tr style='height:120px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";
            tabvar += "    <td style='width:0px;height:50px;text-align:center'>";
            tabvar += "         <text class='label'>" + table_values[i][2]['value'] + "<span class='labelUnit'>" + " " + table_values[i][2]['unit'] + "</span>" + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:100px;'>";
            tabvar += "    </td>";

            tabvar += "    <td style='width:750px;text-align:center'>";
            tabvar += "         <text class='label'>" + table_values[i][3]['value'] + "<span class='labelUnit'>" + " " + table_values[i][3]['unit'] + "</span>" + "</text>";
            tabvar += "    </td>";
            tabvar += " </tr>";

            //第二行
            tabvar += "   <tr style='height:0px;padding:0px'>";
            tabvar += "     <td style='width:0px;text-align:center'>";
            tabvar += "       <text class='label2'>" + table_values[i][2]['name'] + "</text>";
            tabvar += "   </td>";
            //竖间隔
            tabvar += "    <td style='width:0px;'>";
            tabvar += "       <text class='label2'></text>";
            tabvar += "    </td>";

            tabvar += "     <td style='width:200px;text-align:center'>";
            tabvar += "       <text class='label3'>" + table_values[i][3]['name'] + "</text>";
            tabvar += "   </td>";
            tabvar += "    <td></td>";

            tabvar += " </tr>";
            //行间隔
            tabvar += " <tr style='height:60px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            if (i == 0) {
                $('#show_table').append(tabvar);
            }
            if (i == 1) {
                $('#show_table1').empty();
                $('#show_table1').append(tabvar);

            }
            if (i == 2) {
                $('#show_table2').empty();
                $('#show_table2').append(tabvar);
            }
        }
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
        url: "http://localhost:2277/监控版/NYJK.asmx/"+jsonData['FunctionName'],
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