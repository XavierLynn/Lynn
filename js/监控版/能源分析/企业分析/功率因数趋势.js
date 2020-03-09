label = {
    show: true, //开启显示
    position: 'top', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize - 20
    }
};
itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,0,0,0)ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff0000' // 100% 处的颜色
        }]),
        lineStyle: {
            width: 5 //设置曲线宽度
        }
    },

};


var table_data = {
    "data": [{
        "title": "功率因数趋势",
        "table": [{
            "title": "年",
            "unit": "月",
            "xLabelRang": [{
                    "label": "1"
                },
                {
                    "label": "2"
                },
                {
                    "label": "3"
                },
                {
                    "label": "4"
                },
                {
                    "label": "5"
                },
                {
                    "label": "6"
                },
                {
                    "label": "7"
                },
                {
                    "label": "8"
                },
                {
                    "label": "9"
                },
                {
                    "label": "10"
                },
                {
                    "label": "11"
                },
                {
                    "label": "12"
                }
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "100"
                },
                {
                    "label": "200"
                },
                {
                    "label": "300"
                },
                {
                    "label": "400"
                },
                {
                    "label": "500"
                }
            ],
            "data": [{
                    "categoryName": "度电经济产值",
                    "start_color": h5,
                    "end_color": h4,
                    'high_color': '#5ceaff',
                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "0.4"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.32"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.35"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.36"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.44"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.52"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.82"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.95"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.55"
                        }
                    ]
                },
                {
                    "categoryName": "参考指标",
                    "start_color": 'rgba(0,254,233,0)',
                    "end_color": 'rgba(0,254,233,1)',
                    'high_color': '#5ceaff',
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "0.35"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.4"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.45"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.55"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.35"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.57"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.48"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.50"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.42"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.5"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.37"
                        }
                    ]
                }
            ]
        }, {
            "title": "季",
            "unit": "",
            "xLabelRang": [{
                    "label": "10.01"
                },
                {
                    "label": "10.04"
                },
                {
                    "label": "10.07"
                },
                {
                    "label": "10.10"
                },
                {
                    "label": "10.13"
                },
                {
                    "label": "10.17"
                },
                {
                    "label": "10.20"
                },
                {
                    "label": "10.23"
                },
                {
                    "label": "10.27"
                },
                {
                    "label": "10.30"
                },
                {
                    "label": "11.03"
                },
                {
                    "label": "11.06"
                },
                {
                    "label": "11.09"
                },
                {
                    "label": "11.12"
                },
                {
                    "label": "11.15"
                },
                {
                    "label": "11.18"
                },
                {
                    "label": "11.21"
                },
                {
                    "label": "11.24"
                },
                {
                    "label": "11.27"
                },
                {
                    "label": "11.30"
                },
                {
                    "label": "12.02"
                },
                {
                    "label": "12.05"
                },
                {
                    "label": "12.08"
                },
                {
                    "label": "12.11"
                },
                {
                    "label": "12.14"
                },
                {
                    "label": "12.17"
                },
                {
                    "label": "12.20"
                },
                {
                    "label": "12.23"
                },
                {
                    "label": "12.27"
                },
                {
                    "label": "12.30"
                }
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "100"
                },
                {
                    "label": "200"
                },
                {
                    "label": "300"
                },
                {
                    "label": "400"
                },
                {
                    "label": "500"
                }
            ],
            "data": [{
                    "categoryName": "度电经济产值",
                    "start_color": h5,
                    "end_color": h4,
                    'high_color': '#5ceaff',
                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.70"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.6"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.79"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.82"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.85"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.87"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.85"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.78"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "0.54"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.64"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.80"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.85"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.90"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.95"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.92"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.88"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.82"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.78"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.72"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.78"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.82"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.88"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.85"
                        }

                    ]
                },
                {
                    "categoryName": "参考指标",
                    "start_color": 'rgba(0,254,233,0)',
                    "end_color": 'rgba(0,254,233,1)',
                    'high_color': '#5ceaff',
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "0.5"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.6"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.63"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.58"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.63"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "0.55"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.55"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.58"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },


                    ]
                }
            ]
        }, {
            "title": "天",
            "unit": "",
            "xLabelRang": [{
                    "label": "10.01"
                },
                {
                    "label": "10.02"
                },
                {
                    "label": "10.03"
                },
                {
                    "label": "10.04"
                },
                {
                    "label": "10.05"
                },
                {
                    "label": "10.06"
                },
                {
                    "label": "10.07"
                },
                {
                    "label": "10.08"
                },
                {
                    "label": "10.09"
                },
                {
                    "label": "10.10"
                },
                {
                    "label": "10.11"
                },
                {
                    "label": "10.12"
                },
                {
                    "label": "10.13"
                },
                {
                    "label": "10.14"
                },
                {
                    "label": "10.15"
                },
                {
                    "label": "10.16"
                },
                {
                    "label": "10.17"
                },
                {
                    "label": "10.18"
                },
                {
                    "label": "10.19"
                },
                {
                    "label": "10.20"
                },
                {
                    "label": "10.21"
                },
                {
                    "label": "10.22"
                },
                {
                    "label": "10.23"
                },
                {
                    "label": "10.24"
                },
                {
                    "label": "10.25"
                },
                {
                    "label": "10.26"
                },
                {
                    "label": "10.27"
                },
                {
                    "label": "10.28"
                },
                {
                    "label": "10.29"
                },
                {
                    "label": "10.30"
                }
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "100"
                },
                {
                    "label": "200"
                },
                {
                    "label": "300"
                },
                {
                    "label": "400"
                },
                {
                    "label": "500"
                }
            ],
            "data": [{
                    "categoryName": "度电经济产值",
                    "start_color": h5,
                    "end_color": h4,
                    'high_color': '#5ceaff',
                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.67"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.70"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.70"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.85"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.82"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.86"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.78"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.89"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.95"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.98"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "0.95"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.92"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.90"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.88"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.83"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.88"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.79"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.84"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.86"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.92"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.84"
                        },
                        {
                            "xLabel": "2015",
                            "yLabel": "0.75"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.69"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.82"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.85"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.90"
                        }

                    ]
                },
                {
                    "categoryName": "参考指标",
                    "start_color": 'rgba(0,254,233,0)',
                    "end_color": 'rgba(0,254,233,1)',
                    'high_color': '#5ceaff',
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "0.7"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.6"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.63"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.63"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.68"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.62"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "0.65"
                        },

                    ]
                }
            ]
        }]
    }]
};

