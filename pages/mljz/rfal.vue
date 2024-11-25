<template>
  <div class="wzx">
    <!--    pc版-->
    <div class="wzx-pc">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/wzx/wzx-headImg-pc.jpg" alt="">

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
          <img class="consult-topBox-img" src="~/assets/images/wzx/wzx-zxImg.jpg" alt="">
          <div class="consult-topBox-textBox">
            <div class="title">冻龄抗衰免动刀，轻轻松松焕然一新</div>
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

        <img class="consult-bottomBox" src="~/assets/images/wzx/wzx-zxBg.jpg" alt="">
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
          <img class="headImg" src="~/assets/images/wzx/wzx-xj1.jpg" alt="">
        </li>

        <li class="detail-item">
          <img class="headImg" src="~/assets/images/wzx/wzx-xj2.jpg" alt="">

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
              <div>胶原蛋白</div>
              <span></span>
            </div>
            <p class="text">胶原蛋白植入剂主要成份为第一型胶原蛋白，它是人体分布最广的胶原蛋白，也是皮肤含量最高之胶原蛋白，由三条多胜肽链相互缠绕而成，其具有提供组织韧性及弹性，同时有止血、受损组织修补等功能特性。胶原蛋白针可改善脸部及颈部的肌肤松弛、面容轮廓线微调和轻微凹陷填补等等。由于其材料物理美白遮瑕的特性，其最受欢迎的用途就是改善黑眼圈。</p>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj3.jpg" alt="">
        </li>

        <li class="detail-item">
          <img class="headImg" src="~/assets/images/wzx/wzx-xj4.jpg" alt="">

          <div class="detail-item-textBox">
            <div class="title">
              <div>童颜针</div>
              <span></span>
            </div>
            <p class="text">童颜针材料为聚左旋乳酸（PLLA），是一种胶原蛋白的刺激物，注射进入人体后，可以刺激纤维母细胞，促使胶原蛋白新生，进而让皮肤变得有弹力、紧实。此外，也可以改善肌肤流失胶原蛋白所产生的凹陷与皱纹，达到填充的效果。需要特别留意的是，童颜针主要采渐进式的方式来促进胶原蛋白的再生，效果为慢慢自然的呈现，因此需要疗程治疗，注射后通常需给予 1 个月左右的时间才会看见效果，非常适合想低调变美的人群。值得一提的是，注射童颜针后需遵守 555（每天 5 次、每次 5 分钟、连续 5 天）的按摩护理法则，让PLLA注射物均匀分散至皮肤，达到最自然的胶原蛋白增生效果。</p>
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

          <img class="headImg" src="~/assets/images/wzx/wzx-xj5.jpg" alt="">

        </li>
      </ul>

      <!--      问答-->
      <div class="question">
        <Unfold :list="questionList"></Unfold>
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
        <img class="headImg" src="~/assets/images/wzx/wzx-zyImg.jpg" alt="">
      </div>
    </div>

    <!--    h5版-->
    <div class="wzx-h5">
      <!--      头图部分-->
      <img class="headImg" src="~/assets/images/wzx/wzx-headImg-h5.jpg" alt="">

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
          <img class="consult-topBox-img" src="~/assets/images/wzx/wzx-zxImg.jpg" alt="">
          <div class="consult-topBox-textBox">
            <div class="title">冻龄抗衰免动刀，轻轻松松焕然一新</div>
            <p>
              如果只是希望可以进行面部的微调，你还是你自己，只是让五官、整体面部比例更加精致化，现在有很多微整的方式，透过注射、将生物材料或人工合成生物兼容性材料注射入真皮层或皮下等方式，可以在不破坏面部结构的前提之下，达到你想要的效果，让面部年轻化、外表更有魅力，因此微整形是当下很多爱美朋友在做医疗美容时的首选。</p>
            <p>哪些人适合微整型？</p>
            <p>·从来没有医美经验、想先试试看的人</p>
            <p>·厌恶、不想永久性改变容貌的人</p>
            <p>·不想忍受过长恢复期的人</p>
            <p>·追求自然效果的人</p>
          </div>
        </div>

        <img class="consult-bottomBox" src="~/assets/images/wzx/wzx-zxBg.jpg" alt="">
      </div>

      <!--      详解部分-->
      <ul class="detail">
        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>肉毒素</div>
            </div>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj1.jpg" alt="">
          <p class="text">肉毒素可暂时使肌肉放松、缩小，进而达到修容效果，常用来瘦脸、除皱、提升面颈部轮廓、瘦腿、瘦肩和除腋臭等。肉毒素注射是目前对眉间纹、鱼尾纹和抬头纹最有效预防方式，一般情况下，在注射
            3-7 天内产生效果。</p>
        </li>

        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>玻尿酸</div>
            </div>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj2.jpg" alt="">
          <p class="text"> 玻尿酸又称为透明质酸（Hyaluronic Acid,
            HA），是人体自然形成的天然物质，广泛存在于人体细胞外基质、玻璃体体液和软骨中，本质是一种天然多糖，因此对人体无毒无害。玻尿酸作为保湿保养品可以替肌肤表层进行补水；而作为填充剂则可以从深层将皱纹所形成的肌肤凹陷撑起来，可有效改善静态皱纹如泪沟、法令纹、木偶纹，以及修饰五官轮廓和达到紧致拉提等作用。</p>
        </li>

        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>胶原蛋白</div>
            </div>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj3.jpg" alt="">
          <p class="text">胶原蛋白植入剂主要成份为第一型胶原蛋白，它是人体分布最广的胶原蛋白，也是皮肤含量最高之胶原蛋白，由三条多胜肽链相互缠绕而成，其具有提供组织韧性及弹性，同时有止血、受损组织修补等功能特性。胶原蛋白针可改善脸部及颈部的肌肤松弛、面容轮廓线微调和轻微凹陷填补等等。由于其材料物理美白遮瑕的特性，其最受欢迎的用途就是改善黑眼圈。</p>
        </li>

        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>童颜针</div>
            </div>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj4.jpg" alt="">
          <p class="text">童颜针材料为聚左旋乳酸（PLLA），是一种胶原蛋白的刺激物，注射进入人体后，可以刺激纤维母细胞，促使胶原蛋白新生，进而让皮肤变得有弹力、紧实。此外，也可以改善肌肤流失胶原蛋白所产生的凹陷与皱纹，达到填充的效果。需要特别留意的是，童颜针主要采渐进式的方式来促进胶原蛋白的再生，效果为慢慢自然的呈现，因此需要疗程治疗，注射后通常需给予 1 个月左右的时间才会看见效果，非常适合想低调变美的人群。值得一提的是，注射童颜针后需遵守 555（每天 5 次、每次 5 分钟、连续 5 天）的按摩护理法则，让PLLA注射物均匀分散至皮肤，达到最自然的胶原蛋白增生效果。</p>
        </li>

        <li class="detail-item">
          <div class="detail-item-textBox">
            <div class="title">
              <div>少女针</div>
            </div>
          </div>
          <img class="headImg" src="~/assets/images/wzx/wzx-xj5.jpg" alt="">
          <p class="text"> 伊妍仕 Ellansé，即俗称的少女针。由 30%的聚己内酯 PCL 微型晶球及 70%的 CMC 凝疑胶载体所组成。CMC
            疑胶体注射至皮肤下后，可以支撑凹陷处，提供即时填补、皱纹修复的效果；PCL 微型晶球则会刺激胶原蛋白新生，因此即使在 CMC 凝胶体在人体内自然分解吸收（且不残留）后，PCL
            微型晶球仍会持续作用，诱发自体新生胶原蛋白，并逐渐取代也会被人体所吸收的 PCL 微型晶球。少女针由于其材料物理支撑力强的特性，为打造精致五官轮廓首选，并可实现轮廓固定，达到全脸拉提的效果。</p>
        </li>
      </ul>

      <!--      问答-->
      <div class="question">
        <Unfold :list="questionList"></Unfold>
      </div>

      <!--      注意事项-->
      <div class="attention">
        <div class="attention-title">术后注意事项：</div>
        <img class="headImg" src="~/assets/images/wzx/wzx-zyImg.jpg" alt="">
        <div class="attention-textBox">
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
      </div>
    </div>
  </div>
