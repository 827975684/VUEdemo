// pages/boyfriend/boyfriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boys:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let db =wx.cloud.database()//链接库
    //选择集合
    db.collection("yulu_boy").get({
      success:(res)=>{
        this.setData({
          boys:res.data
        })
      }
    })
  },
})