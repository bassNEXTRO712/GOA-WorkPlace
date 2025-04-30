# შექმენით რიცხვების სია, while loop-ის გამოყენებით გაიგეთ ამ სიაში ყველა ლუწი რიცხვის
#  ჯამი და დაპრინტეთ



numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0
starter = 0  
while starter < len(numbers):
    if numbers[starter] % 2 == 0:  
        sum += numbers[starter]  
    starter += 1 

print(sum)



   