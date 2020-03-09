$(function () {
    // ajax 请求数据
    // $.ajax({
    //     //请求方式
    //     type : "POST",
    //     //请求的媒体类型
    //     contentType: "application/json;charset=UTF-8",
    //     //请求地址
    //     url : "http://xxxx/xxx/xxx/",
    //     //数据，json字符串
    //     data : JSON.stringify(list),
    //     //请求成功
    //     success : function(result) {
    //         //result 为返回结果 即后面的table_data
    //         console.log(result);
    //     },
    //     //请求失败，包含具体的错误信息
    //     error : function(e){
    //         console.log(e.status);
    //         console.log(e.responseText);
    //     }
    // });
    //使用模拟数据
    var table_data ={
        "style": {
            "lineStyle": [
                {
                    "lineName": "达标线",
                    "color": "#00FF00"
                },
                {
                    "lineName": "先进水平",
                    "color": "#00FFFF"
                }
            ]
        },
        "data": [
            {
                "title": "xx能耗",
                "table": [
                    {
                        "title": "总",
                        "unit": "万xxx",
                        "xLabelRang": [
                            {
                                "label": "2015"
                            },
                            {
                                "label": "2016"
                            },
                            {
                                "label": "2017"
                            },
                            {
                                "label": "2018"
                            },
                            {
                                "label": "2019"
                            }
                        ],
                        "yLabelRang": [
                            {
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
                        "data": [
                            {
                                "categoryName": "类别一",
                                "start_color":"#f1c9c8",
                                "end_color":"#efdab8",
                                'high_color':'#fd5f51',
                                "categoryData": [
                                    {
                                        "xLabel": "2015",
                                        "yLabel": "20"
                                    },
                                    {
                                        "xLabel": "2016",
                                        "yLabel": "120"
                                    },
                                    {
                                        "xLabel": "2017",
                                        "yLabel": "250"
                                    },
                                    {
                                        "xLabel": "2018",
                                        "yLabel": "310"
                                    },
                                    {
                                        "xLabel": "2019",
                                        "yLabel": "490"
                                    }
                                ]
                            },
                            {
                                "categoryName": "类别二",
                                "start_color":"#a3ebe5",
                                "end_color":"#caefef",
                                'high_color':'#20d0b5',
                                "categoryData": [
                                    {
                                        "xLabel": "2015",
                                        "yLabel": "220"
                                    },
                                    {
                                        "xLabel": "2016",
                                        "yLabel": "150"
                                    },
                                    {
                                        "xLabel": "2017",
                                        "yLabel": "280"
                                    },
                                    {
                                        "xLabel": "2018",
                                        "yLabel": "210"
                                    },
                                    {
                                        "xLabel": "2019",
                                        "yLabel": "410"
                                    }
                                ]
                            }
                        ],
                        "lines": [
                            {
                                "name": "达标线",
                                "value": "480"
                            },
                            {
                                "name": "先进水平",
                                "value": "500"
                            }
                        ]
                    },
                    {
                        "title": "电",
                        "unit": "kWh",
                        "xLabelRang": [
                            {
                                "label": "2015"
                            },
                            {
                                "label": "2016"
                            },
                            {
                                "label": "2017"
                            },
                            {
                                "label": "2018"
                            },
                            {
                                "label": "2019"
                            }
                        ],
                        "yLabelRang": [
                            {
                                "label": "0"
                            },
                            {
                                "label": "1000"
                            },
                            {
                                "label": "2000"
                            },
                            {
                                "label": "3000"
                            },
                            {
                                "label": "4000"
                            },
                            {
                                "label": "5000"
                            }
                        ],
                        "data": [
                            {
                                "categoryName": "类别一",
                                "start_color":"#f1c9c8",
                                "end_color":"#efdab8",
                                'high_color':'#fd5f51',
                                "categoryData": [
                                    {
                                        "xLabel": "2015",
                                        "yLabel": "200"
                                    },
                                    {
                                        "xLabel": "2016",
                                        "yLabel": "1200"
                                    },
                                    {
                                        "xLabel": "2017",
                                        "yLabel": "2500"
                                    },
                                    {
                                        "xLabel": "2018",
                                        "yLabel": "3100"
                                    },
                                    {
                                        "xLabel": "2019",
                                        "yLabel": "4900"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "单位xxx",
                "table": [
                    {
                        "title": "总",
                        "unit": "万xxx",
                        "xLabelRang": [
                            {
                                "label": "行业1"
                            },
                            {
                                "label": "行业2"
                            },
                            {
                                "label": "行业3"
                            },
                            {
                                "label": "行业4"
                            },
                            {
                                "label": "行业5"
                            }
                        ],
                        "yLabelRang": [
                            {
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
                        "data": [
                            {
                                "categoryName": "类别一",
                                "start_color":"#f1c9c8",
                                "end_color":"#efdab8",
                                'high_color':'#fd5f51',
                                "categoryData": [
                                    {
                                        "xLabel": "2015",
                                        "yLabel": "200"
                                    },
                                    {
                                        "xLabel": "2016",
                                        "yLabel": "1200"
                                    },
                                    {
                                        "xLabel": "2017",
                                        "yLabel": "2500"
                                    },
                                    {
                                        "xLabel": "2018",
                                        "yLabel": "3100"
                                    },
                                    {
                                        "xLabel": "2019",
                                        "yLabel": "4900"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const dabiao_name = []; // 存放 markline 的名称
    const dabiao_color = []; // 存放 markline 的颜色
    const dabiao_value = []; // 存放 markline 的值
    const yiji_title = []; // 存放 一级标题的名称
    const x_val = ["2017","2019"]; // 需要高亮的 x_label
    for (var i=0;i<table_data['style']['lineStyle'].length;i++){
        dabiao_name.push(table_data['style']['lineStyle'][i]['lineName']);
        dabiao_color.push(table_data['style']['lineStyle'][i]['color'])
    }
    for (var i=0;i<table_data['data'][0]['table'][0]['lines'].length;i++){
        dabiao_value.push(table_data['data'][0]['table'][0]['lines'][i]['value'])
    }
    for (var i=0;i<table_data['data'].length;i++){
        yiji_title.push(table_data['data'][i]['title']);
    }
    const img = new Image(); // 设置背景图片
    img.src = '../Image/gray.jpg'; // 背景图片路径
    $('.nav').append("<li id='tag'></li>");
    for (var i=0;i<yiji_title.length;i++){
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    $('.nav a').click(function () {
        var yiji;
        for (var i=0;i<table_data['data'].length;i++){
            if (table_data['data'][i]['title']===$(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (var j=0;j<table_data['data'][i]['table'].length;j++){
                    $('#subtitle').append("<span class='erji_title'><a href='#' style='font-size: 15px; margin-left: 60px;text-decoration: none'>"+ table_data['data'][i]['table'][j]['title'] +"</a></span>");
                }
                break
            }
        }
        $('.erji_title').click(function () {
            const x_label = []; // 用于存放 x 轴的标签
            var unit; // 用于存放 数值单位
            const y_data = []; // 用于存放 x 对应的y 值
            const leibie_name = []; // 用于存放类别名
            const color_list = []; // 存放从数组中提取出来的颜色
            var id; // 存储 一级标题点击时的 id
            for (var i=0;i<table_data['data'].length;i++){
                if (table_data['data'][i]['title']===yiji){
                    for (var j=0;j<table_data['data'][i]['table'].length;j++){
                        if (table_data['data'][i]['table'][j]['title']===$(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k=0;k<table_data['data'][i]['table'][j]['xLabelRang'].length;k++){
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'])
                            }
                            for (var k=0;k<table_data['data'][i]['table'][j]['data'].length;k++){
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                const res = []; // y_data 过渡数组
                                for (var m=0;m<table_data['data'][i]['table'][j]['data'][k]['categoryData'].length;m++){
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                }
                                y_data.push(res);
                                color_list.push(color_res);
                            }
                        }
                    }
                }
            }
            const series = []; // 存放 eharts series 的配置
            var new_liebie; // 存放经过判断的类别标签
            const new_color_list = []; // 存放 经过渐变色处理的颜色
            if (leibie_name.length>1){
                new_liebie = leibie_name;
            }
            else {
                new_liebie = [];
            }
            for (var i=0;i<color_list.length;i++){
                const res = []; // 存储颜色的过渡矩阵
                for (var j=0;j<y_data[i].length;j++){
                    res.push(new echarts.graphic.LinearGradient(0,1,0,0,[
                        {offset: 0,color:color_list[i][0]},
                        {offset:0.6,color:color_list[i][1]}]))
                }
                new_color_list.push(res);
            }
            // 判断需要高亮的数组的位置  并将原来的颜色替换成高亮色
            for (var i=0;i<color_list.length;i++){
                if (x_val.length !==0){
                    for (var m=0;m<x_val.length;m++){
                        for (var n=0;n<x_label.length;n++){
                            if (x_val[m]===x_label[n]){
                                new_color_list[i].splice(n,1,color_list[i][2]);
                                break
                            }
                        }
                    }
                }
            }
            const label = {
                show: true, //开启显示
                position: 'top', // 在上方显示
                textStyle: { //数值样式
                    color: '#FFFFFF',
                    fontSize: 16
                }
            };
            const itemStyle = {
                normal:{
                    barBorderRadius:[5, 5, 5, 5],
                },

            };
            for (var i=0;i<y_data.length;i++){
                if (i===0){
                    const markline = {
                        symbol:'none'
                    };
                    const data= [];
                    for (var j=0;j<dabiao_name.length;j++){
                        data.push({
                            name:dabiao_name[j],
                            yAxis:dabiao_value[j],
                            lineStyle:{
                                normal: {
                                    color:dabiao_color[j]
                                }
                            },
                            label:{
                                formatter:dabiao_name[j],
                                position: 'middle'
                            }
                        })
                    }
                    markline['data'] = data;
                    const colorList = new_color_list[i];
                    series.push({name:new_liebie[i],type:'line',smooth:true,lineStyle:{normal:{color:colorList[0]}},markLine:markline,itemStyle:itemStyle,barWidth:'20%',label:label,data:y_data[i],color:function (params) {
                            return colorList[params.dataIndex]
                        }})
                }else {
                    const colorList = new_color_list[i];
                    series.push({name:new_liebie[i],type:'line',smooth:true,lineStyle:{normal:{color:colorList[0]}},itemStyle:itemStyle,barWidth:'20%',label:label,data:y_data[i],color:function (params) {
                            return colorList[params.dataIndex]}})
                }
            }
            console.log(new_liebie);
            const myChart = echarts.init(document.getElementById('show_charts'));   // 基于准备好的dom，初始化echarts实例
            const option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    left: '5%',
                    data:new_liebie,
                    itemWidth: 20,
                    itemHeight: 12,
                    textStyle: {
                        fontSize:10,
                        color:'#FFFFFF'
                    }
                },
                toolbox:{
                    show:true,
                    feature:{
                        magicType:{
                            type:['line'],
                            iconStyle: {
                                borderColor: '#EE8262'
                            },
                            emphasis:{
                                iconStyle: {
                                    borderColor: '#EE8262'
                                },
                            },

                        },
                        restore: {
                            show:true,
                            title:"还原",
                            iconStyle: {
                                borderColor: '#EE8262'
                            },
                            emphasis:{
                                iconStyle: {
                                    borderColor: '#EE8262'
                                },
                            }
                        },
                    },
                    right: '10%',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : x_label,
                        axisLine:{
                            lineStyle:{
                                color:'#7A67EE'
                            }
                        },
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel:{
                            interval:0,
                            rotate:40,
                            color: '#FFFFFF'
                        },
                        splitLine:{
                            show: false
                        }
                    }
                ],
                yAxis : [
                    {
                        name: unit,
                        nameTextStyle:{
                            color:'#FFFFFF'
                        },
                        type : 'value',
                        axisLabel: {
                            color: '#FFFFFF',
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#7A67EE'
                            }
                        },
                        splitLine:{
                            show: false
                        },
                    }
                ],
                series:series,
                animationDuration: 6000
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.clear();
            myChart.setOption(option);
        });
    });
});