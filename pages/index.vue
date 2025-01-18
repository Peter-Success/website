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
            <img @click="gotoGyys" src="~/assets/images/index/index-banner-pc.jpg" alt="">
          </a-col>
          <a-col :xs="24" :sm="0">
            <img @click="gotoGyys" src="~/assets/images/index/index-banner-h5.jpg" alt="">
          </a-col>
        </a-row>
      </swiper-slide>
      <swiper-slide>
        <a-row>
          <a-col :xs="0" :sm="24">
            <img src="~/assets/images/index/index-banner1-pc.jpg" alt="">
          </a-col>
          <a-col :xs="24" :sm="0">
            <img src="~/assets/images/index/index-banner1-h5.jpg" alt="">
          </a-col>
        </a-row>
      </swiper-slide>
    </swiper>
    <div class="index-two">
      <div class="index-two-title">为什么选择咨询 Dr.Terry Yen</div>
      <div class="index-two-content">
        <p>欢迎来到颜士鈞医师中国北京的诊室，我们致力于通过融合整形美容外科的科学和艺术来提供定制医疗服务，提供专业、人性、定制化的治疗方案， 致力于为您提供世界一流的服务，运用全球领先的技术满足您的美容及抗衰需求。</p>
        <p>师从高景恒教授、王冀耕教授、Dr. Justin Hao、Dr. Jeffrey Klein、Dr. Michael Pasquale 等国内外知名整形美容专家，曾赴美、韩进修 5年。</p>
        <p>良好的医疗美容源于对人体生理构造和技术的深刻理解、对细节的关注、积累的临床经验和一丝不苟的执行。</p>
      </div>
      <div class="index-two-btn">
        <img @click="gotoLxzx" src="~/assets/images/index/index-two-btn.png" alt="">
      </div>
      <div class="index-two-img">
        <a-row>
          <a-col :xs="0" :sm="12" class="one">
            <div class="left">
              <div class="top">
                <img src="~/assets/images/index/two-0-left-top.jpg" alt="">
              </div>
              <div class="bottom">
                <img src="~/assets/images/index/two-0-left-bottom.jpg" alt="">
              </div>
            </div>
            <div class="right">
              <img src="~/assets/images/index/two-0-right.jpg" alt="">
            </div>
          </a-col>
          <a-col :xs="0" :sm="12" class="two">
            <div class="top">
              <div class="left">
                <img src="~/assets/images/index/two-1-top-left.jpg" alt="">
              </div>
              <div class="right">
                <img src="~/assets/images/index/two-1-top-right.jpg" alt="">
              </div>
            </div>
            <div class="bottom">
              <img src="~/assets/images/index/two-1-bottom.jpg" alt="">
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="index-two-h5">
      <div class="one">
        <div class="left">
          <div class="top">
            <img src="~/assets/images/index/two-0-left-top.jpg" alt="">
          </div>
          <div class="bottom">
            <img src="~/assets/images/index/two-0-left-bottom.jpg" alt="">
          </div>
        </div>
        <div class="right">
          <img src="~/assets/images/index/two-0-right.jpg" alt="">
        </div>
      </div>
      <div class="two">
        <div class="top">
          <div class="left">
            <img src="~/assets/images/index/two-1-top-left.jpg" alt="">
          </div>
          <div class="right">
            <img src="~/assets/images/index/two-1-top-right.jpg" alt="">
          </div>
        </div>
        <div class="bottom">
          <img src="~/assets/images/index/two-1-bottom.jpg" alt="">
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
            <div @click="gotoWzx" class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-0.jpg" alt="">
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
                <img src="~/assets/images/index/three-0-1.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">瑜伽大使🧘逐光逆龄初体验</div>
                <div class="content-item-txt--bottom">有面部松垂或嘴边肉困扰吗？透过微整拉提，30分钟轻轻松松回复迷人神采！</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">微整拉提</div>
                <div class="content-item-tag--item">逆转肌龄</div>
                <div class="content-item-tag--item">注射提升</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-2.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">颜值微调</div>
                <div class="content-item-txt--bottom">针对「面部折叠度」、「眉眼立体度」及「颌面立体度」进行微调，让你美得自然不留痕迹。</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">轮廓打造</div>
                <div class="content-item-tag--item">法令纹</div>
                <div class="content-item-tag--item">微Do</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-0-3.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">水嫩宝妈逆龄重回颜值巅峰</div>
                <div class="content-item-txt--bottom">摆脱憔悴疲倦感，回复高透氧少女漾 ！</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">少女针</div>
                <div class="content-item-tag--item">童颜针</div>
                <div class="content-item-tag--item">微整形</div>
              </div>
            </div>
          </div>
          <div class="content h5">
            <swiper
                :slides-per-view="'auto'"
                :space-between="20"
            >
              <swiper-slide>
                <div @click="gotoWzx" class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-0-0.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">微整形-面部细雕</div>
                    <div class="content-item-h5-txt--bottom">面部的组织如果失去支撑，易产生凹陷纹路，造成组织松垮下垂，从而让面部显得疲惫松垂</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">面部微调</div>
                    <div class="content-item-h5-tag--item">冻龄抗衰</div>
                    <div class="content-item-h5-tag--item">瘦脸</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-0-1.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">瑜伽大使🧘逐光逆龄初体验</div>
                    <div class="content-item-h5-txt--bottom">有面部松垂或嘴边肉困扰吗？透过微整拉提，30分钟轻轻松松回复迷人神采！</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">微整拉提</div>
                    <div class="content-item-h5-tag--item">逆转肌龄</div>
                    <div class="content-item-h5-tag--item">注射提升</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-0-2.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">颜值微调</div>
                    <div class="content-item-h5-txt--bottom">针对「面部折叠度」、「眉眼立体度」及「颌面立体度」进行微调，让你美得自然不留痕迹。</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">轮廓打造</div>
                    <div class="content-item-h5-tag--item">法令纹</div>
                    <div class="content-item-h5-tag--item">微Do</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-0-3.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">水嫩宝妈逆龄重回颜值巅峰</div>
                    <div class="content-item-h5-txt--bottom">摆脱憔悴疲倦感，回复高透氧少女漾 ！</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">少女针</div>
                    <div class="content-item-h5-tag--item">童颜针</div>
                    <div class="content-item-h5-tag--item">微整形</div>
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
            <div @click="gotoLdds" class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-1-0.jpg" alt="">
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
                <img src="~/assets/images/index/three-1-1.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">职场女精英精致下颌线重塑</div>
                <div class="content-item-txt--bottom">拥有年轻时的柔顺俐落又明显的下颌线会使整体脸形线条柔和，更有女人味！</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">下颌线</div>
                <div class="content-item-tag--item">面部拉提</div>
                <div class="content-item-tag--item">瘦脸</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-1-2.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">卡哇伊宝妈拯救垂垂下半脸</div>
                <div class="content-item-txt--bottom">Inmode Embrace RF微创治疗可轻松实现瘦脸及轮廓线收紧的效果</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">不动刀</div>
                <div class="content-item-tag--item">针眼伤口</div>
                <div class="content-item-tag--item">嘟嘟肉</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-1-3.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">初老油腻发腮怎解？</div>
                <div class="content-item-txt--bottom">社会在走，颜值要有。让你老气变帅气，利落更有型。</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">男性微整</div>
                <div class="content-item-tag--item">双下巴</div>
                <div class="content-item-tag--item">硬汉下颌线</div>
              </div>
            </div>
          </div>
          <div class="content h5">
            <swiper
                :slides-per-view="'auto'"
                :space-between="20"
            >
              <swiper-slide>
                <div @click="gotoLdds" class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-1-0.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">以色列Inmode新型皮下热玛吉</div>
                    <div class="content-item-h5-txt--bottom">紧肤、溶脂、提升轻轻松松一次搞定，效果显著，随做随走。</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">微创治疗</div>
                    <div class="content-item-h5-tag--item">射频溶脂</div>
                    <div class="content-item-h5-tag--item">全程清醒</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-1-1.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">职场女精英精致下颌线重塑</div>
                    <div class="content-item-h5-txt--bottom">拥有年轻时的柔顺俐落又明显的下颌线会使整体脸形线条柔和，更有女人味！</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">下颌线</div>
                    <div class="content-item-h5-tag--item">面部拉提</div>
                    <div class="content-item-h5-tag--item">瘦脸</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-1-2.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">卡哇伊宝妈拯救垂垂下半脸</div>
                    <div class="content-item-h5-txt--bottom">Inmode Embrace RF微创治疗可轻松实现瘦脸及轮廓线收紧的效果</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">不动刀</div>
                    <div class="content-item-h5-tag--item">针眼伤口</div>
                    <div class="content-item-h5-tag--item">嘟嘟肉</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-1-3.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">初老油腻发腮怎解？</div>
                    <div class="content-item-h5-txt--bottom">社会在走，颜值要有。让你老气变帅气，利落更有型。</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">男性微整</div>
                    <div class="content-item-h5-tag--item">双下巴</div>
                    <div class="content-item-h5-tag--item">硬汉下颌线</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="index-three-list--item">
          <div class="title">
            <div class="left">
              <div class="big">TML美式显微脂肪雕塑</div>
              <div class="small">Tumescent Liposculpture</div>
            </div>
          </div>
          <div class="content">
            <div @click="gotoTMLms" class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-2-0.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">世界公认最安全有效的形体雕塑方式</div>
                <div class="content-item-txt--bottom">TML美式显微脂肪雕塑源自美国，借由移除你身体里面的不完美，雕刻出被埋藏的曼妙的形体。</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">全程清醒</div>
                <div class="content-item-tag--item">微创治疗</div>
                <div class="content-item-tag--item">随做随走</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-2-1.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">TML美式显微脂肪雕塑术</div>
                <div class="content-item-txt--bottom">每块石头内都蕴藏着一优美雕塑，雕塑家的使命就是发现它。</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">蚂蚁腰</div>
                <div class="content-item-tag--item">巴掌腰</div>
                <div class="content-item-tag--item">S曲线</div>
                <div class="content-item-tag--item">漏斗身形</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-2-2.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">TML美式显微脂肪雕塑术</div>
                <div class="content-item-txt--bottom">研究表明的腰臀比例0.7的女性最具性吸引力，可以透过一些“后天的努力”来获得婀娜多姿的S曲线</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">瘦腰</div>
                <div class="content-item-tag--item">瘦腰</div>
                <div class="content-item-tag--item">曲线美</div>
                <div class="content-item-tag--item">魔鬼腰臀比</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-2-3.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">精致身型打造</div>
                <div class="content-item-txt--bottom">告别圣诞树身型，让你的肉肉们再也不勒！</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">蝴蝶袖</div>
                <div class="content-item-tag--item">副乳祛除</div>
                <div class="content-item-tag--item">后背</div>
              </div>
            </div>
          </div>
          <div class="content h5">
            <swiper
                :slides-per-view="'auto'"
                :space-between="20"
            >
              <swiper-slide>
                <div @click="gotoTMLms" class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-2-0.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">世界公认最安全有效的形体雕塑方式</div>
                    <div class="content-item-h5-txt--bottom">TML美式显微脂肪雕塑源自美国，借由移除你身体里面的不完美，雕刻出被埋藏的曼妙的形体。</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">全程清醒</div>
                    <div class="content-item-h5-tag--item">微创治疗</div>
                    <div class="content-item-h5-tag--item">随做随走</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-2-1.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">TML美式显微脂肪雕塑术</div>
                    <div class="content-item-h5-txt--bottom">每块石头内都蕴藏着一优美雕塑，雕塑家的使命就是发现它。</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">蚂蚁腰</div>
                    <div class="content-item-h5-tag--item">巴掌腰</div>
                    <div class="content-item-h5-tag--item">S曲线</div>
                    <div class="content-item-h5-tag--item">漏斗身形</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-2-2.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">TML美式显微脂肪雕塑术</div>
                    <div class="content-item-h5-txt--bottom">研究表明的腰臀比例0.7的女性最具性吸引力，可以透过一些“后天的努力”来获得婀娜多姿的S曲线</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">瘦腰</div>
                    <div class="content-item-h5-tag--item">瘦腰</div>
                    <div class="content-item-h5-tag--item">曲线美</div>
                    <div class="content-item-h5-tag--item">魔鬼腰臀比</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-2-3.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">精致身型打造</div>
                    <div class="content-item-h5-txt--bottom">告别圣诞树身型，让你的肉肉们再也不勒！</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">蝴蝶袖</div>
                    <div class="content-item-h5-tag--item">副乳祛除</div>
                    <div class="content-item-h5-tag--item">后背</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="index-three-list--item">
          <div class="title">
            <div class="left">
              <div class="big">美式微创男乳祛除术</div>
              <div class="small">Scarless Breast Removal</div>
            </div>
          </div>
          <div class="content">
            <div @click="gotoNxnr" class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-3-0.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">男性女乳症治疗</div>
                <div class="content-item-txt--bottom">利用新型微创术式同时祛除脂肪及乳腺组织，不留疤痕、收紧胸部肌肤</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">针眼伤口</div>
                <div class="content-item-tag--item">随做随走</div>
                <div class="content-item-tag--item">无需穿塑身衣</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-3-1.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">不瞒你说,男人也有罩杯的烦恼</div>
                <div class="content-item-txt--bottom">文青艺术男体验美式微创男乳祛除术</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">局部麻醉</div>
                <div class="content-item-tag--item">无需拆线</div>
                <div class="content-item-tag--item">皮肤自然回缩</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-3-2.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">挥别女乳症 重建自信胸膛</div>
                <div class="content-item-txt--bottom">厌倦穿着宽松衣物遮遮掩掩吗？只要2小时，轻松让你走路抬头挺胸</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">胸廓塑型</div>
                <div class="content-item-tag--item">激凸</div>
                <div class="content-item-tag--item">乳腺祛除</div>
              </div>
            </div>
            <div class="content-item">
              <div class="content-item-img">
                <img src="~/assets/images/index/three-3-3.jpg" alt="">
              </div>
              <div class="content-item-txt">
                <div class="content-item-txt--top">健身到位，但胸型不完美怎么办？</div>
                <div class="content-item-txt--bottom">雕琢角斗士般胸大肌</div>
              </div>
              <div class="content-item-tag">
                <div class="content-item-tag--item">胸肌塑形</div>
                <div class="content-item-tag--item">无痕治疗</div>
                <div class="content-item-tag--item">方块胸肌</div>
              </div>
            </div>
          </div>
          <div class="content h5">
            <swiper
                :slides-per-view="'auto'"
                :space-between="20"
            >
              <swiper-slide>
                <div @click="gotoNxnr" class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-3-0.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">男性女乳症治疗</div>
                    <div class="content-item-h5-txt--bottom">利用新型微创术式同时祛除脂肪及乳腺组织，不留疤痕、收紧胸部肌肤</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">针眼伤口</div>
                    <div class="content-item-h5-tag--item">随做随走</div>
                    <div class="content-item-h5-tag--item">无需穿塑身衣</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-3-1.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">不瞒你说,男人也有罩杯的烦恼</div>
                    <div class="content-item-h5-txt--bottom">文青艺术男体验美式微创男乳祛除术</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">局部麻醉</div>
                    <div class="content-item-h5-tag--item">无需拆线</div>
                    <div class="content-item-h5-tag--item">皮肤自然回缩</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-3-2.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">挥别女乳症 重建自信胸膛</div>
                    <div class="content-item-h5-txt--bottom">厌倦穿着宽松衣物遮遮掩掩吗？只要2小时，轻松让你走路抬头挺胸</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">胸廓塑型</div>
                    <div class="content-item-h5-tag--item">激凸</div>
                    <div class="content-item-h5-tag--item">乳腺祛除</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-item-h5">
                  <div class="content-item-h5-img">
                    <img src="~/assets/images/index/three-3-3.jpg" alt="">
                  </div>
                  <div class="content-item-h5-txt">
                    <div class="content-item-h5-txt--top">健身到位，但胸型不完美怎么办？</div>
                    <div class="content-item-h5-txt--bottom">雕琢角斗士般胸大肌</div>
                  </div>
                  <div class="content-item-h5-tag">
                    <div class="content-item-h5-tag--item">胸肌塑形</div>
                    <div class="content-item-h5-tag--item">无痕治疗</div>
                    <div class="content-item-h5-tag--item">方块胸肌</div>
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
          <img src="~/assets/images/index/index-zz5.jpg" alt="">
          <div>《时尚芭莎》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz6.jpg" alt="">
          <div>《时尚芭莎》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz1.jpg" alt="">
          <div>《健康美容》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz2.jpg" alt="">
          <div>《men's uno 风度》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz3.jpg" alt="">
          <div>《父母世界》</div>
        </li>

        <li>
          <img src="~/assets/images/index/index-zz4.jpg" alt="">
          <div>《men's uno 风度》</div>
        </li>
      </ul>

      <a-row class="index-four-content">
        <a-col @click="gotoMtbd" class="index-four-content_item" :xs="24" :sm="12">
          <div class="index-four-content_item--img">
            <img src="~/assets/images/index/four-text1.jpg" alt="">
          </div>
          <div class="index-four-content_item--title">
            <div class="left">《荷兰金融报》采访-中国消费群体的审美转型</div>
            <!--            <div class="right">- 享受美体的快乐…</div>-->
          </div>
          <div class="index-four-content_item--time">2022-2-19</div>
          <div class="index-four-content_item--txt">
            颜士钧医师接受《荷兰金融报》（Het Financieele Dagblad）採访，介绍中国消费群体的审美转型
          </div>
          <div class="index-four-content_item--btn">阅读更多</div>
        </a-col>
        <a-col @click="gotoMtbd" class="index-four-content_item" :xs="24" :sm="12">
          <div class="index-four-content_item--img">
            <img src="~/assets/images/index/four-text2.jpg" alt="">
          </div>
          <div class="index-four-content_item--title">
            <div class="left">全网热搜 《纯纯甘 整形医师的一天》</div>
            <!--            <div class="right">- 享受美体的快乐…</div>-->
          </div>
          <div class="index-four-content_item--time">2022-10-23</div>
          <div class="index-four-content_item--txt">
            知名自媒体人——纯纯甘《浮生一日》系列，采访颜士钧医师（Dr.Terry Yen）的一天，让她带着大家窥医美行业更真实的一面吧。
          </div>
          <div class="index-four-content_item--btn">阅读更多</div>
        </a-col>
      </a-row>

      <div class="index-four-text">
        <p>到目前为止，颜士钧医师已经成功服务了超过一万名全球客户，被CCTV、人民网、澎湃新闻、时尚芭莎、瑞丽杂志等多家官媒与知名媒体报道，在中国建立了良好的客户信任度与极佳的口碑。</p>
        <p>2022年颜士钧医师登上了荷兰金融日报，其对颜医师丰富的医学美容临床经验给予了极大肯定。</p>
      </div>

      <img class="index-four-pt-pc" src="~/assets/images/index/index-pt-pc.jpg" alt="">
      <img class="index-four-pt-h5" src="~/assets/images/index/index-pt-h5.jpg" alt="">

      <ul class="index-four-intro">
        <li>
          <img src="~/assets/images/index/index-icon-meirong1.jpg" alt="">
          <div>专业高品质</div>
          <p>颜医师提供专业、人性、定制化的医疗服务，致力于为您提供世界一流的服务，运用全球领先的技术、先进的医疗设备，完善的术后保养及疗程，定期与世界医美领域顶尖的医师交流技术，不断精进钻研发展适合中国人的医美疗程。</p>
        </li>

        <li>
          <img src="~/assets/images/index/index-icon-meirong2.jpg" alt="">
          <div>安心保证</div>
          <p>
            颜医师谨慎选用合格之医疗设备、耗材、药品等，配合的医师与护理人员符合执行资格且不断进修训练，以提供安全完善的医疗服务；并对各种风险进行分析管理，提供品质管理的最高指导原则，确保品质管理系统能正常运作，并持续的适用与有效。</p>
        </li>

        <li>
          <img src="~/assets/images/index/index-icon-meirong3.jpg" alt="">
          <div>服务到家</div>
          <p>近悦远来，止于至善，是颜医师的理念。在颜医师这治疗的结束并不是服务的结束，颜医师团队会细心陪伴、解答您的疑虑，让您省心，活出自信与美丽。</p>
        </li>

        <li>
          <img src="~/assets/images/index/index-icon-meirong4.jpg" alt="">
          <div>价格透明</div>
          <p>在颜医师这里有价格透明有保障，童叟无欺，让您选择更省心。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {navigateTo} from "nuxt/app";

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
  },

  methods: {
    gotoLxzx() {
      navigateTo({
        path: "/lxzx"
      })
    },

    gotoGyys() {
      navigateTo({
        path: "/gyys"
      })
    },

    gotoDetail() {
      // navigateTo({
      //   path: "/articleDetails"
      // })
    },

    gotoWzx() {
      navigateTo({
        path: "/fwxm/wzx"
      })
    },

    gotoLdds() {
      navigateTo({
        path: "/fwxm/ldds"
      })
    },

    gotoTMLms() {
      navigateTo({
        path: "/fwxm/TMLms"
      })
    },

    gotoNxnr() {
      navigateTo({
        path: "/fwxm/nxnr"
      })
    },

    gotoMtbd() {
      navigateTo({
        path: "/mtbd"
      })
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
      height: auto;
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
                min-width: 62px;
                padding: 0 2px;
                box-sizing: border-box;
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
          box-sizing: border-box;
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
    @at-root &-pt-pc {
      display: block;
      width: 1200px;
      height: auto;
      vertical-align: middle;
      margin-bottom: 64px;
    }
    @at-root &-pt-h5 {
      display: none;
    }

    @at-root &-intro {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      li {
        width: 238px;
        text-align: center;

        img {
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
              text-align: center;
              display: block;
              font-size: 12px;
              font-weight: 400;
              color: #000000;

              .big {
                font-size: 20px;
                font-weight: 500;
                color: #000000;
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

              .content-item-h5-txt {
                width: 282px;
              }

              .content-item-h5-txt--bottom {
                height: 36px;
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
        display: block;
        text-align: center;
        //justify-content: center;
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
      @at-root &-pt-pc{
        display: none;
      }
      @at-root &-pt-h5 {
        display: block;
        width: 100%;
      }
      @at-root &-intro {
        flex-wrap: wrap;
        padding-bottom: 30px;

        li {
          width: 160px;

          img {
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
