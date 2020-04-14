<template>
  <div class="bookmark-container">
    <Header />
    <section>
      <MyInfo />
      <div class="main-container">
        <h2>클래스 신청 내역</h2>
        <table>
          <thead>
            <tr>
              <th class="table-head">클래스 정보</th>
              <th>신청 일자</th>
              <th>결제 금액</th>
              <th>주문상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(card, i) in class_info" :key="i">
              <th class="class-info">
                <img :src="card.image" />
                <div class="text">
                  <div class="sub">{{ card.startDate }} 클래스 시작</div>
                  <div class="title">{{ card.title }}</div>
                </div>
              </th>
              <th>{{ card.bookDate }}</th>
              <th class="price">
                <div class="main" :class="{ active: card.discount_price }">
                  {{ card.price.toLocaleString() }}원
                </div>
                <div class="discount" :class="{ hide: !card.discount_price }">
                  {{ card.discount_price.toLocaleString() }}원
                </div>
              </th>
              <th class="status">
                <div class="title">{{ status[card.status] }}</div>
                <div class="btn" v-if="card.status > 0">{{ card.btn }}</div>
              </th>
            </tr>
          </tbody>
        </table>
        <div class="pagination-container">
          <paginate
            v-model="pageNum"
            :page-count="this.pageCount"
            :page-range="3"
            :margin-pages="5"
            :click-handler="clickCallback"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MyInfo from "@/components/MyInfo";

export default {
  name: "bookmark",
  components: {
    Paginate,
    Header,
    Footer,
    MyInfo
  },
  data() {
    return {
      class_info: [
        {
          id: 1,
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          startDate: "04.25",
          title: "라라랜드와 함께하는 서울의 밤 - 음악 그리고 영화",
          bookDate: "2020-04-12",
          price: 50000,
          discount_price: 0,
          status: 0,
          btn: ""
        },
        {
          id: 2,
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          startDate: "04.25",
          title: "라라랜드와 함께하는 서울의 밤 - 음악 그리고 영화",
          bookDate: "2020-04-12",
          price: 70000,
          discount_price: 50000,
          status: 3,
          btn: "후기 작성"
        }
      ],
      status: {
        0: "입금대기",
        1: "입금 완료",
        2: "입금 완료",
        3: "결제 완료"
      }
    };
  }
};
</script>

<style lang="scss">
.bookmark-container {
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

      table {
        width: 100%;
        border-top: solid 1px #121212;
        border-collapse: collapse;

        thead {
          th {
            height: 76px;
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: 900;
            border-bottom: 1px solid #dddee4;
          }

          .table-head {
            width: 50%;
          }
        }

        tbody {
          tr {
            width: 100%;

            .class-info {
              img {
                float: left;
                width: 100px;
                height: 72px;
                margin: 0 12px 0 20px;
              }

              .text {
                float: left;
                width: 144px;

                .sub {
                  width: 98px;
                  height: 24px;
                  font-size: 11px;
                  text-align: center;
                  line-height: 24px;
                  border: 1px solid #dddee4;
                }

                .title {
                  font-family: NotoSansCJKkr;
                  font-size: 11px;
                  font-weight: 900;
                  margin-top: 7px;
                  text-align: start;
                }
              }
            }

            th {
              padding: 28px 0;
              font-size: 11px;
              border-bottom: 1px solid #dddee4;
            }

            .price {
              .main {
                font-weight: bold;

                &.active {
                  font-weight: normal;
                  text-decoration: line-through;
                }
              }
              .discount {
                font-weight: bold;

                &.hide {
                  display: none;
                }
              }
            }

            .status {
              .title {
                font-weight: bold;
              }

              .btn {
                width: 60px;
                height: 24px;
                background-color: #121212;
                font-size: 11px;
                font-weight: bold;
                line-height: 24px;
                text-align: center;
                color: #ffffff;
                margin: 8px auto 0;
                cursor: pointer;
              }
            }
          }
        }
      }
      .pagination-container {
        margin: 28px auto 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .pagination {
          display: flex;

          .page-item {
            font-size: 14px;
            color: #bdbec6;
            padding: 0 10px;
          }

          .active {
            font-weight: 900;
            color: #121212;
          }
        }
      }
    }
  }
}
</style>
