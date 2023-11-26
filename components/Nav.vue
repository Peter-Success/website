<template>
	<div class="nav">
		<div class="nav-pc" :style="{'backgroundColor': `rgba(61,61,61,${scrollTop/100})`}">
			<div class="nav-left">
				<img src="~/assets/images/nav/logo.png" alt="">
			</div>
			<div class="nav-center">
				<div class="nav-center-item" v-for="(n, i) in navList" :key="i">
					<NuxtLink class="nav-center-item--txt" v-if="!n.subList.length" :to="n.url">{{n.name}}</NuxtLink>
					<a-dropdown
						v-else
						overlayClassName="nav-dropdown"
					>
						<NuxtLink class="ant-dropdown-link nav-center-item--txt" @click.prevent :to="n.url">
							{{n.name}}
							<down-outlined style="font-size: 18px;color: #ffffff" class="arrow" />
						</NuxtLink>
						<template #overlay>
							<a-menu>
								<a-menu-item v-for="(j, k) in n.subList" :key="k">
									<NuxtLink  :to="j.url">{{j.name}}</NuxtLink>
								</a-menu-item>
							</a-menu>
						</template>
					</a-dropdown>
				</div>
			</div>
<!--			<div class="nav-right">-->
<!--				<div class="nav-right-item" v-for="(n, i) in mediaList" :key="i">-->
<!--					<img src="~/assets/images/nav/icon0.png" alt="">-->
<!--				</div>-->
<!--			</div>-->
		</div>
		<div class="nav-h5">
			<div class="nav-h5-left">
				<img src="~/assets/images/nav/logo-h5.png" alt="">
			</div>
			<div class="nav-h5-right" @click="showDrawer">
				<div class="nav-h5-right--txt">MENU</div>
				<div class="nav-h5-right--icon" :class="{'rotate': visible}"><menu-outlined /></div>
			</div>
			<a-drawer
				v-model:visible="visible"
				class="nav-h5-content"
				placement="right"
				:closable="false"
			>
				<div class="content">
					<div class="content-left">
						<div class="content-left-item" v-for="(n, i) in navList" :key="i" @click="handleClick(n)">
							<div v-if="n.subList.length > 0" class="content-left-item--txt" :class="[currentRoute.indexOf(n.value) >= 0 ? 'active' : '']">
                {{n.name}}
                <right-outlined class="content-left-item--icon" v-if="n.subList.length" />
              </div>
              <NuxtLink v-else class="content-left-item--txt" :to="n.url">{{n.name}}</NuxtLink>
						</div>
					</div>
					<div class="content-right">
						<div class="content-right-item" v-for="(j, k) in subNav.list" :key="k" @click="handleClick(j)">
							<NuxtLink class="content-right-item--txt" :to="j.url">
								{{j.name}}
							</NuxtLink>
						</div>
					</div>
				</div>
			</a-drawer>
		</div>
	</div>
</template>

<script lang="ts" setup>
// 导航数据
const navList = reactive([
	{
		name: '首页',
		url: '/',
    value: 'index',
		subList: []
	},
  {
    name: '关于颜医生',
    url: '/gyys',
    value: 'gyys',
    subList: []
  },
  {
    name: 'RFAL灵动雕塑',
    url: '/ldds',
    value: 'ldds',
    subList: []
  },
  {
    name: '服务项目',
    url: '/fwxm/wzx',
    value: 'fwxm',
    subList: [
      {
        name: '微整形',
        value: 'wzx',
        url: '/fwxm/wzx'
      },{
        name: 'TML美式',
        value: 'TMLms',
        url: '/fwxm/TMLms'
      },{
        name: '男性女乳',
        value: 'nxnr',
        url: '/fwxm/nxnr'
      }
    ]
  },
  // {
  //   name: '媒体报道',
  //   url: '/mtbd',
  //   subList: []
  // },
  // {
  //   name: '美丽见证',
  //   url: '/mljz',
  //   subList: []
  // },
	{
		name: '联系咨询',
		url: '/lxzx',
    value: 'lxzx',
		subList: []
	}
])
// 右侧媒体列表
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
	}
])
// H5导航
const subNav = reactive({
  list: []
})
const visible = ref<boolean>(false)
const showDrawer = () => {
  // 获取当前导航
  currentRoute.value = useRoute().path
  console.log('route---', useRoute())
  const currentIndex = navList.findIndex(n => {
    return currentRoute.value.indexOf(n.value) >= 0
  })
  console.log('currentIndex---', currentIndex)
  // 设置子导航
  if (currentIndex === -1) {
    subNav.list = []
  } else {
    const { subList = [] } = navList[currentIndex]
    subNav.list = subList
  }
	visible.value = !visible.value
}
const handleClick = (n) => {
  const { subList: list = [] } = n
  if (list && list.length) {
    subNav.list = list
  } else {
    subNav.list = []
    visible.value = false
  }
}
// 获取当前路由
const currentRoute = ref('')
// 监听滚动
let scrollTop = ref(0)
onMounted(() => {
	window.addEventListener('scroll', function (e) {
		scrollTop.value = document.querySelector('html').scrollTop
		console.log('scrollTop---', scrollTop.value)
	})
})
</script>

<style lang="scss" scoped>
.nav {
	box-sizing: border-box;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999999999;
	@at-root &-left {
		width: 257px;
		height: 73px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	@at-root &-center {
		margin: 0 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		color: #ffffff;
		font-weight: 400;

		@at-root &-item {
			height: 120px;
			line-height: 120px;
			margin-right: 56px;
			@at-root &--txt {
				color: #ffffff;
				text-decoration: none;
			}
			.ant-dropdown-link {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.arrow {
				display: inline-block;
				font-size: 18px;
				margin: 2px 0 0 6px;
			}
		}
	}
	@at-root &-right {
		display: flex;
		justify-content: center;
		align-items: center;
		@at-root &-item {
			width: 40px;
			height: 40px;
			margin-right: 12px;
			cursor: pointer;
			img {
				width: 100%;
			}
		}
	}
	@at-root &-pc {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120px;
		background-color: rgba(0,0,0,0);
	}
	@at-root &-h5 {
		display: none;
		background-color: #ffffff;
		height: 48px;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 0 13px;
		@at-root &-left {
			width: 120px;
			img {
				width: 100%;
			}
		}
		@at-root &-right {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			@at-root &--txt {
				margin-right: 6px;
			}
			@at-root &--icon {
				&.rotate {
					transform: rotate(90deg);
				}
			}
		}
		@at-root &-content {
			.content {
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				@at-root &-left {
					@at-root &-item {
						font-size: 16px;
						color: #333333;
						height: 48px;
						line-height: 48px;
						@at-root &--txt {
							color: #333333;
              &.active {
                color: #D6954F !important;
              }
						}
						@at-root &--icon {
							font-size: 16px;
							margin-left: 5px;
						}
					}
				}
				@at-root &-right {
					margin-left: 60px;
					flex: 1;
					@at-root &-item {
						height: 48px;
						line-height: 48px;
						font-size: 14px;
						border-bottom: 1px solid #E5E5E5;
						padding: 0 0 0 10px;
						@at-root &--txt {
							color: #333333;
              display: inline-block;
              width: 100%;
						}
					}
				}
			}
		}
	}
}
@media (max-width: 576px) {
	.nav-pc {
		display: none;
	}
	.nav-h5 {
		display: flex;
	}
}
</style>
