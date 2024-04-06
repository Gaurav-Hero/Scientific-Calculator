let upperBox = document.querySelector('.upperBox')
let lowerBox = document.querySelector('.lowerBox')
let newText = '';
let inputSci;
// let soltext = 0;
lowerBox.addEventListener('click', (evt) => {
    if(evt.target.innerText === 'AC'){
        console.log('ac ',newText)
        newText = '';
        
    }else if(evt.target.innerText === 'DE'){
        console.log('de',newText)
        newText = newText.slice(0, -1)
    }else if(evt.target.innerText === '+'){
        console.log('+.',newText)
        
        // soltext += parseInt(newText)
        newText += '+'
    }else if(evt.target.innerText === '-'){
        console.log('-.',newText)
        // soltext -= parseInt(newText)
        newText += '-'
    }else if(evt.target.innerText === '9'){
        console.log('9.',newText)
        newText += '9'
    }else if(evt.target.innerText === '8'){
        console.log('8.',newText)
        newText += '8'
    }else if(evt.target.innerText === '7'){
        console.log('7.',newText)
        newText += '7'
    }else if(evt.target.innerText === '/'){
        console.log('/',newText)
        // soltext /= parseInt(newText)
        newText += '/'
    }else if(evt.target.innerText === '6'){
        console.log('6.',newText)
        newText += '6'
    }else if(evt.target.innerText === '5'){
        console.log('5.',newText)
        newText += '5'
    }else if(evt.target.innerText === '4'){
        console.log('4.',newText)
        newText += '4'
    }else if(evt.target.innerText === '3'){
        console.log('3.',newText)
        newText += '3'
    }else if(evt.target.innerText === '2'){
        console.log('2.',newText)
        newText += '2'
    }else if(evt.target.innerText === '1'){
        console.log('1.',newText)
        newText += '1'
    }else if(evt.target.innerText === '0'){
        console.log('0.',newText)
        newText += '0'
    }else if(evt.target.innerText === '*'){
        console.log('*',newText)
        // soltext *= parseInt(newText)
        newText += '*'
    }else if(evt.target.innerText === '.'){
        console.log('..',newText)
        newText += '.'
    }else if(evt.target.innerText === '='){
        console.log('=',newText)
        // upperBox.innerHTML = String(soltext)
        try {
            newText = eval(newText)
        } catch (error) {
            newText = 'Error'
        }
        

    }else if(evt.target.innerText === ')'){
        console.log(')',newText)
        newText += ')'
    }else if(evt.target.innerText === '('){
        console.log('(',newText)
        newText += '('
    }else if(evt.target.innerText === 'sqrt'){
        console.log('sqrt.',newText)
        inputSci = prompt('enter number in Sqrt function')
        newText += `Math.sqrt(${inputSci})`
    }else if(evt.target.innerText === 'sin'){
        console.log('sin.',newText)
        inputSci = prompt('enter number in sin function')
        newText += `Math.sin(${inputSci})`
    }else if(evt.target.innerText === 'log'){
        console.log('log',newText)
        inputSci = prompt('enter number in log function')
        newText += `Math.log10(${inputSci})`
    }else if(evt.target.innerText === 'pow'){
        console.log('pow.',newText)
        inputSci = prompt('enter number in pow function')
        newText += `Math.pow(${inputSci})`
    }else if(evt.target.innerText === 'pi'){
        console.log('pi',newText)
        inputSci = prompt('enter number in pi function')
        newText += `Math.PI(${inputSci})`
    }else if(evt.target.innerText === 'cos'){
        console.log('cos.',newText)
        inputSci = prompt('enter number in cos function')
        newText += `Math.cos(${inputSci})`
    }
    upperBox.innerHTML = newText;
})

// console.log(parseInt('123+123'))
// console.log(eval('123+123'))