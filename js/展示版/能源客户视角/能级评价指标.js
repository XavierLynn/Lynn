var table_data = {
    "data": [{
        "title": "能级评价指标",
        "table": [{
                "rowHeader": [
                    [{
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
                    ]
                ],
                "data": [

                    {
                        "value": "2606.54tce"
                    },
                    {
                        "value": "12%"
                    },
                    {
                        "value": "3%"
                    },
                    {
                        "value": "--"
                    }

                ]
            },
            {
                "rowHeader": [
                    [{
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
                    ]
                ],
                "data": [

                    {
                        "value": "--"
                    },
                    {
                        "value": "--"
                    },
                    {
                        "value": "--"
                    },
                    {
                        "value": "--"
                    }

                ]
            },
            {
                "rowHeader": [
                    [{
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
                    ]
                ],
                "data": [

                    {
                        "value": "16.45kgce/(m².a)"
                    },
                    {
                        "value": "--"
                    },
                    {
                        "value": "--"
                    },
                    {
                        "value": "33kgce/(m².a)"
                    }

                ]
            },
            {
                "rowHeader": [
                    [{
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
                    ]
                ],
                "data": [

                    {
                        "value": "4121.61tCO₂"
                    },
                    {
                        "value": "--"
                    },
                    {
                        "value": "--"
                    },
                    {
                        "value": "--"
                    }

                ]
            }
        ]
    }]
};

var showRealData = ZSB["能源客户视角"]["能级评价指标"];
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
    $("#tag").css({ "background-color": mainColor })
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }

    $(".nav a").css({ "color": textColor })
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
          
            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                var currentValue =  table_data['data'][index]['table'][i]['data'][j]['value']
                var currentFloat = currentValue.match(/\d+\.\d+/g)
                var currentInts = currentValue.match(/\d+\d/g)
                var currentint = currentValue.match(/\d/g)
                var currentNumber;
                if (currentFloat){
                    currentNumber= currentFloat;
                }else if(currentInts){
                    currentNumber = currentInts;
                } else{
                    currentNumber = currentint;
                } 
                if(currentNumber){
                    var currentString = currentValue.substring(currentNumber[0].length,currentValue.length)
                    lastValue = currentNumber+currentString
                    tabvar += "<td>" + lastValue+ "</td>";
                }
                else{
                    tabvar += "<td>" + table_data['data'][index]['table'][i]['data'][j]['value']+ "</td>";
                }
            }
            tabvar += "</tr>";
            tabvar += "</table>";
            // 添加数据
            tabvar += "<table class='table-body'>";
            for (let j = 0; j < table_data['data'][index]['table'][i]['rowHeader'].length; j++) {
                tabvar += "<tr>";
                for (let k = 0; k < table_data['data'][index]['table'][i]['rowHeader'][j].length; k++) {
                    tabvar += "<td>" + table_data['data'][index]['table'][i]['rowHeader'][j][k]['headerName'] + "</td>";
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