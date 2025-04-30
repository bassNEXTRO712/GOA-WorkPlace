# შექმენით სია სადაც გექნებათ 10 რიცხვი, თქვენი დავალებაა 
# გაიგოთ ამ სიაში ყველა ლუწი და კენტი რიცხვიოს ჯამი და დაბეჭდოთ
luwebi = 0
kentebi = 0
nums = [1,2,3,4,5,6,7,8,9,10]
for i in nums:
    if i % 2 == 0:
        print(i) 
        luwebi += i  
    else:
        kentebi += i    

print(f"luwebi: {luwebi}")
print(f"kentebi: {kentebi}")
        
        