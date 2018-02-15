import * as firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
	databaseURL: 'https://rpc-students.firebaseio.com',
	messagingSenderId: "1010703930202"
});
firebase.messaging().useServiceWorker("serviceworker.js")
// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebase.database();
export default firebase.messaging();
