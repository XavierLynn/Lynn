var showRealData = JKB["能源服务"]["报告订单服务"]

var table_data = {
    "data": [{
        "title": "分析报告服务概况",
        "table": [{
            "rowHeader": [{
                    "headerName": "本月订单",
                    "vaule": '65',
                },
                {
                    "headerName": "本月金额",
                    "vaule": '6.5万',
                },
                {
                    "headerName": "待处理订单",
                    "vaule": '11',
                },
            ],
        }]
    }]
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFW.asmx/GetEnteEnergyConsumptionMonth",
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

    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
  
    $('.liLink').click(function() {
        $('#show_table').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        var index = $(this).index() - 1;
        for (let i = 0; i < table_data['data'][index]['table'].length; i++) {
            let tabvar = "";
            tabvar += "<div class='table'>";
            tabvar += "<table class='table-header'>";
            tabvar += "<tr>";
            // 添加 表的列名
            for (let j = 0; j < table_data['data'][index]['table'][i]['rowHeader'].length; j++) {
                var currentHeader = table_data['data'][index]['table'][i]['rowHeader'][j]
                var currentValue = currentHeader['vaule']
                if (currentValue.search("万") != -1) {
                    currentValue = currentValue.split("万").join("<span style = 'font-size:44px; font-family: 黑体'>" + "万" + "</span>");
                }
                tabvar += "<td style='padding-bottom:0px'>" + currentHeader['headerName'] + "<span style = 'word-spacing:60px'>" + ' ' + "</span>" + "<span style = 'font-size:88px;padding-top:10px 5px 5px 20px;text-align:center;font-family:庞门正道标题体'>" + currentValue + "</span>" + "</td>";
            }
            tabvar += "</tr>";
            tabvar += "</table>";
            tabvar += "</div>";
            $('#show_table').append(tabvar);
        }

    })
    $('.liLink')[0].click();
    $('.nav a')[0].click();


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
        url: "http://localhost:2277/监控版/NYFW.asmx/"+jsonData['FunctionName'],
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