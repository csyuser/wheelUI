<template>
  <button class="w-button">你好</button>
</template>


<script>
export default {};
</script>


<style lang="scss">
.w-button {
  height: var(--button-height);
  font-size: var(--font-size);
  color: var(--color);
  background: var(--button-bg);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  padding: 0 1em;
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>