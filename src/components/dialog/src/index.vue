<template>
  <el-dialog
    :custom-class="customClass"
    v-model="innerVisible"
    @open="handleDialogOpen"
    @close="handleDialogClose"
    v-bind="$attrs"
    append-to-body
    :close-on-click-modal="false"
  >
    <template v-slot:header>
      <span>{{ title }}</span>
    </template>
    <div class="f-dialog__content" v-loading="contentLoading">
      <slot></slot>
    </div>
    <template v-slot:footer>
      <el-button
        v-for="button in buttonList"
        :key="button.key"
        :plain="button.plain"
        :type="button.type"
        :loading="button.type == 'primary' && (contentLoading || button.isLoading)"
        :disabled="button.disabled"
        class="primary"
        @click="handleButtonClick(button)"
        >{{ button.label }}</el-button>
    </template>
  </el-dialog>
</template>

<script src="./script.js"></script>
<style src="./style.less" lang="less"></style>
