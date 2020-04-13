<template>
  <div class="MeetUp-wrapper">
    <Header />
    <div class="MeetUp-container">
      <div class="category-wrapper">
        <div class="category">CLASS</div>
        <div class="category mgn-left mid-border">MEET UP</div>
        <div class="category mgn-left">ONE DAY</div>
      </div>
      <div class="card-wrapper">
        <Card />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Card from "@/components/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  name: "meetUp",
  components: {
    Card,
    Header,
    Footer
  }
};
</script>
<style scoped lang="scss">
.MeetUp-wrapper {
  width: 100%;
  .MeetUp-container {
    width: 1080px;
    margin: 90px auto 100px;
    .category-wrapper {
      width: 571px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .category {
        font-family: Gilroy;
        font-size: 40px;
        font-weight: 800;
        letter-spacing: 1.41px;
        color: #121212;
        cursor: pointer;
      }
      .mgn-left {
        margin-left: 50px;
      }
      .mid-border {
        border-bottom: 4px solid black;
      }
    }
    .card-wrapper {
      margin-top: 52px;
    }
  }
}
</style>