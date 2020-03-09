var showRealData = JKB["能源交易"]["交易详情"]["商品信息"]

var table_data = {
    "title": "商品信息",
    "data": [
        { value: "商品信息" },
        { value: "10kw分布式光伏成套系统" },
        { value: "节能改造" },
        { value: "58000" },
        { value: "张宇" },
        { value: "139892289165" },
        { value: "户用型光伏电站，通常根据用电量、建设场地及用户意愿等因素，确定电站容量大小，通常为3至10KW不等。3KW/5KW/10KW组串型并网逆变器可选。该类型逆变器均满足户外防护使用，安装简便。" },
        { value: "组串式SPI3000/5000-B2/SPI8K/SPI10K"}
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
    tabvar += " <td colspan=3 class='title'>" + table_data['data'][0]['value'] + "</td>";
    tabvar += "  </tr>";

    
    tabvar += "<tr class='content-margin'>";
    tabvar += "    <td colspan=2 class='content erjiTitle'>商品名称：</td>";
    tabvar += "  </tr>";
    tabvar += "<tr>";
    tabvar += "     <td colspan=2 class='content'>" + table_data['data'][1]['value'] + "</td>";
    tabvar += "  </tr>";
    

    tabvar += "  <tr>";
    tabvar += " <td colspan=2 class='content erjiTitle1'>商品类型：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td colspan=2 class='content'>" + table_data['data'][2]['value'] + "</td>";
    tabvar += "   </tr>";
   

    tabvar += "   <tr>";
    tabvar += "       <td colspan=2 class='content erjiTitle1'>参考价格：</td>";
    tabvar += "   </tr>";
    tabvar += "    <tr>";
    tabvar += "       <td colspan=2 class='content'>" + table_data['data'][3]['value'] + "</td>";
    tabvar += "   </tr>";
    

    tabvar += "   <tr>";
    tabvar += "       <td class='content erjiTitle1'>联系人：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "      <td class='content'>" + table_data['data'][4]['value'] + "</td>";
    tabvar += "   </tr>";
    
    tabvar += "   <tr>";
    tabvar += "       <td class='content erjiTitle1'>联系方式：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "      <td class='content'>" + table_data['data'][5]['value'] + "</td>";
    tabvar += "   </tr>";
    
    tabvar += "    <tr>";
    tabvar += "      <td colspan=3 class='content erjiTitle1'>商品信息：</td>";
    tabvar += "   </tr>";
    tabvar +="<tr>";
    tabvar += "    <td colspan=3 class='content boderContent'>" +table_data['data'][6]['value']+"<ul class='boderContentElse'>"+"<li>"+"推荐产品："+ table_data['data'][7]['value'] +"</li>"+"</ul>"+"</td>";
    tabvar += "   </tr>";
    
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