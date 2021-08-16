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

## Notable Code

### Cursor-Element Hit Detection

One of the challenges of this project was implementing an algorithm to determine whether a cursor was within an element or not to detect if it "hit" the element. Calculating the points of an element was usually just busy work but determining how to determine whether the cursor was inside an element usually meant introducing some scalar product logic. Below is an example of the algorithm for determining if a cursor positiion was within a square element.

```
/src/scripts/elements/square.js

confirmInsideElement(x, y){
  const amplitude = this.size / Math.sqrt(2);
  const fortyFiveOffset = 45 * Math.PI / 180;
  const angleRadians = this.angle * Math.PI / 180;

  // Calculate position of Point A
  const posA = [
    this.posX - amplitude * Math.cos(angleRadians - fortyFiveOffset),
    this.posY - amplitude * Math.cos(angleRadians + fortyFiveOffset)
  ];

  // Calculate position of Point B
  const posB = [
    this.posX - amplitude * Math.cos(angleRadians + fortyFiveOffset),
    this.posY + amplitude * Math.cos(angleRadians - fortyFiveOffset)
  ];

  // Calculate position of Point D
  const posD = [
    this.posX + amplitude * Math.cos(angleRadians + fortyFiveOffset),
    this.posY - amplitude * Math.cos(angleRadians - fortyFiveOffset)
  ];

  // Calculate vectors of AM, AB, and AD
  const aToM = [x - posA[0], y - posA[1]]
  const aToB = [posB[0] - posA[0], posB[1] - posA[1]];
  const aToD = [posD[0] - posA[0], posD[1] - posA[1]];

  function scalarProduct(vec1, vec2){
    return vec1[0] * vec2[0] + vec1[1] * vec2[1];
  }

  // Confirm that 0 < AM * AB < AB squared and 0 < DM * AD < AD squared (which confirms that point is in circle)
  return scalarProduct(aToM, aToB) > 0 && scalarProduct(aToM, aToB) < scalarProduct(aToB, aToB) && scalarProduct(aToM, aToD) > 0 && scalarProduct(aToM, aToD) < scalarProduct(aToD, aToD);
}
```

### Canvas Resizing

Another challenge I faced was not knowing some of the technical details regarding Canvas. If the canvas width and height is not properly set (with Javascript DOM manipulation), then the drawn images will be stretched to scale which will result in images with terrible resolution. Working with this knowledge and including two canvases on top of each other was an interesting task.

```
/src/scripts/environment.js

resizeCanvasToDisplaySize(){
  this.elementCanvas.width = this.elementCanvas.parentElement.clientWidth;
  this.elementCanvas.height = this.elementCanvas.parentElement.clientHeight;

  if(this.alterationCanvas){
    this.alterationCanvas.width = this.alterationCanvas.parentElement.clientWidth;
    this.alterationCanvas.height = this.alterationCanvas.parentElement.clientHeight;
  }
}
```

###

## Bonus features
* Adding ability to break elements into smaller elements (probably need a library?)
* Add user provided shapes
* Add my face as shape as easter egg
* Add shape dodging game as easter egg
* Music/SFX
