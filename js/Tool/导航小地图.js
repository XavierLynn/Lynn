$(function () {
    const navChart = echarts.init(document.getElementById('navMap'));
    var data = [{
        name: '虹口区',
        value: { lng: 121.511585, lat: 31.269993 }
    }, {
        name: '静安区',
        value: { lng: 121.453231, lat: 31.233688 }
    }, {
        name: '黄浦区',
        value: { lng: 121.50783, lat: 31.280834 }
    }, {
        name: '杨浦区',
        value: { lng: 121.53381, lat: 31.266018 }
    }, {
        name: '普陀区',
        value: { lng: 121.39689, lat: 31.278062 }
    }, {
        name: '长宁区',
        value: { lng: 121.405514, lat: 31.212888 }
    }, {
        name: '闵行区',
        value: { lng: 121.388903, lat: 31.118595 }
    },
    {
        name: '徐汇区',
        value: { lng: 121.443682, lat: 31.195051 }
    }, {
        name: '宝山区',
        value: { lng: 121.430451, lat: 31.396225 }
    }, {
        name: '嘉定区',
        value: { lng: 121.273166, lat: 31.377936 }
    }, {
        name: '浦东新区',
        value: { lng: 121.675787, lat: 31.141094 }
    }, {
        name: '金山区',
        value: { lng: 121.292138, lat: 30.836452 }
    }, {
        name: '松江区',
        value: { lng: 121.238348, lat: 31.03176 }
    }, {
        name: '青浦区',
        value: { lng: 121.083983, lat: 31.129492 }
    }, {
        name: '奉贤区',
        value: { lng: 121.57956, lat: 30.904186 }
    }, {
        name: '崇明区',
        value: { lng: 121.520747, lat: 31.651873 }
    }
    ];
    echarts.registerMap('shanghai', shanghaiJson);
    var navOption = {
        backgroundColor: 'rgba(255,255,240,0)',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(49,110,149,0.8)',
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
            left: '70',
            right: '70',
            top: '70',
            bottom: '70',
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
                    borderWidth: 2,
                    borderColor: '#5DBFFF',
                    areaColor: 'rgba(8,71,114,0.5)',
                },
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: false,
                        textStyle: {
                            color: 'transparent'
                        },
                    },
                    borderColor: '#5DBFFF',
                    areaColor: 'rgba(164,111,71,0.5)',
                }
            },
            data: data
        }]
    };
    navChart.setOption(navOption);
    // 处理点击事件并且跳转到相应的百度搜索页面
    navChart.on('click', function (params) {
        ue4("RegionClick",params.data.name);
    });
});