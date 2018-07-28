import * as firebase from 'firebase';

export const fbApp = firebase.initializeApp({
	databaseURL: 'https://rpc-students.firebaseio.com',
});

export const db = firebase.database();
