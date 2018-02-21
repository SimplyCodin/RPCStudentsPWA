import Vue from 'vue'
import * as firebase from 'firebase'
import { firebaseAction, bindFirebaseRef, firebaseMutations } from 'vuexfire'
import Vuex from 'vuex'
import { fbApp } from "../firebase"
import VuexPersistence from 'vuex-persist'
fbApp

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
})

Vue.use(Vuex)

const state = {
	home: [],
	pais: [],
}
const getters = {
	home: state => state.home,
	pais: state => state.pais,
}
const actions = {
	setHomeRef: firebaseAction( ( { bindFirebaseRef }, ref) => {
		bindFirebaseRef('home', ref)
	}),
	setPaisRef: firebaseAction( ( { bindFirebaseRef }, ref ) => {
		bindFirebaseRef('pais', ref)
	}),
}

export default new Vuex.Store({
	strict: true,
	mutations: firebaseMutations,
	state,
	getters,
	actions,
	plugins: [ vuexLocal.plugin ],
})