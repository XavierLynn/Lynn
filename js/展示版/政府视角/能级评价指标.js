var table_data = {
    "data": [{
        "title": "能级评价指标",
        "table": [{
            "rowHeader": [{
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
                [{
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
        },
        {
            "rowHeader": [{
                "headerName": "万元产值能耗"
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
                [{
                    "value": "0.033tce/万"
                },
                {
                    "value": "-7%"
                },
                {
                    "value": "-2.4%"
                },
                {
                    "value": "0.021tce/万"
                }
                ]
            ]
        },
        {
            "rowHeader": [{
                "headerName": "单位建筑面积能耗"
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
                [{
                    "value": "30tce/(㎡*a)"
                },
                {
                    "value": "8.55%"
                },
                {
                    "value": "0.78%"
                },
                {
                    "value": "27tce/(㎡*a)"
                }
                ]
            ]
        },
        {
            "rowHeader": [{
                "headerName": "碳排放"
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
                [{
                    "value": "102.3t/CO2"
                },
                {
                    "value": "-21%"
                },
                {
                    "value": "-4%"
                },
                {
                    "value": "87.41t/CO2"
                }
                ]
            ]
        }
        ]
    }]
};


var showRealData = ZSB["政府视角"]["能级评价指标"];
$(function() {
    $.ajax({
        url: "http://localhost:2277/展示版/ZFSJ.asmx/GetQuYuNJPJZB",
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
    Flush();
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

function Flush(){
    
    $('.nav').empty()
    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({ "background-color": mainColor })
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $(".nav a").css({ "color": textColor })
    $('.liLink').click(function () {
        $('#show_table').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        var index = $(this).index() - 1;
        for (let i = 0; i < table_data['data'][index]['table'].length; i++) {
            let tabvar = "";
            tabvar += "<div class='table'>";
            tabvar += "<table class='table-header'>";
            tabvar += "<tr>";
            // 添加 表的列名

            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                tabvar += "<tr>";
                for (let k = 0; k < table_data['data'][index]['table'][i]['data'][j].length; k++) {
                    tabvar += "<td>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
                }
                tabvar += "</tr>";
                tabvar += "</table>";
                // 添加数据
                tabvar += "<table class='table-body'>";
                for (let j = 0; j < table_data['data'][index]['table'][i]['rowHeader'].length; j++) {
                    tabvar += "<td>" + table_data['data'][index]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
                }
                tabvar += "</tr>"
            }
            tabvar += "</table>";
            tabvar += "</div>";
            $('#show_table').append(tabvar);
        }
        // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
        // 滑动效果当满足这个条件时，自动添加高度并触发
        for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 8) {
                $(".table-body").css('height', "288px");
            }
        }

    })
    $('.liLink')[0].click();
    $('.nav a')[0].click();

    $(".table-header tbody tr td").css({ "color": mainColor })
    $(".table-body tbody tr td").css({ "color": textColor })
    //延迟刷新
    // setTimeout(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 500);
    
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
        url: "http://localhost:2277/展示版/ZFSJ.asmx/"+jsonData['FunctionName'],
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


