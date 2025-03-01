#შექმენით სახელების სია სადაც გექნებათ მინიმუმ 10 სახელი, დაბეჭდეთ ამ სიიდან მხოლოდ
#  ის სახელები რომლების
#  ინდექსებიც არის ლუწი

users = ["Nika","Luka","Gio","Mari","George","John","Irakli","Nino","Qeti","Zura"]

for index in range(len(users)):
    if index % 2 == 0:
        print(users[index])
