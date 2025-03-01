#1) შექმენით ფუნქიცა, manual_find, რომელსაც გადაეცემა არგუმენტად სთრინგი და ერთი სიმბოლო,
#  რომელიც უნდა ვიპოვოთ ამ სთრინგში. თუ სიმბოლო მოიძებნა დააბრუნეთ მისი ინდექსი, 
# სხვა შემთხვევაში დააბრუნეთ -1

def manual_find(word,symbol):
    for i in word:
        if i == symbol:
            return word.find(symbol)
        
    return -1
            
print(manual_find("hidroeleqtrosadguri", "s")) 
