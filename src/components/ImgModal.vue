<template>
  <div class="modal" :class="{'is-active': active}">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="image is-4by3"
</template>

<script>
export default {
    components: {Modal},
    props:['active', 'src']
}
</script>

