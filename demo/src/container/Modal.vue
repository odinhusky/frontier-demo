<template>
  <div class="w-full absolute top-0 left-0">
    <div class="modal-container">
      <div class="modal-mask"></div>

      <div class="modal">
        <button class="close-btn" @click="handleCloseModal()">
          <fa class="block text-3xl hover-icon text-blue-300" icon="circle-xmark" />
        </button>

        <div class="modal-body">
          <div class="w-full flex justify-center">
            <img :src="profile.picture.large" class="w-1/4 block mb-6">
          </div>

          <div class="w-full">
            <span class="description-line">Name: {{ `${profile.login.username}` }}</span>
            <span class="description-line">Username: {{ `${profile.name.title}. ${profile.name.first} ${profile.name.last}` }}</span>
            <span class="description-line">Age: {{ `${profile.dob.age}` }}</span>
            <span class="description-line">Gender: {{ profile.gender }}</span>
            <span class="description-line">Phone: {{ profile.phone }}</span>
            <span class="description-line">Cellphone: {{ profile.cell }}</span>
            <span class="description-line">Email: {{ profile.email }}</span>
            <span class="description-line">Location: {{ profile.location.timezone.description }}</span>
            <span class="description-line">Coordinates: Latitude({{ profile.location.coordinates.latitude }}) | Longitude({{ profile.location.coordinates.longitude }})</span>
          </div>
        </div>
      </div>
    </div>
    Modal
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    profileItem: Object
  },
  setup(props, { emit }) {

    const { profileItem: profile } = props

    console.log('profile', profile)

    const handleCloseModal = () => {
      emit('closeModal')
    }

    return {
      profile,
      handleCloseModal
    }
  }
}
</script>

<style lang="postcss" scoped>
  .modal-container {
    @apply w-screen h-screen absolute top-0 left-0;
  }

  .modal-mask {
    @apply w-screen h-screen absolute top-0 left-0 bg-gray-600 opacity-50;
    z-index: 52;
  }

  .modal {
    @apply w-1/2 h-full absolute top-1/2 left-1/2 bg-white md:w-5/6;
    max-height: 60vh;
    min-height: 60vh;
    transform: translate(-50%, -50%);
    z-index: 53;
  }

  .close-btn {
    @apply absolute right-5 top-5;
  }

  .modal-body {
    @apply w-full p-5 mt-16 overflow-y-auto;
    height: calc(100% - 80px);
  }

  .description-line {
    @apply w-full block text-lg;
  }
</style>