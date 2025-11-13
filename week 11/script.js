function calculate() {
    var a = parseFloat(document.calcform.txta.value);
    var b = parseFloat(document.calcform.txtb.value);
    var operator = document.calcform.sto.value; // sửa lại đúng name trong HTML
    var result;
    var errorMsg = "";

    // Kiểm tra giá trị nhập
    if (isNaN(a) && operator !== "sqrt" && operator !== "abs" && operator !== "log") {
        errorMsg = " Please enter a valid number for A.";
    } else if (isNaN(b) && !["sqrt", "abs", "log"].includes(operator)) {
        errorMsg = " Please enter a valid number for B.";
    } else {
        // Tính toán
        if (operator === "+") {
            result = a + b;
        } else if (operator === "-") {
            result = a - b;
        } else if (operator === "*") {
            result = a * b;
        } else if (operator === "/") {
            if (b === 0) {
                errorMsg = " Cannot divide by zero!";
            } else {
                result = a / b;
            }
        } else if (operator === "%") {
            result = a % b;
        } else if (operator === "**") {
            result = Math.pow(a, b);
        } else if (operator === "sqrt") {
            if (a < 0) {
                errorMsg = " Cannot take square root of a negative number!";
            } else {
                result = Math.sqrt(a);
            }
        } else if (operator === "abs") {
            result = Math.abs(a);
        } else if (operator === "log") {
            if (a <= 0) {
                errorMsg = " Logarithm undefined for non-positive numbers!";
            } else {
                result = Math.log10(a).toFixed(4);
            }
        } else {
            errorMsg = " Invalid operator!";
        }
    }

    // Hiển thị
    if (errorMsg !== "") {
        document.getElementById("error-msg").innerText = errorMsg;
        document.calcform.txtr.value = "";
    } else {
        document.getElementById("error-msg").innerText = "";
        document.calcform.txtr.value = result;
    }
}