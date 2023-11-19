<template>
  <div class="footer">
    <div class="footer-pc">
      <div class="footer-pc-phone">
        <div class="footer-pc-phone-one" @click="gotoLxzx">联系我们</div>
        <div class="footer-pc-phone-two" @click="gzhClick">
          <span>公众号</span>
          <div class="bubbleBox" :class="showBubble ?  'showBubble' : ''">
            <img src="~/assets/images/footer/gzhCode.png" alt="">
          </div>
        </div>
        <div class="footer-pc-phone-three">138 8888 8888</div>
      </div>
      <div class="footer-pc-top">
        <div class="logo">
          <img src="~/assets/images/nav/logo.png" alt="">
        </div>
      </div>
      <div class="footer-pc-bottom">
        <div class="media">
          <div class="media-title">关注DR.Terry YEn：</div>
          <ul class="media-iocnBox">
            <li class="media-iocnBox-item">
              <img @click="iconClick('youtu')" class="icon" src="~/assets/images/footer/footer-youtu.png" alt="">
            </li>

            <li class="media-iocnBox-item">
              <img @click="iconClick('ins')" class="icon" src="~/assets/images/footer/footer-ins.png" alt="">
            </li>

            <li class="media-iocnBox-item">
              <img @click="iconClick('faceb')" class="icon" src="~/assets/images/footer/footer-faceb.png" alt="">
            </li>

            <li class="media-iocnBox-item">
              <img @click="iconClick('weixin')" class="icon" src="~/assets/images/footer/footer-weixin.png" alt="">

              <div class="bubbleBox" :class="showBubbleText === 'weixin' ? 'showBubble' : ''">
                <img src="~/assets/images/footer/kfCode.png" alt="">
              </div>
            </li>

            <li class="media-iocnBox-item">
              <img @click="iconClick('weibo')" class="icon" src="~/assets/images/footer/footer-weibo.png" alt="">
            </li>

            <li class="media-iocnBox-item">
              <img @click="iconClick('zhihu')" class="icon" src="~/assets/images/footer/footer-zhihu.png" alt="">
            </li>
          </ul>
        </div>

        <div class="textBox">
          <div class="textBox-title">联系我们：</div>

          <ul class="textBox-text">
            <li>Email：drterryyen @gmail.com</li>
            <li>Wechat: drterryassistant</li>
            <li>中国上海市长宁区定西路738号2F上海复丽医疗美容门诊部</li>
          </ul>
        </div>

        <div class="qrcode">
          <div class="qrcode-leftBox">
            <div>颜医生服务热线</div>
            <span>13693224553</span>
          </div>

          <div class="qrcode-codeBox">
            <img src="~/assets/images/footer/gzhCode.png" alt="">
            <div>关注公众号</div>
          </div>
          <div class="qrcode-codeBox">
            <img src="~/assets/images/footer/kfCode.png" alt="">
            <div>联系客服</div>
          </div>
        </div>

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
          <div class="media">
            <ul class="media-iocnBox">
              <li class="media-iocnBox-item">
                <img @click="iconClick('youtu')" class="icon" src="~/assets/images/footer/footer-youtu.png" alt="">
              </li>

              <li class="media-iocnBox-item">
                <img @click="iconClick('ins')" class="icon" src="~/assets/images/footer/footer-ins.png" alt="">
              </li>

              <li class="media-iocnBox-item">
                <img @click="iconClick('faceb')" class="icon" src="~/assets/images/footer/footer-faceb.png" alt="">
              </li>

              <li class="media-iocnBox-item">
                <img @click="iconClick('weixin')" class="icon" src="~/assets/images/footer/footer-weixin.png" alt="">

                <div class="bubbleBox" :class="showBubbleText === 'weixin' ? 'showBubble' : ''">
                  <img src="~/assets/images/footer/kfCode.png" alt="">
                </div>
              </li>

              <li class="media-iocnBox-item">
                <img @click="iconClick('weibo')" class="icon" src="~/assets/images/footer/footer-weibo.png" alt="">
              </li>

              <li class="media-iocnBox-item">
                <img @click="iconClick('zhihu')" class="icon" src="~/assets/images/footer/footer-zhihu.png" alt="">
              </li>
            </ul>
          </div>
          <div class="textBox">
            <div class="textBox-title">联系我们：</div>

            <ul class="textBox-text">
              <li>Email：drterryyen @gmail.com</li>
              <li>Wechat: drterryassistant</li>
              <li>中国上海市长宁区定西路738号2F上海复丽医疗美容门诊部</li>
            </ul>
          </div>
          <div class="qrcode">
            <div class="qrcode-leftBox">
              <div>颜医生服务热线</div>
              <span>13693224553</span>
            </div>

            <div class="qrcode-codeBox">
              <img src="~/assets/images/footer/gzhCode.png" alt="">
              <div>关注公众号</div>
            </div>
            <div class="qrcode-codeBox">
              <img src="~/assets/images/footer/kfCode.png" alt="">
              <div>联系客服</div>
            </div>
          </div>

          <div class="hint">
            任何治疗皆会因个人体质与术后保养影响，而导致治疗效果有所差异，本站之内容仅供参考，实际须由医师当面与您进行评估沟通而定。未经授权同意，请勿节录或转载本站图文，翻印必究。
          </div>
        </div>
      </div>
      <div class="footer-h5-bottom">
        <div class="footer-h5-bottom--item" @click="gotoLxzx">联系我们</div>
        <div class="footer-h5-bottom--item active" @click="gzhClick">
          <span>公众号</span>
          <div class="bubbleBox" :class="showBubble ?  'showBubble' : ''">
            <img src="~/assets/images/footer/gzhCode.png" alt="">
          </div>
        </div>
        <div class="footer-h5-bottom--item"><a href="tel:13888888888">138 8888 8888</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import {navigateTo} from "nuxt/app";

