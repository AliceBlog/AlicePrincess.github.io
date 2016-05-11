
wx.ready(function () {
	  wx.checkJsApi({
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ],
      success: function (res) {
//      alert("success>>>>"+JSON.stringify(res));
      }
    });
	var shareData = {
	title: 'ngs测试',
      link: 'http://baidu.com',
       desc: '这就是个测试，呵呵',
       imgUrl: '../test3.jpg',
      trigger: function (res) {
        alert('用户点击分享到QZone');
      },
      complete: function (res) {
//      alert(JSON.stringify(res));
      },
      success: function (res) {
        alert('已分享');
      },
      cancel: function (res) {
        alert('已取消');
      },
      fail: function (res) {
//      alert(JSON.stringify(res));
      }
};
	 wx.onMenuShareAppMessage(shareData);
	 wx.onMenuShareTimeline(shareData);
	  wx.onMenuShareQQ(shareData);
	   wx.onMenuShareWeibo(shareData);
	   wx.onMenuShareQZone(shareData);




 });

wx.error(function (res) {
  alert(res.errMsg);
});

