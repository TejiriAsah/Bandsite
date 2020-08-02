let showsContent = [
  {
    info: "DATE",
    date: "Mon Dec 17 2018",
    building: "VENUE",
    venue: "Ronald Lane",
    site: "LOCATION",
    city: "San Francisco, LA",
  },
  {
    info: "DATE",
    date: "Tue Jul 18 2019",
    building: "VENUE",
    venue: "Pier 3 East",
    site: "LOCATION",
    city: "San Francisco, LA",
  },
  {
    info: "DATE",
    date: "Fri Jul 22 2019",
    building: "VENUE",
    venue: "View Lounge",
    site: "LOCATION",
    city: "San Francisco, LA",
  },
  {
    info: "DATE",
    date: "Sat Aug 12 2019",
    building: "VENUE",
    venue: "Hyatt Agency",
    site: "LOCATION",
    city: "San Francisco, LA",
  },
  {
    info: "DATE",
    date: "Fri Sep 05 2019",
    building: "VENUE",
    venue: "Moscow Center",
    site: "LOCATION",
    city: "San Francisco, LA",
  },
  {
    info: "DATE",
    date: "Wed Aug 11 2019",
    building: "VENUE",
    venue: "Pres Club",
    site: "LOCATION",
    city: "San Francisco, LA",
  },
];

const api_key = "02f0cdb9-dd36-4f4b-87e0-7c369cea0f93";
const showsURL =
  "https://project-1-api.herokuapp.com/showdates?api_key=02f0cdb9-dd36-4f4b-87e0-7c369cea0f93";

let container = document.querySelector(".shows");

axios
  .get(showsURL)
  .then((response) => {
    console.log("this is your response:", response.data);
    let resPage = document.querySelector(".shows");

    //loop through response.data[i]
    //create categroeies for each, append to html

    //create shows section heading
    let heading = document.createElement("h1");
    heading.innerText = "Shows";
    heading.classList.add("shows__heading");
    container.appendChild(heading);

    let tabletCategories = document.createElement("div");
    tabletCategories.classList.add("shows__tabletcategories");

    let tabletDate = document.createElement("p");
    tabletDate.innerText = "DATE";
    tabletDate.classList.add("shows__tablet");
    tabletCategories.appendChild(tabletDate);

    let tabletVenue = document.createElement("p");
    tabletVenue.innerText = "VENUE";
    tabletVenue.classList.add("shows__tablet");
    tabletCategories.appendChild(tabletVenue);

    let tabletLocation = document.createElement("p");
    tabletLocation.innerText = "LOCATION";
    tabletLocation.classList.add("shows__tablet");
    tabletCategories.appendChild(tabletLocation);

    container.appendChild(tabletCategories);

    for (let i = 0; i < showsContent.length; i++) {
      let box = document.createElement("div");
      box.classList.add("shows__box");

      let area = document.createElement("div");
      area.classList.add("shows__area");

      let info = document.createElement("p");
      info.innerText = showsContent[i].info;
      info.classList.add("shows__info");

      let date = document.createElement("p");
      date.innerText = response.data[i].date;
      date.classList.add("shows__date");

      let building = document.createElement("p");
      building.innerText = showsContent[i].building;
      building.classList.add("shows__building");

      let venue = document.createElement("p");
      venue.innerText = response.data[i].place;
      venue.classList.add("shows__venue");

      let site = document.createElement("p");
      site.innerText = showsContent[i].site;
      site.classList.add("shows__site");

      let city = document.createElement("p");
      city.innerText = response.data[i].location;
      city.classList.add("shows__city");

      area.appendChild(info);
      area.appendChild(date);
      area.appendChild(building);
      area.appendChild(venue);
      area.appendChild(site);
      area.appendChild(city);

      let button = document.createElement("button");
      button.innerText = "BUY TICKETS";
      button.classList.add("shows__buy-button");

      area.appendChild(button);

      box.appendChild(area);

      container.appendChild(box);
    }
  })
  .catch((error) => {
    console.log("thiis is your error:", error);
  });
