<template>
  <div class="unfold">
    <!--    PC端-->
    <div class="unfold-pc">
      <ul class="unfoldBox">
        <li class="unfoldBox-itemBox">
          <div class="unfoldBox-itemBox-questionBox">
            <div class="text">
              治疗后体重会有大的改变吗？
            </div>

            <img src="~/assets/images/unfold/unfold-arrows.png" alt="">
          </div>
          <div class="unfoldBox-itemBox-answer">
            答：很多人对于治疗后会减少体重这件事情有很大的错误迷思，TML美式显微脂肪雕塑目的是雕塑身材，并非减重也并非减少脂肪，因为脂肪很轻，取出的脂肪并不会改变体重变化，所以术后体脂率是不会改变的，但对于身材上的修饰效果是一定有的，让脂肪长在对的地方比过度减少脂肪来得更为重要。
          </div>
        </li>
      </ul>

      <ul class="unfoldBox">
        <li class="unfoldBox-itemBox">
          <div class="unfoldBox-itemBox-questionBox">
            <div class="text">
              治疗后体重会有大的改变吗？
            </div>

            <img src="~/assets/images/unfold/unfold-arrows.png" alt="">
          </div>
          <div class="unfoldBox-itemBox-answer">
            答：很多人对于治疗后会减少体重这件事情有很大的错误迷思，TML美式显微脂肪雕塑目的是雕塑身材，并非减重也并非减少脂肪，因为脂肪很轻，取出的脂肪并不会改变体重变化，所以术后体脂率是不会改变的，但对于身材上的修饰效果是一定有的，让脂肪长在对的地方比过度减少脂肪来得更为重要。
          </div>
        </li>
      </ul>
    </div>

    <ul class="unfold-h5">
      <li class="unfoldBox-itemBox">
        <div class="unfoldBox-itemBox-questionBox">
          <div class="text">
            治疗后体重会有大的改变吗？
          </div>

          <img src="~/assets/images/unfold/unfold-arrows.png" alt="">
        </div>
        <div class="unfoldBox-itemBox-answer">
          答：很多人对于治疗后会减少体重这件事情有很大的错误迷思，TML美式显微脂肪雕塑目的是雕塑身材，并非减重也并非减少脂肪，因为脂肪很轻，取出的脂肪并不会改变体重变化，所以术后体脂率是不会改变的，但对于身材上的修饰效果是一定有的，让脂肪长在对的地方比过度减少脂肪来得更为重要。
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Unfold"
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
      }
    }
  }

  @at-root &-h5 {
    display: none;
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