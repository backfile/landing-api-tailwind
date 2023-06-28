const videoTitle = document.querySelector("#video-title")
const videoImg = document.querySelector("#video-img");
const videoA = document.querySelector("#videoA");
const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCam8T03EOFBsNdR0thrFHdQ&filter=videos_latest&hl=en&gl=US";

const fetchData = () =>{
    const headers = {
      "X-RapidAPI-Key": "567b71fa43mshadd7428efa65ae3p14d840jsn88e59dc89532",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    };
    return fetch(API, {headers});
}


fetchData()
.then(data => data.json())
.then(info => modificarDom(info))
.then(newInfo => displayData(newInfo))
.catch(error => console.log(error))

function modificarDom(info){
  const infoo = {
    title: info.contents[0].video.title,
    image: info.contents[0].video.thumbnails[3].url,
    videoID: info.contents[0].video.videoId
  };
  return infoo
}

function displayData(info){
  videoTitle.innerHTML = `<p>${info.title}</p>`;
  videoImg.innerHTML = `<img src="${info.image}"></img>`;
  videoA.setAttribute("href", `https://www.youtube.com/watch?v=${info.videoID}`);
}
