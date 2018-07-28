import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { firebaseAction, bindFirebaseRef, firebaseMutations } from 'vuexfire'

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
	setHomeRef: firebaseAction(({ bindFirebaseRef }, ref) => {
		bindFirebaseRef('home', ref)
	}),
	setPaisRef: firebaseAction( ({ bindFirebaseRef }, ref) => { bindFirebaseRef('pais', ref) }),
}

export default new Vuex.Store({
	strict: true,
	mutations: firebaseMutations,
	state,
	getters,
	actions,
	plugins: [ vuexLocal.plugin ],
})