<template >
  <!-- <div class="w-10 h-10 default-border flex-center cursor-pointer hover-container" :class="{'active': showType === type}" @click="handleClick"> -->
  <button
    class="w-10 h-10 default-border flex-center"
    :class="{
      'hover-container': !disabled,
      'disabled': disabled
    }"
  >
    <div class="text-xl"> {{ text }} </div>
  </button>
</template>

<script>
export default {
  name: 'SwitchBtn',
  props: {
    text: String,
    disabled: Boolean
  }
}
</script>

<style lang="postcss" scoped>
  .hover-container:hover,
  .active {
    @apply bg-blue-400;
  }

  .disabled {
    @apply bg-gray-300 cursor-default;
  }
</style>