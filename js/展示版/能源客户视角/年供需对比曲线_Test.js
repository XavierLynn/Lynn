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
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    },
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
        "title": "年供需对比曲线",
        "table": [{
            "title": "总",
            "unit": "万TCE",
            "KeyRang": [{
                    "label": "1月"
                },
                {
                    "label": "2月"
                },
                {
                    "label": "3月"
                },
                {
                    "label": "4月"
                },
                {
                    "label": "5月"
                },
                {
                    "label": "6月"
                },
                {
                    "label": "7月"
                },
                {
                    "label": "8月"
                },
                {
                    "label": "9月"
                },
                {
                    "label": "10月"
                },
                {
                    "label": "11月"
                },
                {
                    "label": "12月"
                }
            ],
            "ValueRang": [{
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
                    "categoryName": "需",
                    "start_color": mainGroup["ngxdb"]['one'][0],
                    "end_color": mainGroup["ngxdb"]['one'][1],
                    'high_color': mainGroup["ngxdb"]['one'][2],

                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "20"
                        },
                        {
                            "Key": "2016",
                            "Value": "120"
                        },
                        {
                            "Key": "2017",
                            "Value": "250"
                        },
                        {
                            "Key": "2018",
                            "Value": "310"
                        },
                        {
                            "Key": "2019",
                            "Value": "440"
                        },
                        {
                            "Key": "2019",
                            "Value": "320"
                        },
                        {
                            "Key": "2019",
                            "Value": "420"
                        },
                        {
                            "Key": "2019",
                            "Value": "450"
                        },
                        {
                            "Key": "2019",
                            "Value": "388"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "471"
                        },
                        {
                            "Key": "2019",
                            "Value": "356"
                        }
                    ]
                },
                {
                    "categoryName": "供",
                    "start_color": mainGroup["ngxdb"]['two'][0],
                    "end_color": mainGroup["ngxdb"]['two'][1],
                    'high_color': mainGroup["ngxdb"]['two'][2],
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "80"
                        },
                        {
                            "Key": "2016",
                            "Value": "190"
                        },
                        {
                            "Key": "2017",
                            "Value": "270"
                        },
                        {
                            "Key": "2018",
                            "Value": "380"
                        },
                        {
                            "Key": "2019",
                            "Value": "500"
                        },
                        {
                            "Key": "2019",
                            "Value": "390"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "530"
                        },
                        {
                            "Key": "2019",
                            "Value": "438"
                        },
                        {
                            "Key": "2019",
                            "Value": "560"
                        },
                        {
                            "Key": "2019",
                            "Value": "521"
                        },
                        {
                            "Key": "2019",
                            "Value": "386"
                        }
                    ]
                }
            ]
        }, {
            "title": "电",
            "unit": "万kWh",
            "KeyRang": [{
                    "label": "1月"
                },
                {
                    "label": "2月"
                },
                {
                    "label": "3月"
                },
                {
                    "label": "4月"
                },
                {
                    "label": "5月"
                },
                {
                    "label": "6月"
                },
                {
                    "label": "7月"
                },
                {
                    "label": "8月"
                },
                {
                    "label": "9月"
                },
                {
                    "label": "10月"
                },
                {
                    "label": "11月"
                },
                {
                    "label": "12月"
                }
            ],
            "ValueRang": [{
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
                    "categoryName": "需",
                    "start_color": mainGroup["ngxdb"]['one'][0],
                    "end_color": mainGroup["ngxdb"]['one'][1],
                    'high_color': mainGroup["ngxdb"]['one'][2],
                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "70"
                        },
                        {
                            "Key": "2016",
                            "Value": "120"
                        },
                        {
                            "Key": "2017",
                            "Value": "250"
                        },
                        {
                            "Key": "2018",
                            "Value": "310"
                        },
                        {
                            "Key": "2019",
                            "Value": "440"
                        },
                        {
                            "Key": "2019",
                            "Value": "320"
                        },
                        {
                            "Key": "2019",
                            "Value": "420"
                        },
                        {
                            "Key": "2019",
                            "Value": "450"
                        },
                        {
                            "Key": "2019",
                            "Value": "358"
                        },
                        {
                            "Key": "2019",
                            "Value": "470"
                        },
                        {
                            "Key": "2019",
                            "Value": "451"
                        },
                        {
                            "Key": "2019",
                            "Value": "356"
                        }
                    ]
                },
                {
                    "categoryName": "供",
                    "start_color": mainGroup["ngxdb"]['two'][0],
                    "end_color": mainGroup["ngxdb"]['two'][1],
                    'high_color': mainGroup["ngxdb"]['two'][2],
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "80"
                        },
                        {
                            "Key": "2016",
                            "Value": "190"
                        },
                        {
                            "Key": "2017",
                            "Value": "270"
                        },
                        {
                            "Key": "2018",
                            "Value": "380"
                        },
                        {
                            "Key": "2019",
                            "Value": "500"
                        },
                        {
                            "Key": "2019",
                            "Value": "390"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "530"
                        },
                        {
                            "Key": "2019",
                            "Value": "438"
                        },
                        {
                            "Key": "2019",
                            "Value": "560"
                        },
                        {
                            "Key": "2019",
                            "Value": "521"
                        },
                        {
                            "Key": "2019",
                            "Value": "386"
                        }
                    ]
                }
            ]
        }, {
            "title": "气",
            "unit": "万m³",
            "KeyRang": [{
                    "label": "1月"
                },
                {
                    "label": "2月"
                },
                {
                    "label": "3月"
                },
                {
                    "label": "4月"
                },
                {
                    "label": "5月"
                },
                {
                    "label": "6月"
                },
                {
                    "label": "7月"
                },
                {
                    "label": "8月"
                },
                {
                    "label": "9月"
                },
                {
                    "label": "10月"
                },
                {
                    "label": "11月"
                },
                {
                    "label": "12月"
                }
            ],
            "ValueRang": [{
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
                    "categoryName": "需",
                    "start_color": mainGroup["ngxdb"]['one'][0],
                    "end_color": mainGroup["ngxdb"]['one'][1],
                    'high_color': mainGroup["ngxdb"]['one'][2],
                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "20"
                        },
                        {
                            "Key": "2016",
                            "Value": "120"
                        },
                        {
                            "Key": "2017",
                            "Value": "250"
                        },
                        {
                            "Key": "2018",
                            "Value": "280"
                        },
                        {
                            "Key": "2019",
                            "Value": "290"
                        },
                        {
                            "Key": "2019",
                            "Value": "320"
                        },
                        {
                            "Key": "2019",
                            "Value": "340"
                        },
                        {
                            "Key": "2019",
                            "Value": "450"
                        },
                        {
                            "Key": "2019",
                            "Value": "388"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "471"
                        },
                        {
                            "Key": "2019",
                            "Value": "356"
                        }
                    ]
                },
                {
                    "categoryName": "供",
                    "start_color": mainGroup["ngxdb"]['two'][0],
                    "end_color": mainGroup["ngxdb"]['two'][1],
                    'high_color': mainGroup["ngxdb"]['two'][2],
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "80"
                        },
                        {
                            "Key": "2016",
                            "Value": "190"
                        },
                        {
                            "Key": "2017",
                            "Value": "270"
                        },
                        {
                            "Key": "2018",
                            "Value": "380"
                        },
                        {
                            "Key": "2019",
                            "Value": "500"
                        },
                        {
                            "Key": "2019",
                            "Value": "390"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "530"
                        },
                        {
                            "Key": "2019",
                            "Value": "438"
                        },
                        {
                            "Key": "2019",
                            "Value": "560"
                        },
                        {
                            "Key": "2019",
                            "Value": "521"
                        },
                        {
                            "Key": "2019",
                            "Value": "386"
                        }
                    ]
                }
            ]
        }, {
            "title": "水",
            "unit": "万T",
            "KeyRang": [{
                    "label": "1月"
                },
                {
                    "label": "2月"
                },
                {
                    "label": "3月"
                },
                {
                    "label": "4月"
                },
                {
                    "label": "5月"
                },
                {
                    "label": "6月"
                },
                {
                    "label": "7月"
                },
                {
                    "label": "8月"
                },
                {
                    "label": "9月"
                },
                {
                    "label": "10月"
                },
                {
                    "label": "11月"
                },
                {
                    "label": "12月"
                }
            ],
            "ValueRang": [{
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
                    "categoryName": "需",
                    "start_color": mainGroup["ngxdb"]['one'][0],
                    "end_color": mainGroup["ngxdb"]['one'][1],
                    'high_color': mainGroup["ngxdb"]['one'][2],
                    'gradient_color': '#8FC31F',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "20"
                        },
                        {
                            "Key": "2016",
                            "Value": "150"
                        },
                        {
                            "Key": "2017",
                            "Value": "250"
                        },
                        {
                            "Key": "2018",
                            "Value": "280"
                        },
                        {
                            "Key": "2019",
                            "Value": "440"
                        },
                        {
                            "Key": "2019",
                            "Value": "320"
                        },
                        {
                            "Key": "2019",
                            "Value": "350"
                        },
                        {
                            "Key": "2019",
                            "Value": "450"
                        },
                        {
                            "Key": "2019",
                            "Value": "388"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "471"
                        },
                        {
                            "Key": "2019",
                            "Value": "356"
                        }
                    ]
                },
                {
                    "categoryName": "供",
                    "start_color": mainGroup["ngxdb"]['two'][0],
                    "end_color": mainGroup["ngxdb"]['two'][1],
                    'high_color': mainGroup["ngxdb"]['two'][2],
                    'gradient_color': '#00FBF2',
                    "categoryData": [{
                            "Key": "2015",
                            "Value": "80"
                        },
                        {
                            "Key": "2016",
                            "Value": "190"
                        },
                        {
                            "Key": "2017",
                            "Value": "270"
                        },
                        {
                            "Key": "2018",
                            "Value": "600"
                        },
                        {
                            "Key": "2019",
                            "Value": "500"
                        },
                        {
                            "Key": "2019",
                            "Value": "390"
                        },
                        {
                            "Key": "2019",
                            "Value": "490"
                        },
                        {
                            "Key": "2019",
                            "Value": "530"
                        },
                        {
                            "Key": "2019",
                            "Value": "438"
                        },
                        {
                            "Key": "2019",
                            "Value": "600"
                        },
                        {
                            "Key": "2019",
                            "Value": "600"
                        },
                        {
                            "Key": "2019",
                            "Value": "600"
                        }
                    ]
                }
            ]
        }]
    }]
};
var EChart_Data = 
{
    "ChartData":[
        {"FirTitle":"年供需对比曲线","TableData":[
            {"SecTitle":"总","Unit":"万tce","CategoryData":[
                {"CategoryName":"需","Data":[
                    {
                        "Key": "1月",
                        "Value": "20"
                    },
                    {
                        "Key": "2月",
                        "Value": "120"
                    },
                    {
                        "Key": "3月",
                        "Value": "250"
                    },
                    {
                        "Key": "4月",
                        "Value": "310"
                    },
                    {
                        "Key": "5月",
                        "Value": "440"
                    },
                    {
                        "Key": "6月",
                        "Value": "320"
                    },
                    {
                        "Key": "7月",
                        "Value": "420"
                    },
                    {
                        "Key": "8月",
                        "Value": "450"
                    },
                    {
                        "Key": "9月",
                        "Value": "388"
                    },
                    {
                        "Key": "10月",
                        "Value": "490"
                    },
                    {
                        "Key": "11月",
                        "Value": "471"
                    },
                    {
                        "Key": "12月",
                        "Value": "356"
                    }
                ]},
                {"CategoryName":"供","Data":[
                    {
                        "Key": "1月",
                        "Value": "80"
                    },
                    {
                        "Key": "2月",
                        "Value": "190"
                    },
                    {
                        "Key": "3月",
                        "Value": "270"
                    },
                    {
                        "Key": "4月",
                        "Value": "380"
                    },
                    {
                        "Key": "5月",
                        "Value": "500"
                    },
                    {
                        "Key": "6月",
                        "Value": "390"
                    },
                    {
                        "Key": "7月",
                        "Value": "490"
                    },
                    {
                        "Key": "8月",
                        "Value": "530"
                    },
                    {
                        "Key": "9月",
                        "Value": "438"
                    },
                    {
                        "Key": "10月",
                        "Value": "560"
                    },
                    {
                        "Key": "11月",
                        "Value": "521"
                    },
                    {
                        "Key": "12月",
                        "Value": "386"
                    }
                ]}
            ]},
            {"SecTitle":"电","Unit":"万kWh","CategoryData":[
                {"CategoryName":"需","Data":[
                    {
                        "Key": "1月",
                        "Value": "20"
                    },
                    {
                        "Key": "2月",
                        "Value": "120"
                    },
                    {
                        "Key": "3月",
                        "Value": "250"
                    },
                    {
                        "Key": "4月",
                        "Value": "20"
                    },
                    {
                        "Key": "5月",
                        "Value": "440"
                    },
                    {
                        "Key": "6月",
                        "Value": "320"
                    },
                    {
                        "Key": "7月",
                        "Value": "420"
                    },
                    {
                        "Key": "8月",
                        "Value": "450"
                    },
                    {
                        "Key": "9月",
                        "Value": "388"
                    },
                    {
                        "Key": "10月",
                        "Value": "490"
                    },
                    {
                        "Key": "11月",
                        "Value": "471"
                    },
                    {
                        "Key": "12月",
                        "Value": "356"
                    }
                ]},
                {"CategoryName":"供","Data":[
                    {
                        "Key": "1月",
                        "Value": "80"
                    },
                    {
                        "Key": "2月",
                        "Value": "190"
                    },
                    {
                        "Key": "3月",
                        "Value": "270"
                    },
                    {
                        "Key": "4月",
                        "Value": "380"
                    },
                    {
                        "Key": "5月",
                        "Value": "500"
                    },
                    {
                        "Key": "6月",
                        "Value": "390"
                    },
                    {
                        "Key": "7月",
                        "Value": "490"
                    },
                    {
                        "Key": "8月",
                        "Value": "530"
                    },
                    {
                        "Key": "9月",
                        "Value": "438"
                    },
                    {
                        "Key": "10月",
                        "Value": "560"
                    },
                    {
                        "Key": "11月",
                        "Value": "521"
                    },
                    {
                        "Key": "12月",
                        "Value": "386"
                    }
                ]}
            ]},
            {"SecTitle":"气","Unit":"万m³","CategoryData":[
                {"CategoryName":"需","Data":[
                    {
                        "Key": "1月",
                        "Value": "20"
                    },
                    {
                        "Key": "2月",
                        "Value": "120"
                    },
                    {
                        "Key": "3月",
                        "Value": "250"
                    },
                    {
                        "Key": "4月",
                        "Value": "310"
                    },
                    {
                        "Key": "5月",
                        "Value": "440"
                    },
                    {
                        "Key": "6月",
                        "Value": "320"
                    },
                    {
                        "Key": "7月",
                        "Value": "420"
                    },
                    {
                        "Key": "8月",
                        "Value": "450"
                    },
                    {
                        "Key": "9月",
                        "Value": "388"
                    },
                    {
                        "Key": "10月",
                        "Value": "490"
                    },
                    {
                        "Key": "11月",
                        "Value": "471"
                    },
                    {
                        "Key": "12月",
                        "Value": "356"
                    }
                ]},
                {"CategoryName":"供","Data":[
                    {
                        "Key": "1月",
                        "Value": "80"
                    },
                    {
                        "Key": "2月",
                        "Value": "190"
                    },
                    {
                        "Key": "3月",
                        "Value": "270"
                    },
                    {
                        "Key": "4月",
                        "Value": "380"
                    },
                    {
                        "Key": "5月",
                        "Value": "500"
                    },
                    {
                        "Key": "6月",
                        "Value": "390"
                    },
                    {
                        "Key": "7月",
                        "Value": "490"
                    },
                    {
                        "Key": "8月",
                        "Value": "530"
                    },
                    {
                        "Key": "9月",
                        "Value": "438"
                    },
                    {
                        "Key": "10月",
                        "Value": "560"
                    },
                    {
                        "Key": "11月",
                        "Value": "521"
                    },
                    {
                        "Key": "12月",
                        "Value": "386"
                    }
                ]}
            ]},
            {"SecTitle":"水","Unit":"万T","CategoryData":[
                {"CategoryName":"需","Data":[
                    {
                        "Key": "1月",
                        "Value": "20"
                    },
                    {
                        "Key": "2月",
                        "Value": "120"
                    },
                    {
                        "Key": "3月",
                        "Value": "250"
                    },
                    {
                        "Key": "4月",
                        "Value": "310"
                    },
                    {
                        "Key": "5月",
                        "Value": "440"
                    },
                    {
                        "Key": "6月",
                        "Value": "320"
                    },
                    {
                        "Key": "7月",
                        "Value": "420"
                    },
                    {
                        "Key": "8月",
                        "Value": "450"
                    },
                    {
                        "Key": "9月",
                        "Value": "388"
                    },
                    {
                        "Key": "10月",
                        "Value": "490"
                    },
                    {
                        "Key": "11月",
                        "Value": "471"
                    },
                    {
                        "Key": "12月",
                        "Value": "356"
                    }
                ]},
                {"CategoryName":"供","Data":[
                    {
                        "Key": "1月",
                        "Value": "80"
                    },
                    {
                        "Key": "2月",
                        "Value": "190"
                    },
                    {
                        "Key": "3月",
                        "Value": "270"
                    },
                    {
                        "Key": "4月",
                        "Value": "380"
                    },
                    {
                        "Key": "5月",
                        "Value": "500"
                    },
                    {
                        "Key": "6月",
                        "Value": "390"
                    },
                    {
                        "Key": "7月",
                        "Value": "490"
                    },
                    {
                        "Key": "8月",
                        "Value": "530"
                    },
                    {
                        "Key": "9月",
                        "Value": "438"
                    },
                    {
                        "Key": "10月",
                        "Value": "560"
                    },
                    {
                        "Key": "11月",
                        "Value": "521"
                    },
                    {
                        "Key": "12月",
                        "Value": "386"
                    }
                ]}
            ]},
        ]},
    ]
}
var showRealData = ZSB["能源客户视角"]["年供需对比曲线"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/zfsj.asmx/GetQuYuNDGXDB",
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
    
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});


