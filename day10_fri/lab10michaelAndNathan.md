|Rubric | Met all requirements (*/12) | Idiomatic style used (*/6)| Proper Git workflow utilized (*/2)| Other adjustments (*/+-2)| Total possible  (*/20)|
|---        |---|---|---|---|---|--|
| Submission| 8  | 6  | 2  | 0  | 16  |
| Late      |   |   |   |   |   |  |

# Day 10 Lab: pizza3001


## Main Goal

Build a static webpage based on the design comprehensive ("design comp") shown in https://github.com/codefellows/portland-201d2/blob/master/week-3/1-mon-lab/lab-assets/_0_PREVIEW.jpg

## Requirements

1. Use semantic HTML. Use <section>, <footer> <aside>, and/or other tags such that you don't get lots in a "sea of <div> elements" when working with your HTML file.

Not complete, lots of div elements on the page. We can use these other tags to make the flow of our page
work better and some of these tags might gives us
built in styling that we want.

2. Use good HTML structure to scaffold this site.

Indentation is off for some of your elements that are children of other elements. We really want to have good indentation so we can see the HTML structure of how our site works easily.

example:
<body>
<div class="hrThree">
<hr>
<img src=lab-assets/small-logo.png>
</div>
</body>

should be:
<body>
  <div class="hrThree">
    <hr>
    <img src=lab-assets/small-logo.png>
  </div>
</body>

3. Use CSS to style the page to replicate every visual feature shown in the comp image

Partial Complete - Very close but there were some things that were overflowing or didn't exactly look like the static site.

## Extra Credit +1 for each

1. Use a PNG file as a border image to replicate the patterned gray bar near the top of the page.

Not Complete

2. Use an SVG file to replicate the patterned gray bar near the top of the page (see https://bocoup.com/weblog/using-svg-patterns-as-fills as a possible method).

Not Complete

3. Fade in the page when it is first loaded.

Not Complete

4. Slide in the footer.

Not Complete

5. Highlight at least one section of the page based on the mouse-over (hover) event.

Not Complete

6. On mouse hover on any of the social media icons, make the icon 50% larger.

Not Complete

7. Extend #4 such that the social media icon grows smoothly to its larger size using CSS transitions.

Not Complete

8. Extend #4 such that each icon rotates 360 degrees on mouse hover.

Not Complete

Using JS only

9. Slide in the set of social media icons. Hint: Use setInterval() to set a DOM element attribute(s) such as margin.

Not Complete

10. Include a <video> element that plays a video file, and verify the video plays OK in Chrome, another browser, and a mobile browser.

Not Complete

## Technical Requirements

1. Passes eslint:

Passed

## Proper Git Flow Utilized

1. A-C-P and not working on master branch

Passed

2. Collaborate or Fork

Passed
