<template>
  <div class="w-full">
    <TheNav :navObj="navObj" />
    <DataList :data="currentData" :showType="showType" @checkProfile="openProfile" />
    <Pagination :pageObj="pageObj" @changePage="handleChangePage" />

    <Modal v-if="isShowProfileModal" :profileItem="profileItem" @closeModal="() => {setModalShow(false)}" />
  </div>
</template>

<script>
import { ref, provide, getCurrentInstance, computed } from 'vue'

import TheNav from './container/TheNav.vue'
import DataList from './container/DataList.vue'
import Pagination from './container/Pagination.vue'
import Modal from './container/Modal.vue'

export default {
  name: 'App',
  components: {
    TheNav,
    DataList,
    Pagination,
    Modal
  },
  setup() {
    // ==============================================
    // Show type
    const showType = ref('cards');
    const switchShowType = (type) => {
      console.log('App switchShowType => type', type)
      showType.value = type
    }
    provide('type', {
      showType,
      switchShowType
    })

    // ==============================================
    // Data & Pagination
    const itemsPerPage = 30;
    const totalItems = 3010;
    const totalPage = parseInt(totalItems / itemsPerPage) + 1 ;
    const currentPage = ref(1);
    const hasPrev = computed(() => currentPage.value !== 1);
    const hasNext = computed(() => currentPage.value !== totalPage);
    const pageObj = {
      currentPage,
      hasPrev,
      hasNext
    }

    const { proxy } = getCurrentInstance()
    const seed = computed(() => `frontier-demo-p${currentPage.value}`);
    const api = computed(() => `https://randomuser.me/api/?results=${itemsPerPage}&seed=${seed.value}`)
    const currentData = ref([]);
    const getCurrentData = () => {
      proxy.$axios({
        url: api.value,
        method: 'GET'
      }).then(res => {
        console.log('res', res)
        if(res.status === 200) {
          console.log('success')
          const results = res?.data?.results;
          currentData.value = results === undefined ? [] : results;
          console.log('currentData', currentData)
        }
      }).catch((err) => {
        console.log('getCurrentData Error', err)
      })
    }

    const handleChangePage = (newPage) => {
      currentPage.value = newPage
      console.log('handleChangePage newPage => ', newPage)
      console.log('handleChangePage api => ', api)

      getCurrentData()
    }

    getCurrentData()

    // ==============================================
    // Modal
    const isShowProfileModal = ref(false);
    const profileItem = ref({});

    const setModalShow = (isShow) => {
      isShowProfileModal.value = isShow
    }

    const openProfile = (item) => {
      setModalShow(true);
      profileItem.value = item
    }

    return {
      showType,
      currentData,
      pageObj,
      currentPage,
      handleChangePage,
      isShowProfileModal,
      profileItem,
      setModalShow,
      openProfile,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
