#შექმენით manual_count ფუნქცია, რომელსაც გადაეცემა სთრინგი ან სია და ელემენტი რომლის
#  რაოდენობაც უნდა გაიგოთ. დააბრუნეთ მიღებული შედეგი.


def manual_count(first_word, second_word):
    count = 0
    for i in first_word:
        if i == second_word:
            count += 1
            return count
text = "hidroeleqtrosadguri"
finder = "q"
print(manual_count(text, finder))
