Prioritiy printer
===

## Explain

Basic printers print subsripts in order. So, impotant subscript printed later. For fixing this, printer which print important subsript first was developed. printer developed logic below.

```
1. Get first subscript(`J`) in waiting list
2. If any important subscript exists in waiting list, push back `J` in waiting list.
3. If not, print `J`
```

For example, 4 subscripts(`A`, `B`, `C`, `D`) are in waiting list, important levels are "2 1 3 2", print C D A B order.

I wanna know what number my subscript is printed. In example above, C is first, A is third printed

I know array of importance of subscripts named `priorities` and position of my subscript in waiting list named `location`. Write a function that return what number my subscript is printed.

**Constraint**
 - 1 or more and 100 or less subscripts in waiting list
 - location have 0 or more length of waiting list -1 or less, 0 means position of first in waiting list.

**Ex**
|priorities|location|return|
|:---|:---|:---|
|[2, 1, 3, 2]|2|1|
|[1, 1, 9, 1, 1, 1]|0|5|





source : https://programmers.co.kr/learn/courses/30/lessons/42587
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges