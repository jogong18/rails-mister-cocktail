# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'json'

# source = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
# cocktails = JSON.parse(open(source).read)

# cocktails['drinks'].each do |cocktail|
#   Cocktail.create!(
#     name: cocktail['strIngredient1']
#   )
# end

Dose.delete_all
Ingredient.delete_all
Cocktail.delete_all

url = "https://raw.githubusercontent.com/maltyeva/iba-cocktails/master/recipes.json"
cocktails = JSON.parse(open(url).read)

cocktails.each do |cocktail|
  c = Cocktail.create!(
    name: cocktail["name"]
  )
  cocktail['ingredients'].each do |ingredient|
    unless ingredient['ingredient'].nil?

  i = Ingredient.find_or_create_by!(
    name: ingredient['ingredient']
  )
  Dose.find_or_create_by!(
    description: ingredient['amount'].to_s + " " + ingredient['unit'],
    ingredient: i,
    cocktail: c
  )
    end
  end
end


