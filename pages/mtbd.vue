<template>
  <div class="mtbd">
    <!--    PC版-->
    <div class="mtbd-pc">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/mtbd/mtbd-headImg-pc.jpg" alt="">

      <!--      媒体报道列表部分-->
      <div class="listBox">
        <div class="listBox-title">媒体报道</div>

        <ul class="listBox-itemBox">
          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img1.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">人民网：与台湾青年颜士钧对话：时代之美 美美与共</div>
              <span class="textBox-date">2023-04-10 13:14</span>
              <p class="textBox-content">
                “文化是一个国家、一个民族的灵魂。”中华文化是筑牢中华儿女团结奋进、一往无前的思想基础，是台湾文化的重要组成部分，两岸文化紧密相连，推进两岸经济文化融合发展，共创中华文化辉煌，是每个华夏儿女义不容辞的责任。台青颜士钧表示两岸文化同根同源、有着一脉相承的历史渊源，工作之余通过参加十月文学院京台青年驿站文化交流活动，与两岸杰出青年进行交流学习，不断从中获得更多的文化滋养和精神力量。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img2.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">时尚芭莎：颜医师TML美式显微脂肪雕塑</div>
              <span class="textBox-date">2018-11</span>
              <p class="textBox-content">
                现在求美者可以在最安全、无需全身麻醉、全程意识清醒，犹如SPA般舒适的进行脂肪雕塑，并且可以获得更优美细致的形体塑形效果。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img3.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">荷兰金融日报：颜医生-中国消费群体的审美转型</div>
              <span class="textBox-date">2022-8-3</span>
              <p class="textBox-content">
                颜士钧医师接受《荷兰金融报》（Het Financieele Dagblad）採访，介绍中国消费群体的审美转型。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img4.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">全网热搜 《纯纯甘 整形医师的一天》</div>
              <span class="textBox-date">2021-10-23</span>
              <p class="textBox-content">
                【浮生一日】北京整形医生颜士钧的真实一天。，一个台湾长大，美国做医学研究，北京工作的整形外科医生。一直在深造一直在加班；也和大多数北漂一样，他租住在单身公寓里，怀揣着很大的梦想。跟他一起揭开医美行业更真实的一面吧。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img5.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">瑞丽伊人风尚：瑞丽杂志主编邀请颜士钧医师参加美肤测评分享。</div>
              <span class="textBox-date">2019-9-24</span>
              <p class="textBox-content">
                “瑞丽伊人风尚榜样下午茶”活动旨在通过瑞丽伊人风尚定制课程及活动，瑞丽杂志主编邀请颜士钧医师参加美肤测评分享。颜士钧医师分享能帮助美宝贝们变美的干货知识一起青春美漂。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img6.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">《men's uno 风度》：科技瘦身术</div>
              <span class="textBox-date">2021-01</span>
              <p class="textBox-content">
                颜士钧医师带你了解时下最热门的美式显微脂肪雕塑、冷冻溶脂、BTL EMSCULPT美休斯等瘦身黑科技。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img7.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">《父母世界》：宝妈如何”卸货”后秒变少女!? 究竟做了啥？</div>
              <span class="textBox-date">2019-9-20</span>
              <p class="textBox-content">
                宝妈重塑术（Mommy Makeover）是针对产后妈妈做的身材整体治疗，也就是还原产前身材的治疗方案。产后身材走样、胸部、腹部皮肤松弛、妊娠纹等现在都能有效改善。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img8.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">健康与美容：美式微创副乳祛除术，让你上半身小一号</div>
              <span class="textBox-date">220-7-8</span>
              <p class="textBox-content">
                明明胸部没什么肉，内衣边缘却挤了一圈肥肥的副乳和背后肉！这问题困扰很多美宝贝，令人穿衣时感到崩溃，穿无袖的衣服时，有一包东西在外面晃来晃去非常扎眼。以往需要开刀才能解决的问题，现在颜医师带您了解国际上最前沿、不用动刀的处理方式，让你轻松跟两坨说bye
                bye。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img9.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">Harper's BAZAAR：芭莎主编体验TML美式显微脂肪雕塑</div>
              <span class="textBox-date">2018-7</span>
              <p class="textBox-content">
                芭莎主编体验TML美式显微脂肪雕塑 比传统吸脂“轻盈”5颗星。不用全身麻醉，安全保障、随走随走又不需要穿塑身衣的体形雕塑术到底是！？
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>
        </ul>
      </div>

      <!--      介绍部分-->
      <div class="introduce">
        <div class="introduce-text">到目前为止，颜士钧医师已经成功服务了超过一万名全球客户，被CCTV、人民网、澎湃新闻、时尚芭莎、瑞丽杂志等多家官媒与知名媒体报道，在中国建立了良好的客户信任度与极佳的口碑。2022年颜士钧医师登上了荷兰金融日报，其对颜医师丰富的医学美容临床经验给予了极大肯定。</div>

        <img src="~/assets/images/mtbd/mtbd-pt.jpg" alt="">
      </div>
    </div>

    <!--    移动版-->
    <div class="mtbd-h5">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/mtbd/mtbd-headImg-h5.jpg" alt="">

      <!--      媒体报道列表部分-->
      <div class="listBox">
        <div class="listBox-title">媒体报道</div>

        <ul class="listBox-itemBox">
          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img1.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">人民网：与台湾青年颜士钧对话：时代之美 美美与共</div>
              <span class="textBox-date">2023-04-10 13:14</span>
              <p class="textBox-content">
                “文化是一个国家、一个民族的灵魂。”中华文化是筑牢中华儿女团结奋进、一往无前的思想基础，是台湾文化的重要组成部分，两岸文化紧密相连，推进两岸经济文化融合发展，共创中华文化辉煌，是每个华夏儿女义不容辞的责任。台青颜士钧表示两岸文化同根同源、有着一脉相承的历史渊源，工作之余通过参加十月文学院京台青年驿站文化交流活动，与两岸杰出青年进行交流学习，不断从中获得更多的文化滋养和精神力量。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img2.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">时尚芭莎：颜医师TML美式显微脂肪雕塑</div>
              <span class="textBox-date">2018-11</span>
              <p class="textBox-content">
                现在求美者可以在最安全、无需全身麻醉、全程意识清醒，犹如SPA般舒适的进行脂肪雕塑，并且可以获得更优美细致的形体塑形效果。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img3.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">荷兰金融日报：颜医生-中国消费群体的审美转型</div>
              <span class="textBox-date">2022-8-3</span>
              <p class="textBox-content">
                颜士钧医师接受《荷兰金融报》（Het Financieele Dagblad）採访，介绍中国消费群体的审美转型。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img4.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">全网热搜 《纯纯甘 整形医师的一天》</div>
              <span class="textBox-date">2021-10-23</span>
              <p class="textBox-content">
                【浮生一日】北京整形医生颜士钧的真实一天。，一个台湾长大，美国做医学研究，北京工作的整形外科医生。一直在深造一直在加班；也和大多数北漂一样，他租住在单身公寓里，怀揣着很大的梦想。跟他一起揭开医美行业更真实的一面吧。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img5.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">瑞丽伊人风尚：瑞丽杂志主编邀请颜士钧医师参加美肤测评分享。</div>
              <span class="textBox-date">2019-9-24</span>
              <p class="textBox-content">
                “瑞丽伊人风尚榜样下午茶”活动旨在通过瑞丽伊人风尚定制课程及活动，瑞丽杂志主编邀请颜士钧医师参加美肤测评分享。颜士钧医师分享能帮助美宝贝们变美的干货知识一起青春美漂。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img6.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">《men's uno 风度》：科技瘦身术</div>
              <span class="textBox-date">2021-01</span>
              <p class="textBox-content">
                颜士钧医师带你了解时下最热门的美式显微脂肪雕塑、冷冻溶脂、BTL EMSCULPT美休斯等瘦身黑科技。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img7.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">《父母世界》：宝妈如何”卸货”后秒变少女!? 究竟做了啥？</div>
              <span class="textBox-date">2019-9-20</span>
              <p class="textBox-content">
                宝妈重塑术（Mommy Makeover）是针对产后妈妈做的身材整体治疗，也就是还原产前身材的治疗方案。产后身材走样、胸部、腹部皮肤松弛、妊娠纹等现在都能有效改善。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img8.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">健康与美容：美式微创副乳祛除术，让你上半身小一号</div>
              <span class="textBox-date">220-7-8</span>
              <p class="textBox-content">
                明明胸部没什么肉，内衣边缘却挤了一圈肥肥的副乳和背后肉！这问题困扰很多美宝贝，令人穿衣时感到崩溃，穿无袖的衣服时，有一包东西在外面晃来晃去非常扎眼。以往需要开刀才能解决的问题，现在颜医师带您了解国际上最前沿、不用动刀的处理方式，让你轻松跟两坨说bye
                bye。
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>

          <li @click="gotoDetail" class="listBox-itemBox-item">
            <img class="image" src="~/assets/images/mtbd/mtbd-item-img9.jpg" alt="">

            <div class="textBox">
              <div class="textBox-title">Harper's BAZAAR：芭莎主编体验TML美式显微脂肪雕塑</div>
              <span class="textBox-date">2018-7</span>
              <p class="textBox-content">
                芭莎主编体验TML美式显微脂肪雕塑 比传统吸脂“轻盈”5颗星。不用全身麻醉，安全保障、随走随走又不需要穿塑身衣的体形雕塑术到底是！？
              </p>
              <div class="textBox-btn">阅读更多</div>
            </div>
          </li>
        </ul>
      </div>

      <!--      介绍部分-->
      <div class="introduce">
        <div class="introduce-text">到目前为止，颜士钧医师已经成功服务了超过一万名全球客户，被CCTV、人民网、澎湃新闻、时尚芭莎、瑞丽杂志等多家官媒与知名媒体报道，在中国建立了良好的客户信任度与极佳的口碑。2022年颜士钧医师登上了荷兰金融日报，其对颜医师丰富的医学美容临床经验给予了极大肯定。</div>

        <img src="~/assets/images/mtbd/mtbd-pt.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {navigateTo} from "nuxt/app";

