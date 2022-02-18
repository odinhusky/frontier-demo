<template>
  <div class="data-list-container default-border">
    <div
      class="data-unit"
      :class="{
        'w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 mb:w-full mb:px-0': showType === 'cards',
        'w-full flex flex-auto': showType === 'lines',
      }"
      v-for="item in data"
      :key="item.login.uuid"
      @click="handleProfileClick(item)"
    >
      <div
        class="pserson-img"
        :class="{
          'w-full': showType === 'cards',
          'w-40': showType === 'lines',
        }"
        :style="{backgroundImage: `url(${item.picture.large})`}" ></div>

      <div
        class="break-all"
        :class="{
          'mt-4 w-full': showType === 'cards',
          'mt-0 p-4 flex-auto description-lines-width': showType === 'lines',
        }"
      >
        <span class="description-line">Name: {{ `${item.name.title}. ${item.name.first} ${item.name.last}` }}</span>
        <span class="description-line">Gender: {{ item.gender }}</span>
        <span class="description-line">Phone: {{ item.phone }}</span>
        <span class="description-line">Email: {{ item.email }}</span>
        <span class="description-line" v-if="showType === 'lines'">Location: {{ item.location.timezone.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'DataList',
  props: {
    data: Array,
    showType: String
  },
  setup(props, { emit }) {

    const handleProfileClick = (profileItem) => {
      emit('checkProfile', profileItem)
    }

    return {
      handleProfileClick
    }
  }
}
</script>

<style lang="postcss" scoped>
  .data-list-container {
    @apply p-5 w-full overflow-y-auto flex flex-wrap;
    height: calc(100vh - 80px - 150px);
  }

  .data-unit {
    @apply py-4 px-2 cursor-pointer select-none;
  }

  .pserson-img {
    @apply bg-no-repeat bg-cover bg-center;
    min-height: 150px;
  }

  .descriptions {
    @apply w-full mt-4;
  }

  .description-line {
    @apply w-full block;
  }

  .description-lines-width {
    width: calc(100% - 10rem);
  }

</style>