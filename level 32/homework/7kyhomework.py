#Simple, given a string of words, return the length of the shortest word(s).
#String will never be empty and you do not need to account for different data types.


def find_short(s):
    words = s.split()
    return min(len(word) for word in words)

#----------------------------------------------------------------------------------------------


#Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be
#  case insensitive. The string can contain any char.



#----------------------------------------------------------------------------------------------


#Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be
#case insensitive. The string can contain any char.

def xo(s):
    first_movie = s.lower()
    
    counter_x = first_movie.count("x")
    counter_o = first_movie.count("o")
    return counter_x == counter_o




#An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function
#that determines whether a string that contains only letters is an isogram. Assume the empty string is 
#an isogram. Ignore letter case.
def is_isogram(string):
    word = string.lower()
    return len(word) == len(set(word))



#----------------------------------------------------------------------------------------------


#ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits
#  or exactly 6 digits.
#If the function is passed a valid PIN string, return true, else return false.
def validate_pin(pin):
     return len(pin) in (4, 6) and pin.isdigit()




#-----------------------------------------------------------------------------------------------


#Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending),
#  the longest possible,
#  containing distinct letters - each taken only once - coming from s1 or s2.

def longest(s1, s2):
   
    combined = set(s1 + s2)
    
    
    return ''.join(sorted(combined))





#Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the original word was capitalized 
# (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

def to_camel_case(text):
    words = text.replace('-', ' ').replace('_', ' ').split()

    for i in range(1, len(words)):
        words[i] = words[i].capitalize()
    return ''.join(words)