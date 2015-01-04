---
layout: post
title: Command line one-liners
redirect_from: /2013/11/29/command-line-one-liners/
---

I attended the [SoCraTes UK][1]{:target="_blank"} unconference. We had a space for lightning talks
and I did a presentation about command line one-liners.

I love Unix and I was talking about terminal commands, so I used [Terminal
Keynote][2]{:target="_blank"} - a hack for terminal-based talks.

<sup>Contribute to the list with your own commands in the [command line one-liners
repository][3]{:target="_blank"}.</sup>

![Terminal Keynote][4]

## Command line one-liners

Run the last command

{% highlight bash %}
$ !!
{% endhighlight %}

Run the last command as root

{% highlight bash %}
$ sudo !!
{% endhighlight %}

Create a script of the last executed command

{% highlight bash %}
$ echo "!!" > script.sh
{% endhighlight %}

Reuse all parameter of the previous command line

{% highlight bash %}
$ echo cd .
$ !*
{% endhighlight %}

Run the last command with some argument

{% highlight bash %}
$ echo a b c d e
$ echo !!:2
$ echo !!:3-$
{% endhighlight %}

Insert the last argument of the previous command

{% highlight bash %}
$ cp script.sh /usr/bin/
$ cd <ESC> .
{% endhighlight %}

Runs previous command but replacing

{% highlight bash %}
$ echo no typos
$ ^typos^errors
{% endhighlight %}

Escape any command aliases

{% highlight bash %}
$ alias ls="ls -a"
$ \ls
{% endhighlight %}

Quickly rename a file

{% highlight bash %}
$ mv filename.{old,new}
$ mv filename.{png,jpg}
{% endhighlight %}

Create a quick back-up copy of a file

{% highlight bash %}
$ cp file.txt{,.bak}
{% endhighlight %}

Run a command from the history

{% highlight bash %}
$ history
 ...
 1225  ls -l
 1226  git status
 1227  history
$ !-3
$ !1225
{% endhighlight %}

Search the history for the most recent command beginning with 'text'

{% highlight bash %}
$ !text
{% endhighlight %}

List of commands you use most often

{% highlight bash %}
$ history | awk '{print $2}' | sort | uniq -c | sort -rn | head
{% endhighlight %}

Execute a command without saving it in the history

{% highlight bash %}
$ <space>command
{% endhighlight %}

Make directory including intermediate directories

{% highlight bash %}
$ mkdir -p a/long/directory/path
{% endhighlight %}

Create a directory and change into it

{% highlight bash %}
$ mkdir dir && cd $_
{% endhighlight %}

Change to the previous working directory

{% highlight bash %}
$ cd -
{% endhighlight %}

Jump to a directory. Execute a command. Jump back to current directory

{% highlight bash %}
$ (cd /tmp && ls)
{% endhighlight %}

Create simple text file from command line

{% highlight bash %}
$ cat > file.txt
{your text here}
{your text here}
<ctrl-d>
{% endhighlight %}

Empty a file

{% highlight bash %}
$ > file.txt
{% endhighlight %}

Show PATH in a human-readable way

{% highlight bash %}
$ echo $PATH | tr ':' '\n'
$ tr ':' '\n' <<< $PATH
{% endhighlight %}

Make 'less' behave like 'tail -f'

{% highlight bash %}
$ less +F somelogfile
{% endhighlight %}

Redirect standard input to a file. Print it to standard output

{% highlight bash %}
$ command | tee file.txt | less

┌─────────┐  ┌─────────┐  ┌─────────┐
│ command │─▸│   tee   │─▸│ stdout  │
└─────────┘  └────┬────┘  └─────────┘
                  │
                  ▾
            ┌───────────┐
            │   file    │
            └───────────┘
{% endhighlight %}

Search for a <pattern> string inside all files in the current directory

{% highlight bash %}
$ grep -RnsI --color=auto <pattern> *

Beyond grep

_   /|
\'o.O'
=(___)=
  U    ack!

$ ack <pattern>
{% endhighlight %}

Recursively remove all empty directories

