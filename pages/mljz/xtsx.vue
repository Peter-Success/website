<template>
  <div class="xtsx">
    <!--    pc版-->
    <div class="xtsx-pc">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/xtsx/xtsx-headImg-pc.jpg" alt="">

      <!--      适用人群及项目-->
      <!-- <ul class="apply">
        <li class="apply-item">RFAL灵动雕塑</li>
        <li class="apply-item title">微整形</li>
        <li class="apply-item">TML高清脂肪雕塑</li>
        <li class="apply-item">美式微创男乳祛除术</li>
        <li class="apply-item">身体体雕</li>
        <li class="apply-item">面部局部提拉</li>
      </ul> -->

      <!-- 产品展示部分 -->
      <div class="productBox">
        <div class="productBox-titleBox">
          <div class="productBox-titleBox-title">形体塑形</div>
          <span class="productBox-titleBox-subTitle">Body Sculpture</span>
        </div>

        <div class="productBox-slider">
          <img style="height: auto;width: 100%;" src="~/assets/images/xtsx/xtsx-img1.jpg" alt="Before">
          <div class="textBox">
            <div class="textBox-title">RFAL副乳祛除</div>
            <span class="textBox-subTitle">RFAL Axillary Breast Removal</span>
          </div>
        </div>

        <ul class="productBox-listBox">
          <li v-for="(item, index) in productList" :key="`productBox-listBox-itemBox-${index}`"
            class="productBox-listBox-itemBox">
            <img class="img" :src="item.imgUrl" alt="">
            <div class="textBox">
              <div class="textBox-title">{{ item.title }}</div>
              <span class="textBox-subTitle">{{ item.subTitle }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 了解更多部分 -->
      <!-- <ul class="moreBox">
        <li v-for="(item, index) in moreList" :key="`moreBox-itemBox-${index}`" class="moreBox-itemBox">
          <img class="icon" :src="item.icon" alt="">
          <div class="title">{{ item.title }}</div>
          <p class="subTitle">{{ item.subTitle }}</p>
          <div class="btn">了解更多 ></div>
        </li>
      </ul> -->
    </div>

    <!--    h5版-->
    <div class="xtsx-h5">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/xtsx/xtsx-headImg-h5.jpg" alt="">

      <!--      适用人群及项目-->
      <!-- <ul class="apply">
        <li class="apply-item">RFAL灵动雕塑</li>
        <li class="apply-item title">微整形</li>
        <li class="apply-item">TML高清脂肪雕塑</li>
        <li class="apply-item">美式微创男乳祛除术</li>
        <li class="apply-item">身体体雕</li>
        <li class="apply-item">面部局部提拉</li>
      </ul> -->

      <!-- 产品展示部分 -->
      <div class="productBox">
        <div class="productBox-titleBox">
          <div class="productBox-titleBox-title">形体塑形</div>
          <span class="productBox-titleBox-subTitle">Body Sculpture</span>
        </div>

        <div class="productBox-slider">
          <img style="height: auto;width: 100%;" src="~/assets/images/xtsx/xtsx-img1.jpg" alt="Before">
          <div class="textBox">
            <div class="textBox-title">RFAL副乳祛除</div>
            <span class="textBox-subTitle">RFAL Axillary Breast Removal</span>
          </div>
        </div>

        <ul class="productBox-listBox">
          <li v-for="(item, index) in productList" :key="`productBox-listBox-itemBox-${index}`"
            class="productBox-listBox-itemBox">
            <img class="img" :src="item.imgUrl" alt="">
            <div class="textBox">
              <div class="textBox-title">{{ item.title }}</div>
              <span class="textBox-subTitle">{{ item.subTitle }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 了解更多部分 -->
      <!-- <ul class="moreBox">
        <li v-for="(item, index) in moreList" :key="`moreBox-itemBox-${index}`" class="moreBox-itemBox">
          <img class="icon" :src="item.icon" alt="">
          <div class="title">{{ item.title }}</div>
          <p class="subTitle">{{ item.subTitle }}</p>
          <div class="btn">了解更多 ></div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { navigateTo } from "nuxt/app";
import 'img-comparison-slider'
import 'img-comparison-slider/dist/styles.css'
import Img2 from '~/assets/images/xtsx/xtsx-img2.jpg'
import Img3 from '~/assets/images/xtsx/xtsx-img3.jpg'
import Img4 from '~/assets/images/xtsx/xtsx-img4.jpg'
import Img5 from '~/assets/images/xtsx/xtsx-img5.jpg'
import Img6 from '~/assets/images/xtsx/xtsx-img6.jpg'
import Img7 from '~/assets/images/xtsx/xtsx-img7.jpg'
import Img8 from '~/assets/images/xtsx/xtsx-img8.jpg'
import Img9 from '~/assets/images/xtsx/xtsx-img9.jpg'
import Img10 from '~/assets/images/xtsx/xtsx-img10.jpg'
import Img11 from '~/assets/images/xtsx/xtsx-img11.jpg'
import Img12 from '~/assets/images/xtsx/xtsx-img12.jpg'
import Img13 from '~/assets/images/xtsx/xtsx-img13.jpg'
import Img14 from '~/assets/images/xtsx/xtsx-img14.jpg'
import Img15 from '~/assets/images/xtsx/xtsx-img15.jpg'
import Img16 from '~/assets/images/xtsx/xtsx-img16.jpg'
import Img17 from '~/assets/images/xtsx/xtsx-img17.jpg'
import Img18 from '~/assets/images/xtsx/xtsx-img18.jpg'
import Img19 from '~/assets/images/xtsx/xtsx-img19.jpg'
import Img20 from '~/assets/images/xtsx/xtsx-img20.jpg'
import Img21 from '~/assets/images/xtsx/xtsx-img21.jpg'
import Img22 from '~/assets/images/xtsx/xtsx-img22.jpg'
import Img23 from '~/assets/images/xtsx/xtsx-img23.jpg'
import Img24 from '~/assets/images/xtsx/xtsx-img24.jpg'
import Img25 from '~/assets/images/xtsx/xtsx-img25.jpg'
import Icon from '~/assets/images/xtsx/xtsx-icon-more.png'

export default {
  name: "xtsx",

  data() {
    return {
      // 产品列表
      productList: [
        {
          imgUrl: Img2,
          title: 'RFAL背部雕塑',
          subTitle: 'RFAL Back Sculpture'
        },
        {
          imgUrl: Img3,
          title: 'RFAL副乳祛除',
          subTitle: 'RFAL Axillary Breast Removal'
        },
        {
          imgUrl: Img4,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img5,
          title: 'RFAL灵动上臂雕塑术',
          subTitle: 'RFAL Arm Sculpture'
        },
        {
          imgUrl: Img6,
          title: 'RFAL灵动上臂雕塑术',
          subTitle: 'RFAL Arm Sculpture'
        },
        {
          imgUrl: Img7,
          title: 'RFAL灵动上臂后背雕塑术',
          subTitle: 'RFAL Arm & Back Sculpture'
        },
        {
          imgUrl: Img8,
          title: 'RFAL 灵动腹部雕塑',
          subTitle: 'RFAL Abdomen Sculpture'
        },
        {
          imgUrl: Img9,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img10,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img11,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img12,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img13,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img14,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img15,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img16,
          title: '显微自体脂肪丰臀',
          subTitle: 'Buttock Autologous fat transplantation'
        },
        {
          imgUrl: Img17,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img18,
          title: '显微自体脂肪丰臀',
          subTitle: 'Buttock Autologous fat transplantation'
        },
        {
          imgUrl: Img19,
          title: 'TML美式显微脂肪雕塑术',
          subTitle: 'Tumescent Microcannula Liposculpture'
        },
        {
          imgUrl: Img20,
          title: '妊娠纹淡化术',
          subTitle: 'Stretch Mark Removal'
        },
        {
          imgUrl: Img21,
          title: '肚脐年轻化',
          subTitle: 'Belly Button Beautification'
        },
        {
          imgUrl: Img22,
          title: '吸脂重修',
          subTitle: 'Liposuction Revision'
        },
        {
          imgUrl: Img23,
          title: '灵动腿型雕塑',
          subTitle: 'RFAL Thigh Sculpture'
        },
        {
          imgUrl: Img24,
          title: '灵动大腿雕塑',
          subTitle: 'RFAL Thigh Sculpture'
        },
        {
          imgUrl: Img25,
          title: '灵动大腿雕塑',
          subTitle: 'RFAL Thigh Sculpture'
        },
      ],

      // 更多列表
      moreList: [
        {
          icon: Icon,
          title: '随做随走',
          subTitle: '随做随走，术后立即工作。不影响生活工作。'
        },
        {
          icon: Icon,
          title: '安全手术',
          subTitle: '随做随走，术后立即工作。不影响生活工作。'
        },
        {
          icon: Icon,
          title: '隐私保护',
          subTitle: '随做随走，术后立即工作。不影响生活工作。'
        },
        {
          icon: Icon,
          title: '轻松完成',
          subTitle: '随做随走，术后立即工作。不影响生活工作。'
        },
      ]
    }
  },

  methods: {
    gotoLxzx() {
      navigateTo({
        path: "/lxzx"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.xtsx {
  background: #FFFFFF;
  font-size: 12px;
  line-height: 1.2;

  //pc版
  @at-root &-pc {
    display: block;

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
      justify-content: center;

      @at-root &-item {
        width: 140px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background: #EAEAEA;
        font-size: 13px;
        color: #909494;
        margin: 0 10px;
      }



      .title {
        background: #D19E6C;
        color: #FFFFFF;
      }
    }

    // 产品展示部分
    .productBox {
      padding: 120px 360px 30px;

      @at-root &-titleBox {
        display: flex;
        align-items: baseline;
        font-size: 24px;
        color: #000000;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          margin-left: 10px;
        }
      }

      .sliderBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      @at-root &-slider {
        background: #F0F0F0;
        margin-bottom: 20px;
        flex: 1;
        overflow: hidden;

        img-comparison-slider img {
          width: 100%;
          height: auto;
        }

        .textBox {
          font-size: 12px;
          color: #686868;
          padding: 15px;
          box-sizing: border-box;

          @at-root &-title {
            font-size: 14px;
            color: #000000;
            font-weight: 700;
            margin-bottom: 10px;
          }
        }
      }

      @at-root &-listBox {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        @at-root &-itemBox {
          width: 380px;
          height: auto;
          background: #F0F0F0;
          margin: 10px 6px;

          .img {
            width: 100%;
            height: auto;
            vertical-align: middle;
          }

          .textBox {
            font-size: 12px;
            color: #686868;
            padding: 15px;
            box-sizing: border-box;

            @at-root &-title {
              font-size: 14px;
              color: #000000;
              font-weight: 700;
              margin-bottom: 10px;
            }
          }
        }

        .activeItem {
          width: 48.5%;
          height: auto;

          .textBox {
            color: #BC8346;

            @at-root &-title {
              color: #BC8346;
            }
          }
        }
      }
    }

    // 了解更多部分
    .moreBox {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F5F5F5;
      padding: 50px 0;

      @at-root &-itemBox {
        text-align: center;
        font-size: 14px;
        width: 200px;
        margin: 0 40px;

        .icon {
          height: 20px;
          margin-bottom: 10px;
        }

        .title {
          margin-bottom: 20px;
          font-weight: 700;
        }

        .btn {
          font-size: 12px;
          margin-top: 5px;
        }
      }
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
        width: 115px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: #EAEAEA;
        font-size: 12px;
        color: #909494;
        margin-bottom: 10px;
      }

      .title {
        background: #D19E6C;
        color: #FFFFFF;
      }
    }

    // 产品展示部分
    .productBox {
      padding: 20px;

      @at-root &-titleBox {
        // display: flex;
        // align-items: baseline;
        // justify-content: center;
        text-align: center;
        font-size: 24px;
        color: #000000;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          margin-left: 10px;
        }
      }

      @at-root &-slider {
        background: #F0F0F0;
        margin-bottom: 20px;
        flex: 1;
        overflow: hidden;

        img-comparison-slider img {
          width: 100%;
          height: auto;
        }

        .textBox {
          font-size: 12px;
          color: #686868;
          padding: 15px;
          box-sizing: border-box;

          @at-root &-title {
            font-size: 14px;
            color: #000000;
            font-weight: 700;
            margin-bottom: 10px;
          }
        }
      }

      @at-root &-listBox {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        @at-root &-itemBox {
          width: 100%;
          height: auto;
          background: #F0F0F0;
          margin-bottom: 10px;

          .img {
            width: 100%;
            height: auto;
            vertical-align: middle;
          }

          .textBox {
            font-size: 12px;
            color: #686868;
            padding: 15px;
            box-sizing: border-box;

            @at-root &-title {
              font-size: 14px;
              color: #000000;
              font-weight: 700;
              margin-bottom: 10px;
            }
          }
        }
      }
    }

    // 了解更多部分
    .moreBox {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      background: #F5F5F5;
      padding: 50px 0;

      @at-root &-itemBox {
        text-align: center;
        font-size: 14px;
        width: 150px;
        margin: 10px;

        .icon {
          height: 20px;
          margin-bottom: 10px;
        }

        .title {
          margin-bottom: 20px;
          font-weight: 700;
        }

        .btn {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .xtsx {
    @at-root &-pc {
      display: none;
    }

    @at-root &-h5 {
      display: block;
    }
  }
}
</style>