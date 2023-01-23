document.body.innerHTML=`
<div id="nav-container">
<div id="logo-container">
<span>D</span>ictionary</div></div>
 <div id="box">
 <div id="head"><span>E</span>nglish <span>D</span>ictionary</div>
 <div id="sub">
 <input  id="search" placeholder="search a word">
 <button id="click">Search</button>
 </div>
 <div id="resultss">
</div>
</div>`

var result=document.getElementById('click')
result.addEventListener('click',async()=>{        
    try{
 let response=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"
+search.value)            
.then(response=>response.json()) 
   
  .then(data=>showResult(data))
   } catch(err){                     
 resultss.innerText="Word Not Matched"}

})
async function showResult(data){  
    try{ 
        let ol=document.createElement("ol")
       
         let div=document.createElement("div")
           let h3=document.createElement("h3") 
           h3.innerHTML=`<h4 class="show"><p class="clr">Word:<p>${data[0].word}
           <a href=${data[0].phonetics[0].audio} class="play">Play</button></a> </h4>`
         let p=document.createElement("p")
          p.innerHTML=`<h4 class="shows"><p class="clr">Meaning:<p>${data[0].meanings[1].definitions[0].definition}<h4>`;
         div.append(h3,p)
 ol.append(div);
    
     resultss.append(ol)}
    catch(Error){
    
   p.innerHTML="ERROR Data Not Found Please Refresh The Page";
    }
 } 