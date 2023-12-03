<div align="center">
     <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*bMgQ8MhbnQexpqHgIgBJPA.png" alt="Image Alt Text">
  
</div>

![Javascript](https://img.shields.io/badge/Angular-red.svg)
![Javascript](https://img.shields.io/badge/JavaScript-gold.svg)
![Java](https://img.shields.io/badge/RxJs-bleusvg)
![Java](https://img.shields.io/badge/SPA-red.svg)
![Java](https://img.shields.io/badge/dataBinding-black.svg)
# Angular_RxJs 💯	
This repo provide an overall view and few examples and use cases of RxJs library .

## Intro 
before we get our hands dirty, let understand few notions . Now when it comes to javascript and it's libraries, the sky is the limit, but they all serve the same things, which is : make javascript as beauty and simplify the process of handling data, RxJs is no different .
## RxJs
-  is a library for reactive programming using Observables. It's a part of the larger family of ReactiveX libraries, which aim to provide a set of tools for working with asynchronous data streams and events. dealing with UI events, HTTP requests, and other asynchronous operations. 
- Keys and features : 
1 - Asynchronous Programming: It helps in writing clean and concise code for managing asynchronous tasks, such as handling user input, making HTTP requests, and working with timers. 
2- Composability:
3- Event Handling:
4- Reactive Programming Paradigm:

## ObservableAn 
- In simple is a representation of a stream of values or events that might happen over time.
- It allows you to subscribe to these events and react accordingly. Observables can emit values, errors, or completion signals.

## Observer:
- an Observer is an object that listens to the events emitted by an Observable. It defines three methods: next, error, and complete. These methods handle the different types of events that an Observable might emit.
- In RxJS, an Observer is typically an object or a set of callback functions that you pass to the subscribe method of an Observable.

```javascript
import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

const observer = {
  next: value => console.log(`Next: ${value}`),
  error: error => console.error(`Error: ${error}`),
  complete: () => console.log('Complete'),
};

observable.subscribe(observer);

```

## subject : 
- is a special type of Observable in RxJS. It acts as both an Observer and an Observable.
- A Subject can act as an Observer by subscribing to one or more Observables, and it can act as an Observable by emitting values to its subscribers.
- It can multicast (broadcast) values to multiple subscribers, making it suitable for scenarios where you want to share data among different parts of your application.

```javascript 
import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe(value => console.log(`Observer A: ${value}`));
subject.subscribe(value => console.log(`Observer B: ${value}`));

subject.next('Hello'); // in this use case Both observers receive 'Hello'


```

- Subscription Management : You can unsubscribe from a Subject to stop receiving updates. When an Observer unsubscribes, it is removed from the list of subscribers.

```javascript 
const observerA = subject.subscribe(value => console.log(`Observer A: ${value}`));
const observerB = subject.subscribe(value => console.log(`Observer B: ${value}`));

subject.next('Hello'); // and in this use case Both observers receive 'Hello'

observerA.unsubscribe();

subject.next('World'); //but in this case Only Observer B receives 'World', we have unsubscribed from A .


```

## Pipe 
- In RxJS, the pipe function and related concepts are used to compose and transform Observables in a functional and modular way 

Base on the exaple above : 
```javascript
const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(
    map((value )=> {return value}), 
    map((value)=> {return value})
)

```

## Operators:
- Operators are functions that can be used in the pipe to transform, filter, or manipulate the data emitted by Observables.
- RxJs provide many ops, here few examples : `map` `filter`, `mergeMap`, `switchMap`, `concatMap`..., check the other functions in the RxJs docs : https://www.learnrxjs.io/

```javascript
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);

source
  .pipe(
    filter(value => value % 2 === 0), 
    map(value => value * 2) 
  )
  .subscribe(result => console.log(result));

```

## Briefly :
- This is a simplified example, and in real-world scenarios, Observables are often used for handling asynchronous operations, such as making HTTP requests or responding to user interactions in a reactive and efficient manner.
