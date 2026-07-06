const feedJson = require ('./feed.json');

 function curtir(feed,id) {
    const post= feed[0].id === id ? feed [0] :
    feed[1].id === id ? feed [1] : feed[2]; 
 
    if(!post) {
       console.log("Post não encontrado.");
       return;
    }

    if (!post.publicado) {
       console.log("Não é possível curtir este post");
       return;
    }

    post.metricas.curtidas++;
    console.log("R");
    console.log(`Post de @${post.autor} agora tem ${post.metricas.curtidas} curtidas.`);
 }

function descurtir (feed, id) {
    const post = feed[0].id === id ? feed [0] : feed[1].id === id ? feed[1] : feed;

    if(!post) {
       console.log("Post não encontrado.");
       return;
    }

    if (post.metricas.curtidas === 0) {
       console.log("Não é possível descurtir um post com zero curtidas.");
       return;
    }

    post.metricas.curtidas--;
}
