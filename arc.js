var obj = JSON.parse(localStorage.getItem("comic"));
var element = document.getElementById('comic-archive-id');
for (let i = 0; i < obj.length; i++) {
    element.innerHTML += ` <div class="archive-card" id="card${i}">
<div class="archive-title">
    <div class="title-number">
    ${i+1}.
    </div>
    <div class="title-name">
    ${obj[i].title}
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
            ${obj[i].date}
        </div>
        <div>
            ${obj[i].time}
        </div>
    </div>
</div>
</div>`
}