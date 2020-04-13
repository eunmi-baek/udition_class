<template>
  <div class="myProfile-wrapper">
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

export default {
  name: "myProfile",
  components: {
    bookmarkCard
  }
};
</script>

<style scoped lang="scss">
.myProfile-wrapper {
  .myProfile-container {
    width: 1080px;
    margin: 0 auto;
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