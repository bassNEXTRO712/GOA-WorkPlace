#შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. 
# გადაუარეთ ამ სიას for ციკლით და ჩაამატეთ მხოლოდ ლუწი რიცხვები ახალ სიაში.
#  საბოლოოდ დააბრუნეთ ეს სია
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
numbers_ofsum = []
def easy_math():
    for num in numbers:
        if num % 2 == 0:
            numbers_ofsum.append(num)
    print(numbers_ofsum)
            
easy_math()           
           
            
