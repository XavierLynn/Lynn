var table_data = {
    "title": "行业用户分布占比",
    "data": [{
        "name": "科学研究和技术服务业",
        "value": "13.49%",
        "unit": "kwh"
    }, {
        "name": "制造业",
        "value": "39.08%",
        "unit": "kwh"
    },{
        "name": "电力、热力、燃气及水生产和供应业",
        "value": "1.81%",
        "unit": "kwh"
    },
     {
        "name": "住宿和餐饮业",
        "value": "3.48%",
        "unit": "kwh"
    }, {
        "name": "房地产业",
        "value": "0.56%",
        "unit": "kwh"
    }, {
        "name": "文化 体育 和 娱乐业",
        "value": "0.97%",
        "unit": "kwh"
    }, {
        "name": "教育",
        "value": "4.87%",
        "unit": "kwh"
    }, {
        "name": "公共管理 社会保障和社会组织",
        "value": "1.11%",
        "unit": "kwh"
    },{
        "name": "租赁和商务服务业",
        "value": "14.74%",
        "unit": "kwh"
    },{
        "name": "信息传输、软件和信息技术服务业",
        "value": "10.01%",
        "unit": "kwh"
    },{
        "name": "批发和零售业",
        "value": "3.06%",
        "unit": "kwh"
    },{
        "name": "交通运输、仓储和邮政业",
        "value": "2.09%",
        "unit": "kwh"
    },{
        "name": "水利、环境和公共设施管理业",
        "value": "1.53%",
        "unit": "kwh"
    },{
        "name": "卫生和社会工作",
        "value": "1.11%",
        "unit": "kwh"
    },{
        "name": "农、林、牧、渔业",
        "value": "0.97%",
        "unit": "kwh"
    },{
        "name": "金融业",
        "value": "0.42%",
        "unit": "kwh"
    },{
        "name": "建筑业",
        "value": "0.42%",
        "unit": "kwh"
    },{
        "name": "居民服务、修理和其他服务业",
        "value": "0.28%",
        "unit": "kwh"
    } 
]
};

var showRealData = true;
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJK.asmx/GetIndustryEnteRatio",
        type: "POST",
        async: true,
        data: "regionID=zj",
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

    $('.nav').empty()
    $('#show_charts').empty()
    $('.nav').append("<li id='tag'>◀</li>");
    // $("#tag").css({ "background-color": mainColor })
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data["title"] + "</a></li>");
    // $(".nav a").css({ "color": textColor })
    for (let index = 0; index < table_data["data"].length; index++) {
        const element = table_data["data"][index];
        var nameLength = element["name"].length - (element["name"].indexOf(" ") / 4);
        var InterVarLength = (28 - nameLength);
        var InterVar = "";
        for (var x = 0; x < InterVarLength; x++) {
            InterVar += " -";
        }
        let tabvar = "";
        tabvar += "<button>";
        tabvar += "<image src='../../../../Image/能源企业视角/序号背景.png'></image>";
        if (index>=9){
            tabvar += "<label class='column5'>" + (index + 1) + "</label>";
        }else{
            tabvar += "<label class='column1'>" + (index + 1) + "</label>";
        }
        
        tabvar += "<label class='column2'>" + element["name"] + "&nbsp&nbsp" + InterVar + "</label>";

        tabvar += "<label class='column3'>" + element["value"] + "</label>";
        // tabvar += "<label class='column4'>" + element["unit"] + "</label>";
        tabvar += "</button>";
        $('#show_charts').append(tabvar);
    }
    // $(".column4").css("color", mainColor);
    // $(".column3").css("color", mainColor);
    // $("#show_charts button").css("color", textColor)
    setInterval(function() { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYJK.asmx/"+jsonData['FunctionName'],
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
