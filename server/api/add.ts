export default defineEventHandler(async (e)=> {

    const body = await readBody(e);
    const token = parseCookies(e)

    await $fetch('http://localhost:8080/api/hape/add', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*'
        },
        body: body
    });

    return {
        "Status" : "OK",
        "Pesan" : "Data Berhasil DiUpload"
    }
})