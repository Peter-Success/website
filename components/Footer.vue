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
      <div class="footer-pc-hint">
        任何治疗皆会因个人体质与术后保养影响，而导致治疗效果有所差异，本站之内容仅供参考，实际须由医师当面与您进行评估沟通而定。未经授权同意，请勿节录或转载本站图文，翻印必究。
      </div>
    </div>

    <div class="footer-h5">
      <div class="footer-h5-top">
        <div class="logoBox">
          <img src="~/assets/images/nav/logo.png" alt="">
        </div>

        <div class="contentBox">
          <img class="media" src="~/assets/images/footer/footer-media-h5.png" alt="">
          <div class="textBox">
            <div class="textBox-title">联系我们：</div>

            <ul class="textBox-text">
              <li>Email：drterryyen @gmail.com</li>
              <li>Wechat: drterryassistant</li>
              <li>中国上海市长宁区定西路738号2F上海复丽医疗美容门诊部</li>
            </ul>
          </div>
          <img class="qrcode" src="~/assets/images/footer/footer-qrcode.png" alt="">

          <div class="hint">
            任何治疗皆会因个人体质与术后保养影响，而导致治疗效果有所差异，本站之内容仅供参考，实际须由医师当面与您进行评估沟通而定。未经授权同意，请勿节录或转载本站图文，翻印必究。
          </div>
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
    background-color: #3D3D3D;

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
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 40px 0 59px;

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
    @at-root &-hint {
      margin: 40px 360px 0;
      padding: 10px 100px 20px;
      text-align: center;
      text-align: center;
      border-top: 1px solid #FFFFFF;
      font-size: 14px;
      line-height: 1.5;
      color: #FFFFFF;
    }
  }

  @at-root &-h5 {
    display: none;
    width: 100%;

    @at-root &-top {
      width: 100%;

      .logoBox {
        text-align: center;
        padding: 15px 0;
        background: #DDA365;

        img {
          height: 64px;
          width: auto;
          vertical-align: middle;
        }
      }

      .contentBox {
        background-color: #3D3D3D;
        text-align: center;

        .media {
          height: 24px;
          vertical-align: middle;
          margin: 28px 0;
        }

        .textBox {
          text-align: left;
          padding: 0 25px;
          font-size: 14px;
          font-weight: 500;
          color: #FFFFFF;
          list-style: none;
          margin: 0;
          line-height: 1.5;

          @at-root &-title {
            margin-bottom: 16px;
          }

          @at-root &-text {
            list-style: none;
            padding: 0;
          }
        }

        .qrcode {
          width: 95%;
          height: auto;
          vertical-align: middle;
          margin: 10px 0;
        }

        .hint {
          margin-top: 20px;
          padding: 10px;
          text-align: center;
          text-align: center;
          border-top: 1px solid #FFFFFF;
          font-size: 12px;
          line-height: 1.5;
          color: #FFFFFF;
        }
      }
    }

    @at-root &-bottom {
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
