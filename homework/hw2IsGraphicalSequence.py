#https://billyoverton.com/2012/01/22/graphical-sequences-with-python.html
def isGraphicalSequence(sequence):
  print sequence
  if sequence.count(0) == len(sequence):
    return True 
  sequence.sort(reverse=True)
  if sequence[len(sequence)-1] < 0: return False
  if sum(sequence)%2 != 0: return False
  if sequence[0] >= len(sequence): return False
  count = sequence.pop(0)
  for i in range(count):
    sequence[i] = sequence[i] - 1
  return isGraphicalSequence(sequence)
