#5) შექმენით რიცხვების სია სადაც გექნებათ დადებითი და უარყოფითი რიცხვები,
#  შემდეგ შექმენით ახალი სია სადაც გექნებათ მხოლოდ უარყოფითი რიცხვები
#  და დაბეჭდეთ ის(გამოიყენეთ while).
numbers = [5, -7, 3, 2, -11, 6, 8, -10, 12, 15, -17, 19, -21]

negative_numbers = []

index = 0

while index < len(numbers):
    if numbers[index] < 0:
        negative_numbers.append(numbers[index])
    index += 1

print(negative_numbers)