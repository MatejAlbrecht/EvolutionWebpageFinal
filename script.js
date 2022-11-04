var price = 0,
    countPrice, countBeanie, beanie = 1;

var stickersId1count, stickersId2count, stickersId3count, stickersId4count;
var stickersId1, stickersId2, stickersId3, stickersId4;

var skateId1count, skateId2count, skateId3count, skateId4count;
var skateId1, skateId2, skateId3, skateId4;

var hoodieId1count, hoodieId2count, hoodieId3count, hoodieId4count, hoodieId5count, hoodieId6count;
var hoodieId1, hoodieId2, hoodieId3, hoodieId4, hoodieId5, hoodieId6;

var t = 0;

function time() {
    t = new Date();
    document.getElementById("time").innerHTML = t.toLocaleTimeString()   
}

setInterval(time, 100);

function stickersCart() {
    var id = 0;
    id = document.getElementById("stickersCart").selectedIndex;

    price = 0;

    stickersId1 = 0;
    stickersId1count = 0;

    stickersId2 = 0;
    stickersId2count = 0;

    stickersId3 = 0;
    stickersId3count = 0;

    stickersId4 = 0;
    stickersId4count = 0;

    if (id == 0) {
        price += 4.99;
        stickersId1 += 1;
    } else if (id == 1) {
        price += 8.99;
        stickersId2 += 1;
    } else if (id == 2) {
        price += 17.99;
        stickersId3 += 1;
    } else if (id == 3) {
        price += 79.99;
        stickersId4 += 1;
    }

    countPrice = parseFloat(localStorage.finalPrice) + price;
    localStorage.setItem("finalPrice", countPrice);

    stickersId1count = parseInt(localStorage.stickersId1final) + stickersId1;
    localStorage.setItem("stickersId1final", stickersId1count);

    stickersId2count = parseInt(localStorage.stickersId2final) + stickersId2;
    localStorage.setItem("stickersId2final", stickersId2count);

    stickersId3count = parseInt(localStorage.stickersId3final) + stickersId3;
    localStorage.setItem("stickersId3final", stickersId3count);

    stickersId4count = parseInt(localStorage.stickersId4final) + stickersId4;
    localStorage.setItem("stickersId4final", stickersId4count);
}

function beanieCart() {
    price = 19.99;
    beanie = 1;

    countBeanie = parseInt(localStorage.finalBeanie) + beanie;
    localStorage.setItem("finalBeanie", countBeanie);


    countPrice = parseFloat(localStorage.finalPrice) + price;
    localStorage.setItem("finalPrice", countPrice);

}

function skateCart() {

    var id = document.getElementById("skateCart").selectedIndex;

    price = 0;

    skateId1 = 0;
    skateId1count = 0;

    skateId2 = 0;
    skateId2count = 0;

    skateId3 = 0;
    skateId3count = 0;

    skateId4 = 0;
    skateId4count = 0;

    if (id == 0) {
        price += 59.99;
        skateId1 += 1;
    } else if (id == 1) {
        skateId2 += 1;
        price += 59.99;
    } else if (id == 2) {
        skateId3 += 1;
        price += 59.99;
    } else if (id == 3) {
        skateId4 += 1;
        price += 59.99;
    }

    countPrice = parseFloat(localStorage.finalPrice) + price;
    localStorage.setItem("finalPrice", countPrice);

    skateId1count = parseInt(localStorage.skateId1final) + skateId1;
    localStorage.setItem("skateId1final", skateId1count);

    skateId2count = parseInt(localStorage.skateId2final) + skateId2;
    localStorage.setItem("skateId2final", skateId2count);

    skateId3count = parseInt(localStorage.skateId3final) + skateId3;
    localStorage.setItem("skateId3final", skateId3count);

    skateId4count = parseInt(localStorage.skateId4final) + skateId4;
    localStorage.setItem("skateId4final", skateId4count);
}

