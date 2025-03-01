#შექმენთ ფუნქცია, რომელიც არგუმენტად იღებს სიმბოლოების სიას. დაასორტირეთ ეს სია ანბანის მიხედვით,
#  გადააქციეთ string-ად და დააბრუნეთ


def letters(word):
    first = sorted(word)  
    return ''.join(first) 
final = ['a', 'c', 'b', 'd', 'e']
print(letters(final))