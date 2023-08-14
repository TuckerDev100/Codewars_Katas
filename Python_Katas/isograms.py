# An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
# Implement a function that determines whether a string that contains only
#  letters is an isogram. 
# Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

# isIsogram "Dermatoglyphics" = true
# isIsogram "moose" = false
# isIsogram "aba" = false

# iterate thru the word
# make a new list with all of the chars of the string 
# check char of input against comparison list 
# .tolowercase every char
#
#
#PARKING LOT
#
#
#
#
#

# MY SOLUTION
def is_isogram(str):
    strChars = []

    for letter in str.lower():
        if letter not in strChars:
            strChars.append(letter)
            print(strChars)
        else:
            return False
    
    return True
    
print(is_isogram("Dermatoglyphics"))

# BETTER SOLUTION
# def is_isogram(string):
#     string = string.lower()
#     for letter in string:
#         if string.count(letter) > 1: return False
#     return True




# BEST SOLUTION

# def is_isogram(string):
#     return len(string) == len(set(string.lower()))

# is_isogram("moose")