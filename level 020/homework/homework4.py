#შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა სია.
#  ფუნქციამ უნდა დაბეჭდოს ეს სია შებრუნებულად(არ გამოიყენოთ slicing-ი)
def reverse_list(nums):
    reversed_list = []
    for i in range(len(nums)):
        reversed_list.insert(0, nums[i]) 
    
    print(reversed_list)
numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15]
reverse_list(numbers)




  