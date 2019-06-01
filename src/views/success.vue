<template>
    <div id="success">
        <div>你已经完成 {{ todos.length }} 条 Todo</div>
        <todoBox :todos='todos'/>
    </div>
</template>

<script>
import todoBox from './todoBox'

export default {
    name: 'success',
    data(){
        return {
            todos : []
        }
    },
    components: {
        todoBox
    },
    created(){
        let arr = this.$store.state.todo;
        let arr2 = arr.filter((val,index,arr)=>{
            return val.success
        })
        this.todos = arr2;
    }
}
</script>

<style>

</style>
