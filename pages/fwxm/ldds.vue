<template>
  <div class="ldds">
    <!--    pc版-->
    <div class="ldds-pc">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/ldds/ldds-headImg-pc.jpg" alt="">

      <!--      适用人群及项目-->
      <ul class="apply">
        <li class="apply-item title">适用人群及项目</li>
        <li class="apply-item">瘦脸</li>
        <li class="apply-item">眼周紧致</li>
        <li class="apply-item">下面部</li>
        <li class="apply-item">妊娠纹</li>
        <li class="apply-item">双下巴</li>
        <li class="apply-item">副乳</li>
      </ul>

      <!--      咨询部分-->
      <div class="consult">
        <div class="consult-topBox">
          <img class="consult-topBox-img" src="~/assets/images/ldds/ldds-zxImg.jpg" alt="">
          <div class="consult-topBox-textBox">
            <div class="title">紧肤溶脂提升一次搞定</div>
            <p>
              RFAL灵动雕塑是欧美当下最热门的医美紧肤溶脂治疗，美国整形外科医学会会长罗里奇医师（Rod J. Rohrich）多次推荐。这个治疗是透过使用以色列 InMode 公司的新型双极射频设备，
            </p>
            <p>
              “EmbraceRF”所进行的一项紧肤溶脂疗程。现在可透过精准可控的射频能量，更安全、高效、舒适地紧致拉提皮肤、皮下筋膜层、纤维隔及软组织，并且可以同时达到溶脂、轮廓塑形、提升和收紧皮肤的效果。
              值得一提的是，好莱坞女巨星金·卡戴珊都使用Inmode设备进行紧肤治疗。
            </p>
          </div>
        </div>

        <img @click="gotoLxzx" class="consult-btn" src="~/assets/images/ldds/ldds-zxBtn.png" alt="">

        <ul class="consult-bottomBox">
          <li>
            <img src="~/assets/images/ldds/ldds-zxlist1.jpg" alt="">
            <div>面部精雕</div>
            <span>解决发腮、垮脸、双下巴，打造下颌线，精准溶解眼袋、嘴角、下苹果肌、法令纹脂肪。</span>
          </li>

          <li>
            <img src="~/assets/images/ldds/ldds-zxlist2.jpg" alt="">
            <div>皮肤紧致拉提</div>
            <span>引发自然再生反应, 刺激新的生长胶原蛋白，达到平滑和紧致提升肌肤、减少细纹和皱纹。</span>
          </li>

          <li>
            <img src="~/assets/images/ldds/ldds-zxlist3.jpg" alt="">
            <div>雕塑精细部位</div>
            <span>收紧副乳、腋下赘肉、蝴蝶袖、腹部松弛、膝盖及手部，改善妊娠纹、肥胖纹及橘皮。</span>
          </li>
        </ul>
      </div>

      <!--      推荐部分-->
      <div class="recommend">
        <div class="recommend-title">欧美明星真心推荐Inmode</div>

        <ul class="recommend-listBox">
          <li>
            <img src="~/assets/images/ldds/ldds-tj1.jpg" alt="">
            <div>Kim Kardashian</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj2.jpg" alt="">
            <div>Kourtney Kardashian</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj3.jpg" alt="">
            <div>Chrissy Teigen</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj4.jpg" alt="">
            <div>Shay Mitchell</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj5.jpg" alt="">
            <div>Paula Abdul</div>
          </li>
        </ul>
      </div>

      <!--      为什么选择部分-->
      <div class="select">
        <img class="select-img" src="~/assets/images/ldds/ldds-xzImg.jpg" alt="">

        <ul class="select-itemBox">
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon1.jpg" alt="">
            <div>紧肤溶脂提升一次搞定</div>
            <span>Embrace RF犹如新型热玛吉，除了收紧皮肤外，可以精确作用于皮下脂肪层、筋膜与纤维隔，同时达到溶脂、提升紧致和胶原再生的多重效果。</span>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon2.jpg" alt="">
            <div>效果更持久</div>
            <span>在治疗的过程中刺激和诱导胶原蛋白的再生与重组，有效地使肌肤质地改善。相较于其他紧致治疗，效果也会维持更久，做一次可维持3-5年。</span>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon3.jpg" alt="">
            <div>更安全可靠</div>
            <span>装载 A. C. E 实时温度监控、TSP 温度浪涌保护等技术，温度更加温和，在满足效果的同时，更为安全高效。</span>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon4.jpg" alt="">
            <div>微创更方便</div>
            <span>皮肤仅有抽血针孔大小的伤口，随做随走，术后恢复快，非常适合996的上班族。</span>
          </li>
        </ul>
      </div>

      <!--      对比部分-->
      <div class="contrast">
        <div class="contrast-title">
          <div>案例对比</div>
          <span>Other</span>
        </div>

        <ul class="contrast-itemBox">
          <li @click="gotoDetail" class="contrast-itemBox-item">
            <img src="~/assets/images/ldds/ldds-db1.jpg" alt="">
            <div>职场女精英精致下颌线重塑</div>
            <span>拥有年轻时的柔顺俐落又明显的下颌线会使整体脸形线条柔和，更有女人味！</span>
            <ul class="contrast-itemBox-tagBox">
              <li>下颌线</li>
              <li>面部拉提</li>
              <li>瘦脸</li>
            </ul>
          </li>
          <li @click="gotoDetail" class="contrast-itemBox-item">
            <img src="~/assets/images/ldds/ldds-db2.jpg" alt="">
            <div>卡哇伊宝妈拯救垂垂下半脸</div>
            <span>Inmode Embrace RF微创治疗可轻松实现瘦脸及轮廓线收紧的效果</span>
            <ul class="contrast-itemBox-tagBox">
              <li>不动刀</li>
              <li>针眼伤口</li>
              <li>嘟嘟肉</li>
            </ul>
          </li>
          <li @click="gotoDetail" class="contrast-itemBox-item">
            <img src="~/assets/images/ldds/ldds-db3.jpg" alt="">
            <div>初老油腻发腮怎解？</div>
            <span>社会在走，颜值要有。让你老气变帅气，利落更有型。</span>
            <ul class="contrast-itemBox-tagBox">
              <li>男性微整</li>
              <li>双下巴</li>
              <li>硬汉下颌线</li>
            </ul>
          </li>
          <li @click="gotoDetail" class="contrast-itemBox-item">
            <img src="~/assets/images/ldds/ldds-db4.jpg" alt="">
            <div>照相看起来好胖好显老怎么办？！</div>
            <span>透过RFAL复合式微创拉提疗程轻松恢复年轻态</span>
            <ul class="contrast-itemBox-tagBox">
              <li>赫本线</li>
              <li>双下巴</li>
              <li>面颈拉提</li>
            </ul>
          </li>
        </ul>
      </div>

      <!--      注意事项部分-->
      <div class="notice">
        <div class="notice-textBox">
          <div class="title">术后注意事项：</div>
          <p>
            ·治疗后会有粉红色的麻药水会从手术针口流出，一般此情况治疗后前24小时最为显著，会持续3-7天，“适度”活动有助于排出麻药水，请量力而行。避免局部的碰撞及挤压。避免剧烈活动。伤口局部结痂应自行脱落，不可人为剥脱。
          </p>
          <p>
            ·如无特殊情况，治疗后72小时后可以将手术针眼处以防水胶布粘贴后进行“淋浴”，淋浴后请将防水胶布揭除并消毒伤口处、保持伤口干燥，具体请与医师助理了解后再进行操作。
          </p>
          <p>
            ·治疗后七天内请不要从事浸浴、桑拿、游泳等水浴活动。
          </p>
          <p>
            ·治疗总恢复期为3-6个月。治疗后请务必注意均衡营养、适度活动及充足的睡眠。膳食以多摄取优质蛋白质、维生素C、避免进食易引起过敏的食物及辛辣刺激性食物为原则。治疗后一周内避免服用活血类药物及海鲜类食品；治疗后两周勿吸烟及饮酒。在未与医师讨论前，请勿自行服用任何消肿及消炎类药物。
          </p>
          <p>
            ·健身运动可在治疗后一周后开始进行，强度请循序渐进，以平常训练量的20%开始。
          </p>
          <p>
            ·由于亚洲人种皮肤的特性，部分人群治疗后伤口针眼处皮肤可能会产生炎症后的色素沉着，这个现象会随时间逐渐淡化、恢复，时间根据个体体质而有所不同。治疗后可搭配激光、药物涂抹、注射等治疗，如需相关治疗请与医师助理咨询。
          </p>
          <p>
            ·如您有任何不了解的问题或疑惑，请不要迟疑，随时与我们联系。
          </p>
        </div>
        <img class="notice-img" src="~/assets/images/ldds/ldds-zysxImg.jpg" alt="">
      </div>

      <!--      特色服务-->
      <div class="serve">
        <div class="serve-title">特色服务</div>

        <ul class="serve-contentBox">
          <li>
            <img src="~/assets/images/ldds/ldds-fu1.png" alt="">
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-fu2.png" alt="">
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-fu3.png" alt="">
          </li>
        </ul>
      </div>

      <!--      问答-->
      <div class="question">
        <Unfold :list="questionList"></Unfold>
      </div>
    </div>

    <!--    h5版-->
    <div class="ldds-h5">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/ldds/ldds-headImg-h5.jpg" alt="">

      <!--      适用人群及项目-->
      <ul class="apply">
        <li class="apply-item title">适用人群及项目</li>
        <li class="apply-item">瘦脸</li>
        <li class="apply-item">眼周紧致</li>
        <li class="apply-item">下面部</li>
        <li class="apply-item">妊娠纹</li>
        <li class="apply-item">双下巴</li>
        <li class="apply-item">副乳</li>
      </ul>

      <!--      咨询部分-->
      <div class="consult">
        <div class="consult-topBox">
          <img class="consult-topBox-img" src="~/assets/images/ldds/ldds-zxImg.jpg" alt="">
          <div class="consult-topBox-textBox">
            <div class="title">紧肤溶脂提升一次搞定</div>
            <p>
              RFAL灵动雕塑是欧美当下最热门的医美紧肤溶脂治疗，美国整形外科医学会会长罗里奇医师（Rod J. Rohrich）多次推荐。这个治疗是透过使用以色列 InMode 公司的新型双极射频设备，
            </p>
            <p>
              “EmbraceRF”所进行的一项紧肤溶脂疗程。现在可透过精准可控的射频能量，更安全、高效、舒适地紧致拉提皮肤、皮下筋膜层、纤维隔及软组织，并且可以同时达到溶脂、轮廓塑形、提升和收紧皮肤的效果。
              值得一提的是，好莱坞女巨星金·卡戴珊都使用Inmode设备进行紧肤治疗。
            </p>
          </div>
        </div>

        <ul class="consult-bottomBox">
          <li>
            <img src="~/assets/images/ldds/ldds-zxlist1.jpg" alt="">
            <div>面部精雕</div>
            <span>解决发腮、垮脸、双下巴，打造下颌线，精准溶解眼袋、嘴角、下苹果肌、法令纹脂肪。</span>
          </li>

          <li>
            <img src="~/assets/images/ldds/ldds-zxlist2.jpg" alt="">
            <div>皮肤紧致拉提</div>
            <span>引发自然再生反应, 刺激新的生长胶原蛋白，达到平滑和紧致提升肌肤、减少细纹和皱纹。</span>
          </li>

          <li>
            <img src="~/assets/images/ldds/ldds-zxlist3.jpg" alt="">
            <div>雕塑精细部位</div>
            <span>收紧副乳、腋下赘肉、蝴蝶袖、腹部松弛、膝盖及手部，改善妊娠纹、肥胖纹及橘皮。</span>
          </li>
        </ul>
      </div>

      <!--      推荐部分-->
      <div class="recommend">
        <div class="recommend-title">欧美明星真心推荐Inmode</div>

        <ul class="recommend-listBox">
          <li>
            <img src="~/assets/images/ldds/ldds-tj1.jpg" alt="">
            <div>Kim Kardashian</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj2.jpg" alt="">
            <div>Kourtney Kardashian</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj3.jpg" alt="">
            <div>Chrissy Teigen</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj4.jpg" alt="">
            <div>Shay Mitchell</div>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-tj5.jpg" alt="">
            <div>Paula Abdul</div>
          </li>
        </ul>
      </div>

      <!--      为什么选择部分-->
      <div class="select">
        <img class="select-img" src="~/assets/images/ldds/ldds-xzImg.jpg" alt="">

        <ul class="select-itemBox">
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon1.jpg" alt="">
            <div>紧肤溶脂提升一次搞定</div>
            <span>Embrace RF犹如新型热玛吉，除了收紧皮肤外，可以精确作用于皮下脂肪层、筋膜与纤维隔，同时达到溶脂、提升紧致和胶原再生的多重效果。</span>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon2.jpg" alt="">
            <div>效果更持久</div>
            <span>在治疗的过程中刺激和诱导胶原蛋白的再生与重组，有效地使肌肤质地改善。相较于其他紧致治疗，效果也会维持更久，做一次可维持3-5年。</span>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon3.jpg" alt="">
            <div>更安全可靠</div>
            <span>装载 A. C. E 实时温度监控、TSP 温度浪涌保护等技术，温度更加温和，在满足效果的同时，更为安全高效。</span>
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-xzIcon4.jpg" alt="">
            <div>微创更方便</div>
            <span>皮肤仅有抽血针孔大小的伤口，随做随走，术后恢复快，非常适合996的上班族。</span>
          </li>
        </ul>
      </div>

      <!--      对比部分-->
      <div class="contrast">
        <div class="contrast-title">
          <div>案例对比</div>
          <span>Other</span>
        </div>

        <div class="contrast-itemBox">
          <swiper
              :slides-per-view="'auto'"
              :space-between="0"
          >
            <swiper-slide>
              <div @click="gotoDetail" class="contrast-itemBox-item">
                <img src="~/assets/images/ldds/ldds-db1.jpg" alt="">
                <div>职场女精英精致下颌线重塑</div>
                <span>拥有年轻时的柔顺俐落又明显的下颌线会使整体脸形线条柔和，更有女人味！</span>
                <ul class="contrast-itemBox-tagBox">
                  <li>下颌线</li>
                  <li>面部拉提</li>
                  <li>瘦脸</li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div @click="gotoDetail" class="contrast-itemBox-item">
                <img src="~/assets/images/ldds/ldds-db2.jpg" alt="">
                <div>卡哇伊宝妈拯救垂垂下半脸</div>
                <span>Inmode Embrace RF微创治疗可轻松实现瘦脸及轮廓线收紧的效果</span>
                <ul class="contrast-itemBox-tagBox">
                  <li>不动刀</li>
                  <li>针眼伤口</li>
                  <li>嘟嘟肉</li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div @click="gotoDetail" class="contrast-itemBox-item">
                <img src="~/assets/images/ldds/ldds-db3.jpg" alt="">
                <div>初老油腻发腮怎解？</div>
                <span>社会在走，颜值要有。让你老气变帅气，利落更有型。</span>
                <ul class="contrast-itemBox-tagBox">
                  <li>男性微整</li>
                  <li>双下巴</li>
                  <li>硬汉下颌线</li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div @click="gotoDetail" class="contrast-itemBox-item">
                <img src="~/assets/images/ldds/ldds-db4.jpg" alt="">
                <div>照相看起来好胖好显老怎么办？！</div>
                <span>透过RFAL复合式微创拉提疗程轻松恢复年轻态</span>
                <ul class="contrast-itemBox-tagBox">
                  <li>赫本线</li>
                  <li>双下巴</li>
                  <li>面颈拉提</li>
                </ul>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <!--      注意事项部分-->
      <div class="notice">
        <div class="notice-title">术后注意事项</div>

        <img class="notice-img" src="~/assets/images/ldds/ldds-zysxImg.jpg" alt="">

        <div class="notice-textBox">
          <p>
            ·治疗后会有粉红色的麻药水会从手术针口流出，一般此情况治疗后前24小时最为显著，会持续3-7天，“适度”活动有助于排出麻药水，请量力而行。避免局部的碰撞及挤压。避免剧烈活动。伤口局部结痂应自行脱落，不可人为剥脱。
          </p>
          <p>
            ·如无特殊情况，治疗后72小时后可以将手术针眼处以防水胶布粘贴后进行“淋浴”，淋浴后请将防水胶布揭除并消毒伤口处、保持伤口干燥，具体请与医师助理了解后再进行操作。
          </p>
          <p>
            ·治疗后七天内请不要从事浸浴、桑拿、游泳等水浴活动。
          </p>
          <p>
            ·治疗总恢复期为3-6个月。治疗后请务必注意均衡营养、适度活动及充足的睡眠。膳食以多摄取优质蛋白质、维生素C、避免进食易引起过敏的食物及辛辣刺激性食物为原则。治疗后一周内避免服用活血类药物及海鲜类食品；治疗后两周勿吸烟及饮酒。在未与医师讨论前，请勿自行服用任何消肿及消炎类药物。
          </p>
          <p>
            ·健身运动可在治疗后一周后开始进行，强度请循序渐进，以平常训练量的20%开始。
          </p>
          <p>
            ·由于亚洲人种皮肤的特性，部分人群治疗后伤口针眼处皮肤可能会产生炎症后的色素沉着，这个现象会随时间逐渐淡化、恢复，时间根据个体体质而有所不同。治疗后可搭配激光、药物涂抹、注射等治疗，如需相关治疗请与医师助理咨询。
          </p>
          <p>
            ·如您有任何不了解的问题或疑惑，请不要迟疑，随时与我们联系。
          </p>
        </div>
      </div>

      <!--      特色服务-->
      <div class="serve">
        <div class="serve-title">特色服务</div>

        <ul class="serve-contentBox">
          <li>
            <img src="~/assets/images/ldds/ldds-fu1.png" alt="">
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-fu2.png" alt="">
          </li>
          <li>
            <img src="~/assets/images/ldds/ldds-fu3.png" alt="">
          </li>
        </ul>
      </div>

      <!--      问答-->
      <div class="question">
        <Unfold :list="questionList"></Unfold>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import Unfold from '~/components/Unfold.vue'
