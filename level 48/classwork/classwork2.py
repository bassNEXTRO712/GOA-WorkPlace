#What is considered Valid?
#A string of braces is considered valid if all braces are matched with the correct brace.

#Examples
#"(){}[]"   =>  True
#"([{}])"   =>  True
#"(}"       =>  False
#"[(])"     =>  False
#"[({})](]" =>  False

def valid_braces(s):
    while "()" in s or "[]" in s or "{}" in s:
        s = s.replace("()", "")
        s = s.replace("{}", "")
        s = s.replace("[]", "")
    
    return s == ""