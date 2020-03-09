var table_data = {
    "data": [{
        "title": "设备利用率详情",
        "percentage": '60/72',
        "table": [{
                "rowHeader": [
                    [{
                            "headerName": "最大设备利用率"
                        },
                        {
                            "headerName": "最大需量"
                        },
                        {
                            "headerName": "运行容量"
                        }
                    ]
                ],
                "data": [

                    {
                        "value": "26.85%"
                    },
                    {
                        "value": "3222kW"
                    },
                    {
                        "value": "12000kVA"
                    },

                ]
            },

        ]
    }]
};

var showRealData = ZSB["能源客户视角"]["设备利用率详情"];
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
    $(".nav a").css({"color": textColor })
    var _FristPara = table_data['data'][0]['percentage'].split("/").join("_/_");
    var FristPara = _FristPara.split("_").join("<span style = 'font-size:70px;'>" + ' ' + "</span>")
    $('.nav').append("<li id='tags'>" + FristPara + "</li>");
    $("#tags").css({"color": mainColor })
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
                tabvar += "<td>" + table_data['data'][index]['table'][i]['data'][j]['value'] + "</td>";
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
                $(".table-body").css('height', "228px");
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