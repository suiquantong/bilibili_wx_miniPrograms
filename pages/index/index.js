Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList: [],
    // 被点击nav索引
    currentNav:0,
    //轮播图数据
    lunboList:[],
    //视频列表数据
    videoList:[],

  },
  //nav点击事件函数
  tapNav(e){
    this.setData({
      currentNav:e.target.dataset.index
    })
  },

  // 获取标签
  getNavList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList',
      success(res){
        // 由于这个接口返回数组太短，不足以拖动，添加两个实现下效果
        var arr = res.data.data.navList
        arr[5] = {text:"科技",id:5};
        arr[6] = { text:"鬼畜",id:6 };
        // 判断请求成功
        if(res.data.code===0){
          that.setData({
            navList:arr
          })
        }
      }
    })
  },

  //获取轮播图
  getlunbo(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
         //判断请求成功
         if (res.data.code === 0) {
           that.setData({
             lunboList: res.data.data.swiperList
           })
        }
      }
    })

  },
  
  //获取视频
  getvideo() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        //判断请求成功
        if (res.data.code === 0) {
          that.setData({
            videoList: res.data.data.videosList
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
    this.getlunbo()
    this.getvideo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})