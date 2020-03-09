var option;
var myChart;
var series = []; // 存放 eharts series 的配置
var color_list = []; // 存放从数组中提取出来的颜色
var new_color_list = []; // 存放 经过渐变色处理的颜色
var y_data = []; // 用于存放 x 对应的y 值
var x_label = []; // 用于存放 x 轴的标签
var x_val = [];
var new_liebie; // 存放经过判断的类别标签
var yiji_title = []; // 存放 一级标题的名称 // 需要高亮的 x_label //"2017","2019"
var globalFontSize = 40;
var globalFontColor = '#FFFFFF';
var unit; // 用于存放 数值单位
var colorAlp = 'rgba(255,255,255,0.25)';
var label = {
    show: true, //开启显示
    position: 'top', // 在上方显示

    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: 35
    }
};
var itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0]
    },

};
var tempColor = 'rgba(0,0,0,0)';
tempColor = 'rgba(' + parseInt(tempColor.substr(1, 2), 16) + ',' + parseInt(tempColor.substr(3, 2), 16) + ',' + parseInt(tempColor.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
var areaStyle = {
    normal: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: tempColor // 0% 处的颜色
            }, {
                offset: 0.2,
                color: tempColor // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(0,0,0,0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }
    },
};

"object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {}, ue.interface.broadcast = function(e, t) {
    if ("string" == typeof e) {
        var o = [e, ""];
        void 0 !== t && (o[1] = t);
        var n = encodeURIComponent(JSON.stringify(o));
        "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "", "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location.hash = n, document.location.hash = encodeURIComponent("[]"))
    }
}) : function(e) { ue.interface = {}, ue.interface.broadcast = function(t, o) { "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, "")) } }(ue.interface), (ue4 = ue.interface.broadcast);