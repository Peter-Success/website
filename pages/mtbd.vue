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
          <li v-for="(item, index) in mtList" :key="index" @click="gotoDetail(item.gotoUrl)"
            class="listBox-itemBox-item">
            <img class="image" :src="item.imgUrl" alt="">

            <div class="textBox">
              <div class="textBox-title">{{ item.title }}</div>
              <!-- <span class="textBox-date">2023-04-10 13:14</span> -->
              <p class="textBox-content">{{ item.subTitle }}</p>
              <div v-show="item.isShowBtn" class="textBox-btn">阅读更多</div>
            </div>
          </li>
        </ul>
      </div>

      <!--      介绍部分-->
      <div class="introduce">
        <div class="introduce-text">
          到目前为止，颜士钧医师已经成功服务了超过一万名全球客户，被CCTV、人民网、澎湃新闻、时尚芭莎、瑞丽杂志等多家官媒与知名媒体报道，在中国建立了良好的客户信任度与极佳的口碑。2022年颜士钧医师登上了荷兰金融日报，其对颜医师丰富的医学美容临床经验给予了极大肯定。
        </div>

        <img src="~/assets/images/mtbd/mtbd-pt-pc.jpg" alt="">
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
          <li v-for="(item, index) in mtList" :key="index" @click="gotoDetail(item.gotoUrl)"
            class="listBox-itemBox-item">
            <img class="image" :src="item.imgUrl" alt="">

            <div class="textBox">
              <div class="textBox-title">{{ item.title }}</div>
              <!-- <span class="textBox-date">2023-04-10 13:14</span> -->
              <p class="textBox-content">{{ item.subTitle }}</p>
              <div v-show="item.isShowBtn" class="textBox-btn">阅读更多</div>
            </div>
          </li>
        </ul>
      </div>

      <!--      介绍部分-->
      <div class="introduce">
        <div class="introduce-text">
          到目前为止，颜士钧医师已经成功服务了超过一万名全球客户，被CCTV、人民网、澎湃新闻、时尚芭莎、瑞丽杂志等多家官媒与知名媒体报道，在中国建立了良好的客户信任度与极佳的口碑。2022年颜士钧医师登上了荷兰金融日报，其对颜医师丰富的医学美容临床经验给予了极大肯定。
        </div>

        <img src="~/assets/images/mtbd/mtbd-pt-h5.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { navigateTo } from "nuxt/app";
import Img1 from '@/assets/images/mtbd/mtbd-img1.jpg'
import Img2 from '@/assets/images/mtbd/mtbd-img2.jpg'
import Img3 from '@/assets/images/mtbd/mtbd-img3.jpg'
import Img4 from '@/assets/images/mtbd/mtbd-img4.jpg'
import Img5 from '@/assets/images/mtbd/mtbd-img5.jpg'
import Img6 from '@/assets/images/mtbd/mtbd-img6.jpg'
import Img7 from '@/assets/images/mtbd/mtbd-img7.jpg'
import Img8 from '@/assets/images/mtbd/mtbd-img8.jpg'
import Img9 from '@/assets/images/mtbd/mtbd-img9.jpg'
import Img10 from '@/assets/images/mtbd/mtbd-img10.jpg'
import Img11 from '@/assets/images/mtbd/mtbd-img11.jpg'
import Img12 from '@/assets/images/mtbd/mtbd-img12.jpg'
import Img13 from '@/assets/images/mtbd/mtbd-img13.jpg'
import Img14 from '@/assets/images/mtbd/mtbd-img14.jpg'
import Img15 from '@/assets/images/mtbd/mtbd-img15.jpg'

