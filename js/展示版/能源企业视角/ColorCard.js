var configure_json_val= 
{
 "mainColor" : "rgb(96,199,255)",
 "mainGraStart" : "rgba(96,199,255,0.3)",
 "mainGraEnd" : "rgba(96,199,255,1)",
 "mainUnder" : "rgba(255,255,255,0.25)",
 "mainHoverStart" : "rgba(124,187,255,0.74)",
 "mainHoverEnd" : "rgba(124,187,255,0.31)" ,
 "textColor" : "rgb(255,255,255)",
 "areaColor" : {
    "one": "rgba(96,199,255,0.4)",
    "two": "rgba(96,199,255,0)"
},
 "mainGroup" : {
    "khhyfx": {
        "one": "rgba(96,199,255,0.7)",
        "two": "rgba(255,255,255,1)"
    },
    "xlfzldb": {
        "one": "rgb(96,199,255)",
        "two": "rgba(133,222,255,1)",
        "three": "rgba(255,255,0,1)"
    }
}
}

var ajaxSuccess = false;
var configure_json = $.ajax({ url: "./../../../js/展示版/能源企业视角/ColorCard.json", async: false,success:function (data){ajaxSuccess = true}}).responseText;
if(ajaxSuccess == true){
    configure_json_val = $.parseJSON(configure_json);
}

var mainColor = configure_json_val["mainColor"]
var mainGraStart = configure_json_val["mainGraStart"]
var mainGraEnd = configure_json_val["mainGraEnd"]
var mainUnder = configure_json_val["mainUnder"]
var mainHoverStart = configure_json_val["mainHoverStart"]
var mainHoverEnd = configure_json_val["mainHoverEnd"]
var textColor = configure_json_val["textColor"]
var areaColor = configure_json_val["areaColor"]
var mainGroup = configure_json_val["mainGroup"]