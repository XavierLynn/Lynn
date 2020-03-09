$(function(){

    $('.main').on('click','li',function(){
        var parent=$(this).parent()
        parent.find('div').removeClass('selected_circle')
        parent.find('span').removeClass('selected_text')
        $(this).children('div').addClass('selected_circle')
        $(this).children('span').addClass('selected_text')
    })
    // 数据接入服务
    $('.header .main').on('click','li',function(){

        var value=$(this).children('span').text()
        console.log(value)
    })
    // 数据分析服务
    $('.middle .main').on('click','li',function(){

        var value=$(this).children('span').text()
        console.log(value)
    })
    // 定制服务
    $('.bottom .main').on('click','li',function(){

        var value=$(this).children('span').text()
        console.log(value)
    })
})