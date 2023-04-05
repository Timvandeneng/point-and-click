document.getElementById("mainTitle").innerText = "Milk quenching dinosaur point and click";

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

getItem("frozen rocks", "frozen rocks");

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
                    setTimeout(function () {window.open("index 2.html")}, 4 * sec);
                    document.getElementById(compiler).style.display="block";
                } else {
                    showSpeech(mainCharacterSpeech, characterAudio, "i'm not going inside again'");
                }
                break;
            case "door2":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "this fence is still useless...");
                break;
            case "tree":
                if(checkItem("a new friend :)")){
                    showSpeech(mainCharacterSpeech, characterAudio, "you have finished your milk quencing journey and finsihed the game! congratulations!");
                    setTimeout(showSpeech, 4 * sec, mainCharacterSpeech, characterAudio, "you can wander around the field for as long as you like! thank you for playing!");
                }
                else{
                    showSpeech(mainCharacterSpeech, characterAudio, "this tree is pretty long and girthy man...");
                }
                //something insert here
                break;
            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "hey bro! thank you for your milk!");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "ah it's no problem i like giving away my milk");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "well i have a gift for you! some frozen rocks!");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, "what... really?... that's the nicest thing someone has ever done for me! :,)");
                setTimeout(showSpeech, 16 * sec, counterSpeech, Moo, "thank you friend!");
                setTimeout(function () {removeItem("frozen rocks", "frozen rocks");}, 16 * sec);
                setTimeout(showSpeech, 18 * sec, counterSpeech, counterAudio, "you should go see that weird looking tree now");
                setTimeout(function () {getItem("a new friend :)", "a new friend :)");}, 20 * sec);
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 20 * sec);
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