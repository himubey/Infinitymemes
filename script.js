let url_data;

const infmemes=()=>{
    fetch("https://meme-api.com/gimme/memes")
    .then((data)=>data.json())
    .then((data_val)=>{
        url_data=data_val.url;
        document.getElementById("img").src = url_data;
    });
    
};


infmemes();

const shareData = {
         title:"Infinity Memes",
         text:"infinity Memes",
         url:url_data,
}

//const btn = document.querySelector("button")
const sharePara = document.querySelector("share_res")

// share must be triggered by "user activation"

btn.addEventListener("click", async () => {
    try{
        await navigator.share(shareData);
        sharePara.textContent = "MEME Share successfully";
    } catch (err) {
        resultPara.textContent = `Error: ${err}`;
    }
});

// function share() {
//     if(navigator.share !==undefined){
//         navigator
//         .share({
//             title:"Infinity Memes",
//             text:"infinity Memes",
//             url:"url_data",
//         })
        
//         .then(()=>console.log("Successful Share"))
//         .catch((error)=>console.log("Error",error))
//     } else {
//         console.log("Share API not available in this browser");
//     }
// }

function next() {
    infmemes();
}