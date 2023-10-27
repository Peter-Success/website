<template>
	<div class="lxzx">
		<div class="lxzx-pc">
			<div class="lxzx-banner">
				<div class="lxzx-banner-img">
					<img src="~/assets/images/lxzx/lxzx-banner.png" alt="">
				</div>
				<div class="lxzx-banner-txt">
					<div class="top">HOME.联络咨询</div>
					<div class="bottom">联络咨询</div>
				</div>
			</div>
			<div class="lxzx-content">
				<div class="lxzx-content-left">
					<div class="lxzx-content-left_one">
						<div class="top">CONTAC US</div>
						<div class="bottom">立刻预约</div>
					</div>
					<div class="lxzx-content-left_two">
						<div class="top">欢迎使用联络功能，提问请务必填写电话等联系方式，</div>
						<div class="bottom">我们会尽快回复您的问题。</div>
					</div>
					<div class="lxzx-content-left_three">
						<div class="top">电话：</div>
						<div class="bottom">135 5253 0999</div>
					</div>
				</div>
				<div class="lxzx-content-right">
					<a-form
						:model="formState"
						v-bind="layout"
						name="nest-messages"
						:validate-messages="validateMessages"
						@finish="onFinish"
					>
						<a-row :gutter="19">
							<a-col :span="12">
								<a-form-item :name="['user', 'name']" :rules="[{ required: false }]">
									<a-input size="large" placeholder="姓名：" v-model:value="formState.user.name" />
								</a-form-item>
							</a-col>
							<a-col :span="12">
								<a-form-item :name="['user', 'email']" :rules="[{ type: 'email' }]">
									<a-input size="large" placeholder="Email：" v-model:value="formState.user.email" />
								</a-form-item>
							</a-col>
						</a-row>
						<a-row :gutter="19">
							<a-col :span="12">
								<a-form-item :name="['user', 'tel']" :rules="[{ type: 'number', min: 0, max: 99 }]">
									<a-input size="large" placeholder="电话：" v-model:value="formState.user.tel" />
								</a-form-item>
							</a-col>
							<a-col :span="12">
								<a-form-item :name="['user', 'introduction']">
									<a-input size="large" placeholder="所在城市：" v-model:value="formState.user.introduction" />
								</a-form-item>
							</a-col>
						</a-row>
						<a-form-item class="hight" :name="['user', 'introduction']">
							<a-textarea size="large" placeholder="其他补充或者询问事项，请说明：" v-model:value="formState.user.introduction" />
						</a-form-item>
						<a-form-item class="btn">
							<a-button type="primary" html-type="submit">提交</a-button>
						</a-form-item>
					</a-form>
				</div>
			</div>
		</div>
		<div class="lxzx-h5">
			<div class="lxzx-h5-banner">
				<img src="~/assets/images/lxzx/lxzx-banner-h5.png" alt="">
			</div>
			<div class="lxzx-h5-content">
				<div class="lxzx-h5-content--top">
					<div class="one">欢迎使用联络功能，提问请务必填写E-mail及电话，我们会尽快回复您的问题</div>
					<div class="two">
						<div class="two-item" v-for="(n, i) in 8" :key="i">
							<img src="~/assets/images/nav/icon0.png" alt="">
						</div>
					</div>
					<div class="three">
						<div>电话：</div>
						<div>135-5253-0999</div>
					</div>
				</div>
				<div class="lxzx-h5-content--form">
					<a-form
						:model="formState"
						v-bind="layout"
						name="nest-messages"
						:validate-messages="validateMessages"
						@finish="onFinish"
					>
						<a-form-item :name="['user', 'name']" :rules="[{ required: false }]">
							<a-input size="large" placeholder="姓名" v-model:value="formState.user.name" />
						</a-form-item>
						<a-form-item :name="['user', 'tel']" :rules="[{ type: 'number', min: 0, max: 99 }]">
							<a-input size="large" placeholder="电话" v-model:value="formState.user.tel" />
						</a-form-item>
						<a-form-item :name="['user', 'email']" :rules="[{ type: 'email' }]">
							<a-input size="large" placeholder="Email" v-model:value="formState.user.email" />
						</a-form-item>
						<a-form-item :name="['user', 'introduction']">
							<a-input size="large" placeholder="其他补充或者询问事项，请说明：" v-model:value="formState.user.introduction" />
						</a-form-item>
						<a-form-item>
							<a-button type="primary" html-type="submit">提交</a-button>
						</a-form-item>
					</a-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue'
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};
const formState = reactive({
	user: {
		name: '',
		tel: '',
		email: '',
		introduction: '',
	},
})
const onFinish = () => {
	console.log('Success:', values);
}
</script>

