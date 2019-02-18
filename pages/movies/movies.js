// pages/movies/movies.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  onLoad: function (options) {
    const url_top250 = `${app.globalData.baseURL}/v2/movie/top250?start=0&count=3`
    const url_in_theaters = `${app.globalData.baseURL}/v2/movie/in_theaters?start=0&count=3`
    const url_coming_soon = `${app.globalData.baseURL}/v2/movie/coming_soon?start=0&count=3`

    this.getMovieListData(url_top250).then(res => {
      this.processData(res.data, "top250", "TOP250")
    })
    this.getMovieListData(url_in_theaters).then(res => {
      this.processData(res.data, "in_theaters", "正在热映")
    })
    this.getMovieListData(url_coming_soon).then(res => {
      this.processData(res.data, "coming_soon", "即将上映")
    })
  },

  processData: function(data, settedKey, category) {
    const movies = data.subjects.map(item => ({
      title: item.title,
      average: item.rating.average,
      stars: util.formatStar(item.rating.stars),
      coverageUrl: item.images.large,
      id: item.id
    }))

    this.setData({
      [settedKey]: {
        category,
        movies
      }
    })
  },

  getMovieListData: function(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }
})