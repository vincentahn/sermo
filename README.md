# Sermo

## Background

<img src="https://cdn.discordapp.com/attachments/863876583714455553/871922994539294740/unknown.png">

[Sermo](https://vincentahn.github.io/sermo/) is an interactive website where users can create and alter shapes through the use of a text input. Users can create circles, squares, etc. and create "alterations" that can be used to move shapes or change said shapes however they please. For example, typing "color" will print out an "alteration" that can be dragged towards a shape and change its color.

## Functionality & MVPs

In sermo, users will be able to:
* Create all different kinds of shapes
* Alter the shapes' colors and sizes
* Move the shapes in different directions (up, down, left, right, clockwise, counterclockwise)
* Pause and reset the environment

In addition, this project will include:
* An **About** modal describing the background of the website and instructions
* A production README

## Wireframes

<img src="https://cdn.discordapp.com/attachments/863876583714455553/869048866186596442/unknown.png">

* First link pops up About modal. Other links direct to Portfolio, my LinkedIn, the Github repo, and AngelList.
* Clock will be animated while elements within environment are animating. Clock can be pressed to stop animations. Inclusion of an "alteration" can also be used to stop animations.
* Reset button on left will remove all elements within environment

## Technologies, Libraries, APIs

* Canvas API to render the game board
* Webpack and Babel to bundle and transpile Javascript source code
* npm to manage project dependencies

## Implementaiton Timeline

### Monday

* Basic Layout setup
  * Include links, basic canvas setup, etc.
* Canvas API
  * Create canvas environment

### Tuesday

* Setup `Search`, `Element` and `Alteration` classes
* Implement input text into element pop out animation
* Implement alterations

### Wednesday

* User Experience
  * Ensure animations are smooth and pleasing (i.e. alteration being added to an element)
* Implement environment reset feature 

### Thursday

* If no bugs, begin asteroid implementation

### Friday

* Complete asteroid implementation. Include any other bonus features as desired/able
* Deploy at least once to GitHub pages

### Weekend
* Deploy to GitHub pages
* Rewrite production README proposal

## Bonus features
* Adding ability to break elements into smaller elements (probably need a library?)
* Add user provided shapes
* Add my face as shape as easter egg
* Add shape dodging game as easter egg
* Music/SFX
