<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-top-container">
        <div class="footer-top-box">
          <div class="topLeft-wrapper">
            <div class="logo-box">
              <div class="twitter"></div>
              <div class="facebook"></div>
              <div class="instagram"></div>
              <div class="youtube">
                <!-- <img src="../assets/footer/fill-227.svg" alt="" class="youtube" /> -->
              </div>
            </div>
            <div class="category-box">
              <span v-for="(category, i) in categories" :key="i">
                {{ category.name }}
              </span>
            </div>
          </div>
          <div class="topRight-wrapper">
            <div class="kakaoQuestion"></div>
          </div>
        </div>
      </div>
      <div class="footer-bottom-container">
        <div class="footer-bottom-box">
          <div class="bottomLeft-wrapper">
            <div class="address-box">
              <span
                >(주) 도너츠코리아 | 대표 정석근 295-81-00252 | 서울시 강남구
                언주로 603, 5층 | 통신판매업 2019-서울강남-00797</span
              >
            </div>
            <div class="info-box">
              <span>© All Rights Reserved 2019 Donuts korea Co. Ltd.</span>
            </div>
          </div>
          <div class="bottomRight-wrapper">
            <div class="phone-container">
              <div class="logo-box"></div>
              <div class="telInfo-box">
                <span class="phone-number">070-7777-5577</span>
                <span class="phoneCall-time">평일 10:00~19:00</span>
              </div>
            </div>
            <div class="email-container">
              <div class="logo-box"></div>
              <div class="mail-box">
                <span class="mailContent">이메일 문의</span>
                <span class="e-mailInfo">support@donutskorea.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "공지사항"
        },
        {
          id: 2,
          name: "서비스 이용약관"
        },
        {
          id: 3,
          name: "유디션 소개"
        },
        {
          id: 4,
          name: "개인정보 보호정책"
        },
        {
          id: 5,
          name: "기업회원 이용 가이드"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.footer-wrapper {
  width: 100%;
  /* position: absolute;
  bottom: 0; */

  border-top: 1px solid #121212;
  .footer-container {
    .footer-top-container {
      width: 75vw;
      margin: 0 auto;
      .footer-top-box {
        display: flex;
        justify-content: space-between;
        .topLeft-wrapper {
          .logo-box {
            display: flex;
            margin: 32px 0;
            div {
              margin-right: 11px;
            }

            .twitter {
              width: 28px;
              height: 28px;
              border: 1px solid #121212;
              border-radius: 50%;
              background: url("../assets/footer/fill-215.svg") no-repeat center
                center;
              background-size: 15px 15px;
            }
            .facebook {
              width: 28px;
              height: 28px;
              border: 1px solid #121212;
              border-radius: 50%;
              background: url("../assets/footer/fill-220.svg") no-repeat center
                center;
              background-size: 15px 15px;
            }
            .instagram {
              width: 28px;
              height: 28px;
              border: 1px solid #121212;
              border-radius: 50%;
              background: url("../assets/footer/fill-276.svg") no-repeat center
                center;
              background-size: 15px 15px;
            }
            .youtube {
              width: 28px;
              height: 28px;
              border: 1px solid #121212;
              border-radius: 50%;
              background: url("../assets/footer/fill-227.svg") no-repeat center
                center;
              background-size: 18px 18px;
            }
          }
          .category-box {
            color: #121212;
            width: 352px;
            display: flex;
            flex-wrap: wrap;
            margin: 10px 0 43px 0;
            span {
              display: block;
              font-size: 14px;
              font-family: SpoqaHanSans;
              font-weight: bold;
              width: 148px;
              margin-right: 28px;
              padding: 5px 0;
            }
          }
        }
        .topRight-wrapper {
          .kakaoQuestion {
            margin-top: 127px;
            width: 343px;
            height: 48px;
            border-radius: 8px;
            border: solid 1px #121212;
          }
        }
      }
    }
    .footer-bottom-container {
      background-color: #121212;
      padding: 22px 0;
      width: 100vw;
      .footer-bottom-box {
        width: 75vw;
        margin: 0 auto;
        display: flex;
        .bottomLeft-wrapper {
          font-family: NotoSansCJKkr;
          font-size: 12px;
          line-height: 1.75;
          color: #fff;
          width: 50%;
        }
        .bottomRight-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 50%;
          .phone-container {
            display: flex;
            align-items: center;
            margin-right: 30px;
            .logo-box {
              width: 34px;
              height: 34px;
              background: url("../assets/footer/group-5.svg") no-repeat center;
              background-size: 28px 28px;
            }
            .telInfo-box {
              display: flex;
              flex-direction: column;
              padding-left: 4px;

              .phone-number {
                font-family: SpoqaHanSans;
                font-size: 12px;
                font-weight: bold;
                color: #ffffff;
              }
              .phoneCall-time {
                font-family: SpoqaHanSans;
                font-size: 9px;
                line-height: 2;
                color: #ffffff;
              }
            }
          }
          .email-container {
            display: flex;
            align-items: center;
            margin-right: 30px;

            .logo-box {
              width: 34px;
              height: 34px;
              background: url("../assets/footer/group-9.svg") no-repeat center;
              background-size: 28px 28px;
            }
            .mail-box {
              display: flex;
              flex-direction: column;
              padding-left: 4px;

              .mailContent {
                font-family: SpoqaHanSans;
                font-size: 12px;
                font-weight: bold;
                color: #ffffff;
              }
              .e-mailInfo {
                font-family: SpoqaHanSans;
                font-size: 9px;
                line-height: 2;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
