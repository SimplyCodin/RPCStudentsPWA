<template>
  <div id="app">
    <header class="headershadow">
        RPCStudents
    </header>
    <MatNav>
      <MatNavItem icon="home" label="Home" link="/" router/>
      <MatNavItem icon="video_library" label="Videos" link="videos" router/>
      <MatNavItem icon="work" label="PAIS" link="pais" router/>
    </MatNav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import MatNav from '@/MatNav.vue'
  import MatNavItem from '@/MatNavItem.vue'
  export default {
    name: 'app',
    components: {MatNav, MatNavItem}
  }
</script>

<style lang="sass">
  html, body, #app,
    margin: 0
    height: 100%
    width: 100%
    position: absolute
  #app 
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
  .main
    text-align: center
    margin-top: 56px
    margin-bottom: 56px
    height: calc(100% - 112px)
    width: 100%
  header 
    margin: 0
    padding: 18px
    background-color: #35495E
    color: #ffffff
    width: 100%
    position: fixed
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.24)
    top: 0px
    z-index: 2
    font-size: 20px
    line-height: 1
    letter-spacing: .02em
    font-weight: 400
  .headershadow
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)
  @media screen and (min-width: 768px)
    .main 
      margin-left: 56px
      margin-bottom: unset
      width: calc(100% - 56px)
      height: calc(100% - 56px)
</style>
