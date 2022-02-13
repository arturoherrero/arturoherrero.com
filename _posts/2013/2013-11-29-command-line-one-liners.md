---
layout: post
title: Command line one-liners
description: I attended the SoCraTes UK 2013 unconference and I did a presentation about command line one-liners.
tags: en
redirect_from: /2013/11/29/command-line-one-liners/
---

I attended the [SoCraTes UK 2013][1]{:target="_blank" rel="noreferrer"} unconference. We had a space for lightning talks
and I did a presentation about command line one-liners.

I love Unix and I talked about terminal commands so I used [Terminal
Keynote][2]{:target="_blank" rel="noreferrer"}, a hack for terminal-based talks.

<sup>Contribute to the list with your own commands in the [command line one-liners
repository][3]{:target="_blank" rel="noreferrer"}.</sup>

![Terminal Keynote][4]

## Command line one-liners

Run the last command

```shell
$ !!
```

Run the last command as root

```shell
$ sudo !!
```

Create a script of the last executed command

```shell
$ echo "!!" > script.sh
```

Reuse all parameter of the previous command line

```shell
$ echo cd .
$ !*
```

Run the last command with some argument

```shell
$ echo a b c d e
$ echo !!:2
$ echo !!:3-$
```

Insert the last argument of the previous command

```shell
$ cp script.sh /usr/bin/
$ cd <ESC> .
```

Run previous command but replacing

```shell
$ echo no typos
$ ^typos^errors
```

Escape any command aliases

```shell
$ alias ls="ls -a"
$ \ls
```

Quickly rename a file

```shell
$ mv filename.{old,new}
$ mv filename.{png,jpg}
```

Create a quick back-up copy of a file

```shell
$ cp file.txt{,.bak}
```

Run a command from the history

```shell
$ history
 ...
 1225  ls -l
 1226  git status
 1227  history
$ !-3
$ !1225
```

Search the history for the most recent command beginning with 'text'

```shell
$ !text
```

List of commands you use most often

```shell
$ history | awk '{print $2}' | sort | uniq -c | sort -rn | head
```

Execute a command without saving it in the history

```shell
$ <space>command
```

Make directory including intermediate directories

```shell
$ mkdir -p a/long/directory/path
```

Create a directory and change into it

```shell
$ mkdir dir && cd $_
```

Change to the previous working directory

```shell
$ cd -
```

Jump to a directory. Execute a command. Jump back to current directory

```shell
$ (cd /tmp && ls)
```

Create simple text file from command line

```shell
$ cat > file.txt
{your text here}
{your text here}
<ctrl-d>
```

Empty a file

```shell
$ > file.txt
```

Show PATH in a human-readable way

```shell
$ echo $PATH | tr ':' '\n'
$ tr ':' '\n' <<< $PATH
```

Make 'less' behave like 'tail -f'

```shell
$ less +F somelogfile
```

Redirect standard input to a file. Print it to standard output

```shell
$ command | tee file.txt | less

┌─────────┐  ┌─────────┐  ┌─────────┐
│ command │─▸│   tee   │─▸│ stdout  │
└─────────┘  └────┬────┘  └─────────┘
                  │
                  ▾
            ┌───────────┐
            │   file    │
            └───────────┘
```

Search for a <pattern> string inside all files in the current directory

```shell
$ grep -RnsI --color=auto <pattern> *

Beyond grep

_   /|
\'o.O'
=(___)=
  U    ack!

$ ack <pattern>
```

Recursively remove all empty directories

```shell
$ find . -type d -empty -delete
```

Count your commits

```shell
$ git shortlog -sn
```

Serve current directory tree at http://$HOSTNAME:8000/

```shell
$ python -m SimpleHTTPServer
```

Share a file between two computers

```shell
$ nc -l 5566 > data-dump.sql
$ nc <his-ip-address> 5566 < data-dump.sql
```

Download an entire website

```shell
$ wget -m http://website.com
```

Clear the terminal screen

```shell
<ctrl-l>
```

Salvage a borked terminal

```shell
$ reset
```

Close shell keeping all subprocess running

```shell
$ disown -a && exit
```

Run a command immune to hangups

```shell
$ nohup command &
```

Attach screen over ssh

```shell
$ ssh user@host -t screen -r
```

Compare a remote file with a local file

```shell
$ ssh user@host cat /path/to/remotefile | diff /path/to/localfile -
```

Get your public IP address

```shell
$ curl ifconfig.me
```

Set audible alarm when an IP address comes online

```shell
$ ping -a IP_address
```

List programs with open ports and connections

```shell
$ lsof -i
```

Currently mounted filesystems in nice layout

```shell
$ mount | column -t
```

Display free disk space

```shell
$ df -h
```

Display disk usage statistics for the current directory

```shell
$ du -sh *
```

Display 10 biggest files/folders for the current directory

```shell
$ du -s * | sort -nr | head
```

Execute a command at a given time

```shell
$ echo "ls -l" | at midnight
```

Simple stopwatch

```shell
$ time read
<ctrl-d>
```

Put a console clock in top right corner

```shell
$ while sleep 1;do tput sc;tput cup 0 $(($(tput cols)-29));date;tput rc;done &
```

Display the top ten running processes. (Sorted by memory usage)

```shell
$ ps aux | sort -nk +4 | tail
```

Kill all Ruby processes

```shell
$ ps aux | grep ruby | awk '{ print $2 }' | xargs kill -9
$ ps aux | awk '/ruby/ && ! /awk/ { system("kill -9 "$2) }'
```

32 bits or 64 bits?

```shell
$ getconf LONG_BIT
```

Displays a calendar

```shell
$ cal 12 1984
```

What day is today?

```shell
$ cal | sed "s/.*/ & /;s/ $(date +%d) / [] /"
$ cal | sed "s/.*/ & /;s/ $(date +%d) / $(printf '\e[0;31m[]\e[0m') /"
```

Show File System Hierarchy

```shell
$ man hier
```

Quick access to the ascii table

```shell
$ man ascii
```

Russian Roulette in Bash

```shell
$ [ $[ $RANDOM % 6 ] == 0 ] && rm -rf / || echo "You live"
```

Watch Star Wars via telnet

```shell
$ telnet towel.blinkenlights.nl
```


[1]: http://socratesuk.org/
[2]: https://github.com/fxn/tkn
[3]: https://github.com/arturoherrero/command-line-one-liners
[4]: /assets/images/posts/command-line-one-liners.png
