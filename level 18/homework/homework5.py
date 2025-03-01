#შექმენით რიცხვების სია, სადაც გექნებათ დუბლიკატები. გადაუარეთ მას for loop-ით და 
# დაბეჭდეთ მხოლოდ ისეთი რცხვების ჯამი,
#  რომლებიც არ მეორდება სიაში
numbers = [1,2,3,4,5,6,7,8,1,2,3,4,]
duplicatebi = []
araduplicatebi = []
for i in numbers:
    if numbers.count(i) == 1:
        araduplicatebi.append(i)
    elif numbers.count(i) > 1 and i not in duplicatebi:
        duplicatebi.append(i)

final_sum = sum(araduplicatebi)
print(final_sum)



print(f"duplicatebi{duplicatebi}")
print(f"araduplicatebi{araduplicatebi}")        








    
