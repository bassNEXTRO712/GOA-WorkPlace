 #შექმენით ფუნქცია, რომელიც იღებს წინადადებას, სადაც ყოველი სიტყვის შორის ერთზე მეტი დაშორებაა(space).
 #  თქვენი დავალებაა ჩამოაშოროთ გადმოცემულ წინადადებას ზედმეტი space-ები(სიტყვებს შორის მხოლოდ ერთი უნდა იყოს). 
 # საბოლოოდ დააბრუნეთ ეს წინადადება


def my_cutter(senteces):
    split_sentece = senteces.split()
    joined_word = " ".join(split_sentece)
    return joined_word
my_text = "Hello     Man   Whats Up!!"
function_text = my_cutter(my_text)
print(function_text)