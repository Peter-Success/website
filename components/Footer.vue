<template>
	<div class="footer">
		<div class="footer-pc">
			<div class="footer-pc-top">
				<div class="logo">
					<img src="~/assets/images/nav/logo.png" alt="">
				</div>
			</div>
			<div class="footer-pc-bottom">
				<div class="top">
					<div class="one top-item">
						<div class="one-title top-item-title">关注DR.Terry Yen：</div>
						<div class="one-content">
							<div class="one-content-item" v-for="(n, i) in mediaList" :key="i">
								<img src="~/assets/images/nav/icon0.png" alt="">
							</div>
						</div>
					</div>
					<div class="two top-item">
						<div class="two-title top-item-title">服务内容：</div>
						<div class="two-content">
							<div class="two-content-item">脸部</div>
							<div class="two-content-item">胸部</div>
							<div class="two-content-item">身体</div>
							<div class="two-content-item">非手术</div>
							<div class="two-content-item">男士</div>
							<div class="two-content-item">重建手术</div>
							<div class="two-content-item">术前术后护理</div>
						</div>
					</div>
					<div class="three top-item">
						<div class="three-title top-item-title">关于DR.Terry Yen：</div>
						<div class="three-content">
							<div class="three-content-item">我的观点</div>
							<div class="three-content-item">关于颜博士</div>
							<div class="three-content-item">案例说明</div>
							<div class="three-content-item">合作信息</div>
						</div>
					</div>
					<div class="four top-item">
						<div class="four-title top-item-title">联系我们：</div>
						<div class="four-content">
							<div class="four-content-item">测试信息</div>
							<div class="four-content-item">测试信息</div>
							<div class="four-content-item">测试信息</div>
							<div class="four-content-item">测试信息</div>
						</div>
					</div>
				</div>
				<div class="bottom">
					COPYRIGHT © LIPRO| ACOPYRIGHT © LIPRO| ACOPYRIGHT © LIPRO| ACOPYRIGHT © LIPRO| ACOPYRIGHT © LIPRO| ACOPYRIGHT © LIPRO| A
				</div>
			</div>
		</div>
		<div class="footer-h5">
			<div class="footer-h5-top">
				<div class="one">
					<div class="one-logo">
						<img src="~/assets/images/nav/logo.png" alt="">
					</div>
					<div class="one-list">
						<div class="one-list-item" v-for="(n, i) in mediaList" :key="i">
							<img src="~/assets/images/nav/icon0.png" alt="">
						</div>
					</div>
				</div>
				<div class="two">
					<img src="~/assets/images/footer/footer-qrcode.png" alt="">
				</div>
				<div class="three">
					COPYRIGHT © LIPRO| Adipose System Regulation & Body Sculpture Surgical Center ALL RIGHTS RESERVED
				</div>
			</div>
			<div class="footer-h5-bottom">
				<div class="footer-h5-bottom--item">联系我们</div>
				<div class="footer-h5-bottom--item active">公众号</div>
				<div class="footer-h5-bottom--item">138 8888 8888</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// 底部媒体列表
const mediaList = reactive([
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	},
	{
		url: ''
	}
])
</script>

<style lang="scss" scoped>
.footer {
	@at-root &-pc {
		background-color: #DDA365;
		@at-root &-top {
			height: 160px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #ffffff;
			.logo {
				width: 257px;
				height: 73px;
				img {
					width: 100%;
				}
			}
		}
		@at-root &-bottom {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.top {
				padding: 40px 0;
				font-size: 16px;
				color: #ffffff;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				@at-root &-item {
					margin-right: 120px;
					@at-root &-title {
						margin-bottom: 20px;
					}
				}
				.one {
					@at-root &-content {
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						width: 160px;
						@at-root &-item {
							width: 40px;
							height: 40px;
							margin: 0 20px 20px 0;
							&:nth-child(3n) {
								margin-right: 0;
							}
							img {
								width: 100%;
							}
						}
					}
				}
			}
			.bottom {
				font-size: 14px;
				color: #ffffff;
				padding: 20px 120px;
				border-top: 1px solid rgba(255,255,255,0.7);
			}
		}
	}
	@at-root &-h5 {
		display: none;
		width: 100%;
		@at-root &-top {
			width: 100%;
			background-color: #3D3D3D;
			padding: 15px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.one {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-bottom: 1px dashed rgba(255,255,255,0.5);
				@at-root &-logo {
					width: 257px;
					height: 73px;
					img {
						width: 100%;
					}
				}
				@at-root &-list {
					margin: 30px auto;
					display: flex;
					justify-content: center;
					align-items: center;
					@at-root &-item {
						width: 24px;
						height: 24px;
						margin-right: 8px;
						img {
							width: 100%;
						}
					}
				}
			}
			.two {
				width: 100%;
				img {
					width: 100%;
				}
			}
			.three {
				padding: 16px 50px;
				font-size: 10px;
				color: #ffffff;
				text-align: center;
				border-top: 1px dashed rgba(255,255,255,0.5);
			}
		}
		@at-root &-bottom {
			margin-top: 1px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			line-height: 35px;
			background: #DDDDDD;
			color: #333333;
			width: 100%;
			@at-root &--item {
				flex: 1;
				text-align: center;
				margin-right: 1px;
				&.active {
					background-color: #333333;
					color: #ffffff;
				}
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
}
@media (max-width: 576px) {
	.footer-pc {
		display: none;
	}
	.footer-h5 {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
}
@supports (bottom: env(safe-area-inset-bottom)) {
	.footer {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
}
</style>
