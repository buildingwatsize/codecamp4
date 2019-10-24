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

## Ideas

### For Day 1

- Thanks "Parenthesis Matching Problem in JavaScript @ The Hacking School Hyd" - via <https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911>

### For Day 2

- -
