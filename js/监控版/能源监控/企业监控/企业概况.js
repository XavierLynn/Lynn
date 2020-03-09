"object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {}, ue.interface.broadcast = function(e, t) {
    if ("string" == typeof e) {
        var o = [e, ""];
        void 0 !== t && (o[1] = t);
        var n = encodeURIComponent(JSON.stringify(o));
        "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "", "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location.hash = n, document.location.hash = encodeURIComponent("[]"))
    }
}) : function(e) { ue.interface = {}, ue.interface.broadcast = function(t, o) { "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, "")) } }(ue.interface), (ue4 = ue.interface.broadcast);

var showRealData = JKB["能源监控"]["企业监控"]["日月光半导体"];

var table_data = {
    "data": [{
        "title": "企业概况",
        "table": [{ "name": "行业类型", "value": "制造业" },
            { "name": "所属区域", "value": "张江南区" },
            { "name": "电压等级", "value": "10kVA"  },
            { "name": "运行容量", "value": "10kVA" },
            { "name": "用电地址", "value": "上海市张江高科园区李时珍路421号" },
        ],
    }]
};



function Flush(){
    var table_values = table_data['data'][0]['table'];
    $('.nav').empty()
    $('#show_charts').empty();
    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][0]['title'] + "</a></li>");

    let tabvar = "";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>"+table_values[0]['name']+":  "+"&nbsp"+"</label>" + table_values[0]['value'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>"+table_values[1]['name']+":  "+"&nbsp"+"</label>" + table_values[1]['value'] + "</label>";
    // tabvar += "<label class='column3'><label class='titleCloumn'>经济增加值&nbsp;</label>" + table_data['data']['value3'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>"+table_values[2]['name']+":  "+"&nbsp"+"</label>" + table_values[2]['value'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>"+table_values[3]['name']+":  "+"&nbsp"+"</label>" + table_values[3]['value'] + "</label>";
    // tabvar += "<label class='column3'><label class='titleCloumn'>当月综合能耗&nbsp;</label>" + table_data['data']['value6'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>"+table_values[4]['name']+":    "+"&nbsp"+"</label>" + table_values[4]['value'] + "</label>";
    // tabvar += "<label class='column2'><label class='titleCloumn'>行业数量&nbsp;</label>" + table_data['data']['value5'] + "</label>";
    // tabvar += "<label class='column3'><label class='titleCloumn'>当月综合能耗&nbsp;</label>" + table_data['data']['value6'] + "</label>";
    tabvar += "</button>";
    $('#show_charts').append(tabvar);
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJK.asmx/GetEnteOverview",
        type: "POST",
        async: true,
        data: "elecID=1352958966",
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