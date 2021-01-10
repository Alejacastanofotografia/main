//let img = document.querySelectorAll('.itemImg');
let img = document.getElementsByClassName('itemImg');

const animationImg = () => {
    setTimeout(() => {
	    console.log('enter');
	for(let i = 0; i < 5; i++){
	    img[i].classList.add('animation'); 
	}
    },1000)
    
}
animationImg();
