# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
#  we are in ruby so we will use def/end and 
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
   
# pseudocode: create a method "contains_letter" that takes in an array containing multiple strings and a variable containing a string of 1 letter.
def contains_letter array, string
    array.select do |value|
        if value.include?(string)
            value     
        end
    end
end
# p contains_letter(beverages_array, letter_o)
# p contains_letter(beverages_array, letter_t)

#  the array has different strings at each index, i will need to iterate over each string at each index to see if it contains the variable by using the.select method. I initially used the .include method which also returns a true false but using the .select method keeps the true ansers in the array. The if statement will need to say if the value  is true and contains the letter, return that string to the array. 





# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# pseudocode:
# create a method called containz that takes in a hash
def containz hash
        # make a variable that utilizies the .flatten method twice to get rid of all nested array brackets
    arr1 = hash.flatten.flatten
        # make an empty array arr3 to store my result which i can later 
    arr3 = []
        # use .select on each value of arr1 and if its a String .push it to arr3
    arr1.select do |value|
        if value.is_a?(String)
            arr3.push(value)            
        end
    end
    # sort array 3
    arr3.sort
end


# this one took me a while because i didnt think of flattening it twice very quickly. then i was able to use the .select like in the last problem, but this time, i pushed it into the arr3. I initially wasnt doing that but i couldnt figure out how to get it sorted without sorting in the call back but this worked out beautifully
# refactor
# def containz hash
#     hash.values.flatten.sort
#     end

# p containz(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# psuedocode:
# create a class called bike, use def initiallize to decide which data is entered or needed to enter
# use set and get first then use attr_accessor once we know it works and everything looks good
# do a test run with a trek. 
# class Bike
#     def initialize(model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def set_model(model)
#         @model= model
#     end
#     def get_model
#         @model
#     end
#     def set_wheels(wheels)
#         @wheels = wheels
#     end
#     def get_wheels
#         @wheels
#     end
#     def set_current_speed(current_speed)
#         @current_speed = current_speed
#     end
#     def get_current_speed
#         @current_speed
#     end
#     def get_info
#         p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end

# end
# Trek = Bike.new('Trek')
# Trek.get_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# class Bike
#     attr_accessor :model, :wheels, :current_speed
#     def initialize(model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def get_info
#         p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end

# end
# Trek = Bike.new('Trek')
# Trek.get_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
# to add the speed chane i will create  methods with def/end and set it to @current_speed += or -=1

# class Bike
#     attr_accessor :model, :wheels, :current_speed
#     def initialize(model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def pedal_faster(number)
#         @current_speed += number
#     end
#     def brake(number)
#         if ((@current_speed - number) <= 0)
#             @current_speed = 0
#         else 
#             @current_speed -= number
#         end
#     end
#     def get_info
#         p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
#     end

# end
# Trek = Bike.new('Trek')
# # Trek.get_info
#     # =>"The Trek bike has 2 wheels and is going 0 mph."
# Trek.pedal_faster(10)
#     # =>"The Trek bike has 2 wheels and is going 10 mph."
# Trek.pedal_faster(18)
#     # =>"The Trek bike has 2 wheels and is going 28 mph."
# Trek.brake(5)
#     # =>"The Trek bike has 2 wheels and is going 23 mph."
# Trek.brake(25)
#     # =>"The Trek bike has 2 wheels and is going 0 mph."
# Trek.pedal_faster(18)
#     # had to make sure it went back up again:)
#     # =>"The Trek bike has 2 wheels and is going 18 mph."
# Trek.get_info

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
# I really enjoyed making this. I felt like it was not difficult and i have a decent understanding of it. It was more so like a refreshing, heck yeah dude you know how to do this. I am not sure how else to refactor this smaller. oh and i did run into an issue with the speed going below 0, and then i put my else if statement in backwards  :) but i got it solved. 
