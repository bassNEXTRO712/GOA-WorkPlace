#შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. თქვენი დავალებაა ამ წინადადების სიტყვები შეაბრუნოთ და
#  დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული)


def my_reversed(word):
    splited = word.split()
    reversed_word = splited[::-1]
    joined = " ".join(reversed_word)
    return joined
text = "Hello Georgia I m Here For You"
final_answer = my_reversed(text)
print(final_answer)