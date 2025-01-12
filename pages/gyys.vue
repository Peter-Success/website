<template>
  <div class="gyys">
    <swiper
        class="gyys-one"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :pagination="{ clickable: true }"
        :modules="modules"
        :loop="true"
    >
      <swiper-slide>
        <a-row>
          <a-col :xs="0" :sm="24">
            <img src="~/assets/images/gyys/gyys-banner-pc.jpg" alt="">
          </a-col>
          <a-col :xs="24" :sm="0">
            <img src="~/assets/images/gyys/gyys-banner-h5.jpg" alt="">
          </a-col>
        </a-row>
      </swiper-slide>
      <swiper-slide>
        <a-row>
          <a-col :xs="0" :sm="24">
            <img src="~/assets/images/gyys/gyys-banner1-pc.jpg" alt="">
          </a-col>
          <a-col :xs="24" :sm="0">
            <img src="~/assets/images/gyys/gyys-banner1-h5.jpg" alt="">
          </a-col>
        </a-row>
      </swiper-slide>
    </swiper>

    <!--    pc版-->
    <div class="gyys-pc">
      <!--      教育背景部分-->
      <div class="education">
        <!--        标题-->
        <div class="education-titleBox">
          <div>教育背景</div>
          <span class="education-titleBox-subTitle">Educational Background</span>
        </div>

        <!--        内容部分-->
        <div class="education-contentBox">
          <img class="education-contentBox-portrait" src="~/assets/images/gyys/gyys-portrait.jpg" alt="">
          <div class="education-contentBox-rightBox">
            <div class="bschooladgeBox">
              <img src="~/assets/images/gyys/gyys-Bschooladge.jpg" alt="">
              <div>北京大学 临床医学系、清华大学-澳大利亚国立大学 管理学系</div>
            </div>

            <ul class="itemBox">
              <li>颜士钧医师拥有整形外科及管理学双学位（MD/MM），从事整形美容工作 19 余年担任：</li>
              <li>● 美国整形美容手术学会AICPS 讲师</li>
              <li>● 韩国美容外科协会 KSAS 讲师</li>
              <li>● 美国整形外科医师协会ASPS 会员</li>
              <li>● 东方国际美容外科协会 ECS讲师</li>
              <li>● 美国美容医学学会 AAAM 成员</li>
              <li>● 国际皮肤美容外科联盟 DASIL成员</li>
              <li>● 亚太美容外科医学会 APACS 成员</li>
              <li>● 中国整形美容协会CAPA会员</li>
            </ul>
          </div>
        </div>
      </div>

      <!--      合影部分-->
      <ul class="groupPhoto">
        <li class="groupPhoto-item one">
          <img src="~/assets/images/gyys/gyys-experience1.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <div>杰佛里·克莱恩</div>
            <span>颜医生的美国导师，美国著名皮肤外科医生克莱恩博士（Dr. Jeffrey Klein），为国际美容外科的开山鼻祖，他的划时代发明“TML 美式显微脂肪雕塑”因为安全、精细高效、无需全身麻醉、微创舒适、术后无需穿着束身衣和恢复快等特点，一举使吸脂手术从传统的大手术摇身一变为午餐美容，造福了世界广大的求美者。</span>
          </div>
        </li>

        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience2.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>中国整形美容界泰斗高景恒教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience3.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>台湾亚太美容外科医学会理事长 Dr. Justin Hao</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience4.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>中华海峡两岸整形美容协会理事长 王笃行教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience5.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>大连医科大学 王冀耕教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience7.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>美国著名整形专家Michael Pasquale</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience6.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>科尔曼脂肪注射创始人Sydney R. Coleman</span>
          </div>
        </li>
      </ul>

      <!--      荣誉证书-->
      <div class="certificate">
        <div class="certificate-titleBox">
          <div>荣誉证书</div>
          <span class="certificate-titleBox-subTitle">Certificate of honor</span>
        </div>

        <div class="certificate-contentBox">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate1.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate2.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate3.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate4.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate5.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate6.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate7.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate8.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate9.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate10.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate11.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate12.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate13.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate14.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate15.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate16.jpg" alt="">
        </div>
      </div>

      <!--      医学著作-->
      <div class="work">
        <div class="work-titleBox">
          <div>医学著作</div>
          <span class="work-titleBox-subTitle">Publication</span>
        </div>

        <div class="work-contentBox">
          <img class="work-contentBox-img" src="~/assets/images/gyys/gyys-work.jpg" alt="">

          <div class="work-contentBox-rightBox">
            <ul class="textBox">
              <li>
                <div>●《面部危险区-整形美容医师必知的面部七大雷区》</div>
                <span>Facial Danger Zones: Avoiding Nerve Injury in Facial Plastic Surgery</span>
              </li>
              <li>
                <div>●《面部危险区-美容手术、注射填充、微创治疗风险防范的解剖指引》</div>
                <span>Facial Danger Zones: Staying safe with surgery, fillers and non-invasive devices</span>
              </li>
              <li>
                <div>●《达拉斯美容手术大全》</div>
                <span>Masters of Cosmetic Surgery - The Video Atlas: The Dallas Cosmetic Model</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--      发表论文-->
      <div class="thesis">
        <div class="thesis-titleBox">
          <div>发表论文</div>
          <span class="thesis-titleBox-subTitle">Professional paper</span>
        </div>

        <div class="thesis-contentBox">
          <div class="thesis-contentBox-leftBox">
            <!--            <div class="title">整形美容核心期刊论文4篇， SCI论文1篇。</div>-->
            <ul class="textBox">
              <li>
                <div>● 抽脂手术的发展史,台湾医界, 2014</div>
                <span>The evolution of Liposuction, Taiwan Medical Journal , 2014, 57(10):8-12</span>
              </li>
              <li>
                <div>● 皮下肿胀显微体雕术的临床应用, 中国整型美容外科杂志, 2015</div>
                <span>Clinical Application of Tumescent Microliposculpture Technique, Chinese Journal Of Aesthetic and Plastic Surgery, 2015, 26(1):62-64</span>
              </li>
              <li>
                <div>● 男性乳房发育症的手术治疗新趋势, 中国整型美容外科杂志, 2016</div>
                <span>New Trend in the Surgical Treatment of Gynecomastia by Tumescent Microliposculpture solely, Chinese Journal Of Aesthetic and Plastic Surgery, 2016, 27(4):231-233</span>
              </li>
              <li>
                <div>● 自体脂肪移植技术之最新进展--赢的策略, 台湾医界, 2016</div>
                <span>The updated concept of Autologous Fat Implantation - How to Boost Fat Grafting Survivability, 2016, 59(9):1-6</span>
              </li>
              <li>
                <div>● Bipolar Radiofrequency-Assisted Liposuction for Cervical Contouring in Eastern Asians, Aesthetic Surgery Journal Open Forum, 2023</div>
              </li>
              <li>
                <div>● 双极射频辅助吸脂治疗颈部皮肤及软组织松弛的应用研究，安徽医科大学，2023</div>
                <span>Bipolar radiofrequency-assisted liposuction applied to cervicomental angle definition 【D】. Anhui Medical University, 2023:6.</span>
              </li>
            </ul>
          </div>

          <img class="thesis-contentBox-img" src="~/assets/images/gyys/gyys-thesis.jpg" alt="">
        </div>
      </div>
    </div>

    <!--    h5版-->
    <div class="gyys-h5">
      <!--      教育背景部分-->
      <div class="education">
        <!--        标题-->
        <div class="education-titleBox">
          <div>教育背景</div>
          <span class="education-titleBox-subTitle">Educational Background</span>
        </div>

        <!--        内容部分-->
        <div class="education-contentBox">
          <div class="bschooladgeBox">
            <img src="~/assets/images/gyys/gyys-Bschooladge.jpg" alt="">
            <div class="bschooladgeBox-text">北京大学 临床医学系、清华大学-澳大利亚国立大学 管理学系</div>
          </div>

          <ul class="textBox">
            <li>颜士钧医师拥有整形外科及管理学双学位（MD/MM），从事整形美容工作 19 余年担任：</li>
              <li>● 美国整形美容手术学会AICPS 讲师</li>
              <li>● 韩国美容外科协会 KSAS 讲师</li>
              <li>● 美国整形外科医师协会ASPS 会员</li>
              <li>● 东方国际美容外科协会 ECS讲师</li>
              <li>● 美国美容医学学会 AAAM 成员</li>
              <li>● 国际皮肤美容外科联盟 DASIL成员</li>
              <li>● 亚太美容外科医学会 APACS 成员</li>
              <li>● 中国整形美容协会CAPA会员</li>
          </ul>

          <img class="portrait" src="~/assets/images/gyys/gyys-portrait.jpg" alt="">
        </div>
      </div>

      <!--      合影部分-->
      <ul class="groupPhoto">
        <li class="groupPhoto-item one">
          <img src="~/assets/images/gyys/gyys-experience1.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <div>杰佛里·克莱恩</div>
            <span>颜医生的美国导师，美国著名皮肤外科医生克莱恩博士（Dr. Jeffrey Klein），为国际美容外科的开山鼻祖，他的划时代发明“TML 美式显微脂肪雕塑”因为安全、精细高效、无需全身麻醉、微创舒适、术后无需穿着束身衣和恢复快等特点，一举使吸脂手术从传统的大手术摇身一变为午餐美容，造福了世界广大的求美者。</span>
          </div>
        </li>

        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience2.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>中国整形美容界泰斗高景恒教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience3.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>台湾亚太美容外科医学会理事长 Dr. Justin Hao</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience4.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>中华海峡两岸整形美容协会理事长 王笃行教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience5.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>大连医科大学 王冀耕教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience7.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>美国著名整形专家Michael Pasq</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience6.jpg" alt="">
          <div class="groupPhoto-item-textBox">
            <span>科尔曼脂肪注射创始人Sydney R. Coleman</span>
          </div>
        </li>
      </ul>

      <!--      荣誉证书-->
      <div class="certificate">
        <div class="certificate-titleBox">
          <div>荣誉证书</div>
          <span class="certificate-titleBox-subTitle">Certificate of honor</span>
        </div>

        <div class="certificate-contentBox">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate1.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate2.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate3.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate4.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate5.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate6.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate7.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate8.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate9.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate10.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate11.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate12.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate13.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate14.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate15.jpg" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate16.jpg" alt="">
        </div>
      </div>

      <!--      医学著作-->
      <div class="work">
        <div class="work-titleBox">
          <div>医学著作</div>
          <span class="work-titleBox-subTitle">Publication</span>
        </div>

        <div class="work-contentBox">
          <img class="work-contentBox-img" src="~/assets/images/gyys/gyys-work.jpg" alt="">

          <div class="work-contentBox-bottomBox">
            <ul class="textBox">
              <li>
                <div>●《面部危险区-整形美容医师必知的面部七大雷区》</div>
                <span>Facial Danger Zones: Avoiding Nerve Injury in Facial Plastic Surgery</span>
              </li>
              <li>
                <div>●《面部危险区-美容手术、注射填充、微创治疗风险防范的解剖指引》</div>
                <span>Facial Danger Zones: Staying safe with surgery, fillers and non-invasive devices</span>
              </li>
              <li>
                <div>●《达拉斯美容手术大全》</div>
                <span>Masters of Cosmetic Surgery - The Video Atlas: The Dallas Cosmetic Model</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--      发表论文-->
      <div class="thesis">
        <div class="thesis-titleBox">
          <div>发表论文</div>
          <span class="thesis-titleBox-subTitle">Professional paper</span>
        </div>

        <div class="thesis-contentBox">
          <img class="thesis-contentBox-img" src="~/assets/images/gyys/gyys-thesis.jpg" alt="">

          <div class="thesis-contentBox-bottomBox">
            <!--            <div class="title">整形美容核心期刊论文4篇， SCI论文1篇。</div>-->
            <ul class="textBox">
              <li>
                <div>● 抽脂手术的发展史,台湾医界, 2014</div>
                <span>The evolution of Liposuction, Taiwan Medical Journal , 2014, 57(10):8-12</span>
              </li>
              <li>
                <div>● 皮下肿胀显微体雕术的临床应用, 中国整型美容外科杂志, 2015</div>
                <span>Clinical Application of Tumescent Microliposculpture Technique, Chinese Journal Of Aesthetic and Plastic Surgery, 2015, 26(1):62-64</span>
              </li>
              <li>
                <div>● 男性乳房发育症的手术治疗新趋势, 中国整型美容外科杂志, 2016</div>
                <span>New Trend in the Surgical Treatment of Gynecomastia by Tumescent Microliposculpture solely, Chinese Journal Of Aesthetic and Plastic Surgery, 2016, 27(4):231-233</span>
              </li>
              <li>
                <div>● 自体脂肪移植技术之最新进展--赢的策略, 台湾医界, 2016</div>
                <span>The updated concept of Autologous Fat Implantation - How to Boost Fat Grafting Survivability, 2016, 59(9):1-6</span>
              </li>
              <li>
                <div>● Bipolar Radiofrequency-Assisted Liposuction for Cervical Contouring in Eastern Asians, Aesthetic Surgery Journal Open Forum, 2023</div>
              </li>
              <li>
                <div>● 双极射频辅助吸脂治疗颈部皮肤及软组织松弛的应用研究，安徽医科大学，2023</div>
                <span>Bipolar radiofrequency-assisted liposuction applied to cervicomental angle definition 【D】. Anhui Medical University, 2023:6.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  name: "gyys",

  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    };
    const onSlideChange = () => {
      console.log('slide change')
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay]
    }
  }
}
</script>

