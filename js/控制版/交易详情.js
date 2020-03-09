$(function(){
    var startTime1Show=0,startTime2Show=0,endTime1Show=0,endTime2Show=0;
    $('ul').on('click','li',function(){
        var parent=$(this).parent()
        parent.find('.circle').removeClass('selected_circle')
        parent.find('span').removeClass('selected_text')
        $(this).children('.circle').addClass('selected_circle')
        $(this).children('span').addClass('selected_text')
    })

    // 商品列表开始时间 
    $('#startTime1').change(function(){
        if($(this).val()!=''&&startTime1Show==0){
            $('head').append("<style>#startTime1::-webkit-datetime-edit-year-field{ visibility:visible }</style>");
            $('head').append("<style>#startTime1::-webkit-datetime-edit-month-field{ visibility:visible }</style>");
            $('head').append("<style>#startTime1::-webkit-datetime-edit-day-field{ visibility:visible }</style>");
            startTime1Show=1
        }

        var date=$(this).val()
    })

    // 商品列表结束时间
    $('#endTime1').change(function(){
        if($(this).val()!=''&&endTime1Show==0){
            $('head').append("<style>#endTime1::-webkit-datetime-edit-year-field{ visibility:visible }</style>");
            $('head').append("<style>#endTime1::-webkit-datetime-edit-month-field{ visibility:visible }</style>");
            $('head').append("<style>#endTime1::-webkit-datetime-edit-day-field{ visibility:visible }</style>");
            endTime1Show=1
        }

        var date=$(this).val()
    })

    // 商品列表单选
    $('.top ul').on('click','li',function(){
        var value=$(this).children('span').text()
    })

    // 商品列表查询按钮
    $('.top .searchBtn').click(function(){
        
    })

    // 商品列表重置按钮
    $('.top .resetBtn').click(function(){
        
    })

    // 需求列表开始时间
    $('#startTime2').change(function(){
        if($(this).val()!=''&&startTime2Show==0){
            $('head').append("<style>#startTime2::-webkit-datetime-edit-year-field{ visibility:visible }</style>");
            $('head').append("<style>#startTime2::-webkit-datetime-edit-month-field{ visibility:visible }</style>");
            $('head').append("<style>#startTime2::-webkit-datetime-edit-day-field{ visibility:visible }</style>");
            startTime2Show=1
        }
        
        var date=$(this).val()
    })

    // 需求列表结束时间
    $('#endTime2').change(function(){
        if($(this).val()!=''&&endTime2Show==0){
            $('head').append("<style>#endTime2::-webkit-datetime-edit-year-field{ visibility:visible }</style>");
            $('head').append("<style>#endTime2::-webkit-datetime-edit-month-field{ visibility:visible }</style>");
            $('head').append("<style>#endTime2::-webkit-datetime-edit-day-field{ visibility:visible }</style>");
            endTime2Show=1
        }

        var date=$(this).val()
    })

    // 需求列表单选
    $('.bottom ul').on('click','li',function(){
        var value=$(this).children('span').text()
    })

    // 需求列表查询按钮
    $('.bottom .searchBtn').click(function(){
        
    })

    // 需求列表重置按钮
    $('.bottom .resetBtn').click(function(){

    })
})