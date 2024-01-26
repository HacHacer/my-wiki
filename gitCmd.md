# git容易忘记的一些命令

## 一.远程分支

1.更新远程分支

```git
git remote update origin --pure
或者
git remote update origin --p
```

2.git回退操作
`~`符号是回退后面接回退的步数
`^`有几个代表回退几步

```git
git reset --hard reflog里的索引
git reset --hard HEAD~1
git reset --hard HEAD^^
```

## git 的issue状态

TO DO（待定），Progressing（进行中），Resolved（已解决），Done（已完成），Reopen（重新打开），Pending(搁置)，Feedback（反馈）。
