<template>
<div>
    <div class='header'>
        <router-link to='/allcar' class='chose_city'>选车</router-link>
        <div class='sousuo' @click="search_btn">
            <img src='../images/index/sousuo.png'>
            <span>皓影 CR-V 花落谁家</span>
        </div>
    </div>
    <!-- 选择栏 -->
    <mt-navbar v-model='selected'>
        <mt-tab-item id='tuijian'>推荐</mt-tab-item>
        <mt-tab-item id='yuanchuang'>原创</mt-tab-item>
        <mt-tab-item id='daogou'>导购</mt-tab-item>
        <mt-tab-item id='ceping'>测评</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <!-- 文章主页 -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tuijian">
            <!-- 轮播图 -->
            <mt-swipe :auto="4000">
                <mt-swipe-item ><img src='../images/index/fm_cx.jpg' width="100%"></mt-swipe-item>
                <mt-swipe-item><img src='../images/index/fm_fxs.jpg' width="100%"></mt-swipe-item>
                <mt-swipe-item><img src='../images/index/fm_hz.jpg' width="100%"></mt-swipe-item>
                <mt-swipe-item><img src='../images/index/fm_xp.jpg' width="100%"></mt-swipe-item>
            </mt-swipe>
            <mt-navbar v-model='selected'>
                <mt-tab-item  >
                    <router-link to='/allcar' class='choose_btn'>
                        <img src="../images/index/daquan.png">
                    车型大全
                    </router-link></mt-tab-item>
                <mt-tab-item >
                    <router-link to='/hotcar' class='choose_btn'>
                        <img src="../images/index/remen .png">
                        热门车型
                    </router-link>
                </mt-tab-item>
                <mt-tab-item >
                    <router-link to='/saleranking' class='choose_btn'>
                        <img src="../images/index/paihangbang.png">
                        销量排行
                    </router-link>
                </mt-tab-item>
                <mt-tab-item >
                    <router-link to='/owner' class='choose_btn'> 
                        <img src="../images/index/chezhufuwu.png" >
                        车主服务
                    </router-link>
                </mt-tab-item>
            </mt-navbar>
            <!-- 文章开始 -->
            <ul class='conten'>
                <li class='item_conten' v-for='(item ,i) of tuijian_articles' :key='i'>
                    <router-link  :to="`/article_content/${item.id}`" class='text_de_none'>
                        <div class='item_p'>
                            <p class='item_title'>{{item.subject}}</p>
                            <p class='item_p'>{{item.description}}</p>
                        </div>
                        <div class='item_img'>
                            <img :src='item.image'>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="yuanchuang">
            <ul class='conten'>
                <li class='item_conten' v-for='(item ,i) of yuanchuang_articles' :key='i'>
                    <router-link :to="`/article_content/${item.id}`" class='text_de_none'>
                        <div class='item_p'>
                            <p class='item_title'>{{item.subject}}</p>
                            <p class='item_p'>{{item.description}}</p>
                        </div>
                        <div class='item_img'>
                            <img :src='item.image'>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="daogou">
            <ul class='conten'>
                <li class='item_conten' v-for='(item ,i) of daogou__articles' :key='i'>
                    <router-link  :to="`/article_content/${item.id}`" class='text_de_none'>
                        <div class='item_p'>
                            <p class='item_title'>{{item.subject}}</p>
                            <p class='item_p'>{{item.description}}</p>
                        </div>
                        <div class='item_img'>
                            <img :src='item.image'>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="ceping">
            <ul class='conten'>
                <li class='item_conten' v-for='(item ,i) of ceping_articles' :key='i'>
                        <router-link  :to="`/article_content/${item.id}`" class='text_de_none'>
                        <div class='item_p'>
                            <p class='item_title'>{{item.subject}}</p>
                            <p class='item_p'>{{item.description}}</p>
                        </div>
                        <div class='item_img'>
                            <img :src='item.image'>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-tab-container-item>
    </mt-tab-container>
     <!-- 底部导航栏 -->
    <mt-tabbar v-model="selected2">
        <mt-tab-item id='主页'  >
            <router-link to='/' class='tabbar_bottom'>
                <img src='../images/tabber/shouye_no.png'>
                首页
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="车友圈"  >
            <router-link to='/carCircle' class='tabbar_bottom' >
                <img src='../images/tabber/cheyouquan_no.png'>
                车友圈
            </router-link>
        </mt-tab-item>
        
    </mt-tabbar>
