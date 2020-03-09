var showRealData = JKB["能源服务"]["接入详情"]
var table_data = {
    "data": [{
        "title": "接入详情:",
        "table": [{
            "rowHeader": [{
                    "headerName": "站点",
                    "width": "14.27"
                },
                {
                    "headerName": "所属行业",
                    "width": "10.27"
                },
                {
                    "headerName": "详细地址",
                    "width": "24.27"
                }, {
                    "headerName": "建筑面积(㎡)",
                    "width": "14.27"
                },
                {
                    "headerName": "电系户号",
                    "width": "12.27"
                },
                {
                    "headerName": "水销根号",
                    "width": "12.27"
                },
                {
                    "headerName": "气销根号",
                    "width": "12.27"
                }

            ],
            "data": [
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ],
                [{
                        "value": "北首站点"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "上海市南汇区周浦镇新坦瓦公路1377号北首"
                    },
                    {
                        "value": "1310.25"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    },
                    {
                        "value": "135484896"
                    }
                ]
            ]
        }]
    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFW.asmx/GetEnteEnergyConsumptionMonth",
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

    $('.nav').append("<li id='tag'></li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.liLink').click(function() {
        $('#show_table').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        var index = $(this).index() - 1;
        for (let i = 0; i < table_data['data'][index]['table'].length; i++) {
            let tabvar = "";
            tabvar += "<div class='table'>";
            tabvar += "<table class='table-header'>";
            tabvar += "<tr>";
            // 添加 表的列名
            for (let j = 0; j < table_data['data'][index]['table'][i]['rowHeader'].length; j++) {
                tabvar += "<td style='width:" + table_data['data'][index]['table'][i]['rowHeader'][j]['width'] + "%'>" + table_data['data'][index]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
            }
            tabvar += "</tr>";
            tabvar += "</table>";
            tabvar += "<span ></span>";
            // 添加数据
            tabvar += "<table class='table-body'>";
            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                tabvar += "<tr>";
                var column = table_data['data'][index]['table'][i]['data'][j].length;
                for (let k = 0; k < column; k++) {
                    // if (table_data['data'][0]['table'][0]['rowHeader'][k]['headerName'] == '详细地址')
                    //     tabvar += "<td class='unSelectedCell' style='width:" + table_data['data'][index]['table'][i]['rowHeader'][k]['width'] + "%;font-size:20px'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
                    // else
                    tabvar += "<td class='unSelectedCell' style='width:" + table_data['data'][index]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
                }
                tabvar += "</tr>"
            }
            tabvar += "</table>";
            tabvar += "<span></span>";
            tabvar += "</div>";
            $('#show_table').append(tabvar);
        }
        // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
        // 滑动效果当满足这个条件时，自动添加高度并触发
        for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 3) {
                $(".table-body").css('height', "492px");
            }
        }
        $('.table-body tr').click(function() {
            $(this).children().attr("class", "unSelectedCell");
        });
    })
    $('.liLink')[0].click();
    $('.nav a')[0].click();
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
        url: "http://localhost:2277/监控版/NYFW.asmx/"+jsonData['FunctionName'],
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