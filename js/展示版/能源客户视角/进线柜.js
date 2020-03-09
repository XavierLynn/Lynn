var table_data = {
    "data": [{
        "title": "进线柜",
        "table": [{
            "rowHeader": [{
                    "headerName": "订单编号",
                    "width": "16.66"
                },
                {
                    "headerName": "服务名称",
                    "width": "17.66"
                },
                {
                    "headerName": "企业",
                    "width": "18.66"
                }, {
                    "headerName": "预算",
                    "width": "16.66"
                },
                {
                    "headerName": "意向金",
                    "width": "18.66"
                },
                {
                    "headerName": "发布时间",
                    "width": "7.66"
                }

            ],
            "data": [
                [{
                        "value": "一端母线Uab"
                    },
                    {
                        "value": "10.3kV"
                    },
                    {
                        "value": "暂态地电压幅值"
                    }, {
                        "value": "7dB"
                    },
                    {
                        "value": "超声波局放幅值"
                    },
                    {
                        "value": "-3dB"
                    }
                ],
                [{
                        "value": "一端母线Uab"
                    },
                    {
                        "value": "10.3kV"
                    },
                    {
                        "value": "暂态地电压幅值"
                    }, {
                        "value": "7dB"
                    },
                    {
                        "value": "超声波局放幅值"
                    },
                    {
                        "value": "-3dB"
                    }
                ],
                [{
                        "value": "一端母线Uab"
                    },
                    {
                        "value": "10.3kV"
                    },
                    {
                        "value": "暂态地电压幅值"
                    }, {
                        "value": "7dB"
                    },
                    {
                        "value": "超声波局放幅值"
                    },
                    {
                        "value": "-3dB"
                    }
                ]
            ]
        }]
    }]
};

var showRealData = ZSB["能源客户视角"]["进线柜"];
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
    // $("#tag").css({"background-color": mainColor })
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
            // 添加数据
            tabvar += "<table class='table-body'>";
            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                tabvar += "<tr>";
                var column = table_data['data'][index]['table'][i]['data'][j].length;
                for (let k = 0; k < column; k++) {
                    if (k % 2 == 0)
                        tabvar += "<td class='keyCell unSelectedCell' style='width:" + table_data['data'][index]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
                    else
                        tabvar += "<td class='valueCell unSelectedCell' style='width:" + table_data['data'][index]['table'][i]['rowHeader'][k]['width'] + "%'>" + table_data['data'][index]['table'][i]['data'][j][k]['value'] + "</td>";
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
            if ($(".table-body").find("tbody").eq(i).find("tr").length >= 3) {
                $(".table-body").css('height', "336px");
            }
        }
    })
    $('.liLink')[0].click();
    $('.nav a')[0].click();  //延迟刷新
    $(".valueCell").css('color', mainColor) 
    $(".redValueCell").css('color', mainGroup['jxg']['redValueCel']) 
    $(".keyCell").css('color',mainGroup['jxg']['keyCell']) 
        
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