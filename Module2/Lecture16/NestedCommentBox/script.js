

const submitBtn = document.getElementById("submitComment");
const commentInput = document.getElementById("commentInput");
const commentsContainer = document.getElementById("commentsContainer");


submitBtn.addEventListener("click",()=>{

    const commentText = commentInput.value.trim();
    commentInput.value="";
    addComment(commentText);

})

function addComment(text){

const commentDiv = document.createElement("div");
commentDiv.className="comment";

commentDiv.innerHTML = `
        <p> ${text}  </p>

            <button class="replyBtn"> Reply </button>

            <div class="repliesContainer">

            </div>

            <textarea class="replyInput" placeholder="Write a reply.."></textarea>
`


commentsContainer.appendChild(commentDiv);

}





commentsContainer.addEventListener("click",(e)=>{

    if(e.target.className.includes("replyBtn")){

        const parentComment  = e.target.parentElement;
        const replyInput = parentComment.querySelector(".replyInput");
        const replyText = replyInput.value.trim();

        if(replyText){

            addReply(parentComment,replyText);

            replyInput.value="";
        }

    }
})

function addReply(parentComment,text){

    const repliesContainer = parentComment.querySelector(".repliesContainer");

    const replyElement  = document.createElement("div");
    replyElement.className="reply";
    replyElement.innerHTML  = `<p> ${text} </p>`

    repliesContainer.appendChild(replyElement);
}