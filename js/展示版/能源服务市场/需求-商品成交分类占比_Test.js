globalFontSize = 40;
globalFontColor = textColor;

 //使用模拟数据
var table_data = {
    "data": [{
        "title": "需求成交分类占比",
        "table": [{
            "title": "总",
            "unit": "tce",
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                        "Key": "设备销售",
                        "Value": 25
                    },

                    {
                        "Key": "设备租赁",
                        "Value": 30
                    },
                    {
                        "Key": "用能诊断",
                        "Value": 20
                    },
                    {
                        "Key": "用能咨询",
                        "Value": 90
                    },
                    {
                        "Key": "电能替代",
                        "Value": 30
                    },
                    {
                        "Key": "合同能源管理",
                        "Value": 23
                    },
                    {
                        "Key": "节能改造",
                        "Value": 40
                    },
                    {
                        "Key": "能源供应",
                        "Value": 32
                    },
                    {
                        "Key": "能源供应",
                        "Value": 26
                    },


                ]
            }, ]
        }]
    }, {
        "title": "客户行业分析",
        "table": [{
            "title": "总",
            "unit": "tce",
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                        "Key": "设备销售",
                        "Value": 40
                    },

                    {
                        "Key": "设备租赁",
                        "Value": 30
                    },
                    {
                        "Key": "用能诊断",
                        "Value": 20
                    },
                    {
                        "Key": "用能咨询",
                        "Value": 20
                    },
                    {
                        "Key": "电能替代",
                        "Value": 30
                    },
                    {
                        "Key": "合同能源管理",
                        "Value": 90
                    },
                    {
                        "Key": "节能改造",
                        "Value": 24
                    },
                    {
                        "Key": "能源供应",
                        "Value": 32
                    },
                    {
                        "Key": "能源供应",
                        "Value": 26
                    },


                ]
            }, ]
        }]
    }]
};
var EChart_Data = 
{
    "ChartData":[
        {"FirTitle":"需求成交分类占比","TableData":[
            {"SecTitle":"二级标题","Unit":"tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "设备销售",
                        "Value": 25
                    },

                    {
                        "Key": "设备租赁",
                        "Value": 30
                    },
                    {
                        "Key": "用能诊断",
                        "Value": 20
                    },
                    {
                        "Key": "用能咨询",
                        "Value": 90
                    },
                    {
                        "Key": "电能替代",
                        "Value": 30
                    },
                    {
                        "Key": "合同能源管理",
                        "Value": 23
                    },
                    {
                        "Key": "节能改造",
                        "Value": 40
                    },
                    {
                        "Key": "能源供应",
                        "Value": 32
                    },
                    {
                        "Key": "能源供应",
                        "Value": 26
                    },
                ]}
            ]}   
        ]},
        {"FirTitle":"客户行业分析","TableData":[
            {"SecTitle":"二级标题","Unit":"tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "设备销售",
                        "Value": 40
                    },

                    {
                        "Key": "设备租赁",
                        "Value": 30
                    },
                    {
                        "Key": "用能诊断",
                        "Value": 20
                    },
                    {
                        "Key": "用能咨询",
                        "Value": 20
                    },
                    {
                        "Key": "电能替代",
                        "Value": 30
                    },
                    {
                        "Key": "合同能源管理",
                        "Value": 90
                    },
                    {
                        "Key": "节能改造",
                        "Value": 24
                    },
                    {
                        "Key": "能源供应",
                        "Value": 32
                    },
                    {
                        "Key": "能源供应",
                        "Value": 26
                    },
                ]}
            ]}
        ]}
    ]
}

var showRealData = ZSB["能源服务市场"]["需求-商品成交分类占比"];


$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/NYFWSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-01&endDate=2019-12",
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

var ColorCard = Null;
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
            else if(ColorTemp.length==3)
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
                                       res.push({value:ThrCon[Category_Index]["Value"],
                                                name:ThrCon[Category_Index]["Key"],
                                                itemStyle: {
                                                    label: {
        
                                                    },
                                                    labelLine: {
                                                        show: true,
        
                                                    },
                                                    normal: {
                                                        borderWidth: 5,
                                                        shadowBlur: 20,
                                                        borderColor: mainColor,
                                                        shadowColor: mainColor,
                                                    }
                                                }},
                                                {
                                                    value: 5,
                                                    name: '',
            
                                                    itemStyle: {
                                                        normal: {
                                                            label: {
                                                                show: false
                                                            },
                                                            labelLine: {
                                                                show: false
                                                            },
                                                            color: 'rgba(0, 0, 0, 0)',
                                                            borderColor: 'rgba(0, 0, 0, 0)',
                                                            borderWidth: 0
                                                        }
                                                    }
                                                });
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
            
            var dataCategory = EChart_Data["ChartData"][0]["TableData"][0]["CategoryData"][0]["Data"]
         
            var rich = {
                white: {
                    color: '#ddd',
                    align: 'top',
                    padding: [3, 0],
                    fontSize: 60,
                    fontFamily: '庞门正道标题体',
                    padding: [10, 0, 0, 0]
                }
            };

            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                series.push({
                    name: new_liebie[i],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    clockWise: false,
                    hoverAnimation: true,

                    radius: ['59%', '68%'],
                    center: ['51.3%', '50%'],

                    itemStyle: {

                        normal: {
                            color: mainColor,

                        },
                   
                        shadowBlur: 20,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,

                        emphasis: {


                            shadowBlur: 20,
                            shadowOffsetY: 0,
                        }
                    },
                    hoverOffset: 15,
                    label: {
                        show: true,
                        position: 'outside',
                        fontSize: 40,
                        align: 'bottom',
                        color: textColor,
                        formatter: function(params) {
                            var percent = 0;
                            var total = 0;
                            for (var j = 0; j < y_data.length; j++) {
                                for (var k = 0; k < y_data[j].length; k++) {
                                    total += y_data[j][k]['value'];
                                }
                            }

                            percent = ((params.value / total) * 100).toFixed(0);
                            if (params.name !== '') {
                                return params.name + "     " + '{white|' + percent + '%}';
                            } else {
                                return '';
                            }
                        },
                        rich: rich

                    },
                    labelLine: {
                        length: 30,
                        length2: 150,
                    },
                    // minAngle: 20,
                    data: y_data[i],
                })
            }
            console.log(new_liebie);
            var colors = '#418dff';
            var aaaaaaaa = ['#50C9FF', '#1791FF']
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}<br/> {c}" + "<br/> {d}%",
                    // formatter: "{b}: {c} {d}%",
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var j = 0; j < y_data.length; j++) {
                            for (var k = 0; k < y_data[j].length; k++) {
                                total += y_data[j][k]['value'];
                            }
                        }

                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + "<br/>" + params.value + "<br/>" + percent + '%';
                        } else {
                            return '';
                        }
                    },

                    textStyle: {
                        fontSize: 38,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },

                legend: {
                    show: false,
                    orient: 'vertical',
                    right: '0',
                    x: 'left',
                    y: 'bottom',
                    bottom: '50px',
                    formatter: function(name) {
                        var total = 0;
                        var target;
                        var value;
                        for (var i = 0; i < dataCategory.length; i++) {
                            total += dataCategory[i].Value;
                            if (dataCategory[i].Key == name) {
                                target = dataCategory[i].Value;
                            }
                        }
                        return name + '   ' + target + unit + '   ' + ((target / total) * 100).toFixed(2) + '%';

                    },

                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: '',
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },


                color: '#d1f6ff',
                series: series,
                animationDuration: 0
            };

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
        url: "http://localhost:2277/展示版/NYFWSC.asmx/"+jsonData['FunctionName'],
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