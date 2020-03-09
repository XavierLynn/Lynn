
var showRealData = ZSB["能源客户视角"]["最大设备利用率行业排名"];

ChartSeries = "pie"
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
                EChart_Data = JSON.parse(data);
                Flush();
            }  
        }
    });
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

CurrentData = EChart_Data[ChartSeries]
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
            else
            {
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
var DomWidth = "2500px";
var DomHeight = "850px";

var TabWidth = Number(DomWidth.substring(0,DomWidth.length-2))+100+"px";
var TabHeight = Number(DomHeight.substring(0,DomHeight.length-2))+250+"px";
alert(TabWidth)
globalFontSize = (Number(DomWidth.substring(0,DomWidth.length-2)) + Number(DomHeight.substring(0,DomHeight.length-2)))/80;


function Flush(){
    ChartName.length = 0;
    $('.nav').empty()
    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({ "background-color": mainColor });
    $("#show_charts").css({"width":DomWidth,"height":DomHeight})
    $("#myTabs").css({"width":TabWidth,"height":TabHeight,})
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
            //每次点击初始化上一次加载的数据
            series.length = 0;
            y_data.length = 0;
           
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }
            //
            //数据解析
            var SecLevel = $(this).text();
            DataAnalysis(ChartSeries,FirstLevel,SecLevel)
            MakeColor();
            myChart = echarts.init(document.getElementById('show_charts')); 
            ChartStyle(ChartSeries,globalFontSize);
            // option.grid.bottom = "0%";
            // option.grid.top = "15%";
            myChart.setOption(option);
            window.onresize = function(){
                myChart.resize();
            
            }
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
                EChart_Data = JSON.parse(data);
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
ue.interface.Highlight = function(xlabel) {
    x_val = [xlabel];
    new_color_list = [];
    series = [];

    for (var i = 0; i < color_list.length; i++) {
        const res = []; // 存储颜色的过渡矩阵
        for (var j = 0; j < y_data[i].length; j++) {
            res.push(new echarts.graphic.LinearGradient(0, 0, 1, 0, [
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
            barWidth: '26px',
            label: label,
            data: y_data[i],
            color: function(params) {
                return colorList[params.dataIndex]
            }
        })
    }
    option.series = series;
    myChart.clear();
    myChart.setOption(option);
};