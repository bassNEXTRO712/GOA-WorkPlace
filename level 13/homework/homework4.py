#შექმენით სია შემდგარი სახელებისგან. მომხარებელს შემოატანინეთ მისი სახელი,
#  თუ მისი სახელი იქნება 5 სიმბოლოს ტოლი ან მეტი. ჩაამატეთ სიაში,
#  სხვა შემთხვევაში დაუბეჭდეთ "Name is too short

names = []

for i in range(5):
    name = input("Enter your name: ")
    
    if len(name) >= 5:
        names.append(name)
    else:
        print("Name is too short")