function makedough(material) {
    return new Promise((solve, notsolve) => {
        setTimeout(() => {
            let dough = "dough is ready";
            solve(dough);
            // notsolve("notsolve");
        }, 2000);

    })
}



function bakepizza(dough) {
    return new Promise((sol, nosol) => {
        setTimeout(() => {
            let bake = "pizza is baked";
            sol(bake);
        }, 2000);

    })
}



function addstoping(bake) {
    return new Promise((sol, rej) => {
        setTimeout(() => {
            let pizza = "pizza is ready";
            sol(pizza);
        }, 2000);
    })
}
// console.log(makedough());


// makedough().then((dough) => {
//     console.log(dough);
//     return bakepizza(dough);
// }).then((bake) => {
//     console.log(bake);
//     return addstoping(bake);
// }).then((pizza) => {
//     console.log(pizza);
// }).catch((notsolve) => {
//     console.log(notsolve);

// })



async function orderPizza() {
    console.log("just wait 2 sec");
    let dough = await makedough();
    console.log(dough);
    console.log("just wait 2 sec");
    let bake = await bakepizza(dough);


    console.log(bake);
    console.log("just wait 2 sec");
    let pizza = await addstoping(bake);
    console.log(pizza);
}


orderPizza();