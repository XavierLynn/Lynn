"object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {}, ue.interface.broadcast = function(e, t) {
    if ("string" == typeof e) {
        var o = [e, ""];
        void 0 !== t && (o[1] = t);
        var n = encodeURIComponent(JSON.stringify(o));
        "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "", "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location.hash = n, document.location.hash = encodeURIComponent("[]"))
    }
}) : function(e) { ue.interface = {}, ue.interface.broadcast = function(t, o) { "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, "")) } }(ue.interface), (ue4 = ue.interface.broadcast);

var table_data = {
    "data":[
        {
            "title": "标签云",
            "normalLabel":[
                '房地产',
                '双电源',
                '近一周内登录',
                '100~1000㎡以内',
                '张江南区',
                '节能潜力高',
                '朝阳产业',
                '合资企业',
                '积极参与削峰填谷',
                '关注节能产品',
                '用电剧增',
                '近期扩容',
                '入驻3年',
                '用水剧减'
            ],
            "heightTag":['近期扩容', '用水剧减', '用电剧增']
        }
    ]
};

var showRealData = ZSB["能源企业视角"]["标签云"];
$(function() {
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/GetQYBQ",
        type: "POST",
        async: true,
        data: "inEnteKey=94BFAE5209AA44A1969C3AFA13870517",
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
    Flush();
    
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

function Flush(){
    
    var heightTag = table_data['data'][0]['heightTag'];
    var normalLabel = table_data['data'][0]['normalLabel'];

    var entries=[];
    for(var i=0;i<normalLabel.length;i++)
    {
        var entry={label:normalLabel[i],url:'#',target:'_top'};
        entries.push(entry);
    }

    var settings = {
        entries: entries,
        width: 1600,
        height: 750,
        radius: '80%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#494A5F00',
        opacityOver: 1.00,
        opacityOut: 0.5,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.4,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '55',
        fontColor: '#fff',
        fontWeight: 'bold', //bold
        fontStyle: 'normal', //italic 
        fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true

    };

    $('#tag-cloud').remove();
    $('.zzsc-container').append("<div id='tag-cloud'></div>");
    //Cloud
    $('#tag-cloud').svg3DTagCloud(settings);
    $("rect").remove();
    //高亮标签
    for (let index = 0; index < heightTag.length; index++)
        $("text:contains(" + heightTag[index] + ")").css("fill", "red");

    $('a text').click(function() {
        ue4("TagClick", $(this).text());
    })

    $('#btn').click(function() {
        settings.speed = 0.8;
        $('#tag-cloud').remove();
        $('.zzsc-container').append("<div id='tag-cloud'></div>");
        $('#tag-cloud').svg3DTagCloud(settings);
        $("rect").remove();
    });
    //延迟刷新
    $("#tag").css({ "background-color": mainColor })
    $("#yijititle").css({ "color": textColor })
    setTimeout(function() { $('body').css('background-color', 'rgba(0,0,0,0.01)') }, 500);
}

ue.interface.Play = function(speed) {
    settings.speed = speed;
    $('#tag-cloud').remove();
    $('.zzsc-container').append("<div id='tag-cloud'></div>");
    $('#tag-cloud').svg3DTagCloud(settings);
    $("rect").remove();
    //高亮标签
    for (let index = 0; index < heightTag.length; index++)
        $("text:contains(" + heightTag[index] + ")").css("fill", "red");
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/"+jsonData['FunctionName'],
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

ue.interface.Pause = function() {
    settings.speed = 0.0;
    $('#tag-cloud').remove();
    $('.zzsc-container').append("<div id='tag-cloud'></div>");
    $('#tag-cloud').svg3DTagCloud(settings);
    $("rect").remove();
    //高亮标签
    for (let index = 0; index < heightTag.length; index++)
        $("text:contains(" + heightTag[index] + ")").css("fill", "red");
};
