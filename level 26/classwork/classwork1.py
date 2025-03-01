#1) შექმენით ფუნქცია, manual_capitalize რომელიც იქნება capitalize ფუნქციის კლონი

def manual_capitalize(word):
    if not word:
        return word
    
    return word[0].upper() + word[1:].lower()
text = "All Ways Going In Rome"
final_answer = manual_capitalize(text)
print(final_answer)
