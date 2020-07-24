let showsContent= [

{
    info: 'DATE',
    date: 'Mon Dec 17 2018',
    building: 'VENUE',
    venue: 'Ronald Lane',
    site: 'LOCATION',
    city: 'San Francisco, LA'
    

},
{
    info: 'DATE',
    date: 'Tue Jul 18 2019',
    building: 'VENUE',
    venue: 'Pier 3 East',
    site: 'LOCATION',
    city: 'San Francisco, LA'

},
{
    info: 'DATE',
    date: 'Fri Jul 22 2019',
    building: 'VENUE',
    venue: 'View Lounge',
    site: 'LOCATION',
    city: 'San Francisco, LA'

},
{
    info: 'DATE',
    date: 'Sat Aug 12 2019',
    building: 'VENUE',
    venue: 'Hyatt Agency',
    site: 'LOCATION',
    city: 'San Francisco, LA'

},
{
    info: 'DATE',
    date: 'Fri Sep 05 2019',
    building: 'VENUE',
    venue: 'Moscow Center',
    site: 'LOCATION',
    city: 'San Francisco, LA'

},
{
    info: 'DATE',
    date: 'Wed Aug 11 2019',
    building: 'VENUE',
    venue: 'Pres Club',
    site: 'LOCATION',
    city: 'San Francisco, LA'
}

]

// console.log(showsContent);

let container = document.querySelector('.shows');

for(let i=0; i < showsContent.length; i++){
    let box = document.createElement('div');
    box.classList.add('shows__box');

    let area= document.createElement('div');
    area.classList.add('shows__area');

    let info = document.createElement('p');
    info.innerText = showsContent[i].info;
    info.classList.add('shows__info');

    let date = document.createElement('p');
    date.innerText = showsContent[i].date;
    date.classList.add('shows__date');

    let building = document.createElement('p');
    building.innerText = showsContent[i].building;
    building.classList.add('shows__building');

    let venue = document.createElement('p');
    venue.innerText = showsContent[i].venue;
    venue.classList.add('shows__venue');

    let site = document.createElement('p');
    site.innerText = showsContent[i].site;
    site.classList.add('shows__site');

    let city = document.createElement('p');
    city.innerText = showsContent[i].city;
    city.classList.add('shows__city');

    // box.appendChild(info);
    // box.appendChild(date);
    // box.appendChild(building);
    // box.appendChild(venue);
    // box.appendChild(site);
    // box.appendChild(city);

    area.appendChild(info);
    area.appendChild(date);
    area.appendChild(building);
    area.appendChild(venue);
    area.appendChild(site);
    area.appendChild(city);





    let button = document.createElement('button');
    button.innerText = 'BUY TICKETS'
    button.classList.add('shows__buy-button');
    //box.appendChild(button)
    area.appendChild(button);

    box.appendChild(area);
    container.appendChild(box);
}

// const buttonContainer = document.getElementsByClassName("shows__buy-button")

// for(let i = 0; i < showsContent.length, i++){
//     const button = document.createElement("button");
//     button.innertext = i;

//     button.addEventListener('click', function(){
//         console.log(i)
//     })

//     buttonContainer.appenchild(box);
// }






// let button = document.getElementsByClassName('shows__buy-button');
// for(let i=0; i < showsContent.length; i++){
//     button[i].onclick function (){
//         console.log(this.innerHTML);
//     }
// }