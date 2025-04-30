#2) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში სიმბოლოების
#  რაოდენობას(ცალ-ცალკე)

def my_function(sentence):
    words = sentence.split()
    for i in words:
        x = print(f"'{i}' - {len(i)} symbols ")
text = "Hello Everyone I m new Here Lets Give Me Change Join your Team"
finall_answer = my_function(text) 
     

