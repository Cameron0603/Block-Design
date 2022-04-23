function print(count) {
    let message = "";
    let is_red = false;
    for(let i = 0; i < count; i++) {
        message += '<img src="images/red_white.svg" id="image' + (i + 1) + '" onclick="change(' + (i + 1) + ')" class="image" alt="">\n';
        if(count == 4) {
            if(i == 1) {
                message += '<br>\n';
            }
        } else if(count == 9) {
            if(i == 2 || i == 5 || i == 8) {
                message += '<br>\n';
            }
        } else if(count == 6) {
            if(i == 2 || i == 5) {
                message += '<br>\n';
            }
        }
    }
    console.log(message);
    document.getElementById('board').innerHTML = message;
}

function change(number) {
    let color = document.getElementById("image" + number).src;
    if(color.includes("images/red.svg")) {
        document.getElementById("image" + number).src = "images/white.svg";
    } else if(color.includes("images/white.svg")) {
        document.getElementById("image" + number).src = "images/red_white.svg";
    } else if(color.includes("images/red_white.svg")) {
        document.getElementById("image" + number).src = "images/white_red.svg";
    } else if(color.includes("images/white_red.svg")) {
        document.getElementById("image" + number).src = "images/red_white2.svg";
    }  else if(color.includes("images/red_white2.svg")) {
        document.getElementById("image" + number).src = "images/white_red2.svg";
    }  else if(color.includes("images/white_red2.svg")) {
        document.getElementById("image" + number).src = "images/red.svg";
    }
}