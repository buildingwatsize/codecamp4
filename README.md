# codecamp4

## How to run as 4-step

```bash
  ### Step 1/4: Clone this project
  git clone https://github.com/buildingwatsize/codecamp4.git

  ### Step 2/4: Install Package
  npm install

  ### Step 3/4: Change directory into code
  ### PLEASE REPLACE X WITH A NUMBER ###
  cd src/dayX
  
  ### Example src/day1 ###
  ### cd src/day1

  ### Step 4/4: Run test
  npm run test
```

## Test Cases

### Day 1

- [x] ให้สตริง "([])[]({})" ควรคืนค่า true
- [x] ให้สตริง "([)]" ควรคืนค่า false
- [x] ให้สตริง "((()" ควรคืนค่า false
- [x] ให้สตริง "[])]{{}" ควรคืนค่า false
- [x] ให้สตริง "{" ควรคืนค่า false
- [x] ให้สตริง "{}[]([])" ควรคืนค่า true

### Day 2

- [x] ให้สตริง sun และ sun ไม่มีตัวอักษรที่ต่างกันเลย ควรคืนค่า 0
- [x] ให้สตริง usn และ usn ไม่มีตัวอักษรที่ต่างกันเลย ควรคืนค่า 0
- [x] ให้สตริง nus และ sun ทั้งหมดมีตัวอักษรตัวที่ 1 และ 3 ที่ต่างกัน ควรคืนค่า 2
- [x] ให้สตริง sun และ nus ทั้งหมดมีตัวอักษรตัวที่ 1 และ 3 ที่ต่างกัน ควรคืนค่า 2
- [x] ให้สตริง sun และ usn ทั้งหมดมีตัวอักษรตัวที่ 1 และ 2 ที่ต่างกัน ควรคืนค่า 2
- [x] ให้สตริง usn และ sun ทั้งหมดมีตัวอักษรตัวที่ 1 และ 2 ที่ต่างกัน ควรคืนค่า 2
- [x] ให้สตริง usn และ nus ทั้งสามไม่เหมือนกันเลย ควรคืนค่า 3
- [x] ให้สตริง nus และ usn ทั้งสามไม่เหมือนกันเลย ควรคืนค่า 3
- [x] ให้สตริง cherry และ cherry ไม่มีตัวอักษรที่ต่างกันเลย ควรคืนค่า 0
- [x] ให้สตริง cherry และ cryher ทั้งหมดมีตัวอักษรตัวที่ 2,3,4,5,6 ที่ต่างกัน ควรคืนค่า 5
- [x] ให้สตริง cryher และ cherry ทั้งหมดมีตัวอักษรตัวที่ 2,3,4,5,6 ที่ต่างกัน ควรคืนค่า 5
- [x] ให้สตริง cheryr และ cherry ทั้งหมดมีตัวอักษรตัวที่ 5 และ 6 ที่ต่างกัน ควรคืนค่า 2
- [x] ให้สตริง cherry และ cheryr ทั้งหมดมีตัวอักษรตัวที่ 5 และ 6 ที่ต่างกัน ควรคืนค่า 2
- [x] ให้สตริง hercyr และ cherry ทั้งหกไม่เหมือนกันเลย ควรคืนค่า 6
- [x] ให้สตริง cherry และ hercyr ทั้งหกไม่เหมือนกันเลย ควรคืนค่า 6

### Day 3

- [x] ให้สตริง AAAABBBCCDAA ควรคืนค่า 4A3B2C1D2A
- [x] ให้สตริง FFDDDWEWEEEZZZZZ ควรคืนค่า 2F3D1W1E1W3E5Z
- [x] ให้สตริง GGGSSSDDWWSSDDDHHHE ควรคืนค่า 3G3S2D2W2S3D3H1E
- [x] ให้สตริง OOSDFPDLLLLLWEEEESWWW ควรคืนค่า 2O1S1D1F1P1D5L1W4E1S3W
- [x] ให้สตริง EADFDDDDFFFFFCNNNNDDDDDDDDDD ควรคืนค่า 1E1A1D1F4D5F1C4N10D
- [x] ให้สตริง EADFDDDDF!!SS ควรคืนค่า 1E1A1D1F4D1F2!2S

### Day 4

- [x] ให้ [[30, 75]] ควรคืนค่า 1
- [x] ให้ [[30, 75], [0, 50]] ควรคืนค่า 2
- [x] ให้ [[30, 75], [80, 120]] ควรคืนค่า 1
- [x] ให้ [[30, 75], [0, 50], [60, 150]] ควรคืนค่า 2
- [x] ให้ [[30, 75], [0, 50], [60, 150], [45, 50]] ควรคืนค่า 3
- [x] ให้ [[30, 75], [0, 50], [60, 150], [45, 50]] ควรคืนค่า 2
- [x] ให้ [[30, 75], [0, 50], [60, 150], [45, 50], [90, 120]] ควรคืนค่า 3
- [x] ให้ [[30, 75], [0, 10], [10, 150], [45, 50], [90, 120]] ควรคืนค่า 3
- [x] ให้ [[0, 10], [10, 20], [20, 30], [30, 40], [40, 50]] ควรคืนค่า 2

### Day 5

