globalFontSize = 40;


var showRealData = JKB["能源交易"]["交易总览"]["客户行业分布占比"]

var table_data = {
    "data": [{
        "title": "客户行业分布占比",
        "table": [{
            "title": "总",
            "unit": "tce",
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                    "xLabel": "信息传输 软件和信息技术服务业",
                    "yLabel": 10
                },

                {
                    "xLabel": "金融业",
                    "yLabel": 20
                },
                {
                    "xLabel": "住宿和餐饮业",
                    "yLabel": 20
                },
                {
                    "xLabel": "交通运输仓储和邮政业",
                    "yLabel": 25
                },
                {
                    "xLabel": "批发和零售业",
                    "yLabel": 30
                },
                {
                    "xLabel": "建筑业",
                    "yLabel": 23
                },
                {
                    "xLabel": "电力 热力 燃气及水生产和供应业",
                    "yLabel": 24
                },
                {
                    "xLabel": "制造业",
                    "yLabel": 32
                },
                {
                    "xLabel": "文化 体育和娱乐业",
                    "yLabel": 26
                },
                {
                    "xLabel": "房地产业",
                    "yLabel": 28
                },
                {
                    "xLabel": "租赁和商务服务业",
                    "yLabel": 27
                },
                {
                    "xLabel": "科学研究和技术服务业",
                    "yLabel": 25
                },
                {
                    "xLabel": "水利环境和公共设施管理业",
                    "yLabel": 26
                },
                {
                    "xLabel": "卫生和社会工作",
                    "yLabel": 26
                },
                {
                    "xLabel": "居民服务 修理和其他服务业",
                    "yLabel": 28
                },
                {
                    "xLabel": "农林牧渔业",
                    "yLabel": 26
                },
                {
                    "xLabel": "教育",
                    "yLabel": 25
                },
                {
                    "xLabel": "公共管理 社会保障和社会组织",
                    "yLabel": 21
                }

                ]
            },]
        }]
    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJY.asmx/GetRegionFQXFPM",
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

    const inner_data = [{ type: "Light", value: "70" }, { type: "Black", value: "30" }];
    const outer_data = [{ type: "Light", value: "70" }, { type: "Black", value: "30" }];
      // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
  var sliceNumber = 0.005;

  // 自定义 other 的图形，增加两条线
  G2.Shape.registerShape('interval', 'sliceShape', {
    draw: function draw(cfg, container) {
      var points = cfg.points;
      var path = [];
      path.push(['M', points[0].x, points[0].y]);
      path.push(['L', points[1].x, points[1].y - sliceNumber]);
      path.push(['L', points[2].x, points[2].y - sliceNumber]);
      path.push(['L', points[3].x, points[3].y]);
      path.push('Z');
      path = this.parsePath(path);
      return container.addShape('path', {
        attrs: {
          fill: cfg.color,
          path: path
        }
      });
    }
  });


    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'>◀</li>");
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }

    $('.nav a').click(function () {
        var yiji;
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a href='#' style='background-image: url(../../../Image/zfsj/" + table_data['data'][i]['table'][j]['title'] + ".png);'>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
                }
                break
            }
        }

        $('.erji_title').click(function () {
            //每次点击初始化上一次加载的数据
            data=[];
            y_data=[];
            color_list = [];
            var unit;

            const leibie_name = [];

            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }

            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['gradient_color']);

                                y_data.push(table_data['data'][i]['table'][j]['data'][k]['categoryData']);
                                color_list.push(color_res);
                            }
                        }
                    }
                }
            }

            if (leibie_name.length > 1) {
                new_liebie = leibie_name;
            } else {
                new_liebie = [];
            }

            var dataCategory = table_data['data'][0]['table'][0]['data'][0]['categoryData']
            var pieChartData = [];
            for (var i = 0; i < dataCategory.length; i++) {
                var legendName = { value: dataCategory[i]['yLabel'], name: dataCategory[i]['xLabel'] }
                pieChartData.push(legendName)
            }
            $('#show_charts').empty();

            var chart = new G2.Chart({
                container: 'show_charts',
                pixelRatio:2,
                forceFit: true,
                width: 2000,
                height: 1400,
                });
            

            for (var i = 0; i < y_data.length; i++) {
                //数据
                var ds = new DataSet();
                var dv = ds.createView().source(y_data[i]);
                dv.transform({
                    type: 'percent',
                    field: 'yLabel',
                    dimension: 'xLabel',
                    as: 'percent'
                });
                startAngle=0;
                var dataView = chart.view();
                dataView.source(dv);
                dataView.coord('theta', {
                    innerRadius: 0.7,
                    radius: 0.75,
                    startAngle:startAngle,
                    endAngle: startAngle + Math.PI * 2
                });
                chart.legend(false);

                var count=0;

                for(var k=0;k<y_data[i].length;k++)
                {
                    count+=y_data[i][k]['yLabel'];
                }
                dataView.guide().html({
                    position: ['50%', '50%'],
                    html: '<div class="g2-guide-html"><p class="value" style="font-size:200px;color:rgba(255, 255, 255, 1);font-Family:庞门正道标题体;text-align:center; padding-right: 100px;">'+count+'</p></div>'
                  });
                dataView.intervalStack().position('yLabel').color('xLabel', ['#61adff']).opacity(1).shape('sliceShape').tooltip(false).label('percent', {
                    offset: -20,
                    textStyle: {
                        fill: 'white',
                        fontSize: 30,
                        fontFamily:'庞门正道标题体',
                        shadowBlur: 2,
                        shadowColor: 'rgba(97, 173, 255, .45)'
                    },
                    formatter: function formatter(val) {
                        return parseInt(val * 10000)/100 + '%';
                    }
                });
                //render
                
                chart.render();

                //draw label
                var OFFSET = 20;
                var APPEND_OFFSET = 50;
                var LINEHEIGHT = 60;
                var coord = dataView.get('coord'); // 获取坐标系对象
                var center = coord.center; // 极坐标圆心坐标
                var r = coord.radius; // 极坐标半径

                var canvas = chart.get('canvas');
                var canvasWidth = chart.get('width');
                var canvasHeight = chart.get('height');
                var labelGroup = canvas.addGroup();
                var labels = [];
                addPieLabel();
                canvas.draw();

                chart.on('afterpaint', function () {
                   addPieLabel();
                });

                function addPieLabel() {
                    var halves = [[], []];
                    var data = dv.rows;
                    var angle = startAngle;
            
                    for (var i = 0; i < data.length; i++) {
                        var percent = data[i].percent;
                        var targetAngle = angle + Math.PI * 2 * percent;
                        var middleAngle = angle + (targetAngle - angle) / 2;
                        angle = targetAngle;
                        var edgePoint = getEndPoint(center, middleAngle, r);
                        var routerPoint = getEndPoint(center, middleAngle, r + OFFSET);
                        //label
                        var label = {
                            _anchor: edgePoint,
                            _router: routerPoint,
                            _data: data[i],
                            x: routerPoint.x,
                            y: routerPoint.y,
                            r: r + OFFSET,
                            fill: '#bfbfbf'
                        };
                        // 判断文本的方向
                        if (edgePoint.x < center.x) {
                            label._side = 'left';
                            halves[0].push(label);
                        } else {
                            label._side = 'right';
                            halves[1].push(label);
                        }
                    } // end of for
            
                    var maxCountForOneSide = parseInt(canvasHeight / LINEHEIGHT, 10);
                    halves.forEach(function (half, index) {
                        // step 2: reduce labels
                        if (half.length > maxCountForOneSide) {
                            half.sort(function (a, b) {
                                return b._percent - a._percent;
                            });
                            half.splice(maxCountForOneSide, half.length - maxCountForOneSide);
                        }
            
                        // step 3: distribute position (x and y)
                        half.sort(function (a, b) {
                            return a.y - b.y;
                        });
                        antiCollision(half, index);
                    });
                }
            
                function getEndPoint(center, angle, r) {
                    return {
                        x: center.x + r * Math.cos(angle),
                        y: center.y + r * Math.sin(angle)
                    };
                }
            
                function drawLabel(label) {
                    var _anchor = label._anchor,
                        _router = label._router,
                        fill = label.fill,
                        y = label.y;
            
                    var labelAttrs = {
                        y: y,
                        fontSize: 30, // 字体大小
                        fill: '#F0F0F0',
                        text: label._data.xLabel,
                        textBaseline: 'bottom'
                    };
                    var lastPoint = {
                        y: y
                    };
            
                    if (label._side === 'left') {
                        // 具体文本的位置
                        lastPoint.x = APPEND_OFFSET;
                        labelAttrs.x = APPEND_OFFSET; // 左侧文本左对齐并贴着画布最左侧边缘
                        labelAttrs.textAlign = 'left';
                    } else {
                        lastPoint.x = canvasWidth - APPEND_OFFSET;
                        labelAttrs.x = canvasWidth - APPEND_OFFSET; // 右侧文本右对齐并贴着画布最右侧边缘
                        labelAttrs.textAlign = 'right';
                    }
            
                    // 绘制文本
                    var text = labelGroup.addShape('Text', {
                        attrs: labelAttrs
                    });
                    labels.push(text);
                    // 绘制连接线
                    var points = void 0;
                    if (_router.y !== y) {
                        // 文本位置做过调整
                        points = [[_anchor.x, _anchor.y], [_router.x, y], [lastPoint.x, lastPoint.y]];
                    } else {
                        points = [[_anchor.x, _anchor.y], [_router.x, _router.y], [lastPoint.x, lastPoint.y]];
                    }
            
                    labelGroup.addShape('polyline', {
                        attrs: {
                            points: points,
                            lineWidth: 2,
                            stroke: '#61adff'
                        }
                    });
                }
            
                function antiCollision(half, isRight) {
                    var startY = center.y - r - OFFSET - LINEHEIGHT;
                    var overlapping = true;
                    var totalH = canvasHeight;
                    var i = void 0;
            
                    var maxY = 0;
                    var minY = Number.MIN_VALUE;
                    var boxes = half.map(function (label) {
                        var labelY = label.y;
                        if (labelY > maxY) {
                            maxY = labelY;
                        }
                        if (labelY < minY) {
                            minY = labelY;
                        }
                        return {
                            size: LINEHEIGHT,
                            targets: [labelY - startY]
                        };
                    });
                    if (maxY - startY > totalH) {
                        totalH = maxY - startY;
                    }
            
                    while (overlapping) {
                        boxes.forEach(function (box) {
                            var target = (Math.min.apply(minY, box.targets) + Math.max.apply(minY, box.targets)) / 2;
                            box.pos = Math.min(Math.max(minY, target - box.size / 2), totalH - box.size);
                        });
            
                        // detect overlapping and join boxes
                        overlapping = false;
                        i = boxes.length;
                        while (i--) {
                            if (i > 0) {
                                var previousBox = boxes[i - 1];
                                var box = boxes[i];
                                if (previousBox.pos + previousBox.size > box.pos) {
                                    // overlapping
                                    previousBox.size += box.size;
                                    previousBox.targets = previousBox.targets.concat(box.targets);
            
                                    // overflow, shift up
                                    if (previousBox.pos + previousBox.size > totalH) {
                                        previousBox.pos = totalH - previousBox.size;
                                    }
                                    boxes.splice(i, 1); // removing box
                                    overlapping = true;
                                }
                            }
                        }
                    }
            
                    // step 4: normalize y and adjust x
                    i = 0;
                    boxes.forEach(function (b) {
                        var posInCompositeBox = startY; // middle of the label
                        b.targets.forEach(function () {
                            half[i].y = b.pos + posInCompositeBox + LINEHEIGHT / 2;
                            posInCompositeBox += LINEHEIGHT;
                            i++;
                        });
                    });
            
                    // (x - cx)^2 + (y - cy)^2 = totalR^2
                    half.forEach(function (label) {
                        var rPow2 = label.r * label.r;
                        var dyPow2 = Math.pow(Math.abs(label.y - center.y), 2);
                        if (rPow2 < dyPow2) {
                            label.x = center.x;
                        } else {
                            var dx = Math.sqrt(rPow2 - dyPow2);
                            if (!isRight) {
                                // left
                                label.x = center.x - dx;
                            } else {
                                // right
                                label.x = center.x + dx;
                            }
                        }
                        drawLabel(label);
                    });
                }

            }
        })
        $('.erji_title a')[0].click();

    })
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
        url: "http://localhost:2277/监控版/NYJY.asmx/"+jsonData['FunctionName'],
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