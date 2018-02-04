import Firebase from 'firebase'
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './env'

const firebaseApp = Firebase.initializeApp({
	apiKey: apiKey,
	authDomain: authDomain,
	databaseURL: databaseURL,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();