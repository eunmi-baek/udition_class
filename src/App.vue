<template>
  <div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-family: SpoqaHanSans;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
}
</style>
