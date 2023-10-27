<template>
	<div class="index">
		<swiper
			class="index-one"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
			:pagination="{ clickable: true }"
			:modules="modules"
			:loop="true"
		>
			<swiper-slide>
				<a-row>
					<a-col :xs="0" :sm="24">
						<img src="~/assets/images/index/index-banner-pc.png" alt="">
					</a-col>
					<a-col :xs="24" :sm="0">
						<img src="~/assets/images/index/index-banner-h5.png" alt="">
					</a-col>
				</a-row>
			</swiper-slide>
			<swiper-slide>
				<a-row>
					<a-col :xs="0" :sm="24">
						<img src="~/assets/images/index/index-banner-pc.png" alt="">
					</a-col>
					<a-col :xs="24" :sm="0">
						<img src="~/assets/images/index/index-banner-h5.png" alt="">
					</a-col>
				</a-row>
			</swiper-slide>
		</swiper>
		<div class="index-two">
			<div class="index-two-title">为什么选择咨询 Dr.Terry Yen</div>
			<div class="index-two-content">
				<p>Dr.Terry Yen毕业于北京大学医学系临床,师从高景恒教授、郝治华教授、王冀耕教授、Dr.Jeffrey Klein、 Dr. Sydney Coleman、Dr. Michael Pasquale等国内外知名整形美容及皮肤科专家，赴美、韩进修，在美国及中国台湾都有丰富临床经验。多次在顶级学术会议中担任演讲嘉宾及参与多本整形美容医学教科书翻译出版。</p>
				<p>擅长美式显微吸脂（Tumescent microcannula liposculpture）、男性女乳症微创治疗、特殊人群减重指导、运动及再生医学。同时在两岸整型美容核心期刊发表论文数篇，研究课题以美式显微吸脂的临床运用、男性女乳症、自体脂肪为主。</p>
			</div>
			<div class="index-two-btn">
				<img src="~/assets/images/index/index-two-btn.png" alt="">
			</div>
			<div class="index-two-img">
				<a-row>
					<a-col :xs="0" :sm="12" class="one">
						<div class="left">
							<div class="top">
								<img src="~/assets/images/index/two-0-left-top.png" alt="">
							</div>
							<div class="bottom">
								<img src="~/assets/images/index/two-0-left-bottom.png" alt="">
							</div>
						</div>
						<div class="right">
							<img src="~/assets/images/index/two-0-right.png" alt="">
						</div>
					</a-col>
					<a-col :xs="0" :sm="12" class="two">
						<div class="top">
							<div class="left">
								<img src="~/assets/images/index/two-1-top-left.png" alt="">
							</div>
							<div class="right">
								<img src="~/assets/images/index/two-1-top-right.png" alt="">
							</div>
						</div>
						<div class="bottom">
							<img src="~/assets/images/index/two-1-bottom.png" alt="">
						</div>
					</a-col>
				</a-row>
			</div>
		</div>
		<div class="index-two-h5">
			<div class="one">
				<div class="left">
					<div class="top">
						<img src="~/assets/images/index/two-0-left-top.png" alt="">
					</div>
					<div class="bottom">
						<img src="~/assets/images/index/two-0-left-bottom.png" alt="">
					</div>
				</div>
				<div class="right">
					<img src="~/assets/images/index/two-0-right.png" alt="">
				</div>
			</div>
			<div class="two">
				<div class="top">
					<div class="left">
						<img src="~/assets/images/index/two-1-top-left.png" alt="">
					</div>
					<div class="right">
						<img src="~/assets/images/index/two-1-top-right.png" alt="">
					</div>
				</div>
				<div class="bottom">
					<img src="~/assets/images/index/two-1-bottom.png" alt="">
				</div>
			</div>
		</div>
		<div class="index-three">
			<div class="index-three-title">
				Terry能为您做什么
			</div>
			<div class="index-three-list">
				<div class="index-three-list--item">
					<div class="title">
						<div class="left">
							<div class="big">微整形</div>
							<div class="small">TML xizhi</div>
						</div>
						<div class="right">
							阅读更多
						</div>
					</div>
					<div class="content">
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
					</div>
					<div class="content h5">
						<swiper
							:slides-per-view="'auto'"
							:space-between="20"
						>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="index-three-list--item">
					<div class="title">
						<div class="left">
							<div class="big">微整形</div>
							<div class="small">TML xizhi</div>
						</div>
						<div class="right">
							阅读更多
						</div>
					</div>
					<div class="content">
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
					</div>
					<div class="content h5">
						<swiper
							:slides-per-view="'auto'"
							:space-between="20"
						>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="index-three-list--item">
					<div class="title">
						<div class="left">
							<div class="big">微整形</div>
							<div class="small">TML xizhi</div>
						</div>
						<div class="right">
							阅读更多
						</div>
					</div>
					<div class="content">
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
					</div>
					<div class="content h5">
						<swiper
							:slides-per-view="'auto'"
							:space-between="20"
						>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="index-three-list--item">
					<div class="title">
						<div class="left">
							<div class="big">微整形</div>
							<div class="small">TML xizhi</div>
						</div>
						<div class="right">
							阅读更多
						</div>
					</div>
					<div class="content">
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
						<div class="content-item">
							<div class="content-item-img">
								<img src="~/assets/images/index/three-0-0.png" alt="">
							</div>
							<div class="content-item-txt">
								<div class="content-item-txt--top">微整形-面部细雕</div>
								<div class="content-item-txt--bottom">适用：提拉，填充</div>
							</div>
							<div class="content-item-tag">
								<div class="content-item-tag--item">25-35岁</div>
								<div class="content-item-tag--item">面部</div>
							</div>
						</div>
					</div>
					<div class="content h5">
						<swiper
							:slides-per-view="'auto'"
							:space-between="20"
						>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="content-item-h5">
									<div class="content-item-h5-img">
										<img src="~/assets/images/index/three-0-0.png" alt="">
									</div>
									<div class="content-item-h5-txt">
										<div class="content-item-h5-txt--top">微整形-面部细雕</div>
										<div class="content-item-h5-txt--bottom">适用：提拉，填充</div>
									</div>
									<div class="content-item-h5-tag">
										<div class="content-item-h5-tag--item">25-35岁</div>
										<div class="content-item-h5-tag--item">面部</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</div>
		</div>
		<div class="index-four">
			<div class="index-four-title">
				<div class="index-four-title--left">媒体视频</div>
				<div class="index-four-title--right">News</div>
			</div>
			<a-row class="index-four-content">
				<a-col class="index-four-content_item" :xs="24" :sm="12">
					<div class="index-four-content_item--img">
						<img src="~/assets/images/index/news-test.png" alt="">
					</div>
					<div class="index-four-content_item--title">
						<div class="left">张女士张女士张女士:</div>
						<div class="right">- 享受美体的快乐…</div>
					</div>
					<div class="index-four-content_item--time">2022年2月19日 作者terry yan</div>
					<div class="index-four-content_item--txt">美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.</div>
					<div class="index-four-content_item--btn">阅读更多</div>
				</a-col>
				<a-col class="index-four-content_item" :xs="24" :sm="12">
					<div class="index-four-content_item--img">
						<img src="~/assets/images/index/news-test.png" alt="">
					</div>
					<div class="index-four-content_item--title">
						<div class="left">张女士张女士张女士:</div>
						<div class="right">- 享受美体的快乐…</div>
					</div>
					<div class="index-four-content_item--time">2022年2月19日 作者terry yan</div>
					<div class="index-four-content_item--txt">美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.</div>
					<div class="index-four-content_item--btn">阅读更多</div>
				</a-col>
			</a-row>
		</div>
		<div class="index-five">
			<a-row class="index-five-content" :gutter="[60, 60]">
				<a-col class="index-five-content_item" :xs="12" :sm="6">
					<div class="index-five-content_item--top">
						<div class="icon">
							<img src="~/assets/images/index/test-icon.png" alt="">
						</div>
						<div class="txt">随做随走</div>
					</div>
					<div class="index-five-content_item--center">随做随走，手术后可以立即工作，不影响生活</div>
					<div class="index-five-content_item--bottom">
						<div class="txt">了解更多</div>
						<div class="icon"><right-outlined /></div>
					</div>
				</a-col>
				<a-col class="index-five-content_item" :xs="12" :sm="6">
					<div class="index-five-content_item--top">
						<div class="icon">
							<img src="~/assets/images/index/test-icon.png" alt="">
						</div>
						<div class="txt">随做随走</div>
					</div>
					<div class="index-five-content_item--center">随做随走，手术后可以立即工作，不影响生活</div>
					<div class="index-five-content_item--bottom">
						<div class="txt">了解更多</div>
						<div class="icon"><right-outlined /></div>
					</div>
				</a-col>
				<a-col class="index-five-content_item" :xs="12" :sm="6">
					<div class="index-five-content_item--top">
						<div class="icon">
							<img src="~/assets/images/index/test-icon.png" alt="">
						</div>
						<div class="txt">随做随走</div>
					</div>
					<div class="index-five-content_item--center">随做随走，手术后可以立即工作，不影响生活</div>
					<div class="index-five-content_item--bottom">
						<div class="txt">了解更多</div>
						<div class="icon"><right-outlined /></div>
					</div>
				</a-col>
				<a-col class="index-five-content_item" :xs="12" :sm="6">
					<div class="index-five-content_item--top">
						<div class="icon">
							<img src="~/assets/images/index/test-icon.png" alt="">
						</div>
						<div class="txt">随做随走</div>
					</div>
					<div class="index-five-content_item--center">随做随走，手术后可以立即工作，不影响生活</div>
					<div class="index-five-content_item--bottom">
						<div class="txt">了解更多</div>
						<div class="icon"><right-outlined /></div>
					</div>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
