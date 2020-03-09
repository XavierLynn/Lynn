var showRealData = JKB["能源分析"]["区域分析"]["区域概况"];
 //使用模拟数据
var table_data = {
    "title": "张江南区概况",
    "data": {
        "value1": "122.55km",
        "value2": "10T",
        "value3": "1.23万",
        "value4": "717",
        "value5": "10",
        "value6": "5000tce"
    }

};


function Flush(){
    $('.nav').empty()
    $('#show_charts').empty();
    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "</a></li>");

    let tabvar = "";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>面积&nbsp;</label>" + table_data['data']['value1'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>当月碳排放&nbsp;</label>" + table_data['data']['value2'] + "</label>";
    tabvar += "<label class='column3'><label class='titleCloumn'>经济增加值&nbsp;</label>" + table_data['data']['value3'] + "</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'><label class='titleCloumn'>接入企业数&nbsp;</label>" + table_data['data']['value4'] + "</label>";
    tabvar += "<label class='column2'><label class='titleCloumn'>行业数量&nbsp;</label>" + table_data['data']['value5'] + "</label>";
    tabvar += "<label class='column3'><label class='titleCloumn'>当月综合能耗&nbsp;</label>" + table_data['data']['value6'] + "</label>";
    tabvar += "</button>";
    $('#show_charts').append(tabvar);
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionOverview",
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
