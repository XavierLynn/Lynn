var showRealData = JKB["能源分析"]["客户特征分析"]["标签调用排行"];

var table_data = {
    "title": "标签调用排行",
    "data": [{
        "labelName": "一个月内消费",
        "labelCode": "040203sts00001"
    },
    {
        "labelName": "重点用能单位",
        "labelCode": "030201sts00001"
    }, {
        "labelName": "高耗电企业",
        "labelCode": "030203sts00001"
    }, {
        "labelName": "食品制造业",
        "labelCode": "010102sts00014"
    }, {
        "labelName": "代运维",
        "labelCode": "030403sts00004"
    }, {
        "labelName": "易污染企业",
        "labelCode": "030408sts00001"
    }, {
        "labelName": "近一周内登录",
        "labelCode": "040101sts00001"
    }, {
        "labelName": "中频次登录",
        "labelCode": "040102sts00002"
    }, {
        "labelName": "电费逾期风险较高",
        "labelCode": "040401sts00001"
    }, {
        "labelName": "日间双峰型负荷",
        "labelCode": "030113sts00002"
    },
    ]
};

$(function () {
    Init();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
});

function Init(){
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetLabelReferenceRank",
        type: "POST",
        async: true,
        data: "top=10",
        error: function () {
            Flush();
        },
        success: function (data) {
            if (showRealData) {
                table_data = JSON.parse(data);
                Flush();
            }
        }
    });
    Flush();
    
    $('.nav').empty();
    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title0' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "</a></li>");
}

function Flush() { 
    $("#show_charts").empty();
    let tabvar = "";
    for (let index = 0; index < table_data['data'].length; index++) {
        const element = table_data['data'][index];
        tabvar += "<button id='" + element['labelCode'] + "' Class='btnLabel'><label class='cloumn1'>" + (index + 1) + ".</label><label class='cloumn2'>" + element["labelName"] + "</label></button> ";
    }
    $("#show_charts").append(tabvar);

    $(".btnLabel").click(function () {
        $(".btnLabel").removeClass("btnLabelSelect");
        $(this).addClass("btnLabelSelect");

        ue4("LabelClick", $(this).prop("id"));
    })

    $(".btnLabel").first().click();
}

ue.interface.Flush = function () {
    Flush();
}

ue.interface.Load = function (data) {
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/" + jsonData['FunctionName'],
        type: "POST",
        async: true,
        data: jsonData['FunctionParam'],
        error: function () {
            Flush();
        },
        success: function (data) {
            if (showRealData) {
                table_data = JSON.parse(data);
                Flush();
            }
        }
    });

}