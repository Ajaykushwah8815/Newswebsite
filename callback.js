// function magiBangai(magi, callback) {
//     setTimeout(() => {
//         let food = magi + "ban gai h khalo bukkad";
//         callback(food);
//     }, 2000);
// }

// // let store = (food) => {
// //     console.log(food);
// // }

// // magiBangai("magi", store);

// // magiBangai("magi", (food)=>{
// //     console.log(food);
// // });

// function servive(food, callback2) {
//     setTimeout(() => {
//         let servefood = food + "served";
//         callback2(servefood);
//     }, 4000);
// }


// function eat(servefood, callback3) {
//     setTimeout(() => {
//         let bhojan = " magi is tasty";
//         callback3(bhojan);
//     }, 6000);
// }

// magiBangai("magi", (food) => {
//     console.log(food);
//     servive(food, (servefood) => {
//         console.log(servefood);
//         eat(servefood, (bhojan) => {
//             console.log(bhojan);
//         })
//     })
// });



/*



function MangoJues(Mango, ready) {
    setTimeout(() => {
        let juess = Mango + " Jues is ready to mix sugger.";
        ready(juess);
    }, 2000);
    console.log("juess is making just wait 2 sec...");
    console.log();

}



function Mix(juess, mixjuess) {
    setTimeout(() => {
        let mix = "suger is mixed in  mangoes juess";
        mixjuess(mix);
    }, 4000);
    console.log("sugar is mixing just wait 4 sec...")
    console.log();
}


function drinking(mix, drink) {
    setTimeout(() => {
        let drinked = "juess is drinked";
        drink(drinked);
    }, 6000);
    console.log("Juess is drinking wait just 6 sec...");
    console.log();
}

MangoJues("mangoes", (formakingjuess) => {
    console.log(formakingjuess);
    console.log();
    Mix(formakingjuess, (mixsugar) => {
        console.log(mixsugar);
        console.log();
        drinking(mixsugar, (drinkjuess) => {
            console.log(drinkjuess);
            console.log();
        })
    })
})
*/

function makeDough(material, callback) {
    setTimeout(() => {
        let dough = material + " Water";
        callback(dough);
    }, 2000);
}

function heat(dough, callback2) {
    setTimeout(() => {
        let food = "i am heated";
        callback2(food);
    }, 2000);

}

function pizza(food, callback3) {
    setTimeout(() => {
        let paking = "pizza is ready and paked";
        callback3(paking);
    }, 2000);
}

makeDough("maida", (dough) => {
    console.log(dough + " is Ready");
    heat(dough, (food) => {
        console.log(food);
        pizza(food, (paking) => {
            console.log(paking);
        })
    })
})