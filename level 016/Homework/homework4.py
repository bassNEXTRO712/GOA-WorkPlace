#შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ 
# სიაში ყველაზე პატარა რიცხვი

#numbers = [344,2435,32535,2342341,12314,124143,335,32245,32332,3225]
#min_number = [min]
#for num in numbers:
#      if num < min_number:
#        min_number = num


numbers = [344,2435,32535,2342341,12314,124143,335,32245,32332,3225]

min_number = numbers[0]
for num in numbers:
    if num < min_number:
        min_number = num
print( min_number)
