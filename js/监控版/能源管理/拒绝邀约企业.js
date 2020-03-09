var showRealData = JKB["能源管理"]["拒绝邀约企业"]
var table_data = {
    "data": [{
        "title": "拒绝邀约企业",
        "table": [{
            "data": [{
                "企业名称": "XX上海技术有限公司1",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            }, {
                "企业名称": "XX上海技术有限公司2",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            },{
                "企业名称": "XX上海技术有限公司3",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            },{
                "企业名称": "XX上海技术有限公司4",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            },{
                "企业名称": "XX上海技术有限公司5",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            },{
                "企业名称": "XX上海技术有限公司6",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            },{
                "企业名称": "XX上海技术有限公司7",
                "拒绝原因": "设备出问题，正在送报预计7个工作日返回现场所以不能参与此次削峰填谷事件。"
            },]
        }]
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
    yiji_title.length = 0;

    $('.nav').append("<li id='tag'>◀</li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.liLink').click(function() {
        $('#contentDiv').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        var index = $(this).index() - 1;
        for (let i = 0; i < table_data['data'][index]['table'].length; i++) {
            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                let tabvar = "";
                tabvar += "<table class='tableItem'>";
                tabvar += "<tr style='height:80px;'>";
                tabvar += "<td class='shadowContent'>" + table_data['data'][index]['table'][i]['data'][j]['企业名称'] + "</td>";
                tabvar += "</tr>"
                tabvar += "<tr >";
                tabvar += "<td  class='content'>简介：" + table_data['data'][index]['table'][i]['data'][j]['拒绝原因'] + "</td>";
                tabvar += "</tr>"
                tabvar += "</table>";
                $('#contentDiv').append(tabvar);
            }
        }
        // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
        // 滑动效果当满足这个条件时，自动添加高度并触发
        for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 6) {
                $(".table-body").css('height', "636px");
            }
        }
        $('.table-body tr').click(function() {
            $(this).children().attr("class", "unSelectedCell");
        });
    })
    $('.typeBtn').click(function() {
        $(".typeBtn").removeClass("btnSelected");
        $(this).addClass("btnSelected");
        // switch ($(this).text()) {
        //     case "分布图":
        //         // showQYPoints();
        //         hidePowerStream();
        //         hideHeatMap();
        //         break;
        //     case "热力图":
        //         showHeatMap();
        //         hidePowerStream();
        //         break;
        //     case "能流图":
        //         showPowerStream();
        //         hideHeatMap();
        //         break;
        // }
    })
    $('.liLink')[0].click();
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