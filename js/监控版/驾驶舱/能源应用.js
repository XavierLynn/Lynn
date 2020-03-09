var showRealData = JKB["驾驶舱"]["能源应用"]

var table_data = {
    "data": [{
        "title": "能源应用",
        "table": {
            "入驻专家": "91",
            "成功案例": "97",
            "活动": "38",
            "合作金融商户": "368"
        }
    }]
};

$(function() {
   
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-08&endDate=2019-12",
        error: function() {
            Flush(); 
        },
        success: function(data) {
            if(showRealData){
                table_data = JSON.parse(data);
                
                Flush();
            }
            
        }
       
    }
    
    );
    
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

function Flush(){

    yiji_title.length = 0;
    $('.nav').empty()

    $('.nav').append("<li id='tag'>◀</li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.liLink').click(function() {
        $('#show_table').empty();
        let tabvar = "";
        tabvar += " <tr>";
        tabvar += " <td style ='width:974px;height:280px;line-height:280px;' >";
        tabvar += " <table class='panelDiv' style=\"background-image: url('..\/..\/..\/Image\/监控版\/驾驶舱\/入驻专家.png');\"> ";
        tabvar += " <tr>";
        tabvar += " <td style ='width:487px;' >";
        tabvar += " <div style='padding-top:90px;height:280px;'>";
        tabvar += " <text class='label'>入驻专家</text>";
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " <td style ='text-align:right;' > ";
        tabvar += " <div style='display:inline; margin-right:90px;'> ";
        var temp = table_data['data'][0]['table']['入驻专家'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " </tr> ";
        tabvar += " </table>";
        tabvar += " </td> ";
        tabvar += " <td>";
        tabvar += " <div style ='width:51px; height:280px;' ></div >";
        tabvar += " </td > ";
        tabvar += " <td style='width:974px;height:280px;line-height:280px;'>";
        tabvar += " <table class='panelDiv' style=\"background-image: url('..\/..\/..\/Image\/监控版\/驾驶舱\/成功案例.png');\"> ";
        tabvar += " <tr>";
        tabvar += " <td style ='width:487px;' >";
        tabvar += " <div style='padding-top:90px;height:280px;'>";
        tabvar += " <text class='label'>成功案例</text>";
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " <td style ='text-align:right;' > ";
        tabvar += " <div style='display:inline; margin-right:80px;'> ";
        temp = table_data['data'][0]['table']['成功案例'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " </tr> ";
        tabvar += " </table>";
        tabvar += " </td> ";
        tabvar += " </tr> ";
        tabvar += " <tr style ='height:32px;' >";
        tabvar += " <td ></td > ";
        tabvar += " <td ></td > ";
        tabvar += " <td ></td > ";
        tabvar += " </tr > ";
        tabvar += " <tr >";
        tabvar += " <td style='width:974px;height:280px;line-height:280px;'>";
        tabvar += " <table class='panelDiv' style=\"background-image: url('..\/..\/..\/Image\/监控版\/驾驶舱\/活动.png');\"> ";
        tabvar += " <tr>";
        tabvar += " <td style ='width:487px;' >";
        tabvar += " <div style='padding-top:120px;height:280px;'> ";
        tabvar += " <text class='label'>活动</text> ";
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " <td style ='text-align:right;' > ";
        tabvar += " <div style='display:inline; margin-right:90px;'> ";
        temp = table_data['data'][0]['table']['活动'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number1' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " </tr> ";
        tabvar += " </table>";
        tabvar += " </td> ";
        tabvar += " <td>";
        tabvar += " <div style ='width:51px; height:280px;' ></div > ";
        tabvar += " </td > ";
        tabvar += " <td style='width:974px;height:280px;line-height:280px;'>";
        tabvar += " <table class='panelDiv' style=\"background-image: url('..\/..\/..\/Image\/监控版\/驾驶舱\/合作金融商户.png');\"> ";
        tabvar += " <tr>";
        tabvar += " <td style ='width:487px;' >";
        tabvar += " <div style='padding-top:120px;height:280px;'> ";
        tabvar += " <text class='label'>合作金融商户</text>";
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " <td style ='text-align:right;' > ";
        tabvar += " <div style='display:inline; margin-right:80px;'> ";
        temp = table_data['data'][0]['table']['合作金融商户'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number1' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += " </div>";
        tabvar += " </td> ";
        tabvar += " </tr> ";
        tabvar += " </table>";
        tabvar += " </td> ";
        tabvar += " </tr> ";
        $('#show_table').append(tabvar);
    });
    $('.liLink')[0].click();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/"+jsonData['FunctionName'],
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