export default defineEventHandler((event) => {
    const data = readBody(event)
    return {
        "status": "OK",
        data
    }
})