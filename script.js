
const infmemes=()=>{
    fetch("https://meme-api.com/gimme/memes")
    .then((data)=>data.json())
    .then((data_val)=>{
        const url_data=data_val.url;
        document.getElementById("img").src=url_data;
    });
};


infmemes();

function share() {
    if(navigator.share !==undefined){
        navigator
        .share({
            title:"Infinity Memes",
            text:"infinity Memes",
            url:url_data,
        })

        .then(()=>console.log("Successful Share"))
        .catch((error)=>console.log("error",error))
    }
}

const next = ()=>{
    infmemes();
}