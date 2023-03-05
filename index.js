const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackground = () => {
    switch(zodiac.value) {
      case "aries":
        body.style.backgroundColor = "#fc0303";
        break;
       case "tarus":
        body.style.backgroundColor = "#03fc6f";
        break;
         case "gemini":
        body.style.backgroundColor = "#fce514";
        break;
         case "cancer":
        body.style.backgroundColor = "#fffcf7";
        break;
         case "lio":
        body.style.backgroundColor = "#B94026";
        break;
         case "virgo":
        body.style.backgroundColor = "#5B26b9";
        break;
         case "libra":
        body.style.backgroundColor = "#B526B9";
        break;
         case "scorpio":
        body.style.backgroundColor = "#B9B926";
        break;
         case "sagittarius":
        body.style.backgroundColor = "#26B9A0";
        break;
         case "aquarius":
        body.style.backgroundColor = "#A026B9";
        break;
         case "capricorn":
        body.style.backgroundColor = "#5626B9";
        break;
         case "pisces":
        body.style.backgroundColor = "#B92680";
        break;

        default:
            body.style.backgroundColor = "#fff"
            break;
    }
};


