// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectKorea = document.querySelector("select.js-select option[name=KR]");
const selectGreece = document.querySelector("select.js-select option[name=GR]");
const selectTurkey = document.querySelector("select.js-select option[name=TR]");
const selectFinland = document.querySelector("select.js-select option[name=FI]");

const select = document.querySelector('select')
select.addEventListener('change', (e) => {
    const selected = e.target.value
    localStorage.setItem('country', selected)
})

function loaddata() {
    const select = document.querySelector('select')
    const localdata = localStorage.getItem('country')
    console.log(localdata)
    if (localdata == "KR") {
        selectKorea.setAttribute('selected', 'true');
        console.log(selectKorea);
    }
    if (localdata == "GR") {
        selectGreece.setAttribute('selected', 'true');
        console.log(selectGreece);
    }
    if (localdata == "TR") {
        selectTurkey.setAttribute('selected', 'true');
        console.log(selectTurkey);
    }
    if (localdata == "FI") {
        selectFinland.setAttribute('selected', 'true');
        console.log(selectFinland);
    }
}

loaddata()

// localStorage.setItem(COORDS, JSON.stringify(coordsObj));