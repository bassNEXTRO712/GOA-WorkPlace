#შექმენით ცვლადი სადაც შეინახავთ სთრინგს და გაიგეთ, არის თუ არა
#  ის პალინდრომი(პალინდრომი არის ისეთი სიტყვა,
#  რომელიც ორივე მხრიდან ერთნაირად იკითხება, მაგალითად, "ana"...)

name = "oto"
if_palindrome = name == name[::-1]
if if_palindrome:
    print(f"its palindrome {name}")
else:
    print(f"This Is Not Palindrome{name}")

