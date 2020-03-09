//播放动画
ue.interface.SetFont = function(json) {
    $("body").css('color', json['Color']);
    $("body").css('text-shadow', '0 0 0.2em ' + json['ShadowColor'] + '');
    $("text").text(json['Text']);
};
// function setdd(json) {
//     // Text  color  ShadowColor
//     $("body").css('color', json['Color']);
//     $("body").css('text-shadow', '0 0 0.2em ' + json['ShadowColor'] + '');
//     $("text").text(json['Text']);
// };


// //使其高亮
// $('#btn').click(function() {
//     var json = {
//         "Color": "rgba(255,0,0,1)",
//         "Text": "agfdsg",
//         "ShadowColor": "rgba(0,255,0,1)",
//     };
//     setdd(json);
// });
var showRealData = false;
$(function() {});