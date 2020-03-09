
isAlpShadow = true;




var EChart_Data = 
{
    "ChartData":[
        {"FirTitle":"万元产值综合能耗","TableData":[
            {"SecTitle":"二级标题","Unit":"万tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "2019.01",
                        "Value": "20"
                    },
                    {
                        "Key": "2019.02",
                        "Value": "120"
                    },
                    {
                        "Key": "2019.03",
                        "Value": "250"
                    },
                    {
                        "Key": "2019.04",
                        "Value": "310"
                    },
                    {
                        "Key": "2019.05",
                        "Value": "150"
                    },
                    {
                        "Key": "2019.06",
                        "Value": "320"
                    },
                    {
                        "Key": "2019.07",
                        "Value": "420"
                    },
                    {
                        "Key": "2019.08",
                        "Value": "320"
                    },
                    {
                        "Key": "2019.09",
                        "Value": "388"
                    },
                    {
                        "Key": "2019.10",
                        "Value": "490"
                    },
                    {
                        "Key": "2019.11",
                        "Value": "471"
                    },
                    {
                        "Key": "2019.12",
                        "Value": "120"
                    }
                ]},
            ]}
        ]},
        {"FirTitle":"单位面积能耗","TableData":[
            {"SecTitle":"二级标题","Unit":"万tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "2019.01",
                        "Value": "200"
                    },
                    {
                        "Key": "2019.02",
                        "Value": "120"
                    },
                    {
                        "Key": "2019.03",
                        "Value": "250"
                    },
                    {
                        "Key": "2019.04",
                        "Value": "400"
                    },
                    {
                        "Key": "2019.05",
                        "Value": "490"
                    },
                    {
                        "Key": "2019.06",
                        "Value": "320"
                    },
                    {
                        "Key": "2019.07",
                        "Value": "420"
                    },
                    {
                        "Key": "2019.08",
                        "Value": "450"
                    },
                    {
                        "Key": "2019.09",
                        "Value": "388"
                    },
                    {
                        "Key": "2019.10",
                        "Value": "490"
                    },
                    {
                        "Key": "2019.11",
                        "Value": "471"
                    },
                    {
                        "Key": "2019.12",
                        "Value": "256"
                    }
                ]}
            ]}
        ]},
        {"FirTitle":"度电经济增加值","TableData":[
            {"SecTitle":"二级标题","Unit":"万tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "2019.01",
                        "Value": "20"
                    },
                    {
                        "Key": "2019.02",
                        "Value": "120"
                    },
                    {
                        "Key": "2019.03",
                        "Value": "250"
                    },
                    {
                        "Key": "2019.04",
                        "Value": "620"
                    },
                    {
                        "Key": "2019.05",
                        "Value": "150"
                    },
                    {
                        "Key": "2019.06",
                        "Value": "320"
                    },
                    {
                        "Key": "2019.07",
                        "Value": "420"
                    },
                    {
                        "Key": "2019.08",
                        "Value": "200"
                    },
                    {
                        "Key": "2019.09",
                        "Value": "388"
                    },
                    {
                        "Key": "2019.10",
                        "Value": "490"
                    },
                    {
                        "Key": "2019.11",
                        "Value": "471"
                    },
                    {
                        "Key": "2019.12",
                        "Value": "120"
                    }
                ]} 
            ]}
        ]}
    ]
}

var showRealData = ZSB["能源客户视角"]["能效环比"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYKHSJ.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-08&endDate=2019-12",
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


var ColorCard = null;
var ColorGra = true;
function MakeColor(){
    if(ColorCard){  
        for(Color_Index = 0; Color_Index<Object.keys(ColorCard).length;Color_Index++)
        {
            var ColorTemp = ColorCard[Object.keys(ColorCard)[Color_Index]];
            if(ColorTemp.length>1)
            {
                var CurrentColor = (new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: ColorTemp[0] },
                    { offset: 1, color: ColorTemp[1] }, 
                ]))
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
    $("#tag").css({ "background-color": mainColor });
    for (var index = 0; index<EChart_Data["ChartData"].length;index++){
        const href = "title"+index;
        FirTitle.push(EChart_Data["ChartData"][index]["FirTitle"]);
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + FirTitle[index] + "</a></li>");
    }
    $('.nav a').click(function() {
        $(".nav a").css({ "color": textColor })
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
            //数据解析
            const leibie_name = []; // 用于存放类别名
            for (var FirCon_Index = 0; FirCon_Index < EChart_Data["ChartData"].length; FirCon_Index++) {
                var FirCon = EChart_Data["ChartData"][FirCon_Index]['TableData']
                if (EChart_Data["ChartData"][FirCon_Index]['FirTitle'] ===  FirstLevel) {
                    for (var Secon_Index = 0; Secon_Index < FirCon.length; Secon_Index++) {
                        var Secon = FirCon[Secon_Index]['CategoryData']
                        
                        var ColorNumber = Secon.length;
                        if (FirCon[Secon_Index]['SecTitle'] === $(this).text()) {
                            unit =FirCon[Secon_Index]["Unit"];
                            for (var ThrCon_Index = 0; ThrCon_Index < Secon.length; ThrCon_Index++) {
                                var ThrCon = Secon[ThrCon_Index]["Data"]
                                leibie_name.push(Secon[ThrCon_Index]['CategoryName']);
                                const res = []; 
                                shadow_datas.length = 0;
                                dataShadow.length = 0;
                                yMax = 0;
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
                                    dataShadow.push(yMax)
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
                if(isAlpShadow){
                    series.push(
                             {
                            type: 'bar',    
                            barGap: "-100%",
                            barWidth: '56px',
                            silent: true,
                            itemStyle: {
                                normal: { 
                                    color: mainUnder,  
                                    barBorderRadius: [0, 0, 0, 0]
                                            } 
                            },
                            data: shadow_datas[i],
                        }, )
                }
                series.push(
                {   
                    name: new_liebie[i],
                    type: 'bar',
                    barGap: "-100%",
                    itemStyle: itemStyle = {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                            color:ColorList[i]
                        },
                
                    },
                    barWidth: '56px',
                    label: label,
                    data: y_data[i],
                })
              
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: textColor,
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    right: '3%',
                    data: new_liebie,
                    itemWidth: 20,
                    itemHeight: 12,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: textColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    offset: 1,

                    axisLine: {
                        lineStyle: {
                            color: textColor,
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
                        color: textColor,
                        fontSize: globalFontSize,
                        margin: 80,
                        align: 'center',
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [
         
                    {
                        name: unit,
                        nameLocation: 'end',
                        nameGap: 50,
                        nameTextStyle: {
                            color: textColor,
                            fontSize: globalFontSize,
                        },
                        axisTick: {
                            show: false
                        },
                        type: 'value',
                        axisLabel: {
                            color: textColor,
                            fontSize: globalFontSize
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                type: 'dashed'
                            }
                        },
                    }
                ],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
            $('#btn').click(function() {
    
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
        url: "http://localhost:2277/监控版/NYKHSJ.asmx/"+jsonData['FunctionName'],
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