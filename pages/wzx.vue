<template>
  <div class="wzx">
    <!--    pc版-->
    <div class="wzx-pc">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/wzx/wzx-headImg-pc.png" alt="">

      <!--      适用人群及项目-->
      <ul class="apply">
        <li class="apply-item title">适用人群及项目</li>
        <li class="apply-item">面部微调</li>
        <li class="apply-item">泪沟</li>
        <li class="apply-item">黑眼圈</li>
        <li class="apply-item">法令纹</li>
        <li class="apply-item">木偶纹</li>
        <li class="apply-item">轮廓固定</li>
        <li class="apply-item">太阳穴凹陷</li>
      </ul>

      <!--      咨询部分-->
      <div class="consult">
        <div class="consult-topBox">
          <img class="consult-topBox-img" src="~/assets/images/wzx/wzx-zxImg.png" alt="">
          <div class="consult-topBox-textBox">
            <div class="title">紧肤溶脂提升一次搞定</div>
            <p>
              如果只是希望可以进行面部的微调，你还是你自己，只是让五官、整体面部比例更加精致化，现在有很多微整的方式，透过注射、将生物材料或人工合成生物兼容性材料注射入真皮层或皮下等方式，可以在不破坏面部结构的前提之下，达到你想要的效果，让面部年轻化、外表更有魅力，因此微整形是当下很多爱美朋友在做医疗美容时的首选。</p>
            <p>哪些人适合微整型？</p>
            <p>·从来没有医美经验、想先试试看的人</p>
            <p>·厌恶、不想永久性改变容貌的人</p>
            <p>·不想忍受过长恢复期的人</p>
            <p>·追求自然效果的人</p>
          </div>
        </div>

        <img @click="gotoLxzx" class="consult-btn" src="~/assets/images/wzx/wzx-zxBtn.png" alt="">

        <img class="consult-bottomBox" src="~/assets/images/wzx/wzx-zxBg.png" alt="">
      </div>

      <!--      详解部分-->
      <ul class="detail">
        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>肉毒素</div>
              <span>Neuromodulators</span>
            </div>
            <p class="text">肉毒素可暂时使肌肉放松、缩小，进而达到修容效果，常用来瘦脸、除皱、提升面颈部轮廓、瘦腿、瘦肩和除腋臭等。肉毒素注射是目前对眉间纹、鱼尾纹和抬头纹最有效预防方式，一般情况下，在注射
              3-7 天内产生效果。</p>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj1.png" alt="">
        </li>

        <li class="detail-item">
          <img class="headImg" src="~/assets/images/wzx/wzx-xj2.png" alt="">

          <div class="detail-item-textBox">
            <div class="title">
              <div>玻尿酸</div>
              <span>Hyaluronic Acid</span>
            </div>
            <p class="text"> 玻尿酸又称为透明质酸（Hyaluronic Acid,
              HA），是人体自然形成的天然物质，广泛存在于人体细胞外基质、玻璃体体液和软骨中，本质是一种天然多糖，因此对人体无毒无害。玻尿酸作为保湿保养品可以替肌肤表层进行补水；而作为填充剂则可以从深层将皱纹所形成的肌肤凹陷撑起来，可有效改善静态皱纹如泪沟、法令纹、木偶纹，以及修饰五官轮廓和达到紧致拉提等作用。</p>
          </div>
        </li>

        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>肉毒素</div>
              <span>Neuromodulators</span>
            </div>
            <p class="text">肉毒素可暂时使肌肉放松、缩小，进而达到修容效果，常用来瘦脸、除皱、提升面颈部轮廓、瘦腿、瘦肩和除腋臭等。肉毒素注射是目前对眉间纹、鱼尾纹和抬头纹最有效预防方式，一般情况下，在注射
              3-7 天内产生效果。</p>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj3.png" alt="">
        </li>

        <li class="detail-item">
          <img class="headImg" src="~/assets/images/wzx/wzx-xj4.png" alt="">

          <div class="detail-item-textBox">
            <div class="title">
              <div>胶原蛋白</div>
              <span></span>
            </div>
            <p class="text">
              胶原蛋白植入剂主要成份为第一型胶原蛋白，它是人体分布最广的胶原蛋白，也是皮肤含量最高之胶原蛋白，由三条多胜肽链相互缠绕而成，其具有提供组织韧性及弹性，同时有止血、受损组织修补等功能特性。胶原蛋白针可改善脸部及颈部的肌肤松弛、面容轮廓线微调和轻微凹陷填补等等。由于其材料物理美白遮瑕的特性，其最受欢迎的用途就是改善黑眼圈。</p>
          </div>
        </li>

        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>少女针</div>
              <span>Ellanse</span>
            </div>
            <p class="text"> 伊妍仕 Ellansé，即俗称的少女针。由 30%的聚己内酯 PCL 微型晶球及 70%的 CMC 凝疑胶载体所组成。CMC
              疑胶体注射至皮肤下后，可以支撑凹陷处，提供即时填补、皱纹修复的效果；PCL 微型晶球则会刺激胶原蛋白新生，因此即使在 CMC 凝胶体在人体内自然分解吸收（且不残留）后，PCL
              微型晶球仍会持续作用，诱发自体新生胶原蛋白，并逐渐取代也会被人体所吸收的 PCL 微型晶球。少女针由于其材料物理支撑力强的特性，为打造精致五官轮廓首选，并可实现轮廓固定，达到全脸拉提的效果。</p>
          </div>

          <img class="headImg" src="~/assets/images/wzx/wzx-xj5.png" alt="">

        </li>
      </ul>

      <!--      问答-->
      <div class="question">
        <Unfold></Unfold>
      </div>

      <!--      注意事项-->
      <div class="attention">
        <div class="attention-textBox">
          <div class="attention-textBox-title">术后注意事项：</div>
          <p>1、注射后，因个人体质，皮肤可能会出现发红、肿胀、疼痛、瘀青等情形均属正常状况。在注射几天后，这些反应会自动缓解。</p>
          <p>2、注射后前3 天冰敷可帮助红肿减退，肿胀持续约1周左右消失。</p>
          <p>3、注射部位注射后前4-6 周可能会有硬块的触感，此为正常的现象，这是注射后的正常象。</p>
          <p>4、若术后出现瘀青约7-14 天消失，可适当使用去瘀药膏。</p>
          <p>5、注射后4 小时内针孔尚未完全愈合，针眼处请勿碰水。</p>
          <p>6、一周内勿到高温场合，如泡温泉及汗蒸、烤箱、热瑜伽，避免烫染护发。</p>
          <p>7、一周内不用去角质，面部刮痧和使用同类洁肤护肤产品。</p>
          <p>8、一个月内避免暴晒，日光浴，并注意做好防晒隔离。</p>
          <p>9、一周内不饮酒、不食用海鲜及辛辣刺激食物，微凉水洗脸，不宜用太热或太冷的水。</p>
          <p>10、加强保湿，避免皮肤因缺水老化产生细纹皱纹。</p>
          <p>◆有任何疑虑请安排回诊咨询。</p>
        </div>
        <img class="headImg" src="~/assets/images/wzx/wzx-zyImg.png" alt="">
      </div>
    </div>

    <!--    h5版-->
    <div class="wzx-h5"></div>
  </div>
