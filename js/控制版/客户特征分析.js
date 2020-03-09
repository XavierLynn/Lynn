

$(function(){
    // 点击分类占比
    $('#type').on('click','li',function(){
        $(this).parent().find('.circle').removeClass('selected_circle')
        $(this).children('.circle').addClass('selected_circle')

        var value=$(this).children('span').text()
    })

    // 点击方框
    $('#geo').on('click','.geo_white',function(){
        $(this).parent().find('.labels').removeClass('main_labels')
        $(this).children('.labels').addClass('main_labels')

        var value=$(this).children('.labels').text()
     
    })
    //设置背景图片
    $('.geo_white').each(function() {
        var value = String($(this).children('.labels').text()).trim();
        if(value!="张江科技城"){  
            $(this).css({"background":"url(../../Image/控制版/"+value+".png)","background-size":"100% 100%"})
        }  
    })
    // 点击标签调用排行
    $('#ranking').on('click','li',function(){
        $(this).parent().find('li').removeClass('selected_label_ranking')
        $(this).addClass('selected_label_ranking')

        var value=$(this).text()
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

    $('#searchBtn').click(()=>{
        var value=$('#searchInput').val()
    })
})