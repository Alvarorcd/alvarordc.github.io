var puntos = 0;
var pregunta = 0;

document.getElementById('pregunta').innerHTML = `<h1>¿Cuál es tu color favorito?</h1>`;

document.getElementById('respuestas').innerHTML = `<button class="resp1" onclick="pregunta1_respuestaa()">
resp1
</button>

  <button onclick="pregunta1_respuestab()">respuesta2</button>
     

        <button onclick="pregunta1_respuestac()">respuesta3</button>

        <button onclick="pregunta1_respuestad()">respuesta4</button>
    </div>`;




if (pregunta == 2) {

    document.getElementById('pregunta').innerHTML = `<h1>¿prefieres café o té?</h1>`;

    document.getElementById('respuestas').innerHTML = `<button class="resp1" onclick="pregunta1_respuestaa()">
        resp1
        </button>
        
                <button onclick="pregunta1_respuestab()">respuesta2</button>
        
                <button onclick="pregunta1_respuestac()">respuesta3</button>
        
                <button onclick="pregunta1_respuestad()">respuesta4</button>
            </div>`

}


if (pregunta == 3) {

    document.getElementById('pregunta').innerHTML = `<h1>¿gatos o perros?</h1>`;

    document.getElementById('respuestas').innerHTML = `<button class="resp1" onclick="pregunta1_respuestaa()">
        resp1
        </button>
        
                <button onclick="pregunta1_respuestab()">respuesta2</button>
        
                <button onclick="pregunta1_respuestac()">respuesta3</button>
        
                <button onclick="pregunta1_respuestad()">respuesta4</button>
            </div>`

}







function pregunta1_respuestaa() {



    pregunta++;

    pasarPregunta();


}

function pregunta1_respuestab() {

    pregunta++;


}

function pregunta1_respuestac() {
    pregunta++;

}

function pregunta1_respuestad() {
    pregunta++;



}


function pasarPregunta() {

    if (pregunta == 1) {

        document.getElementById('pregunta').innerHTML = `<h1>Eres de playa o de montaña?</h1>`;


        document.getElementById('respuestas').innerHTML = `<button class="resp1" onclick="pregunta1_respuestaa()">
        no me gusta nada nada
        </button>
        
                <button onclick="pregunta1_respuestab()">respuesta2</button>
        
                <button onclick="pregunta1_respuestac()">respuesta3</button>
        
                <button onclick="pregunta1_respuestad()">respuesta4</button>
            </div>`
    }

    if (pregunta == 2) {

        document.getElementById('pregunta').innerHTML = `<h1>¿prefieres café o té?</h1>`;


        document.getElementById('respuestas').innerHTML = `<button class="resp1" onclick="pregunta1_respuestaa()">
        resp1
        </button>
        
                <button onclick="pregunta1_respuestab()">respuesta2</button>
        
                <button onclick="pregunta1_respuestac()">respuesta3</button>
        
                <button onclick="pregunta1_respuestad()">respuesta4</button>
            </div>`
    }
}