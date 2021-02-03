all, pairsC, infectedC = list(map(int, input().split()))

myFriends = []
result = []
totalFriends = {}

for i in range(all):
    totalFriends[i + 1] = []

for _ in range(pairsC):
    data = list(map(int, input().split()))
    data.sort()
    
    if data[0] == 1:
        myFriends.append(data[1])
    else:
        totalFriends[data[0]].append(data[1])
        totalFriends[data[1]].append(data[0])

infected = list(map(int, input().split()))

for i in infected:
    potential = totalFriends[i]

    if (i in myFriends) and (i not in result):
      result.append(i)
    
    for j in potential:
        if j not in infected:
            infected.append(j)

        if (j in myFriends) and (j not in result):
          result.append(j)

result.sort()
            
print(len(result))
print(*result, sep=" ")