
var EChart_Data = 
{
    "ChartData":[
        {"FirTitle":"行业能源消费占比","TableData":[
            {"SecTitle":"二级标题","Unit":"tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "信息传输、软件和信息技术服务业",
                        "Value": 11.81
                    },

                    {
                        "Key": "金融业",
                        "Value": 0.22
                    },
                    {
                        "Key": "住宿和餐饮业",
                        "Value": 2.08
                    },
                    {
                        "Key": "交通运输、仓储和邮政业",
                        "Value": 2.37
                    },
                    {
                        "Key": "批发和零售业",
                        "Value": 1.38
                    },
                    {
                        "Key": "建筑业",
                        "Value": 0.11
                    },
                    {
                        "Key": "电力 热力 燃气及水生产和供应业",
                        "Value": 0.09
                    },
                    {
                        "Key": "制造业",
                        "Value": 67.37
                    },
                    {
                        "Key": "文化 体育和娱乐业",
                        "Value": 0.37
                    },
                    {
                        "Key": "房地产业",
                        "Value": 0.17
                    },
                    {
                        "Key": "租赁和商务服务业",
                        "Value": 9.46
                    },
                    {
                        "Key": "科学研究和技术服务业",
                        "Value": 11.6
                    },
                    {
                        "Key": "水利、环境和公共设施管理业",
                        "Value": 0.11
                    },
                    {
                        "Key": "卫生和社会工作",
                        "Value": 1.22
                    },
                    {
                        "Key": "居民服务 修理和其他服务业",
                        "Value": 0.03
                    },
              
                    {
                        "Key": "教育",
                        "Value": 3.39
                    },
                    {
                        "Key": "公共管理 社会保障和社会组织",
                        "Value": 0.27
                    },
                    {
                        "Key": "农、林、牧、渔业",
                        "Value": 0.06
                    }
                ]}
            ]}
        ]}
    ]
}

var showRealData = JKB["能源分析"]["区域分析"]["行业能源消费占比"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionCYXFZB",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2018-02&endDate=2018-03",
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
    FirTitle.length = 0;
    $('.nav').empty()

    $('.nav').append("<li id='tag'>◀</li>");
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
                                for(var i = 0; i < ThrCon.length-1; i++)
                                {
                                    for(var j = 0; j < ThrCon.length-1; j++)
                                    {
                                        var preNum = ThrCon[j]["Value"]
                                        var curNum = ThrCon[j+1]["Value"]
                                        if(preNum<curNum){
                                            var temp = ThrCon[j];
                                            ThrCon[j] = ThrCon[j+1];
                                            ThrCon[j+1] = temp;
                                        }
                                        
                                    }
                                }
                                for (var Category_Index= 0; Category_Index < ThrCon.length; Category_Index++) {
                                   
                                    var number = Number(ThrCon[Category_Index]["Value"])
                                    
                                    if(yMax<number){
                                        yMax=number
                                    }
                                }
                                yMax = GetMaxNuber(yMax);
                                x_label.length = 0;
                                for (var Category_Index = 0; Category_Index < ThrCon.length; Category_Index++) {
                                    res.push({value:ThrCon[Category_Index]["Value"],name:ThrCon[Category_Index]["Key"]})
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

            // MakeColor();
           
            for (var i = 0; i < y_data.length; i++) {
               
                series.push({
                    name: new_liebie[i],
                    type: 'pie',
                    // avoidLabelOverlap: false,
                    data: y_data[i],
                    radius: ['0%', '72%'],
                    center: ['50%', '52%'],
                    itemStyle: {
                        shadowColor: 'rgba(52,155,255, 1)',
                        shadowBlur: 20,
                        shadowOffsetY: 0
                    },
                    hoverOffset: 30,
                    label: {
                        alignTo:"edge",
                        color: '#FFFFFF',
                        formatter: '{b} {d}%',
                      
                        // borderWidth:1,
                        // borderColor:'#ddd',
                        margin:'2%',
                        bleedMargin:50,
                        distanceToLabelLine:20,
                        fontSize: 25,
                    },
                    labelLine: {
                        length:1,
                        lineStyle: {
                            width: 2,
                            color: '#61adff'
                        }
                    },
                    minAngle: 5,
                    // roseType: 'area',
                })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}<br/> {c}" + unit + "<br/> {d}%",
                    textStyle: {
                        fontSize: 25,

                        // color:"rgba(255,255,0)"
                    }
                },
                legend: {
                    show: false,
                    orient: 'horizontal',
                    // right: '55',
                    // top:'middle',
                    bottom: '0',
                    width: 300,
                    itemWidth: 20,
                    itemHeight: 10,
                    itemGap: 20,
                    data: x_label,
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize - 5,
                        shadowColor: 'rgba(65,141,255,0.75)',
                        shadowBlur: 10,
                        shadowOffsetY: 0
                    }
                },
                color: ['#d1f6ff', '#b0f0ff', '#86e7fd', '#3c91d8', '#3588b8', '#296c99'],
                series: series,
                animationDuration: 0
            };

            // myChart.clear();
            myChart.setOption(option);
        });
        $('.erji_title a')[0].click();
    });
    $('.nav a')[0].click();
}

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/"+jsonData['FunctionName'],
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
