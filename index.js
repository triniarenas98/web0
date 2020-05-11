document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    const button2 = document.getElementById("boton2");

    button2.addEventListener('click', e => {
        console.log('click');
        const contenido = document.getElementById("contenido");
        contenido.innerHTML = `Simptoms of pneumonia
            
            
        `
    
    const button = document.getElementById("boton");

    button.addEventListener('click', e => {
        console.log('click');
        const contenido = document.getElementById("contenido");
        contenido.innerHTML = `
            <ul>
                <li>Group Students: 
                <u2>
                <div id="contenido"></div>
                Dalila Allaoui Ouadi
                <div id="contenido"></div>
                Nicole Cabrera Villavicencio
                <div id="contenido"></div>
                Tarandeep Sigh Mandahar
                <div id="contenido"></div>
                Manuel Gregorio Collazo
                <div id="contenido"></div>
                Trinidad Arenas Costa
                <li>Contact with us: trinidad.arenas@uvic.cat</li>
                </u2>
            </ul>
            
        `
    })
    

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