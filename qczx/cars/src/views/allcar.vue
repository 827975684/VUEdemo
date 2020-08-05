<template>
    <div>
        <!-- 头部 -->
        <mt-header title="车型大全">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 主体部分 -->
       <mt-index-list>
            <mt-index-section  v-for='(index ,key) of indexs' :key='key' :index='index'>
                <mt-cell  v-for='(title ,key) of cars[key]' :key='key'  >
                    <router-link :to="`/infocar/${title}`">
                        {{title}}
                     </router-link>
                </mt-cell>     
            </mt-index-section>     
        </mt-index-list>
    </div>
</template>
<style>
.header{
    height:30px;
    line-height: 30px;
    margin-top:10px;
}
div>.mint-header{
    background: white;
    color:black;
}

/* 主体部分 */
div ul{
    list-style: none;
    padding:0;
}
/* 标题 */
.mint-indexsection>.mint-indexsection-index{
    padding:0;
    font-size: 13px;
    font-weight: bold;
    background-color: rgb(235, 235, 235);

}


/* 车名  */
.mint-cell>.mint-cell-wrapper>.mint-cell-title{
     flex: 0 ;
 }

.mint-cell>.mint-cell-wrapper>.mint-cell-value{
flex: 1 ;
}


.mint-cell-value>a{
    display:block;
    width:100%;
    color:rgb(107, 107, 107);
    text-decoration: none;
}

</style>
<script >
export default {
    data(){
        return{
            indexs:[],
            cars:[
                ['奥迪','阿斯顿马丁','ABT'],
                ['奔驰','宝马','本田','别克','比亚迪','宝骏','标志','宾利'],
                ['长安','长安欧尚','长城'],
                ['大众','东风风行','道奇','DS','东风风光','东风小康'],
                ['Elemental'],
                ['福特','丰田','法拉利'],
                ['广汽传祺','观致','广通汽车'],
                ['暂无~'],
                ['哈佛','红旗','海马','华泰'],
                ['吉利汽车','Jeep','捷豹','江淮','金杯'],
                ['凯迪拉克','克莱斯勒','科尼塞克'],
                ['路虎','领克','雷克萨斯','林肯','劳斯莱斯','兰博基尼'],
                ['马自达','名爵','玛莎拉蒂','MINI','迈凯伦'],
                ['纳智捷'],
                ['讴歌','欧拉'],
                ['帕加尼'],
                ['起亚','奇瑞','启辰','乔治巴顿'],
                ['日产','荣威'],
                ['斯柯达','斯巴鲁','三菱'],
                ['特斯拉'],
                ['暂无~'],
                ['暂无~'],
                ['沃尔沃','五菱汽车','蔚来汽车','WEY'],
                ['雪佛兰','现代','雪铁龙'],
                ['英菲尼迪','一汽','依维柯','驭胜','宇通客车'],
                ['众泰','中华']
            ]
        }
    },
    mounted(){
        //发送请求 获得所有车分类数据
        this.axios.get('/getAllcar').then(result=>{
            // console.log(result)
               for(var i=0;i<result.data.length;i++){
                   this.indexs.push(result.data[i].cartype)
               }
            })
        
    }
}
</script>


 