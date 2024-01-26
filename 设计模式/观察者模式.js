class Subject  {
  addObserver(observer) {
    this.observers.push(observer);
  }
  constructor() {
    this.observers = [];
  }
  notify(params) {
    this.observers.forEach((observer) => {
      observer.update(params);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(params) {
    // subject就是一个store，每次更新state，所有组件都会更新
    console.log(`${this.name} 收到消息${params.observerName}`);
  }
}

// const subject = new Subject();
// const observer1 = new Observer("张三");
// const observer2 = new Observer("李四");

// subject.addObserver(observer1);
// subject.addObserver(observer2);

// subject.notify({observerName: "发生了事件"});

// 发布订阅模式

