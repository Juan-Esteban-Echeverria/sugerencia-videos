
// FUNCION PRIVADA Y PUBLICA PARA LA IMPRESION DE VIDEOS EN EL DOM
let funcionOculta =(()=>{
    let funcionPrivada = (url,id) => {
        id.setAttribute("src", url)
    }
    return{
        funcionPublica: (url,id) => funcionPrivada(url,id)
    }
})()

//------------------------------------------------------------------------------------

// CLASE PADRE MULTIMEDIA
class Multimedia{
    constructor(url){
        this._url = url
    }
    // GETTER URL
    get getUrl(){
        return this._url
    }
    // METODO SET INICIO POR DEFECTO
    setInicio(){
        return "Este método es para realizar un cambio en la URL del video"
    }
}

//------------------------------------------------------------------------------------

// CLASE HIJA REPRODUCTOR
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id
    }
    // METODO PLAY MULTIMEDIA PARA MOSTRAR LOS VIDEOS EN EL DOM
    playMultimedia(){
        funcionOculta.funcionPublica(this._url, this._id)
    }
    // METODO MODIFICADO SET INICIO PARA AGREGAR TIEMPO DE PARTIDA A LOS VIDEOS
    setInicio(tiempo){
        this._id.setAttribute("src", `${this._url}?start=${tiempo}
        `)
    }
}

//------------------------------------------------------------------------------------

// ACCEDER AL ID DEL DOM Y A LA URL DEL VIDEO "MUSICA"
const idMusica = document.getElementById("musica")
const urlMusica = "https://youtube.com/embed/K4DyBUG242c"

// INSTANCIA DE CLASE HIJA "MUSICA"
const musica = new Reproductor(urlMusica, idMusica)

// IMPRESION DEL VIDEO EN EL DOM "MUSICA"
musica.playMultimedia()

//------------------------------------------------------------------------------------

// ACCEDER AL ID DEL DOM Y A LA URL DEL VIDEO "PELICULA"
const idPelicula = document.getElementById("peliculas")
const urlPelicula = "https://youtube.com/embed/8-UvfDc0hFo"

// INSTANCIA DE CLASE HIJA "MUSICA" "PELICULA"
const pelicula = new Reproductor(urlPelicula, idPelicula)

// IMPRESION DEL VIDEO EN EL DOM "PELICULA"
pelicula.playMultimedia()

//------------------------------------------------------------------------------------

// ACCEDER AL ID DEL DOM Y A LA URL DEL VIDEO "SERIE"
const idSerie = document.getElementById("series")
const urlSerie = "https://youtube.com/embed/ETY44yszyNc"

// INSTANCIA DE CLASE HIJA "MUSICA" "SERIE"
const serie = new Reproductor(urlSerie, idSerie)

// IMPRESION DEL VIDEO EN EL DOM "PELICULA" "SERIE"
serie.playMultimedia()

//------------------------------------------------------------------------------------

// METODO SET INICIO PARA AGREGAR SEGUNDOS AL VIDEO "PELICULA"
pelicula.setInicio(32)

