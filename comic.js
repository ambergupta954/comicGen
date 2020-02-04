var arr = [];
var url = "https://xkcd.now.sh/?comic=303";
set();
var ran_arr = [];

function set() {

    let ran = rand();

    url = `https://xkcd.now.sh/?comic=${ran}`
    fetch(url)
        .then(response => response.json())
        .then(json => setImage(json))
        .catch(err => console.log(err));
}

function onClick() {

    set();
}


function setImage(comic) {

    let img = document.createElement('img');
    img.src = comic.img;
    let title = comic.title;
    console.log(img.src);
    arr.push({ key: title, value: img.src });
    console.log(arr);
    localStorage.setItem(0, arr);
    document.getElementById('comic').src = img.src;
    document.getElementById('title').innerHTML = title;
    console.log(arr);
}

// function uni(array) {
//     let ran=rand();
//     for(let i=0;i<array.length;i++)
//     {
//         if(ran===array[i])
//         {

//         }
//     }

// }
function rand() {
    let ran = Math.floor(Math.random() * 1000);
    return ran;
}