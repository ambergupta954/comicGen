var data = [];
if (localStorage.length != 0) {
    data = JSON.parse(localStorage.getItem("comic"));
}
var element = document.getElementById('comic-archive-id');
for (let i = 0; i < data.length; i++) {
    let k = data[i].url;
    console.log(typeof k)
    element.innerHTML += ` <div class="archive-card" onclick="popup('${k}')" id="card${i}">
<div class="archive-title">
    <div class="title-number">
    ${i+1}.
    </div>
    <div class="title-name">
    ${data[i].title}
    </div>
</div>

<div class="last-viewed">
    <div class="vertical-line">

    </div>
    <div class="date-time">
        <div>
            last viewed:
        </div>
        <div>
            ${data[i].date}
        </div>
        <div>
            ${data[i].time}
        </div>
    </div>
</div>
</div>`
}
popup = (url) => {
    document.getElementById('pop').style.display = "flex";
    document.getElementById('pop').innerHTML = `<img src="${url}" >`;
}
hidepop = () => document.getElementById('pop').style.display = "none";