</template>

<script>
import {navigateTo} from "nuxt/app";

export default {
  name: "wzx",

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
        margin: 30px 0 33px;
      }

      @at-root &-bottomBox {
        display: block;
        width: 100%;
        height: auto;
        vertical-align: middle;
        margin: 0 auto;
      }
    }

    //详解部分
    .detail {
      margin-bottom: 0;

      @at-root &-item {
        padding: 38px 360px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @at-root &-textBox {
          flex: 1;
          margin-right: 83px;

          .title {
            display: flex;
            align-items: baseline;
            font-size: 36px;
            color: #333333;
            margin-bottom: 15px;

            span {
              font-size: 14px;
              color: #000000;
              margin-left: 10px;
            }
          }

          p {
            margin: 0;
            text-indent: 2em;
            line-height: 1.5;
            font-size: 14px;
            color: rgba(68, 68, 68, 0.85);
          }
        }

        img {
          flex-shrink: 0;
          height: 308px;
          width: auto;
          vertical-align: middle;
        }
      }
      .detail-item:nth-child(2n) {
        background: #FFFFFF;

        img {
          margin-right: 83px;
        }

        .detail-item-textBox {
          margin: 0;
        }
      }

      .detail-item:nth-child(2n+1) {
        background: #F6F6F6;
      }
    }

    //问答
    .question {
      padding: 60px 360px;
      background: #EFEFF3;
    }

    //注意事项
    .attention {
      padding: 30px 360px 45px;
      background: #FFFFFF;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @at-root &-textBox {
        flex: 1;
        margin-right: 79px;

        @at-root &-title {
          font-size: 36px;
          color: #333333;
          margin-bottom: 15px;
        }

        p {
          font-size: 14px;
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;
          margin-bottom: 10px;
        }
      }

      img {
        width: 524px;
        height: auto;
        vertical-align: middle;
      }
    }
  }

  //h5版
  @at-root &-h5 {
    display: none;
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