var showRealData = JKB["能源分析"]["企业分析"]["功率因数趋势"]

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionQYBQYBQS",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2018-01&endDate=2018-12",
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

    var currentErjiTab = null;
    var twoLevelTitle = null;

    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'>◀</li>");

    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    $("#btn1").click(function() {
        // alert("Text: " + $("#test").text());
    });

    $('.nav a').click(function() {
      
        var yiji;
        for (let i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (let j = 0; j < table_data['data'][i]['table'].length; j++) {
                    var temp = table_data['data'][i]['table'][j]['title'];
                    $('#subtitle').append("<span class='erji_title'><a href='#' >" + temp + "</a></span>");
                    // $('.erji_title a').attr("background-image", 'url("../../Image/zfsj/' + temp + 'focus.png")');
                    // $('.erji_title a').attr("style", "background-image:url(../../Image/zfsj/" + temp + "focus.png);");

                    let id = document.getElementById("subtitle")
                    let tempA = id.getElementsByTagName("a");
                    tempA[j].style.backgroundImage = 'url("../../../../Image/能源分析/' + temp + '—未选中.png")';
                    twoLevelTitle = tempA;

                }
                break
            }
        }
        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../../../Image/能源分析/' + $(this).text() + '—选中.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../../../Image/能源分析/' + currentErjiTab.text + '—未选中.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../../Image/能源分析/' + $(this).text() + '—选中.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../../Image/能源分析/' + $(this).text() + '—未选中.png")';
                }
            }
        });

        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            var rotateValues = [{ 'names': '年', 'value': 0 }, { 'names': '季', 'value': 90 }, { 'names': '天', 'value': 90 }];
            series = [];
            y_data = [];
            x_label = [];
            color_list = [];
            new_color_list = [];

            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            color_list.length = 0;
            new_color_list.length = 0;
            for (var x = 0; x < rotateValues.length; x++) {
                if (currentErjiTab.text == rotateValues[x]['names']) {
                    rotateValue = rotateValues[x]['value'];
                }
            };

            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }

            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['xLabelRang'].length; k++) {
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'])
                            }
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['gradient_color']);
                                const res = []; // y_data 过渡数组
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                }
                                y_data.push(res);
                                color_list.push(color_res);
                            }
                        }
                    }
                }
            }
            var curInt = null;
            if (leibie_name.length > 1) {
                new_liebie = leibie_name;
            } else {
                new_liebie = [];
            }
            for (var i = 0; i < color_list.length; i++) {
                const res = []; // 存储颜色的过渡矩阵
                for (var j = 0; j < y_data[i].length; j++) {
                    res.push(new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        // { offset: 0, color: transp },
                        { offset: 0, color: color_list[i][0] },
                        { offset: 1, color: color_list[i][1] },
                        // { offset: 1, color: transp }
                    ]))
                }
                new_color_list.push(res);
            }
            // 判断需要高亮的数组的位置  并将原来的颜色替换成高亮色
            for (var i = 0; i < color_list.length; i++) {
                if (x_val.length !== 0) {
                    for (var m = 0; m < x_val.length; m++) {
                        for (var n = 0; n < x_label.length; n++) {
                            if (x_val[m] === x_label[n]) {
                                new_color_list[i].splice(n, 1, color_list[i][2]);
                                break
                            }
                        }
                    }
                }
            }

            colorGra = [{ 'one': h4, 'two': h5 }, { 'one': 'rgba(255,255,255,0.18)', 'two': 'rgba(255,255,255,0.76)' }];
            colorLine = [c2, 'rgba(255,255,255,1)']
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                tempColor = color_list[i][0];
                tempColor = 'rgba(' + parseInt(tempColor.substr(1, 2), 16) + ',' + parseInt(tempColor.substr(3, 2), 16) + ',' + parseInt(tempColor.substr(5, 2), 16) + ', 1)' // 0% 处的颜色

                if (i == 0) {
                    series.push(
                       
                        {
                            name: new_liebie[i],
                            //margin: 50,

                            itemStyle: {

                                normal: {

                                    barBorderRadius: [0, 0, 0, 0],
                                    lineStyle: {
                                        color: colorLine[i],
                                        width: 4,
                                        shadowColor: h1,
                                        shadowBlur: 20

                                    }
                                },

                            },
                            type: 'line',
                            // lineStyle: {
                            //     normal: { color: colorLine[i], width: 4 }

                            // },

                            //areaStyle: { normal: { color: colorList[0] } },
                            smooth: false,
                            symbol: "none",
                            //symbolSize: 5,
                            areaStyle: {
                                normal: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                                offset: 0,
                                                color: colorGra[i]['two'] // 0% 处的颜色
                                            },
                                            //{
                                            // offset: 0.2, color: colorGra[i]['two'] // 0% 处的颜色
                                            // },
                                            {
                                                offset: 1,
                                                color: colorGra[i]['one'] // 100% 处的颜色
                                            }
                                        ],
                                        global: false // 缺省为 false
                                    }
                                },
                            },
                            //barWidth: "12px",
                            label: '',
                            data: y_data[i],
                            color: function(params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    )
                } else {
                    series.push({
                        name: new_liebie[i],
                        type: 'line',
                        barGap: '30%',
                        // lineStyle: {
                        //     type: 'dashed',
                        //     width: 1,
                        //     color: 'rgb(255,237,218)'
                        // },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,
                                    type: 'dotted', //'dotted'虚线 'solid'实线
                                    color: c4,
                                    shadowBlur: 10,
                                    shadowColor: h3,
                                }
                            }
                        },

                        barWidth: '100px',
                        label: '',
                        data: y_data[i],
                        color: c4
                    }, )
                }

            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            new_liebies = [];
            new_liebies.push(new_liebie[1])
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    icon: 'image://http://127.0.0.1:8080/EchartSimple/Image/能源分析/unitIcon1.png',
                    right: '10%',
                    top: '3%',
                    itemGap: 220,
                    formatter: function(name) {
                        if (name == '功率因数') {
                            return '';
                        } else {
                            return name
                        }
                    },
                    data: new_liebies,
                    itemWidth: 50,
                    itemHeight: 15,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    top: '23%',
                    containLabel: true
                },
                xAxis: [{
                    // offset: 50,
                    name: unit,
                    nameLocation: 'end',
                    nameGap: -20,
                    nameTextStyle: {
                        padding: [195, 0, 0, 0],
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    },
                    type: 'category',
                    data: x_label,

                    axisLine: {

                        lineStyle: {
                            color: globalFontColor,
                            width: 5,
                            offset: 5,
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: rotateValue,
                        color: globalFontColor,
                        fontSize: globalFontSize,
                        margin: 80
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{

                    axisTick: {
                        show: false
                    },
                    type: 'value',

                    axisLabel: {

                        margin: 20,
                        color: globalFontColor,
                        fontSize: globalFontSize
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            type: 'dashed'
                        }
                    },
                }],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
            $('#btn').click(function() {
                // ,itemStyle:{
                //     color: function(params){
                //       var key = params.dataIndex;
                //       if(key === curInt){
                //         return '#E062AE'
                //       }else{
                //         return '#37A2DA'
                //       }
                //     }}
                curInt = 1;
                myChart.setOption(option)
            });
        });
        $('.erji_title a')[0].click();
    });

    $('.nav a')[0].click();
};


ue.interface.Flush = function () {
    Flush();
}
  
ue.interface.Load = function (data) {
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/" + jsonData['FunctionName'],
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

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};