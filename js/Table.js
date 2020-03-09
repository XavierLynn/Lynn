$(function () {
    var table_data = {
        "data": [
            {
                "title": "能级xxxx",
                "table": [
                    {
                        "rowHeader": [
                            {
                                "headerName": "xx事件编号"
                            },
                            {
                                "headerName": "xx原因"
                            },
                            {
                                "headerName": "xx时间"
                            },
                            {
                                "headerName": "xx时长"
                            }
                        ],
                        "data": [
                            [
                                {
                                    "value": "ycyy20190513"
                                },
                                {
                                    "value": "xx故障"
                                },
                                {
                                    "value": "2019-05-13 17:31"
                                },
                                {
                                    "value": "12天"
                                }
                            ],
                            [
                                {
                                    "value": "ycyy20190514"
                                },
                                {
                                    "value": "xx调整"
                                },
                                {
                                    "value": "2019-05-14 12:31"
                                },
                                {
                                    "value": "15天"
                                }
                            ]
                        ]
                    },
                    {
                        "rowHeader": [
                            {
                                "headerName": "总能耗"
                            },
                            {
                                "headerName": "同比增长"
                            },
                            {
                                "headerName": "环比增长"
                            },
                            {
                                "headerName": "先进水平"
                            }
                        ],
                        "data": [
                            [
                                {
                                    "value": "150.22tce"
                                },
                                {
                                    "value": "12%"
                                },
                                {
                                    "value": "3%"
                                },
                                {
                                    "value": "133.97tce"
                                }
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "选项卡二",
                "table": [
                    {
                        "rowHeader": [
                            {
                                "headerName": "选项卡二-表一"
                            },
                            {
                                "headerName": "异常原因"
                            },
                            {
                                "headerName": "发生时间"
                            },
                            {
                                "headerName": "持续时长"
                            }
                        ],
                        "data": [
                            [
                                {
                                    "value": "ycyy20190513"
                                },
                                {
                                    "value": "设备xx"
                                },
                                {
                                    "value": "2019-05-13 17:31"
                                },
                                {
                                    "value": "12天"
                                }
                            ],
                            [
                                {
                                    "value": "ycyy20190514"
                                },
                                {
                                    "value": "产业xx"
                                },
                                {
                                    "value": "2019-05-14 12:31"
                                },
                                {
                                    "value": "15天"
                                }
                            ]
                        ]
                    },
                    {
                        "rowHeader": [
                            {
                                "headerName": "选项卡二-表二"
                            },
                            {
                                "headerName": "同比增长"
                            },
                            {
                                "headerName": "环比增长"
                            },
                            {
                                "headerName": "先进水平"
                            }
                        ],
                        "data": [
                            [
                                {
                                    "value": "150.22tce"
                                },
                                {
                                    "value": "12%"
                                },
                                {
                                    "value": "3%"
                                },
                                {
                                    "value": "133.97tce"
                                }
                            ]
                        ]
                    }
                ]
            }
        ]
    };
    for (let i=0;i<table_data['data'].length;i++){
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.nav li').click(function () {
        $('#show_table').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        for (let i=0;i<table_data['data'][$(this).index()]['table'].length;i++){
            let tabvar = "";
            tabvar += "<table class='table-header'>";
            tabvar += "<tr>";
            // 添加 表的列名
            for (let j=0;j<table_data['data'][$(this).index()]['table'][i]['rowHeader'].length;j++){
                tabvar += "<th>" + table_data['data'][$(this).index()]['table'][i]['rowHeader'][j]['headerName'] + "</th>";
            }
            tabvar += "</tr>";
            tabvar +="</table>";
            // 添加数据
            tabvar += "<table class='table-body'>";
            for (let j=0;j<table_data['data'][$(this).index()]['table'][i]['data'].length;j++){
                tabvar += "<tr>";
                for (let k=0;k<table_data['data'][$(this).index()]['table'][i]['data'][j].length;k++){
                    tabvar += "<td>" + table_data['data'][$(this).index()]['table'][i]['data'][j][k]['value'] + "</td>";
                }
                tabvar += "</tr>"
            }
            tabvar += "</table>";
            $('#show_table').append(tabvar);
        }
        // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
        // 滑动效果当满足这个条件时，自动添加高度并触发
        for (let i=0;i< $('.table-body').find('tbody').length;i++){
            if ($(".table-body").find("tbody").eq(i).find("tr").length>=8){
                $(".table-body").css('height',"288px");
            }
        }
    })
});