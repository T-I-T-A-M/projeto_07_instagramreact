export default function Sidebar () {

const data =[{
        userIMG : "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        userProfile : "catanacomics",
        userName : "Catana"
    },
    {
        userIMG : "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        userProfile : "bad.vibes.memes",
        userName : "Catana"
    },
    {
        userIMG : "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        userProfile : "chibirdart",
        userName : "Catana"
    },
    {
        userIMG : "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        userProfile : "adorable_animals",
        userName : "Catana"
    },
    {
        userIMG : "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        userProfile : "smallcutecats",
        userName : "Catana"
    }]
    
    const renderSideBar = data.map ((props)=> 
    
    <div class="sugestao">
        <div class="usuario">
            <img src={props.userIMG}/>
            <div class="texto">
                <div class="nome">{props.userProfile}</div>
                <div class="razao">Segue você</div>
            </div>
        </div>

        <div class="seguir">Seguir</div>
    </div>
    )

const userdata = [{
    userIMG :"https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    userName :"catanacomics",
    userIG: "Catana"
}]

const renderUser = userdata.map ((props) =>

    <div class="usuario">
        <img src={props.userIMG}/>
        <div class="texto">
            <strong>{props.userName}</strong>
            {props.userIG}
        </div>
    </div>

)




    return (
        <div class="sidebar">
            {renderUser}
            <div class="sugestoes">
                <div class="titulo">
                  Sugestões para você
                  <div>Ver tudo</div>
                </div>
                {renderSideBar}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
              </div>
    
              <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
              </div>
        </div>
    )
}




