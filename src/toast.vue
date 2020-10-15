<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wheelToast'
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-bg: #3c3c3d;
$toast-padding:10px;
.toast{
  position: fixed;top: 0;padding: $toast-padding;left: 50%;transform: translateX(-50%);
  font-size: $font-size;background: $toast-bg;color: #ffffff;
  border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
}
</style>