async function fetchCat() {
    let p = document.createElement('p');
    let h3 = document.createElement('h3')
    let res = await fetch("https://catfact.ninja/fact?max_length=140")
    let catlink = await res.json()

    console.log(catlink)
    h3.innerText = "Random Cat Facts"
    h3.setAttribute('src', catlink.length)
    document.getElementById('factWrapper').appendChild(h3)
    p.innerText = catlink.fact
    document.getElementById('factWrapper').appendChild(p)

}

fetchCat();