var showRealData = JKB["能源管理"]["高负载线路"]


var table_data = {
    "data": [{
        "title": "重载线路",
        "table": [{
            "rowHeader": [{
                    "headerName": "线路名称",
                    "width": "10"
                },
                {
                    "headerName": "电压等级",
                    "width": "10"
                },
                {
                    "headerName": "所属电站",
                    "width": "10"
                }, {
                    "headerName": "线路负载率",
                    "width": "10"
                },
                {
                    "headerName": "昨日负载",
                    "width": "10"
                },
                {
                    "headerName": "本月平均负载",
                    "width": "10"
                }
            ],
            "data": [
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "95%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }
                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }
                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }

                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }
                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }
                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }
                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
                    }
                ],
                [{
                        "value": "张化线12"
                    },
                    {
                        "value": "110kv"
                    },
                    {
                        "value": "漕汐变电站"
                    },
                    {
                        "value": "89%"
                    },
                    {
                        "value": "65%"
                    },
                    {
                        "value": "75%"
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
    yiji_title.length = 0;

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
                                // if (table_data['data'][0]['table'][0]['rowHeader'][k]['headerName'] == '详细地址')
                                //     tabvar += "<td class='unSelectedCell' style='width:" + table_data['data'][index]['table'][i]['rowHeader'][k]['width'] + "%;font-size:20px'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
                                // else
                                tabvar += "<td class='unSelectedCell' style='width:" + table_data['data'][x]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][x]['table'][i]['data'][j][k]['value'] + "</td>";
                            }
                            tabvar += "</tr>"
                        }
                        tabvar += "</table>";
                        // tabvar += "<span></span>";
                        tabvar += "</div>";


                    }
                }
            }
        }

        $('#show_table').append(tabvar);
        $(".table-header tbody tr td").css({ "text-shadow": '', "color": c7 })
        $(".table-body tbody tr td").css({ "text-shadow": '', "color": c1 })
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