function hoodieCart() {
    var id = document.getElementById("hoodieCart").selectedIndex;

    price = 0;

    hoodieId1 = 0;
    hoodieId1count = 0;

    hoodieId2 = 0;
    hoodieId2count = 0;

    hoodieId3 = 0;
    hoodieId3count = 0;

    hoodieId4 = 0;
    hoodieId4count = 0;

    hoodieId5 = 0;
    hoodieId5count = 0;

    hoodieId6 = 0;
    hoodieId6count = 0;

    if (id == 0) {
        price += 49.99;
        hoodieId1 += 1;
    } else if (id == 1) {
        price += 49.99;
        hoodieId2 += 1;
    } else if (id == 2) {
        price += 49.99;
        hoodieId3 += 1;
    } else if (id == 3) {
        price += 49.99;
        hoodieId4 += 1;
    } else if (id == 4) {
        price += 49.99;
        hoodieId5 += 1;
    } else if (id == 5) {
        price += 49.99;
        hoodieId6 += 1;
    }

    countPrice = parseFloat(localStorage.finalPrice) + price;
    localStorage.setItem("finalPrice", countPrice);

    hoodieId1count = parseInt(localStorage.hoodieId1final) + hoodieId1;
    localStorage.setItem("hoodieId1final", hoodieId1count);

    hoodieId2count = parseInt(localStorage.hoodieId2final) + hoodieId2;
    localStorage.setItem("hoodieId2final", hoodieId2count);

    hoodieId3count = parseInt(localStorage.hoodieId3final) + hoodieId3;
    localStorage.setItem("hoodieId3final", hoodieId3count);

    hoodieId4count = parseInt(localStorage.hoodieId4final) + hoodieId4;
    localStorage.setItem("hoodieId4final", hoodieId4count);

    hoodieId5count = parseInt(localStorage.hoodieId5final) + hoodieId5;
    localStorage.setItem("hoodieId5final", hoodieId5count);

    hoodieId6count = parseInt(localStorage.hoodieId6final) + hoodieId6;
    localStorage.setItem("hoodieId6final", hoodieId6count);
}

