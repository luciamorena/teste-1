const api = document.getElementById('api')
const os = document.getElementById('os')
const hora = document.getElementById('hora')

document.getElementById('call').addEventListener('click',async() => {
    const resp = await fetch('https://teste-1-luciamorena.vercel.app/')
    const data = await resp.json()
    console.log(data)
    api.innerHTML = data.msg
    os.innerHTML = data.os
    hora.innerHTML = data.hora
})