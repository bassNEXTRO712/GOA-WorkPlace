#შექმენით ფუნქცია, რომელსაც გადაეცემა ორი რიცხვების სია, გადაურეთ
#  ორივეს for ციკლით და გაიგეთ თითოეულ სიაში რიცხვების ჯამი(შეინახეთ ცალკე ცვლადებში),
#  გაამრავლეთ
#  ორივე ერთმანეთზე და დააბრუნეთ



def multiply_sums(list1, list2):
    sum1 = sum(list1)
    sum2 = sum(list2)
    
    result = sum1 * sum2
    
    return result
list1 = [1, 2, 3]
list2 = [4, 5, 6]

result = multiply_sums(list1, list2)
print(result) 
