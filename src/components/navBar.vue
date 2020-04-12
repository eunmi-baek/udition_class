<template>
  <div class="nav-wrapper">
    <div class="nav-contaianer">
      <div class="logo-box"></div>
      <div class="category-box">
        <ul>
          <li v-for="(category,i) in categories" :key="i">{{category.name}}</li>
        </ul>
      </div>
      <div class="content-box">
        <span>로그인</span>
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
          name: "유디션"
        },
        {
          id: 2,
          name: "클래스"
        },
        {
          id: 3,
          name: "선생님"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss" >
.nav-wrapper {
  width: 100vw;
  border-bottom: 1px solid #2d3039;
  .nav-contaianer {
    width: 75vw;
    margin: 0 auto;
    display: flex;
    color: #2d3039;
    justify-content: space-around;
    .logo-box {
      width: 162px;
      margin: 29px 0 25px 0;
      background-image: url("https://cdn.zeplin.io/5ce635c03355f82ab2b4fefc/assets/F8B7282C-5A6E-46BF-B67F-8BF46C94C3AF.svg");
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
    .category-box {
      margin: 29px 0 25px 0;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          text-align: center;
          font-size: 14px;
          font-family: NotoSansCJKkr;
          padding: 3px 0;
          padding-right: 58px;
          cursor: pointer;
        }
      }
    }
    .content-box {
      margin: 29px 0 25px 0;
      span {
        font-size: 14px;
        text-align: center;
        padding: 3px 14px;
        font-family: NotoSansCJKkr;
        cursor: pointer;
      }
    }
  }
}
</style>