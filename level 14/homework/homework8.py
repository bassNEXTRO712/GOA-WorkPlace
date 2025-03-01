#შექმენით ხილების სია სადაც გექნებათ მინიმუმ 10 ელემენტი,
#  while loop-ის გამოყენებით წაშალეთ სიის ბოლო ელემენტი
#  იქამდე სანამ სიაში არ დარჩება ორი ელემენტი.
#  ყოველი ელემენტის წაშლისას დაბეჭდეთ ხილების სია

fruits = ["Orange","Banana","Cocos","apple","Pinapple","Strawberry","Peach","Nuts","Cherry","Mulberry"]
while len(fruits) > 2:
    fruits.pop()
    print(fruits)
    