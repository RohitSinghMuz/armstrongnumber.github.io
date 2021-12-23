
    function fn() {
        let num = document.getElementById("number").value;
        let sum = 0, power, originalnum, len, last;
        len = num.toString().length;
        originalnum = num;
        while (num > 0) {
            last = num % 10;
            power = Math.pow(last, len);
            sum = sum + power;
            num = parseInt(num / 10);
        }
        if (originalnum == sum) {
            alert(" isarmstrong Number");
        } else {
            alert("not armstrong Number");
        }
    }
