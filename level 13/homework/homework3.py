#შექმენით ხილების სია, სადაც გექნებათ მინიმუმ 3 ელემენტი. მომხარებელს შემოატანინეთ
#  თავისი საყვარელი ხილი, თუ სიის ბოლო ელემენტის ინდექსი არის ლუწი ჩაამატეთ
#  შემოტანილი ხილი სიაში, სხვა შემთხვევაში არ ჩაამატოთ 


fruits = ["apple", "banana", "cherry", "orange"]

last_index = len(fruits) - 1

user_fav = input("Enter your favorite fruit: ")

if last_index % 2 == 0:
    fruits.append(user_fav)

print(fruits)

