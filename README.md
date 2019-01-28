# hackdot 
[![build status](https://badgen.net/travis/vladimyr/hackdot/master)](https://travis-ci.com/vladimyr/hackdot) [![github license](https://badgen.net/github/license/vladimyr/hackdot)](https://github.com/vladimyr/hackdot/blob/master/LICENSE) [![js semistandard style](https://badgen.net/badge/code%20style/semistandard/pink)](https://github.com/Flet/semistandard)

# Usage

```sh
$ # read slashdot article in terminal with [`bat`](https://github.com/sharkdp/bat)
$ curl -s https://hackdot.now.sh/export/\
https://science.slashdot.org/story/19/01/27/0724256/\
lsd-changes-something-about-the-way-people-perceive-time-even-at-microdoses |\
bat -l markdown -p

$ # slug can be omitted
$ curl -s https://hackdot.now.sh/export/\
https://science.slashdot.org/story/19/01/27/0724256/ |\
bat -l markdown -p
```
