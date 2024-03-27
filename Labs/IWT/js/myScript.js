console.log(123);

function loadData(key){
    var srcc;
    var p;
    switch(key)
    {
        case 0:
            srcc = "images/xss.png";
            p = "The iPhone XS was released by Apple in September 2018. It features a 5.8-inch Super Retina OLED display, A12 Bionic chip, dual 12 MP rear cameras, Face ID, and comes with iOS 12 (upgradable to iOS 15). It was known for its sleek design, powerful performance, and improved camera capabilities.";
            break;
        case 1:
            srcc = "images/xsmax.png";
            p = "Also released by Apple in September 2018, the iPhone XS Max is a larger variant of the iPhone XS with a 6.5-inch Super Retina OLED display. It shares most features with the iPhone XS, including the A12 Bionic chip, dual 12 MP rear cameras, Face ID, and iOS 12 (upgradable to iOS 15). The XS Max offered a larger screen for those who prefer a more expansive display.";
            break;
        case 2:
            srcc = "images/8plus.png";
            p = "The iPhone 8 Plus was launched by Apple in September 2017. It features a 5.5-inch Retina HD display, A11 Bionic chip, dual 12 MP rear cameras with portrait mode and optical zoom, Touch ID, and iOS 11 (upgradable to iOS 15). It's notable for its glass back design supporting wireless charging and its reliable performance.";  
            break;
        case 3:
            srcc = "images/SE.png";
            p = "Apple released the iPhone SE in April 2020. It's a budget-friendly model that combines the design of the iPhone 8 with the internals of the iPhone 11. It features a 4.7-inch Retina HD display, A13 Bionic chip, single 12 MP rear camera, Touch ID, and iOS 13 (upgradable to iOS 15). The iPhone SE was aimed at users who prefer a smaller form factor and a more affordable price point.";
            break;
        }
        document.getElementById("mainimg").src = srcc;
        document.getElementById("desc").innerHTML = p
}

function priceForLoop(){
    let price = {
        "Iphone XS" : "$1100",
        "Iphone XS Max" : "$1200",
        "Iphone 8S Plus" : "$850",
        "Iphone SE" : "$900",
    }
    var prices = "";
    for(let phone in price){
        prices +=  "<p>" + phone + " : " + price[phone] + "</p>";
    }
    document.getElementById("div").innerHTML = prices;
}