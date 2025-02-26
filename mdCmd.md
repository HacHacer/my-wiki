# 一.标题

<h2 id="jump">此处</h2>


## 123123 标题升降级 (c+s+]/[)

## 二.分割线

使用三个或以上的`-` 或者`*`
注意不要被识别成二级标题
中甲或前面可以加空格

---

---

## 三。斜体和粗体

使用`*` 和`**`表示斜体和粗体
_斜体_ **粗体** **_又粗又斜_**

**斜体**(ctrl+b)
_粗体_ (ctrl+i)
**_又粗又斜_** （c+i+b)

扩展：
~~123123~~ （alt+s）
$dasd213123$ (c+m)

## 四。超链接和图片

超链接和图片的写法里类似，图片仅在超链接前多了一个`!`
两种写法，分别是：[第一种写法](https://www.baidu.com)
和[第二种写法][1]
[链接][2]

图片：![图片][1]

[1]: https://www.baidu.com/
[2]: https://www.baidu.com/

## 五。无序列表

使用 `-` 、`+`和`*`
表示无序列表，前后留一行空白，可嵌套，例如

- 一层
  - 二层
    - 三层
    - 三层半
      - 四层半
  - 四层

---

---

## 六。有序列表

使用`1.` （点号后面有个空格）表示有序列表，可嵌套，例如

1. 一层
2. 二层
   1. 二层
   2. 三层
      1. 四层
      2. 五层

---

## 七。文字引用

使用`>`表示，可以有多个`>`，表示成绩更深

> 引用 1
>
> > 引用二
> >
> > > 三
> > > 跳不出来
> 跳出来

---

## 八。行内代码块

上面用了很多次了，使用\`表示，例如
`行内代码块`

扩展：很多字符是需要转移。使用反斜杠`\`进行转义

---

## 九。代码块

使用四个空格缩进表示代码块

    funciton (){
        console.log(1)
    }

一些 IDE 支持行数提示和着色，一般使用三个 \` 表示，例如

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```javascript {.line-numbers}
function add(x, y) {
  return x + y
}
```

---

## 十。表格

第二行的---:表示对齐方式，默认左对齐，还有哦右对齐和居中
| 商品     | 数量 |  单价  |
| -------- | ---: | :----: |
| 苹果     |   10 |  ￥ 1   |
| 电脑 222 |  200 | ￥ 2132 |

---

## 十一、数学公式

使用 `$` 表示，其中一个 \$ 表示在行内，两个 \$ 表示独占一行。
例如质量守恒公式：$$E=mc^2$$
支持 **LaTeX** 编辑显示支持，例如：$\sum_{i=1}^n a_i=0$， 访问 [MathJax][2] 参考更多使用方法。

推荐一个常用的数学公式在线编译网站： [https://www.codecogs.com/latex/eqneditor.php][3]

[3]: https://www.codecogs.com/latex/eqneditor.php

---

## 十二、支持 HTML 标签

### 1. 例如想要段落的缩进，可以如下

&nbsp;&nbsp;不断行的空白格&nbsp;或&#116600;  
&ensp;&ensp;半方大的空白&ensp;或&#881194;  
&emsp;&emsp;全方大的空白&emsp;或&#8195;

---

## 十三，流程图(需要看 IDE 是否支持)

主要的语法为 name=>type:describe,其中 type 主要又以下几种：

1. 开始和结束:`start` `end`
2. 输入和输出:`inputoutput`
3. 操作:`operation`
4. 条件:`condition`
5. 子程序:`subroutine`

```flow
st=>start: Start:https://www.zybuluo.com
io=>inputoutput: verification
op=>operation: your operation
cond=>condition: yes or no?
sub=>subroutine: yes or no?
e=>end

st->io->op->cond
cond(yes)->e
cond(no)->sub->io
```
[跳转文首](#jump)