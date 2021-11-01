const doc = document;
const input1 = doc.getElementById("submit");
const dates = doc.getElementById("inf1");
const urlAPI = `https://api.github.com/users/`



doc.addEventListener("submit",(s)=>{
    s.preventDefault()
    if ((s.target[0].value.length) <= 1){
        alert("Invalid input... A username is expected")
    }
    else{   
        let asigText = `https://api.github.com/users/${s.target[0].value}`
        s.target[0].value = " "
        
        fetch(asigText)
            .then(response =>response.json())
            .then(data=>{
                
                dates.innerHTML = `<img src="${data.avatar_url}" alt="">
                                    <p>Name: ${data.login}</p>
                                    <li>Repository name: ${data.name}</li>
                                    <li>Followers: ${data.followers}</li>
                                    // <p href=${data.url}>
                                    
                                    `
        
            })
            
        }

})      






































    
    
        
    
    
