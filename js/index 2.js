document.getElementById("mainTitle").innerText = "Gay dinosaur";

const offsetCharacter = 16;

const sec = 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");

let inventory = [];
const inventoryList = document.getElementById("inventoryList");

getItem("warm milk", "warm milk");

setTimeout(showSpeech, 1 * sec, mainCharacterSpeech, characterAudio, "now all i need is some paper towels and lotion!");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
        switch (e.target.id) {
            case "door1":
                //something insert here
                if (checkItem("frozen rocks")) {
                    showSpeech(mainCharacterSpeech, characterAudio, "alright let's go cheer my cow friend up");
                    setTimeout(function () {window.open("index 2.html")}, 16 * sec);
                    document.getElementById(compiler).style.display="block";
                }
                if(checkItem("warm milk")){
                    showSpeech(mainCharacterSpeech, characterAudio, "i want to drink my milk first before i go outside");
                } 
                else {
                    showSpeech(mainCharacterSpeech, characterAudio, "i can't go outside now! i need a gift!");
                }
                break;
            case "door2":
                if(checkItem("warm milk")){
                    showSpeech(mainCharacterSpeech, characterAudio, "i have some frozen rocks and nail clippers in my freezer");
                    setTimeout(showSpeech, 4 * sec, mainCharacterSpeech, characterAudio, "No lotion here tho...");
                }
                else{
                    showSpeech(mainCharacterSpeech, characterAudio, "ah perfect! i can give him some frozen rocks!");
                    setTimeout(function () { getItem("frozen rocks", "frozen rocks");}, 4 * sec);
                }
                //something insert here
                break;
            case "tree":
                if(checkItem("Lotion")){
                    showSpeech(mainCharacterSpeech, characterAudio, "Yes! now i can finally soften my hands before   i drink my milk and fresh up after with some paper towels ");
                    setTimeout(showSpeech, 4 * sec, mainCharacterSpeech, drinkAudio, "ahh... refreshing");
                    setTimeout(function () { removeItem("Lotion", "Lotion");}, 6 * sec);
                    setTimeout(function () { removeItem("warm milk", "warm milk");}, 6 * sec);
                    setTimeout(showSpeech, 6 * sec, mainCharacterSpeech, characterAudio, "now let's go grab a gift for my cow friend and give it to him to thank him");
                }
                else{
                    showSpeech(mainCharacterSpeech, characterAudio, "all i need now is some lotion and i can go wild on my milk ;)");
                }
                //something insert here
                break;
            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "Hey have you seen my lotion?");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "euh.. i havent seen it hehe");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "don't lie to me! i can see your hands are nice and soft!");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, "okay sorry here take it! i don't need it anymore anyways");
                setTimeout(function () { getItem("Lotion", "Lotion");}, 16 * sec);
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 16 * sec);
                break;
            case "platform":
                document.getElementById("platform").style.opacity = 0.5;
                break;
            default:
                // do something when it doesn't have a case
                document.getElementById("platform").style.opacity = 1;
                hideSpeech();
                break;
        }
    }
}

function showSpeech(targetBubble, targetAudio, dialogue) {
    //trigger speech bubble and audio
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialogue;
    targetAudio.currentTime = 0;
    targetAudio.play();
    //stop after 4 seconds the dialogue bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}


function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    let listItem = document.createElement("li");
    listItem.id = itemId;
    listItem.appendChild(document.createTextNode(itemName));
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();
}