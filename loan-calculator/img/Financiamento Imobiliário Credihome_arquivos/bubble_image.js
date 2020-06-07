var changeBubble = null;
var bubble;
var bubbleContainer;
var closeIcon;

const iconId = "blip-chat-icon";
const closeId = "blip-chat-close-icon";
const chatContainer = "blip-chat-container";

const startingColor = "#ffffff";
const displayClassName = "display";
const hideClassName = "hide";

const startMessage = {
    type: "text/plain",
    content: "COMEÇAR",
    metadata: {
        "#blip.hiddenMessage": true
    }
}

function displayNotification() {
    document.getElementById("blip-chat-notifications").innerText = "1";
    document.getElementById("blip-chat-notifications").style.opacity = "1";
    document.getElementById("blip-chat-notifications").style.zIndex = "1";
}

function displayBubble(bubble){
    bubble.classList.add(displayClassName);
    bubble.classList.remove(hideClassName);
}

function hideBubble(bubble){
    bubble.classList.add(hideClassName);
    bubble.classList.remove(displayClassName);
    displayNotification();
}

changeBubble = function () {
    if (bubble.classList.contains(displayClassName))
        hideBubble();
    else
        displayBubble();
}

function createBubble(bubbleMessage){

    bubbleContainer = document.createElement("div");
    bubbleContainer.id = "bubble-container";

    bubble = document.createElement("div");
    bubble.id = "message-bubble";
    bubble.onclick = function(){ client.widget._openChat() }

    var triangle = document.createElement("div");
    triangle.id = "triangle";

    var message = document.createElement("div");
    message.id = "message";
    message.innerHTML = bubbleMessage;

    bubble.appendChild(message);
    bubble.appendChild(triangle);
    bubbleContainer.appendChild(bubble);

    document
    .querySelector(`#${chatContainer}`)
    .prepend(bubbleContainer);

    return bubble;
}

function replaceImageStructure(bottomImage, topImage) {

    closeIcon = document.querySelector(`#${closeId}`);
    var oldImage = document.querySelector(`#${iconId}`);

    var container = document.createElement("div");
    container.id = iconId;

    var img1 = document.createElement("img");
    img1.src = topImage;
    img1.classList.add("top")

    var img2 = document.createElement("img");
    img2.src = bottomImage;
    img2.classList.add("bottom");

    container.appendChild(img1);
    container.appendChild(img2);

    oldImage.parentElement.insertBefore(container, oldImage);
    oldImage.remove();

}