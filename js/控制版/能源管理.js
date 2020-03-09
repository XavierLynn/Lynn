$(function(){
    // 点击方框
    $('#geo').on('click','.geo_white',function(){
        $(this).parent().find('.labels').removeClass('selected_labels')
        $(this).children('.labels').addClass('selected_labels')
        var value=$(this).children('.labels').text()
    })
    //设置背景图片
    $('.geo_white').each(function() {
        var value = String($(this).children('.labels').text()).trim();
        if(value!="张江科技城"){  
            $(this).css({"background":"url(../../Image/控制版/"+value+".png)","background-size":"100% 100%"})
        }  
    })
    // 点击分区选择
    $('#partition').on('click','li',function(){
        var parent=$(this).parent()
        parent.find('.circle').removeClass('selected_circle')
        parent.find('span').removeClass('selected_text')
        $(this).children('.circle').addClass('selected_circle')
        $(this).children('span').addClass('selected_text')

        var value=$(this).children('.partitionInfo').text()
    })

    // 起始时间
    var startTimeShow=0,endTimeShow=0;
    $('#startTime').change(function(){
        if($(this).val()!=''&&startTimeShow==0){
            $('head').append("<style>#startTime::-webkit-datetime-edit-year-field{ visibility:visible }</style>");
            $('head').append("<style>#startTime::-webkit-datetime-edit-month-field{ visibility:visible }</style>");
            $('head').append("<style>#startTime::-webkit-datetime-edit-day-field{ visibility:visible }</style>");
            startTimeShow=1
        }

        var date=$(this).val()
    })

    // 结束时间
    $('#endTime').change(function(){
        if($(this).val()!=''&&endTimeShow==0){
            $('head').append("<style>#endTime::-webkit-datetime-edit-year-field{ visibility:visible }</style>");
            $('head').append("<style>#endTime::-webkit-datetime-edit-month-field{ visibility:visible }</style>");
            $('head').append("<style>#endTime::-webkit-datetime-edit-day-field{ visibility:visible }</style>");
            endTimeShow=1
        }

        var date=$(this).val()
    })

    // 点击削谷填峰事件单选框
    $('#type').on('click','li',function(){
        var parent=$(this).parent()
        parent.find('.circle').removeClass('selected_circle')
        parent.find('span').removeClass('selected_text')
        $(this).children('.circle').addClass('selected_circle')
        $(this).children('span').addClass('selected_text')

        var value=$(this).children('span').text()
    })

    // 查询按钮
    $('#searchBtn').click(function(){
        
    })
    // 重置按钮
    $('#resetBtn').click(function(){
        
    })
})