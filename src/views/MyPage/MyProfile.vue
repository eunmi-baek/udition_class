<template>
  <div class="myProfile-wrapper">
    <Header />
    <div class="myProfile-container">
      <div class="title">북마크한 프로필</div>
      <div class="card-wrapper">
        <BookmarkCard />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import BookmarkCard from "@/components/BookmarkCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "myProfile",
  components: {
    BookmarkCard,
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
.myProfile-wrapper {
  .myProfile-container {
    width: 1080px;
    margin: 60px auto 150px;
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
