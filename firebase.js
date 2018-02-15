import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
	databaseURL: 'https://rpc-students.firebaseio.com'
});
firebase.database().enablePersistence()
// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();