

var showRealData = JKB["能源管理"]["削峰填谷地图"]

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
   


    //导航小地图
    // var uploadedDataURL = "http://127.0.0.1:802/json/zhangjiang.json";
    // $.getJSON(uploadedDataURL, function(geoJson) {
    const myChart = echarts.init(document.getElementById('navMap'));
    echarts.registerMap('ls', zhangjiangJson);

    var geoCoordMap = {
        '原国家高新区': [121.605068, 31.20098],
        '孙桥科创中心': [121.632043, 31.17363],
        '张江南区': [121.602129, 31.167237],
        '规划保留用地': [121.644498, 31.119641],
        '康桥工业园北区': [121.611968, 31.137424],
        '上海国际医学园区': [121.622748, 31.103973],
        '康桥工业园南区': [121.626976, 31.077968]
    }
    var data = [
        { name: '原国家高新区', value: 300 },
        { name: '孙桥科创中心', value: 150 },
        { name: '张江南区', value: 180 },
        { name: '规划保留用地', value: 170 },
        { name: '康桥工业园北区', value: 160 },
        { name: '上海国际医学园区', value: 180 },
        { name: '康桥工业园南区', value: 220 }
    ];
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    myChart.setOption(option = {

        geo: {
            map: 'ls',
            left: '40%',
            top: '10%',
            zoom: 1.2,
            show: false,
        },
        series: [{
            type: 'map',
            map: 'ls',
            left: '40%',
            top: '10%',
            geoIndex: 1,
            zoom: 1.2,
            label: {
                show: false,
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderColor: '#6CA5D1',
                    borderWidth: 5
                },
                emphasis: {
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: '#5AB2FE',
                    shadowBlur: 20
                }
            },
            data: data,
        },
        {
            name: '企业数',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'circle',
            // symbol: 'image://http://127.0.0.1:802/Image/test.gif',
            symbolSize: function (val) {
                var num = val[2];
                if (num < 150) {
                    return 150
                } else if (num > 300) {
                    return 300;
                } else {
                    return num;
                }
            },
            // symbolOffset: [0, '50%'],
            label: {
                normal: {
                    show: true,
                    formatter: function (value) {
                        return "{b|" + value.value[2] + "}"; //{a|" + value.name + "：}
                    },
                    // padding: [0, 0, 180, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: 40,
                    },
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 40,
                            textShadowColor: '#73CEFE',
                            textShadowBlur: '5',
                        },
                        b: {
                            color: '#fff',
                            fontSize: 80,
                            fontWeight: 'bold',
                            // fontWeight: '100',
                            // fontFamily: '庞门正道标题体',
                            textShadowColor: '#73CEFE',
                            textShadowBlur: '20',
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#216ca7', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        }
        ]
    });
    // });

    //上海
    // var shanghaiURL = "http://127.0.0.1:802/json/shanghai.json";
    const navChart = echarts.init(document.getElementById('shanghaiMap'));
    // $.getJSON(shanghaiURL, function (geoJson) {
        echarts.registerMap('shanghai', shanghaiJson);
        var navOption = {
            backgroundColor: 'rgba(255,255,255,0)',
            tooltip: {
                trigger: 'item',
                backgroundColor: '#316E95',
                borderColor: '#BDE7EF',
                borderWidth: '2',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                textStyle: {
                    fontSize: '55'
                },
                formatter: function (params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;
                    var value = params.value;
                    res = "<span style='color:#fff;'>" + name + "</span>"
                    return res;
                }
            },

            series: [{
                type: 'map',
                mapType: 'shanghai',
                left: '30',
                right: '30',
                top: '30',
                bottom: '30',
                // zoom: 1.2,
                roam: false, //是否开启鼠标缩放和平移漫游
                itemStyle: { //地图区域的多边形 图形样式
                    // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
                    normal: { //是图形在默认状态下的样式
                        label: {
                            show: true, //是否显示标签
                            textStyle: {
                                color: 'transparent'
                            },
                        },
                        borderWidth: 1,
                        borderColor: '#6CA5D1',
                        areaColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(66,118,175, .8)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(56,91,157, .8)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    },
                    emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label: {
                            show: false,
                            textStyle: {
                                color: 'transparent'
                            },
                        },
                        borderColor: '#6CA5D1',
                        areaColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(56,91,157, .8)' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(66,118,175, .8)' // 0% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                    }
                },
            }]
        };
        navChart.setOption(navOption);
    // });
    //张江
    const zhangjiangChart = echarts.init(document.getElementById('zhangjiangMap'));
    // $.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('shanghai', zhangjiangJson);
    var zhangjiangOption = {
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
            backgroundColor: '#316E95',
            borderColor: '#BDE7EF',
            borderWidth: '2',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            textStyle: {
                fontSize: '55'
            },
            formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:#fff;'>" + name + "</span>"
                return res;
            }
        },

        series: [{
            type: 'map',
            mapType: 'shanghai',
            // left: '10',
            // right: '10',
            // top: '10',
            // bottom: '10',
            // zoom: 1.2,
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: 'transparent'
                        },
                    },
                    borderWidth: 1,
                    borderColor: '#6CA5D1',
                    areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(66,118,175, .8)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(56,91,157, .8)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                },
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: false,
                        textStyle: {
                            color: 'transparent'
                        },
                    },
                    borderColor: '#6CA5D1',
                    areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(56,91,157, .8)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(66,118,175, .8)' // 0% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            },
        }]
    };
    zhangjiangChart.setOption(zhangjiangOption);
    // });
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