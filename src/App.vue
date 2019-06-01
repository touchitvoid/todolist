<template>
  <div id="app">
    <main class="container">
      <tab :data="nav"/>
      <transition name="slide-fade">
        <add v-if="$store.state.panel" />
      </transition>
      <div id="content__box">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import tab from './components/tab'
import add from './components/add'

export default {
  name : 'app',
  components: {
    tab,add
  },
  data(){
    return {
      nav: [
        {
          to: '/',
          str: '首页'
        },
        {
          to: '/todo',
          str: 'Todo'
        },
        {
          to: '/success',
          str: '已完成'
        }
      ],
    }
  },
  created(){
    window.addEventListener('beforeunload',()=>{
        localStorage.setItem("xData",JSON.stringify(this.$store.state));
        this.$store.commit('CLOSE_LOGINPANEL');
      });if(localStorage.getItem("xData")){
        this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem('xData'))));
    }
  }
}
</script>


<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: nm;
    src: url('./assets/nima.otf');
  }
  a {text-decoration: none;color: rgba(255, 95, 145, 0.96)}
  li {
    list-style: none;
  }
  body,html {
    font-family: nm
  }
  input,button {
    color: rgba(0,0,0,.75);
    font-family: nm;
  }
  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 72px 10px 0 10px;
    color: rgba(0,0,0,.75);
    box-sizing: border-box;
  }
  #content__box {
    box-sizing: border-box;
    padding: 22px 12px
  }

  .flex--justCenter {
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
  .flex--lineCenter {
    display: -webkit-flex;
    align-items: center;
  }

  .slide-fade-enter-active {
  transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 0.5);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(18px);
    opacity: 0;
  }
</style>
