var showRealData = JKB["能源交易"]["交易总览"]["能源服务商列表"]

var table_data = {
    "data": [{
        "title": "能源服务商列表",
        "table": [{
            "data": [{
                "name": "上海通共能源服务公司",
                "mainBusiness": "电脑图文设计制作、企业形象策划、展览展示服务、市场调研、摄影服务、资料翻译服务、礼仪服务、赛事活动策划、公关活动策划、快递服务、室内保洁服务、婚庆礼仪服务、餐饮管理、其他居民服务、市政工程配套服务",
                "score": "4.55",
                "star": "★★★★",
                "noStar": "★"
            }, {
                "name": "上海通共能源服务公司",
                "mainBusiness": "1电脑图文设计制作、企业形象策划、展览展示服务、市场调研、摄影服务、资料翻译服务、礼仪服务、赛事活动策划、公关活动策划、快递服务、室内保洁服务、婚庆礼仪服务、餐饮管理、其他居民服务、市政工程配套服务",
                "score": "4.55",
                "star": "★★★★",
                "noStar": "★"
            }, {
                "name": "上海通共能源服务公司",
                "mainBusiness": "2电脑图文设计制作、企业形象策划、展览展示服务、市场调研、摄影服务、资料翻译服务、礼仪服务、赛事活动策划、公关活动策划、快递服务、室内保洁服务、婚庆礼仪服务、餐饮管理、其他居民服务、市政工程配套服务",
                "score": "4.55",
                "star": "★★★★",
                "noStar": "★"
            }, {
                "name": "上海通共能源服务公司",
                "mainBusiness": "3电脑图文设计制作、企业形象策划、展览展示服务、市场调研、摄影服务、资料翻译服务、礼仪服务、赛事活动策划、公关活动策划、快递服务、室内保洁服务、婚庆礼仪服务、餐饮管理、其他居民服务、市政工程配套服务",
                "score": "4.55",
                "star": "★★★★",
                "noStar": "★"
            }, {
                "name": "上海通共能源服务公司",
                "mainBusiness": "4电脑图文设计制作、企业形象策划、展览展示服务、市场调研、摄影服务、资料翻译服务、礼仪服务、赛事活动策划、公关活动策划、快递服务、室内保洁服务、婚庆礼仪服务、餐饮管理、其他居民服务、市政工程配套服务",
                "score": "4.55",
                "star": "★★★★",
                "noStar": "★"
            }, {
                "name": "上海通共能源服务公司",
                "mainBusiness": "5电脑图文设计制作、企业形象策划、展览展示服务、市场调研、摄影服务、资料翻译服务、礼仪服务、赛事活动策划、公关活动策划、快递服务、室内保洁服务、婚庆礼仪服务、餐饮管理、其他居民服务、市政工程配套服务",
                "score": "4.55",
                "star": "★★★★",
                "noStar": "★"
            }]
        }]
    }]
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
                // tabvar += "<table class='tableItem'>";
                // tabvar += "<tr>";
                // tabvar += "<th class='headPanel' rowspan='2'> <image class='head' src=" + table_data['data'][index]['table'][i]['data'][j]['headUrl'] + "></image> </th>";
                // tabvar += "<th >" + table_data['data'][index]['table'][i]['data'][j]['name'] + "</th>";
                // tabvar += "<th >" + table_data['data'][index]['table'][i]['data'][j]['shool'] + "</th>";
                // tabvar += "<th >" + table_data['data'][index]['table'][i]['data'][j]['position'] + "</th>";
                // tabvar += "<th >" + table_data['data'][index]['table'][i]['data'][j]['phone'] + "</th>";
                // tabvar += "<th >" + table_data['data'][index]['table'][i]['data'][j]['email'] + "</th>";
                // tabvar += "<th class='tipPanel'> <span class='tip'>" + table_data['data'][index]['table'][i]['data'][j]['num'] + "</span></th>";
                // tabvar += "</tr>"
                // tabvar += "<tr>";
                // tabvar += "<th colspan='6'>" + table_data['data'][index]['table'][i]['data'][j]['remark'] + "</th>";
                // tabvar += "</tr>"
                // tabvar += "</table>";
                tabvar += "  <table class='tableItem'>";
                tabvar += "  <tr>";
                tabvar += "     <td style='vertical-align: bottom '>";
                tabvar += "     <text class='headCell'>" + table_data['data'][index]['table'][i]['data'][j]['name'] + "";
                tabvar += "         </text>";
                tabvar += "   </td>";
                tabvar += "     <td rowspan='3'><span class='verticalSpitLine'></span></td>";
                tabvar += "   </tr>";
                tabvar += "    <tr>";
                tabvar += "        <td rowspan='2' style='vertical-align: top'>";
                tabvar += "      <text class='contntCell'>";
                tabvar += " " + table_data['data'][index]['table'][i]['data'][j]['mainBusiness'] + "";
                tabvar += "     </text>";
                tabvar += "  </td>";
                tabvar += "   <td class='scoreCell'>4.12</td>";
                tabvar += "  </tr>";
                tabvar += "  <tr>";
                tabvar += "     <td class='centerCell' style='vertical-align:top'>";
                tabvar += "       <div><text class='starCell'>" + table_data['data'][index]['table'][i]['data'][j]['star'] + "</text><text class='noStarCell'>" + table_data['data'][index]['table'][i]['data'][j]['noStar'] + "</text></div>";
                tabvar += "   </td>";
                tabvar += "  </tr>";
                tabvar += "   </table>";
                $('#show_table').append(tabvar);
            }
        }
        // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
        // 滑动效果当满足这个条件时，自动添加高度并触发
        for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 3) {
                $(".table-body").css('height', "1650px");
            }
        }
        $('.table-body tr').click(function() {
            $(this).children().attr("class", "unSelectedCell");
        });
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
