#2) შექმენით ფუნქცია manual_count, რომელსაც არგუმენტად გადაეცემა რიცხვბის სია,
#  და ერთი რიცხვი, რომლის რაოდენობაც უნდა ვიპოვოთ ამ სიაში. დააბრუნეთ მიღებული რაოდენობა

def manual_count(first,second):
    sum_of_num = 0
    for i in first:
        if i == second:
            sum_of_num += 1
    return sum_of_num
print(manual_count([1, 2, 3, 4, 3, 3, 5,5,6,7,5,5,5,4,4,4,3,3,2,], 5))      
