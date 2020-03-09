label = {
    show: false, //开启显示
    position: 'top', // 在上方显示
    textStyle: { //数值样式
        color: textColor,
        fontSize: globalFontSize - 5
    }
};
globalFontColor = textColor;
itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0],
                  
                                color: function(params) {
                                    return colorList[params.dataIndex]},
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,0,0,0)ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff0000' // 100% 处的颜色
        }]),
        lineStyle: {
            width: 5 //设置曲线宽度
        }
    },

};
//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};

var EChart_Data = 
{
    "ChartData":[
        {"FirTitle":"异常用能原因","TableData":[
            {"SecTitle":"二级标题","Unit":"次","CategoryData":[
                {"CategoryName":"设备缺陷","Data":[
                    {
                        "Key": "2018.01",
                        "Value": "2"
                    },
                    {
                        "Key": "2018.02",
                        "Value": "3"
                    },
                    {
                        "Key": "2018.03",
                        "Value": "4"
                    },
                    {
                        "Key": "2018.04",
                        "Value": "3"
                    },
                    {
                        "Key": "2018.05",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.06",
                        "Value": "3"
                    },
                    {
                        "Key": "2018.07",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.08",
                        "Value": "4"
                    },
                    {
                        "Key": "2018.09",
                        "Value": "2"
                    },
                    {
                        "Key": "2018.10",
                        "Value": "1"
                    },
                    {
                        "Key": "2018.11",
                        "Value": "2"
                    },
                    {
                        "Key": "2018.12",
                        "Value": "1"
                    }
                ]},
                {"CategoryName":"产业调整","Data":[
                    {
                        "Key": "2018.01",
                        "Value": "3"
                    },
                    {
                        "Key": "2018.02",
                        "Value": "4"
                    },
                    {
                        "Key": "2018.03",
                        "Value": "6"
                    },
                    {
                        "Key": "2018.04",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.05",
                        "Value": "6"
                    },
                    {
                        "Key": "2018.06",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.07",
                        "Value": "9"
                    },
                    {
                        "Key": "2018.08",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.9",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.10",
                        "Value": "3"
                    },
                    {
                        "Key": "2018.11",
                        "Value": "3"
                    },
                    {
                        "Key": "2018.12",
                        "Value": "3"
                    }
                ]},
                {"CategoryName":"违章用能","Data":[
                    {
                        "Key": "2018.01",
                        "Value": "4"
                    },
                    {
                        "Key": "2018.02",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.03",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.04",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.05",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.06",
                        "Value": "12"
                    },
                    {
                        "Key": "2018.07",
                        "Value": "11"
                    },
                    {
                        "Key": "2018.08",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.9",
                        "Value": "7"
                    },
                    {
                        "Key": "2018.10",
                        "Value": "6"
                    },
                    {
                        "Key": "2018.11",
                        "Value": "7"
                    },
                    {
                        "Key": "2018.12",
                        "Value": "6"
                    }
                ]},
                {"CategoryName":"用能结构改变","Data":[
                    {
                        "Key": "2018.01",
                        "Value": "7"
                    },
                    {
                        "Key": "2018.02",
                        "Value": "2"
                    },
                    {
                        "Key": "2018.03",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.04",
                        "Value": "4"
                    },
                    {
                        "Key": "2018.05",
                        "Value": "4"
                    },
                    {
                        "Key": "2018.06",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.07",
                        "Value": "5"
                    },
                    {
                        "Key": "2018.08",
                        "Value": "6"
                    },
                    {
                        "Key": "2018.09",
                        "Value": "9"
                    },
                    {
                        "Key": "2018.10",
                        "Value": "8"
                    },
                    {
                        "Key": "2018.11",
                        "Value": "6"
                    },
                    {
                        "Key": "2018.12",
                        "Value": "5"
                    }
                ]}
            ]}
        ]}
    ]
}

var showRealData = ZSB["政府视角"]["异常用能原因"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/ZFSJ.asmx/GetQuYuYCYNYY",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2018-01&endDate=2019-12",
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
var ColorCard = mainGroup['ycynyy']

var ColorGra = true;
function MakeColor(){
    if(ColorCard){  
        for(Color_Index = 0; Color_Index<Object.keys(ColorCard).length;Color_Index++)
        {
            var ColorTemp = ColorCard[Object.keys(ColorCard)[Color_Index]];
            if(ColorTemp.length==2)
            {
                var CurrentColor = (new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: ColorTemp[0] },
                    { offset: 1, color: ColorTemp[1] }, 
                ]))
            }
            else if(ColorTemp.length>=3)
            {
                CurrentColor = ColorTemp
            }
            else{
                CurrentColor = ColorTemp;
            }
            ColorList.push(CurrentColor)
        }
    }
    else if(ColorGra){
        ColorList.push((new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            { offset: 0, color: mainGraStart },
            { offset: 1, color: mainGraEnd}, 
        ])))
    }
    else{
        ColorList.push(mainColor)
    }
  
}

