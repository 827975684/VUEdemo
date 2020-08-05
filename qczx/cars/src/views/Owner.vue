<template>
    <div>
        <mt-header title="车主服务">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class='denglu'>
            <div class='denglu_false'  v-if='login==false'>
                <router-link to='/carlogin' class='tocarlogin'> 
                    <div class='denglu_btn'>
                    + 添加爱车领专属福利
                </div>
                </router-link>
            </div>
            <div class='denglu_true' v-else>
                <p class='welcome'>欢迎尊敬的<span>{{cartype}}</span>车主</p>
                <p class='carpai'>车牌号:<span>{{carpai}}</span></p>
                <p class='removeCar' @click='removeCar'>注销车型</p>
            </div>
        </div>
        <div class='changyongfuwu'>
            <p class='changyongfuwu_p'>常用服务</p>
            <ul class='item'>
                <li>
                    <img src='../images/owner/chaweizhang.png'>
                    违章查询
                </li>
                <li>
                    <img src='../images/owner/jiayouzhanzulin01.png'>
                    加油优惠
                </li>
                <li>
                    <img src='../images/owner/4sbaoyang.png'>
                    4S店保养
                </li>
                <li>
                    <img src='../images/owner/youhaofenxi.png'>
                    查油耗
                </li>
                <li>
                    <img src='../images/owner/ershouche.png'>
                    买二手车
                </li>
                <li>
                    <img src='../images/owner/xinshou.png'>
                    新手上路
                </li>
                <li>
                    <img src='../images/owner/shangcheng1.png'>
                    车品商城
                </li>
                <li>
                    <img src='../images/owner/jiayouka.png'>
                    加油卡充值
                    </li>
                <li>
                    <img src='../images/owner/fadandaijiao.png'>
                    罚单代缴
                </li>
            </ul>
        </div>
        <div class='changyongfuwu'>
            <p class='changyongfuwu_p'>更多服务</p>
            <ul class='item'>
                <li>
                    <img src='../images/owner/shuidi.png'>
                    特价洗车
                </li>
                <li>
                    <img src='../images/owner/jisuanqi.png'>
                    汽车估值
                </li>
                <li>
                    <img src='../images/owner/chexian-01.png'>
                    低价车险
                </li>
                <li>
                    <img src='../images/owner/luntai.png'>
                    正品轮胎
                </li>
                <li>
                    <img src='../images/owner/tehuitejia.png'>
                    特惠保养
                </li>
                <li>
                    <img src='../images/owner/jiazhao.png'>
                    出国驾照
                </li>
                <li>
                    <img src='../images/owner/nianjian.png'>
                    年检代办
                    </li>
                <li>
                    <img src='../images/owner/daolujiuyuan.png'>
                    道路救援
                    </li>
                <li>
                    <img src='../images/owner/ditu.png'>
                    违章高发地
                </li>
                <li>
                    <img src='../images/owner/nuochema.png'>
                    挪车二维码
                </li>
            </ul>
        </div>



    </div>
</template>
<style scoped>
.header{
    height:30px;
    line-height: 30px;
    margin-top:10px;
}
div>.mint-header{
    background: white;
    color:black;
}
/* 登录框 */
.denglu{
    position: relative;
    border-radius: 6px;
    height:160px;
    background: rgb(243, 239, 12);
}
/* 未登录时界面 */
.denglu_false{
    position:absolute;
    width:100%;
    height:100%;
    position: relative;
}
.denglu_false>.tocarlogin{
display: block;
width:100%;
height:100%;
color:rgb(90, 90, 90);
}

.denglu_btn{
    position: absolute;
    text-align: center;
    top:40%;
    left:25%;
    width:50%;
    height:20%;
    line-height: 200%;
    border-radius: 40px;
    background: #ffffffe5; 
}
/* 登录后界面  */
.denglu_true{
    position: absolute;
    top:0%;
    width:100%;
    height:100%;
}
/* 常用服务 */
.changyongfuwu{
    border:1px solid rgb(146, 146, 146);
    margin-bottom: 20px;
    border-radius: 5px;
}
.item{
      border-top: 1px solid rgb(146, 146, 146);
}
.item::after{
    display: block;
    clear: both;
    content:''
}
.item>li{
    display: block;
    float: left;
    width:33%;  
    text-align: center;
    box-sizing: border-box;
    padding:10px 2%; 
}
.item>li>img{
    display: block;
    margin:0px auto 10px;
}
/* 欢迎车主 */
.welcome{
    font-size:15px;
    margin:10%;
}
.carpai{
    margin-left:10%;
}
.welcome>span{
    margin:0px 5px;
    font-size:20px;
}
/* 退出 */
.removeCar{
    background: rgba(243, 243, 243, 0.835);
    border-radius: 5px;
    width:20%;
    height:30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
    position: absolute;
    top:72%;
    left:80%;
}

</style>
<script>
export default {
    data(){
        return{
            login:false,
            carpai:'',
            cartype:''
        }
    },
    methods:{
        removeCar(){
            localStorage.removeItem('车型')
            localStorage.removeItem('车牌')
             this.login=false;
        }
          
    },
    mounted(){
        //查找LocalStorage是否有存在的数据
        // 存在的话就显示车 没有就显示添加数据
       if(localStorage.length>1){
           this.login=true;
           this.carpai=localStorage.getItem('车牌');
           this.cartype=localStorage.getItem('车型')
       }else{
           this.login=false;
       }

    }
    
    
}
</script>