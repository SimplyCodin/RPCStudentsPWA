<template>
	<a class="MatNav-Item-Container" href="#">
			<i class="material-icons MatNav-Icon">{{ icon }}</i>
			<p class="MatNav-Label">{{ label }}</p>
	</a>
</template>

<script>
	export default {
		name: 'MatNavItem',
		props: ['icon', "label"]
	}
</script>
