const postRead = document.getElementsByClassName('post-read');
let count = 0;
for (const btn of postRead) {
    btn.addEventListener('click', function(e){
        count++;

        setInnerText('post-count', count)
    })

    
}

function setInnerText(id,value) {
    document.getElementById(id).innerText = value;

}







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
        <div class="w-[10%]"><img src="images/flag.png" alt=""></div>
          <div>
            <div class="flex gap-2">
              <p>#<span>coding </span></p>
              <p>Author :<span>Yeasin</span></p>
            </div>
            
            <h2 class="text-3xl font-extrabold mt-3">JavaScript Programing : Advanced <br> Techniques</h2>
            <p class="mt-4">It’s one thing to subject yourself to ha Halloween costume mishap because, <br> hey that’s your prerogative</p>
            <hr class=" border border-dashed">
              <div class="mt-5 flex justify-between ">
                <div class="flex gap-5">
                  <p class="flex gap-3"><img src="images/comment.png" alt=""> 560</p>
                <p class="flex gap-3"><img src="images/view.png" alt=""> 1,568</p>
                <p class="flex gap-3"><img src="images/clock.png" alt=""> 5 min</p>
                </div>
                <button class="post-read"><img src="images/email 1.png" alt=""></button>
          
              </div>
          </div>
         `
         contentArea.appendChild(phoneCard);

    })
}
loadPost()