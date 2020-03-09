var showRealData = JKB["能源管理"]["最新削峰填谷事件"]
var table_data = {
    "data": [{
        "title": "最新削峰填谷事件",
        "table": [{
            "rowHeader": [{
                    "headerName": "事件编码",
                    "width": "15"
                },
                {
                    "headerName": "事件类型",
                    "width": "12"
                },
                {
                    "headerName": "开始时间",
                    "width": "15"
                },
                {
                    "headerName": "结束时间",
                    "width": "18"
                },
                {
                    "headerName": "计划总量",
                    "width": "10"
                },
                {
                    "headerName": "完成总量",
                    "width": "10"
                },
                {
                    "headerName": "状态",
                    "width": "10"
                }
            ],
            "data": [
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "----------------"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "----"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "----------------"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "----"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "2019.09.21 20:09"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "9.8mv"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "2019.09.21 20:09"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "9.8mv"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "2019.09.21 20:09"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "9.8mv"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "2019.09.21 20:09"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "9.8mv"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "2019.09.21 20:09"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "9.8mv"
                    },
                    {
                        "value": "邀约"
                    }
                ],
                [{
                        "value": "YC201908140002"
                    },
                    {
                        "value": "削峰事件"
                    },
                    {
                        "value": "2019.09.21 18:00"
                    },
                    {
                        "value": "2019.09.21 20:09"
                    },
                    {
                        "value": "10mw"
                    },
                    {
                        "value": "9.8mv"
                    },
                    {
                        "value": "邀约"
                    }
                ],
            ]
        }]
    }, ]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYGL.asmx/GetEnteEnergyConsumptionMonth",
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
    $('.nav').empty();


    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'>◀</li>");
    
    for (var i = 0; i < yiji_title.length; i++) {
        //const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    //添加数据
    $('.nav a').click(function() {
                $('#show_table').empty();
        var yiji;
        // var erji_index;
        //var index = $(this).index();
        for (var x = 0; x < table_data['data'].length; x++) {
            if (table_data['data'][x]['title'] === $(this).text()) {
                yiji = $(this).text();
                //erji_index = i;

                if (table_data['data'][x]['title'] === yiji) {

                    for (let i = 0; i < table_data['data'][x]['table'].length; i++) {
                        var tabvar = "";
                        tabvar += "<div class='table'>";
                        tabvar += "<table class='table-header'>";
                        tabvar += "<tr>";
                        // 添加 表的列名
                        for (let j = 0; j < table_data['data'][x]['table'][i]['rowHeader'].length; j++) {
                            tabvar += "<td style='width:" + table_data['data'][x]['table'][i]['rowHeader'][j]['width'] + "%'>" + table_data['data'][x]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
                        }
                        tabvar += "</tr>";
                        tabvar += "</table>";
                        tabvar += "<span ></span>";
                        // 添加数据
                        tabvar += "<table class='table-body'>";
                        for (let j = 0; j < table_data['data'][x]['table'][i]['data'].length; j++) {
                            tabvar += "<tr>";
                            var column = table_data['data'][x]['table'][i]['data'][j].length;

                            for (let k = 0; k < column; k++) {
                                if (j >= 2) {


                                    tabvar += "<td class='selectedCell' style='width:" + table_data['data'][x]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][x]['table'][i]['data'][j][k]['value'] + "</td>";


                                } else {

                                    tabvar += "<td class='unSelectedCell' style='width:" + table_data['data'][x]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][x]['table'][i]['data'][j][k]['value'] + "</td>";


                                }

                            }
                            tabvar += "</tr>"
                        }
                        tabvar += "</table>";
                        tabvar += "<span></span>";
                        tabvar += "</div>";


                    }
                }
            }
        }


        //CSS_Color
        $('#show_table').append(tabvar);
        $(".table-header tbody tr td").css({ "text-shadow": '', "color": c7 })
        $(".table-body tbody tr").hover(function() {
            $(this).css("background-color", h8)
        })
        $(".table-body tbody tr").mouseleave(function() {
            $(this).css("background-color", "rgba(255,255,255,0)")
        })
        $("-webkit-scrollbar-thumb").css('background-color', "#418dff")

        $(".unSelectedCell").css({ "text-shadow": th2, "color": c3 })
        $(".selectedCell").css({ "color": c1 })
        $("span").css("background", "-webkit-linear-gradient(right, " + h9 + "," + c8 + "," + c2 + "," + c8 + "," + h9 + ")")
    });
    $('.nav a')[0].click();
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
        url: "http://localhost:2277/监控版/NYGL.asmx/"+jsonData['FunctionName'],
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