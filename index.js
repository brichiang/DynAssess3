var toPost = document.getElementById("to"),
    msgPost = document.getElementById("message"),
    fromPost = document.getElementById("from"),
    postcard = document.getElementById("postcard"),
    toInp = document.getElementById("toInp"),
    msgInp = document.getElementById("msgInp"),
    fromInp = document.getElementById("fromInp"),
    imgInp = document.getElementById("imgInp"),
    preview = document.getElementById("preview"),
    num = 1,
    storeArr = [];

function createPostcard(to, bgImg){
    var newDiv = document.createElement("div");
    var toDiv = document.createElement("div");
    
    newDiv.className = "newPost";
    toDiv.id = "newTo";
    
    preview.appendChild(newDiv);
    newDiv.appendChild(toDiv);
    
    
    if(bgImg == "auto"){
        newDiv.style.backgroundImage = "url(imgs/auto"+num+".jpg)";
    } else if (bgImg == ""){
        newDiv.style.backgroundImage = "url(imgs/default.png)";
    } else {
        newDiv.style.backgroundImage = "url("+bgImg+")";
    }
    
    num ++
    if(num >= 4){
        num = 1;
    }
    
    toDiv.innerHTML = to;
}

toInp.addEventListener("keyup", function(ev){
    
    if(ev.keyCode == 13){
        toPost.innerHTML = toInp.value;
    }
});

msgInp.addEventListener("keyup", function(ev){
    
    if(ev.keyCode == 13){
        msgPost.innerHTML = msgInp.value;
    }
});

fromInp.addEventListener("keyup", function(ev){
    
    if(ev.keyCode == 13){
        fromPost.innerHTML = fromInp.value;
    }
});

imgInp.addEventListener("keyup", function(ev){
    
    if(ev.keyCode == 13){
        if(imgInp.value == "auto"){
            postcard.style.backgroundImage = "url(imgs/auto"+num+".jpg)";
        } else if (imgInp.value == ""){
            postcard.style.backgroundImage = "url(imgs/default.png)";
        } else {
           postcard.style.backgroundImage = "url("+imgInp.value+")"; 
        }
        
        num ++
        if(num >= 4){
        num = 1;
    }
    }
});

document.getElementById("add").addEventListener("click", function(){
   
    var storePost = {
        bgimg: imgInp.value,
        to: toInp.value,
        message: msgInp.value,
        from: fromInp.value
    }
    
    storeArr.push(storePost);
    console.log(storeArr);
    
    createPostcard(toInp.value, imgInp.value);
});

document.getElementById("save").addEventListener("click", function(){
   localStorage.setItem("postcard", JSON.stringify("storeArr")); 
});

document.getElementById("load").addEventListener("click", function(){
    
    preview.innerHTML = "";
    
    var storeArr = JSON.parse(localStorage.getItem("postcard"));
    

    for(var i = 0; i<storeArr.length; i++){
        createPostcard(storeArr[i].to, storeArr[i].bgimg);
    }
    
});