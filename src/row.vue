<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.row{
  display: flex;
  &:nth-child(n){margin-bottom: 5px;}
}
</style>