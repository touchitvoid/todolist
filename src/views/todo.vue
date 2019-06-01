<template>
    <div id="todo">
        <div>你还有 {{ todos.length }} 条 Todo</div>
        <todoBox :todos='todos'/>
    </div>
</template>

<script>
import todoBox from './todoBox'

export default {
    name: 'todo',
    data(){
        return {
            todos : this.$store.state.todo
        }
    },
    components: {
        todoBox
    }
}
</script>

<style lang="less">
    #todo,#success {
        .todo__box {
            padding: 16px 0 12px 14px;
            .todo__success {
                opacity: .55;
                transform: translate(10px,0)
            }
            .todo__item {
                box-sizing: border-box;
                padding: 20px 16px;
                box-shadow: 0 10px 32px -1px rgba(0,0,0,.1);
                margin-bottom: 16px;
                display: -webkit-flex;
                transition: .5s;
                .item__content {
                    flex: 1;
                    .item__title {
                        font-size: 22px;
                        line-height: 1.65
                    }
                    .item__time {
                        box-sizing: border-box;
                        padding-left: 10px;
                        color: rgba(0,0,0,.5)
                    }
                }
                .item__control {
                    button {
                        background: none;
                        border: none;
                        color: rgba(0,0,0,.2);
                        width: 32px;
                        height: 32px;
                    }
                    .checked {
                        animation: checked .7s;
                    }
                    .like {
                        color: #f77d92
                    }
                    .success {
                        color: rgb(0, 202, 147);
                    }
                    @keyframes checked {
                        0% {transform: scale(.9)}
                        50% {transform: scale(1.3)}
                        100% {transform: scale(1)}
                    }
                }
            }
        }
    }
</style>
