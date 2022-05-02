# Building the Intuition

1. Get the section and get the text.
2. put a mousemove event with a function for shadow.
3. get the offsetWidth and offsetHeight from destructured hero.
4. take offsetX and offsetY from the event.
5. make the x and y parameters consistent accross all elements ```this !== e.target```.
6. Take a walk value for the shadow
	```Math.round((x / width * walk) - (walk / 2))``` similarly for the height.
7. get ```text.style.shadow``` and style it with multiple shadows with xWalk and yWalk.