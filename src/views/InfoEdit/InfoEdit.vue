<template>
  <div class="privacy-container">
    <Header />
    <section>
      <MyInfo />
      <div class="main-container">
        <h2>기본정보 수정</h2>
        <ul class="info-list">
          <li class="profile">
            <div class="title">프로필</div>
            <div class="image">
              <div class="image-edit"></div>
            </div>
            <div class="name-container">
              <div class="nickname">준입니당</div>
              <div>김유정</div>
            </div>
            <div class="name-edit">편집</div>
          </li>
          <li>
            <div class="title">아이디</div>
            <div>june@donutskorea.com</div>
          </li>
          <li>
            <div class="title">비밀번호</div>
            <div class="pw">비밀번호 변경</div>
          </li>
          <li>
            <div class="title">휴대전화</div>
            <div>010-1234-5678</div>
            <div class="button">인증완료</div>
            <div class="phone-edit">휴대전화 변경</div>
          </li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Heyhey";
import Footer from "@/components/Fufu";
import MyInfo from "@/components/MyInfo";

export default {
  name: "privacyEdit",
  components: {
    Header,
    Footer,
    MyInfo
  }
};
</script>

<style scoped lang="scss">
.privacy-container {
  color: #121212;

  section {
    width: 1081px;
    margin: 0 auto;
    display: flex;

    .main-container {
      width: 100%;
      margin-left: 49px;
      margin-top: 65px;

      h2 {
        font-family: NotoSansCJKkr;
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 38px;
      }

      .info-list {
        width: 100%;

        li {
          display: flex;
          align-items: center;
          padding: 25px 0;
          border-top: solid 1px #dddee4;
          position: relative;

          .title {
            width: 20%;
            font-size: 18px;
            font-weight: 900;
          }

          div {
            font-size: 18px;
          }

          &.profile {
            border-color: #121212;

            .image {
              width: 100px;
              height: 100px;
              background-color: #dddee4;
              border-radius: 50%;
              position: relative;

              .image-edit {
                width: 31px;
                height: 31px;
                background: url("../../assets/images/infoEdit/camera.png")
                  no-repeat center center;
                background-size: cover;
                border-radius: 50%;
                border: solid 1px #dddee4;
                position: absolute;
                top: 60px;
                right: -3px;
                cursor: pointer;
              }
            }

            .name-container {
              font-size: 18px;
              margin-left: 25px;

              .nickname {
                font-weight: bold;
                margin-bottom: 10px;
              }
            }

            .name-edit {
              font-family: SpoqaHanSans;
              font-size: 18px;
              text-decoration: underline;
              position: absolute;
              top: 40px;
              right: 30px;
              cursor: pointer;
            }
          }

          .pw {
            text-decoration: underline;
            cursor: pointer;
          }

          .button {
            width: 70px;
            height: 24px;
            background: #121212;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            line-height: 24px;
            color: #ffffff;
            margin-left: 20px;
            cursor: pointer;
          }

          .phone-edit {
            text-decoration: underline;
            position: absolute;
            top: 23px;
            right: 30px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
