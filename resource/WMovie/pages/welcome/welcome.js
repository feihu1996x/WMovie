//welcome.js
Page({
	data: {
		avatarUrl: "/images/avatar/1.jpg",
		nickName: "feihu1996"
	},
	onLoad: function (options) {
		// 获取用户头像和昵称
		var that = this;
		wx.getUserInfo({
			success: function (res) {
				var userInfo = res.userInfo;
				var nickName = userInfo.nickName;
				var avatarUrl = userInfo.avatarUrl;
				that.setData({
					avatarUrl: avatarUrl,
					nickName: nickName	
				});
			}
		});
	},
	onTap: function (event) {
		wx.switchTab({
			url: "../posts/posts"
		});
	}
})
