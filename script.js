const messages = [
    "wait wtf",
    "did you press no?",
    "Are you being for real?",
    "WHAT THE FUUUUUUUUUCK",
    "yes, is right beside, CLICK IT",
    "Istg Madhav!!",
    "You're dead..haha dead!",
    "You have no other option but to be my valentine",
    "That's it, break-upp",
    "Jkjk, plsss be my valentineeeee ❤️"
];


const gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhzcHJvd3IzNnljeHh2dDVnbng2bjlncjJhM2I3Yzdwd3NoNTJ0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LWveaUTd8a9Bw7MdYO/giphy.gif",
    "https://media.giphy.com/media/B0voyStDsmiStwcBoh/giphy.gif?cid=ecf05e47qlmgoxh9x7n30ckuny6p9nbcscqb52prrc3vec49&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/NiHeNEK56CS3gMAecb/giphy.gif?cid=ecf05e47jgpilt85xcj09wky29rtzni9iqk3327k0uyco2u3&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/QPVHoYnTiaoV6kZeOJ/giphy.gif?cid=ecf05e47jgpilt85xcj09wky29rtzni9iqk3327k0uyco2u3&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/lkuRLPYa6PDj2SPIwJ/giphy.gif?cid=ecf05e47vw1luqfgvvnvdzjkn1wztr9yzpxz57fqvsxuqoms&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/yYgZSXjiOOfWE/giphy.gif?cid=ecf05e47jgpilt85xcj09wky29rtzni9iqk3327k0uyco2u3&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/KJYkur0Hs4dNAPn6y0/giphy.gif?cid=ecf05e47gmv6828kykxlgvzixeg94671txpj4476p8wc5byu&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/bcqAMUTUHoLDy/giphy.gif?cid=ecf05e47gmv6828kykxlgvzixeg94671txpj4476p8wc5byu&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/HfrfobzbIgAdSYiCm2/giphy.gif?cid=ecf05e47atemqmtmvxbynkgc0dcczvqxoy90ua7rznfvrgnj&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ee5tryZZI9lvi/giphy.gif?cid=ecf05e4710xuf8lv5ytfq3fs7jr0v8kpp6vu9aiaxy5228an&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/Umo7xfJWNdknFV6YmA/giphy.gif?cid=ecf05e47h5bbpo9pl4un9tzrk98agv84v750rw20fye171l3&ep=v1_gifs_search&rid=giphy.gif&ct=g"
];

let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifContainer = document.querySelector('.gif_container img');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    gifContainer.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}