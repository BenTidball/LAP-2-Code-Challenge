const clientPost = document.querySelector('#publishButton')
// const modalHeader = document.querySelector('#title')
// const modalContent = document.querySelector ('#namePara')

async function publishPost(e) {
  const titlePost = document.querySelector('#idTitle')
  const namePost = document.querySelector('#idpseudonym')
  const msgPost = document.querySelector('#idbody')

  const postData = {post_title:titlePost, post_body: msgPost, post_sign: namePost};
    
  
  e.preventDefault();
    
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: postData
      };
  
      const response = await fetch("http://localhost:3000/posts/create", options);
      const res = await response.json();
      if (res === postData) {
        window.location.replace('http://localhost:3000/posts/')
      } else {
        throw Error(err);
      }
    } catch (err) {
      console.warn(err);
    }
  }

