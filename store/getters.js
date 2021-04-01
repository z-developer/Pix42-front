export default {
    isAuthenticated: state => state.auth.loggedIn,

    loggedInUser: state => state.auth.user,
};
