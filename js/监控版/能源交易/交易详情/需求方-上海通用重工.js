var showRealData = JKB["能源交易"]["交易详情"]["需求方-上海通用重工"]
var table_data = {
    "title": "企业简介",
    "data": [
        { value: "需求方-上海通用重工：" },
        { value: "焊接设备、切割设备、焊材、电线电缆、电气化机械、重工机械、金属制品等制造加工及技术开发，国内贸易（除专项规定），从事货物及技术进出口业务，自由房屋租凭，自由设备租凭" },
        { value: "内容: 焊接设备、切割设备、焊材、电线电缆、电气化机械、重工机械、金属制品等制造加工及技术开发，国内贸易（除专项规定），从事货物及技术进出口业务，自由房屋租凭，自由设备租凭，实业投资，投资管理，投资咨询，焊接技术培"+
        "训焊接设备、切割设备、焊材、电线电缆、电气化机械、重工机械、金属制品等制造加工及技术开发，国内贸易（除专项规定），从事货物及技术进出口业务，自由房屋租凭，自由设备租凭，实业投资，投资管理，投资咨询，焊接技术培训" },
        { value: "电能、燃气、水的全方位代替管理，可以在三个月内显著降低公司能耗，有大型公司的能源代运维管理经验，愿意保持长期合作者更佳" },
        { value: "亿可能服务有限公司" },
        { value: "★★★★" },
        { value: "★" },
        { value: "4.12" },
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
    // tabvar += "<table id='myTabs'>";
    tabvar += "<tr>";
    tabvar += "    <td class='title'><image src='../../../../Image/triangle.png' class='image'></image>" + table_data['data'][0]['value'] + "</td>";
    tabvar += "</tr>";
    tabvar += "<tr>";
    tabvar += "    <td class='erjititle'>经营或服务范围：</td>";
    tabvar += "</tr>";
    tabvar += "<tr>";
    tabvar += "     <td><div class='contentOne'><p>" + table_data['data'][1]['value'] + "</p></div></td>";
    tabvar += "</tr>";
    tabvar += "<tr>";
    tabvar += "     <td class='erjititle'>报告及建议：</td>";
    tabvar += "</tr>";
    tabvar += "<tr>";
    tabvar += "     <td class='contentTwo'><div class='boxOne'><p>" + table_data['data'][2]['value'] + "</p></div></td>";
    tabvar += "</tr>";
    tabvar += "   <tr>";
    tabvar += "     <td class='erjititle'>需求详情：</td>";
    tabvar += "</tr>";
    tabvar += "<tr>";
    tabvar += "     <td><div class='contentThree'><p>"+ table_data['data'][3]['value'] +"</p></div></td>";
    tabvar += "</tr>";
    tabvar += "     <td class='erjititle'>平台推荐列表：</td>";
    tabvar += "</div>";
    tabvar += "<tr>";
    tabvar += "     <td class='list'><div class='boxTwo'>";
    tabvar += "         <table>"
    tabvar += "         <tr><td class='font'>"+ table_data['data'][4]['value'] +"</td><td class='width'><span class='stars'>"+ table_data['data'][5]['value'] +"</span><span class='nostar'>"+table_data['data'][6]['value'] +"</span></td><td class='number'>"+ table_data['data'][7]['value'] +"</td>"
    tabvar += "         </tr>"
    tabvar += "         <tr><td class='font'>"+ table_data['data'][4]['value'] +"</td><td class='width'><span class='stars'>"+ table_data['data'][5]['value'] +"</span><span class='nostar'>"+table_data['data'][6]['value'] +"</span></td><td class='number'>"+ table_data['data'][7]['value'] +"</td>"
    tabvar += "         </tr>"
    tabvar += "         <tr><td class='font'>"+ table_data['data'][4]['value'] +"</td><td class='width'><span class='stars'>"+ table_data['data'][5]['value'] +"</span><span class='nostar'>"+table_data['data'][6]['value'] +"</span></td><td class='number'>"+ table_data['data'][7]['value'] +"</td>"
    tabvar += "         </tr>"
    tabvar += "         <tr><td class='font'>"+ table_data['data'][4]['value'] +"</td><td class='width'><span class='stars'>"+ table_data['data'][5]['value'] +"</span><span class='nostar'>"+table_data['data'][6]['value'] +"</span></td><td class='number'>"+ table_data['data'][7]['value'] +"</td>"
    tabvar += "         </tr>"
    tabvar += "         <tr><td class='font'>"+ table_data['data'][4]['value'] +"</td><td class='width'><span class='stars'>"+ table_data['data'][5]['value'] +"</span><span class='nostar'>"+table_data['data'][6]['value'] +"</span></td><td class='number'>"+ table_data['data'][7]['value'] +"</td>"
    tabvar += "         </tr>"
    tabvar += "         <tr><td class='font'>"+ table_data['data'][4]['value'] +"</td><td class='width'><span class='stars'>"+ table_data['data'][5]['value'] +"</span><span class='nostar'>"+table_data['data'][6]['value'] +"</span></td><td class='number'>"+ table_data['data'][7]['value'] +"</td>"
    tabvar += "         </tr>"
    tabvar += "         </table>"
    tabvar += "     </div></td>"
    tabvar += "</tr>";
    
    // tabvar += "  </table>";
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