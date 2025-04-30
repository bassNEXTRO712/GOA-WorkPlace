#მომხმარებელს შემოატანინეთ რიცხვი 1-დან 100-ის ჩათვლით
# (ეს იქნება მისი ქულა).
#  თუ მაგალითად 90-დან 100-ის ჩათვლით ექნება ქულა გამოუტანეთ
#  "Your grade is A", თუ 80-დან 90-მდე, გამოუტანეთ 
# "Your grade is B", თუ 70-დან 80-მდე გამოუტანეთ
#  "Your grade is C", სხვა შემთხვევაში გამოუტანეთ "Your grade is D"



    #usernum == 70 or usernum <= 79
    #print("Your Grade IS C")


#usernum = int(input("Enter Your Score: "))
#f usernum >= 90 or usernum == 100 :
#    print("Your Grade IS A")
#elif usernum  <= 89 or usernum == 80:
#    print("Your Grade IS B")
#else:
#    print("Your Grade Is D")   
# 
# score = int(input("Please enter your score: "))

score = int(input("Enter Your Score:"))
if score >= 90 and score <= 100:
    print("Your grade is A")
elif score >= 80 and score < 90:
    print("Your grade is B")
elif score >= 70 and score < 80:
    print("Your grade is C")
else:
    print("Your grade is D")
 





