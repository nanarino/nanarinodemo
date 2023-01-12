git命令
=======

配置::

    # 查看全局配置
    git config --global --list
    # 查看仓库配置
    git config --local --list
    # 配置全局用户名邮箱
    git config --global user.name "☘"
    git config --global user.email "kogawananari@gmail.com"
    # 配置仓库用户名邮箱
    git config --local user.name "☘☘"
    git config --local user.email "☘☘☘☘☘☘☘☘☘☘☘☘☘☘"



拉取::

    # 克隆
    git clone http://10.10.10.101/☘☘☘☘/☘☘☘☘.git


切分支::
    
    # 查看本地分支
    git branch
    # 创建本地分支
    git branch 本地名
    # 删除本地分支
    git branch -d 本地名
    # 查看远程分支
    git branch -a
    # 删除远程分支
    git push origin -d 远程名
    # 创建本地分支并切换到
    git checkout -b 本地名
    # 远程分支拉到本地 并切换到
    git checkout -b 本地名 origin/远程名
    # 本地切换分支
    git checkout 本地名
    # 刷新远程分支
    git remote update origin -p


提交::

    # 获取分支最新
    git pull
    # 推送所有分支提交
    git push --all origin


回滚::

    # 查看本地分支提交以及合并记录
    git reflog
    # 回滚到某次记录后
    git reset --hard 编号
    # 强制推送
    git push origin 远程名 --force