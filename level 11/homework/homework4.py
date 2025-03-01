#დაბეჭდეთ ყველა რიცხვი 1-დან 30-მდე, რომელიც იყოფა 3-ზე
# (გამოიყენეთ while loop
 
#num = 1
#hile num <= 30:
#     if num % 3 == 0: 
#
#         print(num)  
#     num += 1 

# ცვლადები
sum_of_even = 0  
count_of_even = 0  
num = 1
while num <= 100:
    if num % 2 == 0:  
        sum_of_even += num 
        count_of_even += 1 
    num += 1 
if count_of_even > 0:
    average = sum_of_even / count_of_even
    print("sashvalo aritmetikuli:", average)




