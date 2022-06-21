//set initial count
let count = 0

//select all buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        } else if(styles.contains('increase')){
            count++
        } else{
            count = 0
        }
        if (count == 0){
            value.style.color = 'black'
        }
        if (count > 0){
            value.style.color = 'green'
        }
        if (count < 0){
            value.style.color = 'red'
        }
        value.textContent = count
    })
})