var table_data = {
    "data": [{
        "title": "张江人工智能岛",
        "table": [{
                "rowHeader": [
                    [{
                            "headerName": "综合排名"
                        },
                        {
                            "headerName": "面积"
                        },
                        {
                            "headerName": "接入时间"
                        }
                    ]
                ],
                "data": [

                    {
                        "value": "58/72"
                    },
                    {
                        "value": "10万㎡"
                    },
                    {
                        "value": "2019.06.09"
                    },

                ]
            },

        ]
    }]
};

var showRealData = ZSB["能源客户视角"]["张江人工智能岛"];
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
    $('.nav').append("<li></li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $(".nav a").css({"color": mainColor })
    $('.liLink').click(function() {
        $('#show_table').empty();
        // 根据  li 的下标 去数组中找 如 li 下标为0 ，就去数组中找 第一个 标题的 table
        var index = $(this).index() - 1;
        var unit = 'km²';
        for (let i = 0; i < table_data['data'][index]['table'].length; i++) {
            let tabvar = "";
            tabvar += "<div class='table'>";
            tabvar += "<table class='table-header'>";
            tabvar += "<tr>";
            // 添加 表的列名
            for (let j = 0; j < table_data['data'][index]['table'][i]['data'].length; j++) {
                var currentValue = table_data['data'][index]['table'][i]['data'][j]['value']
                if (currentValue.search("/") != -1) {
                    currentValue = currentValue.split("/").join("_/_");
                    tabvar += "<td>" + currentValue.split("_").join("<span style = 'font-size:70px;'>" + ' ' + "</span>") + "</td > ";
                } else {
                    if (currentValue == "km²") {
                        tabvar += "<td>" + currentValue.split("km²").join("<span style = 'font-size:64px; font-family: 黑体'>" + unit + "</span>") + "</td > ";
                    } else {
                        tabvar += "<td>" + currentValue + "</td>";
                    }
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
    $(".table-header tbody tr td").css({"color": mainColor })
    $(".table-body tbody tr td").css({"color": textColor })
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