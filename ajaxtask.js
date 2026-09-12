const container = document.createElement("div");
container.id = "app";
document.body.appendChild(container);

const bandSelect = document.createElement("select");
const artistSelect = document.createElement("select");

container.appendChild(bandSelect);
container.appendChild(artistSelect);

const defaultBandOption = document.createElement("option");
defaultBandOption.textContent = "Select Band";
defaultBandOption.disabled = true;
defaultBandOption.selected = true;
bandSelect.appendChild(defaultBandOption);

const defaultArtistOption = document.createElement("option");
defaultArtistOption.textContent = "Select Artist";
defaultArtistOption.disabled = true;
defaultArtistOption.selected = true;
artistSelect.appendChild(defaultArtistOption);

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
        
            var rockbands = JSON.parse(xhr.responseText);

        
            for (let band in rockbands) {
                const option = document.createElement("option");
                option.textContent = band;
                option.value = band;
                bandSelect.appendChild(option);
            }

            
            bandSelect.addEventListener("change", function () {
                artistSelect.innerHTML = "";
                const placeholder = document.createElement("option");
                placeholder.textContent = "Select Artist";
                placeholder.disabled = true;
                placeholder.selected = true;
                artistSelect.appendChild(placeholder);

                const selectedBand = this.value;
                const artists = rockbands[selectedBand];

                artists.forEach(artist => {
                    const option = document.createElement("option");
                    option.textContent = artist.name;
                    option.value = artist.value;
                    artistSelect.appendChild(option);
                });
            });
            artistSelect.addEventListener("change", function () {
                window.open(this.value, "_blank");
            });

        } else {
            console.error("Failed to load JSON: " + xhr.status);
        }
    }
};

xhr.open("GET", "./rockbands.json");
xhr.send();





// import { rockbands } from './rockbands.js';
// const container = document.querySelector("#app");
// const bandSelect = document.createElement("select");
// const artistSelect = document.createElement("select");
// container.appendChild(bandSelect);
// container.appendChild(artistSelect);
// const defaultBandOption = document.createElement("option");
// defaultBandOption.textContent = "Select Band";
// defaultBandOption.disabled = true;
// defaultBandOption.selected = true;
// bandSelect.appendChild(defaultBandOption);

// for (let band in rockbands) {
//     const option = document.createElement("option");
//     option.textContent = band;
//     option.value = band;
//     bandSelect.appendChild(option);
// }

// const defaultArtistOption = document.createElement("option");
// defaultArtistOption.textContent = "Select Artist";
// defaultArtistOption.disabled = true;
// defaultArtistOption.selected = true;
// artistSelect.appendChild(defaultArtistOption);
// bandSelect.addEventListener("change", function () {
//     artistSelect.innerHTML = "";
//     const placeholder = document.createElement("option");
//     placeholder.textContent = "Select Artist";
//     placeholder.disabled = true;
//     placeholder.selected = true;
//     artistSelect.appendChild(placeholder);

//     const selectedBand = this.value;
//     const artists = rockbands[selectedBand];

//     artists.forEach(artist => {
//         const option = document.createElement("option");
//         option.textContent = artist.name;
//         option.value = artist.value;
//         artistSelect.appendChild(option);
//     });

// });
// artistSelect.addEventListener("change", function () {
//     const url = this.value;
//     window.open(url, "_blank");
// });



// fetch("./rockbands.json")
//     .then(response => response.json())
//     .then(rockbands => {

//         const container = document.querySelector("#app");

//         const bandSelect = document.createElement("select");
//         const artistSelect = document.createElement("select");

//         container.appendChild(bandSelect);
//         container.appendChild(artistSelect);


//         // Fill bands
//         for (let band in rockbands) {

//             const option = document.createElement("option");

//             option.textContent = band;
//             option.value = band;

//             bandSelect.appendChild(option);
//         }


//         // When band changes
//         bandSelect.addEventListener("change", function () {

//             artistSelect.innerHTML = "";

//             const artists = rockbands[this.value];

//             artists.forEach(artist => {

//                 const option = document.createElement("option");

//                 option.textContent = artist.name;
//                 option.value = artist.value;

//                 artistSelect.appendChild(option);
//             });

//         });


//         // When artist selected
//         artistSelect.addEventListener("change", function () {

//             window.open(this.value, "_blank");

//         });

//     });







// import rockbands from './rockbands.json' assert { type: 'json' };
// const container = document.querySelector("#app");
// const bandSelect = document.createElement("select");
// const artistSelect = document.createElement("select");

// container.appendChild(bandSelect);
// container.appendChild(artistSelect);

// for (let band in rockbands) {
//     const option = document.createElement("option");
//     option.textContent = band;
//     option.value = band;
//     bandSelect.appendChild(option);
// }


// bandSelect.addEventListener("change", function () {

//     artistSelect.innerHTML = "";

//     const selectedBand = this.value;

//     const artists = rockbands[selectedBand];

//     artists.forEach(artist => {
//         const option = document.createElement("option");
//         option.textContent = artist.name;
//         option.value = artist.value;
//         artistSelect.appendChild(option);
//     });

// });

// artistSelect.addEventListener("change", function () {
//     const url = this.value;
//     window.open(url, "_blank");
// });