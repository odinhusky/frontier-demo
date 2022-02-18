<template>
  <div class="text-sm p-5 flex justify-center">
    <PageBtn class="mr-5" text="<" :disabled="!hasPrev" @click="handlePrevClick" />

    <PageBtn class="mr-5" :text="1" :class="{'active': currentPage === 1}" @click="handlePageClick(1)" />

    <PageBtn class="mr-5" text="..." :disabled="true" v-if="!unCenterFrontJudge" />

    <PageBtn class="mr-5" :class="{'active': currentPage === btnNumber1}" :text="btnNumber1" @click="handlePageClick(btnNumber1)" />
    <PageBtn class="mr-5" :class="{'active': currentPage === btnNumber2}" :text="btnNumber2" @click="handlePageClick(btnNumber2)" />
    <PageBtn class="mr-5" :class="{'active': currentPage === btnNumber3}" :text="btnNumber3" @click="handlePageClick(btnNumber3)" />

    <PageBtn class="mr-5" text="..." :disabled="true" v-if="!unCenterEndJudge" />

    <PageBtn class="mr-5" :text="101" :class="{'active': currentPage === 101}" @click="handlePageClick(101)" />

    <PageBtn class="mr-5" text=">" :disabled="!hasNext" @click="handleNextClick" />
  </div>
</template>

<script>
import { computed } from 'vue'

import PageBtn from '../components/PageBtn.vue'

export default {
  name: 'Pagination',
  props: {
    pageObj: Object
  },
  components: {
    PageBtn
  },
  setup({ pageObj }, { emit }) {
    const { hasPrev, hasNext, currentPage } = pageObj

    // # data & computed
    const unCenterFrontJudge = computed(() => currentPage.value <= 3);
    const unCenterEndJudge = computed(() => currentPage.value >= 99);
    const btnNumber1 = computed(() => unCenterFrontJudge.value ? 2 : unCenterEndJudge.value ? 98 : currentPage.value - 1)
    const btnNumber2 = computed(() => unCenterFrontJudge.value ? 3 : unCenterEndJudge.value ? 99 : currentPage.value)
    const btnNumber3 = computed(() => unCenterFrontJudge.value ? 4 : unCenterEndJudge.value ? 100 : currentPage.value + 1)

    // - methods
    const handlePrevClick = () => {
      if(hasPrev) {
        emit('changePage', currentPage.value - 1)
      }
    }

    const handleNextClick = () => {
      if(hasPrev) {
        emit('changePage', currentPage.value + 1)
      }
    }

    const handlePageClick = (newPage) => {
      emit('changePage', newPage)
    }

    return {
      hasPrev,
      hasNext,
      currentPage,
      unCenterFrontJudge,
      unCenterEndJudge,
      btnNumber1,
      btnNumber2,
      btnNumber3,
      handlePrevClick,
      handleNextClick,
      handlePageClick
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>