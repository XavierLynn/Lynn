
var EChart_Data = 
{
    "ChartData":[
        {"FirTitle":"去年电量构成","TableData":[
            {"SecTitle":"二级标题","Unit":"万tce","CategoryData":[
                {"CategoryName":"类别one","Data":[
                    {
                        "Key": "峰时段电量",
                        "Value": 266.12
                    },
                    {
                        "Key": "平时段电量",
                        "Value": 361.57
                    },
                    {
                        "Key": "谷时段电量",
                        "Value": 241.16
                    }
                ]}   
            ]},   
        ]},
    ]
}

var ColorCard = null;

var ColorGra = false;

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

var showRealData = ZSB["能源客户视角"]["去年电量构成-电量峰谷"];

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
    var totolNum = 0;
    for (var x = 0; x < EChart_Data["ChartData"][0]["TableData"][0]["CategoryData"][0]["Data"].length; x++) {
        totolNum += EChart_Data["ChartData"][0]["TableData"][0]["CategoryData"][0]["Data"][x]["Value"]
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

            $('#show_table').empty();
            let tabvar = "";
            //行间隔
            tabvar += " <tr style='height:100px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";
            tabvar += "   <td></td>";
            tabvar += "    <td style='width:620px;height:150px;text-align:center;'>";
            tabvar += "         <text class='label'>" + totolNum + "万\n\n" + "&nbsp kwh" + "</text>";
            tabvar += "    </td>";

            $('#show_table').append(tabvar);

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
            MakeColor();
            var dataCategory = EChart_Data["ChartData"][0]["TableData"][0]["CategoryData"][0]["Data"]
            for (var i = 0; i < y_data.length; i++) {
                series.push({
                    name: new_liebie[i],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data: y_data[i],
                    radius: ['43%', '63%'],
                    center: ['50%', '30%'],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    hoverOffset: 30,
                    label: {
                        show: true,
                        formatter: '{d}%',
                        position: 'outside',
                        fontSize: globalFontSize - 5,
                        color: textColor
                    },
                    labelLine: {
                        length: 20,
                        length2: 30,
                        lineStyle: {
                            width: 4,
                            color: mainColor
                        }
                    },
                    minAngle: 20,
                })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}<br/> {c}" + unit + "<br/> {d}%",
                    textStyle: {
                        fontSize: globalFontSize,
                        color: textColor,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    orient: 'vertical',
                    x: 20,
                    y: 700,
                    bottom: '50px',
                    // top:'middle',
                    itemWidth: 40,
                    itemHeight: 20,
                    itemGap: 60,
                    data: x_label,
                    formatter: function(name) {
                        
                      
                        var target;
                     
                        for (var i = 0; i < dataCategory.length; i++) {
                            
                            if (dataCategory[i]["Key"] == name) {
                                target = dataCategory[i]["Value"];
                            }
                        }
                        return name + '         ' + target;

                    },
                    
                    textStyle: {
                        color: textColor,
                        fontSize: globalFontSize,
                    }
                },
            
                color: [mainGroup['qndlgcdlfg']['one'], mainGroup['qndlgcdlfg']['two'], mainGroup['qndlgcdlfg']['three']],
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