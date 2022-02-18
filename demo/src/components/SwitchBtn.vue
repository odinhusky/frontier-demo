<template >
  <button class="w-10 h-10 default-border flex-center hover-container" :class="{'active': showType === type}" @click="switchShowType(type)">
    <fa class="block text-xl hover-icon" :icon="iconName" />
  </button>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'SwitchBtn',
  props: {
    iconName: String,
    type: String,
  },
  setup() {
    const { showType, switchShowType } = inject('type');

    return {
      showType,
      switchShowType
    }
  }
}
</script>

<style lang="postcss" scoped>
  .hover-container:hover,
  .active {
    @apply bg-blue-400;
  }

  .hover-container:hover .hover-icon,
  .active .hover-icon {
    @apply text-blue-300;
  }
</style>