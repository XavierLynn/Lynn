var showRealData = false;
$(function() {
    // ajax 请求数据
    // $.ajax({
    //     //请求方式
    //     type : "POST",
    //     //请求的媒体类型
    //     contentType: "application/json;charset=UTF-8",
    //     //请求地址
    //     url : "http://xxxx/xxx/xxx/",
    //     //数据，json字符串
    //     data : JSON.stringify(list),
    //     //请求成功
    //     success : function(result) {
    //         //result 为返回结果 即后面的table_data
    //         console.log(result);
    //     },
    //     //请求失败，包含具体的错误信息
    //     error : function(e){
    //         console.log(e.status);
    //         console.log(e.responseText);
    //     }
    // });
    //使用模拟数据
    var table_data = [{
            "value": 40,
            "name": "1",
            "path": "1"
        },
        {
            "value": 180,
            "name": "2",
            "path": "2",
            "children": [{
                    "value": 76,
                    "name": "2-1",
                    "path": "2/2-1",
                    "children": [{
                            "value": 12,
                            "name": "2-1-1",
                            "path": "2/2-1/2-1-1"
                        },
                        {
                            "value": 78,
                            "name": "2-1-2",
                            "path": "2/2-1/2-1-2"
                        },
                        {
                            "value": 20,
                            "name": "2-1-3",
                            "path": "2/2-1/2-1-3"
                        },
                        {
                            "value": 16,
                            "name": "2-1-4",
                            "path": "2/2-1/2-1-4"
                        }
                    ]
                },
                {
                    "value": 16,
                    "name": "2-2",
                    "path": "2/2-2",
                    "children": [{
                            "value": 12,
                            "name": "2-2-1",
                            "path": "2/2-2/2-2-1"
                        },
                        {
                            "value": 28,
                            "name": "2-2-2",
                            "path": "2/2-2/2-2-2"
                        },
                        {
                            "value": 20,
                            "name": "2-2-3",
                            "path": "2/2-2/2-2-3"
                        },
                        {
                            "value": 16,
                            "name": "2-2-4",
                            "path": "2/2-2/2-2-4"
                        }
                    ]
                },
            ]
        },
        {
            "value": 180,
            "name": "3",
            "path": "3",
            "children": [{
                    "value": 26,
                    "name": "3-1",
                    "path": "3/2-1",
                    "children": [{
                            "value": 12,
                            "name": "3-1-1",
                            "path": "3/2-1/2-1-1"
                        },
                        {
                            "value": 28,
                            "name": "3-1-2",
                            "path": "3/2-1/2-1-2"
                        },
                        {
                            "value": 60,
                            "name": "3-1-3",
                            "path": "3/2-1/2-1-3"
                        },
                        {
                            "value": 16,
                            "name": "3-1-4",
                            "path": "3/2-1/2-1-4"
                        }
                    ]
                },
                {
                    "value": 96,
                    "name": "3-2",
                    "path": "3/2-2",
                    "children": [{
                            "value": 12,
                            "name": "3-2-1",
                            "path": "3/2-2/2-2-1"
                        },
                        {
                            "value": 28,
                            "name": "3-2-2",
                            "path": "3/2-2/2-2-2"
                        },
                        {
                            "value": 20,
                            "name": "3-2-3",
                            "path": "3/2-2/2-2-3"
                        },
                        {
                            "value": 16,
                            "name": "3-2-4",
                            "path": "3/2-2/2-2-4"
                        }
                    ]
                },
            ]
        },

    ];


    function colorMappingChange(value) {
        var levelOption = getLevelOption(value);
        chart.setOption({
            series: [{
                levels: levelOption
            }]
        });
    }

    var formatUtil = echarts.format;

    function getLevelOption() {
        return [{
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        gapWidth: 10
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        gapWidth: 5
                    }
                }
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    normal: {
                        gapWidth: 15,
                        borderColorSaturation: 0
                    }
                }
            }
        ];
    }

    const myChart = echarts.init(document.getElementById('show_charts'));
    myChart.setOption(option = {

        title: {
            text: 'Disk Usage',
            left: 'center'
        },

        tooltip: {
            formatter: function(info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];

                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }

                return [
                    '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                    'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
                ].join('');
            }
        },
        color: ['#5393DA', '#61AEFF', '#8DC3FF', '#0B4EFF', '#90C3E0', '#727BE8', '#85F8FF', '#50B2FF'],
        series: [{
            name: 'Disk Usage',
            type: 'treemap',
            visibleMin: 300,
            leafDepth: 1,
            label: {
                show: true,
                formatter: '{b}'
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff0'
                }
            },
            levels: getLevelOption(),
            data: table_data
        }]
    });
});