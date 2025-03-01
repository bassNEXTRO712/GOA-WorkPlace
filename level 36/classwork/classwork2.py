
def capitals(word):
    nums = []
    for i in range(len(word)):
        if word[i].isupper():
            nums.append(i)
    return nums        
       #  https://www.codewars.com/kata/539ee3b6757843632d00026b/train/python
