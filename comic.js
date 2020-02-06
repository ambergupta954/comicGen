var arr = [];
var url = "https://xkcd.now.sh/?comic=303";
var ran_arr = [];
var dates = [];
var times = [];
if (localStorage.length !== 0) {
    ran_arr = JSON.parse(localStorage.getItem("random"));
    arr = JSON.parse(localStorage.getItem("title-url"));
    dates = JSON.parse(localStorage.getItem("date"));
    times = JSON.parse(localStorage.getItem("time"));
}
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function set() {

    let currDate = new Date();
    dates.push(currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear());
    times.push(currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds());
    localStorage.setItem("date", JSON.stringify(dates));
    localStorage.setItem("time", JSON.stringify(times));
    let ran = uni(ran_arr);
    localStorage.setItem("random", JSON.stringify(ran_arr));


    url = `https://xkcd.now.sh/?comic=${ran}`;
    fetch(url)
        .then(response => response.json())
        .then(json => setImage(json))
        .catch(err => console.log(err));
}


function setImage(comic) {

    arr.push({ key: comic.title, value: comic.img });
    localStorage.setItem("title-url", JSON.stringify(arr));
    document.getElementById('comic').src = comic.img;
    document.getElementById('title').innerHTML = comic.title;

}

function uni(ran_arr) {
    let r;

    while (true) {


        r = Math.floor((Math.random() * 999) + 1);
        if (ran_arr.indexOf(r) === -1) {
            ran_arr.push(r);
            break;

        }
        if (ran_arr.length >= 10) {
            console.log("no uniq comics left");
            break;
        }
    }
    return r;
}