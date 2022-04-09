const rellenar = (()=>{
    const iFrame = (url,id) => {
        id.setAttribute('src',url)
    }
    
    return{
        mostrar: (url,id)=> iFrame(url,id)
    }
})()

class Multimedia {
    constructor(url) {
        let _url = url

        this.getUrl = () => {
            return _url
        }
    }
    get url() {
        return this.getUrl()
    }

    setInicio() {
        console.log('Este método es para realizar un cambio en la URL del video')
    }

}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = id
        this.getId = () => {
            return _id
        }

    }
    /*
    get id() {
        return this.getId()
    }
   */
    playMultimedia() {
        rellenar.mostrar(this.url,this.getId())
        
    }
    setInicio(tiempo) {
        this.getId().setAttribute('src',`${this.url}&amp;start=${tiempo}`)
        

    }
}


let musicPlayer = new Reproductor('https://www.youtube.com/embed/l_6AC2u0E4E?autoplay=1', musica)
musicPlayer.playMultimedia()
musicPlayer.setInicio('5')

let moviePlayer = new Reproductor('https://www.youtube.com/embed/Vqgqze8tF-8?autoplay=0', peliculas)
moviePlayer.playMultimedia()
moviePlayer.setInicio('60')

let seriesPlayer = new Reproductor('https://www.youtube.com/embed/bNBzOiavw_4?autoplay=0', series)
seriesPlayer.playMultimedia()
seriesPlayer.setInicio('0')
