$(function(){
    $('ul').on('click','li',function(){
        var parent=$(this).parent()
        parent.find('.circle').removeClass('selected_circle')
        parent.find('span').removeClass('selected_text')
        $(this).children('.circle').addClass('selected_circle')
        $(this).children('span').addClass('selected_text')
    })

    // 专家访问排行
    $('.one ul').on('click','li',function(){
        var value=$(this).children('span').text()
    })

    // 成功案例访问排行
    $('.two ul').on('click','li',function(){
        var value=$(this).children('span').text()
    })

    // 能源俱乐部访问排行
    $('.three ul').on('click','li',function(){
        var value=$(this).children('span').text()
    })

    // 金融产品访问排行
    $('.four ul').on('click','li',function(){
        var value=$(this).children('span').text()
    })
})  