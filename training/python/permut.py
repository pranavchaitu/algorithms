def generate(s):
    if len(s) == 1:
        return [s]
    permutations = []
    for i, char in enumerate(s):
        rem = s[:i] + s[i+1:]
        print(rem)
        for i in generate(rem):
            permutations.append(char+i)
    return permutations 

ans = generate('abc')
print(ans)

# generate('bc')
#     generate('c') => ['c']
#     generate('b') => ['b']

[]
    

# fact
# permutations
# decimal to binary
# surroundings for 2d array elements

