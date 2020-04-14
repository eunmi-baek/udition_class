<template>
  <div class="container">
    <Header />
    <section>
      <div class="apply">
        <h2>클래스 신청</h2>
        <div class="class-box">
          <div class="class-box-img">
            <img src="@/assets/images/spec/spec-img.jpg" alt />
            <div class="circle">CLASS</div>
          </div>
          <div class="class-box-cnt" v-for="(card, i) in cards" :key="i">
            <p class="title">{{ card.title }}</p>
            <p class="lecturer">{{ card.lecturer }}</p>
            <p class="first-class">
              <strong>첫 수업</strong>
              {{ card.date }}
            </p>
          </div>
        </div>
      </div>
      <div class="contact">
        <h2>연락처 정보</h2>
        <div class="name">
          <h3>이름</h3>
          <input type="text" placeholder="이름을 입력해주세요." />
        </div>
        <div class="number">
          <h3>전화번호</h3>
          <input type="text" placeholder="010-0000-0000" />
        </div>
      </div>
      <div class="payment-info" v-for="price in payment" :key="price">
        <h2>결제 정보</h2>
        <ul class="price">
          <li>
            <span>총 금액</span>
            <strong>{{ price.originPrice.toLocaleString() }}원</strong>
          </li>
          <li>
            <span>할인 금액</span>
            <strong>{{ price.discountPrice.toLocaleString() }}원</strong>
          </li>
        </ul>
        <div class="final-price">
          <span>최종 금액</span>
          <strong>
            {{ (price.originPrice + price.discountPrice).toLocaleString() }}원
          </strong>
        </div>
      </div>
      <div class="payment-way">
        <h2>결제 수단</h2>
        <div
          class="payment-card"
          @click="handleCard"
          :class="{ activeCard: paymentCard == true }"
        >
          카드 결제
          <span></span>
        </div>
        <div
          class="payment-passbook"
          @click="handlePassbook"
          :class="{ activePassbook: paymentPassbook == true }"
        >
          무통장 입금
          <span></span>
        </div>
      </div>
      <div class="checkbox">
        <span @click="handleCheckbox" :class="{ chk: checkBox == true }"></span>
        주문 내용 확인하였으며, 구매에 동의합니다.
      </div>
      <button class="payment-submit">클래스 결제하기</button>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Heyhey";
