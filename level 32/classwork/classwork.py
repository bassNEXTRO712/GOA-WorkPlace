#Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
#  You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
#  Be careful, there shouldn't be a space at the beginning
#  or the end of the sentence!

def smash(words):
    answer = " ".join(words)
    return answer
    
#------------------------------------------------------------------------------------------------------------


#Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
#  that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
#  Each function returns one number.

def minimum(arr):
    ans1 =  min(arr)
    return ans1

def maximum(arr):
    ans2 = max(arr)
    return ans2
    return (f"max{ans1} min(ans2)" )
    

#---------------------------------------------------------------------------------------------------------------------

#Build a function that returns an array of integers from n to 1 where n>0.
#Example : n=5 --> [5,4,3,2,1]

def reverse_seq(n):
        return list(range(1, n+1))[::-1]




#--------------------------------------------------------------------------------------------------



#Complete the solution so that the function will break up camel casing, using a space between words.
  

def solution(s):
    result = []
    word = ""

    for char in s:
        if char.isupper() and word:
            result.append(word) 
            word = char 
        else:
            word += char
    result.append(word)  
    return ' '.join(result)



