# Project: Recursion
This repo contain solution two classical problems using recursion. producing two script program `fibs` and `merge` that could run on the terminal. This project is a requirement of the [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion)

## Requirement && Objectives
My Objectives include
- practice and demonstrating skill in developing algortihms
- practice recursion
- complete the requiremnt for each problems 
- practice more tdd

### fibs-rec.js (Fibonnaci Sequence)
The Fibonacci Sequence is a numerical sequence where each number is the sum of the two number before it. E.g 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

### merge-sort.js (Merge sort)
Merge sort is an Algorithm which uses the `divide and conquer` approach of recursion. It is able to reduce a sorting problem to a smaller and smaller sub-problems.

Merge sort can be much faster than other algorithms such as bubble sort on the right data sets. Essentially merge sort recurses through an array of unsorted data until it reaches its smallest sub-set, a single item. Of course an array with a single item is considered sorted. Merge sort then merges the single items back together in sorted order

## Perequisite
Have node & git already installed

## Getting Started
- clone this repo
```bash
 git clone
```
- install all package
```bash
 npm install
```

## Usage

### list the fibonnaci sequence up to the nth term by

```bash 
 npm run fibs <n>
```
e.g `npm run fibs 8` leads to  `Result: 0,1,1,2,3,5,8,13`


## Technology Used
- language & runtime: JS and node
- testing: Jest
- linting & Formatting: Eslint & Prettier
- transpiling: babel

