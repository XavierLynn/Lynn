var showRealData = JKB["驾驶舱"]["最新异常事件"]

var table_data = {
    "data": [{
        "title": "最新异常事件",
        "table": [{
            "rowHeader": [{
                    "headerName": "异常编码"
                },
                {
                    "headerName": "用户名称"
                },
                {
                    "headerName": "行业分类"
                },
                {
                    "headerName": "识别原因"
                },
                {
                    "headerName": "确认原因"
                },
                {
                    "headerName": "识别日期"
                },
                {
                    "headerName": "状态"
                }
            ],
            "data": [
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "待复检"
                    }
                ],
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "待复检"
                    }
                ],
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "已复检"
                    }
                ],
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "已复检"
                    }
                ],
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "已复检"
                    }
                ],
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "已复检"
                    }
                ],
                [{
                        "value": "YC2019081201"
                    },
                    {
                        "value": "上海XXX公司"
                    },
                    {
                        "value": "制造业"
                    },
                    {
                        "value": "行业变更"
                    },
                    {
                        "value": "待确认"
                    },
                    {
                        "value": "2019.08.12"
                    },
                    {
                        "value": "已复检"
                    }
                ]
            ]
        }]
    }]
};

$(function () {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetRegionHYXFPM",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-12&endDate=2020-01",
        error: function() {
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
                tabvar += "<td>" + table_data['data'][index]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
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
                    if (table_data['data'][index]['table'][i]['data'][j][column - 1]['value'] == '待复检')
                        tabvar += "<td class='selectedCell'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
                    else
                        tabvar += "<td class='unSelectedCell'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
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
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 6) {
                $(".table-body").css('height', "730px");
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