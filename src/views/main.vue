<template>
  <div class="main-container">
    <header></header>
    <section>
      <div class="top-banner">배너넣을자리</div>
      <div class="container">
        <div class="category">다솔님이 만든거 가져와야지</div>
        <div class="class">
          <h2>진행중인 다양한 클래스를 만나보세요! ></h2>
          <card />
        </div>
      </div>
      <div class="bottom-banner">
        <div>
          유디션은 이러이러하구요, 이러이러합니다.
          <br />따라서 100000000명이 쓰고요, ~~~~~~합니다.
          <br />많은 사람들이 썼으면 좋겠어요.
        </div>
        <div class="strong">더 알아보고 싶습니까?</div>
        <button>클래스 둘러보기</button>
      </div>
    </section>
  </div>
</template>

<script>
import card from "@/components/main/card";

export default {
  name: "main",
  components: {
    card
  },
  data() {
    return {
      categorys: [
        {
          id: 1,
          name: "class",
          image: "",
          content:
            "유디션이 엄선한 선생님과 체계적인 커리큘럼으로 완벽하게 배우기"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;

  header {
    height: 79px;
  }

  section {
    .top-banner {
      height: 513px;
      background-color: grey;
    }

    .container {
      max-width: 1080px;
      margin: 141px auto 100px;

      border: 1px solid red;

      .category {
        height: 540px;
        margin-bottom: 173px;
        border-bottom: 1px solid red;
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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      background-color: grey;

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