function Flush(){
    FirTitle.length = 0;
    $('.nav').empty()

    $('.nav').append("<li id='tag'></li>");
    // $("#tag").css({ "background-color": mainColor });
    for (var index = 0; index<EChart_Data["ChartData"].length;index++){
        const href = "title"+index;
        FirTitle.push(EChart_Data["ChartData"][index]["FirTitle"]);
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + FirTitle[index] + "</a></li>");
    }
    $('.nav a').click(function() {
        // $(".nav a").css({ "color": textColor })
        var FirstLevel;
        for (var i = 0; i < FirTitle.length; i++) {
            if (EChart_Data["ChartData"][i]['FirTitle'] === $(this).text()) {
                FirstLevel = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < EChart_Data["ChartData"][i]["TableData"].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a href='#'>" + EChart_Data["ChartData"][i]["TableData"][j]['SecTitle'] + "</a></span>");
                }
                break
            }
        }
        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            color_list.length = 0;
            new_color_list.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }
            // if (currentErjiTab != null) {
            //     currentErjiTab.attr("background-image", 'url("../../Image/zfsj/' + $(this).text() + '.png")');
            // }
            // // alert("../../Image/zfsj/"+$(this).text()+"focus.png");

            // $(this).attr("background-image", 'url("../../Image/zfsj/' + $(this).text() + 'focus.png")');
            // currentErjiTab = $(this);

            //数据解析
            const leibie_name = []; // 用于存放类别名
            for (var FirCon_Index = 0; FirCon_Index < EChart_Data["ChartData"].length; FirCon_Index++) {
                var FirCon = EChart_Data["ChartData"][FirCon_Index]['TableData']
                if (EChart_Data["ChartData"][FirCon_Index]['FirTitle'] ===  FirstLevel) {
                    for (var Secon_Index = 0; Secon_Index < FirCon.length; Secon_Index++) {
                        var Secon = FirCon[Secon_Index]['CategoryData']
                        if (FirCon[Secon_Index]['SecTitle'] === $(this).text()) {
                            unit =FirCon[Secon_Index]["Unit"];
                            for (var ThrCon_Index = 0; ThrCon_Index < Secon.length; ThrCon_Index++) {
                                var ThrCon = Secon[ThrCon_Index]["Data"]
                                leibie_name.push(Secon[ThrCon_Index]['CategoryName']);
                                const res = []; 
                                for (var Category_Index= 0; Category_Index < ThrCon.length; Category_Index++) {
                                    var number = Number(ThrCon[Category_Index]["Value"])
                                    if(yMax<number){
                                        yMax=number
                                    }
                                }
                                yMax = GetMaxNuber(yMax);
                                x_label.length = 0;
                                for (var Category_Index = 0; Category_Index < ThrCon.length; Category_Index++) {
                                    res.push(ThrCon[Category_Index]["Value"])
                                    x_label.push(ThrCon[Category_Index]["Key"])
                                    if (Category_Index > 0) {
                                        dataShadow.push(yMax)
                                    }
                                }
                                y_data.push(res);
                                shadow_datas.push(dataShadow) 
                            }
                        }
                    }
                }
            }
           
            if (leibie_name.length > 1) {
                new_liebie = leibie_name;
            } 
            else {
                new_liebie = [];
            }

            MakeColor();
            for (var i = 0; i < y_data.length; i++) {
               
                series.push({
                    name: new_liebie[i],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                  
                            color: ColorList[i],
                            lineStyle: {
                                width: 5 //设置曲线宽度
                            }
                        },

                    },
                    type: 'line',
                    // lineStyle: { normal: { color: colorList[0] } },
                    smooth: true,
                    symbolSize: 5,
                    // stack:'总量',
                    barWidth: "12px",
                    label: label,
                    data: y_data[i],
                        // color: function(params) {
                        //     return colorList[params.dataIndex]
                        // }
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
                        fontSize: globalFontSize - 5,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    icon: 'bar',
                    right: '3%',
                    top: '3%',
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 5,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    top: '15%',
                    bottom: '15%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 5,
                            offset: 5,
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            width: 5,
                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: -50,
                        color: globalFontColor,
                        fontSize: globalFontSize,
                        margin: 20
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
                        fontSize: globalFontSize,
                    },
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    axisLabel: {
                        color: globalFontColor,
                        fontSize: globalFontSize
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 4,
                            type: 'dotted'
                        }
                    },
                }],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
            $('#btn').click(function() {
                // ,itemStyle:{
                //     color: function(params){
                //       var key = params.dataIndex;
                //       if(key === curInt){
                //         return '#E062AE'
                //       }else{
                //         return '#37A2DA'
                //       }
                //     }}
                curInt = 1;
                myChart.setOption(option)
            });
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
        url: "http://localhost:2277/展示版/ZFSJ.asmx/"+jsonData['FunctionName'],
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