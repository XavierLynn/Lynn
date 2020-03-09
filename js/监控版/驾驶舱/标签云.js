"object" != typeof ue || "object" != typeof ue.interface ? ("object" != typeof ue && (ue = {}), ue.interface = {}, ue.interface.broadcast = function(e, t) {
    if ("string" == typeof e) {
        var o = [e, ""];
        void 0 !== t && (o[1] = t);
        var n = encodeURIComponent(JSON.stringify(o));
        "object" == typeof history && "function" == typeof history.pushState ? (history.pushState({}, "", "#" + n), history.pushState({}, "", "#" + encodeURIComponent("[]"))) : (document.location.hash = n, document.location.hash = encodeURIComponent("[]"))
    }
}) : function(e) { ue.interface = {}, ue.interface.broadcast = function(t, o) { "string" == typeof t && (void 0 !== o ? e.broadcast(t, JSON.stringify(o)) : e.broadcast(t, "")) } }(ue.interface), (ue4 = ue.interface.broadcast);
var heightTag = []
var entries = [
    { label: '房地产', url: '#', target: '_top' },
    { label: '双电源', url: '#', target: '_top', color: '#ff0000' },
    { label: '近一周内登录', url: '#', target: '_top' },
    { label: '100~1000㎡以内', url: '#', target: '_top' },
    { label: '张江南区', url: '#', target: '_top' },
    { label: '节能潜力高', url: '#', target: '_top' },
    { label: '朝阳产业', url: '#', target: '_top' },
    { label: '合资企业', url: '#', target: '_top' },
    { label: '积极参与削峰填谷', url: '#', target: '_top' },
    { label: '关注节能产品', url: '#', target: '_top' },
    { label: '用电剧增', url: '#', target: '_top' },
    { label: '近期扩容', url: '#', target: '_top' },
    { label: '入驻3年', url: '#', target: '_top' },
    { label: '用水剧减', url: '#', target: '_top' }
];

var settings = {
    entries: entries,
    width: 2000,
    height: 450,
    radius: '100%',
    radiusMin: 10,
    bgDraw: true,
    bgColor: '#494A5F00',
    opacityOver: 0.5,
    opacityOut: 0.5,
    opacitySpeed: 6,
    fov: 200,
    speed: 0,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '50',
    fontColor: '#fff',
    fontWeight: 'bold', //bold
    fontStyle: 'normal', //italic 
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true

};


ue.interface.Play = function(speed) {
   Play(speed);
};
function Play(speed) {
    settings.speed = speed;
    $('#tag-cloud').remove();
    $('.zzsc-container').append("<div id='tag-cloud'></div>");
    $('#tag-cloud').svg3DTagCloud(settings);
    $("rect").remove();
    //高亮标签
    for (let index = 0; index < heightTag.length; index++)
        $("text:contains(" + heightTag[index] + ")").css("fill", "red");
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

$(document).ready(function() {

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
    });  //延迟刷新
        
    setTimeout(function()  { Play(0.4);  }, 1000);
});