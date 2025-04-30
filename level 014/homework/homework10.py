#შექმენით ორი ცარიელი სია, for loop-ის გამოყენებით მომხარებელს 5-ჯერ შემოატანინეთ 
# ნებისმიერი სიტყვა. თუ შემოტანილი სიტყვის სიგრძე არ აღემატება 5-ს ჩაამატეთ პირველ სიაში,
#  სხვა შემთხვევაში მეორეში. საბოლოოდ დაბეჭდეთ ორივე სია


footballers = []
bassketballers = []
for i in range(5):
    user = input("Your Favorite Sportgamer:")
    if len(user) <= 5:
        footballers.append(user)
    else:
        bassketballers.append(user)
        print(user)
print(footballers)   
print(bassketballers)     