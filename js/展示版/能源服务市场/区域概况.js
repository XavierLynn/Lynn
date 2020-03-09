globalFontSize = 40;
globalFontColor = textColor;

var table_data = {
    "data": [{
            "title": "区域概况",
            "table": [
                {"title": "接入企业", "xLabel": "户", "yLabel": 719},
                {"title": '面积',  "xLabel": "m²", "yLabel": 95 },
                {"title": '去年经济增加值', "xLabel": "", "yLabel": "0"}, 
                {"title": '清洁能源占比', "xLabel": "", "yLabel": "0"}
            ]
        }
    ]   
};
var showRealData = ZSB["能源服务市场"]["区域概况"];
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

    $('.nav a').click(function() {
        $(".nav a").css({ "color": textColor })
        var yiji;
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
                }
                break
            }
        }

        $('.erji_title').append(function() {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];

            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;

            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                           var res={"value":table_data['data'][i]['table'][j]["yLabel"],
                                    "name":table_data['data'][i]['table'][j]["xLabel"],}
                            y_data.push(res);  
                        }  
                    }
            }
            currentData = table_data["data"][0]["table"]
            var center = [['12%', '35%'],['37%', '35%'],['63%', '35%'],['88%', '35%'],]
            for (var i = 0;i<currentData.length;i++)
            {
                series.push({
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data:[y_data[i].value],
                    radius: ['38%', '45%'],
                    center: center[i],
                    itemStyle: {
                        normal: {
                            borderRadius: [15, 15, 15, 15],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: mainGraApl },
                                { offset: 1, color: mainGraApl }
                            ], false),
                        }
                    },

                    label: {
                        show: true,
                        formatter: function (params) {
                            for(var j = 0;j<currentData.length;j++){
                                value = params.value
                                if( value  == y_data[j].value){
                                    name = y_data[j].name
                                }
                                if(value == 0){
                                    value = "____"
                                }
                            }
                            return value+ "\n"+ "{a|"+name+"}"
                        },
                        rich:{
                            a:{
                                color:"#ffffff",
                                fontSize:40
                            }

                        },
                        position: 'center',
                        fontSize: 60,
                        color: '#FFFFFF',
                        padding: [5, 0, 0, 0],

                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    hoverOffset: 0,
                    minAngle: 20,
                }
                )
            }
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
     

                legend: {
                    show: false,
                    orient: 'vertical',
                    right: '0',
                    x: 'left',
                    y: 'bottom',
                    bottom: '50px',
                 
                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: ['aa', 'bb', 'cc', 'dd'],
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
               
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(255,255,255,0.1)' },
               
                    { offset: 1, color: 'rgba(255,255,255,0.25)' }
                ], false),
            
                series: series,
                //animationDuration: 0
                animation: false,
                animationThreshold: 100,
                animationDurationUpdate: function(idx) {
                    // 越往后的数据延迟越大
                    return idx * 1000;
                },
            };
 
            myChart.setOption(option);

        });
        //$('.erji_title a')[0].click();
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

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};

