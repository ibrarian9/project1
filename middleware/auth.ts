import {storeToRefs} from "pinia";

import {useAuthStore} from "~/store/authLogin";

export default defineNuxtRouteMiddleware((to) => {
    // make authenticated state reactive
    const { authenticated } = storeToRefs(useAuthStore());
    // get token from cookies
    const token = useCookie('token');

    // check if value exists
    if (token.value) {
        // update the state to authenticated
        authenticated.value = true;
    }

    // if token exists and url is /login redirect to homepage
    if (token.value && to?.name === 'login') {
        return navigateTo('/');
    }

    // if token doesn't exist redirect to log in
    if (!token.value && to?.name !== 'login') {
        abortNavigation();
        return navigateTo('/login');
    }
});