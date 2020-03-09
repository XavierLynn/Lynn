var showRealData = ZSB["能源服务市场"]["需求-商品成交转换率"];

var table_data = {
    "data": [{
        "title": "需求成交转换率",
        "data": [
            [
                { value: "节能改造" },
                { value: "访客" },
                { value: "100" },
                { value: "意向" },
                { value: "82.34" },
                { value: "成交" },
                { value: "34.98" }
            ],
            [
                { value: "设备租赁" },
                { value: "访客" },
                { value: "100" },
                { value: "意向" },
                { value: "88.17" },
                { value: "成交" },
                { value: "66.77" }
            ],
            [
                { value: "用能咨询" },
                { value: "访客" },
                { value: "100" },
                { value: "意向" },
                { value: "51.98" },
                { value: "成交" },
                { value: "38.69" }
            ],
            [
                { value: "用能诊断" },
                { value: "访客" },
                { value: "100" },
                { value: "意向" },
                { value: "31.76" },
                { value: "成交" },
                { value: "11.29" }
            ]
        ]
    }, {
        "title": "商品成交转换率",
        "data": [
            [
                { value: "节能改造" },
                { value: "访客" },
                { value: "55.22" },
                { value: "意向" },
                { value: "82.34" },
                { value: "成交" },
                { value: "100" }
            ],
            [
                { value: "节能改造2" },
                { value: "访客" },
                { value: "15.2" },
                { value: "意向" },
                { value: "82.34" },
                { value: "成交" },
                { value: "89.22" }
            ],
            [
                { value: "节能改造3" },
                { value: "访客" },
                { value: "55.22" },
                { value: "意向" },
                { value: "82.34" },
                { value: "成交" },
                { value: "92.55" }
            ],
            [
                { value: "节能改造4" },
                { value: "访客" },
                { value: "100" },
                { value: "意向" },
                { value: "74.02" },
                { value: "成交" },
                { value: "20.5" }
            ]
        ]
    }]
}
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/NYFWSC.asmx/GetQuYuDWMJNH",
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
   
   
    yiji_title.length = 0;
    $('.nav').empty()


    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({ "background-color": mainColor })
    for (var i = 0; i < yiji_title.length; i++) {
        //const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    //添加数据
    $('.nav a').click(function() {
        var yiji;
        // var erji_index;
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                //erji_index = i;
                var tabvar = "";
                if (table_data['data'][i]['title'] === yiji) {
                    for (let j = 0; j < table_data['data'][i]['data'].length; j++) {
                        tabvar += "<tr>";
                        tabvar += "   <td colspan=6 class='erjiTitle'>" + table_data['data'][i]['data'][j][0]["value"] + "</td>";
                        tabvar += "  </tr>";
                        tabvar += "  <tr>";
                        tabvar += "  <td class='panelCell' colspan=2>";
                        tabvar += "       <div class='chartCell'>";
                        tabvar += "        <div class='barCell' style='width:" + table_data['data'][i]['data'][j][2]["value"] + "%'></div>";
                        tabvar += "        </div>";
                        tabvar += "    </td>";
                        tabvar += "     <td class='panelCell' colspan=2>";
                        tabvar += "        <div class='chartCell'>";
                        tabvar += "       <div class='barCell' style='width:" + table_data['data'][i]['data'][j][4]["value"] + "%'></div>";
                        tabvar += "    </div>";
                        tabvar += "  </td>";
                        tabvar += "    <td class='panelCell' colspan=2>";
                        tabvar += "        <div class='chartCell'>";
                        tabvar += "            <div class='barCell' style='width:" + table_data['data'][i]['data'][j][6]["value"] + "%'></div>";
                        tabvar += "       </div>";
                        tabvar += "    </td>";
                        tabvar += " </tr>";
                        tabvar += "  <tr>";
                        tabvar += "     <td class='contentCell'>" + table_data['data'][i]['data'][j][1]["value"] + "</td>";
                        tabvar += "     <td class='valueCell'>" + table_data['data'][i]['data'][j][2]["value"] + "%</td>";
                        tabvar += "     <td class='contentCell'>" + table_data['data'][i]['data'][j][3]["value"] + "</td>";
                        tabvar += "     <td class='valueCell'>" + table_data['data'][i]['data'][j][4]["value"] + "%</td>";
                        tabvar += "     <td class='contentCell'>" + table_data['data'][i]['data'][j][5]["value"] + "</td>";
                        tabvar += "     <td class='valueCell'>" + table_data['data'][i]['data'][j][6]["value"] + "%</td>";
                        tabvar += "  </tr>";

                    }
                }
            }
        }
        $('#show_table').empty();
        $('#show_table').append(tabvar);
        //延迟刷新
        $('.contentCell').css("color", mainColor);
        $('.barCell').css("background", mainColor);
        $('.valueCell').css("color", textColor);
        setTimeout(function() { $('body').css('background-color', 'rgba(0,0,0,0.01)') }, 500);
    });
    $('.nav a')[0].click();
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
        url: "http://localhost:2277/展示版/NYFWSC.asmx/"+jsonData['FunctionName'],
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