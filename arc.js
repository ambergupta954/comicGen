var arr = JSON.parse(localStorage.getItem("title-url"));
var date = JSON.parse(localStorage.getItem("date"));
var time = JSON.parse(localStorage.getItem("time"));

var element = document.getElementById('comic-archive-id');
for (let i = 0; i < arr.length; i++) {
    element.innerHTML += ` <div class="archive-card" id="card${i}">
<div class="archive-title">
    <div class="title-number">
    ${i+1}.
    </div>
    <div class="title-name">
    ${arr[i].key}
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
            ${date[i]}
        </div>
        <div>
            ${time[i]}
        </div>
    </div>
</div>
</div>`
}
console.log(122)