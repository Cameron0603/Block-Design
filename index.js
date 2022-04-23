function print(count) {
    let message = "";
    let is_red = false;
    for(let i = 0; i < count; i++) {
        message += '<img src="images/white.png" id="image' + (i + 1) + '" onclick="change(' + (i + 1) + ')" class="image" alt="">\n';
        if(count == 4) {
            if(i == 1) {
                message += '<br>\n';
            }
        } else if(count == 9) {
            if(i == 2 || i == 5 || i == 8) {
                message += '<br>\n';
            }
        }
    }
    console.log(message);
    document.getElementById('board').innerHTML = message;
}

function change(number) {
    let color = document.getElementById("image" + number).src;
    if(color.includes("images/red.png")) {
        document.getElementById("image" + number).src = "images/white.png";
    } else if(color.includes("images/white.png")) {
        document.getElementById("image" + number).src = "images/red_white.png";
    } else if(color.includes("images/red_white.png")) {
        document.getElementById("image" + number).src = "images/white_red.png";
    } else if(color.includes("images/white_red.png")) {
        document.getElementById("image" + number).src = "images/white_red2.png";
    }  else if(color.includes("images/white_red2.png")) {
        document.getElementById("image" + number).src = "images/red_white2.png";
    }  else if(color.includes("images/red_white2.png")) {
        document.getElementById("image" + number).src = "images/red.png";
    }
}

function transform() {
    if(document.getElementById('board').style.transform == 'rotateY(0deg) rotate(45deg)') {
        document.getElementById('board').style.transform = 'rotateY(0deg) rotate(0deg)';
    } else {
        document.getElementById('board').style.transform = 'rotateY(0deg) rotate(45deg)';
    }
}