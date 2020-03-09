var showRealData = JKB["驾驶舱"]["服务概况-个性化定制服务"]

var table_data = {
    "data": [{
        "title": "服务概况",
        "table": {
            "编制中": "2",
            "待退款": "5",
            "当月订单": "78",
            "历史订单": "777"
        }
    }]
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-01&endDate=2019-12",
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
    $('.nav').empty();
    yiji_title.length = 0;

    $('.nav').append("<li id='tag'>◀</li>");
    for (let i = 0; i < table_data['data'].length; i++) {
        const href = "#title" + i;
        $('.nav').append("<li class='liLink' role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + table_data['data'][i]['title'] + "</a></li>")
    }
    $('.liLink').click(function() {
        $('#show_table').empty();
        let tabvar = "";
        tabvar += " <tr style='height:76px'>";
        tabvar += " <td></td>";
        tabvar += "   <td></td>";
        tabvar += "   <td></td>";
        tabvar += " </tr>";
        tabvar += "  <tr style='height:100px;padding:0px'>";
        tabvar += "    <td style='width:350px;'>";
        tabvar += "         <text class='label'>编制中</text>";
        tabvar += "    </td>";
        tabvar += "    <td style='text-align:right;width:210px'>";
        tabvar += "       <div style='display:inline'>";
        var temp = table_data['data'][0]['table']['编制中'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
    
        tabvar += "    </div>";
        tabvar += "   </td>";
        tabvar += "     <td></td>";
        tabvar += "  </tr>";
        tabvar += "  <tr style='height:40px'>";
        tabvar += "      <td></td>";
        tabvar += "   </tr>";
        tabvar += "   <tr style='height:100px;padding:0px'>";
        tabvar += "     <td style='width:350px;'>";
        tabvar += "       <text class='label'>待退款</text>";
        tabvar += "   </td>";
        tabvar += "   <td style='text-align:right;width:210px'>";
        tabvar += "   <div style='display:inline'>";
        temp = table_data['data'][0]['table']['待退款'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += "              </div>";
        tabvar += "          </td>";
        tabvar += "         <td></td>";
        tabvar += "     </tr>";
        tabvar += "     <tr style='height:42px'>";
        tabvar += "        <td></td>";
        tabvar += "      </tr>";
        tabvar += "     <tr style='height:100px;padding:0px'>";
        tabvar += "         <td style='width:350px;'>";
        tabvar += "             <text class='label'>当月订单</text>";
        tabvar += "          </td>";
        tabvar += "          <td style='text-align:right;width:210px'>";
        tabvar += "              <div style='display:inline'>";
        temp = table_data['data'][0]['table']['当月订单'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += "             </div>";
        tabvar += "          </td>";
        tabvar += "          <td></td>";
        tabvar += "      </tr>";
        tabvar += "       <tr style='height:40px'>";
        tabvar += "          <td></td>";
        tabvar += "      </tr>";
        tabvar += "      <tr style='height:100px;padding:0px'>";
        tabvar += "          <td style='width:350px;'>";
        tabvar += "             <text class='label'>历史订单</text>";
        tabvar += "         </td>";
        tabvar += "          <td style='text-align:right;width:210px'>";
        tabvar += "              <div style='display:inline'>";
        temp = table_data['data'][0]['table']['历史订单'].split('');
        temp.forEach(element => {
            tabvar += "          <image class='number' src='../../../Image/监控版/驾驶舱/发光-" + element + ".png'></image>";
        });
        tabvar += "               </div>";
        tabvar += "           </td>";
        tabvar += "           <td></td>";
        tabvar += "        </tr>";
        tabvar += "     <tr>";
        tabvar += "          <td></td>";
        tabvar += "    </tr>";
        $('#show_table').append(tabvar);
    })
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