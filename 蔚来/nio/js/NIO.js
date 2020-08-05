//获取滚动条到顶部的垂直高度 (即网页被卷上去的高度) 
$(document).scroll(()=>{
    var scrollHight = $(document).scrollTop();
    console.log(scrollHight)

    //500px 让es6信息展现
    if(scrollHight > 500){
        //
        //获取es6
        $('#es6_info').animate({
            top:150,
            opacity:1
        },1000)
    }
    //  让 ec6信息展现出来
    if( scrollHight > 1100 ){
        //获取ec6
        $("#ec6_info").animate({
            top:150,
            opacity:1
        },1000)
    }

    //让powr和house处理
    if(scrollHight >1633){
        //获取power 和house
        $('.item4').animate({
            top:100,
            opacity:1
        },1000)
        
    }
    

})