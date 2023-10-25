//your JS code here. If required.
const container = document.querySelector('.container');
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
	if(color=="#333333") getRandomColor()
    return color;
}

for (let i = 0; i < 800; i++) {
    const box = document.createElement('div')
    box.className = 'square'
    container.appendChild(box)
    box.addEventListener('mouseenter',()=>{
        const randomColor = getRandomColor()
        box.style.backgroundColor = randomColor
    })
	box.addEventListener('mouseout',()=>{
		 setTimeout(() => {
            box.style.backgroundColor='rgb(29, 29, 29)'
        }, 1000);
	})
}
