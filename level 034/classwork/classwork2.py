#შექმენით manual_join ფუნქცია, რომელსაც გადაეცემა სთინგების სია და ერთი სთრინგი.
#  ამ ფუნქციამ უნდა შეართოს ეს სია და თითოეულ 
# ელემენტს შორის ჩასვას გადმოცემული სთრინგი
#არ გამოიყენოთ .join() ფუნქცია

def manual_join(separator, str_list):
    result = ""
    for i in range(len(str_list)):
        result += str_list[i]
        if i < len(str_list) - 1:  # ბოლო ელემენტზე არ ჩავამატოთ separator
            result += separator
    return result

strings = ["apple", "banana", "cherry"]
separator = "Frouts "
print(manual_join(separator, strings))
