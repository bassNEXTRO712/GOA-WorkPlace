#თქვენი დავალებაა შექმნათ მარტივი ჩატ-ბოტი, რომელიც კოდის გაშვებისთანავე მიესალმება 
# მომხარებელს და ჰკითხავს "How are your?", თუ მომხარებელი შეიყვანს,
#  "Normal" დაბეჭდეთ "Bot:I hope you will get better", სხვა შემთხვევაში
#  თუ შემოიყვანს "Great", დაუბეჭდეთ "Bot:Good! Have a nice day", ხოლო
#  თუ შემოიყვანა "Sad" ან "Super Sad" დაუბეჭდეთ "Bot:It's sad". საბოლოოდ
#  დაბეჭდეთ "Good bye!" და გათიშეთ while ციკლი. ამისათვის მას გადაეცით სწორი 
# პირობა(მინიშნება: შექმენით ცვლადი რომლის მნიშვნელობა თავიდან იქნება False, while
#  ციკლს პირობად გაუწერეთ ეს ცვლადი, თუ მომხარებელმა სწორი ინფორმაცია შემოიყვანა 
# მისი ნიშვნელობა გახდება True და როცა ყველა პირობა შესრულდება while ციკლი გაითიშება).

#თუ მომხარებელი შემოიყვანს ისეთ ინფორმაციას რაზეც თქვენი ბოტი არ არის დაპროგრამირებული,
#  დაბეჭდეთ "Bot: Sorry, I didn't understand, repeat."(ამ შემთხვევაში while ციკლისთვის შექმნილი ცვლადის მნიშვნელობა არ იცვლება და ციკლი არ წყვეტს მუშაობას)

#დაგჭირდებათ: while loop; input; if/else; and or.

#თქვენი სურვილით დაამატეთ სხვა ფუნქციები და გააუმჯობესეთ ჩატ-ბოტი

name = input("Enter Your Name:")            

print("ChatBot:" + "Hello" + " " + name + "!" + " " + "How Are You?")
#rint("ChatBot:" + "Hello" + " " + name + "!" + " " + "How Are You?")
answer1 = input("You Can Type Here.....")
if answer1 == "Normal" :
    print("ChatBot:I hope you will get better <3")
elif answer1 == "Great":
    print("ChatBot:Good! Have a nice day <3")
elif answer1 == "Sad" and "Super Sad":
    print("ChatBot:It's sad")
else:
    print("ChatBot: Sorry, I didn't understand, repeat")
answer2 = input("Type Here.....")
if answer2 == "Thanks":
    print("Good Bye I m Glad If i Help With Something")
    while answer2 != "Thanks":
        print("I Did Not Repeat")
 
       
        
