label = {
    show: false, //开启显示
    position: 'inside', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize
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
            width: 10 //设置曲线宽度
        }
    },

};

var table_data = {
    "data": [{
        "title": "近30天供需对比",
        "table": [{
                "title": "总",
                "unit": "Tce",
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
                    },
                    {
                        "label": "13"
                    },
                    {
                        "label": "14"
                    },
                    {
                        "label": "15"
                    },
                    {
                        "label": "16"
                    },
                    {
                        "label": "17"
                    },
                    {
                        "label": "18"
                    },
                    {
                        "label": "19"
                    },
                    {
                        "label": "20"
                    },
                    {
                        "label": "21"
                    },
                    {
                        "label": "22"
                    },
                    {
                        "label": "23"
                    },
                    {
                        "label": "24"
                    },
                    {
                        "label": "25"
                    },
                    {
                        "label": "26"
                    },
                    {
                        "label": "27"
                    },
                    {
                        "label": "28"
                    },
                    {
                        "label": "29"
                    },
                    {
                        "label": "30"
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
                        "categoryName": "供",
                        "start_color": "#519CF6",
                        "end_color": "#519CF6",
                        'high_color': '#6298E0',
                        'gradient_color': '#223C58',
                        "categoryData": [{
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "36"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "51"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "40"
                            }
                        ]
                    },
                    {
                        "categoryName": "需",
                        "start_color": "#C5EBF8",
                        "end_color": "#C5EBF8",
                        'high_color': '#8EA7AD',
                        'gradient_color': '#445157',
                        "categoryData": [{
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "33"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "31"
                            },
                            {
                                "yLabel": "32"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "39"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "电",
                "unit": "Tce",
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
                    },
                    {
                        "label": "13"
                    },
                    {
                        "label": "14"
                    },
                    {
                        "label": "15"
                    },
                    {
                        "label": "16"
                    },
                    {
                        "label": "17"
                    },
                    {
                        "label": "18"
                    },
                    {
                        "label": "19"
                    },
                    {
                        "label": "20"
                    },
                    {
                        "label": "21"
                    },
                    {
                        "label": "22"
                    },
                    {
                        "label": "23"
                    },
                    {
                        "label": "24"
                    },
                    {
                        "label": "25"
                    },
                    {
                        "label": "26"
                    },
                    {
                        "label": "27"
                    },
                    {
                        "label": "28"
                    },
                    {
                        "label": "29"
                    },
                    {
                        "label": "30"
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
                        "categoryName": "供",
                        "start_color": "#519CF6",
                        "end_color": "#519CF6",
                        'high_color': '#6298E0',
                        'gradient_color': '#223C58',
                        "categoryData": [{
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "62"
                            },
                            {
                                "yLabel": "67"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "36"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "51"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "40"
                            }
                        ]
                    },
                    {
                        "categoryName": "需",
                        "start_color": "#C5EBF8",
                        "end_color": "#C5EBF8",
                        'high_color': '#8EA7AD',
                        'gradient_color': '#445157',
                        "categoryData": [{
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "33"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "31"
                            },
                            {
                                "yLabel": "32"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "39"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "气",
                "unit": "Tce",
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
                    },
                    {
                        "label": "13"
                    },
                    {
                        "label": "14"
                    },
                    {
                        "label": "15"
                    },
                    {
                        "label": "16"
                    },
                    {
                        "label": "17"
                    },
                    {
                        "label": "18"
                    },
                    {
                        "label": "19"
                    },
                    {
                        "label": "20"
                    },
                    {
                        "label": "21"
                    },
                    {
                        "label": "22"
                    },
                    {
                        "label": "23"
                    },
                    {
                        "label": "24"
                    },
                    {
                        "label": "25"
                    },
                    {
                        "label": "26"
                    },
                    {
                        "label": "27"
                    },
                    {
                        "label": "28"
                    },
                    {
                        "label": "29"
                    },
                    {
                        "label": "30"
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
                        "categoryName": "供",
                        "start_color": "#519CF6",
                        "end_color": "#519CF6",
                        'high_color': '#6298E0',
                        'gradient_color': '#223C58',
                        "categoryData": [{
                                "yLabel": "55"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "36"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "51"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "55"
                            }
                        ]
                    },
                    {
                        "categoryName": "需",
                        "start_color": "#C5EBF8",
                        "end_color": "#C5EBF8",
                        'high_color': '#8EA7AD',
                        'gradient_color': '#445157',
                        "categoryData": [{
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "33"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "31"
                            },
                            {
                                "yLabel": "32"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "39"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "水",
                "unit": "Tce",
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
                    },
                    {
                        "label": "13"
                    },
                    {
                        "label": "14"
                    },
                    {
                        "label": "15"
                    },
                    {
                        "label": "16"
                    },
                    {
                        "label": "17"
                    },
                    {
                        "label": "18"
                    },
                    {
                        "label": "19"
                    },
                    {
                        "label": "20"
                    },
                    {
                        "label": "21"
                    },
                    {
                        "label": "22"
                    },
                    {
                        "label": "23"
                    },
                    {
                        "label": "24"
                    },
                    {
                        "label": "25"
                    },
                    {
                        "label": "26"
                    },
                    {
                        "label": "27"
                    },
                    {
                        "label": "28"
                    },
                    {
                        "label": "29"
                    },
                    {
                        "label": "30"
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
                        "categoryName": "供",
                        "start_color": "#519CF6",
                        "end_color": "#519CF6",
                        'high_color': '#6298E0',
                        'gradient_color': '#223C58',
                        "categoryData": [{
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "50"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "36"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "46"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "80"
                            },
                            {
                                "yLabel": "120"
                            },
                            {
                                "yLabel": "60"
                            },
                            {
                                "yLabel": "45"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "40"
                            }
                        ]
                    },
                    {
                        "categoryName": "需",
                        "start_color": "#C5EBF8",
                        "end_color": "#C5EBF8",
                        'high_color': '#8EA7AD',
                        'gradient_color': '#445157',
                        "categoryData": [{
                                "yLabel": "39"
                            },
                            {
                                "yLabel": "35"
                            },
                            {
                                "yLabel": "33"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "30"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "42"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "31"
                            },
                            {
                                "yLabel": "32"
                            },
                            {
                                "yLabel": "43"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "41"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "37"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "47"
                            },
                            {
                                "yLabel": "48"
                            },
                            {
                                "yLabel": "44"
                            },
                            {
                                "yLabel": "34"
                            },
                            {
                                "yLabel": "38"
                            },
                            {
                                "yLabel": "40"
                            },
                            {
                                "yLabel": "39"
                            }
                        ]
                    }
                ]
            }
        ]
    }]
};

var showRealData = JKB["驾驶舱"]["近30天供需对比"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetRegionYDGXDB",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-12&endDate=2020-01",
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
    yiji_title.length = 0;
    $('.nav').empty()
    

    var currentErjiTab = null;
    var twoLevelTitle = null;

    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }
    const img = new Image(); // 设置背景图片
    img.src = '../../../Image/gray.jpg'; // 背景图片路径
    $('.nav').append("<li id='tag'>◀</li>");
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }

    $('.nav a').click(function() {
        var yiji;
        for (let i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (let j = 0; j < table_data['data'][i]['table'].length; j++) {
                    var temp = table_data['data'][i]['table'][j]['title'];
                    $('#subtitle').append("<span class='erji_title'><a href='#' >" + temp + "</a></span>");
                    // $('.erji_title a').attr("background-image", 'url("../../Image/监控版/驾驶舱/' + temp + 'focus.png")');
                    // $('.erji_title a').attr("style", "background-image:url(../../Image/监控版/驾驶舱/" + temp + "focus.png);");

                    let id = document.getElementById("subtitle")
                    let tempA = id.getElementsByTagName("a");
                    tempA[j].style.backgroundImage = 'url("../../../Image/监控版/驾驶舱/' + temp + '.png")';
                    twoLevelTitle = tempA;

                }
                break
            }
        }
        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/监控版/驾驶舱/' + $(this).text() + 'focus.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../../Image/监控版/驾驶舱/' + currentErjiTab.text + '.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/监控版/驾驶舱/' + $(this).text() + 'focus.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/监控版/驾驶舱/' + $(this).text() + '.png")';
                }
            }
        });

        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
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
                    res.push(new echarts.graphic.LinearGradient(1, 0, 0, 0, [
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
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                //获取area颜色
                var tempColor = color_list[i][3];
                tempColor = 'rgba(' + parseInt(tempColor.substr(1, 2), 16) + ',' + parseInt(tempColor.substr(3, 2), 16) + ',' + parseInt(tempColor.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
                    //获取外发光颜色
                var tempColorShadowBlur = color_list[i][2];
                tempColorShadowBlur = 'rgba(' + parseInt(tempColorShadowBlur.substr(1, 2), 16) + ',' + parseInt(tempColorShadowBlur.substr(3, 2), 16) + ',' + parseInt(tempColorShadowBlur.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
                series.push({
                    name: new_liebie[i],
                    coordinateSystem: 'polar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                            lineStyle: {
                                width: 4 //设置曲线宽度
                            }
                        },

                    },
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: colorList[0],
                            type: 'solid',
                            shadowColor: tempColorShadowBlur,
                            shadowBlur: 20,
                            shadowOffsetY: 0
                        }
                    },
                    // smooth: true,
                    symbolSize: 0,
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
                                    color: tempColor // 0% 处的颜色
                                }, {
                                    offset: 0.2,
                                    color: tempColor // 0% 处的颜色
                                }, {
                                    offset: 0.2,
                                    color: tempColor // 0% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                    },
                    label: label,
                    data: y_data[i],
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                })
            }
            // console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                // backgroundColor:"red",
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
                legend: {
                    icon: 'pin',
                    left: '3%',
                    top: '13%',
                    itemGap: 40,
                    data: new_liebie,
                    width: 40,
                    itemWidth: 100,
                    itemHeight: 10,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                radiusAxis: {
                    name: unit,
                    nameLocation: "start",
                    nameTextStyle: {
                        fontSize: globalFontSize + 10,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            color: 'rgba(255,255,255,0.8)',
                            type: 'solid'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                            width: 4,
                            fontSize: globalFontSize
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 0,
                        color: globalFontColor,
                        fontSize: globalFontSize - 5,
                        margin: -70,
                        // formatter: '{value} ' + unit
                    },
                    z: 10
                },
                angleAxis: {
                    type: 'category',
                    nameLocation: 'end',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: globalFontSize,
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            color: 'rgba(255,255,255,0.8)',
                            type: 'dashed'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 0,
                        color: globalFontColor,
                        fontSize: globalFontSize,
                        margin: 40,
                    },
                    z: 9
                },
                polar: {

                    radius: '80%',
                    center: ['60%', '50%']
                },
                series: series,
                animationDuration: 0
            };
            myChart.setOption(option);
        });
        $('.erji_title a')[0].click();
    });

    $('.nav a')[0].click();
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/"+jsonData['FunctionName'],
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

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};