var ColorCard = mainGroup["ngxdb"];
var ColorGra = true;
function MakeColor(){
    if(ColorCard){  
        for(Color_Index = 0; Color_Index<Object.keys(ColorCard).length;Color_Index++)
        {
            var ColorTemp = ColorCard[Object.keys(ColorCard)[Color_Index]];
            if(ColorTemp.length==2)
            {
                var CurrentColor = (new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    { offset: 0, color: ColorTemp[0] },
                    { offset: 1, color: ColorTemp[1] }, 
                ]))
            }
            else if(ColorTemp.length==3)
            {
                CurrentColor = ColorTemp
            }
            else{
                CurrentColor = ColorTemp;
            }
            ColorList.push(CurrentColor)
        }
    }
    else if(ColorGra){
        ColorList.push((new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            { offset: 0, color: mainGraStart },
            { offset: 1, color: mainGraEnd}, 
        ])))
    }
    else{
        ColorList.push(mainColor)
    }
  
}
function Flush(){
  
    
    var currentErjiTab = null;
    var twoLevelTitle = null;
    FirTitle.length = 0;
    $('.nav').empty()

    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({ "background-color": mainColor });
    for (var index = 0; index<EChart_Data["ChartData"].length;index++){
        const href = "title"+index;
        FirTitle.push(EChart_Data["ChartData"][index]["FirTitle"]);
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + FirTitle[index] + "</a></li>");
    }
    $('.nav a').click(function() {
        $(".nav a").css({ "color": textColor })
        var FirstLevel;
        for (var i = 0; i < FirTitle.length; i++) {
            if (EChart_Data["ChartData"][i]['FirTitle'] === $(this).text()) {
                FirstLevel = $(this).text();
                $('#subtitle').empty();
                for (let j = 0; j < EChart_Data["ChartData"][i]["TableData"].length; j++) {
                    var temp = EChart_Data["ChartData"][i]["TableData"][j]["SecTitle"];
                    $('#subtitle').append("<span class='erji_title'><a href='#' >" + temp + "</a></span>");
                    let id = document.getElementById("subtitle")
                    let tempA = id.getElementsByTagName("a");
                    tempA[j].style.backgroundImage = 'url("../../../Image/zfsj/' + temp + '.png")';
                    twoLevelTitle = tempA;
                }
                break
            }
        }

        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + 'focus.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../../Image/zfsj/' + currentErjiTab.text + '.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + 'focus.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + '.png")';
                }
            }
        });

        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            color_list.length = 0;
            new_color_list.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }
        

            //数据解析
            const leibie_name = []; // 用于存放类别名
            for (var FirCon_Index = 0; FirCon_Index < EChart_Data["ChartData"].length; FirCon_Index++) {
                   var FirCon = EChart_Data["ChartData"][FirCon_Index]['TableData']
                   if (EChart_Data["ChartData"][FirCon_Index]['FirTitle'] ===  FirstLevel) {
                       for (var Secon_Index = 0; Secon_Index < FirCon.length; Secon_Index++) {
                           var Secon = FirCon[Secon_Index]['CategoryData']
                           if (FirCon[Secon_Index]['SecTitle'] === $(this).text()) {
                                unit =FirCon[Secon_Index]["Unit"];
                                for (var ThrCon_Index = 0; ThrCon_Index < Secon.length; ThrCon_Index++) {
                                   var ThrCon = Secon[ThrCon_Index]["Data"]
                                   leibie_name.push(Secon[ThrCon_Index]['CategoryName']);
                                   const res = []; 
                                   shadow_datas.length = 0;
                                   dataShadow.length = 0;
                                   yMax = 0;
                                   for (var Category_Index= 0; Category_Index < ThrCon.length; Category_Index++) {
                                       var number = Number(ThrCon[Category_Index]["Value"])
                                       if(yMax<number){
                                           yMax=number
                                       }   
                                   }
                                   yMax = GetMaxNuber(yMax);
                                   x_label.length = 0;
                                   for (var Category_Index = 0; Category_Index < ThrCon.length; Category_Index++) {
                                       res.push(ThrCon[Category_Index]["Value"])
                                       x_label.push(ThrCon[Category_Index]["Key"])
                                       dataShadow.push(yMax)
                                   }
                                   y_data.push(res);
                                   shadow_datas.push(dataShadow) 
                               }
                           }
                       }
                   }
            }
            if (leibie_name.length > 1) {
                   new_liebie = leibie_name;
            } 
            else {
                   new_liebie = [];
            }
            MakeColor();
            for (var i = 0; i < y_data.length; i++) {
                series.push(
                    {
                    name: new_liebie[i],
                    margin: 50,
                    itemStyle: {
                        normal: {
                             barBorderRadius: [0, 0, 0, 0],
                                    color: ColorList[i][2],
                            lineStyle: {
                                width: 0 //设置曲线宽度
                            }
                        },

                    },
                    type: 'line',
                    lineStyle: {
                        normal: { color: ColorList[i][2], width: 4 }

                    },
                    smooth: true,

                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: ColorList[i][1] // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: ColorList[i][0] // 100% 处的颜色
                                    }
                                ],
                                global: false 
                            }
                        },
                    },
                    //barWidth: "12px",
                    label: label,
                    data: y_data[i],
                    // color: ColorList[i][2]
                })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
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
                legend: {
                    icon: 'bar',
                    right: '10%',
                    top: '3%',
                    itemGap: 200,
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 5,

                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                xAxis: [{
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
                        lineStyle: {
                            width: 5,
                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 0,
                        color: globalFontColor,
                        fontSize: globalFontSize,
                        margin: 20
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    name: unit,
                    nameLocation: 'end',
                    nameGap: 40,
                    nameTextStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    },
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    axisLabel: {
                        color: globalFontColor,
                        fontSize: globalFontSize
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 4,
                            type: 'dashed'
                        }
                    },
                }],
                series: series,
                animationDuration: 0
            };
          
            myChart.setOption(option);
            $('#btn').click(function() {
             
                curInt = 1;
                myChart.setOption(option)
            });
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
        url: "http://localhost:2277/展示版/zfsj.asmx/"+jsonData['FunctionName'],
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