#შექმენით ფუნქცია, რომელიც არგუმენტად იღებს რიცხვების სიას და აბრუნებს
#  მას კლებადობის მიხედვით დასორტირებულს


def reversed_nums(numbers):
    return sorted(numbers, reverse=True)
print(reversed_nums([102,123,14345,3322,2134,213]))
