
# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

days_of_the_week = %w{Monday Tuesday Wednesday Thursday Friday Saturday Sunday}
p days_of_the_week
# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.


# moving_day = days_of_the_week.pop
# days_of_the_week.unshift moving_day

# days_of_the_week.unshift days_of_the_week.pop

days_of_the_week.rotate! -1

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

days_parts = [days_of_the_week[1..5], days_of_the_week.rotate.drop(5)]

# 4. Remove either the weekdays or the weekends

days_parts.pop

# 5. Sort the remaining days alphabetically

p days_parts[0].flatten.sort




mario = {
  :name => "Mario",
  :instrument => "Guitar",
  :vice => "princesses"
}
# Your choice...
#
