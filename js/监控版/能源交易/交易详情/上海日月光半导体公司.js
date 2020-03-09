var showRealData = JKB["能源交易"]["交易详情"]["上海日月光半导体公司"]

var table_data = {
    "title": "上海日月光半导体公司",
    "data": [
        { value: "上海日月光半导体公司"},
        { value: "半导体制造业" },
        { value: "10kv" },
        { value: "2019-08-15" },
        { value: "张江南区" },
        { value: "15" },
        { value: "上海市张江高科技园是真路421号" },
        
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
    tabvar += "    <td colspan=2 class='content erjiTitle'>行业类型：</td>";
    tabvar += "  </tr>";
    tabvar += "<tr>";
    tabvar += "     <td colspan=2 class='content'>" + table_data['data'][1]['value'] + "</td>";
    tabvar += "  </tr>";
    

    tabvar += "  <tr>";
    tabvar += " <td colspan=2 class='content erjiTitle1'>电压等级：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "       <td colspan=2 class='content'>" + table_data['data'][2]['value'] + "</td>";
    tabvar += "   </tr>";
   

    tabvar += "   <tr>";
    tabvar += "       <td colspan=2 class='content erjiTitle1'>入驻日期：</td>";
    tabvar += "   </tr>";
    tabvar += "    <tr>";
    tabvar += "       <td colspan=2 class='content'>" + table_data['data'][3]['value'] + "</td>";
    tabvar += "   </tr>";
    

    tabvar += "   <tr>";
    tabvar += "       <td class='content erjiTitle1'>所属区域：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "      <td class='content'>" + table_data['data'][4]['value'] + "</td>";
    tabvar += "   </tr>";
    
    tabvar += "   <tr>";
    tabvar += "       <td class='content erjiTitle1'>运行容量：</td>";
    tabvar += "   </tr>";
    tabvar += "   <tr>";
    tabvar += "      <td class='content'>" + table_data['data'][5]['value'] + "</td>";
    tabvar += "   </tr>";
    
    tabvar += "    <tr>";
    tabvar += "      <td colspan=3 class='content erjiTitle1'>用电地址：</td>";
    tabvar += "   </tr>";
    tabvar +="<tr>";
    tabvar += "    <td colspan=3 class='content'>" +table_data['data'][6]['value']+"</td>";
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