import React from "react";

export default function Feed (){


const data = [{
    profileIMG: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    postIMG:"https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
    likeIMG:"https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    user:"Narutin"
},
{
    profileIMG: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    postIMG:"https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
    likeIMG:"https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
    user:"Narutin" 
}

]

const [likeButton, setLikeButton] = React.useState("");

function likenolike (props) {
    if (props === ""){
        setLikeButton(likeButton="danger")
    } else if (props === "danger"){
        setLikeButton(likeButton="")
    }
}

const renderPosts  = data.map ((props) => 
    <div class="post">
        <div class="post-title">
            <div class="post-profile">
                <img class="profile" src={props.profileIMG} />
                <h4>{props.user}</h4>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div><div class="post-media">
                <img src={props.postIMG} alt="naruto" />
            </div><div class="post-actions">
                <div class="left-actions">
                    <ion-icon onClick ={() => likenolike({likeButton})} color ={likeButton} name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="save-actions">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div><div class="post-liked">
                <img class="profile" src={props.likeIMG} alt="" />
                <span>Curtido por <strong>driven</strong> e <strong>outras 100 pessoas</strong></span>
            </div>
    </div>
    )




return (
            <div class="feed">
                  {renderPosts}
            <div class="actions-mobile">
              <ion-icon name="home"></ion-icon>
              <ion-icon name="search-outline"></ion-icon>
              <ion-icon name="add-circle-outline"></ion-icon>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
            </div>
            </div>

    )

}















// const profileImg =["https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
// "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"]

// const postImg =["https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
// "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg"]

// const likeIMG = ["https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg","https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"]

// const h4 = ["Narutin", "Narutin"]


// const renderProfileImages  = profileImg.map ((props) => 
// <div class="post-title">
//     <div class="post-profile">
//         <img class="profile" src={props}/>
//         <h4>Narutin</h4>
//     </div>
//     <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
// </div> )


// const renderPostMedia = postImg.map ((props) => 
// <div class="post-media">
//     <img src={props} alt="naruto" />
// </div>)


// const renderPostActions = <div class="post-actions">
// <div class="left-actions">
//     <ion-icon name="heart-outline"></ion-icon>
//     <ion-icon name="chatbubble-outline"></ion-icon>
//     <ion-icon name="paper-plane-outline"></ion-icon>
// </div>
// <div class="save-actions">
//     <ion-icon name="paper-plane-outline"></ion-icon>
// </div>
// </div>

// const renderPostLiked = likeIMG.map((props) => 
//     <div class="post-liked">
//         <img class="profile" src={props} alt="" />
//         <span>Curtido por <strong>driven</strong> e <strong>outras 100 pessoas</strong></span>
//     </div>)