<template>
  <div class="MeetUp-wrapper">
    <div class="MeetUp-container">
      <div class="category-wrapper">
        <div class="category">CLASS</div>
        <div class="category mgn-left mid-border">MEET UP</div>
        <div class="category mgn-left">ONE DAY</div>
      </div>
      <div class="body-wrapper">
        <div class="class-wrapper">
          <img class="img" />
          <div class="circle">
            <div class="circle-text">CLASS</div>
          </div>
          <div class="info-wrapper">
            <div class="title">
              혼자 시작하는 유튜브
              <br />영상 편집 기초
            </div>
            <div class="btm-wrapper">
              <div class="info first-day">4월 20일 시작</div>
              <div class="mid-border" />
              <div class="info class-spot">온라인 수업</div>
            </div>
          </div>
        </div>
        <div class="class-wrapper">
          <div class="img-bg">
            <img class="img" />
            <div class="circle">
              <div class="circle-text">CLASS</div>
            </div>
            <div class="info-wrapper">
              <div class="title">
                혼자 시작하는 유튜브
                <br />영상 편집 기초
              </div>
              <div class="btm-wrapper">
                <div class="info first-day">4월 20일 시작</div>
                <div class="mid-border" />
                <div class="info class-spot">온라인 수업</div>
              </div>
            </div>
          </div>
        </div>
        <div class="class-wrapper">
          <div class="img-bg">
            <img class="img" />
            <div class="circle">
              <div class="circle-text">CLASS</div>
            </div>
            <div class="info-wrapper">
              <div class="title">
                혼자 시작하는 유튜브
                <br />영상 편집 기초
              </div>
              <div class="btm-wrapper">
                <div class="info first-day">4월 20일 시작</div>
                <div class="mid-border" />
                <div class="info class-spot">온라인 수업</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.MeetUp-wrapper {
  width: 100%;
  .MeetUp-container {
    width: 1080px;
    margin: 0 auto;
    .category-wrapper {
      width: 571px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .category {
        font-family: Gilroy;
        font-size: 40px;
        font-weight: 800;
        letter-spacing: 1.41px;
        color: #121212;
        cursor: pointer;
      }
      .mgn-left {
        margin-left: 50px;
      }
      .mid-border {
        border-bottom: 4px solid black;
      }
    }
    .body-wrapper {
      //   position: relative;
      margin-top: 66px;
      display: flex;
      justify-content: space-between;
      max-width: 1077px;
      .class-wrapper {
        position: relative;
        z-index: 0;
        cursor: pointer;
        .img {
          position: absolute;
          background-color: green;
          width: 343px;
          height: 248px;
          left: 0;
          z-index: 1;
        }
        .circle {
          position: absolute;
          width: 72px;
          height: 72px;
          background-color: #0577ff;
          margin: 14px 14px 162px 257px;
          border-radius: 75px;
          z-index: 3;
          .circle-text {
            width: 48px;
            height: 15px;
            font-family: Gilroy;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.44px;
            text-align: center;
            color: #ffffff;
            margin: 28.5px 12px 28.5px 12px;
          }
        }
        .info-wrapper {
          color: #121212;
          margin-top: 263px;
          position: absolute;
          z-index: 5;
          .title {
            width: 193px;
            height: 64px;
            font-family: NotoSansCJKkr;
            font-size: 22px;
            font-weight: 900;
            line-height: 1.45;
          }
          .btm-wrapper {
            width: 180px;
            font-family: SpoqaHanSans;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.07;
            color: #121212;
            display: flex;
            margin-top: 14px;
            .info {
              width: 161px;
              font-family: SpoqaHanSans;
              font-size: 14px;
              font-weight: bold;
              line-height: 1.07;
              color: #121212;
            }
            .mid-border {
              border-left: 1px solid black;
              margin: 0 5px;
            }
            .class-spot {
            }
          }
        }
      }
    }
  }
}
</style>