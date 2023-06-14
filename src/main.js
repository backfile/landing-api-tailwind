const videoTitle = document.querySelector("#video-title")
const videoImg = document.querySelector("#video-img");
const videoA = document.querySelector("#videoA");
const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCam8T03EOFBsNdR0thrFHdQ&part=snippet%2Cid&order=date&maxResults=1";

const fetchData = () =>{
    const headers = {
      "X-RapidAPI-Key": "567b71fa43mshadd7428efa65ae3p14d840jsn88e59dc89532",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
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
    info1: info.items[0].snippet.thumbnails.high.url,
    info2: info.items[0].snippet.title,
    videoID: info.items[0].id.videoId
  }
  return infoo
}

function displayData(info){
  videoTitle.innerHTML = `<p>${info.info2}</p>`;
  videoImg.innerHTML = `<img src="${info.info1}"></img>`;
  videoA.setAttribute("href", `https://www.youtube.com/watch?v=${info.videoID}`);
}
