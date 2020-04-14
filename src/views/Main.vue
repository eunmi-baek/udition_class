<template>
  <div class="main-container">
    <Header />
    <section>
      <div class="top-banner"></div>
      <div class="container">
        <div class="category-container">
          <div class="category" v-for="(category, i) in categories" :key="i">
            <div class="title">{{ category.name }}</div>
            <div class="line"></div>
            <div class="card-container">
              <img :src="category.image" />
              <div class="content">{{ category.content }}</div>
              <button>클래스 둘러보기</button>
            </div>
          </div>
        </div>
        <div class="class">
          <h2>진행중인 다양한 클래스를 만나보세요! ></h2>
          <Card />
        </div>
      </div>
      <div class="bottom-banner">
        <div>
          유디션은 이러이러하구요, 이러이러합니다.
          <br />따라서 100000000명이 쓰고요, ~~~~~~합니다.
          <br />많은 사람들이
          썼으면 좋겠어요.
        </div>
        <div class="strong">더 알아보고 싶습니까?</div>
        <button>클래스 둘러보기</button>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default {
  name: "main",
  components: {
    Header,
    Footer,
    Card
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "CLASS",
          image:
            "https://i.pinimg.com/originals/87/70/d0/8770d03058a64bf76c19b343c735f28d.jpg",
          content:
            "유디션이 엄선한 선생님과 체계적인 커리큘럼으로 완벽하게 배우기"
        },
        {
          id: 2,
          name: "ONE DAY",
          image:
            "https://i.pinimg.com/originals/87/70/d0/8770d03058a64bf76c19b343c735f28d.jpg",
          content: "삶에 필요한 기본 예능,하루만에 배우는 속성 클래스"
        },
        {
          id: 3,
          name: "MEET UP",
          image:
            "https://i.pinimg.com/originals/87/70/d0/8770d03058a64bf76c19b343c735f28d.jpg",
          content:
            "음악, 영화, 문학 모든 엔터테인먼트 장르를 아울러 함께 이야기를 나누는 곳"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  color: #121212;

  header {
    height: 79px;
  }

  section {
    .top-banner {
      height: 513px;
      background: url("https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg")
        no-repeat center center;
      background-size: cover;
    }

    .container {
      max-width: 1080px;
      margin: 141px auto 100px;
      position: relative;

      .category-container {
        height: 540px;
        margin-bottom: 173px;
        display: flex;

        .category {
          margin-right: 26px;
          display: flex;
          flex-direction: column;
          align-items: center;

          &:nth-child(3n) {
            margin-right: 0;
          }

          .title {
            font-family: Gilroy;
            font-size: 30px;
            font-weight: 800;
            text-align: center;
          }

          .line {
            width: 44px;
            height: 4px;
            background-color: #0577ff;
            margin: 28px 0 42px;
          }

          .card-container {
            width: 343px;
            height: 428px;
            border-radius: 12px;
            overflow: hidden;
            background-color: #121212;
            position: relative;
            cursor: pointer;

            img {
              width: 100%;
              height: 299px;
            }

            .content {
              height: 129px;
              font-size: 18px;
              font-weight: bold;
              line-height: 1.3;
              color: #ffffff;
              padding: 20px 56px 0 23px;
            }

            &:hover {
              button {
                width: 253px;
                height: 56px;
                font-size: 16px;
                font-weight: 900;
                font-family: NotoSansCJKkr;
                color: #ffffff;
                border-radius: 4px;
                border: none;
                background-color: #0577ff;
                position: absolute;
                top: 122px;
                right: 45px;
                cursor: pointer;
              }
            }
          }
        }
      }

      .class {
        h2 {
          font-size: 28px;
          font-weight: 900;
          font-family: NotoSansCJKkr;
          margin-bottom: 42px;
        }
      }
    }

    .bottom-banner {
      height: 564px;
      background: url("https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg")
        no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      div {
        font-size: 21px;
        font-family: NotoSansCJKkr;
        color: #ffffff;
        text-align: center;
      }

      .strong {
        font-size: 35px;
        margin-top: 25px;
        margin-bottom: 42px;
      }

      button {
        width: 253px;
        height: 56px;
        font-size: 16px;
        font-weight: 900;
        font-family: NotoSansCJKkr;
        color: #ffffff;
        border-radius: 4px;
        border: none;
        background-color: #0577ff;
        cursor: pointer;
      }
    }
  }
}
</style>
