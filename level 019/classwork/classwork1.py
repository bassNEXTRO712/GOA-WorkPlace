#შექმენით რიცხვების სია, შემდგარი მინიმუმ 10 ელემენტისგან
# გადაუარეთ ამ საის while loop-ის გამოყენებით. გაიგეთ ცალკე ლუწი 
# და კენტი რიცხვების ჯამი, საბოლოოდ შეადარეთ ისინი ერთმანეთს და დაპრინტეთ უდიდესი

# რიცხვების სიის შექმნა
numbers = [12, 7, 5, 20, 33, 2, 18, 19, 4, 10]

# ლუწი და კენტი რიცხვების ჯამის ინიციალიზაცია
luwebi = 0
kentebi = 0

i = 0

while i < len(numbers):
    if numbers[i] % 2 == 0: 
        luwebi += numbers[i]
    else: 
        kentebi += numbers[i]
    i += 1
if luwebi > kentebi:
    print(f"luwebi ({luwebi}) ufro didia vidre ({kentebi}).")
elif luwebi > kentebi:
    print(f"kenti ({kentebi}) ufro didia vidre ({luwebi}).")
else:
    print(f"TOLIA ({luwebi}).")





    

