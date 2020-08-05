<template>
    <div>
        <!-- 头部 -->
        <mt-header :title="cartype">
            <router-link to="/allcar" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item><div class='lunbo1'><p>图片1</p></div></mt-swipe-item>
            <mt-swipe-item><div class='lunbo2'><p>图片2</p></div></mt-swipe-item>
            <mt-swipe-item><div class='lunbo3'><p>图片3</p></div></mt-swipe-item>
            <mt-swipe-item><div class='lunbo4'><p>图片4</p></div></mt-swipe-item>
        </mt-swipe>
        <div class='show_type'>
            <h1>{{cartype}}</h1>
            <div class='item_car' v-for="(car ,i) of (cars)" :key='i'>
                <img class='item_car_img' :src='car.imgUrl'>
                <div class='item_car_info'>
                    <p class='caranem'>{{car.carname}}</p>
                    <p class='carprice'>{{car.carprice}}</p>
                    <p class='tjprice'>指导价:<span>{{car.zhidaoprice}}</span></p>
                </div>
            </div>
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


p{
    margin:0;
}

.mint-swipe-item>div{
    height:200px;
}
.mint-swipe-item>div>p{
    text-align: center;
    font-size: 20px; 
}


.lunbo1{
    background:rgb(218, 60, 60);
}
.lunbo2{
    background:rgb(21, 150, 200);
}
.lunbo3{
    background:rgb(218, 57, 191);
}
.lunbo4{
    background:rgb(43, 226, 52);
}
.mint-swipe{
    height:200px;
}



/* 车型 */

.item_car{
    border:0px solid black;
    height:120px;
    

}
.item_car::after{
    content: '';
    display: block;
    clear: both;
}
.item_car_img{
    float: left;
    width:40%;
}
.item_car_info{
    box-sizing: border-box;
    padding:10px 0px;
    margin-left:3%;
    float: left;
    width:55%;
}
/* 车型名称 */
.caranem{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}
.carprice{
     color: rgb(241, 179, 45);
    margin-bottom: 5px;
}
.tjprice{
    color:rgb(189, 189, 189)
}


</style>
<script>
export default {
    data(){
        return{
            cartype:'',
            cartext:'',
            cars:[],
        }
    },
    mounted(){
        this.cartype=this.$route.params.title
        //发送请求
        this.axios.get('/getcarInfo',{params:{carname:this.cartype}}).then(result=>{
           var data =result.data
           data.forEach((item)=>{
                    item.imgUrl=require('../images/infocar/'+item.imgUrl+'.png')
                    this.cars.push(item)  
                })
        })
        
    }
}
</script>