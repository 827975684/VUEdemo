<template>
    <div>
        <!-- 文章详细页面 -->
        <mt-header title="">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class='item_art'>
           <h1>{{art_subject}}</h1>
           <div v-html='art_content' class='artcontent'>{{art_content}}</div>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:'',
            articles:[],
            art_subject:'',//文章标题
            art_content:'',//文章主体

        }
    },
    mounted(){
        //获取文章id
        this.id=this.$route.params.id;
        console.log(this.id)
        //发送请求
        this.axios.get('/articlecontent',{params:{id:this.id}}).then(result=>{
            console.log(result.data[0].subject)
            this.art_subject=result.data[0].subject
            this.art_content=result.data[0].content
            }  
           ) 
        }
}

</script>
<style scoped>
.article_content{
    height:200px;
}
.artcontent{
    width:100%;
}
 .item_art>.artcontent>p>span>img{
     width:200px;
 }
 

 
 
</style>