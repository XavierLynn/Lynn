globalFontSize = 40;

var interval
var showRealData = JKB["能源分析"]["异常用能分析"]["异常事件详情"]

var table_data = {
    "data": [{
        "title": "异常事件详情",
        "table": [
            {"title": '2019-06-06 24:00',  "xLabel": "特征提取", "yLabel": "" },
            {"title": '2019-06-06 12:00', "xLabel": "异常辨识", "yLabel": ""}, 
            {"title": '2019-06-06 13:00', "xLabel": "原因预判", "yLabel": ""},
            {"title": '2019-06-06 15:00', "xLabel": "现场排查", "yLabel": ""}]
    }, ]
};


$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetEnteEnergyConsumptionMonth",
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
    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }


    $('.nav').append("<li id='tag'>◀</li>");
    
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }

    $('.nav a').click(function() {
        
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
            arrayValue = [];
            series.length = 0;
            arrayValue.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            $('.erji_title a').css({ "color": c8, "text-shadow": th1 })
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        arrayValue.push([{
                            value: table_data['data'][i]['table'][j]['xLabel'],
                            name: table_data['data'][i]['table'][j]['yLabel'],

                        }])
                    }
                }
            }
            radiusCenters = [
                ['14%', '42%'],
                ['38%', '42%'],
                ['62.5%', '42%'],
                ['86.5%', '42%'],

            ]
            for (var i = 0; i < arrayValue.length; i++) {
               
                series.push({
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,

                    data: arrayValue[i],
                    radius: ['42%', '52%'],
                    center: radiusCenters[i],
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                   

                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0)',
                        }
                    },
                    label: {
                        show: true,
                        formatter: arrayValue[i][0]['value'].substring(0,2) + '\n' + arrayValue[i][0]['value'].substring(2,4),
                        position: 'center',
                        fontSize: 100,
                        color: c1,
                        padding: [5, 0, 0, 0],
                        textShadowBlur: 30,
                        textShadowColor: h1,
                        fontFamily: '黑体',
                        fontWeight: 'bold',
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
                }, )
            }

            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
             
                graphic: [{
                        // id: 'logo',
                        type: 'image',
                        left: 105,
                        top: 0,
                        z: -10,
                        // position: [155, 10],
                        // x: -115,
                        bounding: 'raw',
                        origin: [250, 250],

                        style: {
                            image: '../../../../image/能源交易/1环.png',
                            width: 500,
                            height: 500,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: 620,
                        top: 200,
                        z: 0,
                        // position: [155, 10],
                        // x: -115,
                        bounding: 'raw',
                        //origin: [210, 210],

                        style: {
                            image: '../../../../image/能源交易/icon.png',
                            width: 64.9,
                            height: 74.8,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: '705',
                        top: 0,
                        z: -10,
                        // x: -115,
                        bounding: 'raw',
                        origin: [250, 250],
                        style: {
                            image: '../../../../image/能源交易/2环.png',
                            width: 500,
                            height: 500,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: 1230,
                        top: 200,
                        z: 0,
                        // position: [155, 10],
                        // x: -115,
                        bounding: 'raw',
                        // origin: [210, 210],

                        style: {
                            image: '../../../../image/能源交易/icon.png',
                            width: 64.9,
                            height: 74.8,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: '1312',
                        top: 0,
                        z: -10,
                        // x: -115,
                        bounding: 'raw',
                        origin: [250, 250],
                        style: {
                            image: '../../../../image/能源交易/3环.png',
                            width: 500,
                            height: 500,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: 1832,
                        top: 200,
                        z: 0,
                        // position: [155, 10],
                        // x: -115,
                        bounding: 'raw',
                        // origin: [210, 210],

                        style: {
                            image: '../../../../image/能源交易/icon.png',
                            width: 64.9,
                            height: 74.8,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: '1915',
                        top: 0,
                        z: -10,
                        origin: [250, 250],
                        // x: -115,
                        bounding: 'raw',
                        style: {
                            image: '../../../../image/能源交易/4环.png',
                            width: 500,
                            height: 500,
                            //                    opacity: 0.4
                        }
                    }


                ],

                legend: {
                    show: true,

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
            var rotation = 0;
            clearInterval(interval)
            interval = setInterval(function() {
                for (var i = 0; i < option.graphic.length; i++) {
                    if (i % 2 == 0) { option.graphic[i].rotation = (rotation += Math.PI / 360) % (Math.PI * 2) }


                }

                myChart.setOption(option);
            }, 30);

        });
        $('.erji_title a')[0].click();

    });
    $('.nav a')[0].click();
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/"+jsonData['FunctionName'],
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