<template>
  <div class="wzx">
    <!--    pc版-->
    <div class="wzx-pc">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/mljz-wzx/wzx-headImg-pc.jpg" alt="">

      <!--      适用人群及项目-->
      <ul class="apply">
        <li class="apply-item">RFAL灵动雕塑</li>
        <li class="apply-item title">微整形</li>
        <li class="apply-item">TML高清脂肪雕塑</li>
        <li class="apply-item">美式微创男乳祛除术</li>
        <li class="apply-item">身体体雕</li>
        <li class="apply-item">面部局部提拉</li>
      </ul>

      <!-- 产品展示部分 -->
      <div class="productBox">
        <div class="productBox-titleBox">
          <div class="productBox-titleBox-title">全脸抗衰提拉</div>
          <span class="productBox-titleBox-subTitle">Anti ageing injectables</span>
        </div>

        <ul class="productBox-listBox">
          <li v-for="(item, index) in productList" :key="`productBox-listBox-itemBox-${index}`"
            class="productBox-listBox-itemBox" :class="index === 0 || index === 1 ? 'activeItem' : ''">
            <img class="img" :src="item.imgUrl" alt="">
            <div class="textBox">
              <div class="textBox-title">{{ item.title }}</div>
              <span class="textBox-subTitle">{{ item.subTitle }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 了解更多部分 -->
      <ul class="moreBox">
        <li v-for="(item, index) in moreList" :key="`moreBox-itemBox-${index}`" class="moreBox-itemBox">
          <img class="icon" :src="item.icon" alt="">
          <div class="title">{{ item.title }}</div>
          <p class="subTitle">{{ item.subTitle }}</p>
          <div class="btn">了解更多 ></div>
        </li>
      </ul>
    </div>

    <!--    h5版-->
    <div class="wzx-h5">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/mljz-wzx/wzx-headImg-h5.jpg" alt="">

      <!--      适用人群及项目-->
      <!--      适用人群及项目-->
      <ul class="apply">
        <li class="apply-item">RFAL灵动雕塑</li>
        <li class="apply-item title">微整形</li>
        <li class="apply-item">TML高清脂肪雕塑</li>
        <li class="apply-item">美式微创男乳祛除术</li>
        <li class="apply-item">身体体雕</li>
        <li class="apply-item">面部局部提拉</li>
      </ul>

      <!-- 产品展示部分 -->
      <div class="productBox">
        <div class="productBox-titleBox">
          <div class="productBox-titleBox-title">RFAL灵动雕塑</div>
          <span class="productBox-titleBox-subTitle">Facial Reshaping</span>
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
      <ul class="moreBox">
        <li v-for="(item, index) in moreList" :key="`moreBox-itemBox-${index}`" class="moreBox-itemBox">
          <img class="icon" :src="item.icon" alt="">
          <div class="title">{{ item.title }}</div>
          <p class="subTitle">{{ item.subTitle }}</p>
          <div class="btn">了解更多 ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { navigateTo } from "nuxt/app";
import Img1 from '~/assets/images/mljz-wzx/wzx-img1.jpg'
import Img2 from '~/assets/images/mljz-wzx/wzx-img2.jpg'
import Img3 from '~/assets/images/mljz-wzx/wzx-img3.jpg'
import Icon from '~/assets/images/mljz-wzx/wzx-icon-more.png'

export default {
  name: "wzx",

  data() {
    return {
      // 产品列表
      productList: [
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img3,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img1,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
        },
        {
          imgUrl: Img2,
          title: 'RFAL灵动雕塑',
          subTitle: 'Facial Reshaping'
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
.wzx {
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
      padding: 0 360px;

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

      @at-root &-listBox {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        @at-root &-itemBox {
          width: 380px;
          height: 300px;
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
      padding: 0 20px 20px;

      @at-root &-titleBox {
        display: flex;
        align-items: baseline;
        justify-content: center;
        font-size: 24px;
        color: #000000;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          margin-left: 10px;
        }
      }

      @at-root &-listBox {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        @at-root &-itemBox {
          width: 100%;
          height: 300px;
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
  .wzx {
    @at-root &-pc {
      display: none;
    }

    @at-root &-h5 {
      display: block;
    }
  }
}
</style>