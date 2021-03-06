globalFontSize = 40;

var showRealData = JKB["驾驶舱"]["能源交易概况"]

var interval;

var table_data = {
    "data": [{
        "title": "能源交易概况",
        "table": [ 
        {"title": "接入企业", "xLabel": "", "yLabel": "11"},
        {"title": '面积',  "xLabel": "", "yLabel": "12" },
        {"title": '去年经济增加值', "xLabel": "", "yLabel": "17"}, 
        {"title": '清洁能源占比', "xLabel": "万", "yLabel": "13.5"}]
    }, ]
};

$(function() {
   
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
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
       
    }
    
    );
    
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

function Flush(){

    yiji_title.length = 0;
    $('.nav').empty()

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
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
                }
                break
            }
        }

        $('.erji_title').append(function() {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];
    
            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                   
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        var res={
                            value: table_data['data'][i]['table'][j]['yLabel'],
                            name: table_data['data'][i]['table'][j]['xLabel'],
                        }
                        y_data.push(res);
                    }   
                }
                    
            }

            var tips = 0;
            function loading() {
                return [{
                        value: tips,
                        itemStyle: {
                            normal: {
                                borderRadius: [15, 15, 15, 15],

                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: 'rgba(255,255,255,0)' },
                                    { offset: 0.75, color: 'rgba(255,255,255,1)' }
                                ], false),
                            }
                        }
                    },
                    {
                        value: 100 - tips,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                            }
                        }
                    }
                ];
            }
            currentData = table_data["data"][0]["table"]
            var center = [['15%', '35%'],['38.5%', '35%'],['61.5%', '35%'],['85%', '35%'],]
            for (var i = 0;i<currentData.length;i++){
                series.push({
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data:[y_data[i].value],
                    radius: ['53%', '65%'],
                    center: center[i],
                    itemStyle: {
                    },
                    label: {
                        show: true,
                        formatter: function (params) {
                            for(var j = 0;j<currentData.length;j++){
                                value = params.value
                                if( value  == y_data[j].value){
                                    name = y_data[j].name
                                }
                                if(value == 0){
                                    value = "____"
                                }
                            }
                            return value+ "\n"+ "{a|"+name+"}"
                        },
                        rich:{
                            a:{
                                color:"#ffffff",
                                fontSize:40
                            }

                        },
                        position: 'center',
                        fontSize: 90,
                        color: '#FFFFFF',
                        padding: [20, 0, 0, 0],
                        textShadowBlur: 30,
                        textShadowColor: '#418dff',
                        fontFamily: '庞门正道标题体',

                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    hoverOffset: 0,
                    minAngle: 20,
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['53%', '65%'],
                    center: center[i],
                    hoverAnimation: false,
                    itemStyle: {

                        shadowColor: '#418dff',
                        shadowBlur: 20,
                        shadowOffsetY: 0,
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: loading()
                },)
               
            }
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
              

                legend: {
                    show: false,
                    orient: 'vertical',
                    right: '0',
                    x: 'left',
                    y: 'bottom',
                    bottom: '50px',
                  
                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: ['aa', 'bb', 'cc', 'dd'],
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
           
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(255,255,255,0.1)' },
                
                    { offset: 1, color: 'rgba(255,255,255,0.25)' }
                ], false),
     
                series: series,
                //animationDuration: 0
                animation: false,
                animationThreshold: 100,
                animationDurationUpdate: function(idx) {
                    // 越往后的数据延迟越大
                    return idx * 1000;
                },
            };
           
            clearInterval(interval);
            interval = setInterval(function() {
                if (tips == 100) {
                    tips = 0;
                } else if (tips <= 10) {
                    ++tips;
                } else if (tips >= 90) {
                    ++tips;
                } else {
                    ++tips;
                }
                for (var i = 0; i < 8; i++) {
                    if (i % 2 != 0) {
                        xValue =
                            option.series[i].data = loading()
                    };
                }
                myChart.setOption(option);
            }, 50);
        }); 
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
        url: "http://localhost:2277/监控版/JSC.asmx/"+jsonData['FunctionName'],
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