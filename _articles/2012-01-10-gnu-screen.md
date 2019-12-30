---
layout: post
title: GNU Screen
description: GNU Screen is a full-screen window manager that multiplexes a physical terminal between several processes.
redirect_from: /2012/01/10/gnu-screen/
---

[GNU Screen][1]{:target="_blank"} is a full-screen window manager that multiplexes a physical
terminal between several processes, typically interactive shells. With this
tool, you can keep a process running after disconnecting an SSH session.

### Basic usage

Create a new screen session:

    $ screen -S sessionname

Resumes a detached screen session:

    $ screen -r sessionname

List all of the screen sessions:

    $ screen -ls

Kill a session:

    $ screen -S sessionname -X quit

Close all screen sessions:

    $ killall screen

Useful key bindings:

`Ctrl` + `a`, `d` Detach screen from this terminal  
`Ctrl` + `a`, `c` Create a new window  
`Ctrl` + `a`, `space` Switch to the next window  
`Ctrl` + `a`, `backspace` Switch to the previous window  
`Ctrl` + `a`, `A` Rename current window  
`Ctrl` + `a`, `"` List of all windows for selection  
`Ctrl` + `a`, `k` Destroy current window  
`Ctrl` + `a`, `?` Show key bindings  

Multiple shells open in the same terminal:

`Ctrl` + `a`, `|` Split vertically  
`Ctrl` + `a`, `S` Split horizontally  
`Ctrl` + `a`, `tab` Switch the input focus to the next region  
`Ctrl` + `a`, `X` Kill the current region  
`Ctrl` + `a`, `Q` Delete all regions but the current one  


### A worry-free session

    $ ssh me@server.com
    $ screen -S sessionname
    $ start something really important

Disconnect from the server (panic at other times without screen).

    $ ssh me@server.com
    $ screen -r sessionname

Everything is fine, keep working.


### Automate your work

After disconnection, you can log into the remote machine and reattach the session in a single step:

    $ ssh me@server.com -t "screen -r sessionname"

How can we improve this? [autossh][2]{:target="_blank"} is the answer.

autossh, automatically restarts an SSH session and reattaches a session transparently:

    $ ssh me@server.com
    $ screen -S sessionname
    <Ctrl + a, d>
    $ exit
    $ autossh me@server.com -t "screen -r sessionname"

In fact, autossh include a script called *rscreen* for perpetual sessions.

OK, it works. But it's not so great because first you need to connect to the
server, create a new screen session, detach the screen, exit from the server
and finally connect it again with autossh.

What can we do? You can use `screen -R` to reattach a session or even create it
first. Finally we solve all problems:

    $ autossh me@server.com -t "screen -R sessionname"


[1]: http://www.gnu.org/software/screen/
[2]: https://www.harding.motd.ca/autossh/