export default {
  data() {
    return {
      mediaUrl: {
        'youtu': 'https://www.youtube.com/@dr.terryyen',
        'ins': 'https://www.instagram.com/drterryyen/',
        'faceb': 'https://www.facebook.com/profile.php?id=100087507638254&sk=about',
        'weibo': 'http://weibo.com/drterryyen',
        'zhihu': 'https://www.zhihu.com/people/drterryyen'
      },
      showBubbleText: '',
      showBubble: false
    }
  },

  methods: {
    iconClick(val) {
      if (val === 'weixin') {
        if (this.showBubbleText === 'weixin') {
          this.showBubbleText = ''
        } else {
          this.showBubbleText = val
        }
      } else {
        location.href = this.mediaUrl[val]
      }
    },
    gzhClick() {
      this.showBubble = !this.showBubble
    },
    gotoLxzx() {
      navigateTo({
        path: "/lxzx"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @at-root &-pc {
    background-color: #3D3D3D;
    position: relative;

    @at-root &-phone {
      position: absolute;
      right: 0;
      top: -36px;
      z-index: 1;
      width: 375px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #DDDDDD;
      height: 35px;
      font-size: 14px;
      color: #333333;
      border-radius: 6px 6px 0 0;

      @at-root &-one {
        height: 100%;
        flex-shrink: 0;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @at-root &-two {
        height: 100%;
        flex-shrink: 0;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #333333;
        color: #FFFFFF;
        border-left: 1px solid #FFFFFF;
        border-right: 1px solid #FFFFFF;
        position: relative;

        .bubbleBox {
          display: none;
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          background: #DDDDDD;
          width: 100px;
          padding: 10px;
          border-radius: 6px;

          img {
            width: 100%;
            vertical-align: middle;
          }
        }

        .bubbleBox:before {
          display: block;
          content: '';
          width: 0;
          height: 0;
          border-top: 10px solid #DDDDDD;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
        }

        .showBubble {
          display: block !important;
        }
      }

      @at-root &-three {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
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
        @at-root &-title {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        @at-root &-iocnBox {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 160px;

          @at-root &-item {
            margin: 5px;
            position: relative;

            .icon {
              height: 40px;
              width: 40px;
              vertical-align: middle;
            }

            .bubbleBox {
              display: none;
              position: absolute;
              bottom: 55px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 10;
              width: 150px;
              padding: 10px;
              background: #FFFFFF;
              border-radius: 6px;

              img {
                width: 100%;
                vertical-align: middle;
              }
            }

            .bubbleBox:before {
              display: block;
              content: '';
              width: 0;
              height: 0;
              border-top: 10px solid #FFFFFF;
              border-right: 10px solid transparent;
              border-left: 10px solid transparent;
              position: absolute;
              bottom: -9px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 15;
            }

            .showBubble {
              display: block !important;
            }
          }
        }
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
        display: flex;

        @at-root &-leftBox {
          font-size: 16px;
          color: #909494;
          text-align: center;
          margin-right: 10px;

          span {
            font-size: 24px;
            font-weight: 500;
            color: #666666;
          }
        }

        @at-root &-codeBox {
          text-align: center;
          margin-right: 10px;
          font-size: 10px;
          color: #909494;

          img {
            height: 80px;
            vertical-align: middle;
            margin-bottom: 8px;
          }
        }
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
          padding: 28px 0;

          @at-root &-iocnBox {
            display: flex;
            align-items: center;
            justify-content: center;

            @at-root &-item {
              margin: 5px;
              position: relative;

              .icon {
                height: 24px;
                width: 24px;
                vertical-align: middle;
              }

              .bubbleBox {
                display: none;
                position: absolute;
                bottom: 55px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
                width: 150px;
                padding: 10px;
                background: #FFFFFF;
                border-radius: 6px;

                img {
                  width: 100%;
                  vertical-align: middle;
                }
              }

              .bubbleBox:before {
                display: block;
                content: '';
                width: 0;
                height: 0;
                border-top: 10px solid #FFFFFF;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                position: absolute;
                bottom: -9px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 15;
              }

              .showBubble {
                display: block !important;
              }
            }
          }
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
          display: flex;
          justify-content: center;

          @at-root &-leftBox {
            font-size: 16px;
            color: #909494;
            text-align: center;
            margin-right: 10px;

            span {
              font-size: 24px;
              font-weight: 500;
              color: #666666;
            }
          }

          @at-root &-codeBox {
            text-align: center;
            margin-right: 10px;
            font-size: 10px;
            color: #909494;

            img {
              height: 80px;
              vertical-align: middle;
              margin-bottom: 8px;
            }
          }
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
        position: relative;

        &.active {
          background-color: #333333;
          color: #ffffff;
        }

        .bubbleBox {
          display: none;
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          background: #DDDDDD;
          width: 100px;
          padding: 10px;
          border-radius: 6px;

          img {
            width: 100%;
            vertical-align: middle;
          }
        }

        .bubbleBox:before {
          display: block;
          content: '';
          width: 0;
          height: 0;
          border-top: 10px solid #DDDDDD;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
        }

        .showBubble {
          display: block !important;
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
