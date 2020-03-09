var showRealData = JKB["能源分析"]["异常用能分析"]["企业标签"]
var table_data = {
    "title": "企业标签",
    "data": [
        {
            "value":"多次申请扩容"
        }, {
            "value":"违章用能"
        }, {
            "value":"高耗能"
        }, {
            "value":"多次申请扩容"
        }, {
            "value":"低能效"
        }, {
            "value":"高耗能"
        }, {
            "value":"低能效"
        }, {
            "value":"高耗能"
        }, {
            "value":"多次申请扩容"
        }, {
            "value":"低能效"
        }, {
            "value":"多次申请扩容"
        }, {
            "value":"低能效"
        },
    ]
};


$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetEnteEnergyConsumptionMonth",
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


    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data["title"] + "</a></li>");
   let tabvar = "";
   for (let index = 0; index < table_data["data"].length; index++) {
       tabvar += "<button>"+table_data["data"][index]["value"]+"</button>";
   }
   $('#show_table').empty();
   $('#show_table').append(tabvar);
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