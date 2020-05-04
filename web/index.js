document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    const button = document.getElementById("boton");

    button.addEventListener('click', e => {
        console.log('click');
        const contenido = document.getElementById("contenido");
        contenido.innerHTML = `
            <ul>
                <li>Nombre: Trini</li>
                <li>Email: trinidad.arenas@uvic.cat</li>
            </ul>
        `
    })

    const perro_btn = document.getElementById("perro-btn");

    let first = true;
    img = document.createElement('img')
    perro_btn.addEventListener('click', e => {
        console.log('perro');
        const url = 'https://dog.ceo/api/breeds/image/random'
        fetch(url).then(res => res.json()).then(res => {
            const { message, status } = res
            if (status == "success") {
                img.src = message
                if (first) {
                    document.getElementsByTagName("main")[0].appendChild(img);
                    first = false;
                }
            }
        })


    })
});