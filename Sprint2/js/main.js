














let commentContent = [

{
    name: 'Michael Lyons',
    timeStammp: '12/08/2018',
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

let container= document.querySelector('.comments');

for(let i =0; i < commentContent.length; i++){

    let box = document.createElement('div');
    box.classList.add('comments__box');

    let bigTester = document.createElement('div');
    bigTexter.classList.add(bigTester);


    let area = document.createElement('div');
    area.classList.add('comments__area');

    let avatarHolder = document.createElement('div');
    avatarHolder.classList.add('avatar-holder')

    let avatar = document.createElement('div');
    avatar.classList.add('comments__avatar');


    let name = document.createElement('p');
    name.innerText = commentContent[i].name;
    name.classList.add('comments__name');


    let timeStamp = document.createElement('p');
    timeStamp.innerText = commentContent[i].timeStammp;
    timeStamp.classList.add('comments__time-stamp');

    let opinion = document.createElement('p');
    opinion.innerText = commentContent[i].opinion;
    opinion.classList.add('comments__opinion');

    let separator = document.createElement('div');
    separator.classList.add('border-separator');

    // bigTester.appendChild(area);
    // bigTester.appendChild(avatar);

    // avatarHolder.appendChild(avatar)
    // area.appendChild(avatarHolder)
    area.appendChild(name);
    area.appendChild(timeStamp);
    area.appendChild(opinion);
    area.appendChild(separator);


    box.appendChild(area);

    container.appendChild(box);

}
