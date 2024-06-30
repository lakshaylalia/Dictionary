async function meaning(word){
    try{
    let mean= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return mean.data[0].meanings[0].definitions[0].definition;
    }
    catch{
        return "Word not found"
    }

}

let search=document.getElementById("search");
search.addEventListener("click",async () => {
    let word=document.querySelector("input").value;
    let output=document.querySelector("p");
    output.innerHTML=await meaning(word);
})

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    document.querySelector("input").value="";
    document.querySelector("p").innerHTML="";
})