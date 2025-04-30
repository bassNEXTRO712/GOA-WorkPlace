#8) მომხარებელს შემოატანინეთ მისი ასაკი და სახელი,
#  შემდეგ შეამოწმეთ არის თუ არა ის სრულწლოვანი და 
# უდრის თუ არა მისი სახელი თქვენს სახელს

user_name = input("Enter Your Name: ")
user_age = int(input("Enter Your Age:"))
my_name = "Nika"
if user_age >= 18 and my_name == user_name:
    print("Welcome")
else:
    print("Enter Is Not Possible")    