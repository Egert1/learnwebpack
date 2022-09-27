<template>
<div class="container">
    <section class="section">
            <button class="button" @click="count++">{{ count }}</button>
        <div class="field has-addons">
            <p class="control">
                <input class="input" type="text" v-model="newItem" @keydown.enter="addItem()">
            </p>
            <p class="control">
                <button class="button" @click="addItem()">Add</button>
            </p>
        </div>
    <div class="content">
            <item-list title="All Items" v-bind:items="items"></item-list>
            <item-list title="Done Items" v-bind:items="doneItems"></item-list>
            <item-list title="Not Done Items" v-bind:items="notDoneItems"></item-list>
        </div>
  </section>
</div>
</template>

<script>
import ItemList from '../components/ItemList.vue';
export default {
  components: { ItemList },
    data(){
        return{
            name:"Egert Vreindlik",
            count: 0,
            items: [
                {name:"sai",done: true, id: 0},
                {name:"kali",done: true, id: 1},
                {name:"sool",done: false, id: 2},
                {name:"piim",done: true, id: 3},
                {name:"leib",done: false, id: 4},
                ]
        }
    },
    methods: {
        addItem(){
            if(this.newItem.trim() != ''){
                this.items.push({name: this.newItem,done: false, id: this.items.lenght});
            }
            this.newItem = '';
        }
    },
    computed: { 
        doneItems(){
            return this.items.filter(item => item.done)
        },
        notDoneItems(){
            return this.items.filter(item => !item.done)
        }
    },

}
</script>

<style>

</style>