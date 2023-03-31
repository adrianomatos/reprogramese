        var numPar = 0;
        var numImpar = 0;
        var y = 0;

        for (var x = 1; x <= 20; x++) {
            y = x ** 2;

            if (y % 2 == 0) {
                console.log(y);
                numPar += y;
            } else {
                console.log(y);
                numImpar += y;
            }
        }

        console.log("A soma de quadrados pares é: " + numPar);
        console.log("A soma de quadrados ímpares é: " + numImpar);