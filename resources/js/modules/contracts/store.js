import axios from 'axios';
import router from "../../core/router";

export default {
    state: {
        contracts: [],
    },

    mutations: {
        setContracts(state, contracts) {
            state.contracts = contracts;
        },
    },

    actions: {
        getContracts({commit}) {
            return axios
                .get('/api/contracts')
                .then(response => {
                    commit('setContracts', response.data);
                }).catch(error => {
                    commit('addError', error.response.data.message || error.message);
                });
        },
        createContract({commit}, basket) {
            commit('startLoading');
            return axios
                .post('/api/contracts', basket)
                .then(response => {
                    commit('cleanBasket');
                    commit('addMessage', response.data.message);
                    router.push({path: '/contracts'})
                }).catch(error => {
                    commit('addError', error.response.data.message || error.message)
                }).finally(() => commit('stopLoading'));
        },
    },

    getters: {
        contracts: state => state.contracts,
    }
};