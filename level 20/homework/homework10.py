#შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. შექმენით ახალის სია,
#  სადაც ჩაამატებთ გადმოცემული სიიდან მხოლოდ იმ სახელებს, რომლებიც იწყება "N"-ზე`.
#  საბოლოოდ დააბრუნეთ ეს სია

def name_filther(names_list):
    
    filtered_names = [name for name in names_list if name.startswith("N")]
    return filtered_names
names = ["Nina", "Nika", "Mari", "Nana", "Luka", "Nia"]
result = name_filther(names)
print(result) 



        
      
            



