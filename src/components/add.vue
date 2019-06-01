<template>
    <div 
    id="mask" 
    class="flex--justCenter"
    @click="$store.commit('SET_PANEL',false)"
    >
        <div 
        class="todo__panel flex--justCenter"
        @click.stop
        >
            <div class="todo__data">
                <input class="todo__title" v-model="todo.title" placeholder="Title"/>
                <div class="todo__time">
                    <div>
                        from: <input v-model="todo.from" placeholder=".." />
                    </div>
                    <div>
                        to: <input v-model="todo.to" placeholder=".." />
                    </div>
                    <div class="todo__bar"></div>
                </div>
                <div class="todo__addBtn" @click="addTodo">
                    ADD <i class="fa fa-magic"></i>
                </div>
                <div class="todo__submit--status" :style="{'color':status.text[status.index].color}" v-if="status.now">
                    {{status.text[status.index].content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo',
    data(){
        return {
            todo : {
                title : '',
                from : '',
                to : ''
            },
            status: {
                now: false,
                index : 1,
                text : [
                    {
                        content: 'success',
                        color: 'rgb(0, 202, 147)'
                    },
                    {
                        content: 'error ( 数据不完整 )',
                        color: '#ff6969'
                    }
                ]
            }
        }
    },
    methods: {
        addTodo(){
            let {title,from,to} = this.todo
            if(title!=''&&from!=''&&to!=''){
                this.$store.commit('ADD_TODO',this.todo)
                this.status.index = 0
                this.status.now = true
            }else{
                this.status.index = 1
                this.status.now = true
            }
        }
    }
}
</script>

<style lang="less" scoped>
    #mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        .todo__panel {
            width: 300px;
            min-height: 180px;
            border: 1px solid rgba(0,0,0,.15);
            background: white;
            box-sizing: border-box;
            padding: 14px 24px;
            input {
                box-sizing: border-box;
                border: none;
                outline: none;
            }
            .todo__data {
                width: 100%
            }
            .todo__title {
                font-size: 22px;
                color: rgba(0,0,0,.68)
            }
            .todo__time {
                box-sizing: border-box;
                padding: 14px 0 16px 14px;
                color: rgba(0,0,0,.52);
                &>div {
                    display: -webkit-flex;
                }
                input {
                    font-size: 15px;
                    color: rgba(0,0,0,.58);
                    margin-left: 5px;
                }
                .todo__bar {
                    width: 24px;
                    height: 7px;
                    background:#f9286296;
                    margin-top: 4px;
                }
            }
            .todo__addBtn {
                font-size: 15.5px;
                border-top: 1px solid rgba(0,0,0,.15);
                padding: 9px 0 0 4px;
                box-sizing: border-box
            }
            .todo__submit--status {
                margin-top: 4px;
                color: rgb(0, 202, 147);
            }
        }
    }
</style>
