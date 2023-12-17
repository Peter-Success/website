<template>
  <div class="articleDetails">
    <!--    pc版-->
    <div class="articleDetails-pc">
      <!--      文章标题-->
      <div class="title">文章标题占位</div>

      <!--      文章时间-->
      <div class="date">文章时间占位</div>

      <!--      标签-->
      <ul class="tagBox">
        <li>标签占位1</li>
        <li>标签占位2</li>
        <li>标签占位3</li>
        <li>标签占位4</li>
      </ul>

      <!--      文章视频或图片-->
      <div class="mediaBox">
        <!--        图片部分-->
        <img class="mediaBox-img" src="~/assets/images/detail/detail-img.png" alt="">

        <!--        视频部分-->
        <div></div>
      </div>

      <!--      文章内容部分-->
      <div class="articleContent">
        <!--        富文本部分-->
        <div class="articleContent-richText">富文本占位</div>

        <!--        其他案例部分-->
        <div class="articleContent-otherBox">
          <div class="articleContent-otherBox-title">其他案例：</div>

          <ul class="articleContent-otherBox-itemBox">
            <li>其他案例1</li>
            <li>其他案例2</li>
            <li>其他案例3</li>
          </ul>
        </div>
      </div>
    </div>

    <!--    h5版-->
    <div class="articleDetails-h5">
      <!--      文章标题-->
      <div class="title">文章标题占位</div>

      <!--      文章时间-->
      <div class="date">文章时间占位</div>

      <!--      标签-->
      <ul class="tagBox">
        <li>标签占位1</li>
        <li>标签占位2</li>
        <li>标签占位3</li>
        <li>标签占位4</li>
      </ul>

      <!--      文章视频或图片-->
      <div class="mediaBox">
        <img class="mediaBox-img" src="~/assets/images/detail/detail-img.png" alt="">

        <div>
          <!--          视频占位-->
        </div>
      </div>

      <!--      文章内容部分-->
      <div class="articleContent">
        <!--        富文本部分-->
        <div class="articleContent-richText">富文本占位</div>

        <!--        其他案例部分-->
        <div class="articleContent-otherBox">
          <div class="articleContent-otherBox-title">其他案例：</div>

          <ul class="articleContent-otherBox-itemBox">
            <li>其他案例1</li>
            <li>其他案例2</li>
            <li>其他案例3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleDetails"
}
</script>

<style lang="scss" scoped>
.articleDetails {
  //PC端
  @at-root &-pc {
    display: block;

    padding: 150px 360px 60px;

    //文章标题
    .title {
      font-size: 40px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 10px;
    }

    //文章时间
    .date {
      font-size: 14px;
      color: #999999;
      margin-bottom: 30px;
    }

    //标签
    .tagBox {
      display: flex;
      align-items: center;
      margin-bottom: 36px;
      padding: 0;

      li {
        padding: 5px 10px;
        font-size: 12px;
        color: #000000;
        background: #D8D8D8;
        border-radius: 4px;
        margin-right: 10px;
      }
    }

    //文章视频或图片
    .mediaBox {
      margin-bottom: 36px;

      @at-root &-img {
        width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }

    //文章内容部分
    .articleContent {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      //富文本部分
      @at-root &-richText {
        flex: 1;
        border-top: 1px solid #C0C0C0;
        padding: 20px 0;

        text-align: center;
        line-height: 500px;
      }

      //其他案例部分
      @at-root &-otherBox {
        flex-shrink: 0;
        width: 330px;
        background: rgba(235, 235, 235, 0.6);
        padding: 30px 15px 100px;
        margin-left: 25px;

        @at-root &-title {
          font-size: 20px;
          font-weight: 500;
          color: #000000;
          margin-bottom: 25px;
        }

        @at-root &-itemBox {
          padding: 0;
          font-size: 14px;
          color: #000000;
          line-height: 1.5;

          li {
            margin-bottom: 15px;
          }
        }
      }
    }
  }


  @at-root &-h5 {
    display: none;
    padding: 20px;

    //文章标题
    .title {
      font-size: 24px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 10px;
    }

    //文章时间
    .date {
      font-size: 12px;
      color: #999999;
      margin-bottom: 30px;
    }

    //标签
    .tagBox {
      display: flex;
      align-items: center;
      margin-bottom: 36px;
      padding: 0;

      li {
        padding: 5px 10px;
        font-size: 12px;
        color: #000000;
        background: #D8D8D8;
        border-radius: 4px;
        margin-right: 10px;
      }
    }

    //文章视频或图片
    .mediaBox {
      margin-bottom: 20px;

      @at-root &-img {
        width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }

    //文章内容部分
    .articleContent {

      //富文本部分
      @at-root &-richText {
        border-top: 1px solid #C0C0C0;
        padding: 10px 0;
        font-size: 15px;
        color: rgba(68, 68, 68, 0.85);

        text-align: center;
        line-height: 500px;
      }

      //其他案例部分
      @at-root &-otherBox {
        background: rgba(235, 235, 235, 0.6);
        padding: 20px 15px 30px;

        @at-root &-title {
          font-size: 20px;
          font-weight: 500;
          color: #000000;
          margin-bottom: 25px;
        }

        @at-root &-itemBox {
          padding: 0;
          font-size: 14px;
          color: #000000;
          line-height: 1.5;

          li {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .articleDetails {
    @at-root &-pc {
      display: none;
    }
    @at-root &-h5 {
      display: block;
    }
  }
}
</style>