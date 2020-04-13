<template>
  <div class="payment-finish-wrapper">
    <div class="pf-container">
      <div class="title-wrapper">
        <div class="title">
          클래스 신청이 완료 되었습니다.
          <br />즐거운 만남을 기대해보세요!
        </div>
      </div>
      <div class="body-wrapper">
        <div class="img-bg">
          <img class="img" />
          <div class="circle">
            <div class="circle-text">CLASS</div>
          </div>
        </div>
        <div class="body-info-wrapper">
          <div class="body-title">
            내 연애를 바꾼 노래들: 음악과 어쩌고 저쩌고를 해보다
          </div>
          <div class="lecturer">by 작곡가 정성혜</div>
          <div class="first-day"><span>첫 수업</span>4월 19일 일요일</div>
        </div>
      </div>
      <div class="info-wrapper">
        <div class="border-top" />
        <div class="payment-wrapper">
          <div class="payment-method">결제방법</div>
          <div class="payment-info">
            무통장입금 (입금자명: 김유정)
            <br />우리 15018045654 유디션클래스
          </div>
        </div>
        <div class="expense-wrapper">
          <div class="final-expense">최종 결제금액</div>
          <div class="expense">50,000</div>
        </div>
        <div class="border-bottom" />
      </div>
      <div class="button-wrapper">
        <button class="btn left">돌아가기</button>
        <button class="btn right">마이페이지</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.payment-finish-wrapper {
  width: 100%;
  .pf-container {
    margin: 0 auto;
    width: 560px;
    .title-wrapper {
      .title {
        width: 312px;
        height: 72px;
        font-family: NotoSansCJKkr;
        font-size: 24px;
        font-weight: 900;
        text-align: center;
        color: #000000;
        margin: 0 auto;
      }
    }
    .body-wrapper {
      width: 560px;
      height: 160px;
      border-radius: 12px;
      background-color: #121212;
      margin-top: 52px;
      display: flex;
      z-index: 0;
      overflow: hidden;
      .img-bg {
        position: relative;
        width: 222px;
        height: 160px;
        .img {
          width: 100%;
          height: 100%;
          background-color: green;
        }
        .circle {
          position: absolute;
          width: 52px;
          height: 52px;
          top: 15px;
          left: 15px;
          background-color: #0577ff;
          border-radius: 50%;
          z-index: 3;
          .circle-text {
            width: 48px;
            height: 13px;
            font-family: Gilroy;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.44px;
            text-align: center;
            color: #ffffff;
            margin: 21px 2px 18px;
          }
        }
      }
      .body-info-wrapper {
        position: relative;
        color: #ffffff;
        width: 338px;
        padding: 22px 30px 22px 22px;
        font-size: 12px;
        .body-title {
          font-family: NotoSansCJKkr;
          font-size: 18px;
          font-weight: 900;
          line-height: 1.35;
          padding-right: 81px;
        }
        .lecturer {
          margin-top: 10px;
        }
        .first-day {
          position: absolute;
          bottom: 20px;
          span {
            font-weight: bold;
            margin-right: 10px;
          }
        }
      }
    }
    .info-wrapper {
      .border-top {
        width: 561px;
        height: 1px;
        border: solid 1px #dcd5d5;
        margin-top: 60px;
      }
      .payment-wrapper {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #000000;
        margin-top: 32px;
        .payment-method {
          font-family: NotoSansCJKkr;
          font-weight: 900;
        }
        .payment-info {
          font-family: SpoqaHanSans;
          line-height: 1.44;
          text-align: right;
        }
      }
    }
    .expense-wrapper {
      display: flex;
      justify-content: space-between;
      color: #000000;
      margin-top: 17px;

      .final-expense {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 900;
      }
      .expense {
        font-family: SpoqaHanSans;
        font-size: 22px;
        font-weight: bold;
        text-align: right;
      }
    }
    .border-bottom {
      width: 561px;
      height: 1px;
      border: solid 1px #dcd5d5;
      margin-top: 31px;
    }
  }
  .button-wrapper {
    margin-top: 61px;
    .btn {
      width: 276px;
      height: 56px;
      border-radius: 4px;
      text-align: center;
      font-weight: 900;
      color: #000000;
      font-weight: 900;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      cursor: pointer;
    }
    .left {
      border: solid 1px #121212;
    }
    .right {
      color: #ffffff;
      margin-left: 8px;
      background-color: #000000;
    }
  }
}
</style>
