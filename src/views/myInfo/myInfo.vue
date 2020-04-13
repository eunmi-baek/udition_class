<template>
  <div class="info-container">
    <Header />
    <section>
      <div class="info">
        <img />
        <div class="profile">
          <div class="name">김유정</div>
          <div class="email">june@donutskorea.com</div>
        </div>
        <div class="class-condition">
          <div class="class">
            <div class="image"></div>
            <div class="text">참여한 클래스</div>
            <div class="count">0</div>
          </div>
          <div class="line"></div>
          <div class="class">
            <div class="image2"></div>
            <div class="text">찜한 클래스</div>
            <div class="count">3</div>
          </div>
        </div>
        <button>프로필 편집</button>
      </div>
      <Bookmark />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bookmark from "@/components/myInfo/bookmark";

export default {
  name: "myInfo",
  components: {
    Header,
    Footer,
    Bookmark,
  },
};
</script>

<style scoped lang="scss">
.info-container {
  width: 100vw;

  //나중에 지우기
  header {
    height: 88px;
    border-bottom: 1px solid red;
  }

  section {
    width: 1082px;
    margin: 36px auto 100px;
    display: flex;

    .info {
      width: 362px;
      height: 555px;
      border-radius: 12px;
      border: solid 1px #dddee4;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 50px;

      img {
        width: 142px;
        height: 142px;
        border-radius: 50%;
        margin: 29px 0;

        //나중에 지우기
        background-color: #eeeeee;
      }

      .profile {
        text-align: center;
        margin-bottom: 50px;

        .name {
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: bold;
        }

        .email {
          font-size: 14px;
        }
      }

      .class-condition {
        display: flex;

        .class {
          display: flex;
          flex-direction: column;
          align-items: center;

          .image {
            width: 21px;
            height: 20px;
            background: url("../../assets/images/myInfo/invited.png") no-repeat
              center center;
            background-size: cover;
          }

          .image2 {
            width: 21px;
            height: 18px;
            background: url("../../assets/images/myInfo/heart.png") no-repeat
              center center;
            background-size: cover;
          }

          .text {
            font-family: NotoSansCJKkr;
            font-size: 12px;
            font-weight: bold;
            margin: 12px 0;
          }

          .count {
            font-size: 24px;
            font-weight: bold;
          }
        }

        .line {
          width: 2px;
          height: 87px;
          background-color: #b7bbc2;
          margin: 0 30px;
        }
      }
      button {
        width: 310px;
        height: 56px;
        border-radius: 4px;
        border: solid 1px #121212;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 900;
        text-align: center;
        margin-top: 50px;
        cursor: pointer;
      }
    }
  }
}
</style>
