#codewars
#You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

#If the string's length is odd, return the middle character.
#If the string's length is even, return the middle 2 characters.
#https://www.codewars.com/kata/56747fd5cb988479af000028

def get_middle(s):
    length = len(s)
    middle = length // 2
    
    if length % 2 == 0:
        return s[middle - 1:middle + 1] 
    else:  
        return s[middle]  
