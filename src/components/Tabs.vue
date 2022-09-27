<template>
  <div class="tabs">
  <ul>
    <!--<li class="is-active"><a>Pictures</a></li> -->
    <li :class="{'is-active':current===link.path}" v-for="(link, index) in links" :key="index">
        <router-link :to="link.path">{{link.name}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    props:['links', 'current'],
    data(){
        return {
            active: 0
        }
    }
}
</script>

<style>

</style>