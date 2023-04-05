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
                if (checkItem("warm milk")) {
                    showSpeech(mainCharacterSpeech, characterAudio, "Finally i can enjoy my warm viscous fresh milk all alone in my room...");
                } else {
                    showSpeech(mainCharacterSpeech, characterAudio, "i can't go inside now! i need some warm fresh milk ;)");
                }
                break;
            case "door2":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "yeah this fence is shit useless i can just hop over it!");
                break;
            case "tree":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "You call this foking blurry blob a tree? Mate there's something definetly wrong with you innit?");
                break;
            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "That cow has got some serious mommy milkers bro");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "you know i can hear you");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "Ow sorry now can i suck on your cow tits?");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, "Here suck my milk now piss off mate");
                getItem("warm milk", "warm milk");
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