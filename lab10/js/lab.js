function generateRandomText() {
    const text = "I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!";
    // Split the text at punctuation marks using a regular expression
    const sentences = text.split(/([.!?:;]+)/).filter(Boolean);

    // Pick a random sentence
    const randomIndex = Math.floor(Math.random() * (sentences.length / 2)) * 2; // Ensure we pick at the start of a sentence
    const randomSentence = sentences[randomIndex] + (sentences[randomIndex + 1] || '');

    return randomSentence.trim();
  }

// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});