// var showRealData = JKB["驾驶舱"]["服务概况-数据接入服务"]
var showRealData = JKB["能源管理"]["邀约倒计时"]

var table_data = {
    "title": "邀约倒计时",
    "dateTime": "2019-12-30 15:30:00"
};

$(function () {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-01&endDate=2019-12",
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
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)'); }, 2000);
});

function Flush() {
    $('.nav').empty();
    yiji_title.length = 0;

    $('.nav').append("<li id='tag'>◀</li>");
    const href = "#title";
    $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['title'] + "</a></li>")

    setInterval(function () {
        RefreshCountDown();
        $('body').css('background-color', 'rgba(0,0,0,0.00)');
    }, 1000);
};
function RefreshCountDown() {
    var dateBegin = new Date(table_data['dateTime']);
    var dateEnd = new Date();
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    // var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var tempCountDown = [];
    if (dateDiff > 1800000 || dateDiff < 0) {
        tempCountDown = CountDown(0);
    }
    else {
        dateDiff = 1800000 - dateDiff;
        tempCountDown = CountDown(dateDiff);
    }
    var temp = tempCountDown[0].split('');
    $("#hours1").prop("src","../../../Image/监控版/能源管理/" + temp[0] + ".png");
    $("#hours2").prop("src","../../../Image/监控版/能源管理/" + temp[1] + ".png");
     temp = tempCountDown[1].split('');
    $("#min1").prop("src","../../../Image/监控版/能源管理/" + temp[0] + ".png");
    $("#min2").prop("src","../../../Image/监控版/能源管理/" + temp[1] + ".png");
     temp = tempCountDown[2].split('');
    $("#sec1").prop("src","../../../Image/监控版/能源管理/" + temp[0] + ".png");
    $("#sec2").prop("src","../../../Image/监控版/能源管理/" + temp[1] + ".png");
   
}
function CountDown(timespan) {
    var date = new Date(timespan);
    var outDate = [];
    outDate.push("00".toString());
    var min = date.getMinutes();
    outDate.push(min < 10 ? "0" + min : "" + min);
    var sec = date.getSeconds();
    outDate.push(sec < 10 ? "0" + sec : "" + sec);
    return outDate;
}



ue.interface.Flush = function () {
    Flush();
}

ue.interface.Load = function (data) {
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/" + jsonData['FunctionName'],
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