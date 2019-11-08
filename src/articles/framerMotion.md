---
path: "/framer-motion"
date: "2019-11-07"
title: "Using Framer Motion"
---

I recently came across a new animation library from Framer, [Motion](https://www.framer.com/motion/). I needed a new project to host on a domain I'd bought, and thought I'd give Motion a shot. Overall I am very happy with the API and plan to use Motion on every React project with a focus on UI animation.

One place I wouldn't use Motion is in a situation where I needed very complex animations, but I'll get to that later.

The project I built (found here: [stodd.art](https://stodd.art)) ended up being a showcase of animations so I really got a chance to put Motion through its paces. I discovered that Motion is a great choice for creating animations that make your UI feel interactive and realistic, but a poor choice for creating animations that react to each other or involve any type of physics.

Let's start with where Motion shines.

## Useful UI Animations

[![](https://firebasestorage.googleapis.com/v0/b/stoddart-web.appspot.com/o/stoddArtArrowAnimation.gif?alt=media)](https://stodd.art/1)

Animations like this make our UIs feel more interactive, realistic, and interesting; and they're a breeze to make with Motion.

Here's how this one works:

```javascript
const variants = {
  initial: {
    scale: 1,
    translateX: 0,
    opacity: 1,
    pathLength: 1,
  },
  pressed: {
    scale: 0.9,
    translateX: -5,
  },
  exit: {
    pathLength: 0,
    transition: {
      yoyo: 1,
    },
    opacity: 0,
  },
};

const LeftArrow = () => (
	<motion.svg
		viewBox="0 0 30 16"
		whileTap="pressed"
	>
		<motion.path
		  fill="none"
		  stroke="white"
		  strokeWidth="2px"
		  d="M 30 8 h -28 m 5 0 v 5 l -5 -5 l 5 -5 v 5"
		  variants={variants}
		  initial="initial"
		  exit="exit"
	  />
	</motion.svg>
);
```

Let's break down how our animation was applied to this SVG component:
- swap out html tags for their Motion equivalents
- define the different states of the animation as "variations"
- tell Motion when each variation should be active

And that's it! Pretty easy.

Now, let's talk a little bit more about why we would want an animation like this in the first place.

There is a big push to make UIs more realistic, and for good reason. Everything in the real world reacts to our touch, so why shouldn't things in the digital world act the same way? The fact is, we are used to the way things work in the world around us and making interfaces that behave the same way will make them more familiar and easier to use.

In the case of our arrow here, clicking pushes it away from us which makes the arrow feel like a real object and signals to the user that their interaction is having an effect. When the arrow is released, the page changes and the arrow is redrawn. We could have kept the arrow in place throughout the page transition, but the movement feels expected and makes the UI more enjoyable to use.

## Other Animations

[![](https://firebasestorage.googleapis.com/v0/b/stoddart-web.appspot.com/o/stoddArtAnimation1.gif?alt=media)](https://stodd.art/1)

Above is an example of an animation that probably does not make your UI feel more realistic, but might make your site more interesting. Animations like these do not have a place in every site and need to be treated with subtlety or else they can easily become distracting. 

As you'll see, creating animations like this in Motion is not ideal.

Let's take a look at how this one works:

```javascript
const variants = {
  pressed: {
    rotate: 5,
    scale: 0.95,
  },
  hover: {
    scale: 1.05,
  },
  spiral: {
    d: 'M 1 1 h 28 v 28 h -28 v -24 m 0 0 h 24 v 20 h -20 v -16 m 0 0 h 16 v 12 h -12 v -8 m 0 0 h 8 v 4 h -4 v 0',
    rotate: 0,
    scale: 1,
  },
  zigZag: {
    d: 'M 1 1 h 28 v 4 h -28 v 4 m 0 0 h 28 v 4 h -28 v 4 m 0 0 h 28 v 4 h -28 v 4 m 0 0 h 28 v 4 h -28 v 0',
    rotate: 0,
    scale: 1,
  },
  rectangles: {
    d: 'M 1 1 h 4 v 28 h -4 v -28 m 8 0 h 4 v 28 h -4 v -28 m 8 0 h 4 v 28 h -4 v -28 m 8 0 h 4 v 28 h -4 v -28',
    rotate: 0,
    scale: 1,
  },
  hypno: {
    d: 'M 1 1 h 28 v 28 h -28 v -28 m 4 4 h 20 v 20 h -20 v -20 m 4 4 h 12 v 12 h -12 v -12 m 4 4 h 4 v 4 h -4 v -4',
    rotate: 0,
    scale: 1,
  },
  squares: {
    d: 'M 1 1 h 12 v 12 h -12 v -12 m 16 0 h 12 v 12 h -12 v -12 m 0 16 h 12 v 12 h -12 v -12 m -16 0 h 12 v 12 h -12 v -12',
    rotate: 0,
    scale: 1,
  },
  links: {
    d: 'M 1 5 h 0 v 24 h 8 v -24 m -4 20 h 0 v -24 h 8 v 24 m 4 -20 h 0 v 24 h 8 v -24 m -4 20 h 0 v -24 h 8 v 24',
    rotate: 0,
    scale: 1,
  },
};

const shapes = [
  'spiral',
  'zigZag',
  'rectangles',
  'hypno',
  'squares',
  'links',
];

export const MorphAnimation = () => {
  const [shape, setShape] = useState('spiral');

  const controls = useAnimation();

  const handleClick = () => {
    const newShape = shapes[shapes.indexOf(shape) + 1] || shapes[0];
    setShape(newShape);
    controls.start(newShape);
  };

  return (
    <>
      <motion.svg
        viewBox="0 0 30 30"
        width="100"
        height="100"
        whileTap="pressed"
        whileHover="hover"
        onClick={handleClick}
        animate={controls}
      >
        <motion.path
          fill="none"
          d="M 1 1 h 28 v 28 h -28 v -24 m 0 0 h 24 v 20 h -20 v -16 m 0 0 h 16 v 12 h -12 v -8 m 0 0 h 8 v 4 h -4 v 0"
          strokeWidth="2px"
          strokeLinecap="square"
          stroke="#1d1"
          variants={variants}
        />
      </motion.svg>
    </>
  );
};
```

This one is quite a bit more complex than the last one. A lot of that complexity comes from how Motion handles SVG morphing, but the real issue here is that we're creating a complex animation with a tool that was designed for simple and realistic animations.

Here are some of the challenges I ran into:
- Because some of the the shapes in this animation contain four individual shapes, every shape had to be made of four distinct lines.
- Every shape had to consist of the same pattern of lines. In this case it was "horizontal line, vertical line, horizontal line, vertical line, move, repeat".
- SVG coordinates could not vary between relative and absolute positioning.
- I had to use Motion's `useAnimation()` to explicitly control animation changes.

With all those limitations, creating this shape-morphing animation was kind of a nightmare, but I'm decently satisfied with how it turned out.

Aside from SVG morphing, Motion does not allow you to create animations that involve complex physics like collisions and bounces. 

## Conclusion

It seems clear to me that Motion's purpose is to make it easy for developers to add interactivity and realism to their UIs. Motion is not an all-purpose animation library; it is a thoughtfully designed tool that helps you create useful UI animations.