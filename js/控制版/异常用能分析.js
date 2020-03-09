$(function(){
    var startTimeShow=0,endTimeShow=0;
    // 起始时间
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

    // 异常原因
    $('#exceptionReasons').change(function(){
        var reason=$(this).val()
    })
    // 状态
    $('#state').change(function(){
        var state=$(this).val()
    })
    // 关键字
    $('#keyword').change(function(){
        var keyword=$(this).val()
    })

    // 查询按钮
    $('#searchBtn').click(function(){
        
    })
    // 重置按钮
    $('#resetBtn').click(function(){
        
    })
})