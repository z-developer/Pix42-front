export default function({ store, redirect }) {
    if(!store.state.login.loginUser) {
        return redirect('/');
    }
}
