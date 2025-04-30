#შექმენით რიცხვების სია, გადაუარეთ მას for loop-ით, გაიგეთ რამდენი ლუწი
#  და რამდენი კენტი რიცხვი გვაქვს სიაში და დაბეჭდეთ მათი რაოდენობა

numbers = [102,202,200,111,223,334,233,23245,5678]
kenti_ricxvebi = []
luwi_ricxvebi = []
for num in numbers:
    if num % 2 == 0:
        luwi_ricxvebi.append(num)
    else:
        kenti_ricxvebi.append(num)
print(luwi_ricxvebi)        
print(len(luwi_ricxvebi))