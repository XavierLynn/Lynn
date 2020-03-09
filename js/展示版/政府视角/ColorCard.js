
var configure_json_val= {
    "mainColor": "rgb(96,199,255)",
    "mainGraStart": "rgba(96,199,255,0.3)",
    "mainGraApl": "rgba(96,199,255,0.7)",
    "mainGraEnd": "rgba(96,199,255,1)",
    "mainUnder": "rgba(255,255,255,0.25)",
    "mainHoverStart": "rgba(124,187,255,0.74)",
    "mainHoverEnd": "rgba(124,187,255,0.31)",
    "textColor": "rgb(255,255,255)",
    "mainGroup": {
        "ngxdb": {
            "one": [
                "rgba(96,199,255,0.4)",
                "rgba(96,199,255,0)",
                "rgba(96,199,255,1)"
            ],
            "two": [
                "rgba(60,195,239,0.4)",
                "rgba(60,195,239,0)",
                "rgba(60,195,239,1)"
            ]
        },
        "qynyxfbl": {
            "one": "#83C6E1",
            "two": "#005C99",
            "three": "#52B5DF",
            "four": "#0072C5",
            "five": "#93C6E1",
            "six": "#003D6A",
            "seven": "#61AFDD",
            "eight": "#005BBE"
        },
        "table": {
            "header": "rgba(96,199,255,1)",
            "body": "rgba(96,199,255,0.6)"
        },
        "ycynyy": {
            "one": "#61adff",
            "two": "#00d6e3",
            "three": "#ff8040",
            "four": "#f9f900"
        },
        "tztb": {
            "one": "#ffffff",
            "two": "rgb(96,199,255)"
        }
    }
}


var ajaxSuccess = false;
var configure_json = $.ajax({ url: "./../../../js/展示版/政府视角/ColorCard.json", async: false,success:function (data){ajaxSuccess = true}}).responseText;
if(ajaxSuccess == true){
    configure_json_val = $.parseJSON(configure_json);
}
var mainColor = configure_json_val["mainColor"]
var mainGraStart = configure_json_val["mainGraStart"]
var mainGraEnd = configure_json_val["mainGraEnd"]
var mainGraApl = configure_json_val["mainGraApl"]
var mainUnder = configure_json_val["mainUnder"]
var mainHoverStart = configure_json_val["mainHoverStart"]
var mainHoverEnd = configure_json_val["mainHoverEnd"]
var textColor = configure_json_val["textColor"]
var mainGroup  = configure_json_val["mainGroup"]
