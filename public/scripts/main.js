//let img = document.querySelectorAll('.itemImg');
let img = document.getElementsByClassName('select');
let num = 4;
const animationImg = () => {
    
    setTimeout(() => {
        img[num].classList.add('animation')
        setTimeout(() => {
	    img[num].classList.add('index-1');
	    img[num].classList.remove('itemImg');
	    img[num].classList.remove('animation');
	    num = num - 1; 
	    if(num < 0){
                num = 4;
		for(let i = 0; i < 5; i++){
                    img[i].classList.add('itemImg') 
		}
	    } 
	    animationImg();
	}, 5900);	
    },1000)
    
}
animationImg();
