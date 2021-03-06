var showRealData = JKB["能源服务"]["接入服务列表"]

var table_data = {
    "data": [{
        "title": "数据接入服务列表",
        "table": [{
            "rowHeader": [{
                    "headerName": "订单编号",
                    "width": "16.66"
                },
                {
                    "headerName": "服务名称",
                    "width": "16.66"
                },
                {
                    "headerName": "企业",
                    "width": "16.66"
                }, {
                    "headerName": "预算",
                    "width": "16.66"
                },
                {
                    "headerName": "意向金",
                    "width": "16.66"
                },
                {
                    "headerName": "发布时间",
                    "width": "16.66"
                }

            ],
            "data": [
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
                    }
                ],
                [{
                        "value": "XQ20190814001"
                    },
                    {
                        "value": "厂房健康用能"
                    },
                    {
                        "value": "通用重工"
                    }, {
                        "value": "11,000"
                    },
                    {
                        "value": "16,000"
                    },
                    {
                        "value": "2019.09.21"
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

    $('.nav').append("<li id='tag'>◀</li>");
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
                    // if (table_data['data'][index]['table'][i]['data'][j][column - 4]['value'] == '执行中')
                    //     tabvar += "<td class='selectedCell' style='width:" + table_data['data'][index]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
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
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 9) {
                $(".table-body").css('height', "1152px");
            }
        }
        $('.table-body tr').click(function() {
            $(this).children().attr("class", "unSelectedCell");
        });
    })
    $('.liLink')[0].click();
    $('.nav a')[0].click();  //延迟刷新
        
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