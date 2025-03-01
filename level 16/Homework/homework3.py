#შექმენით რიცხვების სია და დაბეჭდეს სიის თითოეული რიცხვის ფაქტორიალი

numbers = [5, 7, 3, 2, 6]

for number in numbers:
    product = 1

    for i in range(1, number + 1):
        # product = product * i
        product *= i
    
    print(product)