label = {
    show: true, //开启显示
    position: 'top', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize - 10
    }
};
itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,0,0,0)ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff0000' // 100% 处的颜色
        }]),
        lineStyle: {
            width: 10 //设置曲线宽度
        }
    },

};

var showRealData = JKB["能源监控"]["企业监控"]["当日能耗-设备属性"]
var table_data = {
    "data": [{
        "title": "当日能耗-设备属性",
        "table": [{
            "title": "总",
            "unit": "kwh",
            "xLabelRang": [{
                    "label": "00:00"
                },
                {
                    "label": "01:00"
                },
                {
                    "label": "02:00"
                },
                {
                    "label": "03:00"
                },
                {
                    "label": "04:00"
                },
                {
                    "label": "05:00"
                },
                {
                    "label": "06:00"
                },
                {
                    "label": "07:00"
                },
                {
                    "label": "08:00"
                },
                {
                    "label": "09:00"
                },
                {
                    "label": "10:00"
                },
                {
                    "label": "11:00"
                },
                {
                    "label": "12:00"
                },
                {
                    "label": "13:00"
                },
                {
                    "label": "14:00"
                },
                {
                    "label": "15:00"
                },
                {
                    "label": "16:00"
                },
                {
                    "label": "17:00"
                },
                {
                    "label": "18:00"
                },
                {
                    "label": "19:00"
                },
                {
                    "label": "20:00"
                },
                {
                    "label": "21:00"
                },
                {
                    "label": "22:00"
                },
                {
                    "label": "23:00"
                },
                {
                    "label": "24:00"
                },
         
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "100"
                },
                {
                    "label": "200"
                },
                {
                    "label": "300"
                },
                {
                    "label": "400"
                },
                {
                    "label": "500"
                }
            ],
            "data": [{
                    "categoryName": "消防",
                    "start_color": 'rgba(255,239,224,1)',
                    "end_color": 'rgba(255,239,224,1)',
                    'high_color': 'rgba(255,239,224,0.3)',
                    'gradient_color': 'rgba(255,239,224,0)',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "430"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "425"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "440"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "435"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "460"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "425"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "425"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "435"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "465"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "435"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "390"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "450"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "460"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "480"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "460"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "450"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "460"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "480"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "450"
                        },
        

                    ]
                },
                {
                    "categoryName": "空调",
                    "start_color": 'rgba(225,144,63,1)',
                    "end_color": 'rgba(225,144,63,1)',
                    'high_color': 'rgba(225,144,63,0.3)',
                    'gradient_color': 'rgba(225,144,63,0)',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "300"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "320"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "360"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "360"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "375"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "410"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "390"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "390"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "410"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "410"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "380"
                        },
               


                    ]
                },
                {
                    "categoryName": "照明",
                    "start_color": 'rgba(0,90,255,1)',
                    "end_color": 'rgba(0,90,255,1)',
                    'high_color': 'rgba(0,90,255,0.3)',
                    'gradient_color': 'rgba(0,90,255,0)',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "430"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "440"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "450"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "480"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "450"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "440"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "400"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "370"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "365"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "360"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "360"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "355"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "350"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "320"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "300"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "350"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "380"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "420"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "430"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "450"
                        },
         



                    ]
                }, {
                    "categoryName": "电梯",
                    "start_color": 'rgba(1,254,234,1)',
                    "end_color": 'rgba(1,254,234,1)',
                    'high_color': 'rgba(1,254,234,0.3)',
                    'gradient_color': 'rgba(1,254,234,0)',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "100"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "120"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "150"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "160"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "180"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "200"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "160"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "180"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "150"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "182"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "260"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "200"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "230"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "220"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "150"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "180"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "160"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "170"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "140"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "200"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "210"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "220"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "230"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "240"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "280"
                        },
             



                    ]
                }, {
                    "categoryName": "动力",
                    "start_color": 'rgba(0,253,137,1)',
                    "end_color": 'rgba(0,253,137,1)',
                    'high_color': 'rgba(0,253,137,0.3)',
                    'gradient_color': 'rgba(0,253,137,0)',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "230"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "240"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "250"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "274"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "300"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "340"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "320"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "315"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "280"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "270"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "290"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "260"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "251"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "240"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "244"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "271"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "243"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "213"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "222"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "235"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "248"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "269"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "256"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "259"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "278"
                        },
            



                    ]
                }
            ]
        }, ]



    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJK.asmx/GetEnteEnergyConsumptionMonthDetails",
        type: "POST",
        async: true,
        data: "elecID=1352958966&startDate=2019-12&endDate=2020-01",
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
    yiji_title.length=0;
   


    // var transp = '#FFFFFF00';
    var currentErjiTab = null;
    var twoLevelTitle = null;

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
        for (let i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (let j = 0; j < table_data['data'][i]['table'].length; j++) {
                    var temp = table_data['data'][i]['table'][j]['title'];
                    $('#subtitle').append("<span class='erji_title'><a href='#' >" + temp + "</a></span>");
                    // $('.erji_title a').attr("background-image", 'url("../../Image/zfsj/' + temp + 'focus.png")');
                    // $('.erji_title a').attr("style", "background-image:url(../../Image/zfsj/" + temp + "focus.png);");

                    let id = document.getElementById("subtitle")
                    let tempA = id.getElementsByTagName("a");
                    tempA[j].style.backgroundImage = 'url("../../../Image/zfsj/' + temp + '.png")';
                    twoLevelTitle = tempA;

                }
                break
            }
        }
        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + 'focus.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../../Image/zfsj/' + currentErjiTab.text + '.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + 'focus.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + '.png")';
                }
            }
        });

        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];
            color_list = [];
            new_color_list = [];
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['xLabelRang'].length; k++) {
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'])
                            }
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['gradient_color']);
                                const res = []; // y_data 过渡数组
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                }
                                y_data.push(res);
                                color_list.push(color_res);
                            }
                        }
                    }
                }
            }
            var curInt = null;
            if (leibie_name.length > 1) {
                new_liebie = leibie_name;
            } else {
                new_liebie = [];
            }
            for (var i = 0; i < color_list.length; i++) {
                const res = []; // 存储颜色的过渡矩阵
                for (var j = 0; j < y_data[i].length; j++) {
                    res.push(new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        // { offset: 0, color: transp },
                        { offset: 0, color: color_list[i][0] },
                        { offset: 1, color: color_list[i][1] },
                        // { offset: 1, color: transp }
                    ]))
                }
                new_color_list.push(res);
            }
            // 判断需要高亮的数组的位置  并将原来的颜色替换成高亮色
            for (var i = 0; i < color_list.length; i++) {
                if (x_val.length !== 0) {
                    for (var m = 0; m < x_val.length; m++) {
                        for (var n = 0; n < x_label.length; n++) {
                            if (x_val[m] === x_label[n]) {
                                new_color_list[i].splice(n, 1, color_list[i][2]);
                                break
                            }
                        }
                    }
                }
            }
            var colorGra = [];
            for (var i = 0; i < table_data['data'][0]['table'][0]['data'].length; i++) {
                var highColors = { 'one': table_data['data'][0]['table'][0]['data'][i]['gradient_color'], 'two': table_data['data'][0]['table'][0]['data'][i]['high_color'] };
                colorGra.push(highColors)
            }

            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                var tempColor = color_list[i][0];
                series.push({
                    name: new_liebie[i],

                    type: 'line',
                    //lineStyle: { normal: { color: colorList[0] } },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                            lineStyle: {
                                width: 2,
                                shadowColor: color_list[i][0],
                                shadowBlur: 10,
                            }

                        },

                    },
                    smooth: false,
                    //stack: '总量',
                    symbol: 'circle',
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: colorGra[i]['two'] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: colorGra[i]['one'] // 0% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                    },
                    label: {
                        show: false
                    },
                    data: y_data[i],
                    color: colorList[i]

                })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: 35,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    icon: 'auto',
                    right: '4%',
                    top: '3%',
                    itemGap: 150,
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 5,
                    textStyle: {
                        fontSize: 35,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '5%',
                    top: '20%',
                    containLabel: true
                },
                xAxis: [{
                    name: '',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        color: globalFontColor,
                        fontSize: 40,
                    },
                    type: 'category',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 4,
                            offset: 10,
                        }
                    },
                    axisTick: {
                        show: false,
                        interval: 1,
                        inside: true,
                        length: 20,
                        lineStyle: {
                            width: 2,

                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: -50,
                        color: globalFontColor,
                        fontSize: 40,
                        margin: 55,
                        // formatter: function(value, index) {
                        //     var texts = value;
                        //     if (index % 2 != 0 || index == 29) {
                        //         texts = '';
                        //     }
                        //     return texts;
                        // }
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    name: unit,
                    nameLocation: 'end',
                    nameGap: 40,
                    nameTextStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize - 5,
                    },
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    // min: 0,
                    // max: 25,
                    splitNumber: 5,
                    axisLabel: {
                        margin: 40,
                        color: globalFontColor,
                        fontSize: 40
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            type: 'dashed'
                        }
                    },
                }],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
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
        url: "http://localhost:2277/监控版/NYJK.asmx/"+jsonData['FunctionName'],
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