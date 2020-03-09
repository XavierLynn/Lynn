var showRealData = JKB["能源交易"]["交易详情"]["设备购买合同"]
var table_data = {
    "title": "XX公司（上海分公司）月度能源分析报告",
    "data": [
        { value: "HT48539679" },
        { value: "已签订合同" },
        { value: "设备销售." },
        { value: "油浸式变压器" },
        { value: "111111元" },
        { value: "222222元" },
        { value: "2019-11-06" },
        { value: "2019-11-06" },
        { value: "2019-11-06" },
        { value: "30:60:10" },
        { value: "方案.pdf" },
        { value: "合同签字.pdf" },
        { value: "上海通用重工集团有限公司" },
        { value: "上海通用重工集团有限公司" },
        { value: "李四" },
        { value: "李四" },
        { value: "123456" },
        { value: "123456" }
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
    tabvar += "    <table id='myTabs'>";
    tabvar += "        <tr>";
    tabvar += "            <td height='100px'></td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='title' colspan=2>设备购买合同</td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='tdLeft'><span class='content'>编号</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][0]['value'] +"</span></td>";
    tabvar += "            <td class='tdRright'><span class='content'>状态</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][1]['value'] +"</span></td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='tdLeft'><span class='content'>合同类型</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][2]['value'] +"</span></td>";
    tabvar += "            <td class='tdRright'><span class='content'>商品/需求名称</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][3]['value'] +"</span></td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='tdLeft'><span class='content'>金额</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][4]['value'] +"</span></td>";
    tabvar += "            <td class='tdRright'><span class='content'>意向金</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][5]['value'] +"</span></td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='tdLeft'><span class='content'>发起时间</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][6]['value'] +"</span></td>";
    tabvar += "            <td class='tdRright'><span class='content'>签订时间</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][7]['value'] +"</span></td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='tdLeft'><span class='content'>合同完成时间</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][8]['value'] +"</span></td>";
    tabvar += "            <td class='tdRright'><span class='content'>付款计划</span><br/>";
    tabvar += "                <span class='dataNor'>" + table_data['data'][9]['value'] +"</span></td>";
    tabvar += "        </tr>";
    // tabvar += "        <tr>";
    // tabvar += "            <td class='tdLeft'><span class='content'>合同电子附件</span><br/>";
    // tabvar += "                <span class='dataSpe'>" + table_data['data'][10]['value'] +"</span></td>";
    // tabvar += "            <td class='tdRright'><span class='content'>合同签字扫描件</span><br/>";
    // tabvar += "                <span class='dataSpe'>" + table_data['data'][11]['value'] +"</span></td>";
    // tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td colspan=2 ><span class='SpnLine'></span></td>";
    // tabvar += "            <td colspan=2 class='img'><image src='../../../../Image/标签概况2.png' id='img'></image></td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='contentBel'>甲方</td>";
    tabvar += "            <td class='contentBel'>乙方</td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='dataNorB'>" + table_data['data'][12]['value'] +"</td>";
    tabvar += "            <td class='dataNorB'>" + table_data['data'][13]['value'] +"</td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='dataNorB'>" + table_data['data'][14]['value'] +"</td>";
    tabvar += "            <td class='dataNorB'>" + table_data['data'][15]['value'] +"</td>";
    tabvar += "        </tr>";
    tabvar += "        <tr>";
    tabvar += "            <td class='dataNorB'>" + table_data['data'][16]['value'] +"</td>";
    tabvar += "            <td class='dataNorB'>" + table_data['data'][17]['value'] +"</td>";
    tabvar += "        </tr>";
    tabvar += "    </table>";
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