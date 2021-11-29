def find_first_duplicate(arr)
  if arr.empty? || arr.length == 1
    return -1
  end

  temp = []
  i = 0
  while !temp.include?(arr[i]) do
    temp.push(arr[i])
    i+=1
  end

  i < arr.length ? arr[i] : -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts

  puts "Expecting 4"
  puts "=>", find_first_duplicate([2,1,5,4,7,4,5,1])
end

# Please add your pseudocode to this file
# And a written explanation of your solution
