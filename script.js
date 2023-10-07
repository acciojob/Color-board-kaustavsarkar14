//your JS code here. If required.
// Get the container element
const container = document.querySelector('.container');
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Create 800 square elements and add them to the container
for (let i = 0; i < 800; i++) {
    const box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box)
    box.addEventListener('mouseenter',()=>{
        const randomColor = getRandomColor()
        box.style.backgroundColor = randomColor
        setTimeout(() => {
            box.style.backgroundColor='black'
        }, 1000);
    })
}
