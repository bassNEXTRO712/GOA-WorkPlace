"""მომხარებელს შემოატანინეთ რიცხვი და შეინახეთ ცვლადში,
  შემდეგ კი 0-დან შემოტანილი რიცხვის ჩათვლით შეამოწმეთ,
  თუ ლუწია დაბეჭდეთ რიცხვი is Even,
  სხვა შემთხვევაში რიცხვი is Odd;(მაგალითად 4,
 ლუწია ამიტომაც დაბეჭდავთ "4 is Even")"""


number = int(input("Please enter a number: "))

for num in range(0,number + 1):
    if num % 2 == 0:
        print(str(num) + " is Even")
    else:
        print(str(num) + " is Odd")
        