- [x] ให้อาร์เรย์ ['G', 'B', 'R', 'R', 'B', 'R', 'G'] ควรคืนค่า ['R', 'R', 'R', 'G', 'G', 'B', 'B']
- [x] ให้อาร์เรย์ [ 'G', 'B', 'G', 'G' ] ควรคืนค่า ['G', 'G', 'G', 'B']
- [x] ให้อาร์เรย์ [ 'G', 'R', 'B', 'R', 'G', 'G' ] ควรคืนค่า ['R', 'R', 'G', 'G', 'G', 'B']
- [x] ให้อาร์เรย์ [ 'B', 'R' ] ควรคืนค่า ['R', 'B']
- [x] ให้อาร์เรย์ [ 'G', 'G' ] ควรคืนค่า [ 'G', 'G' ]
- [x] ให้อาร์เรย์ ['G', 'G', 'G', 'B', 'R', 'B', 'B'] ควรคืนค่า ['R', 'G', 'G', 'G', 'B', 'B', 'B']
- [x] ให้อาร์เรย์ ['G', 'R', 'G', 'R', 'B', 'R', 'G', 'G'] ควรคืนค่า ['R', 'R', 'R', 'G', 'G', 'G', 'G', 'B']
- [x] ให้อาร์เรย์ [ 'R', 'B', 'G' ] ควรคืนค่า ['R', 'G', 'B']]
- [x] ให้อาร์เรย์ [ 'B', 'G' ] ควรคืนค่า ['G', 'B']
- [x] ให้อาร์เรย์ [ 'R', 'B', 'B', 'B', 'B', 'R' ] ควรคืนค่า ['R', 'R', 'B', 'B', 'B', 'B']

### Day 6

- [x] ให้ node ของเลข 50, 30, 40, 60, 70 และ 30 ควรคืนค่า 60
- [x] ให้ node ของเลข 63, 70, 25, 71, และ 33 ควรคืนค่า 70
- [x] ให้ node ของเลข 92, 98, 47, 73, 57, 69, 71, 52 ,96 และ 44 ควรคืนค่า 96
- [x] ให้ node ของเลข 94, 4, 68, 75, 31, 50 และ 64 ควรคืนค่า 75
- [x] ให้ node ของเลข 9, 13, 98, 11 ควรคืนค่า 13
- [x] ให้ node ของเลข 100, 1, 98, 3, 99, 2 ควรคืนค่า 99

### Day 7

- [x] ให้อาร์เรย์ของ [1] ควรคืนค่า [[], [1]]
- [x] ให้อาร์เรย์ของ [1, 2] ควรคืนค่า [[], [1], [2], [1, 2]]
- [x] ให้อาร์เรย์ของ [1, 2, 3] ควรคืนค่า [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
- [x] ให้อาร์เรย์ของ [1, 2, 3, 4] ควรคืนค่า [[] [ 1 ] [ 2 ] [ 1, 2 ] [ 3 ] [ 1, 3 ] [ 2, 3 ] [ 1, 2, 3 ] [ 4 ] [ 1, 4 ] [ 2, 4 ] [ 1, 2, 4 ] [ 3, 4 ] [ 1, 3, 4 ] [ 2, 3, 4 ] [ 1, 2, 3, 4 ]]

## Ideas

### For Day 1

- Thanks "Parenthesis Matching Problem in JavaScript @ The Hacking School Hyd" - via <https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911>

### For Day 2

- -

### For Day 3

- Thanks "Javascript Split String by Multiple Occurrences of Letters" - via <https://stackoverflow.com/questions/21997437/javascript-split-string-by-multiple-occurrences-of-letters>
  
### For Day 4

- -

### For Day 5

- -

### For Day 6

- -

### For Day 7

- Thanks "How to find all subsets of a set in JavaScript?" - via <https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript>

## Conditions

We are running on code sandbox, please click to this [link](https://codesandbox.io/s/codecamp4-7bhgw).

## Rules

- No if else trap the test cases
- No other dependencies needed except the following
  - @babel/core
  - @babel/preset-env
  - @babel/node
  - babel-jest
  - chalk
  - figlet
  - jest
  - jest-extended

Fork this project, You would to be the master of JavaScript.

## Running on your local machine

### METHOD-1

1. Fork this project
2. This project gonna be under your username
3. Go to your github username
4. Type `git clone` following by your HTTPS and SSH url
5. Type `npm install` then It will install all dependencies
6. Begin the code kata

### METHOD-2

1. Download this project directly as a zip file
2. Type `npm install` then It will install all dependencies
3. Begin the code kata

### METHOD-3

1. Clone this project directly
2. `cd` into this project directory
3. Type `npm install` then It will install all dependencies
4. Begin the code kata

## Syncing a fork

You should to type `git remote -v`. If there are not upstream remote, you need to define one.

1. Open your terminal
2. List the current configured remote repository for your fork.

    ```bash
    $ git remote -v
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    ```

3. Specify a new remote upstream repository that will be synced with the fork.
4. Verify the new upstream repository you've specified for your fork.

    ```bash
    $ git remote -v
    > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
    > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
    ```

If you have defined the upstream remote then pleases type the following commands

1. Open Terminal.
2. Change the current working directory to your local project.
3. Type `git fetch upstream` to fetch changes in upstream remote.

    ```bash
    $ git fetch upstream
    > remote: Counting objects: 75, done.
    > remote: Compressing objects: 100% (53/53), done.
    > remote: Total 62 (delta 27), reused 44 (delta 9)
    > Unpacking objects: 100% (62/62), done.
    > From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY>  * [new branch]
    ```

4. Type `git checkout master` Check out your fork's local `master` branch.

    ```bash
    $ git checkout master
    > Switched to branch 'master'
    ```

5. Type `git merge upstream/master` to merge your local master branch and your fork master branch together.

    ```bash
    $ git merge upstream/master
    > Updating a422352..5fdff0f
    > Fast-forward
    >  README                    |    9 -------
    >  README.md                 |    7 ++++++
    >  2 files changed, 7 insertions(+), 9 deletions(-)
    >  delete mode 100644 README
    >  create mode 100644 README.md
    ```

## Note

This code kata creates for Thai developers. Therefore, the content in the test cases prepared in Thai.
