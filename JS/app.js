
const loadPost = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    console.log(posts);
    displayPost(posts);
}

const displayPost = posts =>{
    // console.log(posts);
    const contentArea = document.getElementById('contents');

    posts.forEach(post =>{
        console.log(post);
        const phoneCard = document.createElement('div');
        phoneCard.classList= `mb-2 bg-[#0307121A] w-full p-4 rounded-xl`;
        phoneCard.innerHTML=`
        <div class="flex gap-2">
        <div class="w-[10%] "><img src="${post.image}" alt=""></div>
          <div>
            <div class="flex gap-2">
              <p>#<span>${post.category}</span></p>
              <p>Author :<span>${post.author.name}</span></p>
            </div>
            
            <h2 class="text-3xl font-extrabold mt-3">${post.title}</h2>
            <p class="mt-4">${post.description}</p>
            <hr class=" border border-dashed">
              <div class="mt-5 flex justify-between ">
                <div class="flex gap-5">
                  <p class="flex gap-3"><img src="images/comment.png" alt=""> ${post.comment_count}</p>
                <p class="flex gap-3"><img src="images/view.png" alt="">${post.view_count}</p>
                <p class="flex gap-3"><img src="images/clock.png" alt=""> ${post.posted_time} min</p>
                </div>
                <button onclick="addToCard()" class="post-read"><img src="images/email 1.png" alt=""></button>
          
              </div>
          </div> </div>
         `
         contentArea.appendChild(phoneCard);

    })
}
const loadCard = async ()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data = await res.json();
  const cards = data;
  console.log(cards);
  displayCard(cards);
}



const displayCard= cards =>{
 console.log(cards);
 cards?.forEach(card =>{
  console.log(card);


 })
}




let count =0;

const addToCard=()=>{
  count++;
  setInnerText('post-count', count);


}


loadPost();
loadCard();











function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
}