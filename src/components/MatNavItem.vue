<template>
	<a class="MatNav-Item-Container" v-bind:href="link" v-if="router == null">
		<i class="material-icons MatNav-Icon">{{ icon }}</i>
		<p class="MatNav-Label">{{ label }}</p>
	</a>
	<router-link v-bind:to="link" class="MatNav-Item-Container" v-else>
		<i class="material-icons MatNav-Icon">{{ icon }}</i>
		<p class="MatNav-Label">{{ label }}</p>
	</router-link>
</template>

<script>
	import Router from 'vue-router'
	export default {
		name: 'MatNavItem',
		props: ['icon', "label", "router", "link"],
		components: {Router}
	}
</script>
