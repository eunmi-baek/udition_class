<template>
  <div>
    <Header />
    <div class="join-wrapper">
      <div class="join-container">
        <!-- name -->
        <div class="name-box">
          <div class="Title">이름</div>
          <input type="text" class="name" placeholder="이름을 입력해주세요" />
        </div>
        <!-- email -->
        <div class="email-box">
          <div class="Title">이메일</div>

          <input
            type="text"
            class="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <!-- phone -->
        <div class="cellPhone-box">
          <div class="Title">휴대전화</div>
          <div class="input-box">
            <input type="text" class="phone" placeholder="전화번호" />
            <div @click="setCertification">번호인증</div>
          </div>
        </div>
        <!-- confirm 숨겨져 있어야해-->
        <div class="confirm-box" v-if="certification">
          <input
            type="text"
            class="confirmNum"
            placeholder="인증번호를 입력해주세요"
          />
        </div>
        <!-- pw -->
        <div class="pw-box">
          <div class="Title">비밀번호</div>
          <input type="text" class="pw" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div class="terms-container">
          <div class="terms-box">
            <div
              class="checkBox"
              v-for="(checkList, i) in checkLists"
              :key="i"
              @click="setCheck(i)"
            >
              <div class="checkIcon-box" v-if="checkList.checked"></div>
              <div class="checkedIcon-box" v-else></div>
              <div
                :class="{
                  checkContent_required: checkList.required == true,
                  checkContent: checkList.required == false
                }"
              >
                {{ checkList.content }}
              </div>
            </div>
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
  components: { Header, Footer },
  data() {
    return {
      checkLists: [
        {
          id: 1,
          required: true,
          content: "이용약관 및 개인정보 처리방침 동의",
          checked: false
        },
        {
          id: 2,
          required: false,
          content: "이벤트 및 새로운 클래스 소식 알림 동의 (선택)",
          checked: false
        }
      ],
      certification: false
    };
  },
  methods: {
    setCheck(i) {
      this.checkLists[i].checked = !this.checkLists[i].checked;
    },
    setCertification() {
      // 여기에 휴대폰 인증 조건도 달아야해
      this.certification = !this.certification;
    }
  }
};
</script>

<style scoped lang="scss">
.join-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  .join-container {
    margin: auto;
    div {
      input {
        width: 356px;
        border: solid 1px #b7bbc2;
        font-size: 16px;
        padding: 13px 13px;
        margin-bottom: 30px;
        :focus::placeholder {
          color: transparent;
        }
      }
      //   input:focus::placeholder {
      //     color: transparent;
      //   }
      .Title {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: bold;
        color: #000000;
        margin-bottom: 9px;
      }
    }
    .cellPhone-box {
      .input-box {
        width: 356px;
        position: relative;
        div {
          position: absolute;
          top: 0%;
          right: 0;
          width: 30%;
          font-size: 16px;
          padding: 13px 0;
          text-align: center;
          padding-top: 15px;
          background-color: #121212;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
    .terms-container {
      .terms-box {
        .checkBox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 20px;
          cursor: pointer;
          .checkIcon-box,
          .checkedIcon-box {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
          .checkIcon-box {
            background: url("../../assets/join/group-6-copy-6.svg") no-repeat
              center center;
            background-size: 18px 18px;
          }
          .checkedIcon-box {
            background: url("../../assets/join/group-7.svg") no-repeat center
              center;
            background-size: 18px 18px;
          }
          .checkContent {
            font-family: SpoqaHanSans;
            font-size: 16px;
          }
          .checkContent_required {
            font-family: SpoqaHanSans;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
