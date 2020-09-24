const obj = {
    a:2,
    b:5,
    c: [1,2,3]
};
console.log('object ',obj);
const obj2 = {
    ...obj,
    ...obj.c
} ;
console.log('object2 ',obj2);
obj2.a=4;
console.log('object2 ',obj2);
obj2.c[1]=8;
console.log('object2 ',obj2);