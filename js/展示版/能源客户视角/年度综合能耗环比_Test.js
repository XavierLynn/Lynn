var showRealData = ZSB["能源客户视角"]["年度综合能耗环比"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/NYKHSJ.asmx/GetQuYuNHHB",
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

ChartSeries = "bar"
var ajaxSuccess
var Data_json = $.ajax({ url: "http://127.0.0.1:8000/ChartSystems/json/test_data.json", async: false,error:function(){alert(",errors")},success:function (data){ajaxSuccess = true,alert("success")}}).responseText;
CurrentDatas = $.parseJSON(Data_json);
CurrentData = CurrentDatas[ChartSeries] 
alert(CurrentData)

// "http://127.0.0.1:8000/ChartSystems/json/test_data.json"
function Flush(){
    ChartName.length = 0;
    $('.nav').empty()
    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({ "background-color": mainColor });
    for (var index = 0; index<CurrentData.length;index++){
        const href = "title"+index;
        ChartName.push(CurrentData[index]["ChartName"]);
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + ChartName[index] + "</a></li>");
    }
    $('.nav a').click(function() {
        $(".nav a").css({ "color": textColor })
        var FirstLevel;
        for (var i = 0; i < ChartName.length; i++) {
            if (CurrentData[i]['ChartName'] === $(this).text()) {
                FirstLevel = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < CurrentData[i]["ChartData"].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a href='#'>" + CurrentData[i]['ChartData'][j]['TableName'] + "</a></span>");
                }
                break
            }
        }
        $('.erji_title').click(function() {
            series.length = 0;
            y_data.length = 0;
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }
            var SecLevel = $(this).text();
            DataAnalysis(ChartSeries,FirstLevel,SecLevel)
            MakeColor();
            myChart = echarts.init(document.getElementById('show_charts')); 
            ChartStyle(ChartSeries);
            option.xAxis.axisLabel = {
                interval: 0,
                rotate: -50,
                color: textColor,
                fontSize: globalFontSize,
                margin: 80,
                align: 'center',
            }
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
        url: "http://localhost:2277/展示版/NYKHSJ.asmx/"+jsonData['FunctionName'],
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
//使其高亮
ue.interface.Highlight = function(Key) {
    x_val = [Key];
    new_color_list = [];
    series = [];

    for (var i = 0; i < color_list.length; i++) {
        const res = []; // 存储颜色的过渡矩阵
        for (var j = 0; j < y_data[i].length; j++) {
            res.push(new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                { offset: 0, color: color_list[i][0] },
                { offset: 1, color: color_list[i][1] }
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
                        new_color_list[i].splice(n, 1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: color_list[i][2] },
                            { offset: 1, color: color_list[i][3] }
                        ]));
                        break
                    }
                }
            }
        }
    }

    for (var i = 0; i < y_data.length; i++) {
        const colorList = new_color_list[i];
        series.push({
            name: new_liebie[i],
            type: 'bar',
            barGap: 0,
            itemStyle: itemStyle,
            barWidth: '42px',
            label: label,
            data: y_data[i],
            color: function(params) {
                return colorList[params.dataIndex]
            }
        })
    }
    option.series = series;
    option.animationDuration = 1000;
    myChart.clear();
    myChart.setOption(option);
};
