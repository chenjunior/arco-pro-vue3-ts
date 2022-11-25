# 提交代码到 git 仓库流程(本项目只能用命令行的方式提交代码到 git 仓库)

# 第一步:先暂存需要提交的文件
git add XXX

# 第二步:提交暂存的文件,但必须携带commit的类型
git commit -m 'type: XXXXX'

type可以为以下类型:
    feat: 新特性
    fix: 修改问题
    refactor: 代码重构
    docs: 文档修改
    style: 代码格式修改, 注意不是 css 修改
    test: 测试用例修改
    chore: 其他修改, 比如构建流程, 依赖管理.

# 第三步: 推送到远程仓库
git push