var showRealData = JKB["能源分析"]["客户特征分析"]["客户特征分析地图"];
var labelCode = "010501sts00001";
//使用模拟数据
var table_data = [{
    "regionName": "原国家高新区",
    "regionId": "zj_hightec",
    "labelCount": ""
}, {
    "regionName": "康桥工业园北区",
    "regionId": "zj_kq_north",
    "labelCount": ""
}, {
    "regionName": "康桥工业园南区",
    "regionId": "zj_kq_south",
    "labelCount": ""
}, {
    "regionName": "上海国际医学园区",
    "regionId": "zj_medicine",
    "labelCount": ""
}, {
    "regionName": "张江南区",
    "regionId": "zj_south",
    "labelCount": ""
}, {
    "regionName": "孙桥科创中心",
    "regionId": "zj_sunqiao",
    "labelCount": ""
}, {
    "regionName": "规划保留用地",
    "regionId": "zj_green",
    "labelCount": ""
},
];
$(function () {
    Init();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
});
function Init() {
    // ajax 请求数据
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionLabelCount",
        type: "POST",
        async: true,
        data: "regionID=zj&labelCode=" + labelCode,
        error: function () {
            Flush();
        },
        success: function (data) {
            if (showRealData) {
                table_data = JSON.parse(data);
                Flush();
            }
        }
    });
    Flush();
}
function Flush() {
    $("#navMap").empty();
    let tabvar = "";
    // tabvar += "<img class='bg' src='../../../../Image/监控版/客户特征分析/有遮罩.gif'/>";
    for (let index = 0; index < table_data.length; index++) {
        const element = table_data[index];
        var width = Number(element['labelCount']);
        width = width > 300 ? 300 : width;
        width = width < 100 ? 100 : width;
        width = width*1.5;
        switch (element['regionId']) {
            case "zj_hightec":
                tabvar += "<button id='zj_hightec' class='regionName'><label class='column1'> " + element['regionName'] + "</label><label class='cloumnNum'>" + element['labelCount'] + "</label></button>";
                tabvar += "<div id='zj_hightec_div' class='point_Div'><img id='zj_hightec_point' width='" + width + "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
            case "zj_kq_north":
                tabvar += "<button id='zj_kq_north' class='regionName'><label class='cloumnNum'>" + element['labelCount'] + "</label><label class='column1'>" + element['regionName'] + " </label></button>";
                tabvar += "<div id='zj_kq_north_div' class='point_Div'><img id='zj_kq_north_point'img width='" + width + "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
            case "zj_kq_south":
                tabvar += "<button id='zj_kq_south' class='regionName'><label class='cloumnNum'>" + element['labelCount'] + "</label><label class='column1'>" + element['regionName'] + " </label></button>";
                tabvar += "<div id='zj_kq_south_div' class='point_Div'><img id='zj_kq_south_point' width='" + width + "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
            case "zj_medicine":
                tabvar += "<button id='zj_medicine' class='regionName'><label class='cloumnNum'>" + element['labelCount'] + "</label><label class='column1'>" + element['regionName'] + " </label></button>";
                tabvar += "<div id='zj_medicine_div' class='point_Div'><img id='zj_medicine_point' width='" + width + "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
            case "zj_south":
                tabvar += "<button id='zj_south' class='regionName'><label class='cloumnNum'>" + element['labelCount'] + "</label><label class='column1'>" + element['regionName'] + " </label></button>";
                tabvar += "<div id='zj_south_div' class='point_Div'><img id='zj_south_point' width='" + width+ "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
            case "zj_sunqiao":
                tabvar += "<button id='zj_sunqiao' class='regionName'><label class='column1'> " + element['regionName'] + "</label><label class='cloumnNum'>" + element['labelCount'] + "</label></button>";
                tabvar += "<div id='zj_sunqiao_div' class='point_Div'><img id='zj_sunqiao_point' width='" +width + "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
            case "zj_green":
                tabvar += "<button id='zj_green' class='regionName'><label class='column1'> " + element['regionName'] + "</label><label class='cloumnNum'>" + element['labelCount'] + "</label></button>";
                tabvar += "<div id='zj_green_div' class='point_Div'><img id='zj_green_point' width='" + width + "' class='regionName_point' src='../../../../Image/监控版/客户特征分析/数量1.png' /></div>";
                break;
        }
    }
    $("#navMap").append(tabvar);

    var select = "";
    $(".regionName").click(function () {
        $(".regionName").removeClass("regionNmeSelect");
        $(this).addClass("regionNmeSelect");
        ue4("RegionClick", $(this).prop("id"));

        var current = $(this).prop("id");
        $("#" + current + "_point").prop("src", "../../../../Image/监控版/客户特征分析/数量1.gif");
        $("#" + select + "_point").prop("src", "../../../../Image/监控版/客户特征分析/数量1.png");
        select = current;
    })

    // 鼠标移入移出事件
    $('.regionName').hover(function () {
        var tempid = $(this).prop("id");
        if (select != tempid) {
            $("#" + tempid + "_point").prop("src", "../../../../Image/监控版/客户特征分析/数量1.gif");
        }
    }, function () {
        var tempid = $(this).prop("id");
        if (select != tempid) {
            $("#" + tempid + "_point").prop("src", "../../../../Image/监控版/客户特征分析/数量1.png");
        }
    });
}

ue.interface.Refresh = function (inlabelCode) {
    labelCode = inlabelCode;
    Init();
}



//添加导航小地图
//上海
const navChart = echarts.init(document.getElementById('shanghaiMap'));
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

//张江
const zhangjiangChart = echarts.init(document.getElementById('zhangjiangMap'));
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