var table_data = {
    "title": "上海XXX科技有限公司",
    "image":"../../../Image/政府视角/企业概况.png",
    "image-size":[590,590],
    "data": [
        { value: "所属分区：张江南区" },
        { value: "行业类型：制造业" },
        { value: "接入时间：2019-05-01" },
        { value: "接入电压等级：220kV" }
    ]
};

var showRealData = ZSB["能源服务市场"]["企业概况"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/NYFWSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-08&endDate=2019-12",
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


    // 添加数据

    $('#show_table').empty();
    image = table_data['image'];
    width = table_data['image-size'][0];
    height = table_data['image-size'][1];
    let tabvar = "";
    
    tabvar += "<span>"+table_data['title'] + "</span>";
    tabvar += "<p id = 'tag'></p>",
    tabvar += "<table class='table-body'>";
    for (let i = 0; i < table_data['data'].length; i++) {
        tabvar += "<tr>";
        tabvar += "<td class='leftCell'>" + table_data['data'][i]['value'] + "</td>";
        tabvar += "</tr>"
    }
    tabvar += "</table>";image
    tabvar += "</div>";
    $('#show_table').append(tabvar);
    
    
    $('#image').css({'background-image':"url("+image+")","width":width,"height":height});
    $('.table-body').css({'margin-left':width+20})


    // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
    // 滑动效果当满足这个条件时，自动添加高度并触发
    for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
        if ($(".table-body").find("tbody").eq(i).find("tr").length >= 8) {
            $(".table-body").css('height', "288px");
        }
    }
    //延迟刷新
    // setTimeout(function() { $('body').css('background-color', 'rgba(0,0,0,0.01)') }, 500);
    $("#tag").css({ "background-color": mainColor ,"margin-top":"-78px"})
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url:  "http://localhost:2277/展示版/NYFWSC.asmx/"+jsonData['FunctionName'],
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