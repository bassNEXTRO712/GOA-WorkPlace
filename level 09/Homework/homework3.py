#3) შექმენით პროგრამა რომელიც მომხმარებელს
#  შეეკითხება pin კოდს (4 ციფრიანი კოდი) მანამდე სანამ არ შეიყვანს 1234-ს

#userpin = 1234
#pin = input("Enter Your Pin : ")
#if userpin == pin :
#    print("Loggin Success")

#pin = 1234
#userpin = input("Enter Your Pin : ")
#if pin != userpin :
#    print("Pin Is Not Correct")
#else:
#   print("Welcome")


#userpin = input("Enter Your Pin :")
#pin = "1234"
#while userpin != pin :
#    print("Pin Is Wrong!!")

while True:
    user_input = input("Enter Your Pin: ")
    pin = "1234"
    if user_input == pin:
        print("Loggin Succesfull!")
        break
    else:
        print("Pin Is Wrong Try again!")




   

