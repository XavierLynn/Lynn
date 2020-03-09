
$(function () {
    $(".navDiv_title_Btn").click(function () {
        var parent = $(".navDiv_title_Btn").parent();
        parent.find(".navDiv_title_Btn").removeClass('navDiv_title_Btn_Select')
        $(this).addClass('navDiv_title_Btn_Select')

        $("#navDiv_titleTwo").empty();
        let tabvar = "";
        switch ($(this).text()) {
            case "大屏首页":
                break;
            case "能源监控":
                break;
            case "能源管理":
            case "能源应用":
                $("#contentDiv").load("http://127.0.0.1:8080/EChartSimple/html/控制版/" + $(this).text() + ".html");
                break;
            case "能源分析":
                tabvar += "<button class='navDiv_titleTwo_Btn'>区域分析</button>";
                tabvar += "<button class='navDiv_titleTwo_Btn'>客户特征分析</button>";
                tabvar += "<button class='navDiv_titleTwo_Btn'>异常用能分析</button>";
                break;
            case "能源服务":
                tabvar += "<button class='navDiv_titleTwo_Btn'>服务概况</button>";
                tabvar += "<button class='navDiv_titleTwo_Btn'>服务详情</button>";
                break;
            case "能源交易":
                tabvar += "<button class='navDiv_titleTwo_Btn'>交易总览</button>";
                tabvar += "<button class='navDiv_titleTwo_Btn'>交易详情</button>";
                break;
        }
        $("#navDiv_titleTwo").append(tabvar);
    
        $(".navDiv_titleTwo_Btn").click(function () {
            var parent = $(".navDiv_titleTwo_Btn").parent();
            parent.find(".navDiv_titleTwo_Btn").removeClass('navDiv_titleTwo_Btn_Select')
            $(this).addClass('navDiv_titleTwo_Btn_Select')
            if($(this).text() == "区域分析"||$(this).text() == "交易总览"||$(this).text() == "服务概况"){
                return;
            }
            $("#contentDiv").load("http://127.0.0.1:8080/EChartSimple/html/控制版/" + $(this).text() + ".html");
        });
    });

    (function () {
        [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
            new SelectFx(el);
        });
        $('.cs-options ul li').click(function () { });
        $('.cs-options ul li').click(function () {
            var temp = $(this).parent().parent().next().attr("id");
            switch (temp) {
                case "cmb1":
                    let tabvar = "";
                    switch ($(this).text()) {
                        case "浦东新区":
                            $(".column5").empty();
                            tabvar += "<select id='cmb2' class='cs-select cs-skin-underline'>";
                            tabvar += "<option value='' disabled>请选择分区</option>";
                            tabvar += "<option value='1' selected>张江科学城</option>";
                            tabvar += "<option value='2'>临港区</option>";
                            tabvar += "<option value='3'>其他</option>";
                            tabvar += "</select>";
                            $(".column5").append(tabvar);
                            break;
                        default:
                            $(".column5").empty();
                            tabvar += "<select id='cmb2' class='cs-select cs-skin-underline'>";
                            tabvar += "<option value='' disabled>请选择分区</option>";
                            tabvar += "<option value='1' selected>其他</option>";
                            tabvar += "</select>";
                            $(".column5").append(tabvar);
                            break;
                    }
                    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
                        if (el.id.toString() == "cmb2")
                            new SelectFx(el);
                    });
                    break;
                default:
                    break;
            }

        })
    })();
})