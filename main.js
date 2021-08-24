document.addEventListener('DOMContentLoaded', () => {

    // Attaching an addEventListener to plusBtn
    document.getElementById("plusBtn").addEventListener('click', add)
    // add function
    function add() { 
        let h1 = document.querySelector('h1').innerText
        let number = document.querySelector("#numDisplay").value
        let result = Number(h1) + Number(number)
        document.querySelector('h1').innerText = result
        // if the result is greater than or equal to 0, then it will show gold number(s)
        if(result >= 0) {
            document.querySelector('h1').style.color = "gold"
        }
    }
    // Attaching an addEventListener to minusBtn
    document.getElementById("minusBtn").addEventListener('click', subtract)
    // subtract function
    function subtract() { 
        let h1 = document.querySelector('h1').innerText
        let number = document.querySelector("#numDisplay").value
        let result = Number(h1) - Number(number)
        document.querySelector('h1').innerText = result
        // if the result is less than 0, then it will show red number(s)
        if(result < 0) {
            document.querySelector('h1').style.color = "red"
        }
    }    
})
