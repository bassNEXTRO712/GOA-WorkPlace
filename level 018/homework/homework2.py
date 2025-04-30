#შექმენით string-ების სია, გადაუარეთ მას for loop-ით და დაბეჭდეთ სიაში არსებული 
# ყველა სიტყვის სიმბოლოთა რაოდენობა

games = ["PUBG", "EFOOTBALL","CREW2", "TokyDrift"]
sum = len(games)
#print(sum)
#print(games[1]) 
sum = 0 
for x in games:
    sum += len(x)
print(sum)


    
