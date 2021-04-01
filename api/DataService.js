import axios from 'axios';

axios.defaults.headers.post = { 'Content-Type': 'application/json' };
axios.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status == 401){
            localStorage.removeItem('auth._token.local');
            localStorage.removeItem('auth.redirect');
            localStorage.removeItem('auth.strategy');
            localStorage.removeItem('auth._token_expiration.local');
            this.$store.state.auth.loggedIn = false;
            this.$auth.logout();
            this.$router.push('/login');
        }

        return Promise.reject(error);
    },
);

export const SetAuthenticationHeader = async data => {
    axios.defaults.headers.common = { Authorization: data };
};

export const Register = async data => {
    let response = await axios.post(process.env.baseURL + '/Account/register', data);

    return response;
};

export const UpdatePersonalInfo = async data => {
    const response = await axios.post(process.env.baseURL + '/Account/updatePersonalDetails', data);

    return response;
};
