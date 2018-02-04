<template>
	<a class="MatNav-Item-Container" :href="link" v-if="router == null">
		<icon class="MatNav-Icon" :icon="icon"></icon>
		<p class="MatNav-Label">{{ label }}</p>
	</a>
	<router-link :to="link" class="MatNav-Item-Container" v-else>
		<icon class="MatNav-Icon" :icon="icon"></icon>
		<p class="MatNav-Label">{{ label }}</p>
	</router-link>
</template>

<script>
	import Router from 'vue-router'
	import icon from "@/Icon.vue"
	export default {
		name: 'MatNavItem',
		props: ['icon', "label", "router", "link"],
		components: {Router, icon}
	}
</script>
