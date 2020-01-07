import React from 'react';
import {
  observable,
  decorate,
} from 'mobx';

class CounterStore {
  counter = 0;
  increment() {
    this.counter++;
    console.log("incrementing ", this.counter);
  }
  decrement() {
    this.counter--;
    console.log("decrementing ", this.counter);
  }
}

decorate(CounterStore, {
  counter: observable,
})

export default new CounterStore();