var showRealData = JKB["能源交易"]["交易详情"]["企业简介"]

var table_data = {
    "title": "企业简介",
    "data": [
        { value: "企业简介" },
        { value: "上海通用重工集团有限公司" },
        { value: "★★★★" },
        { value: "★" },
        { value: "上海市杨浦区许昌路1038号" },
        { value: "上海市杨浦区许昌路1038号" },
        { value: "焊接设备、切割设备、焊材、电线电缆、电气化机械、重工机械、金属制品等制造加工及技术开发，国内贸易（除专项规定），从事货物及技术进出口业务，自由房屋租凭，自由设备租凭，实业投资，投资管理，投资咨询，焊接技术培训" }
    ]
};


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


    
    // 添加数据
    let tabvar = "";

    tabvar += "<tr>";
    tabvar += " <td colspan=3 class='title'>" + table_data['data'][0]['value'] + "</td>";
    tabvar += " </tr>";
    tabvar += " <tr>";
    tabvar += "    <td colspan=0 class='content erjiTitle'>企业名称：</td>";
    tabvar += "    <td colspan=0 class='content erjiTitle'>星级评价：</td>";
    tabvar += "  </tr>";
    tabvar += "  <tr>";
    tabvar += "     <td colspan=1 class='content'>" + table_data['data'][1]['value'] + "</td>";
    tabvar += "    <td class='stars'>"+table_data['data'][2]['value'] +"<span class='nostar'>"+table_data['data'][3]['value']+"<span>"+"</td>";
    tabvar += "  </tr>";
    tabvar += "  <tr>";
    tabvar += " <td colspan=1 class='content erjiTitle1'>公司地址：</td>";
    tabvar += "     <td colspan=1 class='content erjiTitle1'>通讯地址：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td colspan=1 class='content'>" + table_data['data'][4]['value'] + "</td>";
    tabvar += "       <td colspan=1 class='content'>" + table_data['data'][5]['value'] + "</td>";
    tabvar += "   </tr>";


    tabvar += "    <tr>";
    tabvar += "      <td colspan=2 class='content erjiTitle2'>经营或服务范围：</td>";
    tabvar += "   </tr>";
    tabvar += "    <tr>";
    tabvar += "      <td colspan=2 class='borderContent'>"+ table_data['data'][6]['value'] +"</td>";
    tabvar += "   </tr>";
    $('#myTabs').empty();
    $('#myTabs').append(tabvar);
    //延迟刷新
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
