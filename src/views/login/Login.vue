<template>
  <div>
    <Header />
    <div class="login-wrapper">
      <div class="login-container">
        <div class="login-box">
          <div class="facebook social"></div>
          <div class="google social"></div>
          <div class="horizon-bar"></div>
          <div class="login-header">
            <span class="email-login">이메일 로그인</span>
            <span class="find-pw">비밀번호 찾기 ></span>
          </div>
          <input class="id-box" placeholder="이메일을 입력해 주세요" />
          <input class="pw-box" placeholder="비밀번호를 입력해 주세요" />
          <button class="login-button">로그인</button>
          <div class="join-container">
            <span>아직 가입하지 않으셨나요?</span>
            <span>유디션 가입하기</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<style scoped lang="scss">
.login-wrapper {
  width: 100vw;
  margin: 100px 0;
  .login-container {
    width: 100%;
    height: 100%;
    .login-box {
      width: 356px;
      margin: auto;
      .facebook {
        width: 100%;
        //나중에 빼
        height: 52px;
        border-radius: 4px;
        border: solid 1px #e1e1e1;
        background-color: #ffffff;
        margin-bottom: 10px;
      }
      .google {
        width: 100%;
        //나중에 빼
        height: 52px;
        border-radius: 4px;
        border: solid 1px #e1e1e1;
        background-color: #ffffff;
        margin-bottom: 48px;
      }

      .horizon-bar {
        width: 356px;
        height: 1px;
        background-color: #e1e1e1;
      }
      .login-header {
        width: 100%;
        height: 24px;
        margin-top: 48px;
        display: flex;
        justify-content: space-between;
        .email-login {
          font-family: NotoSansCJKkr-Black;
          color: #1f2125;
          font-size: 16px;
          font-weight: bold;
          vertical-align: -webkit-baseline-middle;
        }
        .find-pw {
          font-family: NotoSansCJKkr-regular;
          font-size: 13px;
          line-height: 27px;
          text-align: right;
          color: #c0c0c0;
        }
      }
      .id-box {
        width: 100%;
        //나중에 빼
        height: 52px;
        border: none;
        border-bottom: solid 1px #e1e1e1;
        background-color: #ffffff;

        margin: 30px 0 30px 0;
      }
      .pw-box {
        width: 100%;
        //나중에 빼
        height: 52px;
        border: none;
        border-bottom: solid 1px #e1e1e1;
        background-color: #ffffff;
        margin-bottom: 10px;
      }
      input::placeholder {
        font-size: 14px;
        color: #bbbbbb;
      }
      .login-button {
        width: 356px;
        padding: 18px 0;
        border-radius: 4px;
        background-color: #121212;
        margin-top: 48px;
        color: #ffffff;
        font-size: 16px;
      }
      .join-container {
        width: 239px;
        padding: 17px 0;
        margin: 25px auto 0 auto;
        font-family: NotoSansCJKkr;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        :first-child {
          color: #2d3039;
        }
        :last-child {
          color: #e73c3e;
        }
      }
    }
  }
}
</style>