export default {
  name: 'mtbd',

  data() {
    return {
      mtList: [
        {
          imgUrl: Img1,
          title: '颜士钧医师与刘嘉玲女士出席BCCF慈善晚宴',
          subTitle: '',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img2,
          title: '时尚芭莎：颜医师TML美式显微脂肪雕塑',
          subTitle: '现在求美者可以在最安全、无需全身麻醉、全程意识清醒，犹如SPA般舒适的进行脂肪雕塑，并且可以获得更优美细致的形体塑形效果。',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img3,
          title: '颜士钧医生担任Inmode World Expert于雅加达进行培训教学',
          subTitle: 'Inmode APAC邀请颜士钧医生（Dr.Terry Yen）于雅加达培训教学多位当地优秀整形外科医生，演示Inmode Embrace RF & Morpheus 8的新型微创治疗技术。',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img4,
          title: '《纯纯甘出品-整形医师的一天》',
          subTitle: '全网热搜，知名自媒体人纯纯甘浮生一日系列，采访颜士钧医师（Dr.Terry Yen）的一天，让她带着大家窥医美行业更真实的一面吧。',
          isShowBtn: true,
          gotoUrl: 'https://m.weibo.cn/status/KE1Piz0AQ?type=repost&jumpfrom=weibocom'
        },
        {
          imgUrl: Img5,
          title: '颜士钧医师出席Inmode学术大会接受媒体专访',
          subTitle: '颜士钧医师出席北京Inmode学术大会接受媒体专访。',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img6,
          title: '颜士钧医师于韩国KSAS整形美容学术会议发表产后修复治疗手段',
          subTitle: '2024第43届大韩医学美容大会及第13届国际干细胞前沿治疗医学会11月底在韩国首尔SC会议中心顺利召开。医学美容形体塑形分论坛中，颜士钧医师发表了题为《联合运用RFAL射频与电波进行宝妈产后修复》的专题演讲，分享了他在产后修复领域创新的治疗方法，对改善产后女性患者的生活质量具有重要意义，并获得与会专家的高度关注与肯定。',
          isShowBtn: true,
          gotoUrl: 'https://k.sina.com.cn/article_6534167828_185777d1400101231q.html?kdurlshow=1&wm=3049_0047&from=health'
        },
        {
          imgUrl: Img7,
          title: '颜士钧医师于AMSC国际会议发表面部馒化的治疗及预防手段',
          subTitle: '马来西亚美容医学协会副会长暨《面部过度填充综合症Facial Overfilled Syndrome》作者 林挺松（Dr. Ting Song Lim）邀请颜士钧医师（Dr. Shih Chun Yen）在AMSC国际学术会议上分享RFAL射频消融在医美领域的临床应用，内容包含RFAL在面部馒化修復治疗、面部松垂及眼袋等治疗案例。',
          isShowBtn: true,
          gotoUrl: 'https://healthnews.sina.cn/news/2024-10-10/detail-incsameu5209822.d.html?sinawapsharesource=newsapp&wm=3049_0013&from=wb2source'
        },
        {
          imgUrl: Img8,
          title: '颜士钧医师在国际期刊《Aesthetic Surgery Journal》上发表东亚人面颈部皮肤软组织松弛新型微创治疗手段',
          subTitle: 'Bipolar Radiofrequency-Assisted Liposuction for Cervical Contouring in Eastern Asians.',
          isShowBtn: true,
          gotoUrl: 'https://pubmed.ncbi.nlm.nih.gov/37205298/'
        },
        {
          imgUrl: Img9,
          title: '颜士钧医师(Dr.Terry Yen)接受美国专业医疗媒体《Medical Insight》采访',
          subTitle: '颜士钧医师（Dr.Terry Yen）介绍后疫情时代亚太地区的医美消费新趋势。',
          isShowBtn: true,
          gotoUrl: 'https://miinews.com/Article?id=428'
        },
        {
          imgUrl: Img10,
          title: '荷兰金融日报：颜医生-中国消费群体的审美转型',
          subTitle: '颜士钧医师接受《荷兰金融报》（Het Financieele Dagblad）採访，介绍中国消费群体的审美转型。',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img11,
          title: '颜士钧医生赴贵州毕节市开展爱心义诊活动',
          subTitle: '“两岸同心，爱心同行”受邀于贵州进行义诊活动，为毕节市及赫章县当地居民提供优质的医疗服务，并为增进当地群众健康福祉贡献力量。  感谢台盟，凝聚无私奉献的精神和对社会的责任感。',
          isShowBtn: true,
          gotoUrl: 'https://mp.weixin.qq.com/s?__biz=MzI1NjQ2Njg1Mg==&mid=2247494614&idx=1&sn=7e2da86d85fa9984a7e0e509124ec4e9&chksm=eb4622fa60913018aec0e60034189a54cf71b5bbd33119624231a54f4eba5ae23e718fe28a9d&scene=27'
        },
        {
          imgUrl: Img12,
          title: '颜士钧医师受邀出席大韩美容外科学会春季学术大会',
          subTitle: '面部抗衰专家颜士钧医生主持KSAS学术会议并发表新型双极射频微创治疗东亚女性的面部轮廓主题演讲。',
          isShowBtn: true,
          gotoUrl: 'https://healthnews.sina.cn/news/2024-04-08/detail-inarchuq5172269.d.html?sinawapsharesource=newsapp&wm=3049_0013&from=wb2source'
        },
        {
          imgUrl: Img13,
          title: '健康与美容：美式微创副乳祛除术，让你上半身小一号',
          subTitle: '明明胸部没什么肉，内衣边缘却挤了一圈肥肥的副乳和背后肉！这问题困扰很多美宝贝，令人穿衣时感到崩溃，穿无袖的衣服时，有一包东西在外面晃来晃去非常扎眼。以往需要开刀才能解决的问题，现在颜医师带您了解国际上最前沿、不用动刀的处理方式，让你轻松跟两坨说bye bye。',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img14,
          title: '颜士钧医师新书《面部危险区》新闻发布会',
          subTitle: '由颜士钧医生译著的整形教科书《面部危险区-美容手术、注射填充、微创治疗风险防范的解剖指引》于北京顺利发布。',
          isShowBtn: false,
          gotoUrl: ''
        },
        {
          imgUrl: Img15,
          title: '颜士钧医师于学术会议发表东方宝妈重塑术《Oriental Mommy Makeover》',
          subTitle: '颜士钧医师于首尔发表了《Oriental mommy makeover东方宝妈重塑术》，分享了女性产后身体塑形领域的较新整形美容运用。',
          isShowBtn: true,
          gotoUrl: 'https://zixun.focus.cn/d630495ebc937d32.html'
        }
      ]
    }
  },

  methods: {
    gotoDetail(url) {
      url ? window.location.href = url : ''
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
        cursor: pointer;

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
            // text-indent: 2rem;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 3;
            // -webkit-box-orient: vertical;
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
    .introduce {
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
        border-bottom: 1px solid #B7B7B7;
        cursor: pointer;

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
            // text-indent: 2rem;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 3;
            // -webkit-box-orient: vertical;
            overflow: hidden;
          }

          @at-root &-btn {
            font-size: 13px;
            color: rgba(51, 51, 51, 0.85);
            display: inline-block;
            border-bottom: 1px solid #DDA365;
            padding-bottom: 5px;
            margin-bottom: 20px;
          }
        }
      }
    }

    //介绍部分
    .introduce {
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
