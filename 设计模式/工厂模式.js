class Product {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class ProductA extends Product {
  constructor() {
    super("ProductA");
  }
}
class ProductB extends Product {
  constructor() {
    super("ProductB");
  }
}

class Factory {
  createProduct(name) {
    if (name === "ProductA") {
      return new ProductA();
    } else if (name === "ProductB") {
      return new ProductB();
    }
  }
}
class Client {
  constructor(factory) {
    this.factory = factory;
  }
  createProduct(name) {
    const product = this.factory.createProduct(name);
    console.log(`Client: Created ${product.getName()}`);
    return product;
  }
}
const client = new Client(new Factory());
const productA = client.createProduct("ProductA");
const productB = client.createProduct("ProductB");
console.log("object :>> ", productA.getName());
