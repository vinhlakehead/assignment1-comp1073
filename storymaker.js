// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const chooseNoun1 = document.getElementById("chooseNoun1");
const chooseVerb = document.getElementById("chooseVerb");
const chooseAdjective = document.getElementById("chooseAdjective");
const chooseNoun2 = document.getElementById("chooseNoun2");
const chooseSetting = document.getElementById("chooseSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["man", "dog", "oreo", "Tokyo", "car"];
const verbs = ["ran", "jumped", "sing", "swim", "slept"];
const adjectives = ["happy", "sad", "angry", "funny", "bright"];
const nouns2 = ["boy", "girl", "ocean", "forest", "doctor"];
const settings = ["city", "school", "home", "office", "hotel"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function getNextWord(array, count) {
    return array[count % array.length]; 
}

function noun1_on_click() {
    const word = getNextWord(nouns1, noun1Count);
    chooseNoun1.textContent = word;
    noun1Count++;
}

function verb_on_click() {
    const word = getNextWord(verbs, verbCount);
    chooseVerb.textContent = word;
    verbCount++;
}

function adjective_on_click() {
    const word = getNextWord(adjectives, adjectiveCount);
    chooseAdjective.textContent = word;
    adjectiveCount++;
}

function noun2_on_click() {
    const word = getNextWord(nouns2, noun2Count);
    chooseNoun2.textContent = word;
    noun2Count++;
}

function setting_on_click() {
    const word = getNextWord(settings, settingCount);
    chooseSetting.textContent = word;
    settingCount++;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${chooseNoun1.textContent} ${chooseVerb.textContent} ${chooseAdjective.textContent} ${chooseNoun2.textContent} ${chooseSetting.textContent}`;
    storyDisplay.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];

    const story = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    storyDisplay.textContent = story; 
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);

document.addEventListener("DOMContentLoaded", function() {
});
