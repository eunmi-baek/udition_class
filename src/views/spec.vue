<template>
  <div class="container">
    <section>
      <div class="main-img">
        <img src="@/assets/images/spec/spec-img.jpg" alt />
      </div>
      <div class="attend-bar">
        <ul class="category">
          <li>영화</li>
          <li>밋업</li>
        </ul>
        <h2 class="title">내 연애를 바꾼 노래들 : 음악과 어쩌고 저쩌고</h2>
        <p class="by">by 작곡가 박기상</p>
        <p class="price">월 50,000원</p>
        <div class="first-class">
          <div class="first-class-date">
            <h4>첫수업</h4>
            <p>4월 19일 일요일</p>
          </div>
          <p class="first-class-detail">이후 클래스는 클래스 멤버들과 조율 후 진행됩니다.</p>
        </div>
        <div class="deadline">
          <h4 class="deadline-title">마감임박</h4>
          <p>조기 마감될 수 있는 클래스입니다. 신청을 서둘러주세요! 같은 말 들어가는 칸</p>
        </div>
        <div class="button">
          <button class="submit">클래스 참가하기</button>
          <div class="bookmark" @click="handle_toggle" :class="{ like: bookMark == true}"></div>
        </div>
      </div>
      <div class="detail">
        <ul class="detail-list">
          <li @click="noticeType = 0" :class="{ active: noticeType == 0 }">클래스 소개</li>
          <li @click="noticeType = 1" :class="{ active: noticeType == 1 }">커리큘럼</li>
          <li @click="noticeType = 2" :class="{ active: noticeType == 2 }">후기</li>
        </ul>
        <div class="detail-cnt">
          <div class="intro"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeType: 0,
      bookMark: false
    };
  },
  methods: {
    // 이미지 토글버튼
    handle_toggle() {
      if (this.bookMark == true) {
        this.bookMark = false;
      } else {
        this.bookMark = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 1080px;
  margin: 0 auto;
  section {
    margin-top: 36px;
    .main-img {
      float: left;
      img {
        width: 693px;
        height: 482px;
      }
    }

    .attend-bar {
      width: 362px;
      float: right;
      padding: 45px 25px;
      border-radius: 12px;
      border: solid 1px #e2e3ed;

      .category {
        li {
          margin-right: 6px;
          padding: 0 7px;
          display: inline-block;
          background-color: #121212;
          line-height: 24px;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
        }
      }

      .title {
        margin-top: 15px;
        font-size: 24px;
        font-weight: 900;
        line-height: 1.42;
      }

      .by {
        margin-top: 10px;
        font-size: 14px;
        color: #767983;
      }

      .price {
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
      }
      .first-class {
        margin-top: 18px;
        font-size: 14px;

        .first-class-date {
          display: flex;

          h4 {
            font-weight: bold;
            margin-right: 20px;
          }
        }

        .first-class-detail {
          margin-top: 3px;
        }
      }

      .deadline {
        margin-top: 30px;
        padding: 20px 22px;
        font-size: 14px;
        border-radius: 4px;
        background-color: #edeef4;

        .deadline-title {
          font-weight: bold;
        }

        p {
          margin-top: 10px;
        }
      }

      .button {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .submit {
          width: 248px;
          height: 56px;
          border: none;
          border-radius: 4px;
          background-color: #0577ff;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }

        .bookmark {
          width: 52px;
          height: 56px;
          border-radius: 4px;
          border: solid 1px #c4c7cd;
          background: url("../assets/images/spec/bookmark.png") no-repeat center
            center;
          background-size: 20px 18px;
          cursor: pointer;

          &.like {
            border: solid 1px #f3165b;
            background: #f3165b url("../assets/images/spec/bookmark_c.png")
              no-repeat center center;
            background-size: 20px 18px;
          }
        }
      }
    }

    .detail {
      width: 693px;
      margin-top: 30px;
      float: left;
      .detail-list {
        display: flex;
        li {
          margin-right: 20px;
          padding-bottom: 10px;
          font-size: 14px;
          cursor: pointer;

          &.active {
            font-weight: bold;
            border-bottom: 4px solid #121212;
          }
        }
      }

      .detail-cnt {
        padding-top: 30px;
        border-top: 1px solid #e2e3ed;
        margin-bottom: 50px;

        .intro {
          width: 100%;
          height: 1000px;
          background: pink;
        }
      }
    }
  }
}
</style>