import Footer from "@/components/Fufu";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      paymentCard: true,
      paymentPassbook: false,
      checkBox: false,
      cards: [
        {
          id: 1,
          title: "내 연애를 바꾼 노래들 : 음악과 어쩌고 저쩌고를 해보다",
          lecturer: "by 작곡가 남기상",
          date: "4월 19일 일요일"
        }
      ],
      payment: [
        {
          originPrice: 70000,
          discountPrice: -20000
        }
      ]
    };
  },
  methods: {
    // 카드 토글버튼
    handleCard() {
      if (this.paymentCard == true) {
        this.paymentCard = false;
      } else {
        this.paymentCard = true;
      }
    },
    // 무통장 토글버튼
    handlePassbook() {
      if (this.paymentPassbook == true) {
        this.paymentPassbook = false;
      } else {
        this.paymentPassbook = true;
      }
    },
    // 체크박스 토글버튼
    handleCheckbox() {
      if (this.checkBox == true) {
        this.checkBox = false;
      } else {
        this.checkBox = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  section {
    width: 560px;
    margin: 64px auto 0 auto;
    font-family: NotoSansCJKkr;
    font-size: 16px;

    h2 {
      font-size: 24px;
      font-weight: 900;
    }

    .apply {
      .class-box {
        margin-top: 20px;
        display: flex;
        width: 100%;
        height: 160px;
        border-radius: 12px;
        background: #121212;
        color: #fff;
        cursor: pointer;
        overflow: hidden;

        &-img {
          position: relative;
          width: 222px;
          height: auto;

          img {
            width: 100%;
            height: 100%;
          }

          .circle {
            position: absolute;
            width: 52px;
            height: 52px;
            top: 15px;
            left: 15px;
            text-align: center;
            line-height: 52px;
            font-family: Gilroy;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.44px;
            border-radius: 50%;
            background: #0577ff;
          }
        }

        &-cnt {
          width: 338px;
          height: auto;
          position: relative;
          padding: 22px 30px 22px 22px;
          font-size: 12px;

          .title {
            font-size: 18px;
            font-weight: 900;
            line-height: 1.35;
          }
          .lecturer {
            margin-top: 10px;
          }
          .first-class {
            position: absolute;
            bottom: 20px;
            strong {
              margin-right: 5px;
              font-weight: 900;
            }
          }
        }
      }
    }

    .contact {
      margin-top: 60px;

      h3 {
        font-size: 16px;
      }

      input {
        width: 100%;
        height: 56px;
        margin-top: 10px;
        padding-left: 20px;
        font-size: 16px;
        border: none;
        border: solid 1px #b7bbc2;

        &::placeholder {
          font-size: 16px;
          line-height: 56px;
          color: #b7bbc2;
        }
      }
      .name {
        margin-top: 20px;
      }

      .number {
        h3 {
          margin-top: 26px;
        }
      }
    }

    .payment-info {
      margin-top: 60px;
      padding: 45px 60px 50px 60px;

      border: solid 1px #121212;

      h2 {
        text-align: center;
        margin-bottom: 25px;
      }

      .price {
        padding: 14px 0;
        border-top: solid 1px #dcd5d5;
        border-bottom: solid 1px #dcd5d5;

        li {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;

          strong {
            font-weight: bold;
          }
        }
      }

      .final-price {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;

        strong {
          font-size: 22px;
          font-weight: bold;
        }
      }
    }

    .payment-way {
      margin-top: 60px;

      h2 {
        margin-bottom: 35px;
      }
      .payment-card {
        width: 100%;
        height: 56px;
        margin-bottom: 16px;
        padding-left: 60px;
        border: solid 1px #b7bbc2;
        line-height: 58px;
        color: #666970;
        cursor: pointer;
        background: url("../../assets/images/payment/card.png") no-repeat 20px
          center;
        background-size: 27px 21px;

        &.activeCard {
          color: #121212;
          font-weight: bold;
          border: solid 1px #0577ff;
          background: url("../../assets/images/payment/card_chk.png") no-repeat
              20px center,
            url("../../assets/images/payment/check.png") no-repeat 97% center;
          background-size: 27px 21px, 20px 13px;
        }
      }

      .payment-passbook {
        width: 100%;
        height: 56px;
        margin-bottom: 16px;
        padding-left: 60px;
        border: solid 1px #b7bbc2;
        line-height: 58px;
        color: #666970;
        cursor: pointer;
        background: url("../../assets/images/payment/passbook.png") no-repeat
          20px center;
        background-size: 28px 21px;

        &.activePassbook {
          color: #121212;
          font-weight: bold;
          border: solid 1px #0577ff;
          background: url("../../assets/images/payment/passbook_chk.png")
              no-repeat 20px center,
            url("../../assets/images/payment/check.png") no-repeat 97% center;
          background-size: 27px 21px, 20px 13px;
        }
      }
    }

    .checkbox {
      margin: 47px 0 50px 0;
      font-weight: bold;
      line-height: 25px;

      span {
        width: 24px;
        height: 24px;
        margin-right: 13px;
        display: block;
        float: left;
        background: url("../../assets/images/payment/check_bf.png") no-repeat
          left center;
        background-size: cover;
        cursor: pointer;

        &.chk {
          background: url("../../assets/images/payment/check_aft.png") no-repeat
            left center;
          background-size: cover;
        }
      }
    }
    .payment-submit {
      width: 100%;
      padding: 16px 0;
      margin-bottom: 120px;
      background: #000;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 900;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
