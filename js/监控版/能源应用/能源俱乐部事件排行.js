var showRealData = JKB["能源应用"]["能源俱乐部事件排行"]

var table_data = {
    "data": [{
        "title": "能源俱乐部事件排行",
        "table": [{
            "data": [{
                "headUrl": "../../../image/bgimg1.jpg",
                "name": "孙玲玲1",
                "shool": "华北电力大学",
                "position": "光伏、火电",
                "phone": "1353434344",
                "email": "15451561@qq.com",
                "num": "320",
                "remark": "xxx1982年毕业于南京邮电学院无线系微波通信专业，1985年获电子科技大学工学硕士学位。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。"
            }, {
                "headUrl": "../../../image/bgimg1.jpg",
                "name": "孙玲玲2",
                "shool": "华北电力大学",
                "position": "光伏、火电",
                "phone": "1353434344",
                "email": "15451561@qq.com",
                "num": "320",
                "remark": "xxx1982年毕业于南京邮电学院无线系微波通信专业，1985年获电子科技大学工学硕士学位。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。"
            }, {
                "headUrl": "../../../image/bgimg1.jpg",
                "name": "孙玲玲3",
                "shool": "华北电力大学",
                "position": "光伏、火电",
                "phone": "1353434344",
                "email": "15451561@qq.com",
                "num": "320",
                "remark": "xxx1982年毕业于南京邮电学院无线系微波通信专业，1985年获电子科技大学工学硕士学位。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。"
            }, {
                "headUrl": "../../../image/bgimg1.jpg",
                "name": "孙玲玲4",
                "shool": "华北电力大学",
                "position": "光伏、火电",
                "phone": "1353434344",
                "email": "15451561@qq.com",
                "num": "320",
                "remark": "xxx1982年毕业于南京邮电学院无线系微波通信专业，1985年获电子科技大学工学硕士学位。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。"
            }, {
                "headUrl": "../../../image/bgimg1.jpg",
                "name": "孙玲玲5",
                "shool": "华北电力大学",
                "position": "光伏、火电",
                "phone": "1353434344",
                "email": "15451561@qq.com",
                "num": "320",
                "remark": "xxx1982年毕业于南京邮电学院无线系微波通信专业，1985年获电子科技大学工学硕士学位。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。"
            }, {
                "headUrl": "../../../image/bgimg1.jpg",
                "name": "孙玲玲6",
                "shool": "华北电力大学",
                "position": "光伏、火电",
                "phone": "1353434344",
                "email": "15451561@qq.com",
                "num": "320",
                "remark": "xxx1982年毕业于南京邮电学院无线系微波通信专业，1985年获电子科技大学工学硕士学位。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。1985年3月至2016年9月一直在杭州电子科技大学工作。"
            }]
        }]
    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYYY.asmx/GetRegionFQXFPM",
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
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.liLink').click(function() {
        $('#show_table').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        var index = $(this).index() - 1;
        for (let i = 0; i < table_data['data'][index]['table'].length; i++) {
            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                let tabvar = "";
                tabvar += "<table class='tableItem'>";
                tabvar += "<tr>";
                tabvar += "<td class='headPanel' rowspan='2'> <image class='head' src=" + table_data['data'][index]['table'][i]['data'][j]['headUrl'] + "></image> </td>";
                tabvar += "<td class='shadowContent'>" + table_data['data'][index]['table'][i]['data'][j]['shool'] + "</td>";
                tabvar += "<td class='shadowContent' >" + table_data['data'][index]['table'][i]['data'][j]['phone'] + "</td>";
                tabvar += "<td class='shadowContent' >" + table_data['data'][index]['table'][i]['data'][j]['email'] + "</td>";
                tabvar += "<td class='tipPanel'> <span class='tip'>" + table_data['data'][index]['table'][i]['data'][j]['num'] + "</span></td>";
                tabvar += "</tr>"
                tabvar += "<tr>";
                tabvar += "<td colspan='6' class='content'>简介：" + table_data['data'][index]['table'][i]['data'][j]['remark'] + "</td>";
                tabvar += "</tr>"
                tabvar += "<tr>";
                tabvar += "<td class='shadowContent' style='text-align:center' >" + table_data['data'][index]['table'][i]['data'][j]['name'] + "</td>";
                tabvar += "<td  class='content' style='font-Size:60px'>研究领域：" + table_data['data'][index]['table'][i]['data'][j]['position'] + "</td>";
                tabvar += "</tr>"
                tabvar += "</table>";
                $('#show_table').append(tabvar);
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
        url: "http://localhost:2277/监控版/NYYY.asmx/"+jsonData['FunctionName'],
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