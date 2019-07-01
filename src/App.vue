<template>
  <div id="app">
    <Sidebar />
    <div class="page-wrapper">
      <Navbar />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Sidebar from './components/layout/Sidebar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>
  .page-wrapper{
    background: #e5e5e5;
    padding-left: 300px;
  }
  .main-content {
    padding-top: 116px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
</style>
