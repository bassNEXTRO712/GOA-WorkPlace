#2) შექმენით ფუნქცია, manual_title, რომელიც იქნება title ფუნქციის კლონი

def manual_title(word):
    spl_word = word.split()
    upper_words = [word[0].upper() + word[1:].lower() if word else "" for word in spl_word]
    final_answer = " ".join(upper_words)
    return final_answer
text = "I Will Be Best Footballer In The World"
final_answer = manual_title(text)
print(final_answer)