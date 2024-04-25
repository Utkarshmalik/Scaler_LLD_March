const addBtn= document.querySelector(".add-btn");
const deleteBtn= document.querySelector(".remove-btn");
const model = document.querySelector(".model_cont");
const priorityColors = document.querySelectorAll(".priority_color");
const textArea = document.querySelector(".textarea_cont");
const pendingContainer = document.querySelector(".pending_cont");
const priorityMenuColors = document.querySelector(".toolbox-priority").children;
const colors = ["pink","blue","purple","green"];

for(let i=0;i<priorityMenuColors.length;i++){

    let priorityElement = priorityMenuColors[i];
  

    priorityElement.addEventListener("click",(e)=>{
        console.log("filter the tickets of only this color ",e.target);

        const selectedColor = e.target.classList[1];

        const allTickets = document.querySelectorAll(".ticket_cont");

        for(let i=0;i<allTickets.length;i++){

            const ticket = allTickets[i];
            const ticktColorElem = ticket.querySelector('.ticket_color');
            const ticketColor = ticktColorElem.classList[1];

             
            if(ticketColor!==selectedColor){

                ticket.style.display="none";
            }else{

                 ticket.style.display="block"
            }

        }
    })


  
      priorityElement.addEventListener("dblclick",()=>{

          const allTickets = document.querySelectorAll(".ticket_cont");

        for(let i=0;i<allTickets.length;i++){
            const ticket = allTickets[i];
            ticket.style.display="block"
        }
    })
    

}

addBtn.addEventListener("click",()=>{

    //display the model 

    model.style.display="flex";

})


model.addEventListener("keypress",(e)=>{

    if(e.key!="Enter"){
        return;
    }

    //which is the selected color at the moment 
    const cColor = findActiveColor();

    //what is the text entered by the user
    const content = textArea.value;

    createTicket(cColor,content);

    //reset the text content 
    textArea.value="";

    //close the model
    model.style.display="none";

})

function createTicket(priority,content){


    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket_cont");

     const uid = new ShortUniqueId({ length: 10 });
    const ticketId= uid.rnd();

    ticketContainer.innerHTML = `
       <div class="ticket_color ${priority}"></div>
                <div class="ticket_id"> #${ticketId} </div>
                <div class="ticket_area"> ${content} </div>
                <div class="lock_unlock">
                    <i class="fa fa-lock"></i>
    </div>
    `

    const ticketColorElem = ticketContainer.querySelector(".ticket_color");
    ticketColorElem.addEventListener("click",onTicketColorClick);

    ticketContainer.addEventListener("click",onClickTicketContainer);


    //append in pending_cont
    pendingContainer.appendChild(ticketContainer);

}

function onClickTicketContainer(e){

    const isDeleteActivated = deleteBtn.children[0].classList.contains("red");
    
    if(isDeleteActivated){
    const ticketCon= e.currentTarget;
    ticketCon.style.display= "none";
    }
}

function onTicketColorClick(e){

    const ticketColorElem = e.target;

    const cColor = ticketColorElem.classList[1];


    const cColorIndex = colors.indexOf(cColor);

    const requiredColorIndex  = (cColorIndex + 1) % colors.length;

    const requiredColor = colors[requiredColorIndex];
    
    ticketColorElem.classList.remove(cColor);
    ticketColorElem.classList.add(requiredColor);

}


deleteBtn.addEventListener("click",(e)=>{

    e.target.classList.toggle("red");

})

function findActiveColor(){

    for(let i=0;i<priorityColors.length;i++){

    const priorityElement= priorityColors[i];

    if(priorityElement.classList.contains("active")){
        return priorityElement.classList[1];
    }
}

}





for(let i=0;i<priorityColors.length;i++){

    const priorityElement= priorityColors[i];

    priorityElement.addEventListener("click",(e)=>{

        removeActiveFromAll();

        e.target.classList.add("active");
    })
}

function removeActiveFromAll(){

    for(let i=0;i<priorityColors.length;i++){

    const priorityElement= priorityColors[i];
    priorityElement.classList.remove("active");

}

}


