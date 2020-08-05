<template>
    <div class='body_div'>
       <mt-header title="添加爱车">
            <router-link to="/owner" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <div class='login_btn'>
                <p class='car_title'>品牌车型</p>
                <mt-cell  isLink @click.native="handleArea">
                    {{this.cartype}}
                </mt-cell>
                <mt-popup v-model="visible" position="bottom" class="popup">
                    <mt-picker :slots="slots" @change="changeValue">
                    </mt-picker>
                </mt-popup>
            </div>
            <div class='login_btn'>
               <p>车牌号码</p>
                <div class='sheng_btn'>
                    <!-- 省份按钮 -->
                    <p @click='changeSheng'><span>{{sheng}}</span><span><img src='../images/carlogin/xia.png'></span></p>
                    <input placeholder="请输入车牌号" type="text"  class='input_carpai' v-model='carpai_num'>
                    <mt-popup v-model="sheng_btn" position="bottom">
                        <mt-picker :slots="shengfen"   @change="onValuesChange" v-model="sheng">{{sheng}}</mt-picker>
                    </mt-popup>
                </div>
            </div>
            <mt-button class='logincar_btn' @click="carLogin">提交车辆信息</mt-button>
        </div>        
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import address from '../assets/json/pca.json';//引入车辆表
export default {
     methods:{
        changeSheng(){
            this.sheng_btn=true
        } , 
        //获取车的按钮
        onValuesChange(picker, values) {
           this.sheng=values[0]
        },
        //注册车辆按钮
        carLogin(){
            this.carpai=this.sheng+this.carpai_num //总车牌
            //验证车牌是否符合规矩
            let reg=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
            if(this.carpai ==''){
                Toast('添加失败,车牌不能为空')
                return;
            }
            if( reg.test(this.carpai)){
                Toast('添加成功')
                //数据存储到localStorage
                localStorage.setItem('车型',this.cartype);
                localStorage.setItem('车牌',this.carpai);
                this.$router.push('/owner')
            }else{
                Toast('添加失败,英文为大写')
            }
        },
        // 车型
        handleArea(){
            this.visible = true;
        },
        changeValue(picker,values){
            if(values[0]){
               picker.setSlotValues(1,Object.keys(address[values[0]]));
            }
            if(values[0] && values[1]){
                picker.setSlotValues(2,address[values[0]][values[1]]);
            }
            this.car = values[0];
            this.car_type = values[1];
            this.cartype = values[2];
            this.ownercar = this.cartype;
        }
        
    },
    data(){
        return{
            sheng:'',
            carpai_num:'',//车牌数字
            carpai:'',//完整车牌号
            sheng_btn:false,
            visible:false,
            ownercar:'',
            car:'奥迪',
            car_type:'车型',
            cartype:'A3',
            slots:[
                {
                    //车品牌
                    values:[],
                    className:'slot',
                    textAlign:'center',
                    flex:'1'
                },
                {
                    divider:true,
                    content:'-',
                    className:'slot',
                    flex:'0'
                } ,
                {
                    //车型
                    values:[],
                    className:'slot',
                    textAlign:'center',
                    flex:'1'
                },
                {
                    divider:true,
                    content:'-',
                    className:'slot',
                    textAlign:'center',
                    flex:'0'
                },
                {
                    //具体车型
                    values:[],
                    className:'slot',
                    flex:'1'
                }
            ],
            shengfen: [
                {
                    flex: 1,
                    values: ['京', '津', '沪', '渝', '冀', '吉','辽','黑','湘','鄂','甘','晋','陕','豫','川','云','桂','蒙','贵','青','藏','新','宁','粤','琼','闽','苏','浙','赣','鲁','皖'],
                    className: 'slot1',
                    textAlign: 'center'
                }
            ]
       }
    },
    created(){
        // 返回对象的自身属性组成的数组
        // console.log(Object.keys(address));
        //初始品牌
        this.slots[0].values = Object.keys(address);
        //初始化车型
        this.slots[2].values = Object.keys(address[this.car]);
        //初始化具体车型
        this.slots[4].values = address[this.car][this.car_type];
    },
    mounted(){
        if(localStorage.length >= 1){
            localStorage.clear()
        }
        console.log(localStorage.length)
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
.body_div{
    margin:30px 0px;
}


.login_btn{
    height:80px;
    box-sizing: border-box;
    width:100%;
    line-height: 80px;
    margin:20px auto;
    
}
.login_btn::after{
    clear:both;
    content: '';
    display: block;
}
.login_btn>p{
    margin:0;
    float: left;
}
.login_value{
    line-height: 48px;
    box-sizing: border-box;
    float: left;
    margin:15px 0px 0px 20px; 
    width:60%;
    height:48px; 
}
/* 品牌型号按钮 */
.mint-cell{
    box-sizing: border-box;
    padding: 15px 5px;
}
.mint-cell{
    margin:10px 0px  0px 0px;
}
.mint-cell>.mint-cell-wrapper{
      background-size: 0% 1px;
}



/* 省份选择按钮 */
.sheng_btn{
    box-sizing: border-box;
    margin: 10px 0px 0px 5%;
    float: left;
    width:60%;
    height:50px;
}
.sheng_btn>p{
    border-radius: 5px;
    float: left;
    background: rgb(243, 240, 34);
    width:20%;
    font-size:17px ;
    line-height: 40px;
    font-weight: bold;
    text-align: center;
    padding:0;
    margin:10px 0 0 0 ;
}
.sheng_btn>p>span>img{
    margin-left:10%;
    width:8px;
}


.clearMargin{
    margin:0;
}
/* 车牌号 */
.input_carpai{
    display: block;
    font-size:15px;
    border:0;
    margin:10px 0px 0px 5px;
    width:60%;
    height:40px;
}



/* 弹出 */
.mint-popup{
    width:100%;
}
.picker-items>.picker-slot>.picker-slot-wrapper{
    text-align: center;
}



/* 提交信息按钮 */
.logincar_btn{
    width:100%;
    height:50px;
    margin: 20px 0px 0px 0px;


    
}

</style>