{% highlight bash %}
$ find . -type d -empty -delete
{% endhighlight %}

Count your commits

{% highlight bash %}
$ git shortlog -sn
{% endhighlight %}

Serve current directory tree at http://$HOSTNAME:8000/

{% highlight bash %}
$ python -m SimpleHTTPServer
{% endhighlight %}

Share a file between two computers

{% highlight bash %}
$ nc -l 5566 > data-dump.sql
$ nc <his-ip-address> 5566 < data-dump.sql
{% endhighlight %}

Download an entire website

{% highlight bash %}
$ wget -m http://website.com
{% endhighlight %}

Clear the terminal screen

{% highlight bash %}
<ctrl-l>
{% endhighlight %}

Salvage a borked terminal

{% highlight bash %}
$ reset
{% endhighlight %}

Close shell keeping all subprocess running

{% highlight bash %}
$ disown -a && exit
{% endhighlight %}

Run a command immune to hangups

{% highlight bash %}
$ nohup command &
{% endhighlight %}

Attach screen over ssh

{% highlight bash %}
$ ssh user@host -t screen -r
{% endhighlight %}

Compare a remote file with a local file

{% highlight bash %}
$ ssh user@host cat /path/to/remotefile | diff /path/to/localfile -
{% endhighlight %}

Get your public IP address

{% highlight bash %}
$ curl ifconfig.me
{% endhighlight %}

Set audible alarm when an IP address comes online

{% highlight bash %}
$ ping -a IP_address
{% endhighlight %}

List programs with open ports and connections

{% highlight bash %}
$ lsof -i
{% endhighlight %}

Currently mounted filesystems in nice layout

{% highlight bash %}
$ mount | column -t
{% endhighlight %}

Display free disk space

{% highlight bash %}
$ df -h
{% endhighlight %}

Display disk usage statistics for the current directory

{% highlight bash %}
$ du -sh *
{% endhighlight %}

Display 10 biggest files/folders for the current directory

{% highlight bash %}
$ du -s * | sort -nr | head
{% endhighlight %}

Execute a command at a given time

{% highlight bash %}
$ echo "ls -l" | at midnight
{% endhighlight %}

Simple stopwatch

{% highlight bash %}
$ time read
<ctrl-d>
{% endhighlight %}

Put a console clock in top right corner

{% highlight bash %}
$ while sleep 1;do tput sc;tput cup 0 $(($(tput cols)-29));date;tput rc;done &
{% endhighlight %}

Display the top ten running processes. (Sorted by memory usage)

{% highlight bash %}
$ ps aux | sort -nk +4 | tail
{% endhighlight %}

Kill all Ruby processes

{% highlight bash %}
$ ps aux | grep ruby | awk '{ print $2 }' | xargs kill -9
$ ps aux | awk '/ruby/ && ! /awk/ { system("kill -9 "$2) }'
{% endhighlight %}

32 bits or 64 bits?

{% highlight bash %}
$ getconf LONG_BIT
{% endhighlight %}

Displays a calendar

{% highlight bash %}
$ cal 12 1984
{% endhighlight %}

What day is today?

{% highlight bash %}
$ cal | sed "s/.*/ & /;s/ $(date +%d) / [] /"
$ cal | sed "s/.*/ & /;s/ $(date +%d) / $(printf '\e[0;31m[]\e[0m') /"
{% endhighlight %}

Show File System Hierarchy

{% highlight bash %}
$ man hier
{% endhighlight %}

Quick access to the ascii table

{% highlight bash %}
$ man ascii
{% endhighlight %}

Russian Roulette in Bash

{% highlight bash %}
$ [ $[ $RANDOM % 6 ] == 0 ] && rm -rf / || echo "You live"
{% endhighlight %}

Watch Star Wars via telnet

{% highlight bash %}
$ telnet towel.blinkenlights.nl
{% endhighlight %}


[1]: http://socratesuk.org/
[2]: https://github.com/fxn/tkn
[3]: https://github.com/arturoherrero/command-line-one-liners
[4]: /assets/images/command-line-one-liners.png
