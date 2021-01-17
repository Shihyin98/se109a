# 1. A* Algorithm Introduction
* **A\* 演算法**是一種很常用的路徑查詢和圖形遍歷演算法，類似於廣度優先搜尋進行路徑搜尋。
* 從起點開始，首先遍歷起點周圍鄰近的點，然後再遍歷已經遍歷過的點鄰近的點，逐步的向外擴散，直到找到終點。
* 特別的地方是 A*演算法能在運算過程中，每次從優先佇列中選取 𝑓(𝑛)值最小（離終點最近）的節點作為下一個待遍歷的節點，同時擁有一套特殊評價公式(Heuristic Estimate)，來避免不必要的路徑排除，計算出一條最佳結果。

* $𝑓(𝑛) = 𝑔(𝑛) + ℎ(𝑛)$
    * 𝑛 ：目前節點
    * 𝑔(𝑛) ：從起始點到目前節點實際移動的距離
    * h(𝑛) ：預測目前節點到結束點的距離 (此為 A* 演算法的主要評價公式)
    * 𝑓(𝑛) ：目前節點的評價分數總和

### Pseudocode (虛擬碼)
* 透過 A*演算法，設計用來求出可以以最低成本通過的最佳路線，其為 Dijkstra算法的擴展，具有廣度優先搜索 (BFS)的特點。 會將鄰近的點進行相關的公式計算，依據不同的位置與終點的遠近，給予不同相對應的估算值，並經過一輪又一的搜索，直到抵達終點座標為止。

```markdown
make an openlist containing only the starting node
make an empty closed list

while (the destination node has not been reached):
    consider the node with the lowest f score in the open list

    if (this node is our destination node) :
        we are finished

    if not:
        put the current node in the closed list and look at all of its neighbors

        for (each neighbor of the current node):
            if (neighbor has lower g value than current and is in the closed list) :
                replace the neighbor with the new, lower, g value
                current node is now the neighbor's parent

            else if (current g value is lower and this neighbor is in the open list ) :
                replace the neighbor with the new, lower, g value
                change the neighbor's parent to our current node

            else if this neighbor is not in both lists:
                add it to the open list and set its g
```

### Reference
[[1] A* Search](https://brilliant.org/wiki/a-star-search/)<br>
[[2] A* Algorithm pseudocode](https://mat.uab.cat/~alseda/MasterOpt/AStar-Algorithm.pdf)<br>
[[3] AVL Tree | Set 1 (Insertion)](https://www.geeksforgeeks.org/avl-tree-set-1-insertion/)<br>
[[4] 【小馬的資結演算法秘笈】(13) Binary Search Tree，方便二分查找的樹_iThome_心原一馬_2020](https://ithelp.ithome.com.tw/articles/10231507)<br>

