<template>
    <div>
        <!--  头部  -->
        <mt-header title="搜索文章">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!--  搜索  -->
        <div class='search_box'>
            <input type='text' class='search_input' style='outline:none' placeholder="看一看感兴趣的文章吧" v-model='search_value'>
            <p class='search_btn' @click='search_btn'>搜一搜</p>
        </div>
        <!--  结果显示 / 推荐文章  -->
        <div class='show_tuijian_result'>
            <div v-if='searched==0'>
                <h4>推荐文章</h4>
                <div class='show_tuijian' v-for="(item,i) of tuijian" :key="i">
                    <div class='show_tuijian_left'>
                        <p>{{i+1}}</p>
                    </div>
                    <div class='show_tuijian_right'>
                        <div class="show_tuijian_right_p">{{item.subject}}</div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h4>搜索结果</h4>
                <div class='show_chaxun'  v-for="(item,k) of sousuo" :key="k">
                    <router-link :to="`/article_content/${item.id}`" class='show_chaxun_item'>
                        <div class='show_chaxun_left'>
                            <p>{{k+1}}</p>
                        </div>
                        <div class='show_chaxun_right'>
                            <div class="show_chaxun_right_p">
                                {{item.subject}}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
.search_box{
    width:100%;
    height:7vh;
    border:0px solid black;
    background:rgb(243, 163, 14);
    box-sizing: border-box;
    /* padding: */
}
.search_input{
    height:70%;
    width:75%;
    margin:2% 0px 0px 2%;
    border:0px solid black;
    box-sizing: border-box;
    padding:0px 0px 0px 3%;
    border-radius: 20px;
     float: left;
}
.search_btn{
    text-align: center;
    display: block;
    float: left;
    margin:2% 0px 0px 3%;
    line-height: 160%;
    height:60%;
    width:18%;
    border-radius: 20px;
    background: white;
}
/* 推荐文章 */
.show_tuijian{
    margin-top:2%;
    width:100%;
    height:20%;
    border-bottom:1px solid black;
}
.show_tuijian::after{
    content:'';
    display: block;
    clear: both;
}
.show_tuijian_left{
    /* box-sizing: border-box;
    padding:5% 5%; */
    float: left;
    width:15%;
    height:100%;
}
.show_tuijian_left>p{
    text-align: center;
    font-size:15px;
}
.show_tuijian_right{
    /* box-sizing: border-box;
    padding:5% 2%; */
    float: left;
    width:85%;
    height:50px;
    text-overflow:ellipsis;
}
.show_tuijian_right_p{
    box-sizing: border-box;
    padding:3% 0;
    display: block;
    height:50px;
    font-size:17px;
    margin:0px 0px 0px 0px;
    width:90%;
    overflow: hidden;
    text-overflow:ellipsis;
    box-sizing: border-box;
    white-space:nowrap; 
}
/****** 查询文章 *****/
.show_chaxun_item{
    color:black
}
.show_chaxun{
    margin-top:2%;
    width:100%;
    height:20%;
    border-bottom:1px solid black;
    
}
.show_chaxun::after{
    content:'';
    display: block;
    clear: both;
}
.show_chaxun_left{
    /* box-sizing: border-box;
    padding:5% 5%; */
    float: left;
    width:15%;
    height:100%;
}
.show_chaxun_left>p{
    text-align: center;
    font-size:15px;
}
.show_chaxun_right{
    /* box-sizing: border-box;
    padding:5% 2%; */
    float: left;
    width:85%;
    height:50px;
    text-overflow:ellipsis;
}
.show_chaxun_right_p{
    box-sizing: border-box;
    padding:3% 0;
    display: block;
    height:50px;
    font-size:17px;
    margin:0px 0px 0px 0px;
    width:90%;
    overflow: hidden;
    text-overflow:ellipsis;
    box-sizing: border-box;
    white-space:nowrap; 
}

</style>
<script> 
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            value:'',
            searched:0,
            autofocus:true,
            tuijian:[],
            search_value:'',
            sousuo:[]
        }
    },
    mounted(){
        //挂载阶段就去获取推荐的文章标题
        this.axios.get('/tuijian_title').then(result=>{
            this.tuijian=result.data
        })
    },
    methods:{
        search_btn(){
            if(this.search_value !=""){
                this.searched=1
                //发送请求
                this.axios.get('/search_title',{params:{subject:this.search_value}}).then(result=>{
                    console.log(result.data)
                    this.sousuo=result.data
            })
            }else if(this.search_value ==""){
                Toast('请输入查询内容');

            }
            
            
        }
    }
}
</script>