# typescript的特殊语法记录

## 索引类型查询操作符(keyof)

### 索引访问操作符T[K]

``` typescript
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
```

### 索引类型和字符串索引签名

keyof和 T[K]与字符串索引签名进行交互。 如果你有一个带有字符串索引签名的类型，那么 keyof T会是 string。 并且 T[string]为索引签名的类型：

```typescript
interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number
```

## 类型（interface）和类型别名（type）

``` typescript
interface Person{}
type a=Person
```

>区别
>
> 1. 类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）
> 2. 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名

## 映射类型

从旧类型中创建新类型的一种方式 — 映射类型。 在映射类型里，新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 readonly类型或可选的

```typescript
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };
```

## 标准库方法

``` typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
type Record<K extends string, T> = {
    [P in K]: T;
}
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

使用

``` typescript
type a=Record<'a'|'b',string>
// 等同于type a={a:string,b:string}
```
