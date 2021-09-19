# BodySegmentation

<h1>Summary</h1>
This software application uses a person's webcam to segment the different parts of their body as different colors. The main dependency is the trained TensorflowJS model which this application is built upon.
<br>
<h1>How it works</h1>
First, the user's webcam is used to get the dimensions that would appropriately fit their screen. Next, these dimensions are set to those of a blank canvas that is then created with the set dimensions. After, the TensorflowJS model plots points on the user's body which is then used for body segmentation and color seperation.
<br>
<h1>Display</h1>
Here are some examples of the Body Segmentation.
<img style ="filter: drop-shadow(0 0 30px #333);"width="950" alt="nan" src="https://user-images.githubusercontent.com/82355510/129764354-92aeb821-6b16-4dd1-b6f6-abd863660609.PNG" >
<br>
Here is another example with more body parts.
<br>
<img width="950" alt="sdfdfsd" src="https://user-images.githubusercontent.com/82355510/129763567-4bfc874d-7a6e-4344-81be-407cc4959662.PNG">
<br>
<h1>Dependencies utilized</h1>
<ul>
  <li>React(JSX & HTML/CSS components)</li>
  <li>TensorflowJS(Model)</li>


</ul>

s
