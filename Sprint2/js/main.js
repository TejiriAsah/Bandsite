let commentContent = [

{
    name: 'Michael Lyons',
    timeStamp: '12/08/2018',
    opinion: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.',
       
},

{
    name: 'Gary Wong',
    timeStamp: '12/12/2018',
    opinion: ' Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!' ,                                                                                                                                                  
},

{
    name:'Theodore Duncan',
    timeStamp:'11/15/2018',
    opinion: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
},

]



const form = document.querySelector('.comments__form');

let container= document.querySelector('.comments');


let box = document.createElement('div');
    box.classList.add('comments__box');


function createCommment(commentObject){
    // let box = document.createElement('div');
    // box.classList.add('comments__box');

    let parentTester2 = document.createElement('div');
    parentTester2.classList.add('parentTester2');

    let area = document.createElement('div');
    area.classList.add('comments__area');

    let allAvatars = document.createElement('div');
    allAvatars.classList.add('comments__all-avatars')

    let avatar = document.createElement('div');
    avatar.classList.add('comments__avatar');

    let commentsCarrier = document.createElement('div');
    commentsCarrier.classList.add('comments__carrier');

    let name = document.createElement('p');
    name.innerText = commentObject.name;
    name.classList.add('comments__name');


    let timeStamp = document.createElement('p');
    timeStamp.innerText = commentObject.timeStamp;
    timeStamp.classList.add('comments__time-stamp');

    commentsCarrier.appendChild(name);
    commentsCarrier.appendChild(timeStamp);

    let opinion = document.createElement('p');
    opinion.innerText = commentObject.opinion;
    opinion.classList.add('comments__opinion');

    let separator = document.createElement('div');
    separator.classList.add('border-separator');

    allAvatars.appendChild(avatar);
    // allAvatars.appendChild(separator);
   
    // area.appendChild(name);
    // area.appendChild(timeStamp);
    area.appendChild(commentsCarrier);
    area.appendChild(opinion);
    

    parentTester2.appendChild(allAvatars);
    parentTester2.appendChild(area);
    
    box.appendChild(parentTester2);
    box.appendChild(separator);
    
    container.appendChild(box);

    }

for(let i =0; i < commentContent.length; i++){

    createCommment(commentContent[i]);
    
}



// let commentsContainer = document.querySelector('.comments__box');
// console.log(commentsContainer.children);

// // for(let i = 0; i< commentsContainer.children; i++){

// // }

// while (commentsContainer.children.length > 0){
//     commentsContainer.removeChild(commentsContainer.children[0]);
//}


//push a new comment to the page, it should clear old comments and then reload with the newest comment on top
//.unshift should push newest comment to the top of the array
//add eventlistener to the comment
//watch Anna's video on eventlisteners and looping

// const form = document.querySelector('.comments__form');

// console.log(form);

form.addEventListener('submit', function(event){
    event.preventDefault();
   
    let userInput = event.target.fullName.value;
    let userInputComment = event.target.remark.value;
    

    let newComment = {
        name: userInput,
        opinion: userInputComment,
        
    }

    let commentsContainer = document.querySelector('.comments__box');
    console.log(commentsContainer.children);

    while (commentsContainer.children.length > 0){

        commentsContainer.removeChild(commentsContainer.children[0]);
        
    }

    commentContent.unshift(newComment);
    
    for(let i =0; i < commentContent.length; i++){

        createCommment(commentContent[i]);
        
    }

    

   
})  

// let commentsContainer = document.querySelector('.comments__box');
// console.log(commentsContainer.children);

// while (commentsContainer.children.length > 0){

//     commentsContainer.removeChild(commentsContainer.children[0]);
    
// }

// dunno();