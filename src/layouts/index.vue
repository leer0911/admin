<template>
  <el-container>
    <sidebar />
    <el-container direction="vertical">
      <navbar />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style></style>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar";

export default {
  components: {
    Sidebar,
    Navbar,
  },
  data() {},
};
</script>