</template>

<script>
import {navigateTo} from "nuxt/app";

export default {
  name: "wzx",

  data() {
    return {
      questionList: [
        {question: 'Q. 少女针和玻尿酸有何不同？', answer: '答：少女针除了如同玻尿酸具有立即填充的效果外，其主要作用在于刺激自体胶原蛋白增生以建到治疗目的·因此莲丝结合填充型和活化型植入剂的优点。'},
        {
          question: 'Q:请问玻尿酸可以用来除皱吗？',
          answer: '答：玻尿酸主要注射在皮下的真皮层，对于静态性皱纹，也就是您不作表情也可以见到的细纹（如深的抬头纹、皱眉纹、法令纹及木偶纹)，及疤痕凹陷（如痘疤）等，都有很好的治疗效果。'
        },
        {
          question: 'Q.想塑造自然美丽的关键是什么？',
          answer: '答：就如同看病需要诊断一样，要自然美颜的关键就在于“全脸评估”。有些求美者认为只要告诉医师自己要在哪里打什么、花多少钱就好，但这种不专业“自行想像”的治疗方式，往往和实际需要的天差地别。想要美得自然，必须清楚向医生表达需求，而医师则要根据学理、解剖学的认知诊断出问题，再提出治疗策略。因为医师受过医疗训练，能够进行专业的诊断和评估，实际治疗时，更懂得闪避高风险区域，所以提醒求美者，在接受医美疗程前，务必经过全脸评估，找出最佳的治疗方法，才是自然变美的最大关键喔！'
        },
        {
          question: 'Q.医美注射要如何精确施打在对的位置？',
          answer: '答：其实这就是考验医生技术的地方。很多求美者以为只要把针打在觉得有问题的部位就能改善问题，其实并没有这么简单喔！以肉毒瘦脸为例，医师必须熟知肌肉的深浅度、肌肉的原本功能、肌肉的附着位置，才能评估是否是属于肉毒杆菌能够解决的问题。例如咬肌肥大（国字脸）可利用肉毒治疗，但如果嘴边肉其实是脂肪太多造成，就无法用这个方式改善了。再以填补法令纹为例，一般人只要发现法令纹变深，可能就直觉地希望用玻尿酸填补，但医师也必须确认填充的深度，并修饰老化的骨骼流失或是加上脂肪拉提复位，如此多管齐下，才能真正地改善法令纹。'
        }
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
      padding: 0 20px 20px;

      @at-root &-topBox {
        border-bottom: 1px solid #B7B7B7;

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
        width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }

    //详解部分
    .detail {
      margin-bottom: 0;

      @at-root &-item {
        padding: 38px 20px;

        @at-root &-textBox {
          .title {
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            color: #333333;
            margin-bottom: 30px;

            span {
              font-size: 14px;
              color: #000000;
              margin-left: 10px;
            }
          }
        }

        img {
          width: 100%;
          height: auto;
          vertical-align: middle;
          margin-bottom: 30px;
        }

        p {
          margin: 0;
          text-indent: 2em;
          line-height: 1.5;
          font-size: 14px;
          color: rgba(68, 68, 68, 0.85);
        }
      }
      .detail-item:nth-child(2n) {
        background: #FFFFFF;
      }

      .detail-item:nth-child(2n+1) {
        background: #F6F6F6;
      }
    }

    //问答
    .question {
      padding: 20px;
      background: #EFEFF3;
    }

    //注意事项
    .attention {
      padding: 35px 20px 28px;
      background: #FFFFFF;

      @at-root &-title {
        text-align: center;
        font-size: 24px;
        color: #333333;
        margin-bottom: 25px;
      }

      img {
        width: 100%;
        height: auto;
        vertical-align: middle;
        margin-bottom: 25px;
      }

      @at-root &-textBox {
        p {
          font-size: 14px;
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;
          margin-bottom: 10px;
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