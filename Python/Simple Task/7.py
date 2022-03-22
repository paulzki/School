navn = input("navn: ")
print(navn)

alder = input("alder: ")

print("Hei {}, du er {} år gammel".format(navn, alder))


far = input("fahrenheit: ")

print("{} grader fahrenheit er {} grader celsius".format(far, (float(far)-32)/1.8))