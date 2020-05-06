window.onload = function () {

    //use an anonymous function if you want to pass parameters to an event handler
    //ie)function(){handler(parameter)}
    //retrieves each button and calls change handler with colour parameter
    document.getElementById("red").addEventListener("click", function () { change("red") });
    document.getElementById("orange").addEventListener("click", function () { change("orange") });
    document.getElementById("yellow").addEventListener("click", function () { change("yellow") });
    document.getElementById("green").addEventListener("click", function () { change("green") });
    document.getElementById("blue").addEventListener("click", function () { change("blue") });
    document.getElementById("purple").addEventListener("click", function () { change("purple") });
    document.getElementById("pink").addEventListener("click", function () { change("pink") });
  

    function change(colour) {
        //arrays for each colour type with valid html names
        let reds = ["red", "darkred", "crimson", "firebrick"];
        let oranges = ["orange", "darkorange", "coral"];
        let yellows = ["gold","yellow","khaki"];
        let greens = ["limegreen","springgreen","green","palegreen"];
        let blues = ["darkturquoise","skyblue","dodgerblue","navy"];
        let purples = ["plum","mediumorchid","blueviolet","indigo"];
        let pinks = ["pink","lightcoral","hotpink","deeppink"];

        switch (colour) {
            case "red":
                document.body.style.backgroundColor = reds[getRandomInt(0, reds.length - 1)]; //max index ones less than number of elements in array
                break;
            case "orange":
                document.body.style.backgroundColor = oranges[getRandomInt(0, oranges.length - 1)];
                break;
            case "yellow":
                document.body.style.backgroundColor = yellows[getRandomInt(0, yellows.length - 1)];
                break;
            case "green":
                document.body.style.backgroundColor = greens[getRandomInt(0, greens.length - 1)];
                break;
            case "blue":
                document.body.style.backgroundColor = blues[getRandomInt(0, blues.length - 1)];
                break;
            case "purple":
                document.body.style.backgroundColor = purples[getRandomInt(0, purples.length - 1)];
                break;
            case "pink":
                document.body.style.backgroundColor = pinks[getRandomInt(0, pinks.length - 1)];
                break;
            default:
                document.body.style.backgroundColor = "white";
        }


    }


    /**
     * Returns a random number between min (inclusive) and max (inclusive)
     */
    var prev = 0;//for first case set previous to 0
    function getRandomInt(min, max) {

        let x = Math.floor(Math.random() * (max - min + 1)) + min;
        if (x != prev) { //not the same colour
            console.log(x);
            prev = x;//set prev var to current colour 
            return x;
        }
        else { //selected colour was prev colour, don't repeat
            console.log(x);
            return getRandomInt(min, max);//call again until new colour
        };

    }
}
