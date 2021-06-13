<template>
  <el-header class="header">
    <el-dropdown>
      <div>
        <i class="el-icon-setting"></i>
        <span style="margin-left: 10px">王小虎</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  background: #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
