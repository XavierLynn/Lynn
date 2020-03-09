var configure_json_val= 
{
   
    "mainColor" : "rgb(96,199,255)",
    "mainGraStart" : "rgba(96,199,255,0.3)",
    "mainGraEnd" : "rgba(96,199,255,1)",
    "mainGraApl": "rgba(96,199,255,0.7)",
    "mainUnder" : "rgba(255,255,255,0.25)",
    "mainHoverStart" : "rgba(124,187,255,0.74)",
    "mainHoverEnd" : "rgba(124,187,255,0.31)" ,
    "textColor" : "rgb(255,255,255)",
    "shadowColor" : "rgba(96,199,255,0.8)",
    "th1" : "0 0 0.2em rgb(65,141,255),-0 -0 0.2em rgb(65,141,255)",
    "mainGroup" : {
        "cylm": {
            "one": "rgba(96,199,255,0.6)",
            "two": "rgb(255,255,255)"
        },
        "glspcjqs": {
            "one": ["rgba(255,255,255,0)", "rgba(255,255,255,0.3)", "rgba(255,255,255,1)"],
            "two": ["rgba(96,199,255,0)", "rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
            "three": ["rgba(0,117,255,0)", "rgba(0,117,255,0.3)", "rgba(0,117,255,1)"]
        },
        "nxhb": {
            "one": "rgba(96,199,255,0.4)",
            "two": "rgba(96,199,255,0)"
        }

    }
}

var ajaxSuccess = false;
var configure_json = $.ajax({ url: "./../../../js/展示版/能源服务市场/ColorCard.json", async: false,success:function (data){ajaxSuccess = true}}).responseText;

if(ajaxSuccess){
    configure_json_val = $.parseJSON(configure_json);
}

var mainColor = configure_json_val["mainColor"]
var mainGraStart = configure_json_val["mainGraStart"]
var mainGraEnd =configure_json_val["mainGraEnd"]
var mainUnder = configure_json_val["mainUnder"]
var mainGraApl = configure_json_val["mainGraApl"]
var mainHoverStart = configure_json_val["mainHoverStart"]
var mainHoverEnd = configure_json_val["mainHoverEnd"]
var textColor = configure_json_val["textColor"]
var shadowColor = configure_json_val["shadowColor"]
var mainGroup = configure_json_val["mainGroup"]
var th1 = configure_json_val["th1"]