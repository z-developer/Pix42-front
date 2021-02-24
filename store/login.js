export const state = () => ({ loginUser: null });

export const mutations = {
    SET_USER(state, user) {
        state.loginUser = user;
    },
};

export const actions = {
    // login action isn't async because data, which I want to represent
    // is not response of some request
    login({ commit, dispatch }, data) {
        try {
            if(data.username === 'admin' && data.password === 'admin') {
                commit('SET_USER', data);
            }
            else {
                dispatch('snackbar/openSnackbar', {
                    status: 'error',
                    text: 'Wrong username or password',
                    timeout: 6000,
                }, { root: true });
            }
        }
        catch(error) {
            console.log(error);
        }
    },
};
