function changeBackgnd(e) {
    // console.log(e);
    // e.target.setAttribute('class','black');
    e.target.classList.add('black');
    console.log(e);
}
function generateGrid() {
    let container = document.querySelector('.container');
    if(container) {
        container.remove();
    }
    container = document.createElement('div');
    container.setAttribute('class','container');
    let userInp = Number(prompt('please enter number'));
    while(userInp > 100) { 
        alert('please enter less than 100');
        userInp = Number(prompt('please enter number'));
        }
    for(let i = 0; i < userInp ** 2; i++) {
        let childDiv = document.createElement('div');
        let width = 100 / userInp;
        childDiv.style.cssText = `flex-basis: ${width}%; height: ${width}px `;
        childDiv.addEventListener('mouseenter',changeBackgnd);
        container.appendChild(childDiv);
    }
    document.querySelector('body').appendChild(container);
}


let btn = document.querySelector('button');
btn.addEventListener('click', generateGrid);
generateGrid();