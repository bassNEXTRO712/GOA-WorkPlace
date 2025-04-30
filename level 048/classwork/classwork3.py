#You will be given a number and you will need to return it as a string in Expanded Form. For example:
#
#   12 --> "10 + 2"
#   45 --> "40 + 5"
#70304 --> "70000 + 300 + 4"
#NOTE: All numbers will be whole numbers greater than 0.
#If you liked this kata, check out part 2!!


def expanded_form(num):
    str_num = str(num)
    result = []
    
    for i in range(len(str_num)):
        if str_num[i] != "0":
            result.append(str_num[i] + "0" * (len(str_num) - 1 - i))
    
    return " + ".join(result)