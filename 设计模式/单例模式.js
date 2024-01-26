class Singleton {
  constructor(name) {
    this.name = name;
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
  getName() {
    return this.name;
  }
}

class EventBus extends Singleton {
  constructor() {
    super("EventBus");
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName,args) {
    if (this.events[eventName]) {
        this.events[eventName].forEach((callback) => {
          callback(args);
        });
    }
  }
}

// const singleton1 = new Singleton("1");
// const singleton2 = new Singleton("2");
// console.log(singleton1.getName()); // 1,只有一个实例对象，name为1
// console.log(singleton2.getName()); // 2
// console.log(singleton1 === singleton2);

const eventBus = new EventBus();
const eventBus2 = new EventBus();

eventBus.on("test", (args) => {
  console.log('1',args);
});
eventBus2.on("test", (args) => {
  console.log('2',args);
});
eventBus.emit("test", "test");