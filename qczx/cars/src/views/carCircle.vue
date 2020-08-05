<template>
    <div>
        <!-- 头部 -->
        <mt-header title="车友圈">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <ul class='conten'>
                <li class='item_conten' v-for='(item ,i) of articles' :key='i' >
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
        </div>
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="selected">
        <mt-tab-item id="首页"  >
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
        return{
            selected:'车友圈',
            articles:[],
           
            loading:''

        }
    },
    mounted(){

        //发送请求 请求文章
        this.axios.get('/Article').then(result=>{
           result.data.forEach((item)=>{
               item.image=require('../images/articles/'+item.image)
                this.articles.push(item)
               }  
           )  
        })
    },
    methods:{
        
    }
}
</script>
<style>
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






.item_title{
    color: black;
    font-size:20px;
    font-weight: bold;
}
.item_conten>a{
    text-decoration: none;

}



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