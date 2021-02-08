export function play(){
    document.getElementsByClassName("ytp-play-button")[0].click();
}

export function next(){
    document.getElementsByClassName("ytp-next-button")[0].click();
}

export function previous(){
    history.back();
}
