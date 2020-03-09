
var table_data = {
    "title": "合同评价",
    "data": {
        "value1": "★★★★",
        "value2": "★",
        "value3": "4.12",
        "value4": "★★★★",
        "value5": "★",
        "value6": "4.12",
        "value7": "★★★★",
        "value8": "★",
        "value9": "4.12",
        "value10": "宋王栐《燕翼诒谋录》卷五：“今州郡寄居，有丁忧事故数年不申到者，亦有申部数年，而部中不曾改正榜示者，吏人公然评价，长贰、郎官为小官时皆尝有之。” 金元好问《为橄子醵金》诗之一：“明珠评价敌连城，弃掷泥涂意未平。” 清黄六鸿《福惠全书·杂课..."
    }

};

var showRealData = JKB["能源交易"]["交易详情"]["合同评价"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJY.asmx/GetRegionFQXFPM",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-12&endDate=2020-01",
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
   
    yiji_title.length = 0;
    $('.nav').empty()
   
    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "</a></li>");

    let tabvar = "";
    tabvar += "<button>";
    tabvar += "<label class='column1'>服务速度&nbsp;</label>";
    tabvar += "<label class='column2 star'>"+table_data['data']['value1']+"<label class='nostar'>"+table_data['data']['value2']+"</label></label>";
    tabvar += "<label class='column3'>"+table_data['data']['value3']+"</label>";
    tabvar += "<label class='column4 star'>服务速度&nbsp;</label>";
    tabvar += "<label class='column5'>"+table_data['data']['value4']+"<label class='nostar'>"+table_data['data']['value5']+"</label></label>";
    tabvar += "<label class='column6'>"+table_data['data']['value6']+"</label>";
    tabvar += "</button>";
    tabvar += "<button>";
    tabvar += "<label class='column1'>服务态度&nbsp;</label>";
    tabvar += "<label class='column2 star'>"+table_data['data']['value7']+"<label class='nostar'>"+table_data['data']['value8']+"</label></label>";
    tabvar += "<label class='column3'>"+table_data['data']['value9']+"</label>";
    tabvar += "</button>";
    tabvar += "<textarea  class='text'>"+table_data['data']['value10']+"</textarea>";
    $('#show_charts').empty();
    $('#show_charts').append(tabvar);
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYJY.asmx/"+jsonData['FunctionName'],
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
