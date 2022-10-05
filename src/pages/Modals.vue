<template>
  <modal :active="active" @click="active=false" src="https://placekitten.com/800/600"></modal>
  <button class="button is-primary" aria-label="close" @click="active=true">Open Modal</button>
  
  <modal :active="active2" @click="active2=false" src="https://placebear.com/800/600"></modal>
  <button class="button is-info" aria-label="close" @click="active2=true">Open Modal2</button>
  
  <modal :active="active3" @click="active3=false" src="https://placekitten.com/400/500"></modal>
  <button class="button is-danger" aria-label="close" @click="active3=true">Open Modal3</button>
  
  <modal :active="active4" @click="active4=false" src="https://placebear.com/400/500"></modal>
  <button class="button is-link" aria-label="close" @click="active4=true">Open Modal4</button>
  </template>

<script>
import ImgModal from '../components/ImgModal.vue'
import Modal from '../components/Modal.vue'
export default {
    components: { Modal, ImgModal },
    data(){
        return {
            active: false,
            active2: false,
            active3: false,
            active4: false
        }
    }
}
</script>

<style>

</style>