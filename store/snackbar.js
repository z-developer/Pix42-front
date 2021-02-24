export const state = () => ({
    open: false,
    text: '',
    status: 'notification',
    timeout: 3000,
});

export const mutations = {
    SET_SNACKBAR_OPEN(state, open) {
        state.open = open;
    },

    SET_SNACKBAR_TEXT(state, text) {
        state.text = text;
    },

    SET_SNACKBAR_STATUS(state, status) {
        state.status = status;
    },

    SET_SNACKBAR_TIMEOUT(state, timeout) {
        state.timeout = timeout;
    },
};

export const actions = {
    openSnackbar({ commit }, {
        status = 'notification',
        text = '',
        timeout = 6000,
    }) {
        commit('SET_SNACKBAR_OPEN', true);
        commit('SET_SNACKBAR_STATUS', status);
        commit('SET_SNACKBAR_TEXT', text);
        commit('SET_SNACKBAR_TIMEOUT', timeout);
    },

    closeSnackbar({ commit }) {
        commit('SET_SNACKBAR_OPEN', false);
    },
};
