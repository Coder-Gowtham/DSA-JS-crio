function stringPalindrome(str) {
    let left = 0
    let right = str.length - 1;

    for(let i=left; i<Math.floor(str.length/2); i++){
        if(str[i] !== str[right - i]) return false;
    }

 