var configure_json_val= 
{
 "mainColor" : "rgb(96,199,255)",
 "mainGraStart" : "rgba(96,199,255,0.3)",
 "mainGraApl":"rgba(96,199,255,0.7)",
 "mainGraEnd" : "rgba(96,199,255,1)",
 "mainUnder" : "rgba(255,255,255,0.25)",
 "mainHoverStart" : "rgba(124,187,255,0.74)",
 "mainHoverEnd" : "rgba(124,187,255,0.31)" ,
 "textColor" : "rgb(255,255,255)",
 "mainGroup" : {
    "ngxdb": {
        "one": ["rgba(96,199,255,0)", "rgba(96,199,255,0.4)", "rgba(96,199,255,1)"],
        "two": ["rgba(76,162,255,0)", "rgba(76,162,255,0.4)", "rgba(76,162,255,1)"]
    },
    "ydjjxzbthdb": {
        "one": "rgba(124,187,255,0.3)",
        "two": "rgb(96,199,255)",
        "yText": "#2A3545",
        "yBG": "rgba(255,255,255,0.79)",
        "yBorderC": "rgb(96,199,255)"
    },
    "pjzblyl": {
        "one": ["rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
        "two": ["rgba(124,187,255,0.3)", "rgba(124,187,255,1)"]
    },
    "fgpdlzbyfgb": {
        "one": ["rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
        "two": ["rgba(124,187,255,0.3)", "rgba(124,187,255,1)"],
        "three": ["rgba(76,162,255,0.3)", "rgba(76,162,255,1)"],
        "four": "#6ccfef",
        "five": "#ffffff"
    },
    "qndlgcdlfg": {
        "one": "#73e7ee",
        "two": "rgb(255,213,176)",
        "three": "rgb(145,255,85)"
    },
    "gylljcdf": {
        "one": ["rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
        "two": ["rgba(124,187,255,0.3)", "rgba(124,187,255,1)"],
        "three": ["rgba(76,162,255,0.3)", "rgba(76,162,255,1)"],
        "four": "#6ccfef",
        "five": "#ffffff"
    },
    "glcnx": {
        "one": ["rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
        "two": "#6ccfef",
        "three": "#ffffff"
    },
    "glcnh": {
        "one": ["rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
        "two": "#6ccfef"
    },
    "qndlgcly": {
        "one": "#73e7ee",
        "two": "rgb(255,213,176)",
        "three": "rgb(145,255,85)",
        "four": "rgb(209,246,255)"
    },
    "tgwdbh": {
        "one": ["rgba(96,199,255,0.3)", "rgba(96,199,255,1)"],
        "two": ["rgba(124,187,255,0.3)", "rgba(124,187,255,1)"],
        "three": ["rgba(76,162,255,0.3)", "rgba(76,162,255,1)"]
    },
    "glcgn": {
        "bg": "rgba(96,199,255,0.3)"
    },
    "jxg": {
        "redValueCel": "rgba(255, 0, 0, 1)",
        "keyCell": "rgba(255, 255, 255, 1)"
    }
}

}
var ajaxSuccess = false;
var configure_json = $.ajax({ url: "./../../../js/展示版/能源客户视角/ColorCard.json", async: false,success:function (data){ajaxSuccess = true}}).responseText;
if(ajaxSuccess == true){
    configure_json_val = $.parseJSON(configure_json);
}

var mainColor = configure_json_val["mainColor"]
var mainGraStart = configure_json_val["mainGraStart"]
var mainGraApl = configure_json_val["mainGraApl"]
var mainGraEnd = configure_json_val["mainGraEnd"]
var mainUnder = configure_json_val["mainUnder"]
var mainHoverStart = configure_json_val["mainHoverStart"]
var mainHoverEnd = configure_json_val["mainHoverEnd"]
var textColor = configure_json_val["textColor"]
var mainGroup = configure_json_val["mainGroup"]