var table_data = {
    "title": "需求方",
    "data": {
        "value1":"XX能源服务公司",
        "value2": "宋王栐《燕翼诒谋录》卷五：“今州郡寄居，有丁忧事故数年不申到者，亦有申部数年，而部中不曾改正榜示者，吏人公然评价，长贰、郎官为小官时皆尝有之。” 金元好问《为橄子醵金》诗之一：“明珠评价敌连城，弃掷泥涂意未平。” 清黄六鸿《福惠全书·杂课...",
        
    }

};
var showRealData = JKB["能源交易"]["交易详情"]["需求方"]
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
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "--"+table_data['data']['value1']+"</a></li>");

    let tabvar = "";
    tabvar += "<button>";
    tabvar += "<label class='column1'>经营或服务范围&nbsp;</label>";
    tabvar += "</button>";
    tabvar += "<textarea  class='text'>"+table_data['data']['value2']+"</textarea>";
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