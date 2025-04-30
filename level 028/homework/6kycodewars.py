#Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

#It should remove all values from list a, which are present in list b keeping their order.


#https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

def array_diff(a, b):
    return [i for i  in a if i not in b]



