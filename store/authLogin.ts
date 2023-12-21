import { defineStore } from 'pinia';

interface loginForm {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
    }),
    actions: {
        async authenticateUser({ username, password }: loginForm) {

            // useFetch from nuxt 3
            const { data, pending } = await useFetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin' : '*'
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            this.loading = pending;

            if (data.value.data){
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.data.token; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            localStorage.removeItem('token')
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
    },
});