#შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-").
#  საბოლოოდ კი აბრუნებს მას

def my_work(sentece):
    splited_word = sentece.split()
    joined = "-".join(splited_word)
    return joined
mini_sentence = "I M Try My Best Always"
final_answer = my_work(mini_sentence)
print(final_answer)
