<script setup lang="ts">
import { ref } from '@vue/reactivity';

const showMenu = ref(false);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header class="header">
    <div
      class="grid grid-cols-3 md:grid-cols-2 border-2 md:border-t-4 bg-green-400 h-16 items-center"
    >
      <div class="text-4xl col-span-2 md:col-span-1 text-white">kajikajiポートフォリオ</div>
      <nav class="hidden md:visible md:grid md:grid-cols-6 w-400px">
        <RouterLink class="link text-white" to="/home">Home</RouterLink>
        <RouterLink class="link text-white" to="/about">About</RouterLink>
        <RouterLink class="link text-white" to="/history">History</RouterLink>
        <RouterLink class="link text-white" to="/products">Products</RouterLink>
        <a href="https://github.com/kajikaji0725" class="link" target="_blank">
          <img src="/GitHub-Mark-32px.png" />
        </a>
        <a href="https://twitter.com/kajiharalivi" class="link" target="_blank">
          <img class="twitter" src="/2021-Twitter-logo - blue.png" />
        </a>
      </nav>
      <div @click="toggleNav" class="flex md:hidden justify-end pr-5">
        <button
          type="button"
          class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>

        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-gray-100 hover:text-indigo-400">Home</li>
          <li class="text-gray-100 hover:text-indigo-400">About</li>
          <li class="text-gray-100 hover:text-indigo-400">Blogs</li>
          <li class="text-gray-100 hover:text-indigo-400">Contact Us</li>
        </ul>
      </div>

      <!-- <RouterLink class="link text-white" to="/home">Home</RouterLink>
        <RouterLink class="link text-white" to="/about">About</RouterLink>
        <RouterLink class="link text-white" to="/history">History</RouterLink>
        <RouterLink class="link text-white" to="/products">Products</RouterLink>
        <a href="https://github.com/kajikaji0725" class="link" target="_blank">
          <img src="/GitHub-Mark-32px.png" />
        </a>
        <a href="https://twitter.com/kajiharalivi" class="link" target="_blank">
          <img class="twitter" src="/2021-Twitter-logo - blue.png" />
        </a> -->
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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
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
