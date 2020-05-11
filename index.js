document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    const button2 = document.getElementById("boton2");

    button2.addEventListener('click', e => {
        console.log('click');
        const contenido2 = document.getElementById("contenido2");
        contenido2.innerHTML = `
        <h4>Symptoms of pneumonia</h4>
        Common symptoms of pneumonia include:
        <u3>
            <li>A cough: which may be dry, or produce thick yellow, green, brown or blood-stained mucus.</li>
            <li>Difficulty breathing</li>
            <li>Rapid deartbeat</li>
            <li>High temperature</li>
            <li>Feeling generally unwell</li>
            <li>Sweating and shivering</li>
            <li>Chest pain</li>
        </u3>
        <h4>Risk groups</h4>
        <u4>
            <li>Babies and very young children</li>
            <li>Elderly people</li>
            <li>People who smoke</li>
            <li>People with other health conditions, such as ashtma, cystic fibrosis, or heart
            ,kidney or liver condition</li>
            <li>People with a weakened immune system</li>
        </u4>


            
            
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