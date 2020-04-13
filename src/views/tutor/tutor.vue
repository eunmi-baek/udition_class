<template>
  <div class="container">
    <Header />
    <section>
      <ul class="tutor-list">
        <li @click="detailType = 0" :class="{ active: detailType == 0 }">
          CLASS
        </li>
        <li @click="detailType = 1" :class="{ active: detailType == 1 }">
          MEET UP
        </li>
        <li @click="detailType = 2" :class="{ active: detailType == 2 }">
          ONE DAY
        </li>
      </ul>
      <div class="tutor-detail">
        <div class="card" v-for="(card, i) in cards" :key="i">
          <div class="bg"></div>
          <img :src="card.img" alt />
          <p class="title">
            {{ card.title }}
            <span>{{ card.name }}</span>
          </p>
          <p class="button">클래스 참가하기</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      detailType: 0,
      cards: [
        {
          id: 1,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "기타리스트",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 3,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 4,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 5,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 6,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 7,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        },
        {
          id: 8,
          title: "작곡가",
          name: "남기상",
          img: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  section {
    width: 1080px;
    margin: 90px auto;

    .tutor-list {
      width: 571px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      li {
        margin-right: 50px;
        padding-bottom: 5px;
        font-family: Gilroy;
        font-size: 40px;
        font-weight: 800;
        letter-spacing: 1.41px;
        color: #121212;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        &.active {
          border-bottom: 5px solid black;
        }
      }
    }

    .tutor-detail {
      width: 100%;
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;

      .card {
        width: 249px;
        height: 242px;
        margin-right: 28px;
        margin-bottom: 30px;
        position: relative;
        cursor: pointer;

        &:nth-child(4n) {
          margin-right: 0;
        }

        .bg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(18, 18, 18, 0.3);
        }

        img {
          width: 100%;
          height: 100%;
        }

        .title {
          position: absolute;
          top: 20px;
          left: 25px;
          font-size: 20px;
          color: #fff;

          span {
            font-weight: bold;
          }
        }

        .button {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 16px 0;
          background: #0577ff;
          text-align: center;
          font-size: 16px;
          font-weight: 900;
          color: #fff;
          opacity: 0;
        }

        &:hover {
          .bg {
            background: rgba(18, 18, 18, 0.6);
          }
          .button {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
