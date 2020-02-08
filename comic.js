var url = "";
var ran_arr = [];
var obj = [];
var promise_arr = [];
if (localStorage.length !== 0) {
    obj = JSON.parse(localStorage.getItem("comic"));
    ran_arr = JSON.parse(localStorage.getItem("random"));
}
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
set = () => {
    for (let i = 0; i < 4; i++) {
        let ran = uni(ran_arr);
        url = `https://xkcd.now.sh/?comic=${ran}`;
        showLoader();
        promise_arr.push(fetch(url));
    }
    var handle = Promise.all(promise_arr);
    handle.then(res => Promise.all(res.map(data => data.json())).then(json => {
            json.map(setImage)
            hideLoader();
        })
        .catch(err => console.log(err)))
    promise_arr = [];
}
var fragment = document.createDocumentFragment();

setImage = (comic) => {
    let currDate = new Date();
    obj.push({
        date: (currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear()),
        time: (currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds()),
        title: comic.title,
        url: comic.img
    })
    localStorage.setItem("comic", JSON.stringify(obj));
    localStorage.setItem("random", JSON.stringify(ran_arr));
    image = document.createElement('img');
    image.setAttribute("class", "comic-image");
    image.setAttribute("src", comic.img);
    fragment.appendChild(image.cloneNode(true));
    document.getElementById('comics').appendChild(fragment);
}
scroll = () => {
    let scrlHeight = document.scrollingElement.scrollHeight;
    let clientH = document.scrollingElement.clientHeight;
    let scrlTop = document.scrollingElement.scrollTop;
    if (scrlHeight - clientH === (scrlTop)) {
        set();
    }
}

uni = (ran_arr) => {
    let r;

    while (true) {
        r = Math.floor((Math.random() * 999) + 1);
        if (ran_arr.indexOf(r) === -1) {
            ran_arr.push(r);
            break;
        }
        if (ran_arr.length >= 999) {
            console.log("no uniq comics left");
            break;
        }
    }
    return r;
}
showLoader = () => document.getElementById("loader").style.display = "flex";
hideLoader = () => document.getElementById("loader").style.display = "none";