<template>
	<div class="videos" v-html="vimeoVids"></div>
</template>

<script>
export default {
	name: 'videos',
	data () {
		return {
			msg: 'Welcome to Your Vue.js PWA'
		}
	}
}
	function getTokenData() {
		var tokenSettings = {
			"url": "https://api.vimeo.com/oauth/authorize/client",
			"method": "POST",
			"headers": {
				"authorization": "basic MDE2NjVlZTM3Y2Q4MjFmYmRjZDIwOTBkZmFmMmE0MjI3YjhkMzk4MDp1MW5qV3hDYzNwSU1zSWZaa3NyT0FpcDQvVlRLa0lpckV5TEQ3Z0NjOUZtZWxJNnlXeHFGSHViWkRrc1RTcVE4MEh3OFF2ZXJuZzVhc29ObVh3K2c1bzBBM2hOWVZ5QkxXQ0pRRlZvN3dnRllHeFJjTkxuWWk4MXJjdXhObzdZZQ=="
			},
			"data": "grant_type=client_credentials"
		}
		axios.create(settings).then(function (response) {
			token = response.data
		});
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #35495E;
}
</style>
