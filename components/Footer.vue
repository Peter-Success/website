<template>
  <div class="footer">
    <div class="footer-pc">
      <div class="footer-pc-top">
        <div class="logo">
          <img src="~/assets/images/nav/logo.png" alt="">
        </div>
      </div>
      <div class="footer-pc-bottom">
        <img class="media" src="~/assets/images/footer/footer-media-pc.png" alt="">
        <div class="textBox">
          <div class="textBox-title">联系我们：</div>

          <ul class="textBox-text">
            <li>Email：drterryyen @gmail.com</li>
            <li>Wechat: drterryassistant</li>
            <li>中国上海市长宁区定西路738号2F上海复丽医疗美容门诊部</li>
          </ul>
        </div>
        <img class="qrcode" src="~/assets/images/footer/footer-qrcode.png" alt="">
      </div>
    </div>
    <div class="footer-h5">
      <div class="footer-h5-top">
        <div class="one">
          <div class="one-logo">
            <img src="~/assets/images/nav/logo.png" alt="">
          </div>
          <div class="one-list">
            <div class="one-list-item" v-for="(n, i) in mediaList" :key="i">
              <img src="~/assets/images/nav/icon0.png" alt="">
            </div>
          </div>
        </div>
        <div class="two">
          <img src="~/assets/images/footer/footer-qrcode.png" alt="">
        </div>
        <div class="three">
          COPYRIGHT © LIPRO| Adipose System Regulation & Body Sculpture Surgical Center ALL RIGHTS RESERVED
        </div>
      </div>
      <div class="footer-h5-bottom">
        <div class="footer-h5-bottom--item">联系我们</div>
        <div class="footer-h5-bottom--item active">公众号</div>
        <div class="footer-h5-bottom--item">138 8888 8888</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 底部媒体列表
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
  },
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
  },
  {
    url: ''
  }
])
</script>

<style lang="scss" scoped>
.footer {
  @at-root &-pc {
    @at-root &-top {
      background-color: #DDA365;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ffffff;
      .logo {
        width: 257px;
        height: 73px;

        img {
          width: 100%;
        }
      }
    }
    @at-root &-bottom {
      background-color: #3D3D3D;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 40px 0 170px;

      .media {
        width: auto;
        height: 134px;
        vertical-align: middle;
      }

      .textBox {
        margin: 0 38px 0 97px;
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        list-style: none;
        padding: 0;
        line-height: 1.5;

        @at-root &-title {
          margin-bottom: 30px;
        }

        @at-root &-text {
          list-style: none;
          padding: 0;
        }
      }

      .qrcode {
        width: auto;
        height: 134px;
        vertical-align: middle;
      }
    }
  }
  @at-root &-h5 {
    display: none;
    width: 100%;
    @at-root &-top {
      width: 100%;
      background-color: #3D3D3D;
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .one {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
        @at-root &-logo {
          width: 257px;
          height: 73px;
          img {
            width: 100%;
          }
        }
        @at-root &-list {
          margin: 30px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          @at-root &-item {
            width: 24px;
            height: 24px;
            margin-right: 8px;
            img {
              width: 100%;
            }
          }
        }
      }

      .two {
        width: 100%;

        img {
          width: 100%;
        }
      }

      .three {
        padding: 16px 50px;
        font-size: 10px;
        color: #ffffff;
        text-align: center;
        border-top: 1px dashed rgba(255, 255, 255, 0.5);
      }
    }
    @at-root &-bottom {
      margin-top: 1px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      line-height: 35px;
      background: #DDDDDD;
      color: #333333;
      width: 100%;
      @at-root &--item {
        flex: 1;
        text-align: center;
        margin-right: 1px;
        &.active {
          background-color: #333333;
          color: #ffffff;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .footer-pc {
    display: none;
  }
  .footer-h5 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}

@supports (bottom: env(safe-area-inset-bottom)) {
  .footer {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