import {navigateTo} from "nuxt/app";

export default {
  name: "ldds",

  data() {
    return {
      questionList: [
        {question: 'Q. 做一次收紧效果可以维持多久?', answer: '答：正常情况下3-5年。'},
        {question: 'Q:恢复期多长时间?', answer: '答：隔天上班完全没问题，术后面部贴胶带72小时'},
        {question: 'Q. 做的时候会不会很痛?', answer: '答：No! 跟看牙差不多，除了打麻药稍微有感，全程比7D还轻松'},
        {question: 'Q:多久后可以做第二次RFAL灵动雕塑', answer: '答：1年后。'}
      ]
    }
  },

  components: {
    Swiper,
    SwiperSlide,
    Unfold
  },

  methods: {
    gotoLxzx() {
      navigateTo({
        path: "/lxzx"
      })
    },

    gotoDetail() {
      // navigateTo({
      //   path: "/articleDetails"
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.ldds {
  background: #FFFFFF;
  font-size: 12px;
  line-height: 1.2;

  //pc版
  @at-root &-pc {
    //头图部分
    .headImg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }

    //适用人群及项目
    .apply {
      padding: 30px 360px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @at-root &-item {
        width: 140px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background: #EAEAEA;
        font-size: 13px;
        color: #909494;
      }

      .title {
        background: #BABABA;
        color: #FFFFFF;
      }
    }

    //咨询部分
    .consult {
      padding: 45px 360px 70px;
      text-align: center;

      @at-root &-topBox {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        text-align: left;

        @at-root &-img {
          flex-shrink: 0;
          width: 500px;
          height: auto;
          vertical-align: middle;
        }

        @at-root &-textBox {
          flex: 1;
          margin-left: 30px;

          .title {
            font-size: 36px;
            color: #333333;
            margin-bottom: 30px;
          }

          p {
            margin: 0;
            text-indent: 2em;
            line-height: 1.5;
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
          }
        }
      }

      @at-root &-btn {
        height: 48px;
        width: auto;
        vertical-align: middle;
        margin: 30px 0 97px;
      }

      @at-root &-bottomBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;

        li {
          width: 360px;

          img {
            width: 100%;
            height: auto;
            vertical-align: middle;
          }

          div {
            font-size: 16px;
            font-weight: 600;
            color: #DDA365;
            margin: 20px 0;
          }

          span {
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
          }
        }
      }
    }

    //推荐部分
    .recommend {
      padding: 37px 360px 56px;

      @at-root &-title {
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        color: #DDA365;
        margin-bottom: 28px;
      }

      @at-root &-listBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        img {
          height: 410px;
          width: auto;
          vertical-align: middle;
        }

        div {
          font-size: 12px;
          color: rgba(68, 68, 68, 0.85);
          margin-top: 10px;
        }
      }
    }

    //为什么选择部分
    .select {
      padding: 40px 360px 100px;
      display: flex;
      align-items: flex-start;

      @at-root &-img {
        flex-shrink: 0;
        width: 524px;
        height: auto;
        vertical-align: middle;
      }

      @at-root &-itemBox {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 50px 0 135px;

        li {
          width: 200px;
          margin-bottom: 100px;
          text-align: center;

          img {
            width: 50px;
            height: auto;
            vertical-align: middle;
            margin-bottom: 9px;
          }

          div {
            font-size: 16px;
            font-weight: 500;
            color: #D2A36C;
            margin-bottom: 15px;
          }

          span {
            text-align: left;
            font-size: 12px;
            color: rgba(68, 68, 68, 0.85);
            line-height: 1.5;
          }
        }
      }
    }

    //对比部分
    .contrast {
      padding: 40px 360px 83px;
      background: #F6F6F6;

      @at-root &-title {
        display: flex;
        align-items: center;
        font-size: 40px;
        color: #333333;
        margin-bottom: 40px;

        span {
          font-size: 20px;
          margin-left: 10px;
        }
      }

      @at-root &-itemBox {
        display: flex;
        align-content: center;
        justify-content: space-between;

        @at-root &-item {
          border-radius: 10px;
          background: #FFFFFF;
          width: 290px;
          padding: 15px 8px;
          overflow: hidden;

          img {
            width: 100%;
            height: auto;
            vertical-align: middle;
            margin-bottom: 10px;
          }

          div {
            font-size: 16px;
            font-weight: 500;
            color: #000000;
            margin-bottom: 5px;
          }

          span {
            display: block;
            height: 42px;
            font-size: 13px;
            color: #666666;
            line-height: 1.5;
            margin-bottom: 5px;
          }
        }

        @at-root &-tagBox {
          display: flex;
          align-content: center;

          li {
            width: 62px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            background: #D8D8D8;
            margin-right: 10px;
            font-size: 12px;
            color: #888888;
          }
        }
      }
    }

    //注意事项部分
    .notice {
      padding: 53px 360px 97px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @at-root &-textBox {
        flex: 1;
        margin-right: 82px;

        .title {
          font-size: 36px;
          color: #333333;
          margin-bottom: 15px;
        }

        p {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(68, 68, 68, 0.85);
          margin-bottom: 15px;
        }

        p:last-child {
          margin-bottom: 0;
        }
      }

      @at-root &-img {
        width: 523px;
        height: auto;
        vertical-align: middle;
      }
    }

    //特色服务
    .serve {
      padding: 40px 360px 50px;
      background: url("~/assets/images/ldds/ldds-fuBgi.png") no-repeat left top/100% 100%;

      @at-root &-title {
        font-size: 40px;
        color: #333333;
        margin-bottom: 40px;
      }

      @at-root &-contentBox {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
          width: 360px;

          img {
            width: 100%;
            height: auto;
            vertical-align: middle;
            border-radius: 8px;
          }
        }
      }
    }

    //问答
    .question {
      padding: 60px 360px;
      background: #EFEFF3;
    }
  }

  //h5版
  @at-root &-h5 {
    display: none;

    //头图部分
    .headImg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }

    //适用人群及项目
    .apply {
      padding: 10px 20px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      @at-root &-item {
        flex-shrink: 0;
        width: 105px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: #EAEAEA;
        font-size: 13px;
        color: #909494;
        margin-bottom: 10px;
      }

      .title {
        background: #BABABA;
        color: #FFFFFF;
        margin-right: 65%;
      }
    }

    //咨询部分
    .consult {
      padding: 0 20px;

      @at-root &-topBox {
        border-bottom: 1px solid #B7B7B7;
        padding: 0 20px 20px;

        @at-root &-img {
          width: 100%;
          height: auto;
          vertical-align: middle;
        }

        @at-root &-textBox {
          margin-top: 20px;

          .title {
            font-size: 16px;
            font-weight: 600;
            color: #333333;
            margin-bottom: 20px;
          }

          p {
            line-height: 1.5;
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
            margin-bottom: 15px;
          }
        }
      }

      @at-root &-bottomBox {
        padding: 20px;
        margin: 0;
        border-bottom: 1px solid #B7B7B7;

        li {
          margin-bottom: 20px;

          img {
            width: 100%;
            height: auto;
            vertical-align: middle;
          }

          div {
            font-size: 16px;
            font-weight: 600;
            color: #DDA365;
            margin: 15px 0;
          }

          span {
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
          }
        }

        li:last-child {
          margin-bottom: 0;
        }
      }
    }

    //推荐部分
    .recommend {
      padding: 30px 20px;
      border-bottom: 1px solid #B7B7B7;

      @at-root &-title {
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        color: #DDA365;
        margin-bottom: 28px;
      }

      @at-root &-listBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;

        li {
          margin-bottom: 20px;
        }

        img {
          height: 200px;
          width: auto;
          vertical-align: middle;
        }

        div {
          font-size: 12px;
          color: rgba(68, 68, 68, 0.85);
          margin-top: 10px;
        }
      }
    }

    //为什么选择部分
    .select {
      padding: 30px 20px;

      @at-root &-img {
        width: 100%;
        height: auto;
        vertical-align: middle;
      }

      @at-root &-itemBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        li {
          width: 48%;
          margin-top: 30px;
          text-align: center;

          img {
            width: 50px;
            height: auto;
            vertical-align: middle;
            margin-bottom: 9px;
          }

          div {
            font-size: 16px;
            font-weight: 500;
            color: #D2A36C;
            margin-bottom: 15px;
          }

          span {
            text-align: justify;
            display: block;
            font-size: 12px;
            color: rgba(68, 68, 68, 0.85);
            line-height: 1.5;
          }
        }
      }
    }

    //对比部分
    .contrast {
      background: #F3F3F3;
      padding: 32px 0 45px;

      @at-root &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 500;
        color: #000000;
        margin-bottom: 18px;

        span {
          font-weight: 400;
          font-size: 12px;
          margin-left: 10px;
        }
      }

      @at-root &-itemBox {
        display: flex;

        :deep(.swiper-slide) {
          width: auto;
        }

        @at-root &-item {
          border-radius: 10px;
          background: #FFFFFF;
          //width: 290px;
          width: 270px;
          margin: 0 10px;
          padding: 15px 8px;
          overflow: hidden;

          img {
            width: 100%;
            height: auto;
            vertical-align: middle;
            margin-bottom: 10px;
          }

          div {
            font-size: 16px;
            font-weight: 500;
            color: #000000;
            margin-bottom: 5px;
          }

          span {
            display: block;
            height: 42px;
            font-size: 13px;
            color: #666666;
            line-height: 1.5;
            margin-bottom: 5px;
          }
        }

        @at-root &-tagBox {
          display: flex;
          align-content: center;

          li {
            width: 62px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            background: #D8D8D8;
            margin-right: 10px;
            font-size: 12px;
            color: #888888;
          }
        }
      }
    }

    //注意事项部分
    .notice {
      padding: 35px 20px 39px;

      @at-root &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        margin-bottom: 25px;
      }

      @at-root &-img {
        width: 100%;
        height: auto;
        vertical-align: middle;
        margin-bottom: 25px;
      }

      @at-root &-textBox {
        p {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(68, 68, 68, 0.85);
          margin-bottom: 15px;
        }

        p:last-child {
          margin-bottom: 0;
        }
      }
    }

    //特色服务
    .serve {
      padding: 31px 20px 50px;
      background: url("~/assets/images/ldds/ldds-fuBgi.png") no-repeat left top/100% 100%;

      @at-root &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: #333333;
        margin-bottom: 26px;
      }

      @at-root &-contentBox {
        li {
          margin-bottom: 26px;

          img {
            width: 100%;
            height: auto;
            vertical-align: middle;
            border-radius: 8px;
          }
        }
      }
    }

    //问答
    .question {
      padding: 20px;
      background: #EFEFF3;
    }
  }
}

@media (max-width: 576px) {
  .ldds {
    @at-root &-pc {
      display: none;
    }
    @at-root &-h5 {
      display: block;
    }
  }
}
</style>
