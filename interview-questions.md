# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A hash is a class with data. it is a container that inside has key value pairs. example
to make a hash:
    bands=Hash.new  
        *bands is now an empty hash display as {}*

we can create keys(which are symbols) and values which in this will be a string but can be in integer.
    bands[:hardcore]="Madball"
    bands[:pop]="TSwift"
    bands[:grunge]="Nirvana"
        *bands=hash :hardcore=symbol&key "Madball"=string&value*


Researched answer:
A hash is a class with data. it is a container that inside has key value pairs. example
to make a hash:
    bands=Hash.new  
        *bands is now an empty hash display as {}*

we can create keys(which are symbols) and values which in this will be a string but can be in integer.
    bands[:hardcore]="Madball"
    bands[:pop]="TSwift"
    bands[:grunge]="Nirvana"
        *bands=hash :hardcore=symbol&key "Madball"=string&value*
I tried adding Mariah Carrey to pop by using 
    bands[:pop]+="Mariah Carrey" 
    *the output was :pop=>"TSwiftMariah Carrey" that is not what i wanted*
I know that i can make the values be an array and perhaps that would be a better option if i intend on adding more to the value instead of trying to add to a string. To achieve this, either i would have to make the initial key/value pair with a value of an array or update it to an array. i can achieve this by
    bands[:pop]=["TSwift"]
    bands[:pop]+=["Mariah Carrey"]
        *the output was::pop=>["TSwift", "Mariah Carrey"]*
        *perfect!*
I can also use .each or .map over a hash, will return for each pair, and .map will return an array
i will utilize #{} to call on the key and value
        bands.each do |key, value| 
            puts "a fine example of #{key} music is #{value}."
        end
            *output:
            a fine example of hardcore music is Madball.
            a fine example of pop music is ["TSwift", "Mariah Carrey"].
            a fine example of grunge music is Nirvana.
                *notice that the pop music is still an array because we made the value an array
        
2. What is a gem?

Your answer: A gem is a part of ruby and you can add a gem as an addition to ruby. There are lots of different gems with different functionalities. It is a package that can be installed into a project and will change how ruby will function/adds stuff for it to use.

Researched answer:A gem is a part of ruby and you can add a gem as an addition to ruby. There are lots of different gems with different functionalities. It is a package that can be installed into a project and will change how ruby will function/adds stuff for it to use. One example of a use for a gem is for testing. It can be a set of code layed out that is just a baseline for how a user wants all thier ruby projects to be. I imagine that if i get a job at a company that uses ruby. There will be a set of inhouse gems that i will need to run when working on projects. If someone has already develeoped all the code for a baseline of how an app should work and a means of testing if work i do will effect other parts of code elsewhere even if it is not available to me, that could be installed in a gem. I may be working on a way for a user to upload a photo to a site. If i have a gem installed that tests, more so tries to hack my new code idea with tester malware by uploading a ficticious image  that has malware burried in its file that could corrupt something else but my intial code did not prevent that from happening, it would flag and say Hey mister, you forgot to ensure that malware couldnt be transfered via the file upload. That is just one example of all the different types of gems. Anyone can make a gem and i can not wait to make my first one.

3. What is Ruby on Rails?
https://www.codecademy.com/resources/blog/what-is-ruby-on-rails/

Your answer: Ruby on Rails is an open source software with the purpose of using the language of ruby and communicating with different databases of the users choice and migrating between the 2. 

Researched answer:
Ruby on Rails is an open source software with the purpose of using the language of ruby and communicating with different databases of the users choice and migrating between the 2. Rails is  Model View Controller. There is a lot of files that i have not had experience with and may never have to use much. This is because this is the reason people use Rails. It has the ability to use gems and almost like aplug and play full stack web development software. I am excited to learn more about the MVC this weeek and being able to use them and modify them to my likeing


4. What is a relational database? Are there other kinds of databases? 
Your answer:A relational database is a database where data points can be related to other things. Kind of like if you have a sheet in excel, and it has a table that shows names of people and how much money they owe a company. If you click on a cell, the bar at the top will have a reference to another file with sheets and it had pulled the info from a totally different place than what you are looking at. If you change one of the sheets it can or will change the others depending on how you have it set up. Are there other types of databases, yes. I know that i have worked with some other ones but i am not sure of the names. I am sure there are types of databases that everyone has worked with. 

Researched answer:A relational database is a database where data points can be related to other things. Kind of like if you have a sheet in excel, and it has a table that shows names of people and how much money they owe a company. If you click on a cell, the bar at the top will have a reference to another file with sheets and it had pulled the info from a totally different place than what you are looking at. If you change one of the sheets it can or will change the others depending on how you have it set up. Are there other types of databases, yes. I know that i have worked with some other ones but i am not sure of the names. I am sure there are types of databases that everyone has worked with. After further review it appears that i have worked with a personal database, because i made it. A personal database is a database that is usually stored on a personal computer and isnt really suitable for a complex organization. A relational database is the opposite of a NoSQL database. A great example that i read is that "a relational database would be the connection between a person shopping online and thier shopping cart." When i am on amazon, i am not physically putting things in my cart, i am just clicking it, it is not moving anything from the amazon warehouse list, it is just saying toss the info for this item into cliffs cart, and if he decides to purchase it, then we will go to the other part of our database and pull up cliffs credit card info and address and maybe his rewards points.

5. What are primary keys? Why are they important?

Your answer: Primary keys used in databases as a unique identifier for a "xxx" in a model. It is like a social or a licence plate, it is used for specific "xxx" becuase other info in the model may be the same as others. in the example below i have created, the primary key for each of the "xxx"'s is different where as some of the info in diffferent coloumns is the same and different the primary keys are always different for this model. There will never be an overlap. 
model:colors_of_life
pk|first_name|last_name|favorite_color|eye_color|
1|cliff|roecker|blue|blue
2|john|roecker|red|brown
3|mark|blast|blue|brown

Researched answer:
Primary keys used are used in relational databases as a unique identifier for a "xxx" in a model. It is like a social or a licence plate, it is used for specific "xxx" becuase other info in the model may be the same as others. in the example below i have created, the primary key for each of the "xxx"'s is different where as some of the info in diffferent coloumns is the same and different the primary keys are always different for this model. There will never be an overlap. 
model:colors_of_life
pk|first_name|last_name|favorite_color|eye_color|
1|cliff|roecker|blue|blue
2|john|roecker|red|brown
3|mark|blast|blue|brown
I actually made a database for my last company. I used software that i found online and when it gave me the option to load in all my items i was tracking for the inventory, i saw that it had a primary key column and looking back. I am so lucky that i just let it make the primary key. I also am thinking about how when i tried to use microsoft access, and i kept screwing it up. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: route that provides mapping from http words, its used in a full stack react app

2. JSON: Javascript object notation, its a format in react

3. ERB: templating system in ruby

4. Params:

5. API:
