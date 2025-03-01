#Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
#Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

def reverse_number(n):
    sign = -1 if n < 0 else 1
    reversed_num = int(str(abs(n))[::-1])
    return sign * reversed_num

#-------------------------------------------------------------------------------------


#Your task is to write function factorial

def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

#-------------------------------------------------------------------------------------



#Complete the function/method so that it returns the url with anything after the anchor (#) removed.
def remove_url_anchor(url):
     return url.split('#')[0]



#------------------------------------------------------------------------------------------------

#You are given an odd-length array of integers, in which all of them are the same, except for one single number.
#Complete the method which accepts such an array, and returns that single different number.
#The input array will always be valid! (odd-length >= 3)

def stray(arr):
    result = 0
    for i in arr:
        result ^= i
    return result