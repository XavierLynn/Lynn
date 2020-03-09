globalFontSize = 40;

var interval;

var showRealData = JKB["能源交易"]["交易详情"]["商品交易概况"]

var table_data = {
    "data": [{
        "title": "商品交易概况",
        "table": [
        {"title": '意向总量',  "xLabel": "个", "yLabel": "20" },
        {"title": '合同总金额', "xLabel": "万", "yLabel": "15.48"}, 
        {"title": '合同数量', "xLabel": "份", "yLabel": "100"}]
    }, ]
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJY.asmx/GetEnteEnergyConsumptionMonth",
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
                ['20%', '37%'],
                ['52%', '37%'],
                ['83.5%', '37%'],
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
                        },
                        label: {
                            show: true,
                            formatter: function(params) {
                                return params.name + "\n"+"{a|" + params.value + "}"
                            },
                            rich: {
                                a: {
                                    color: c1,
                                    position: 'center',
                                    textShadowBlur: 20,
                                    textShadowColor: h1,
                                    fontSize: 50,
                                    // padding: [-10, 0, 0, 20]
                                }
                            },
                            position: 'center',
                            fontSize: 90,
                            color: c1,
                            // padding: [0, 0, 0, 0],
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

                )
            }
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {

                graphic: [{
                        // id: 'logo',
                        type: 'image',
                        left: 155,
                        top: 0,
                        z: -10,
                        // position: [155, 10],
                        // x: -115,
                        bounding: 'raw',
                        origin: [210, 210],

                        style: {
                            image: '../../../../image/能源交易/商品交易概况背景图.png',
                            width: 420,
                            height: 420,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: '727',
                        top: 0,
                        z: -10,
                        // x: -115,
                        bounding: 'raw',
                        origin: [210, 210],
                        style: {
                            image: '../../../../image/能源交易/商品交易概况背景图.png',
                            width: 420,
                            height: 420,
                            //                    opacity: 0.4
                        }
                    },
                    {
                        // id: 'logo',
                        type: 'image',
                        left: '1290',
                        top: 0,
                        z: -10,
                        // x: -115,
                        bounding: 'raw',
                        origin: [210, 210],
                        style: {
                            image: '../../../../image/能源交易/商品交易概况背景图.png',
                            width: 420,
                            height: 420,
                            //                    opacity: 0.4
                        }
                    },


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
            clearInterval(interval);
            interval = setInterval(function() {
                for (var i = 0; i < option.graphic.length; i++) {
                    option.graphic[i].rotation = (rotation += Math.PI / 360) % (Math.PI * 2)
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

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};