def getPrimes(start, end):
  primes = []
  allNumbers = [True for _ in range(end)]

  allNumbers[0] = allNumbers[1] = False

  for i in range(end):
    if allNumbers[i]:
      primes.append(i)

      for j in range(2 * i, end, i):
        allNumbers[j] = False
  
  return list(filter(lambda x: x >= start, primes))

start, end = list(map(int, input().split()))
print(len(getPrimes(start, end)))
