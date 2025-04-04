#Complete the method/function so that it converts dash/underscore delimited words into camel casing.
#  The first word within the output should be capitalized only if the original word was capitalized 
# (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

def to_camel_case(text):
    words = text.replace('-', ' ').replace('_', ' ').split()

    for i in range(1, len(words)):
        words[i] = words[i].capitalize()
    return ''.join(words)