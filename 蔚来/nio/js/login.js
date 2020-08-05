

//点击按钮登录
$('.btnVal').click(()=>{   
        //获取管理员密码
        var $uname = $('#uname').val();
        var $upd =$('#upd').val()

        //判断是不是空 如果是则提示 不发请求 不是就发送请求
         
        if($uname =='' ||  $upd==''){
            
            //弹出管理员不许为空 
            $('.form_msg').animate({opacity:1},500).text('管理员或密码不许为空');
            function close(){
                $('.form_msg').animate({opacity:0},2000);
               }
               setTimeout(close,2000)//提示框计时         
        }else{
            //发送jq请求
            $.ajax({
                type:'POST',
                url:"http://localhost:8888/adminLogin",
                data:{name:$uname,upd:$upd},
                dataType:'json',
                success:function(result){
                    
                    if(result.code==210){
                        $('.form_msg').animate({opacity:1},500).text('欢迎管理员,正在进入系统');
                        function close(){
                        $('.form_msg').animate({opacity:0},2000);
                        }
                        setTimeout(close,2000)//提示框计时
                        function toback(){
                            window.location.replace("../html/backStage.html"); 
                        }
                        setTimeout(toback,2000)//提示框计时
                            
                    }
                    if(result.code==444){
                        $('.form_msg').animate({opacity:1},500).text('管理员不存在或密码错误');
                        function close(){
                        $('.form_msg').animate({opacity:0},500);
                        }
                        setTimeout(close,2000)//提示框计时
                    }
                }
            })
        }
})
 


