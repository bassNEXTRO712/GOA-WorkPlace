#შექმენით ცვლადი, სადაც შეინახავთ string-ს. დაბეჭდეთ მისი თითოეული სიმბოლო და გვერდით
#  მიუწერეთ რიგით მერამდენეა ის.

#მგალითად: "Hello" >>> "H - 1", "e - 2"...

word = "Lamborghini"
for i in range(len(word)):
    print(f"{word[i]} - {i + 1}")