#შექმენით სია სადაც ჩაამატებთ ყველა რიცხვს 1-დან 50-ის ჩათვლით.
#  შემდეგ გადაუარეთ for loop-ით და ამ სიიდან წაშალეთ ყველა კენტი რიცხვი.
#  საბოლოოდ დაპრინტეთ მიღებული სია

#numbers = []
#for num in  range(1,51, 1):
#    while numbers % 2 != 0:
#        print(num)




numbers = list(range(1, 51))


for number in numbers[:]:  
    if number % 2 != 0: 
        numbers.remove(number)
print("sum:", numbers)

