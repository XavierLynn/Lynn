var tabel_data = {
    "原国家高新区" :380,
    "重要挽留客户": 324,
    "重要发展客户" :124,
    "康桥工业园北区" :82,
    "上海国际医学园区" :71,
    "康桥工业园南区": 57,
    "孙桥科创中心": 43,
    "张江南区": 42,
    "规划保留用地": 41,
    "关注商品" :3,
    "第三产业" :3,
    "关注用能咨询类需求" :2,
    "第二产业": 2,
    "制造业" : 2,
    "关注设备销售类需求": 1,
    "交通运输、仓储和邮政业" : 1,
    "重要价值客户" :1,
    "关注能源托管类需求" :1,
    "关注节能改造类需求": 1,
    "有意愿参与售电市场" :1,
    "关注用能诊断类需求": 1,
    "公共快充站":1,
    "电动车":1,
    "自建EMS":1,
    "具备储能设备":1,
    "疑似具有储能设备":1,
    "疑似具有EMS":1,
    "居民生活用水":1,
    "行政事业用水":1,
    "工业用水":1,
    "经营服务用水":1,
    "特种行业用水":1,
    "居民用气":1,

    "团体用气":1,
    "功率因数0.7至0.8":1,

    "峰谷比偏高":1,
    "峰谷比偏平稳":1,
    "有功负载率偏低":1,

    "有空载现象":1,

    "有满载现象":1,

    "电量突增户":1,

    "电量连续突减户":1,
    "当月超需量":1,
    "推荐容改需":1,
    "建议需改容":1,
    "窃电处理":1,
    "超容":1,
    "张江用电量第一名":1,

    "愿意参与需求响应":1,

    "对参与需求响应持观望态度":1,
    "参与削峰频繁":1,
    "参与填谷频繁":1,
    "偶尔参与削峰":1,

    "有效参与削峰比率较大":1,

    "节假日工作":1,
    "月度波动比较大":1,

    "日间型负荷":1,
    "日间双峰型负荷":1,
    "夜间型负荷":1,
    "平缓型负荷":1,
    "峰平时段用电量为主":1,
    "谷时段用电量为主":1,
    "光伏发电自给率10%以内":1,
    "重点用能单位":1,
    "能耗增长高":1,

    "高耗电企业":1,

    "单位建筑面积能耗偏低":1,
    "单位建筑面积能耗偏高":1,
    "万元产值能耗偏低":1,
    "万元产值能耗偏高":1,
    "变压器老化":1,
    "负荷开关/断路器老化":1,
    "计量流变老化":1,
    "计量压变老化":1,
    "保护流变老化":1,
    "保护压变老化":1,
    "负载率高":1,
    "超容":1,
    "频繁超容":1,
    "用户运维较差":1,
    "运维人员不达标":1,
    "自运维":1,
    "代运维":1,
    "近一年内发生过事故":1,
    "预防性试验过期":1,
    "预防性试验即将到期":1,
    "四防一通不完备":1,
    "近海区域":1,
    "临近化工区":1,
    "具备自备电源":1,
    "易污染企业":1,
    "易受降雨影响":1,
    "用电安全综合评价风险等级高":1,
    "用电安全综合评价风险等级较高":1,
    "用电安全综合评价风险等级中":1,
    "用电安全综合评价风险等级低":1,
    "近一周内登录":1,
    "近半年内登录":1,
    "近一年内登录":1,
    "高频次登录":1,
    "中频次登录":1,
    "低频次登录":1,
    "在线时长较长":1,
    "在线时长中等":1,
    "在线时长较短":1,
    "消费金额较大":1,
    "消费金额居中":1,
    "无消费记录":1,
    "消费频次高":1,
    "消费频次低":1,
    "无消费频次":1,
    "一个月内消费":1,
    "搜索频度高":1,
    "关注资讯":1,
    "关注设备销售类商品":1,
    "关注投融资服务类需求":1,
    "关注会展":1,
    "关注保险产品":1,
    "电费逾期风险较高":1,
    "电费逾期风险高":1,
    "已欠费停电":1,
    "近12个月电费逾期6个月以上":1,
    "节能潜力高":1,
    "愿意参与需求响应":1,
    "不愿意参与需求响应":1,
    "曾参与削峰":1,
    "曾参与填谷":1,
    "重要价值客户":1,
    "信用等级D":1,
    "有意愿参与售电市场":1,
    "不愿参与售电市场":1,

  
};
var showRealData = JKB["驾驶舱"]["标签云_New"]

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-01&endDate=2019-12",
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
    var data = [];
    for (var name in tabel_data) {
        data.push({
            name: name,
            value: Math.sqrt(tabel_data[name])
        })
    }
    myChart = echarts.init(document.getElementById("show_charts"));
    var option = {
        series: [{
            name: "搜索指数",
            type: "wordCloud",
        
            width: '100%',
            height: '100%',
            sizeRange: [15, 100],
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],
            //shape: 'circle',
            textPadding:0,
            autoSize: {
                enable: true,
                minSize: 6
            },
        
            gridSize: 4.0,
    
        
            textStyle: {
                normal: {
                    color: function() {
                        var arr = ["#50C9FF","#1791FF", "#0373FF", "#0B4EFF"];
                        var index = Math.floor((Math.random()*arr.length));
                        return arr[index];
                    }
                
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: "#333"
                }
            },
            data: data
        }]
    };
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/"+jsonData['FunctionName'],
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