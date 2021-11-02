const doc = document;
const input1 = doc.getElementById("submit");
const dates = doc.getElementById("inf1");

doc.addEventListener("submit",(s)=>{
    s.preventDefault()
    if ((s.target[0].value.length) <= 1){
        alert("Invalid input... A username is expected")
    }
    else{
        let asigText = `https://api.github.com/users/${s.target[0].value}`
        s.target[0].value = ""

        fetch(asigText)
            .then(request =>request.json()) 
            .then(data=>{
                if(data.message === "Not Found"){
                    alert("(Invalid) .. this name is not associated with any repository")
                    // location.reload()
                }else{
                    dates.innerHTML=
                                    `<div class="info_user"><img src="${data.avatar_url}" alt="" class="img_user">
                                    <section class= "dates_Styles">
                                        <li class="li1">NAME:----- ${data.login}</li>
                                        <li class="li2">REPOSITORY  NAME:----- ${data.name}</li>
                                        <li class="li3">FOLLOWERS:-------  ${data.followers}</li>
                                        <p class="li4">
                                            <a href=${data.html_url}>${data.html_url}</a>
                                        </p>
                                    </section></div>
                                    `               
                    }  
                })                     
        }    
}) 

    
    





























