#1) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას, ფუნქციამ ამ წინადადების თითოეული სიტყვა უნდა 
# შეინახოს სიაში, როგორც ცალკე ელემენტი.
#  საბოლოოდ გადააქციეთ სია ისევ წინადადებად, სადაც სიტყვებს შორის არის მძიმე და ერთი დაშორება(", "


def my_function(sentese):
    split_word = sentese.split()
    result_sentese = ", ".join(split_word)
    return result_sentese
    
first_text = "Hello I m Nika From Georgia 18 years old"    
x = my_function(first_text)  
print(x) 






