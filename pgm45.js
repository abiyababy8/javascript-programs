//filter out only even num from given array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = number.filter((item) => item % 2 == 0);
console.log("Even numbers:", even);

const evenNew = number.filter((item) => {
    if (item % 2 == 0) {
        return item;
    }
});
console.log("New Even numbers", evenNew);



let names = ['john', 'sean', 'ross', 'kenneth', 'jean'];
//filter out name starts with 'j'

let startWithJ = names.filter((item) => item.startsWith('j'));
console.log("Names starts with 'j':", startWithJ);


let startWithJnew= names.filter((item) => 
    {
        if(item.startsWith('jo')){
            return item;
        }
    });
    console.log("Names starts with 'jo':", startWithJnew);

