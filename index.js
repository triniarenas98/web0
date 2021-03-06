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
            Contact with your primary health center if you experienced any of these symptoms.
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
        <h4>Treatment</h4>
        Mild pneumonia can usually be treated at home by:
            <li>Getting plenty of rest</li>
            <li>Taking antiobitcs</li>
            <li>Drinking plenty of fluids</li>
        For at-risk groups, pneumonia can be severe and may need to be treated in hospital. 
        This is because it can lead to serious complications, which in some cases can be fatal. 
        <h4> <a href="https://www.nhs.uk/conditions/pneumonia">For more information about pneumonia</a></h4>
        </u5> 
        Here you can observe the differences between an X-Ray chest of an healthy patient and one of a patient with pneumonia.
        These types of images have been used during the performance of this project.
        <div id="contenido2"></div>
        <img id=img2 src="/NORMAL2-IM-1440-0001.jpeg">
        <img id=img2 src="/person1952_bacteria_4883.jpeg">

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


});