function cart() {

    localStorage.setItem("finalPrice", parseFloat(localStorage.finalPrice).toFixed(2));

    if (parseInt(localStorage.finalBeanie) > 0) {
        document.getElementById("Beanie").innerHTML = 'Evolution Beanie, size: One size, Price: 19.99 $ ' + localStorage.getItem("finalBeanie") + ' pcs';
        document.getElementById('miniatureBeanie').style.display = "block";
    }

    if (parseInt(localStorage.finalPrice) > 0) {
        document.getElementById("Price").innerHTML = 'Total: ' + localStorage.getItem("finalPrice") + ' $';
    } else {
        document.getElementById("Price").innerHTML = 'Your cart is empty';
    }


    if (parseInt(localStorage.stickersId1final) > 0) {
        document.getElementById("stickersId1count").innerHTML = 'Evolution Stickers, 5 stickers, price: 4.99$ ' + localStorage.getItem("stickersId1final") + ' pcs';
        document.getElementById('miniatureStickers1').style.display = "block";
    }

    if (parseInt(localStorage.stickersId2final) > 0) {
        document.getElementById("stickersId2count").innerHTML = 'Evolution Stickers, 10 stickers, price: 8.99$ ' + localStorage.getItem("stickersId2final") + ' pcs';
        document.getElementById('miniatureStickers2').style.display = "block";
    }

    if (parseInt(localStorage.stickersId3final) > 0) {
        document.getElementById("stickersId3count").innerHTML = 'Evolution Stickers, 20 stickers, price: 17.99$ ' + localStorage.getItem("stickersId3final") + ' pcs';
        document.getElementById('miniatureStickers3').style.display = "block";
    }

    if (parseInt(localStorage.stickersId4final) > 0) {
        document.getElementById("stickersId4count").innerHTML = 'Evolution Stickers, 100 stickersprice: 79.99$ ' + localStorage.getItem("stickersId4final") + ' pcs';
        document.getElementById('miniatureStickers4').style.display = "block";
    }


    if (parseInt(localStorage.hoodieId1final) > 0) {
        document.getElementById("hoodieId1").innerHTML = 'Hoodie, size: XS ' + ',Price: 49.99 $ ' + localStorage.getItem("hoodieId1final") + ' pcs';
        document.getElementById('miniatureHoodie1').style.display = "block";
    }

    if (parseInt(localStorage.hoodieId2final) > 0) {
        document.getElementById("hoodieId2").innerHTML = 'Hoodie, size: S ' + ',Price: 49.99 $ ' + localStorage.getItem("hoodieId2final") + ' pcs';
        document.getElementById('miniatureHoodie2').style.display = "block";
    }

    if (parseInt(localStorage.hoodieId3final) > 0) {
        document.getElementById("hoodieId3").innerHTML = 'Hoodie, size: M ' + ',Price: 49.99 $ ' + localStorage.getItem("hoodieId3final") + ' pcs';
        document.getElementById('miniatureHoodie3').style.display = "block";
    }

    if (parseInt(localStorage.hoodieId4final) > 0) {
        document.getElementById("hoodieId4").innerHTML = 'Hoodie, size: L ' + ',Price: 49.99 $ ' + localStorage.getItem("hoodieId4final") + ' pcs';
        document.getElementById('miniatureHoodie4').style.display = "block";
    }

    if (parseInt(localStorage.hoodieId5final) > 0) {
        document.getElementById("hoodieId5").innerHTML = 'Hoodie, size: XL ' + ',Price: 49.99 $ ' + localStorage.getItem("hoodieId5final") + ' pcs';
        document.getElementById('miniatureHoodie5').style.display = "block";
    }

    if (parseInt(localStorage.hoodieId6final) > 0) {
        document.getElementById("hoodieId6").innerHTML = 'Hoodie, size: XXL ' + ',Price: 49.99 $ ' + localStorage.getItem("hoodieId6final") + 'pcs';
        document.getElementById('miniatureHoodie6').style.display = "block";
    }


    if (parseInt(localStorage.skateId1final) > 0) {
        document.getElementById("skateId1").innerHTML = 'Evolution Deck 8.125: ' + localStorage.getItem("skateId1final") + ' pcs';
        document.getElementById('miniatureSkate1').style.display = "block";
    }

    if (parseInt(localStorage.skateId2final) > 0) {
        document.getElementById("skateId2").innerHTML = 'Evolution Deck 8.25: ' + localStorage.getItem("skateId2final") + ' pcs';
        document.getElementById('miniatureSkate2').style.display = "block";
    }

    if (parseInt(localStorage.skateId3final) > 0) {
        document.getElementById("skateId3").innerHTML = 'Evolution Deck 8.375: ' + localStorage.getItem("skateId3final") + ' pcs';
        document.getElementById('miniatureSkate3').style.display = "block";
    }

    if (parseInt(localStorage.skateId4final) > 0) {
        document.getElementById("skateId4").innerHTML = 'Evolution Deck 8.5: ' + localStorage.getItem("skateId4final") + ' pcs';
        document.getElementById('miniatureSkate4').style.display = "block";
    }
}

function clearStorage() {
    localStorage.clear();
    location.reload();

    localStorage.setItem("finalPrice", 0);

    localStorage.setItem("finalBeanie", 0);

    localStorage.setItem("stickersId1final", 0);
    localStorage.setItem("stickersId2final", 0);
    localStorage.setItem("stickersId3final", 0);
    localStorage.setItem("stickersId4final", 0);

    localStorage.setItem("skateId1final", 0);
    localStorage.setItem("skateId2final", 0);
    localStorage.setItem("skateId3final", 0);
    localStorage.setItem("skateId4final", 0);

    localStorage.setItem("hoodieId1final", 0);
    localStorage.setItem("hoodieId2final", 0);
    localStorage.setItem("hoodieId3final", 0);
    localStorage.setItem("hoodieId4final", 0);
    localStorage.setItem("hoodieId5final", 0);
    localStorage.setItem("hoodieId6final", 0);
}