<style lang="scss" scoped>
.lxzx {
	background-color: #E8E8E8;
	@at-root &-banner {
		position: relative;
		@at-root &-img {
			width: 100%;
			height: 440px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		@at-root &-txt {
			font-size: 32px;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 45px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			text-align: center;
			.bottom {
				font-size: 72px;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 100px;
			}
		}
	}
	@at-root &-content {
		padding: 90px 322px 90px 322px;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		@at-root &-left {
			@at-root &_one {
				.top {
					font-size: 14px;
					line-height: 21px;
					color: rgba(113, 113, 120, 1);
				}
				.bottom {
					font-size: 38px;
					line-height: 57px;
					color: rgba(43, 43, 43, 1);
					font-weight: bold;
				}
			}
			@at-root &_two {
				color: rgba(0, 0, 0, 1);
				font-size: 14px;
				line-height: 25px;
				margin: 53px 0;
			}
			@at-root &_three {
				color: rgba(0, 0, 0, 1);
				font-size: 16px;
				line-height: 30px;
				.bottom {
					font-weight: bold;
				}
			}
		}
		@at-root &-right {
			flex: 1;
			margin-left: 100px;
			:deep(.ant-col) {
				max-width: 100%;
			}
			:deep(.ant-input) {
				height: 56px;
				border-radius: 12px;
				background-color: rgba(241, 241, 245, 1);
				border: none;
			}
			:deep(.ant-form-item) {
				margin-bottom: 14px;
			}
			:deep(.ant-btn-primary) {
				width: 190px;
				height: 40px;
				line-height: 40px;
				background-color: #3D3D3D;
				border-radius: 4px;
				text-align: center;
				font-size: 16px;
				font-weight: 500;
				color: #FFFFFF;
				border: none;
				padding: 0;
			}
			:deep(.ant-form-item-control-input-content) {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			:deep(.ant-input::placeholder) {
				font-size: 13px;
				color: #999999;
				padding-left: 10px;
			}
			.hight {
				:deep(.ant-input) {
					height: 156px;
				}
				:deep(.ant-input::placeholder) {
					padding: 10px 0 0 10px;
				}
			}
			.btn {
				margin-top: 30px;
			}
		}
	}
	@at-root &-h5 {
		background-color: #ffffff;
		padding-bottom: 30px;
		position: relative;
		display: none;
		@at-root &-banner {
			width: 100%;
			height: 653px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		@at-root &-content {
			width: 100%;
			padding: 20px;
			font-size: 14px;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 20px;
			position: absolute;
			top: 145px;
			left: 0;
			@at-root &--top{
				.one {}
				.two {
					margin: 30px 0;
					display: flex;
					justify-content: center;
					align-items: center;
					@at-root &-item {
						width: 24px;
						height: 24px;
						margin-right: 8px;
						img {
							width: 100%;
							height: 100%;
						}
					}
				}
				.three {}
			}
			@at-root &--form{
				margin-top: 18px;
				:deep(.ant-input) {
					border-radius: 4px;
				}
				:deep(.ant-form-item) {
					margin-bottom: 14px;
				}
				:deep(.ant-btn-primary) {
					width: 190px;
					height: 40px;
					line-height: 40px;
					background-color: #3D3D3D;
					border-radius: 4px;
					text-align: center;
					font-size: 16px;
					font-weight: 500;
					color: #FFFFFF;
					border: none;
					padding: 0;
				}
				:deep(.ant-form-item-control-input-content) {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				:deep(.ant-input::placeholder) {
					font-size: 12px;
					color: #C2C2C2;
				}
			}
		}
	}
}
@media (max-width: 576px) {
	.lxzx {
		@at-root &-pc {
			display: none;
		}
		@at-root &-h5 {
			display: block;
		}
	}
}
</style>
