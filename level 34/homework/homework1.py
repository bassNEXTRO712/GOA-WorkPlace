
#ექმენით manual_replace ფუნქცია, რომელიც იქნება .replace() ფუნქციის კლონი. ამ ფუნქციამ სთრინგში არსებული sapce-ები უნდა შეცვალოს ტირეებად.
#არ გამოიყენოთ ჩაშენებული ფუნქციები და კომენტარებით ახსენით მე-4 დავალება
def manual_replace(word):
    result = ""
    for i in word:
        if i == " ":
            result += "-"
        else:
            result += i
    return result
txt = "Lets Do it Man"
print(manual_replace(txt))
