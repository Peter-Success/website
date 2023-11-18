<template>
  <div class="unfold">
    <!--    PC端-->
    <div class="unfold-pc">
      <ul class="unfoldBox">
        <li v-for="(item,index) in evenList" :key="index" class="unfoldBox-itemBox">
          <div class="unfoldBox-itemBox-questionBox" @click="questionClick(item.id)">
            <div class="text">
              {{ item.question }}
            </div>

            <img src="~/assets/images/unfold/unfold-arrows.png" alt="">
          </div>
          <div class="unfoldBox-itemBox-answer " :class="activeQuestion === item.id ? 'showAnswer' : ''">
            <div class="textBox">
              {{ item.answer }}
            </div>
          </div>
        </li>
      </ul>

      <ul class="unfoldBox">
        <li v-for="(item,index) in oddList" :key="index" class="unfoldBox-itemBox">
          <div class="unfoldBox-itemBox-questionBox" @click="questionClick(item.id)">
            <div class="text">
              {{ item.question }}
            </div>

            <img src="~/assets/images/unfold/unfold-arrows.png" alt="">
          </div>
          <div class="unfoldBox-itemBox-answer" :class="activeQuestion === item.id ? 'showAnswer' : ''">
            <div class="textBox">
              {{ item.answer }}
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!--    H5-->
    <ul class="unfold-h5">
      <li v-for="(item,index) in list" :key="index" class="unfoldBox-itemBox">
        <div class="unfoldBox-itemBox-questionBox" @click="questionClick(item.id)">
          <div class="text">
            {{ item.question }}
          </div>

          <img src="~/assets/images/unfold/unfold-arrows.png" alt="">
        </div>
        <div class="unfoldBox-itemBox-answer" :class="activeQuestion === item.id ? 'showAnswer' : ''">
          <div class="textBox">
            {{ item.answer }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Unfold",

  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {question: '问题1', answer: '答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1答案1'},
          {
            question: '问题2',
            answer: '答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2答案2'
          },
          {
            question: '问题3',
            answer: '答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3答案3'
          },
          {question: '问题4', answer: '答案4答案4答案4答案4答案4答案4答案4答案4答案4答案4'},
          {question: '问题5', answer: '答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5答案5'},
        ]
      }
    }
  },

  data() {
    return {
      activeQuestion: -1
    }
  },

  computed: {
    // 偶数数据
    evenList() {
      return this.list.filter((item, index) => {
        if (index % 2 === 0) {
          item.id = index
          return item
        }
      })
    },

    // 奇数数据
    oddList() {
      return this.list.filter((item, index) => {
        if (index % 2 !== 0) {
          item.id = index
          return item
        }
      })
    }
  },

  methods: {
    questionClick(val) {
      if (val === this.activeQuestion) {
        this.activeQuestion = -1
      } else {
        this.activeQuestion = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.unfold {
  font-size: 12px;
  line-height: 1.2;

  //PC端
  @at-root &-pc {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .unfoldBox {
      @at-root &-itemBox {
        background: #FFFFFF;
        width: 550px;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 20px;

        @at-root &-questionBox {
          padding: 22px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .text {
            flex: 1;
            font-size: 16px;
            font-weight: 500;
            color: #000000;
          }

          img {
            flex-shrink: 0;
            height: 20px;
            width: auto;
            vertical-align: middle;
          }
        }

        @at-root &-answer {
          border-top: 1px solid #E6E6E6;
          max-height: 0;
          transition: max-height 0.3s;

          .textBox {
            padding: 15px 25px;
            line-height: 1.5;
            font-size: 15px;
            color: #666666;
          }
        }

        .showAnswer {
          max-height: 200px;
        }
      }
    }
  }

  //H5
  @at-root &-h5 {
    display: none;
    .unfoldBox {
      @at-root &-itemBox {
        background: #FFFFFF;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 20px;

        @at-root &-questionBox {
          padding: 22px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .text {
            flex: 1;
            font-size: 16px;
            font-weight: 500;
            color: #000000;
          }

          img {
            flex-shrink: 0;
            height: 20px;
            width: auto;
            vertical-align: middle;
          }
        }

        @at-root &-answer {
          border-top: 1px solid #E6E6E6;
          max-height: 0;
          transition: max-height 0.3s;

          .textBox {
            padding: 15px 25px;
            line-height: 1.5;
            font-size: 15px;
            color: #666666;
          }
        }

        .showAnswer {
          max-height: 200px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .unfold {
    @at-root &-pc {
      display: none;
    }
    @at-root &-h5 {
      display: block;
    }
  }
}
</style>