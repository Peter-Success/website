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
            <p>如果只是希望可以进行面部的微调，你还是你自己，只是让五官、整体面部比例更加精致化，现在有很多微整的方式，透过注射、将生物材料或人工合成生物兼容性材料注射入真皮层或皮下等方式，可以在不破坏面部结构的前提之下，达到你想要的效果，让面部年轻化、外表更有魅力，因此微整形是当下很多爱美朋友在做医疗美容时的首选。</p>
            <p>哪些人适合微整型？</p>
            <p>·从来没有医美经验、想先试试看的人</p>
            <p>·厌恶、不想永久性改变容貌的人</p>
            <p>·不想忍受过长恢复期的人</p>
            <p>·追求自然效果的人</p>
          </div>
        </div>

        <img class="consult-btn" src="~/assets/images/wzx/wzx-zxBtn.png" alt="">

        <img class="consult-bottomBox" src="~/assets/images/wzx/wzx-zxBg.png" alt="">
      </div>
    </div>

    <!--    h5版-->
    <div class="wzx-h5"></div>
  </div>
</template>

<script>
export default {
  name: "wzx"
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