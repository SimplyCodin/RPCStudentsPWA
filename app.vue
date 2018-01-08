<template>
  <div id="app">
    <header>
      <div class="headershadow">
        <span>RPCStudents</span>
      </div>
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
@font-face 
  font-family: 'Material Icons'
  font-style: normal
  font-weight: 400
  src: url(MaterialIcons-Regular.eot) /* For IE6-8 */
  src: local('Material Icons'), local('MaterialIcons-Regular'), url(MaterialIcons-Regular.woff2) format('woff2'), url(MaterialIcons-Regular.woff) format('woff'), url(MaterialIcons-Regular.ttf) format('truetype')


html, body, #app 
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

@media screen and (min-width: 768px)
  .main 
    margin-left: 56px
    margin-bottom: unset
    width: calc(100% - 56px)

header 
  margin: 0
  height: 56px
  padding: 0 16px 0 24px
  background-color: #35495E
  color: #ffffff
  width: 100%
  position: fixed
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.24)
  top: 0px
  z-index: 2

.headershadow
  box-shadow: 0px 0px 4px rgba(0,0,0, 0.12)
  height: 56px

header span 
  display: block
  position: relative
  font-size: 20px
  line-height: 1
  letter-spacing: .02em
  font-weight: 400
  box-sizing: border-box
  padding-top: 16px

.material-icons 
  font-family: 'Material Icons'
  font-weight: normal
  font-style: normal
  font-size: 24px  /* Preferred icon size */
  display: inline-block
  line-height: 1
  text-transform: none
  letter-spacing: normal
  word-wrap: normal
  white-space: nowrap
  direction: ltr
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale
  /* Support for IE. */
  font-feature-settings: 'liga'

</style>
