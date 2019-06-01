<template>
    <div class="work">
        <nav>
            <router-link 
            v-for="(item,Index) in data"
            :key="Index" :to="item.to"
            >{{item.str}}
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'tab',
    props: [
        'data'
    ],
    data(){
        return {
            checked: 0
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    .work{
        nav{
            a{
                text-decoration: none;
                color: rgba(0,0,0,.34);
                padding: 4px 14px;
                font-size: 18px;
            }
            .router-link-exact-active{
                font-size: 26px;  
                color: rgba(0,0,0,.62);  
                border-bottom: 1px solid rgba(0,0,0,.12);
            }
        }
    }
</style>
