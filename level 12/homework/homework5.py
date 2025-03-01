#მომხარებელს შემოატანინეთ რიცხვი და გაიგეთ არის თუ არა ის მარტივი,
#  თუ მარტივია დაპრინტეთ "Number is prime", სხვა შემთხვევაში 
# "Number is not prime"(მარტივია რიცხვი, რომელიც იყოფა მარტო თავის თავზე და ერთზე)

num = int(input("Enter Your Number : "))
if num // num and num// 1 :
    print("Number Is Prime!")
else:
    print("Number Is Not Prime!")
    