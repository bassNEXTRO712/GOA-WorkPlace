#1)მომხარებელს შემოატანინეთ მისი ასაკაი, შეინახეთ ის ცვლადში და შეადარეთ.
#  თუ ასაკი არის ლუზი დაბეჭდეთ თქვენი ასაკი არის ლუწი.
#  სხვა შემთხვევაში: თქვენი ასაკი არის კენტი

age = int(input("User Age: "))
for age in range(1, age + 1, 1,):
    if age % 2 == 0 :
        print(str(age) + " " + "Your Age is Even")
    else:
        print(str(age) + " " + "Your Age is Odd")



   # if age % 2 == 0 :
   # print(str(age) + " " + "Your Age is Even")
    #else:
    #print(str(age) + " " + "Your Age is Odd")





    






#)გამოიტანეთ 10-დან 50-ის ჩათვლით ყველა ლუწი რიცხვი. გამოიყენეთ for loop-ი