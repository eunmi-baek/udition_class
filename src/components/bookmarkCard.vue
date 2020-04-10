<template>
  <div class="card-container">
    <div class="card" v-for="(card, i) in cards" :key="i">
      <img :src="card.image" alt="cardimage" />
      <div class="title">{{card.title}}</div>
      <div class="date">{{card.date}} | {{card.class}}</div>
      <div class="circle">{{card.category}}</div>
      <button class="button">바로 신청하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      cards: [
        {
          id: 1,
          category: "CLASS",
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          title: "혼자 시작하는 유튜브 영상 편집 기초",
          date: "4월 20일 시작",
          class: "온라인 수업"
        },
        {
          id: 2,
          category: "CLASS",
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          title: "혼자 시작하는 유튜브 영상 편집 기초",
          date: "4월 20일 시작",
          class: "온라인 수업"
        },
        {
          id: 3,
          category: "CLASS",
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          title: "혼자 시작하는 유튜브 영상 편집 기초",
          date: "4월 20일 시작",
          class: "온라인 수업"
        },
        {
          id: 4,
          category: "CLASS",
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          title: "혼자 시작하는 유튜브 영상 편집 기초",
          date: "4월 20일 시작",
          class: "온라인 수업"
        },
        {
          id: 5,
          category: "CLASS",
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          title: "혼자 시작하는 유튜브 영상 편집 기초",
          date: "4월 20일 시작",
          class: "온라인 수업"
        },
        {
          id: 6,
          category: "CLASS",
          image: "https://i.ytimg.com/vi/zwScyfevCBM/maxresdefault.jpg",
          title: "혼자 시작하는 유튜브 영상 편집 기초",
          date: "4월 20일 시작",
          class: "온라인 수업"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.card-container {
  color: #121212;
  display: flex;
  flex-wrap: wrap;

  .card {
    width: 343px;
    margin-right: 25px;
    margin-bottom: 60px;
    position: relative;
    cursor: pointer;

    &:nth-child(3n) {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 248px;
    }

    .title {
      width: 193px;
      font-size: 22px;
      font-weight: 900;
      font-family: NotoSansCJKkr;
      margin-top: 15px;
    }

    .date {
      font-size: 14px;
      font-weight: bold;
      margin-top: 14px;
    }

    .circle {
      width: 72px;
      height: 72px;
      font-family: Gilroy;
      font-size: 14px;
      font-weight: 800;
      color: #ffffff;
      text-align: center;
      line-height: 72px;
      border-radius: 50%;
      background-color: #0577ff;
      position: absolute;
      top: 14px;
      right: 14px;
    }
    .button {
      width: 343px;
      height: 52px;
      border-radius: 4px;
      background-color: #121212;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      margin-top: 12px;
    }
  }
}
</style>