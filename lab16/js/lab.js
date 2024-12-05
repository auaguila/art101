/**
 * Author: Aurora Aguilar
 * Created: 12.2.2024
 * 
 **/

let currentComic = null; // Current comic number
let latestComic = null;  // Latest comic number (for validation)

/**
 * Fetch and display an XKCD comic by number
 * @param {number|null} comicNumber - Number of the comic to fetch, or null for the latest comic
 */
function fetchComic(comicNumber = null) {
    const url = comicNumber
        ? `https://api.allorigins.win/get?url=${encodeURIComponent(`https://xkcd.com/${comicNumber}/info.0.json`)}`
        : `https://api.allorigins.win/get?url=${encodeURIComponent("https://xkcd.com/info.0.json")}`;

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(response) {
            const comicObj = JSON.parse(response.contents);

            // Update current comic number and latest comic number
            currentComic = comicObj.num;
            if (!latestComic) {
                latestComic = comicObj.num; // Set the latest comic only once
            }

            // Populate comic details in #output
            $("#output").html(`
                <h3>${comicObj.title}</h3>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
            `);

            // Update button states
            updateButtonStates();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
            $("#output").text("Failed to load the comic. Please try again.");
        },
    });
}

/**
 * Enable or disable navigation buttons based on the current comic
 */
function updateButtonStates() {
    // Disable Previous button if on the first comic
    $("#prev").prop("disabled", currentComic <= 1);

    // Disable Next button if on the latest comic
    $("#next").prop("disabled", currentComic >= latestComic);
}

// Document ready
$(document).ready(function () {
    // Fetch the latest comic on page load
    fetchComic();

    // Previous button handler
    $("#prev").click(function () {
        if (currentComic > 1) {
            fetchComic(currentComic - 1);
        }
    });

    // Next button handler
    $("#next").click(function () {
        if (currentComic < latestComic) {
            fetchComic(currentComic + 1);
        }
    });
});