</div>   
</template>

<script>
export default {
    data(){
        return {
            selected:'tuijian',
            selected2:'主页',
            tuijian_articles:[],
            yuanchuang_articles:[],
            daogou__articles:[],
            ceping_articles:[]

        }
    },
    mounted(){
        //发送请求推荐的文章
        this.axios.get('/Article').then(result=>{
           result.data.forEach((item)=>{
               item.image=require('../images/articles/'+item.image)
               if(item.id<=20){
                this.tuijian_articles.push(item)
               }else if(20<item.id && item.id<=40){
                   this.yuanchuang_articles.push(item)
               }else if(40< item.id && item.id<=60){
                   this.daogou__articles.push(item)
               }else if(60<item.id && item.id <=80){
                   this.ceping_articles.push(item)
               }
               
           })  
        })
        
    },
    methods:{
         search_btn(){
            this.$router.push('/search')
        }
    }
    
}
</script>

<style scoped>
*{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
/* 无下划线 */
.text_de_none{
    text-decoration: none;
}


/* 查询按钮 */
 

.header{
    height:30px;
    line-height: 30px;
    margin-top:10px;
}
.chose_city{
    float: left;
    color: black;
    text-decoration: none;
    margin-right:20px;
    margin-left:5px;
    font-size:14px;
}
.sousuo{
    box-sizing: border-box;
    float: left;
    width:80%;
    background-color: rgb(230, 230, 230);
    height:30px;
    border-radius:10px;
    font-size: 13px;
}
.sousuo>img{
    float: left;
    margin:7px 10px 0px 30px;
}
.sousuo>span{
    display:block;
     float: left;
    color: rgb(122, 122, 122);
}

/* navbar */
div>.mint-navbar{
    margin:10px 0px 0px 10px;
    border-top:0px solid black;
}
div>.mint-navbar>.mint-tab-item{
    padding:10px 0px
}
div>.mint-navbar>a{
    padding:10px 0px ;
    font-size:19px;
}
div>.mint-navbar>.mint-tab-item.is-selected{
    font-size:30px;
    font-weight:bold;
    color:#f89d18;
    border-bottom: 0px solid black;
}
div>.mint-navbar>.mint-tab-item.is-selected>.mint-tab-item-label{
   text-decoration:  2px solid coral; 
}

/* l轮播图 */

.mint-tab-container-item>.mint-swipe{
    height:180px;
}
/* 车型大全 等等 */
.choose_btn{
    text-align: center;
    display: block;
    text-decoration: none;
    color:rgb(170, 170, 170);
}
.choose_btn>img{
    margin:0px auto 5px;
    display: block;
    width:25%;
}



/*  */
div>.mint-tab-container{
    margin-bottom:50px;
}





/* 车型大全按钮 */
.show_btn{
padding:0;
height:50px;
}
.show_btn{
    list-style: none;
}
.show_btn>li>a{
    text-align: center;
    margin:0px 2%;
    float: left;
    font-size:13px ;
    text-decoration: none;
    color:rgb(110, 110, 110);
    width:20%;
     
}
.show_btn>li>a>img{
    display: block;
    width:30%;
    margin:0px auto;
}

/* 文章 */
.conten{
    padding:5px 5% 5px;
}

.conten>.item_conten{
    list-style-type: none;
   
}
.item_conten{
    width:100%;
    border: 0px solid black;
    box-sizing: border-box;
    padding:0px 5px 10px  5px;
    border-bottom: 1px solid rgb(218, 218, 218);
}
.item_title{
    color:black;
    font-weight: bold;
}
.item_p{
    margin:0;
    color:rgb(167, 167, 167)
}
.item_img{
    margin:10px auto 5px; 
    width:60%;
}
.item_img>img{
    width:100%;
}

/* tabber */
div>.mint-tabbar{
    display: flex;
    right: 0;
    position: fixed;
    bottom:-1px;
    left: 0;
}
div>.mint-tabbar>.mint-tab-item.is-selected{
    color:coral;
}
.tabbar_bottom{
    height:20px;
    text-decoration: none;
    color:slategray
}
.tabbar_bottom>img{
    display: block;
    margin:5px auto 5px;
}
.mint-tab-item-label>.tabbar_bottom>img{
    display: block;
    width:18px;
    margin:0px auto;
    margin-bottom: 2px;
}


</style>