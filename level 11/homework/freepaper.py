# ცვლადები
sum_of_even = 0  # ლუწი რიცხვების ჯამი
count_of_even = 0  # ლუწი რიცხვების რაოდენობა

# ციკლი 1-დან 100-მდე
num = 1
while num <= 100:
    if num % 2 == 0:  # თუ რიცხვი ლუწია
        sum_of_even += num  # ვამატებთ ლუწ რიცხვს ჯამში
        count_of_even += 1  # ვზრდით ლუწი რიცხვების რაოდენობას
    num += 1  # შემდეგი რიცხვისკენ გადავალთ

# საშუალო არითმეტიკული
if count_of_even > 0:
    average = sum_of_even / count_of_even
    print("ლუწი რიცხვების საშუალო:", average)
else:
    print("არ არის ლუწი რიცხვები")
