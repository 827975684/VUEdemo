<template>
    <div>
        <!-- 头部 -->
        <mt-header title='销量排行'>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 主体 -->
       <mt-navbar v-model="selected">
            <mt-tab-item id="1"  >
                <img src='../images/allcar/car.png'>
                轿车
            </mt-tab-item>
            <mt-tab-item id="2"  >
                <img src='../images/allcar/suv.png'>
                SUV
            </mt-tab-item>
            <mt-tab-item id="3" >
              <img src='../images/allcar/mpv.png'>
                MPV
            </mt-tab-item>
            <mt-tab-item id="4"  >
               <img src='../images/allcar/ddcar.png'>
                新能源
            </mt-tab-item>
       </mt-navbar>

<!-- tab    -container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <!-- 轿车    -->
                <ul>
                    <li class='item_car' v-for='(car , i) of cars ' :key='i' >                        
                        <div class='item_car_ranking'>{{car.id}}</div>
                        <div class='item_car_info'>
                            <div class='item_car_info_img' >
                                <img :src='car.imgUrl' class='car_img'>
                            </div>
                            <div class='car_info'>
                                <div class='car_info_name'>{{car.carname}}</div>
                                <div class='car_info_price'>{{car.carprice}}</div>
                            </div>
                        </div>
                        <div class='item_car_hot'>{{car.carhot}}  
                        </div>
                    </li>
                </ul>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <!-- suv -->
                <ul>
                    <li class='item_car' v-for='(suv , i) of suvs ' :key='i' >                        
                        <div class='item_car_ranking'>{{suv.id}}</div>
                        <div class='item_car_info'>
                            <div class='item_car_info_img' >
                                <img :src='suv.imgUrl' class='car_img'>
                            </div>
                            <div class='car_info'>
                                <div class='car_info_name'>{{suv.carname}}</div>
                                <div class='car_info_price'>{{suv.carprice}}</div>
                            </div>
                        </div>
                        <div class='item_car_hot'>{{suv.carhot}} 
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <!-- mpv -->
                <ul>
                    <li class='item_car' v-for='(car , i) of cars ' :key='i' >                        
                        <div class='item_car_ranking'>{{car.id}}</div>
                        <div class='item_car_info'>
                            <div class='item_car_info_img' >
                                <img :src='car.imgUrl' class='car_img'>
                            </div>
                            <div class='car_info'>
                                <div class='car_info_name'>{{car.carname}}</div>
                                <div class='car_info_price'>{{car.carprice}}</div>
                            </div>
                        </div>
                        <div class='item_car_hot'>{{car.carhot}}   
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <!-- 新能源 -->
                <ul>
                   <li class='item_car' v-for='(suv , i) of suvs ' :key='i' >                        
                        <div class='item_car_ranking'>{{suv.id}}</div>
                        <div class='item_car_info'>
                            <div class='item_car_info_img' >
                                <img :src='suv.imgUrl' class='car_img'>
                            </div>
                            <div class='car_info'>
                                <div class='car_info_name'>{{suv.carname}}</div>
                                <div class='car_info_price'>{{suv.carprice}}</div>
                            </div>
                        </div>
                        <div class='item_car_hot'>{{suv.carhot}} 
                            
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script   >
export default {
    data(){
        return{
            selected:'1',
            cars:[],
            suvs:[]

                    
        }
    },
    methods:{
        


    },
    //挂载完成时就发送请求最稳妥
    mounted(){
        //发送请求获取轿车排行榜
        this.axios.get('/hotcar1').then(result=>{
           var data=result.data
            data.forEach((item)=>{  
                item.imgUrl=require('../images/hotcar/car/'+item.imgUrl+'.png')
                this.cars.push(item)  
            })    
        })
        //发送请求获取SuV排行榜
        this.axios.get('/hotcar2').then(result=>{
                var data=result.data
                data.forEach((item)=>{
                    item.imgUrl=require('../images/hotcar/car/'+item.imgUrl+'.png')
                    this.suvs.push(item)  
                })
            })
         

    }
}
</script>
<style >
.header{
    height:30px;
    line-height: 30px;
    margin-top:10px;
}
div>.mint-header{
    background: white;
    color:black;
}
ul>.item_car{
    border:1px solid transparent;
    display:block;
    height:70px;
}
/* 排行 */
.item_car_ranking{
   text-align: center;
    width:15%;
    border: 1px solid transparent;
    height:100%;
    float: left;
    line-height: 70px;
}
/* 车辆信息 */
.item_car_info{
    width:65%;
    border:1px solid transparent;
    float: left;
    height:100%;
    margin-left:1%;
}


/* 车辆名字 */
.car_img{
    width:100%;
}


/* 车辆信息内部 */
.item_car_info_img{
    float: left;
    width:40%;
    border:1px solid transparent;
    height:100%;
    margin-right:5px;
}
.car_info{
    float: left;
    width:50%;
    box-sizing: border-box;
    padding:5% 5%;

}
/* 车辆名字 */
.car_info_name{
    font-size:15px;
    font-weight: bold;
    margin-bottom:3%;
}
.car_info_price{
    font-size: 12px;
    color:rgb(248, 140, 16);
}



.item_car_hot{
    width:17%;
    height:100%;
    float: left;
    border: 1px solid transparent;
    line-height: 50px;
}




</style>