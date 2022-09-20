<template>

<input type="text" v-model="name">
<button class="button" @click="count++">{{ count }}</button>
{{ name }}
<ul>
    <li v-for="(item,index) in items" :key="index" {{ item }}></li>
</ul>
</template>

<script>
export default {
    data(){
        return {
            name: 'Egert',
            count: 0,
            items: ['piim','sai','liha']
        }
    }
}
</script>

<style>

</style>