var url = "https://xkcd.now.sh/?comic=303";
var ran_arr = [];
var obj = []
if (localStorage.length !== 0) {

    obj = JSON.parse(localStorage.getItem("comic"));
}
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];



function set() {

    let ran = uni(ran_arr);
    url = `https://xkcd.now.sh/?comic=${ran}`;

    fetch(url)
        .then(response => response.json())
        .then(json => setImage(json))
        .catch(err => console.log(err));
}




function setImage(comic) {


    let currDate = new Date();
    obj.push({
        date: (currDate.getDate() + " " + monthNames[currDate.getMonth()] + " " + currDate.getFullYear()),
        time: (currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds()),
        title: comic.title,
        url: comic.img
    })
    localStorage.setItem("comic", JSON.stringify(obj));
    console.log(obj);

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
        if (ran_arr.length >= 999) {
            console.log("no uniq comics left");
            break;
        }
    }
    return r;
}