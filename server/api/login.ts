export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    // useFetch from nuxt 3
    const data = await $fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: body
    });

    return {
        data
    };
})