//城市联动选择菜单
$(function(){   
    var provinces =['安徽省','北京市','福建省','广东省','湖南省','湖北省','河北省','江苏省','重庆市','香港','澳门','上海市','天津市','云南省','四川省','浙江省']  
    var citys =[
            ['合肥市','安庆市','蚌埠市','亳州市','池州市','滁州市','阜阳市','淮北市','淮南市','黄山市','六安市','马鞍山市','宿州市','铜陵市','芜湖市','宣城市'],//1安徽
            ['北京市'],//2北京
            ['福州市','龙岩市','南平市','宁德市','莆田市','泉州市','三明市','厦门市','漳州市'],//3福建
            ['潮州市','东莞市','佛山市','广州市','河源市','惠州市','江门市','揭阳市','茂名市','梅州市','清远市','汕头市','汕尾市','韶关市','深圳市','阳江市','云浮市','肇庆市','珠海市','中山市'],//4广东
            ['常德市','长沙市','郴州市','衡阳市','怀化市','娄底市','邵阳市','湘潭市','湘西土家族苗族自治州','益阳市','永州市','岳阳市','张家界市','株洲市'],//5湖南省
            ['武汉市','鄂州市','黄石市','十堰市','荆门市','荆州市','孝感市','宜昌市','襄阳市','随州市','咸宁市','黄冈市','恩施土家族苗族自治州'],//6湖北省
            ['保定市','沧州市','承德市','邯郸市','衡水市','廊坊市','秦皇岛市','石家庄市','唐山市','邢台市','张家口市'],//河北
            ['南京市','常州市','淮安市','连云港市','南通市','宿迁市','无锡市','徐州市','盐城市','镇江市','扬州市','泰州市','宿州市'],//江苏
            ['重庆市'],//重庆
            ['香港'],
            ['澳门'],
            ['上海市'],
            ['天津市'],
            ['昆明市','保山市','丽江市','临沧市','普洱市','玉溪市','昭通市','曲靖市','楚雄彝族自治州','大理白族自治州','德宏傣族景颇族自治州','迪庆藏族自治州','红河哈尼族彝族自治州','怒江傈僳族自治州','文山壮族苗族自治州','西双版纳傣族自治州'],//云南
            ['成都市','巴中市','达州市','德阳市','广安市','乐山市','泸州市','眉山市','攀枝花市','遂宁市','内江市','雅安市','自贡市','资阳市','南充市','阿坝藏族羌族自治州','甘孜藏族自治州','凉山彝族自治州'],//四川
            ['杭州市','湖州市','嘉兴市','金华市','丽水市','宁波市','温州市','台州市','舟山市','绍兴市'],//浙江
    ]

    for(let i=0;i<provinces.length;i++){
        $('#shengfen').append('<option>'+provinces[i]+'</option>');
   }
   $('#shengfen').change(function(){
           $('#chengshi').children().not(':eq(0)').remove();
           var index = $(this).children('option:selected').index();
        //    console.log(index)
           var arr = citys[index-1];
        //    console.log(arr)
           for(let i=0;i<arr.length;i++){
                $('#chengshi').append('<option>'+arr[i]+'</option>');
           }
       })

})



//试驾车型的改变
$('#btn_es8').click(()=>{
    console.log(123)
    //点击es8按钮 es8变色 并且取消掉es6的颜色
    $('.btn_es8_img').attr('src','../images/testDrive/es8-logo-actived.png')
    $('.btn_es6_img').attr('src','../images/testDrive/es6-logo-regular.png')
    //将es8背景色变成1 //其他背景为0
    $('.bg_es8').animate({ opacity:1},500).prev().animate({opacity:0},500).prev().animate({opacity:0},500).prev().animate({opacity:0},500)   
    //修改蔚来旗舰
    $('.es8_title').animate({opacity:1},500).next().animate({opacity:0},500)
   
})
$('#btn_es6').click(()=>{
    // console.log(123)
    //点击es6按钮 es6变色 并且取消es8的颜色
    $('.btn_es6_img').attr('src','../images/testDrive/es6-logo-actived.png')
    $('.btn_es8_img').attr('src','../images/testDrive/es8-logo-regular.png')
    // 将es6背景色变成1 其他为0
        $('.bg_es6').animate({ opacity:1 },500).next().animate({opacity:0}).prev().prev().animate({opacity:0}).prev().animate({opacity:0})

    //修改 智能电动全能SUV
    $('.es6_title').animate({opacity:1},500).prev().animate({opacity:0},500)
})
 



// 按提交预约按钮 发送请求

$('.btnVal').click(()=>{
    //获取表格数据
    var $uname = $('#user_name').val()
    var $phone = $('#user_phone').val()
    //省份
    var $sheng = $('#shengfen').val()
    var $cheng = $('#chengshi').val()

    //做判断如果姓名为空就弹出姓名为空 并且函数不调用
    if(!$uname){
        // 提示框显示
       $('.form_msg').animate({opacity:1},500).text('姓名不能为空');
           function close(){
            $('.form_msg').animate({opacity:0},500) ;
           }
           setTimeout(close,2000)//提示框小时
           return;
    }
    //验证手机号!
    var reg=/^1[3456789]\d{9}$/
    if(!reg.test($phone)){
        $('.form_msg').animate({opacity:1},500).text('手机号格式不正确');
           function close(){
            $('.form_msg').animate({opacity:0},500) ;
           }
           setTimeout(close,2000)//提示框小时
           return;
    }
    //验证省份城市
    if($sheng === '--请选择省份--' || $cheng ==='--请选择城市--'){
        $('.form_msg').animate({opacity:1},500).text('请选择地址');
           function close(){
            $('.form_msg').animate({opacity:0},1000) ;
           }
           setTimeout(close,2000)//提示框计时
           return;
    }



    //发送jq请求
    $.ajax({
        type:'POST',
        url:"http://localhost:8888/userInfo",
        data:{name:$uname,phone:$phone,province:$sheng,city:$cheng},
        dataType:'json',
        success:function(result){
            console.log(result)
            if(result.code==200){
                $('.form_msg').animate({opacity:1},500).text('预约成功');
                function close(){
                 $('.form_msg').animate({opacity:0},500) ;
                }
                setTimeout(close,2000)//提示框计时     
            }
            if(result.code==410){
                $('.form_msg').animate({opacity:1},500).text('该手机号已预约,不可重复操作');
                function close(){
                 $('.form_msg').animate({opacity:0},500) ;
                }
                setTimeout(close,2000)//提示框计时
            }
        }
    })
       



})


