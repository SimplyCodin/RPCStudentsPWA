<template>
  <div id="app">
    <header>
			<div class="headershadow">
      <span>Vue.js PWA</span>
		</div>
    </header>
		<MatNav>
			<MatNavItem icon="home" label="Home" link="/" router/>
			<MatNavItem icon="video_library" label="Videos" link="videos" router/>
			<MatNavItem icon="work" label="PAIS" link="pais" router/>
		</MatNav>
		<main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MatNav from '@/components/MatNav.vue'
import MatNavItem from '@/components/MatNavItem.vue'
export default {
  name: 'app',
	components: {MatNav, MatNavItem}
}
</script>

<style>
html, body {
  margin: 0;
	height: 100%;
	width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  padding-top: 56px;
	margin-left: 56px;
	height: 100%;
	width: 100%
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
	width: 100%;
	position: fixed;
	z-index: 2;
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.24);
	position: fixed;
	top: 0px;
}
.headershadow{
	box-shadow: 0px 0px 4px rgba(0,0,0, 0.12);
  height: 56px;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
