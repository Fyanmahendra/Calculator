function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const displayValue = document.getElementById('display').value;
    const lastChar = displayValue.charAt(displayValue.length - 1);
    
    if (/[0-9]/.test(lastChar)) {
        const result = evaluateExpression(displayValue);
        document.getElementById('display').value = result;
    }
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function evaluateExpression(expression) {
    try {
        // Menggunakan function 'split' untuk memisahkan ekspresi matematika menjadi angka dan operator
        const numbers = expression.split(/\+|\-|\*|\//);
        const operators = expression.replace(/[0-9]|\./g, "").split("");

        // Memastikan jumlah angka sama dengan jumlah operator + 1
        if (numbers.length !== operators.length + 1) {
            throw new Error("Invalid expression");
        }

        // Menginisialisasi hasil dengan angka pertama
        let result = parseFloat(numbers[0]);

        // Melakukan iterasi melalui operator dan angka untuk menghitung hasilnya
        for (let i = 0; i < operators.length; i++) {
            const currentNumber = parseFloat(numbers[i + 1]);
            const currentOperator = operators[i];

            if (isNaN(currentNumber)) {
                throw new Error("Invalid number");
            }

            if (currentOperator === "+") {
                result += currentNumber;
            } else if (currentOperator === "-") {
                result -= currentNumber;
            } else if (currentOperator === "*") {
                result *= currentNumber;
            } else if (currentOperator === "/") {
                if (currentNumber === 0) {
                    throw new Error("Division by zero");
                }
                result /= currentNumber;
            }
        }

        return result;
    } catch (error) {
        // Menangani kesalahan dalam evaluasi ekspresi
        console.error("Error evaluating expression:", error.message);
        return "Error";
    }
}

  

  
