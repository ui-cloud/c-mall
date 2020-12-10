// pages/home/home.js
import {Theme} from "../../model/theme";

Page({


    /**
     * 页面的初始数据
     */
    data: {
        topTheme: null,
        background: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        //请求首页第一个元素
        const data = await Theme.getHomeLocationA()
        let background = []
        data.forEach((item) => {
            if (item.internal_top_img) {
                background.push(item.internal_top_img)
            }
        })
        this.setData({
            topTheme: data[0],
            background: background
        })
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