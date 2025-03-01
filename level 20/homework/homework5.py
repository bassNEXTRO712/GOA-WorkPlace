#შექმენით ფუნქცია, რომელსაც გადასცემთ რიცხვების სიას. გადაუარეთ გადმოცემულ სიას
#  for ციკლით და დააბრუნეთ ახალი სია, სადაც ჩამატებული იქნება გადმოცემული 
# სიიდან მხოლოდ ის რიცხვები, რომლებიც მეტია 10-ზე.
#  საბოლოოდ დააბრუნეთ ეს სია

numbers = [1,2,3,5,7,98,10,112,345,3432,3552,6,788]
second_list = []
def fastmath(easymath):
    for num in numbers:
        if num > 10:
            second_list.append(num)
        else:
            continue
fastmath("")
print(second_list)     

