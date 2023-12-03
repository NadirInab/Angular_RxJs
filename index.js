const { Observable, map } = require("rxjs");

// const data = {
//     data : [
//         {
//             isAdmin : true , 
//             Age : 12
//         },
//         {
//             isAdmin : false , 
//             Age : 23
//         },
//         {
//             isAdmin : false , 
//             Age : 10
//         },
//         {
//             isAdmin : false , 
//             Age : 8
//         },
//     ]
// }





// const observable = new Observable((subscriber) => {
//     subscriber.next(data) ;
// }).pipe(
//     map((value)=> {
//        return  value.data;

//     }), 
//     map((value)=>{
//         return value.filter(user => user.isAdmin == false) ; 
//     }),
//     map((value)=> {
//         console.log(value)
//     })
// ) ;

// const observer = {
//     next : (value)=>{ console.log("Observer "+ value)} ,
//     error : (err) => {console.log("err" + err)}, 
//     complete : ()=> {"complete"}
// } ;

// observable.subscribe(observer) ;


const users = {
    data: [
        {
            name: "Nadir",
            isAdmin: true,
            age: 20
        },
        {
            name: "youssef",
            isAdmin: false,
            age: 10
        },
        {
            name: "adnane",
            isAdmin: false,
            age: 17
        },
        {
            name: "agra",
            isAdmin: false,
            age: 21
        },
    ]
}

// const observable = new Observable((Subscriber) => {
//     Subscriber.next(users) ;
// }).pipe(
//     map(value =>{ return value.data }), 
//     map(value => { return value.filter((user)=> user.isAdmin == true )} ), 
//     map((value)=> { console.log(value)})
// )


// const observer = {
//     next : (value)=>{console.log("next")}, 
//     error : (err)=>{console.log(err)}, 
//     complete : ()=>{console.log("compete")}, 
// }

// observable.subscribe(observer) ;



// const observable = new Observable((subscriber) => {
//     subscriber.next(users);
// }).pipe(
//     map((value)=> { return value.data}), 
//     map(value => {return value.filter((user)=> { return user.age > 18 })}), 
//     map(value => { console.log(value)})
// )

// const observer = {
//     next : (value)=> { console.log(value)},  
//     error : (err)=> { console.log("error")}, 
//     complete : ()=> { console.log("complete")}, 
// } 

// observable.subscribe(observer) ;

const observable = new Observable((subscriber) => {
    subscriber.next(users);
}).pipe(
    map((value) => { return value.data }),
    map((value) => { return value.filter((user) => { return user.age > 18 }) }),
    map((value) => {
        if(1!=2){
            throw new Error("statment is false errrr") ;
        }else {
            console.log(value) ;
        }
    }
    ));

const observer = {
    next: (value) => { console.log("next") },
    error: (err) => { console.log("errr section", err) },
    complete: () => { console.log("complete") },
}

observable.subscribe(observer);


