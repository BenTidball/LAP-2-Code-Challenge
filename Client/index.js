const clientPost = document.querySelector('#publishButton')
// const modalHeader = document.querySelector('#title')
// const modalContent = document.querySelector ('#namePara')

async function publishPost(e) {
  e.preventDefault();
  const titlePost =  document.querySelector('#idTitle').value
  const namePost =  document.querySelector('#idpseudonym').value
  const msgPost =  document.querySelector('#idbody').value

  const postData = {post_title:titlePost, post_body: msgPost, post_sign: namePost};

  
  
    
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData)
      };
      
      const response = await fetch("http://localhost:3000/posts/create", options);
      // console.log(response)
      const res = await response.json();
      console.log(res[0])
      console.log(postData)

      if (res[0].post_title === postData.post_title) {
        window.location.replace('http://127.0.0.1:5501/Client/index.html')
      } else {
        console.log(err)
      }
    } catch (err) {
      console.warn(err);
    }

    

    // fetch("http://localhost:3000/posts/create", {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'}, 
    //   body: JSON.stringify(postData)
    // }).then(res => {
    //   console.log("Request complete! response:", res);
    // });
  }


clientPost.addEventListener("click",publishPost);