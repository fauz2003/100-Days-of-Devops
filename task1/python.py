import math

# 1. Variables and Data Types
integer_var = 10
float_var = 20.5
string_var = "Hello, World!"
boolean_var = True
list_var = [1, 2, 3, 4, 5]
tuple_var = (6, 7, 8, 9, 10)
set_var = {11, 12, 13, 14, 15}
dict_var = {"key1": "value1", "key2": "value2"}

# 4. Classes and Objects
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self):
        return f"{self.name} makes a sound"

dog = Animal("Dog", "Canine")
print(dog.make_sound())

# 5. Exception Handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

# 6. File I/O
with open("example.txt", "w") as file:
    file.write("This is an example file.")

with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# 7. List Comprehensions
squares = [x**2 for x in range(10)]
print(squares)

# 8. Lambda Functions
add = lambda x, y: x + y
print(add(5, 3))

# 9. Modules and Packages
print(math.sqrt(16))

# 10. Decorators
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()