#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას while
#  ციკლით და ჩაამატეთ გაორმაგებული რიცხვები ახალ სიაში.
#  საბოლოოდ დააბრუნეთ ეს სია

def double_numbers(numbers):
    doubled_list = []
    i = 0
    while i < len(numbers):
        doubled_list.append(numbers[i] * 2)  
        i += 1
    return doubled_list
numbers = [1, 2, 3, 4, 5]
result = double_numbers(numbers)


print(result)









