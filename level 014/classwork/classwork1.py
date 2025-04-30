     # 0  1   2  3 4  5  6  7  8  9
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = []
odds = []

# 0 1 2 3 4 5 6 7 8 9
# print(range(len(numbers)))
        
for index in range(len(numbers)):
    if numbers[index] % 2 == 0:
        evens.append(numbers[index])
    else:
        odds.append(numbers[index])