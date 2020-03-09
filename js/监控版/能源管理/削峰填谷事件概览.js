globalFontSize = 40;


var showRealData = JKB["能源管理"]["削峰填谷事件概览"]

var interval;  

var table_data = {
    "data": [{
        "title": "削峰填谷事件概览",
        "table": [ 
        {"title": "本月执行事件", "xLabel": "次", "yLabel": "12"},
        {"title": '削峰负荷总量',  "xLabel": "mv", "yLabel": "-1346" },
        {"title": '填谷负荷总量', "xLabel": "mv", "yLabel": "1080"}, 
        {"title": '本月总激励金额', "xLabel": "万", "yLabel": "1.17"}
    ]
    }, ]
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

            $(".erji_title a").css({ "color": c1 })
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
                        var res={
                            value: table_data['data'][i]['table'][j]['yLabel'],
                            name: table_data['data'][i]['table'][j]['xLabel'],
                        }
                        y_data.push(res);
                    }   
                }
                    
            }

            currentData = table_data["data"][0]["table"]
            var center = [['15%', '35%'],['38.5%', '35%'],['61.5%', '35%'],['85%', '35%'],]
        
            var tips = 100;
            var tick = 0;
            // var m=60;
            function aniClockwise(m) {
                return [{
                        value: tips,
                        // type:LinearGradient,
                        itemStyle: {
                            normal: {
                                color: h6,
                            }
                        },
                    },
                    {
                        value: m,
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                borderColor: 'rgba(0,0,0,0)',
                                borderType: 'dashed',
                                color: c5,
                                shadowBlur: 10,
                                shadowColor: h1
                            }
                        }
                    },
                    {
                        value: 100 - m - tips,
                        itemStyle: {
                            normal: {
                                color: h6,
                            }
                        }
                    }
                ];
            };
            function aniAnticlockwise(x) {
                return [{
                        value: tick,
                        itemStyle: {
                            normal: {
                                color: h6,
                            }
                        },
                    },
                    {
                        value: x,
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                color: c5,
                                shadowBlur: 10,
                                shadowColor: h1
                            }
                        }
                    },
                    {
                        value: 100 - x - tick,
                        itemStyle: {
                            normal: {
                                color: h6,
                            }
                        }
                    }
                ];
            };
            var rich = {
                    a: {
                        fontSize: 50,
                        color: c1,
                        textShadowBlur: 30,
                        textShadowColor: h1,
                    }
            };
            for (var i = 0;i<currentData.length;i++){
                series.push({
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,

                    data:[y_data[i].value],
                    radius: ['42%', '52%'],
                    center: center[i],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
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
                        rich: rich,
                        position: 'center',
                        fontSize: 80,
                        fontWeight: 'lighter',
                        color: c1,
                        padding: [20, 0, 0, 0],
                        textShadowBlur: 30,
                        textShadowColor: h1,
                        fontFamily: '庞门正道标题体',
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
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['42%', '52%'],
                    center: center[i],
                    hoverAnimation: false,
                    itemStyle: {

                        shadowColor: h1,
                        shadowBlur: 10,
                        shadowOffsetY: 0,


                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: aniAnticlockwise(100)
                },
                )
            };
            for (var i = 0;i<currentData.length;i++){
                series.push({
                    name: 'loading',
                    type: 'pie',
                    radius: ['59%', '60%'],
                    center: center[i],
                    hoverAnimation: false,

                    itemStyle: {

                        shadowColor: h1,
                        shadowBlur: 10,
                        shadowOffsetY: 0,

                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: aniAnticlockwise(100)
                },
                )
            };
            
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
 
                graphic: [{
                    type: 'image',
                    left: '170',
                    top: 0,
                    z: -10,
                    // x: -115,
                    // bounding: 'raw',
                    style: {
                        image: '../../../Image/outsideCircle.png',
                        width: 420,
                        //height: 150,
                        //                    opacity: 0.4
                    }
                },
                {
                    type: 'image',
                    left: '765',
                    top: 0,
                    z: -10,
                    // x: -115,
                    // bounding: 'raw',
                    style: {
                        image: '../../../Image/outsideCircle.png',
                        width: 420,
                        //height: 150,
                        //                    opacity: 0.4
                    }
                },
                {
                    type: 'image',
                    left: '1350',
                    top: 0,
                    z: -10,
                    // x: -115,
                    // bounding: 'raw',
                    style: {
                        image: '../../../Image/outsideCircle.png',
                        width: 420,
                        //height: 150,
                        //                    opacity: 0.4
                    }
                },
                {
                    type: 'image',
                    left: '1946',
                    top: 0,
                    z: -10,
                    // x: -115,
                    // bounding: 'raw',
                    style: {
                        image: '../../../Image/outsideCircle.png',
                        width: 420,
                        //height: 150,
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
        
            };
            clearInterval(interval);
            interval = setInterval(function() {
                if (tips == 0) {
                    tips = 100;
                    // m=0;
                } else {
                    --tips;
                }
                if (tick == 100) {
                    tick = 0;
                    // m=0;
                } else {
                    ++tick;
                }
                for (var i = 0; i < option.series.length; i++) {
                    if (i % 2 != 0 && i < 8) {

                        option.series[i].data = aniClockwise(60)
                    }
                    if (i >= 8) {
                        option.series[i].data = aniAnticlockwise(60)
                    }
                }


                myChart.setOption(option);
            }, 50);
            // myChart.clear();

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
//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};
