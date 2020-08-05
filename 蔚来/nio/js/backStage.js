//根据预约试驾 门店管理 来改变改变背景图片
//获取两个按钮
$('#testdrive').click(()=>{
    $('#testdrive').addClass('actived').next().removeClass('actived')
    $('#bg_1').animate({opacity:1},500).next().animate({opacity:0},500);
    $('.drive').animate({opacity:1},500);
    //获取预约的信息
    //发送请求
    $.ajax({
        type:'POST',
        url:"http://localhost:8888/userVal",
        dataType:'json',
        success:function(res){
            var table=`
            <table  class='drive_table'  >
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>省份</th>
                    <th>城市</th>
                    <th>操作</th>
                </tr>
            `
            for(var key in res){
                table+=`
            <tr class='table_tr'>
                <td>${res[key].id}</td>
                <td>${res[key].name}</td>
                <td>${res[key].phone}</td>
                <td>${res[key].province}</td>
                <td>${res[key].city}</td>
                <td>
                    <span class='del_btn'>删除</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class='red_btn'>标记</span>
                </td>
            </tr>`
            }
            table+=`</table>`
            
            //获取表格要放的位置
            $('.drive').html(table)
            // $('table').addClass('drive_table')
        }
    })

})

$('#mendian').click(()=>{
    $('#mendian').addClass('actived').prev().removeClass('actived')
    $('#bg_2').animate({opacity:1},500).prev().animate({opacity:0},500);
    $('.drive').animate({opacity:0},500)
})



//点击标记就将当前行变色
$('.red_btn').click(()=>{
    console.log('111')
    // $('.red_btn').parents('.table_tr').addClass('change_red')
})




