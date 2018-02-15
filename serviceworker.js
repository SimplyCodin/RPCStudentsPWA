import runtime from 'offline-plugin/runtime'
// import fcm from './firebase.js'

runtime.install({
	// When an update is ready, tell ServiceWorker to take control immediately:
	onUpdateReady() {
		console.log('update ready')
		runtime.applyUpdate()
	},
	// Reload to get the new version:
	onUpdated() {
		console.log('updated')
		location.reload()
	}
})
runtime.update()


// fcm.onMessage(function (payload) {
// 	console.log("Message received. ", payload);
// 	// ...
// });
// fcm.getToken()
// 	.then( (currentToken) => {console.log(currentToken)} )