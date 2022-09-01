<script setup lang="ts">
import { prefix } from '@fortawesome/free-solid-svg-icons';
import { ref } from '@vue/reactivity';

const showMenu = ref(false);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header class="header">
    <div class="myheader flex justify-between bg-green-400 items-center">
      <div class="text-4xl col-span-2 md:col-span-1 text-white">kajikajiポートフォリオ</div>
      <nav
        :class="showMenu ? 'sideBarVisible' : ''"
        class="sideBar md:visible flex md:flex-row flex-col bg-green-400 w-400px md:h-full"
      >
        <RouterLink class="link text-white" to="/home">Home</RouterLink>
        <RouterLink class="link text-white" to="/about">About</RouterLink>
        <RouterLink class="link text-white" to="/history">History</RouterLink>
        <RouterLink class="link text-white" to="/products">Products</RouterLink>
        <a href="https://github.com/kajikaji0725" class="link" target="_blank">
          <!-- <img class="icon" src="/GitHub-Mark-32px.png" /> -->
          <i class="fa-brands fa-github text-4xl"></i>
        </a>
        <a href="https://twitter.com/kajiharalivi" class="link" target="_blank">
          <i class="fa-brands fa-twitter text-4xl"></i>
        </a>
      </nav>
      <button @click="toggleNav" type="button" class="menuToggleButton">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 20px, 50px;
}

.menuToggleButton {
  display: none;
}

.myheader {
  height: var(--header-height);
}

@media screen and (max-width: 768px) {
  .menuToggleButton {
    display: block;
    position: fixed;
    top: 4px;
    right: 8px;
    font-size: xx-large;
  }
  .sideBar {
    row-gap: 0;
    top: var(--header-height);
    right: 0;
    position: fixed;
    transform: translateX(100%);
    transition: transform 0.5s;
  }

  .link {
    height: auto !important;
    padding: 8px 16px;
  }
}

.sideBarVisible {
  transform: translateX(0%);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 48px;
}

.link {
  padding: 15px;
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  transition-property: all;

  &:hover {
    background-color: white;
    color: rgb(74 222 128 / var(--tw-bg-opacity));
  }
  /* box-shadow: inset 0 0 0 4px; */
}

.twitter {
  height: 2rem;
  text-align: center;
}
</style>
