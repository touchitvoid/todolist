<template>
    <div class="todo__box">
        <div class="todo__item" :class="{'todo__success':todo.success}" v-for="(todo,Index) in todos" :key="Index">
            <div class="item__content">
                <div class="item__title">{{ todo.title }}</div>
                <div class="item__time">
                    <span>from: {{ todo.from }}</span> - <span>to: {{ todo.to }}</span>
                </div>
            </div>
            <div class="item__control flex--justCenter">
                <button class="fa fa-check" :class="{'checked success':todo.success}"
                    @click="$store.commit('SET_CHECKED',Index)">
                </button>
                <button class="fa fa-heart" :class="{'checked like':todo.like}"
                    @click="$store.commit('SET_LIKE',Index)">
                </button>
            </div>
        </div>
    </div>
    </template>
<script>
export default {
    name : 'todoBox',
    props: [
        'todos'
    ]
}
</script>

<style>

</style>
