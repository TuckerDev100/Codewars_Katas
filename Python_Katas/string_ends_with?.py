# Complete the solution so that it returns true if the first argument(string) 
# passed in ends with the 2nd argument (also a string). 

# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false

# Notes

# If the y[0] does not appear in x[i], return false 
# when y[i] == x[i], all of the rest of them should match 
# if all of them match until the end of the string, return true

# solution('rracecar', 'racecar') # returns false

def stringEnd(text, ending):
    x = text[::-1]
    y = ending[::-1]

    if len(y) > len(x):
        return False
    for i in range(len(y)):
        if y[i] != x[i]:
            return False
        else: print("iteration  " + x)
    return True
print(stringEnd( "ails","fails" ))

# fixed_tests_False = (
#     ( "sumo",    "omo"   ),
#     ( "samurai", "ra"    ),
#     ( "abc",     "abcd"  ),
#     ( "ails",    "fails" ),
#     ( "this",    "fails" ),
#     ( "spam",    "eggs"  )
# )