export default {
  name: 'mtbd',

  methods: {
    gotoDetail() {
      // navigateTo({
      //   path: "/articleDetails"
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.mtbd {
  background: #FFFFFF;
  font-size: 12px;
  line-height: 1.2;

  //PC版
  @at-root &-pc {
    display: block;

    //头图部分
    .headImg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }

    //媒体报道列表部分
    .listBox {
      padding: 30px 360px;
      margin-bottom: 50px;

      @at-root &-title {
        font-size: 40px;
        color: #333333;
        border-bottom: 1px solid #B7B7B7;
        padding-bottom: 25px;
      }

      @at-root &-itemBox-item {
        padding: 34px 22px;
        border-bottom: 1px solid #B7B7B7;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .image {
          flex-shrink: 0;
          width: 280px;
          height: 180px;
          vertical-align: middle;
          margin-right: 25px;
        }

        .textBox {
          flex: 1;

          @at-root &-title {
            font-size: 24px;
            font-weight: 500;
            color: #333333;
            margin-bottom: 5px;
          }

          @at-root &-date {
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
          }

          @at-root &-content {
            margin: 20px 0;
            line-height: 1.5;
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
            text-indent: 2rem;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 60px;
          }

          @at-root &-btn {
            font-size: 13px;
            color: rgba(51, 51, 51, 0.85);
            display: inline-block;
            border-bottom: 1px solid #DDA365;
            padding-bottom: 5px;
          }
        }
      }
    }

    //介绍部分
    .introduce{
      padding: 0 360px 64px;
      font-size: 14px;
      color: #313131;
      line-height: 1.5;

      img {
        margin-top: 40px;
        width: 100%;
        vertical-align: middle;
      }
    }
  }

  //移动版
  @at-root &-h5 {
    display: none;

    //头图部分
    .headImg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }

    //媒体报道列表部分
    .listBox {
      padding: 30px 20px 20px;
      border-bottom: 1px solid #B7B7B7;

      @at-root &-title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #000000;
        padding-bottom: 25px;
      }

      @at-root &-itemBox-item {
        margin-bottom: 25px;

        .image {
          width: 100%;
          height: auto;
          vertical-align: middle;
          margin-bottom: 20px;
        }

        .textBox {
          @at-root &-title {
            font-size: 16px;
            font-weight: 600;
            color: #333333;
            margin-bottom: 5px;
          }

          @at-root &-date {
            font-size: 12px;
            color: rgba(68, 68, 68, 0.85);
          }

          @at-root &-content {
            margin: 20px 0;
            line-height: 1.5;
            font-size: 13px;
            color: rgba(68, 68, 68, 0.85);
            text-indent: 2rem;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          @at-root &-btn {
            font-size: 13px;
            color: rgba(51, 51, 51, 0.85);
            display: inline-block;
            border-bottom: 1px solid #DDA365;
            padding-bottom: 5px;
          }
        }
      }
    }

    //介绍部分
    .introduce{
      padding: 20px 20px 30px;
      font-size: 14px;
      color: #313131;
      line-height: 1.5;

      img {
        margin-top: 40px;
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}

@media (max-width: 576px) {
  .mtbd {
    @at-root &-pc {
      display: none;
    }
    @at-root &-h5 {
      display: block;
    }
  }
}
</style>
