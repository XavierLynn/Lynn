
    var table_data = {
        "title": "标签调用排行",
        "data": [{
            "name": "上海通用重工集团",
            "value": "845",
            "unit": "kwh"
        }, {
            "name": "上海XXXX(上海)科技有限公司",
            "value": "855",
            "unit": "kwh"
        }, {
            "name": "上海通用重工集团",
            "value": "645",
            "unit": "kwh"
        }, {
            "name": "上海XXXX(上海)科技有限公司",
            "value": "1125",
            "unit": "kwh"
        }, {
            "name": "上海XXXX(上海)科技有限公司",
            "value": "225",
            "unit": "kwh"
        }, {
            "name": "上海通用重工集团",
            "value": "845",
            "unit": "kwh"
        }, {
            "name": "上海通用重工集团",
            "value": "845",
            "unit": "kwh"
        }]
    };
    var showRealData = ZSB["能源企业视角"]["总响应量排行榜"];
$(function() {
        Flush();
        $.ajax({
            url: "http://localhost:2277/ChartsService.asmx/GetQuYuDWMJNH",
            type: "POST",
            async: true,
            data: "regionID=zj&startDate=2019-08&endDate=2019-12",
            error: function() {
                Flush();
               
            },
            success: function(data) {
                table_data = JSON.parse(data);
                Flush();
                
            }
        });
        
        //延迟刷新
        setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
    });
    
    function Flush(){

        $('.nav').empty()
        $('.nav').append("<li id='tag'></li>");
        $("#tag").css({ "background-color": mainColor })
        $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data["title"] + "</a></li>");
        $(".nav a").css({ "color": textColor })
        $('#show_charts').empty()
        for (let index = 0; index < table_data["data"].length; index++) {
            const element = table_data["data"][index];
            let tabvar = "";
            tabvar += "<button>";
            tabvar += "<image src='../../../Image/能源企业视角/序号背景.png'></image>";
            tabvar += "<label class='column1'>" + (index + 1) + "</label>";
            tabvar += "<label class='column2'>" + table_data["data"][index]["name"] + "</label>";
            tabvar += "<label class='column3'>" + table_data["data"][index]["value"] + "</label>";
            tabvar += "<label class='column4'>" + table_data["data"][index]["unit"] + "</label>";
            tabvar += "</button>";
            $('#show_charts').append(tabvar);
        }
        $(".column4").css("color", mainColor);
        $(".column3").css("color", mainColor);
        $("#show_charts button").css("color", textColor)
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
        url: "http://localhost:2277/ChartsService.asmx/"+jsonData['FunctionName'],
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