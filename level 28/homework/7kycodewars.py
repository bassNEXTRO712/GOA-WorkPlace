#Complete the solution so that it returns true if the first argument(string) 
# passed in ends with the 2nd argument (also a string).

#Examples:

#solution('abc', 'bc') # returns true
#solution('abc', 'd') # returns false

#https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

def solution(text, ending):
   return text.endswith(ending)
solution("Hello","man")

#------------------------------------------------------------------------------------------------------------------------
#Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

#Your task is to write a function maskify, which changes all but the last four characters into '#'
# .https://www.codewars.com/kata/5412509bd436bd33920011bc
def maskify(cc):    
  if len(cc) <= 4:
   return cc

  return '#' * (len(cc) - 4) + cc[-4:]
print(maskify("4556364607935616"))
print(maskify("1288373783893"))

#An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

#Note: anagrams are case insensitive

#Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

#https://www.codewars.com/kata/529eef7a9194e0cbc1000255

def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())