# მომხარებელს შემოატანინეთ ორი რიცხვი, აიყვანეთ ისინი მე-3 ხარისხში და გაიგეთ მათი ჯამი,
#  თუ ჯამი ლუწია დაპრინტეთ "Result is Even", სხვა შემთვევაში "Result is Odd"

number1 = int(input("Enter Your Number :"))
number2 = int(input("Enter Your Second Number : "))
#result =  (number1 ** 3) + (number2 ** 3)
number1 = number1 ** 3
number2 = number2 ** 3
result = number1 + number2
print(result)
if result % 2:
    print("Result is even")
else:
    print("Result is Even")    