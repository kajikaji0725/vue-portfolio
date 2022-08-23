<script setup lang="ts">

</script>

<template>
    <header class="header">
    <div class="grid grid-cols-2 gap-72 border-2 md:border-t-4 bg-green-400 h-16 items-center">
      <div class="text-4xl text-white">kajikajiポートフォリオ</div>
      <nav class="grid grid-cols-6 h-full">
        <RouterLink class="link text-white" to="/home">Home</RouterLink>
        <RouterLink class="link text-white" to="/about">About</RouterLink>
        <RouterLink class="link text-white" to="/history">History</RouterLink>
        <RouterLink class="link text-white" to="/products">Products</RouterLink>
        <a class="link flex justify-center">
        <img src="/GitHub-Mark-32px.png" />
        </a>
        <a class="link">
          <img class="twitter" src="/2021-Twitter-logo - blue.png"/>
        </a>
      </nav>
      </div>
    </header>
</template>

<style scoped lang="scss">

.header{
  width: 100%;
  padding: 20px,50px;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

.link{
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  transition-property: all;

  &:hover{
  background-color: white;
  color: rgb(74 222 128 / var(--tw-bg-opacity));
}
  /* box-shadow: inset 0 0 0 4px; */
}


.twitter{
  height: 2.0rem;
  text-align: center;
}

</style>