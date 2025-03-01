# დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს
#  და დაბეჭდავს ეს რიცხვი დადებითია, უარყოფითია თუ 0-ია

num = int(input("Enter Your Number : "))
if num > 0 :
    print("Number Agree!")
elif num == 0:
    print("Number is 0")   
else:
    print("Number Disagree!")    