<style lang="scss" scoped>
.gyys {
  background: #FFFFFF;
  font-size: 12px;
  line-height: 1.2;

  @at-root &-one {
    img {
      width: 100%;
    }

    :deep(.swiper-pagination-bullet) {
      width: 100px;
      height: 4px;
      background-color: #ffffff;
      border-radius: unset;
      opacity: 0.41;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }

  @at-root &-pc {
    //教育背景部分
    .education {
      padding: 50px 360px 162px;
      background: #FFFFFF;

      @at-root &-titleBox {
        font-size: 40px;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        @at-root &-subTitle {
          font-size: 30px;
          margin-left: 20px;
        }
      }

      @at-root &-contentBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: url("../assets/images/gyys/gyys-bgi.png") no-repeat right bottom/373px 518px;

        @at-root &-portrait {
          flex-shrink: 0;
          width: 440px;
          height: auto;
          margin-right: 120px;
        }

        @at-root &-rightBox {
          flex: 1;
          font-size: 15px;
          color: rgba(68, 68, 68, 0.85);

          .bschooladgeBox {
            margin-bottom: 58px;

            img {
              height: 126px;
              vertical-align: middle;
              margin-bottom: 26px;
            }
          }

          .itemBox {
            list-style: none;
            padding: 0;
            margin: 0;
            line-height: 2.6;
          }
        }
      }
    }

    //合影部分
    .groupPhoto {
      list-style: none;
      margin: 0;
      padding: 85px 360px 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      background: rgb(232, 232, 232);

      .one {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid #B7B7B7;
        margin-bottom: 25px;

        img {
          width: 360px;
          height: auto;
        }

        .groupPhoto-item-textBox {
          margin: 0;
          width: 782px;
        }
      }

      @at-root &-item {
        width: 360px;
        overflow: hidden;
        margin-bottom: 40px;

        img {
          width: 100%;
          height: auto;
        }

        @at-root &-textBox {
          font-size: 15px;
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;
          margin-top: 15px;

          div {
            font-size: 24px;
            font-weight: 500;
            color: #333333;
            margin-bottom: 16px;
          }
        }
      }
    }

    //荣誉证书
    .certificate {
      padding: 50px 360px 50px;
      background: #FFFFFF;
      border-bottom: 1px solid #B7B7B7;

      @at-root &-titleBox {
        font-size: 40px;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        @at-root &-subTitle {
          font-size: 30px;
          margin-left: 20px;
        }
      }

      @at-root &-contentBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        @at-root &-item {
          width: 286px;
          height: auto;
          vertical-align: middle;
          margin-bottom: 35px;
        }
      }
    }

    //医学著作
    .work {
      padding: 50px 360px 85px;
      background: #FFFFFF;
      border-bottom: 1px solid #B7B7B7;

      @at-root &-titleBox {
        font-size: 40px;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        @at-root &-subTitle {
          font-size: 30px;
          margin-left: 20px;
        }
      }

      @at-root &-contentBox {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @at-root &-img {
          width: 780px;
          height: auto;
          vertical-align: middle;
          margin-right: 30px;
        }

        @at-root &-rightBox {
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;

          .title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 30px;
          }

          .textBox {
            font-size: 14px;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
              margin-bottom: 30px;
            }
          }
        }
      }
    }

    //发表论文
    .thesis {
      padding: 50px 360px 85px;
      background: #FFFFFF;

      @at-root &-titleBox {
        font-size: 40px;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        @at-root &-subTitle {
          font-size: 30px;
          margin-left: 20px;
        }
      }

      @at-root &-contentBox {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @at-root &-leftBox {
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;

          .title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 30px;
          }

          .textBox {
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 12px;

            li {
              margin-bottom: 20px;
            }
          }
        }

        @at-root &-img {
          width: 573px;
          height: auto;
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
  }

  @at-root &-h5 {
    display: none;

    //教育背景部分
    .education {
      background: #FFFFFF;
      padding: 15px 20px 30px;

      @at-root &-titleBox {
        font-size: 24px;
        color: #000000;
        text-align: center;
        font-weight: 500;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          color: #888888;
          font-weight: 400;
          margin-top: 6px;
        }
      }

      @at-root &-contentBox {
        .bschooladgeBox {
          margin-bottom: 32px;
          text-align: center;

          img {
            width: 315px;
            height: auto;
            vertical-align: middle;
            margin-bottom: 15px;
          }

          @at-root &-text {
            font-size: 15px;
            color: rgba(68, 68, 68, 0.85);
            line-height: 1.5;
            text-align: left;
          }
        }

        .textBox {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 15px;
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;

          li {
            margin-top: 20px;
          }
        }

        .portrait {
          margin-top: 48px;
          width: 100%;
          height: auto;
          vertical-align: middle;
        }
      }
    }

    //合影部分
    .groupPhoto {
      list-style: none;
      margin: 0;
      padding: 28px 20px 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      background: rgb(232, 232, 232);

      .one {
        flex-shrink: 0;
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: auto;
          margin-bottom: 28px;
        }

        .groupPhoto-item-textBox {

          div {
            font-size: 20px;
            font-weight: 500;
            color: #333333;
            margin-bottom: 16px;
          }
        }
      }

      @at-root &-item {
        width: 48%;
        height: 165px;
        overflow: hidden;
        margin-bottom: 16px;

        img {
          width: 100%;
          height: auto;
        }

        @at-root &-textBox {
          font-size: 15px;
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;
          margin-top: 15px;
        }
      }
    }

    //荣誉证书
    .certificate {
      background: #FFFFFF;
      padding: 20px 20px 30px;
      border-bottom: 1px solid #B7B7B7;

      @at-root &-titleBox {
        font-size: 24px;
        color: #000000;
        text-align: center;
        font-weight: 500;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          color: #888888;
          font-weight: 400;
          margin-top: 6px;
        }
      }

      @at-root &-contentBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        @at-root &-item {
          width: 48%;
          height: auto;
          vertical-align: middle;
          margin-bottom: 16px;
        }
      }
    }

    //医学著作
    .work {
      background: #FFFFFF;
      padding: 20px 20px 30px;
      border-bottom: 1px solid #B7B7B7;

      @at-root &-titleBox {
        font-size: 24px;
        color: #000000;
        text-align: center;
        font-weight: 500;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          color: #888888;
          font-weight: 400;
          margin-top: 6px;
        }
      }

      @at-root &-contentBox {
        @at-root &-img {
          width: 100%;
          height: auto;
          vertical-align: middle;
          margin-bottom: 30px;
        }

        @at-root &-bottomBox {
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;

          .title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .textBox {
            font-size: 14px;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
              margin-bottom: 20px;
            }
          }
        }
      }
    }

    //发表论文
    .thesis {
      background: #FFFFFF;
      padding: 20px 20px 30px;

      @at-root &-titleBox {
        font-size: 24px;
        color: #000000;
        text-align: center;
        font-weight: 500;
        margin-bottom: 30px;

        @at-root &-subTitle {
          font-size: 12px;
          color: #888888;
          font-weight: 400;
          margin-top: 6px;
        }
      }

      @at-root &-contentBox {
        @at-root &-img {
          width: 100%;
          height: auto;
          vertical-align: middle;
          margin-bottom: 23px;
        }

        @at-root &-bottomBox {
          color: rgba(68, 68, 68, 0.85);
          line-height: 1.5;

          .title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .textBox {
            list-style: none;
            padding: 0;
            font-size: 16px;

            li {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .gyys {
    @at-root &-pc {
      display: none;
    }
    @at-root &-h5 {
      display: block;
    }
  }
}
</style>