 //当滚动鼠标时
 $(document).scroll( ()=>{
     //获取被滚上去的高度
    var scrollHeight=$(document).scrollTop();
    console.log(scrollHeight);
    //当高度为466 时 智能suv出现
    if( scrollHeight >= 466){
        //获取智能suv的box
        //添加出现动画
        $('.es8').animate({
            top:70,
            opacity:1
        },1000)
    }

 })



// 选择车时候 点击按钮切换文字描述


///////////////////////   签名es8    ///////////////////
//获取两个按钮
//7座
$('#newEs8_7_btn').click(()=>{
    //获取要修改文字的元素
    //点击后给自己加actived 给六座按钮取消
        $('#newEs8_7_btn').addClass('actived').next().removeClass('actived');
     
    //获取要修改的文字
    //获取文字
        let str='三排七座的座椅布局';
        $('#newEs8_7_show').text(str);
    //获取价格
        var money='￥558,000'
        $('#newEs8_money').text(money)
    //获取车辆展示区域
        $('#item3_showCar').attr('src', '../images/es8/es8-newname-pc-7.png')
})

//6座
$('#newEs8_6_btn').click(()=>{
    //获取要修改文字的元素
    //点击后给自己加actived 给六座按钮取消
        $('#newEs8_6_btn').addClass('actived').prev( ).removeClass('actived');
    //获取要修改的文字
    //获取文字
        let str='三排六座的座椅布局';
        $('#newEs8_7_show').text(str);
    //获取价格
        var money='￥566,000'
        $('#newEs8_money').text(money)
    //获取车辆展示区域
        $('#item3_showCar').attr('src','../images/es8/es8-newname-pc-6.png')
    
})

///////////////////////    es8    ///////////////////
//获取两个按钮
//7座
$('#es8_7_btn').click(()=>{
    //获取要修改文字的元素
    //点击后给自己加actived 给六座按钮取消
        $('#es8_7_btn').addClass('actived').next().removeClass('actived');
     
    //获取要修改的文字
    //获取文字
        let str='三排七座的座椅布局';
        $('#es8_7_show').text(str);
    //获取价格
        var money='￥468,000'
        $('#es8_money').text(money)
    //获取车辆展示区域
        $('#item3_showCar').attr('src','../images/es8/es8-new-pc-7.png')
})
// 6座
$('#es8_6_btn').click(()=>{
    //获取要修改文字的元素
    //点击后给自己加actived 给六座按钮取消
        $('#es8_6_btn').addClass('actived').prev().removeClass('actived');
    
    //获取要修改的文字
    //获取文字
        let str='三排六座的座椅布局';
        $('#es8_7_show').text(str);
    //获取价格
        var money='￥476,000'
        $('#es8_money').text(money)
    //获取车辆展示区域
        $('#item3_showCar').attr('src','../images/es8/es8-new-pc-6.png')
})





// 鼠标进入全新ES8签名版或 全新ES8 
    //1 边框出来 2 车辆展示的图片会改变
    //进入签名es8
    $('#newname_es8').mouseenter(()=>{
        //给自己加样式
         $('#newname_es8').css('border','2px solid black');
        // 移除下一个残留的边框
        $('#newname_es8').next().css('border','2px solid transparent');    
        //修改图片
        //获取按钮 如果七座按钮 class 有 actived 就展示7座签名es8 没有actived就展示6座es8
        // console.log($("#newEs8_7_btn").attr('class'))
         if( $("#newEs8_7_btn").attr('class') == 'actived'){
            $('#item3_showCar').attr('src','../images/es8/es8-newname-pc-7.png');
         }else{
            $('#item3_showCar').attr('src','../images/es8/es8-newname-pc-6.png');
         }
        
   
    })

    // 进入es8
    $('#putong_es8').mouseenter(()=>{
        //给自己加样式
         $('#putong_es8').css('border','2px solid black')
        //移除上一个残留的边框
        $('#putong_es8').prev().css('border','2px solid transparent')
        //获取按钮 如果七座按钮 class 有 actived 就展示7座签名es8 没有actived就展示6座es8
        // console.log($("#newEs8_7_btn").attr('class'))
        if( $("#es8_7_btn").attr('class') == 'actived'){
            $('#item3_showCar').attr('src','../images/es8/es8-new-pc-7.png');
         }else{
            $('#item3_showCar').attr('src','../images/es8/es8-new-pc-6.png');
         }
    })

