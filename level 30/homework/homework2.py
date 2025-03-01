#2) შექმენით სია, სადაც გექნებათ 5 ელემენტი. 
# წაშალეთ სიის მე-3 ელემენტი და დაამატეთ ახალი მე-0 ინდექსზე. საბოლოოდ დააბრუნეთ ეს სია

numbers = [1,2,3,4,5]
first = numbers.pop(2)
answer = first
second = numbers.insert(0,answer)
print(numbers)