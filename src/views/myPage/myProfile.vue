<template>
  <div class="myProfile-wrapper">
    <Header />
    <div class="myProfile-container">
      <div class="title">북마크한 프로필</div>
      <div class="card-wrapper">
        <bookmarkCard />
      </div>
    </div>
  </div>
</template>

<script>
import bookmarkCard from "@/components/bookmarkCard";
import Header from "@/components/header";

export default {
  name: "myProfile",
  components: {
    bookmarkCard,
    Header
  }
};
</script>

<style scoped lang="scss">
.myProfile-wrapper {
  .myProfile-container {
    width: 1080px;
    margin: 60px auto 0;
    .title {
      width: 201px;
      height: 45px;
      font-family: NotoSansCJKkr;
      font-size: 30px;
      font-weight: 900;
      color: #000000;
    }
    .card-wrapper {
      margin-top: 39px;
    }
  }
}
</style>