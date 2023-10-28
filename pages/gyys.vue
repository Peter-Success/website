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
            <img src="~/assets/images/index/index-banner-pc.png" alt="">
          </a-col>
          <a-col :xs="24" :sm="0">
            <img src="~/assets/images/index/index-banner-h5.png" alt="">
          </a-col>
        </a-row>
      </swiper-slide>
      <swiper-slide>
        <a-row>
          <a-col :xs="0" :sm="24">
            <img src="~/assets/images/index/index-banner1-pc.png" alt="">
          </a-col>
          <a-col :xs="24" :sm="0">
            <img src="~/assets/images/index/index-banner1-h5.png" alt="">
          </a-col>
        </a-row>
      </swiper-slide>
    </swiper>

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
          <img class="education-contentBox-portrait" src="~/assets/images/gyys/gyys-portrait.png" alt="">
          <div class="education-contentBox-rightBox">
            <div class="bschooladgeBox">
              <img src="~/assets/images/gyys/gyys-Bschooladge.png" alt="">
              <div>北京大学 临床医学系 清华大学-澳大利亚</div>
            </div>

            <ul class="itemBox">
              <li>颜士钧医师拥有整形外科及管理学双学位（MD/MM），从事整形美容工作 15 余年担任：</li>
              <li>● 美国整形美容手术学会AICPS 讲师</li>
              <li>● 韩国美容外科协会 KSAS 讲师</li>
              <li>● 东方国际美容外科协会 ECS讲师</li>
              <li>● 美国美容医学学会 AAAM 成员</li>
              <li>● 国际皮肤美容外科联盟 DASIL成员</li>
              <li>● 亚太美容外科医学会 APACS 成员</li>
            </ul>
          </div>
        </div>
      </div>

      <!--      合影部分-->
      <ul class="groupPhoto">
        <li class="groupPhoto-item one">
          <img src="~/assets/images/gyys/gyys-experience1.png" alt="">
          <div class="groupPhoto-item-textBox">
            <div>杰佛里·克莱恩</div>
            <span>颜医生的美国导师，美国著名皮肤外科医生克莱恩博士（Dr. Jeffrey Klein），为国际美容外科的开山鼻祖，他的划时代发明“TML 美式显微脂肪雕塑”因为安全、精细高效、无需全身麻醉、微创舒适、术后无需穿着束身衣和恢复快等特点，一举使吸脂手术从传统的大手术摇身一变为午餐美容，造福了世界广大的求美者。</span>
          </div>
        </li>

        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience2.png" alt="">
          <div class="groupPhoto-item-textBox">
            <span>中国整形美容界泰斗高景恒教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience3.png" alt="">
          <div class="groupPhoto-item-textBox">
            <span>台湾亚太美容外科医学会理事长 郝治华教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience4.png" alt="">
          <div class="groupPhoto-item-textBox">
            <span>中华海峡两岸整形美容协会理事长 王笃行教</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience5.png" alt="">
          <div class="groupPhoto-item-textBox">
            <span>大连医科大学 王冀耕教授</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience6.png" alt="">
          <div class="groupPhoto-item-textBox">
            <span>美国著名整形专家Michael Pasq</span>
          </div>
        </li>
        <li class="groupPhoto-item">
          <img src="~/assets/images/gyys/gyys-experience7.png" alt="">
          <div class="groupPhoto-item-textBox">
            <span>科尔曼脂肪注射创始人Sydney R.</span>
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
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate1.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate2.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate3.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate4.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate5.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate6.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate7.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate8.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate9.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate10.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate11.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate12.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate13.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate14.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate15.png" alt="">
          <img class="certificate-contentBox-item" src="~/assets/images/gyys/gyys-certificate16.png" alt="">
        </div>
      </div>

      <!--      医学著作-->
      <div class="work">
        <div class="work-titleBox">
          <div>医学著作</div>
          <span class="work-titleBox-subTitle">Publication</span>
        </div>

        <div class="work-contentBox">
          <img class="work-contentBox-img" src="~/assets/images/gyys/gyys-work.png" alt="">

          <div class="work-contentBox-rightBox">
            <div class="title">学术论文</div>

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
            <div class="title">整形美容核心期刊论文4篇， SCI论文1篇。</div>
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
                <div>● Bipolar Radiofrequency-Assisted Liposuction for Cervical Contouring in Eastern Asians, Aesthetic
                  Surgery Journal Open Forum, 2023
                </div>
              </li>
            </ul>
          </div>

          <img class="thesis-contentBox-img" src="~/assets/images/gyys/gyys-thesis.png" alt="">
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
import test1 from '~/assets/images/gyys/gyys-experience1.png'

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
            line-height: 2.6;
          }
        }
      }
    }

    //合影部分
    .groupPhoto {
      list-style: none;
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
          width: 292px;
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