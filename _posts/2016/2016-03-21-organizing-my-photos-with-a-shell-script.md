---
layout: post
title: Organizing my photos with a shell script
description: My plan was to organize my photo library by using the EXIF data stored in each file.
tags: programming
---

I've been taking a lot of pictures since last year. As a consequence of my
newly acquired hobby, I now have tens of gigabytes of data stored on my
computer. I decided to organize and store all those files in a remote hard
drive.

My plan was to organize my photo library by using the EXIF data stored in each
file, following this structure: `YYYY/MM/Photographs`.

This is my current directory:

```shell
$ tree
.
├── IMG_3039.JPG
├── IMG_3383.jpg
└── IMG_3909.JPG
```

Here is how I'd like to structure it:

```shell
$ tree
.
├── 2015
│   └── 09
│       └── IMG_3039.JPG
└── 2016
    ├── 01
    │   └── IMG_3383.jpg
    └── 03
        └── IMG_3909.JPG
```

Finally, the shell script that's going to do the job:

```shell
#!/usr/bin/env bash

shopt -s nocaseglob

for file in *.jpg; do
  dir=$(identify -format %[exif:DateTime] $file | cut -d: -f1,2 | tr : /)
  mkdir -p $dir
  mv $file $dir/$file
done

rsync -rh --progress --stats ./ remote:/media/Photos
```
