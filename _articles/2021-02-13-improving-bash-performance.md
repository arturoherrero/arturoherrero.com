---
layout: post
title: Improving Bash performance
description: Performance is User eXperience.
---

I have gradually noticed the degradation of my terminal's performance when
working with relatively large Git repositories. I use Bash as my Unix shell and
keep [my dotfiles][1]{:target="_blank"} organised, so it's relatively easy to
investigate and improve performance.


### Improving git-status

The first thing I noticed was the poor performance when showing the working
tree status with `git status`.

```
It took 2.34 seconds to enumerate untracked files. 'status -uno'
may speed it up, but you have to be careful not to forget to add
new files yourself (see 'git help status').
```

I'd  still like to show untracked files, so the solution was not to use other
options but to improve the performance. I tried some commands like `git prune` or
`git gc` with no improvement. I also discovered some relevant options when working
with large repositories, one of the most interesting being [`feature.manyFiles`][2]{:target="_blank"}
, which enables config options that optimize for repositories with many files in
the working directory.

```sh
$ git config feature.manyFiles true
```

But what really has made a substantial difference is [Scalar][3]{:target="_blank"}.
[Scalar was created by Microsoft][4]{:target="_blank"} and they want to
accelerate the Git workflow, no matter the size of the repository. The tool sets
advanced Git config options, maintains the repositories in the background,
and helps reducing data sent across the network.

I've installed the tools:
```sh
$ brew tap microsoft/git
$ brew install --cask scalar
$ brew install watchman
```

And then, from the working directory of the Git repository, I've registered it:
```sh
$ scalar register
```

Although I sometimes have [problems with watchman invocations][8]{:target="_blank"}.


### Improving Git prompt status performance

Another element with very poor performance is my prompt <sup>([f982e10][5]{:target="_blank"})</sup>
, which uses the `__git_ps1` function:

{% raw  %}
```sh
PROMPT_COMMAND="__git_ps1 "'${USR_COLOR}${USR}${OFF}@${HOST}:${LPURPLE}${DIR}${OFF} "\$ " "{%s}"'
```
{% endraw  %}

The main problem is that if you want to see if there are untracked files,
then you have to set `GIT_PS1_SHOWUNTRACKEDFILES` to a nonempty value, but this check
consumes a lot of time.

Since git-status now has a good performance, I've created a custom function
which provides similar functionality to `__git_ps1` based on the output from
`git status`. This is my new prompt <sup>([1d0df6d][6]{:target="_blank"})</sup>:

```sh
PROMPT_COMMAND="__system_prompt_command"
```


### Improving Bash startup time

The last thing I've improved is the startup time of the shell. As I have my
dotfiles split in several files, I've re-used an idea from [even faster bash
startup][7]{:target="_blank"} to profile each file:

```sh
for file in $(__system_dotfiles_dir)/system/*; do
  TIMEFORMAT="$file: %R"
  time source $file
  unset TIMEFORMAT
done
```

Finally, I've removed redundant Bash completions that I was loading, changed
`$(brew --prefix)` with the absolute path, and updated the rbenv initialization:
```diff
- eval "$(rbenv init -)"
+ eval "$(rbenv init --no-rehash -)"
+ (rbenv rehash &) 2> /dev/null
```



[1]: https://github.com/arturoherrero/dotfiles
[2]: https://git-scm.com/docs/git-config#Documentation/git-config.txt-featuremanyFiles
[3]: https://github.com/microsoft/scalar
[4]: https://devblogs.microsoft.com/devops/introducing-scalar/
[5]: https://github.com/arturoherrero/dotfiles/blob/f982e10/system/prompt.sh
[6]: https://github.com/arturoherrero/dotfiles/blob/1d0df6d/system/prompt.sh
[7]: https://work.lisk.in/2020/11/20/even-faster-bash-startup.html
[8]: https://github.com/microsoft/scalar/issues/386
