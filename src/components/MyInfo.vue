<template>
  <div class="info-container">
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
    </section>
  </div>
</template>

<script>
export default {
  name: "myInfo"
};
</script>

<style scoped lang="scss">
.info-container {
  section {
    width: 362px;
    margin-top: 36px;
    margin-bottom: 100px;
    display: flex;

    .info {
      width: 100%;
      height: 555px;
      border-radius: 12px;
      border: solid 1px #dddee4;
      display: flex;
      flex-direction: column;
      align-items: center;

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
            background: url("../assets/images/myInfo/invited.png") no-repeat
              center center;
            background-size: cover;
          }

          .image2 {
            width: 21px;
            height: 18px;
            background: url("../assets/images/myInfo/heart.png") no-repeat
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
