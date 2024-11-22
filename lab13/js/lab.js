function fizzBuzzBoom() {
    let oneLongString = ""; // Initialize an empty string to store output

    for (let i = 1; i <= 200; i++) { // Loop from 1 to 200
        let out = ""; // Reset output string for each number

        if (i % 3 === 0) {
            out += "Fizz";
        }
        if (i % 5 === 0) {
            out += "Buzz";
        }
        if (i % 7 === 0) {
            out += "Boom";
        }

        // If no conditions are met, set output to the number itself
        if (out === "") {
            out = i;
        } else {
            out = i + " - " + out; // Append the number before the output
        }

        // Add the output for the current number with a line break
        oneLongString += out + "!<br>";
    }

    // Output the final compiled string to the div with ID "output"
    $("#output").html(oneLongString);
}

// Call the function to execute FizzBuzzBoom
fizzBuzzBoom();
