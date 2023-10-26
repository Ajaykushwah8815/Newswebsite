// function count() {
//     let i = 0;

//     return {
//         inc: function() {
//             i++;
//             console.log(i);
//         },

//         dec: function() {
//             i--;
//             console.log(i);
//         }
//     }

// }



// let mycount = count();

// mycount.inc();
// mycount.inc();
// mycount.inc();
// mycount.inc();
// mycount.dec();
// mycount.dec();



// function myStack() {


//     let arr = [];

//     let obj = {
//         push: function(ele) {
//             arr.unshift(ele);
//         },
//         pop: function() {
//             return arr.shift();
//         },
//         peek: function() {
//             return arr[0];
//         },
//         size: function() {
//             return arr.length;
//         },
//         display: function() {
//             for (let i = 0; i < arr.length; i++) {
//                 console.log(arr[i]);
//             }


//         }
//     }
//     return obj;
// }

// let stack = myStack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.push(8);


// stack.display();


// console.log(stack.pop());



function myStack() {
    let arr = [];

    return {
        push: function(ele) {
            arr.unshift(ele);
        },
        pop: function() {
            arr.shift();
        },
        peek: function() {
            console.log(arr[0]);
        },
        display: function() {
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
        }
    }
}



let st = myStack();

st.push(5);
st.push(2);
st.push(4);
st.push(8);
st.push(9);
st.push(10);

st.display();























// function queue() {
//     let arr1 = [];

//     return {
//         add: function(ele) {
//             arr1.push(ele);
//         },

//         remove: function() {
//             return arr1.shift();
//         },
//         top: function() {
//             return arr1[arr1.length - 1];
//         },
//         display: function() {

//             console.log(arr1);
//         }
//     }
// }







// function sum(...args) {

//     let ans = 0;
//     for (let i = 0; i < args.length; i++) {
//         ans += args[i];
//     }
//     return ans;

// }
// console.log(sum(1, 2, 3, 4, 5, 6, 4, 5, 8));


// // merge two arr

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];


// console.log(arr1.concat(arr2));



// let res1 = [...arr1, ...arr2];

// console.log(res1);

// console.log(sum(...res1));