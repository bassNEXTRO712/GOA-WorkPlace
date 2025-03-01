#შექმენით ფუნქცია, რომელსაც გადაეცემა სიმბოლოების სია.
#  ფუნქციამ უნდა დააბრუნოს ეს სია პირველი
#  და ბოლო ელემენტების გარეშე, გამოიყენეთ slicing-ი



#def myfunction(remover):
def symbol_remover(list):
    return symbols[1:-1]
symbols = ["!","$","^","*","_"]
sum = symbol_remover(["!","$","^","*","_"])
print(sum)

 
    
