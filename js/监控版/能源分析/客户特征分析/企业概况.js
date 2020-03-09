var showRealData = JKB["能源分析"]["客户特征分析"]["企业概况"];

var table_data = {
    "title": "上海XXX科技有限公司",
    "data": {
        "行业类型": "半导体制造业",
        "电压等级": "10kV",
        "入驻日期": "2018-08-15",
        "所属区域": "张江南区",
        "运行容量": "10A",
        "用电地址": "上海市张江高科技园区李时珍路421号",
        "标签": [
            { value: "张江南区" },
            { value: "100~1000㎡" },
            { value: "近一周登录" },
            { value: "节能潜力高" },
            { value: "朝阳产业" },
            { value: "合资企业" },
            { value: "忠诚度高" },
        ]
    }
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetLabelEnteInfo",
        type: "POST",
        async: true,
        data: "elecID=0060267728",
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
    $('.nav').empty();
    $('#myTabs').empty();
    $('#tagDiv').empty();
    $('#myTabs').append('<ul class="nav nav-tabs" role="tablist"></ul>');
    $('#myTabs').append('<div id="headDiv"></div>');
    $('#myTabs').append('<div id="tagDiv"></div>');
    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data["title"] + "</a></li>");
    // 添加数据
    let tabvar = "";
    tabvar += "<table class='table-body'>";
    tabvar += "<tr>";
    tabvar += "<td class='titleCell'>行业类型:</td>";
    tabvar += "</tr>"
    tabvar += "<tr>";
    tabvar += "<td class='contentCell'>" + table_data['data']['行业类型'] + "</td>";
    tabvar += "</tr>"
    tabvar += "<tr height='85px'></tr>"
    tabvar += "<tr>";
    tabvar += "<td class='titleCell'>电压等级:</td>";
    tabvar += "</tr>"
    tabvar += "<tr>";
    tabvar += "<td class='contentCell'>" + table_data['data']['电压等级'] + "</td>";
    tabvar += "</tr>"
    tabvar += "<tr height='85px'></tr>"
    tabvar += "<tr>";
    tabvar += "<td class='titleCell'>入驻日期:</td>";
    tabvar += "</tr>"
    tabvar += "<tr>";
    tabvar += "<td class='contentCell'>" + table_data['data']['入驻日期'] + "</td>";
    tabvar += "</tr>"
    tabvar += "<tr height='85px'></tr>"
    tabvar += "<tr>";
    tabvar += "<td class='titleCell'>运行容量:</td>";
    tabvar += "</tr>"
    tabvar += "<tr>";
    tabvar += "<td class='contentCell'>" + table_data['data']['运行容量'] + "</td>";
    tabvar += "</tr>"
    tabvar += "<tr height='85px'></tr>"
    tabvar += "<tr>";
    tabvar += "<td class='titleCell'>用电地址:</td>";
    tabvar += "</tr>"
    tabvar += "<tr>";
    tabvar += "<td class='contentCell'>" + table_data['data']['用电地址'] + "</td>";
    tabvar += "</tr>"
    tabvar += "<tr height='85px'></tr>"
    tabvar += "</table>";
    tabvar += "</div>";
    $('#myTabs').append(tabvar);
    let tagHtml = "";
    for (let index = 0; index < table_data['data']['标签'].length; index++) {
        const element = table_data['data']['标签'][index]['value'];
        tagHtml += "<button class='tagBtn'>" + element + "</button>";
        tagHtml += "<br>";
    }
    $('#tagDiv').append(tagHtml);



    // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
    // 滑动效果当满足这个条件时，自动添加高度并触发
    for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
        if ($(".table-body").find("tbody").eq(i).find("tr").length >= 8) {
            $(".table-body").css('height', "288px");
        }
    }
    //延迟刷新
    setTimeout(function() { $('body').css('background-color', 'rgba(0,0,0,0.01)') }, 500);
};

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