#3) შექმენით ფუნქცია manual_len, რომელსაც გადაეცემა სთრინგი ან სია, ხოლო ფუნქციამ უნდა დააბრუნოს გადმოცემული
#  სთრინგის/სიის სიგრძე
# (არ გამოიყენოთ len-ი)

def manual_len(word):
    len_of_sum = 0
    for i in word:
        len_of_sum += 1
    return len_of_sum
        
text = "HIDROELECTROSADGURI" 
final_answer = manual_len(text) 
print(final_answer) 

        