export default {
	components: {
		Swiper,
		SwiperSlide
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper)
		};
		const onSlideChange = () => {
			console.log('slide change')
		};
		return {
			onSwiper,
			onSlideChange,
			modules: [ Pagination, Autoplay ]
		}
	}
}

</script>

<style lang="scss" scoped>
@mixin bg {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
.index {
	width: 100%;
	position: relative;
	box-sizing: border-box;
	overflow-x: hidden;
	@at-root &-one {
		img {
			width: 100%;
		}
		:deep(.swiper-pagination-bullet) {
			width: 100px;
			height: 4px;
			background-color: #ffffff;
			border-radius: unset;
			opacity: 0.41;
			&.swiper-pagination-bullet-active {
				opacity: 1;
			}
		}
	}
	@at-root &-two {
		box-sizing: border-box;
		width: 100%;
		height: 820px;
		@include bg;
		background-image: url("~/assets/images/index/index-two-bg-pc.png");
		padding: 50px 0 60px 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		@at-root &-title {
			font-size: 36px;
			color: #333333;
		}
		@at-root &-content {
			padding: 33px 460px 0 460px;
			font-size: 15px;
			color: rgba(68, 68, 68, 0.85);
		}
		@at-root &-btn {
			width: 180px;
			height: 68px;
			margin: 15px 0 28px 0;
			img {
				width: 100%;
				height: 100%;
			}
		}
		@at-root &-img {
			.one {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding-right: 5px;
				.left {
					margin-right: 10px;
					.top {
						margin-bottom: 10px;
					}
					img {
						width: 280px;
						height: 190px;
					}
				}
				.right {
					img {
						width: 280px;
						height: 390px;
					}
				}
			}
			.two {
				padding-left: 5px;
				.top {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-bottom: 10px;
					.left{
						margin-right: 10px;
					}
					img {
						width: 280px;
						height: 190px;
					}
				}
				.bottom {
					img {
						width: 570px;
						height: 190px;
					}
				}
			}
		}
	}
	@at-root &-two-h5 {
		display: none;
	}
	@at-root &-three {
		padding: 50px 360px;
		background-color: rgba(232, 232, 232, 1);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		@at-root &-title {
			font-size: 36px;
			font-weight: 300;
			color: #333333;
			line-height: 50px;
		}
		@at-root &-list {
			width: 100%;
			@at-root &--item {
				margin-bottom: 40px;
				.title {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left {
						display: flex;
						justify-content: flex-end;
						align-items: baseline;
						font-size: 12px;
						font-weight: 400;
						color: #000000;
						.big {
							font-size: 24px;
							margin-right: 12px;
						}
					}
					.right {
						font-size: 13px;
						font-weight: 300;
						color: rgba(51,51,51,0.85);
						line-height: 18px;
						position: relative;
						&:after {
							content: '';
							position: absolute;
							width: 100%;
							height: 2px;
							bottom: -4px;
							left: 0;
							background-color: rgba(221, 163, 101, 1);
						}
					}
				}
				.content {
					display: flex;
					justify-content: space-around;
					align-items: center;
					margin-top: 20px;
					&.h5 {
						display: none;
					}
					@at-root &-item {
						background: #FFFFFF;
						border-radius: 8px;
						padding: 8px;
						margin-right: 4px;
						@at-root &-img {
							width: 282px;
							height: 158px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						@at-root &-txt {
							margin-top: 10px;
							font-size: 13px;
							font-weight: 400;
							color: #666666;
							line-height: 18px;
							@at-root &--top {
								font-size: 16px;
								font-weight: 600;
								color: #000000;
								line-height: 22px;
							}
						}
						@at-root &-tag {
							display: flex;
							justify-content: flex-start;
							align-items: center;
							margin: 10px 0;
							@at-root &--item {
								background: #D8D8D8;
								border-radius: 4px;
								font-size: 12px;
								color: rgba(0, 0, 0, 0.6);
								height: 24px;
								line-height: 24px;
								padding: 0 7px;
								margin-right: 10px;
							}
						}
					}
					@at-root &-item-h5 {
						background: #FFFFFF;
						border-radius: 8px;
						padding: 8px;
						margin-right: 4px;
						@at-root &-img {
							width: 282px;
							height: 158px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						@at-root &-txt {
							margin-top: 10px;
							font-size: 13px;
							font-weight: 400;
							color: #666666;
							line-height: 18px;
							@at-root &--top {
								font-size: 16px;
								font-weight: 600;
								color: #000000;
								line-height: 22px;
							}
						}
						@at-root &-tag {
							display: flex;
							justify-content: flex-start;
							align-items: center;
							margin: 10px 0;
							@at-root &--item {
								background: #D8D8D8;
								border-radius: 4px;
								font-size: 12px;
								color: rgba(0, 0, 0, 0.6);
								height: 24px;
								line-height: 24px;
								padding: 0 7px;
								margin-right: 10px;
							}
						}
					}
				}
			}
		}
	}
	@at-root &-four {
		background-color: #ffffff;
		padding: 0 360px 80px 360px;
		@at-root &-title {
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			padding: 30px 0;
			@at-root &--left {
				font-size: 40px;
				color: #333333;
				margin-right: 10px;
			}
			@at-root &--right {
				font-size: 24px;
				color: #666666;
			}
		}
		@at-root &-content {
			@at-root &_item {
				padding-right: 20px;
				&:last-child {
					padding: 0 0 0 20px;
				}
				@at-root &--img {
					width: 580px;
					height: 306px;
					img {
						width: 100%;
						height: 100%;
					}
				}
				@at-root &--title {
					margin: 40px 0 24px 0;
					font-size: 13px;
					color: #333333;
					line-height: 1.2;
					display: flex;
					justify-content: flex-start;
					align-items: flex-end;
					.left {
						font-size: 16px;
						font-weight: bold;
						margin-right: 8px;
					}
				}
				@at-root &--time {
					font-size: 13px;
					color: rgba(68, 68, 68, 0.85);
					margin-bottom: 20px;
				}
				@at-root &--txt {
					font-size: 15px;
					color: rgba(68, 68, 68, 0.85);
					margin-bottom: 38px;
				}
				@at-root &--btn {
					font-size: 13px;
					color: rgba(68, 68, 68, 0.85);
					position: relative;
					width: max-content;
					&:after {
						content: '';
						width: 100%;
						height: 2px;
						position: absolute;
						left: 0;
						bottom: -2px;
						background-color: rgba(221, 163, 101, 1);
					}
				}
			}
		}
	}
	@at-root &-five {
		background-color: #F3F3F3;
		padding: 60px 360px;
		@at-root &-content {
			@at-root &_item {
				@at-root &--top {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin-bottom: 20px;
					.icon {
						width: 28px;
						height: 28px;
						margin-bottom: 10px;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.txt {
						font-size: 16px;
						font-weight: 600;
						color: #333333;
						line-height: 22px;
					}
				}
				@at-root &--center {
					font-size: 14px;
					font-weight: 400;
					color: #333333;
					line-height: 20px;
					margin-bottom: 10px;
					text-align: center;
				}
				@at-root &--bottom {
					font-size: 14px;
					font-weight: 400;
					color: #333333;
					line-height: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					.txt {
						margin-right: 10px;
					}
				}
			}
		}
	}
	
}
@media (max-width: 576px) {
	.index {
		@at-root &-one {
			:deep(.swiper-pagination-bullet) {
				width: 50px;
				height: 2px;
			}
		}
		@at-root &-two {
			height: 470px;
			background-image: url("~/assets/images/index/index-two-bg-h5.png");
			padding: 20px 0 0 0;
			@at-root &-title {
				font-size: 20px;
			}
			@at-root &-content {
				padding: 20px 20px 0 20px;
				font-size: 14px;
			}
			@at-root &-btn {
				margin-top: 10px;
				width: 180px;
				height: 68px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			@at-root &-img {
				display: none;
			}
		}
		@at-root &-two-h5 {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			padding-bottom: 15px;
			.one {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.left {
					margin-right: 6px;
					.top {
						margin-bottom: 7px;
					}
					img {
						width: 174px;
						height: 117px;
					}
				}
				.right {
					img {
						width: 174px;
						height: 241px;
					}
				}
			}
			.two {
				margin-top: 8px;
				.top {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-bottom: 7px;
					.left{
						margin-right: 7px;
					}
					img {
						width: 174px;
						height: 117px;
					}
				}
				.bottom {
					img {
						width: 354px;
						height: 117px;
					}
				}
			}
		}
		@at-root &-three {
			padding: 30px 0 20px 20px;
			@at-root &-title {
				font-size: 20px;
				margin-bottom: 40px;
				line-height: 1.2;
			}
			@at-root &-list {
				width: 100%;
				@at-root &--item {
					margin-bottom: 40px;
					.title {
						display: flex;
						justify-content: center;
						align-items: center;
						.left {
							display: flex;
							justify-content: flex-end;
							align-items: baseline;
							font-size: 12px;
							font-weight: 400;
							color: #000000;
							.big {
								font-size: 24px;
								margin-right: 12px;
							}
						}
						.right {
							display: none;
						}
					}
					.content {
						margin-top: 20px;
						display: none;
						&.h5 {
							display: flex;
							:deep(.swiper-slide) {
								width: auto;
							}
						}
						@at-root &-item {
							background: #FFFFFF;
							border-radius: 8px;
							padding: 8px;
							flex: 1;
							flex-shrink: 0;
							width: max-content!important;
						}
					}
				}
			}
		}
		@at-root &-four {
			background-color: #ffffff;
			padding: 0 20px;
			@at-root &-title {
				padding: 30px 0 10px 0;
				justify-content: center;
				@at-root &--left {
					font-size: 24px;
					color: #000000;
					margin-right: 10px;
				}
				@at-root &--right {
					font-size: 12px;
					color: #000000;
					padding-bottom: 2px;
				}
			}
			@at-root &-content {
				@at-root &_item {
					padding: 0;
					margin-bottom: 35px;
					&:last-child {
						padding: 0;
					}
					@at-root &--img {
						width: 100%;
						height: max-content;
						img {
							width: 100%;
							height: auto;
						}
					}
					@at-root &--title {
						margin: 25px 0 10px 0;
						font-size: 13px;
						line-height: 1.2;
						.left {
							font-size: 16px;
							font-weight: bold;
							margin-right: 8px;
						}
					}
					@at-root &--time {
						font-size: 13px;
						color: rgba(68, 68, 68, 0.85);
						margin-bottom: 10px;
					}
					@at-root &--txt {
						font-size: 15px;
						color: rgba(68, 68, 68, 0.85);
						margin-bottom: 15px;
					}
					@at-root &--btn {
						font-size: 13px;
						color: rgba(68, 68, 68, 0.85);
						position: relative;
						width: max-content;
						&:after {
							content: '';
							width: 100%;
							height: 2px;
							position: absolute;
							left: 0;
							bottom: -2px;
							background-color: rgba(221, 163, 101, 1);
						}
					}
				}
			}
		}
		@at-root &-five {
			background-color: #F3F3F3;
			padding: 60px 10px;
			@at-root &-content {
				@at-root &_item {
					@at-root &--top {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-bottom: 5px;
						.icon {
							width: 19px;
							height: 19px;
							margin-bottom: 5px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.txt {
							font-size: 16px;
							font-weight: 600;
							color: #333333;
							line-height: 22px;
						}
					}
					@at-root &--center {
						font-size: 14px;
						font-weight: 400;
						color: #333333;
						line-height: 20px;
						margin-bottom: 10px;
						text-align: center;
					}
					@at-root &--bottom {
						font-size: 14px;
						font-weight: 400;
						color: #333333;
						line-height: 20px;
						display: flex;
						justify-content: center;
						align-items: center;
						.txt {
							margin-right: 10px;
						}
					}
				}
			}
		}
	}
}
@supports (bottom: env(safe-area-inset-bottom)) {
	.index {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
}
</style>
