var showRealData = JKB["能源交易"]["交易总览"]["商品成交转换率"]

var table_data = {
    "title": "商品成交转换率",
    "data": [
        [
            { value: "节能改造" },
            { value: "访客" },
            { value: "100" },
            { value: "意向" },
            { value: "82.34" },
            { value: "成交" },
            { value: "55.22" }
        ],
        [
            { value: "节能改造2" },
            { value: "访客" },
            { value: "100" },
            { value: "意向" },
            { value: "82.34" },
            { value: "成交" },
            { value: "55.22" }
        ],
        [
            { value: "节能改造3" },
            { value: "访客" },
            { value: "100" },
            { value: "意向" },
            { value: "82.34" },
            { value: "成交" },
            { value: "55.22" }
        ],
        [
            { value: "节能改造4" },
            { value: "访客" },
            { value: "100" },
            { value: "意向" },
            { value: "82.34" },
            { value: "成交" },
            { value: "55.22" }
        ]
    ]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJY.asmx/GetRegionFQXFPM",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-12&endDate=2020-01",
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

    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li class='liLink' role='presentation'><a href='#' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "</a></li>")
        // 添加数据
    let tabvar = "";
    for (let i = 0; i < table_data['data'].length; i++) {
        tabvar += "<tr>";
        tabvar += "   <td colspan=6 class='erjiTitle'>" + table_data['data'][i][0]["value"] + "</td>";
        tabvar += "  </tr>";
        tabvar += "  <tr>";
        tabvar += "  <td class='panelCell' colspan=2>";
        tabvar += "       <div class='chartCell'>";
        tabvar += "        <div class='barCell' style='width:" + table_data['data'][i][2]["value"] + "%'></div>";
        tabvar += "        </div>";
        tabvar += "    </td>";
        tabvar += "     <td class='panelCell' colspan=2>";
        tabvar += "        <div class='chartCell'>";
        tabvar += "       <div class='barCell' style='width:" + table_data['data'][i][4]["value"] + "%'></div>";
        tabvar += "    </div>";
        tabvar += "  </td>";
        tabvar += "    <td class='panelCell' colspan=2>";
        tabvar += "        <div class='chartCell'>";
        tabvar += "            <div class='barCell' style='width:" + table_data['data'][i][6]["value"] + "%'></div>";
        tabvar += "       </div>";
        tabvar += "    </td>";
        tabvar += " </tr>";
        tabvar += "  <tr>";
        tabvar += "     <td class='contentCell'>" + table_data['data'][i][1]["value"] + "</td>";
        tabvar += "     <td class='valueCell'>" + table_data['data'][i][2]["value"] + "%</td>";
        tabvar += "     <td class='contentCell'>" + table_data['data'][i][3]["value"] + "</td>";
        tabvar += "     <td class='valueCell'>" + table_data['data'][i][4]["value"] + "%</td>";
        tabvar += "     <td class='contentCell'>" + table_data['data'][i][5]["value"] + "</td>";
        tabvar += "     <td class='valueCell'>" + table_data['data'][i][6]["value"] + "%</td>";
        tabvar += "  </tr>";

    }

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
        url: "http://localhost:2277/监控版/NYJY.asmx/"+jsonData['FunctionName'],
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