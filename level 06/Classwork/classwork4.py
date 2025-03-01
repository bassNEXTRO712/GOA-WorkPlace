#შექმენით კალკულატორის პროგრამა სადაც მომხარებელი შემოიტანს ორ რიცხვს და
#  4 არითმეტიკული ოპერაციიდან ერთერთს. შეასრულეთ ამ ორ რიცხვს შორის არჩეული
#  არითმეტიკული ოპერაცია

num1 = int(input("Enter Your First Number: "))
num2 = int(input("Enter Your Second Number :"))
operation = input("Choose Your Operation {%,*,+,-}: ")

if operation == "+":
    print(num1 + num2)
elif operation == "-" :
    print(num1 - num2)
elif operation == "/" :
    print(num1 % num2) 
else:
    print(num1 * num2)    