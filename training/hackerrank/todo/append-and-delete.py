# from itertools import combinations
   
     
# def n_length_combo(arr, n):
     
#     # using set to deal
#     # with duplicates 
#     return list(combinations(arr, n))
   
# # Driver Function
# if __name__ == "__main__":
#     arr = '01'
#     n = 3
#     print (n_length_combo([x for x in arr], n) )

# arr = []
# for i in range(5):
#     ans = False
#     while i >= 2 and i <= 4:
#         print(i, 'by while')
#         i += 1
#         print(i == 5)
#         if i == 5:
#             ans = True
#             break
#     print(i, 'by for') 
	

# 11 5 3 4 22 11 1 0 -1 77 88

# [2,5]


            
def fun(arr):
    count = 1
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            count += 1
        else:
            count += 2

    
def fun(arr):
	count = 1
	for i in range(len(arr)-1):
		if arr[i] > arr[i+1]:
			count += 1
		else:
			count +=2