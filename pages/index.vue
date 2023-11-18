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
      <div class="index-two-title">为什么选择咨询  Dr.Terry Yen</div>
      <div class="index-two-content">
        <p>欢迎来到颜士鈞医师中国北京的诊室，我们致力于通过融合整形美容外科的科学和艺术来提供定制医疗服务，提供专业、人性、定制化的治疗方案， 致力于为您提供世界一流的服务，运用全球领先的技术满足您的美容及抗衰需求。</p>
        <p>师从高景恒教授、郝治华教授、王冀耕教授、王笃行教授、Dr. Jeffrey Klein、Dr. Michael Pasquale 等国内外知名整形美容专家，曾赴美、韩进修 5年。</p>
        <p>良好的医疗美容源于对人体生理构造和技术的深刻理解、对细节的关注、积累的临床经验和一丝不苟的执行。</p>
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
              <div class="small">Micro-plastic surgery</div>
            </div>
          </div>
          <div class="content">
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">微整形-面部细雕</div>
                <div class="content-item-txt--bottom">面部的组织如果失去支撑，易产生凹陷纹路，造成组织松垮下垂，从而让面部显得疲惫松垂</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">面部微调</div>
                <div class="content-item-tag--item">冻龄抗衰</div>
                <div class="content-item-tag--item">瘦脸</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">女性如何丰满面部微调</div>
                <div class="content-item-txt--bottom">瘦脸不一定要削骨，透过注射的方式微调轮廓，瞬间青春有感，快速修饰脸型</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">下巴塑形</div>
                <div class="content-item-tag--item">T区微调</div>
                <div class="content-item-tag--item">液态隆鼻</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">颜值微调</div>
                <div class="content-item-txt--bottom">自然美颜，透过注射的方式让五官及整体比例更加精致化，外表更有魅力。</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">午餐美容</div>
                <div class="content-item-tag--item">木偶纹</div>
                <div class="content-item-tag--item">法令纹</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">面部轮廓固定-T区塑形</div>
                <div class="content-item-txt--bottom">面部老化，产生凹陷纹路松垂，透过不动刀、微整注射对抗地心引力，组织提升</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">逆龄</div>
                <div class="content-item-tag--item">少女针</div>
                <div class="content-item-tag--item">童颜针</div>
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
              <div class="big">RFAL灵动雕塑</div>
              <div class="small">Aura Lifting</div>
            </div>
          </div>
          <div class="content">
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">以色列Inmode新型皮下热玛吉</div>
                <div class="content-item-txt--bottom">紧肤、溶脂、提升轻轻松松一次搞定，效果显著，随做随走。</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">微创治疗</div>
                <div class="content-item-tag--item">射频溶脂</div>
                <div class="content-item-tag--item">全程清醒</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">抗衰紧致黑科技-巧变“精英”美容术</div>
                <div class="content-item-txt--bottom">新型射频紧实面颈部轮廓，比做热玛吉还不痛，比打溶脂针还不肿</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">紧致轮廓</div>
                <div class="content-item-tag--item">瘦脸</div>
                <div class="content-item-tag--item">面部拉提</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">宝妈-拒绝垮脸发腮，轻松恢复幼态</div>
                <div class="content-item-txt--bottom">嘟嘟肉bye-bye，恢复英气感</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">嘟嘟肉</div>
                <div class="content-item-tag--item">V脸神器</div>
                <div class="content-item-tag--item">发腮</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.png" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">男性也需要，油腻双下巴退散！</div>
                <div class="content-item-txt--bottom">下巴多了一块肉，拍照看起来显胖又显老，透过RFAL轻松重拾英气感</div>
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
        <div class="index-four-title--left">媒体报道</div>
        <div class="index-four-title--right">Media Interview</div>
      </div>

      <ul class="index-four-magazine">
        <li>
          <img src="~/assets/images/index/index-zz1.png" alt="">
          <div>《健康美容》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz2.png" alt="">
          <div>《men's uno 风度》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz3.png" alt="">
          <div>《父母世界》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz4.png" alt="">
          <div>《men's uno 风度》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz5.png" alt="">
          <div>《时尚芭莎》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz6.png" alt="">
          <div>《时尚芭莎》</div>
        </li>
      </ul>

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
          <div class="index-four-content_item--txt">
            美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.
          </div>
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
          <div class="index-four-content_item--txt">
            美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.美国美容整形手术学院AICPS讲师韩国美容外科协會讲师东方国际美容外科协会讲师.
          </div>
          <div class="index-four-content_item--btn">阅读更多</div>
        </a-col>
      </a-row>

      <div class="index-four-text">
        <p>到目前为止，颜士钧医师已经成功服务了超过一万名全球客户，被CCTV、人民网、澎湃新闻、时尚芭莎、瑞丽杂志等多家官媒与知名媒体报道，在中国建立了良好的客户信任度与极佳的口碑。</p>
        <p>2022年颜士钧医师登上了荷兰金融日报，其对颜医师丰富的医学美容临床经验给予了极大肯定。</p>
      </div>

      <img class="index-four-pt" src="~/assets/images/index/index-pt.png" alt="">

      <ul class="index-four-intro">
        <li>
          <img src="~/assets/images/index/index-icon-meirong.png" alt="">
          <div>专业高品质</div>
          <p>颜医师提供专业、人性、定制化的医疗服务，致力于为您提供世界一流的服务，运用全球领先的技术、先进的医疗设备，完善的术后保养及疗程，定期与世界医美领域顶尖的医师交流技术，不断精进钻研发展适合中国人的医美疗程。</p>
        </li>

        <li>
          <img src="~/assets/images/index/index-icon-meirong.png" alt="">
          <div>安心保证</div>
          <p>颜医师谨慎选用合格之医疗设备、耗材、药品等，配合的医师与护理人员符合执行资格且不断进修训练，以提供安全完善的医疗服务；并对各种风险进行分析管理，提供品质管理的最高指导原则，确保品质管理系统能正常运作，并持续的适用与有效。</p>
        </li>

        <li>
          <img src="~/assets/images/index/index-icon-meirong.png" alt="">
          <div>服务到家</div>
          <p>近悦远来，止于至善，是颜医师的理念。在颜医师这治疗的结束并不是服务的结束，颜医师团队会细心陪伴、解答您的疑虑，让您省心，活出自信与美丽。</p>
        </li>

        <li>
          <img src="~/assets/images/index/index-icon-meirong.png" alt="">
          <div>价格透明</div>
          <p>在颜医师这里有价格透明有保障，童叟无欺，让您选择更省心。</p>
        </li>
      </ul>
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
            <div class="icon">
              <right-outlined/>
            </div>
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
            <div class="icon">
              <right-outlined/>
            </div>
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
            <div class="icon">
              <right-outlined/>
            </div>
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
            <div class="icon">
              <right-outlined/>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination, Autoplay} from 'swiper/modules'
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
      modules: [Pagination, Autoplay]
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

          .left {
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
            color: rgba(51, 51, 51, 0.85);
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
              box-sizing: border-box;
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

              @at-root &--bottom {
                height: 36px;
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
                width: 62px;
                text-align: center;
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
    @at-root &-magazine {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        margin-bottom: 30px;
        font-size: 13px;
        color: #000000;

        img {
          width: 380px;
          height: auto;
          vertical-align: middle;
          margin-bottom: 10px;
        }
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
    @at-root &-text {
      font-size: 14px;
      color: #313131;
      line-height: 1.5;
      margin: 57px 0 40px;
    }
    @at-root &-pt {
      width: 1200px;
      height: auto;
      vertical-align: middle;
      margin-bottom: 64px;
    }

    @at-root &-intro {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      li {
        width: 238px;
        text-align: center;

        img{
          height: 28px;
          width: auto;
          vertical-align: middle;
          margin-bottom: 10px;
        }

        div {
          font-size: 16px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 20px;
        }

        p {
          margin: 0;
          font-size: 14px;
          color: #333333;
          text-align: justify;
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

          .left {
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
              width: max-content !important;
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
      @at-root &-magazine {
        li {
          margin-bottom: 30px;
          font-size: 13px;
          color: #000000;

          img {
            width: 160px;
            height: auto;
            vertical-align: middle;
            margin-bottom: 10px;
          }
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
      @at-root &-text {
        width: 100%;
        font-size: 14px;
        color: #313131;
      }
      @at-root &-pt {
        width: 100%;
      }
      @at-root &-intro {
        flex-wrap: wrap;

        li {
          width: 160px;

          img{
            height: 28px;
          }

          div {
            font-size: 16px;
          }

          p {
            font-size: 14px;
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
