

document.getElementById('activity-generator-btn').addEventListener('click',function (){
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById('text-activity').innerHTML = `<p>${data.activity}</p>`
        })
})


