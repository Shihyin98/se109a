# 1. AVL-Tree Introduction
* **AVL Tree (Adelson-Velsky and Landis Tree)**，自平衡二元搜尋樹。在AVL樹中，**任一節點對應的兩棵子樹的最大高度差為1**，又稱**高度平衡樹**。
* AVL-Tree 為中序(Inorder)，也就是LVR，L數值 < V數值 < R數值
> |左子樹走到底的步數 - 右子樹走到底的步數| ≦ 1

* 平衡因子的算法：為該節點往左子樹走到底的步數和往右子樹走到底的步數相減：
    * 相減後的值為-1、0、1則為平衡，**若非這三個數則為不平衡**。(從最下層的節點，依序往上算)
    * 而不平衡的時候則進行旋轉的動作，旋轉的方式分為LL、RR、LR、RL，而且旋轉完候一樣要保持Inorder(中序)的順序。

* **解決BST遇到連續遞增或遞減數字無法平衡，導致樹圖過度傾斜，樹的高度可能很接近節點數量。**

* Review about BST：
    * Binary Search Tree(簡稱BST)，它滿足2個特性:
        * 左邊子樹的所有節點都比root來的小
        * 右邊子樹的所有節點都比root來的大
    * BST 和 AVL-Tree 的比較說明，詳細參考：
        * [Self-balanced Binary Search Trees with AVL in JavaScript_adrianmejia_2019](https://adrianmejia.com/self-balanced-binary-search-trees-with-avl-tree-data-structure-for-beginners/)

### Pseudocode (虛擬碼)
* 完整的Pseudocode可以參考此文檔
    * [Pseudocode for AVL Balanced Binary Search Tree Methods](https://www.cs.swarthmore.edu/~brody/cs35/f14/Labs/extras/08/avl_pseudo.pdf)

* **For Example: Insertion in an AVL tree**
    * Step by Step：
        * Step 1: Start
        * Step 2: 儲存要插入的元素
        * Step 3: 執行 BST 以插入第一個元素
        * Step 4: 遍歷不平衡節點位置
        * Step 5: 步檢查節點的位置
        * Step 6: 有4種可能的安排：
            * Step 6-1: LL 型
            * Step 6-2: LR 型
            * Step 6-3: RL 型
            * Step 6-4: RR 型
        * Step 7: Stop

```markdown
    # Algorithm: recursiveInsert (node, key, value)
    /* 遞迴Insert（節點、鍵、值） */

    **Input: subtree root (node), key-value pair**

    if node is empty
        create new node with key-value pair and return it;
    endif
    /* Bottom out of recursion(遞迴底部):
        if 節點為空，使用鍵值對創建新節點並返回
        else 在適當的側插入 */

    if key < node.key

        /* First insert. */
        node.left = recursiveInsert (node.left, key, value)

        /* Then, check whether to balance.(檢查是否平衡) */
        if height(node.left) - height(node.right) > 1
            if insertion occurred on left side of node.left
                node = rotateLeftChild (node)
            else
                node = doubleRotateLeftChild (node)
            endif
        endif
        /* if 高度(節點.左側) - 高度(節點.右側) > 1
                    if 插入發生在節點的左側
                        節點 = 旋轉左子(節點)
                    else
                        節點 = 雙旋轉左子(節點)*/
    else

        /* Insert on right side(插入右側)*/
        node.right = recursiveInsert (node.right, key, value)

        /* Check balance.(檢查是否平衡) */
        if (height(node.right) - height(node.left) > 1
            if insertion occurred on right side of node.right
                node = rotateRightChild (node)
            else
                node = doubleRotateRightChild (node)
            endif
        endif
        /* if （高度（節點.右側） - 高度(節點.左側)> 1
            if 插入發生在節點的右側
                節點 = 旋轉右子(節點)
            else
                節點 = 雙旋轉右子(節點) */
    endif
    recomputeHeight (node); /* 重新計算高度差(節點); */
    return node;

    **Output: pointer to subtree**
```

### Reference
[[1] 3.3 AVL trees_Module3:Search Trees](https://www2.seas.gwu.edu/~simhaweb/alg/modules/module3/module3.html)<br>
[[2] AVL Trees-Dynamic Tree Balancing](https://www.eecs.yorku.ca/course_archive/2008-09/F/2011/slides/22-AVLtrees.pdf)<br>
[[3] AVL Tree | Set 1 (Insertion)](https://www.geeksforgeeks.org/avl-tree-set-1-insertion/)<br>
[[4] 【小馬的資結演算法秘笈】(13) Binary Search Tree，方便二分查找的樹_iThome_心原一馬_2020](https://ithelp.ithome.com.tw/articles/10231507)<br>
[[5] AVL Tree_javatpoint](https://www.javatpoint.com/avl-tree-insertion)<br>
[[6] Data Structure and Algorithms - AVL Trees_tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)<br>
[[7] Advantages of AVL tree](https://www.w3schools.in/data-structures-tutorial/avl-trees/)<br>
[[8] AVL-Tree (AVL樹)_痞客幫_2016](https://oblivious9.pixnet.net/blog/post/191198338)<br>
[[9] Algorithms #5: AVL Tree using JavaScript_softnami_2019](https://www.softnami.com/posts_pr/algorithms-5avl-tree-using-javascript.html)<br>
[[10] 12-1 平衡樹和AVL_Youtube_學習資源_2019](https://www.youtube.com/watch?v=NAiBAph8cGk)
