var showRealData = JKB["能源分析"]["客户特征分析"]["标签企业列表"];
var regionCode = "zj";
var labelCode = "010501sts00001";
//使用模拟数据
var table_data = {
    "title": "标签企业列表",
    "data": [
        {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        }, {
            "enteName": "上海XXX集团有限公司8",
            "elecNum": "xxxx001",
            "industryName": "制造业",
        },
    ]
};
$(function () {
    Init();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
});
function Init() {
    // ajax 请求数据
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionLabelEnteList",
        type: "POST",
        async: true,
        data: "regionID="+regionCode+"&labelCode=" + labelCode,
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
        tabvar += "<button id='" + element["elecNum"] + "' class='btnEnte'><label class='column1' >" + element["enteName"] + "</label><label class='column2'>" + element["industryName"] + "</label></button>";
    }
    $("#show_charts").append(tabvar);

    $(".btnEnte").click(function () {
        $(".btnEnte").removeClass("btnEnteSelect");
        $(this).addClass("btnEnteSelect");

        ue4("EnteClick", $(this).prop("id"));
    })

    $(".btnLabel").first().click();
}

ue.interface.Refresh = function (data) {
    var dataJson = JSON.parse(data);
    labelCode = dataJson['LabelCode'];
    regionCode = dataJson['RegionCode'];
    Init();
}