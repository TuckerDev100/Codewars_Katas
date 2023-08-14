
ctrl show preview to show markdown

# Python3 notes

python3 is aliased to python

must config python environment before running

else if is concatted to elif

None is used to define null

Ternery in python: 
shorter = x if len(x) <= len(y) else y

##Colons in Python
Functions of the colon(:)

    A colon is used to represent an indented block.
    It is also used to fetch data and index ranges or arrays
    Another major use of the colon is slicing. In slicing, the programmer specifies the starting index and the ending index and separates them using a colon which is the general syntax of slicing.
    A colon is used to identify the keys in dictionaries.

There are many more uses of the colon in Python and we’ll practically use the functions below.

#Collections

###Python sets
Python Sets
myset = {"apple", "banana", "cherry"}
Set

Sets are used to store multiple items in a single variable.

Set is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Tuple, and Dictionary, all with different qualities and usage.

A set is a collection which is unordered, unchangeable*, and unindexed.

* Note: Set items are unchangeable, but you can remove items and add new items.

Sets are written with curly brackets.

Unordered

Unordered means that the items in a set do not have a defined order.

Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

True and 1 is considered the same value:

NOTES

def is_isogram(string):
    return len(string) == len(set(string.lower()))

is a solution for this
 --------
 An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 Implement a function that determines whether a string that contains only
  letters is an isogram. 
 Assume the empty string is an isogram. Ignore letter case.
 --------

https://www.w3schools.com/python/python_sets.asp

##Python Lists

thislist = ["apple", "banana", "cherry"]
print(thislist)

Lists are used to store multiple items in a single variable.

Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.

Lists are created using square brackets:

List Items

List items are ordered, changeable, and allow duplicate values.

List items are indexed, the first item has index [0], the second item has index [1] etc.
Ordered

When we say that lists are ordered, it means that the items have a defined order, and that order will not change.

If you add new items to a list, the new items will be placed at the end of the list.

Note: There are some list methods that will change the order, but in general: the order of the items will not change.
Changeable

The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.
Allow Duplicates

Since lists are indexed, lists can have items with the same value:

### Unpack method

This turns a string into a char list
string = "geeks"
print([*string])

##Keywords

###pass

The pass statement is used as a placeholder for future code.

When the pass statement is executed, nothing happens, but you avoid getting an error when empty code is not allowed.

Empty code is not allowed in loops, function definitions, class definitions, or in if statements.

Example: ---------------

def myfunction():
  pass

  -----------------

  ###range()

  The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.
Syntax
range(start, stop, step)

you can use step to increment by two for example



https://www.w3schools.com/python/ref_keyword_pass.asp


##Functions

### len()

reports the size or length of its input, which is usually a String or List

LOOPING THROUGH A STRING

Use the string index number to loop through the string

One way to iterate over a string is to use for i in range(len(str)):. In this loop, the variable i receives the index so that each character can be accessed using str[i].

Example:

t = 'World'

for i in range(len(t)):
    print(t[i])


or

Directly loop through each item in the string

Another way to iterate over a string is to use for item in str:. The variable item receives the character directly so you do not have to use the index. Since this loop does not need the index value of each character, this loop format is simpler and is preferred over the previous one.

Example:

s = 'Buzz'

for char in s:
    print(char)