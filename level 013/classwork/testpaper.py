# შექმნათ სია 10 რიცხვისგან
numbers = [12, 17, 4, 9, 6, 13, 10, 21, 8, 5]

# ლუწი რიცხვების და კენტი რიცხვების ჯამი
even_sum = 0
odd_sum = 0

# შევამოწმოთ ყველა რიცხვი
for number in numbers:
    if number % 2 == 0:
        even_sum += number  # ლუწი რიცხვი
    else:
        odd_sum += number   # კენტი რიცხვი

# დაბეჭდეთ შედეგები
print(f"ლუწი რიცხვების ჯამი: {even_sum}")
print(f"კენტი რიცხვების ჯამი: {odd_sum}")
