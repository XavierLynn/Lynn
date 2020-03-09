globalFontSize = 40;

   //使用模拟数据
var table_data = {
    "data": [{
        "title": "历史评价",
        "table": [{
            "title": "总",
            "unit": "tce",
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                        "xLabel": "设备销售",
                        "yLabel": 25
                    },

                    {
                        "xLabel": "设备租赁",
                        "yLabel": 30
                    },
                    {
                        "xLabel": "用能诊断",
                        "yLabel": 20
                    },
                    {
                        "xLabel": "用能咨询",
                        "yLabel": 90
                    },
                    {
                        "xLabel": "电能替代",
                        "yLabel": 30
                    },
                    {
                        "xLabel": "合同能源管理",
                        "yLabel": 23
                    },
                    {
                        "xLabel": "节能改造",
                        "yLabel": 40
                    },
                    {
                        "xLabel": "能源供应",
                        "yLabel": 32
                    },
                    {
                        "xLabel": "能源供应",
                        "yLabel": 26
                    },


                ]
            }, ]
        }]
    }, ]
};
var showRealData = ZSB["能源服务市场"]["历史评价"];

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
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    $(".filterBtn").css({ " background-color": mainColor });
    $(".filterBtnSelected").css({ " background-color": mainColor });
    $('.filterBtn').click(function() {
        $(".filterBtn").removeClass("filterBtnSelected");
        $(this).addClass("filterBtnSelected");
    });
    $(".nav a").css({ "color": textColor });
    $(".starCell").css({ "color": mainColor });
    $(".line").css({ "background-color": mainColor });
    $("td").css({ "color": textColor });
    $("table").css({ "background-color": mainGraStart });
    $(".filterBtn").css({ "background-color": shadowColor });
    $(".filterBtnSelected").css({ "background-color": mainColor });
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
}

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

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};