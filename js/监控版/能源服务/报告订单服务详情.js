var showRealData = JKB["能源服务"]["报告订单服务详情"]

var table_data = {
    "title": "XX公司（上海分公司）月度能源分析报告",
    "data": [
        { value: "XX公司（上海分公司）月度能源分析报告" },
        { value: "xxxx公司（上海分公司）" },
        { value: "上海市南汇区周浦镇新坦瓦公路XXX号." },
        { value: "10000.00元" },
        { value: "2018-07-29" },
        { value: "描述描述描述描述描述描述" },
        { value: "ORDER20190801001" },
        { value: "李某某" },
        { value: "13077777777" },
        { value: "2018-07-29" },
        { value: "2018-07-29至2018-08-29" }
    ]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFW.asmx/GetEnteEnergyConsumptionMonth",
        type: "POST",
        async: true,
        data: "regionID=zj&topCount=3&startDate=2019-12&endDate=2020-01",
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

function Flush(){

    yiji_title.length = 0;
    $('.nav').empty()
 

    // 添加数据
    let tabvar = "";
    // tabvar += "<table id='myTabs'>";
    tabvar += "<tr>";
    tabvar += " <td colspan=3 class='title'>" + table_data['data'][0]['value'] + "</td>";
    tabvar += " </tr>";
    tabvar += " <tr>";
    tabvar += "    <td colspan=2 class='content erjiTitle'>所属公司：</td>";
    tabvar += "    <td class='content erjiTitle'>订单编号：</td>";
    tabvar += "  </tr>";
    tabvar += "  <tr>";
    tabvar += "     <td colspan=2 class='content'>" + table_data['data'][1]['value'] + "</td>";
    tabvar += "    <td class='content'>" + table_data['data'][6]['value'] + "</td>";
    tabvar += "  </tr>";
    tabvar += "  <tr>";
    tabvar += " <td colspan=2 class='content erjiTitle'>地点简介：</td>";
    tabvar += "     <td class='content erjiTitle'>联系人：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td colspan=2 class='content'>" + table_data['data'][2]['value'] + "</td>";
    tabvar += "       <td class='content'>" + table_data['data'][7]['value'] + "</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td colspan=2 class='content erjiTitle'>价格合计：</td>";
    tabvar += "       <td class='content erjiTitle'>联系电话：</td>";
    tabvar += "   </tr>";
    tabvar += "    <tr>";
    tabvar += "       <td colspan=2 class='content'>" + table_data['data'][3]['value'] + "</td>";
    tabvar += "       <td class='content'>" + table_data['data'][8]['value'] + "</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td class='content erjiTitle'>申请时间：</td>";
    tabvar += "      <td class='content erjiTitle'>付款时间：</td>";
    tabvar += "       <td class='content erjiTitle'>有效时间：</td>";
    tabvar += "  </tr>";
    tabvar += "  <tr>";
    tabvar += "      <td class='content'>" + table_data['data'][4]['value'] + "</td>";
    tabvar += "      <td class='content'>" + table_data['data'][9]['value'] + "</td>";
    tabvar += "      <td class='content'>" + table_data['data'][10]['value'] + "</td>";
    tabvar += "   </tr>";
    tabvar += "    <tr>";
    tabvar += "      <td colspan=3 class='content borderTitle'>标注说明：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td colspan=3 class='content boderContent'>" + table_data['data'][5]['value'] + "</td>";
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
        url: "http://localhost:2277/监控版/NYFW.asmx/"+jsonData['FunctionName'],
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