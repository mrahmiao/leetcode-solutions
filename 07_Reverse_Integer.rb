MAX_POSITIVE_NUM = 2 ** 31 - 1
MIN_NEGATIVE_NUM = -1 * 2 ** 31

# @param {Integer} x
# @return {Integer}
def reverse(x)
  return 0 unless x.integer?

  num = x.to_s.reverse
  num = num[-1] == '-' ? -num.to_i : num.to_i

  if num > MAX_POSITIVE_NUM || num < MIN_NEGATIVE_NUM
    0
  else
    num
  end
end


# for i in MIN_NEGATIVE_NUM...MAX_POSITIVE_NUM
#   puts "#{i} => #{reverse(i)}"
# end