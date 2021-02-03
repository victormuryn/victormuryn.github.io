all, pairsC, infectedC = list(map(int, input().split()))

friends = {}
pairs = []

for _ in range(pairsC):
    data = list(map(int, input().split()))
    data.sort()
    
    if data[0] == 1:
      friends[data[1]] = []
    else:
      pairs.append(data)

infected = list(map(int, input().split()))

for i in pairs:
  if i[0] in friends:
    friends[]