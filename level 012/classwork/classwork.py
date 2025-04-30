#მომხარებელს შემოატანინეთ ორი რიცხვი, აიყვანეთ ისინი მე-3 ხარისხში და გაიგეთ მათი ჯამი,
#  თუ ჯამი ლუწია დაპრინტეთ "Result is Even",
#  სხვა შემთვევაში "Result is Odd"

num1 = int(input("Enter Your First Number:"))
num2 = int(input("Enter Your Second Number:"))

sum = num1 ** 3 + num2 ** 3
print(sum)
if sum % 2 == 0:
    print("Result Is Even")
else:
    print("Result Is Odd")    

