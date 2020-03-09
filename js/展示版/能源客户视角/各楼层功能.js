var table_data = {
    "data": [{
        "title": "各楼层功能",
        "table": [{
            "rowHeader": [{
                    "headerName": "楼层"
                },
                {
                    "headerName": "功能"
                },
                {
                    "headerName": "建筑面积"
                },
                {
                    "headerName": "电"
                },
                {
                    "headerName": "水"
                },
                {
                    "headerName": "冷"
                }
            ],
            "data": [
                [{
                        "value": "F1"
                    },
                    {
                        "value": "展示中心"
                    },
                    {
                        "value": "3600"
                    },
                    {
                        "value": "25"
                    },
                    {
                        "value": "6"
                    },
                    {
                        "value": "8"
                    }
                ],
                [{
                        "value": "F2"
                    },
                    {
                        "value": "培训中心"
                    },
                    {
                        "value": "4200"
                    },
                    {
                        "value": "30"
                    },
                    {
                        "value": "7"
                    },
                    {
                        "value": "10"
                    }
                ],
                [{
                        "value": "F3"
                    },
                    {
                        "value": "办公中心"
                    },
                    {
                        "value": "3200"
                    },
                    {
                        "value": "18"
                    },
                    {
                        "value": "5"
                    },
                    {
                        "value": "4"
                    }
                ],
                [{
                        "value": "F4"
                    },
                    {
                        "value": "会议室"
                    },
                    {
                        "value": "3200"
                    },
                    {
                        "value": "24"
                    },
                    {
                        "value": "6"
                    },
                    {
                        "value": "9"
                    }
                ],
                [{
                        "value": "F5"
                    },
                    {
                        "value": "健身房"
                    },
                    {
                        "value": "2800"
                    },
                    {
                        "value": "32"
                    },
                    {
                        "value": "8"
                    },
                    {
                        "value": "9"
                    }
                ],
                [{
                        "value": "F6"
                    },
                    {
                        "value": "机房"
                    },
                    {
                        "value": "4500"
                    },
                    {
                        "value": "35"
                    },
                    {
                        "value": "4"
                    },
                    {
                        "value": "3"
                    }
                ],
        
            ]
        }]
    }]
};

var showRealData = ZSB["能源客户视角"]["各楼层功能"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYKHSJ.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-08&endDate=2019-12",
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
    $('.nav').empty()
    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({"background-color": mainColor })
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
            for (let j = 0; j < 3; j++) {
                if (j == 2)
                    tabvar += "<td rowSpan=2 class='customtd1'>" + table_data['data'][index]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
                else
                    tabvar += "<td rowSpan=2>" + table_data['data'][index]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
            }
            tabvar += "<td colspan=3 class='customtd2'>远程计表数量</td>";
            tabvar += "</tr>";
            tabvar += "<tr>";
            // 添加 表的列名
            for (let j = 3; j < 6; j++) {
                tabvar += "<td >" + table_data['data'][index]['table'][i]['rowHeader'][j]['headerName'] + "</td>";
            }
            tabvar += "</tr>";
            tabvar += "</table>";
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
            tabvar += "</div>";
            $('#show_table').append(tabvar);
        }
        // 当 表格中的行数大于 8 行时，只需添加一个高度 ，计算方式 8*36=288 ，行高 36px ，在Table_css.css 设置
        // 滑动效果当满足这个条件时，自动添加高度并触发
        for (let i = 0; i < $('.table-body').find('tbody').length; i++) {
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 6) {
                $(".table-body").css('height', "672px");
            }
        }
        $('.table-body tr').click(function() {
            $(this).children().attr("class", "unSelectedCell");
        });
    })
    $('.liLink')[0].click();
    $('.nav a')[0].click();
    //延迟刷新

    $(".table-header tbody tr td").css({"color": textColor })
    $(".table-body tbody tr td").css({"color": textColor,"border-bottom":"4px "+mainGroup['glcgn']['bg']+" solid"})
    $(".table-body").css({"background-color": mainGroup['glcgn']['bg'],
    "border-bottom":"4px "+mainColor+" solid"})
    $(".table-header").css({"background-color": mainGroup['glcgn']['bg'],
    "border-bottom":"4px "+mainColor+" solid",
    "border-top":"4px "+mainColor+" solid"})
    $(".customtd1").css('border-right', "4px "+mainColor+" solid")   
    $(".customtd2").css('border-bottom', "4px "+mainColor+" solid") 
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
        url: "http://localhost:2277/监控版/NYKHSJ.asmx/"+jsonData['FunctionName'],
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