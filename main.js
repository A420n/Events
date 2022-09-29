let rta = document.getElementById("rta")

let glu = document.getElementById("mama")
glu.addEventListener("click", respuestaClick)
function respuestaClick(){
    rta.innerHTML = `<audio src="diez.mp3" controls></audio>`
}

let kase = document.getElementById("kase")
kase.onclick = () =>{rta.innerHTML = "MASTER?"}

let doss = document.getElementById("doss")
doss.addEventListener("click", rtaClick)
function rtaClick(){
    rta.innerHTML = `<a href="https://www.youtube.com/playlist?list=PLNA5QRIWGTRHiSss7mv-Fihn8Pp_bLqCI" target="_blank">Stop Sounding So F*cking Sad</a>`
}

let cuat = document.getElementById("cuat")
cuat.addEventListener("click", cuatro)
function cuatro(){
    rta.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2UhoLADcH1qILMrNuCw3cS?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}


const mas = document.getElementById("mas")
const men = document.getElementById("men")
const res = document.getElementById("resultao")

let cont = 0

mas.addEventListener("click",()=>{
    cont++
    actu()
})

men.addEventListener("click",()=>{
    if(cont <= 0){
        cont = 0
    }
    else{
        cont--
        actu()
    }
})

const actu = () => {
    res.innerHTML = cont
}


const nombr = document.getElementById("nombr")
const distrito = document.getElementById("distri")
const namee = document.getElementById("namee")
const fafa = document.getElementById("fai")

nombr.addEventListener("input", () => {
    namee.innerHTML = nombr.value
})

distrito.addEventListener("change", (e) => {
    fafa.innerHTML = e.target.value
})