## Q.1 What’s Box Model in CSS ? 
> Answer

The Box Model in CSS defines how elements on a web page are sized and spaced. It consists of four layers: content, padding, border, and margin. The content is the actual element's content, padding provides space around the content, the border surrounds the padding, and the margin creates space between elements. Understanding the Box Model is important for layout and spacing in CSS.

## Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?
> Answer

CSS selectors are used to target and style specific elements in an HTML document. Here are some commonly used selectors:

1. Element Selectors: Target elements based on their tag names (e.g., `p` selects all `<p>` elements).

2. Class Selectors: Target elements based on their class attribute (e.g., `.highlight` selects elements with class "highlight").

3. ID Selectors: Target specific elements based on their unique ID attribute (e.g., `#header` selects the element with ID "header").

4. Attribute Selectors: Target elements based on their attribute values (e.g., `[type="submit"]` selects elements with `type` attribute equal to "submit").

5. Pseudo-classes/Elements: Select elements based on states or positions (e.g., `:hover` selects elements when hovered).

Advantages: Selectors offer flexibility, reusability, and specificity for styling elements, enabling targeted styling, code efficiency, and interactive effects.

## Q.3 What is VW/VH ?
> Answer

VW and VH are units of measurement in CSS that represent relative viewport dimensions.

1. VW (Viewport Width): VW represents a percentage of the viewport's width. For example, 1vw is equal to 1% of the viewport width. It allows you to set element sizes or dimensions relative to the width of the viewport. So, if the viewport width is 1000 pixels, 1vw would be 10 pixels.

2. VH (Viewport Height): VH represents a percentage of the viewport's height. Similar to VW, 1vh is equal to 1% of the viewport height. It enables you to set element sizes or dimensions relative to the height of the viewport. For instance, if the viewport height is 800 pixels, 1vh would be 8 pixels.

## Q.4 Whats difference between Inline, Inline Block and block ?
> Answer

Inline elements:
- Do not create line breaks before or after themselves.
- Only occupy the space required by their content.
- Examples include `<span>`, `<a>`, `<strong>`, `<em>`, etc.

Inline-block elements:
- Behave similarly to inline elements in terms of not creating line breaks before or after themselves.
- Can have a specified width, height, margins, and paddings.
- Examples include `<img>`, `<button>`, `<input>`, etc.

Block elements:
- Create line breaks before and after themselves.
- Occupy the full width available within their parent container by default.
- Can have a specified width, height, margins, and paddings.
- Examples include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<li>`, etc.

## Q.5 How is Border-box different from Content Box?
> Answer

Border-box and content-box refer to two different box-sizing properties in CSS that affect how an element's dimensions are calculated.

1. Content-box (default):
- The width and height of an element are calculated based on its content, excluding padding and border.
- The specified width and height values do not include the padding and border sizes.
- The total size of the element will be the sum of its content width/height, padding, and border.

Example:
```
box-sizing: content-box;
width: 200px;
padding: 20px;
border: 2px solid black;
```
In this case, the total width of the element would be 200px (content width) + 20px (left and right padding) + 4px (left and right border), resulting in a wider element.

2. Border-box:
- The width and height of an element are calculated including its content, padding, and border.
- The specified width and height values include the padding and border sizes.
- The total size of the element will be the specified width/height, including the padding and border.

Example:
```
box-sizing: border-box;
width: 200px;
padding: 20px;
border: 2px solid black;
```
In this case, the total width of the element would be exactly 200px, as the padding and border sizes are taken into account within the specified width.

## Q.6 What’s z-index and How does it Function ?
> Answer

z-index is a CSS property that controls the stacking order of positioned elements on a web page. It determines which elements appear in front or behind other elements when they overlap in the z-axis, which is the depth or stacking dimension.

The z-index property accepts integer values, where a higher value places an element in front of elements with lower values or the default stacking order.

Here's how it functions:
- Elements with a higher z-index value appear in front of elements with a lower z-index value.
- If two elements have the same z-index, the one declared later in the HTML document will appear in front.
- The default z-index value is 0, but some elements like positioned elements (e.g., those with `position: relative`, `position: absolute`, or `position: fixed`) have a default z-index of auto, which behaves similarly to 0 but may vary depending on the browser.

Example:
```css
.element1 {
  z-index: 1;
}

.element2 {
  z-index: 2;
}

.element3 {
  z-index: 3;
}
```
In this example, `element3` would appear in front of `element2`, which would appear in front of `element1`. The stacking order is determined by the z-index values assigned to each element.

## Q.7 What’s Grid & Flex and difference between them?
> Answer

Grid and Flex are CSS layout systems used for creating responsive designs.

Grid:
- Two-dimensional layout system for precise control over rows and columns.
- Suitable for complex layouts and grid-like structures.

Flex:
- One-dimensional layout system for distributing space along a single axis.
- Great for simpler layouts and aligning elements within a row or column.

Difference:
- Grid is for complex layouts with rows and columns.
- Flex is for simpler layouts within a single axis.

In summary, Grid is for complex layouts, while Flex is for simpler layouts and alignment within a single axis.

## Q.8 Difference between absolute and relative and sticky and fixed position explain with example.

> Answer

1. Absolute Positioning:
- An absolutely positioned element is positioned relative to its closest positioned ancestor (or the initial containing block if there is none).
- It is completely removed from the normal flow of the document, and other elements will ignore its space.
- The element's position is specified using the `top`, `right`, `bottom`, and `left` properties.
- Example:
```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50px;
  left: 50px;
}
```
In this example, the `.child` element is positioned 50 pixels from the top and 50 pixels from the left of its closest positioned ancestor (`.parent`).

2. Relative Positioning:
- A relatively positioned element is positioned relative to its normal position in the document flow.
- It retains its space in the document flow, and other elements respect its position.
- The element's position is specified using the `top`, `right`, `bottom`, and `left` properties, which shift the element from its original position.
- Example:
```css
.parent {
  position: relative;
}

.child {
  position: relative;
  top: 20px;
  left: 20px;
}
```
In this example, the `.child` element is positioned 20 pixels down and 20 pixels to the right from its original position within the `.parent`.

3. Sticky Positioning:
- A sticky positioned element is positioned based on the user's scroll position.
- It behaves like a relatively positioned element until the user scrolls to a specific threshold, after which it becomes fixed in its container or viewport.
- The element's position is specified using the `top`, `right`, `bottom`, and `left` properties.
- Example:
```css
.sticky-element {
  position: sticky;
  top: 20px;
}
```
In this example, the `.sticky-element` will scroll with the document until it reaches 20 pixels from the top of its container or the viewport, and then it will stick in place.

4. Fixed Positioning:
- A fixed positioned element is positioned relative to the viewport.
- It remains fixed in its position even when the user scrolls the page.
- The element's position is specified using the `top`, `right`, `bottom`, and `left` properties.
- Example:
```css
.fixed-element {
  position: fixed;
  top: 50px;
  right: 50px;
}
```
In this example, the `.fixed-element` will always remain 50 pixels from the top and 50 pixels from the right of the viewport, regardless of scrolling.

## Q.9 Build Periodic Table as shown in the below image

> Solution

### Html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="periodic-table">
        <div class="periodic-row">
            <div class="element title">Group Period</div>
            <div class="element">1</div>
            <div class="element">2</div>
            <div class="element">3</div>
            <div class="element">4</div>
            <div class="element">5</div>
            <div class="element">6</div>
            <div class="element">7</div>
            <div class="element">8</div>
            <div class="element">9</div>
            <div class="element">10</div>
            <div class="element">11</div>
            <div class="element">12</div>
            <div class="element">13</div>
            <div class="element">14</div>
            <div class="element">15</div>
            <div class="element">16</div>
            <div class="element">17</div>
            <div class="element">18</div>
          </div>
        <div class="periodic-row">
          <div class="element">1</div>
          <div class="element red"><span>1</span>H</div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element"></div>
          <div class="element red"><span>2</span>He</div>
        </div>

        <div class="periodic-row">
            <div class="element">2</div>
            <div class="element red"><span>3</span>Li</div>
            <div class="element red"><span>4</span>Be</div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element yellow"><span>5</span>B</div>
            <div class="element yellow"><span>6</span>C</div>
            <div class="element yellow"><span>7</span>N</div>
            <div class="element yellow"><span>8</span>O</div>
            <div class="element yellow"><span>9</span>F</div>
            <div class="element yellow"><span>10</span>Ne</div>
        </div>

        <div class="periodic-row">
            <div class="element">3</div>
            <div class="element red"><span>11</span>Na</div>
            <div class="element red"><span>12</span>Mg</div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element yellow"><span>13</span>Al</div>
            <div class="element yellow"><span>14</span>Si</div>
            <div class="element yellow"><span>15</span>P</div>
            <div class="element yellow"><span>16</span>S</div>
            <div class="element yellow"><span>17</span>Cl</div>
            <div class="element yellow"><span>18</span>Ar</div>
        </div>

        <div class="periodic-row">
            <div class="element">4</div>
            <div class="element red"><span>19</span>K</div>
            <div class="element red"><span>20</span>Ca</div>
            <div class="element blue"><span>21</span>Sc</div>
            <div class="element blue"><span>22</span>Ti</div>
            <div class="element blue"><span>23</span>V</div>
            <div class="element blue"><span>24</span>Cr</div>
            <div class="element blue"><span>25</span>Mn</div>
            <div class="element blue"><span>26</span>Fe</div>
            <div class="element blue"><span>27</span>Co</div>
            <div class="element blue"><span>28</span>Ni</div>
            <div class="element blue"><span>29</span>Cu</div>
            <div class="element blue"><span>30</span>Zn</div>
            <div class="element yellow"><span>31</span>Al</div>
            <div class="element yellow"><span>32</span>Si</div>
            <div class="element yellow"><span>33</span>P</div>
            <div class="element yellow"><span>34</span>S</div>
            <div class="element yellow"><span>35</span>Cl</div>
            <div class="element yellow"><span>36</span>Ar</div>
        </div>

        <div class="periodic-row">
            <div class="element">5</div>
            <div class="element red"><span>37</span>Rb</div>
            <div class="element red"><span>38</span>Sr</div>
            <div class="element blue"><span>39</span>Y</div>
            <div class="element blue"><span>40</span>Zr</div>
            <div class="element blue"><span>41</span>Nb</div>
            <div class="element blue"><span>42</span>Mo</div>
            <div class="element blue"><span>43</span>Tc</div>
            <div class="element blue"><span>44</span>Ru</div>
            <div class="element blue"><span>45</span>Rh</div>
            <div class="element blue"><span>46</span>Pd</div>
            <div class="element blue"><span>47</span>Ag</div>
            <div class="element blue"><span>48</span>Cd</div>
            <div class="element yellow"><span>49</span>In</div>
            <div class="element yellow"><span>50</span>Sn</div>
            <div class="element yellow"><span>51</span>Sb</div>
            <div class="element yellow"><span>52</span>Te</div>
            <div class="element yellow"><span>53</span>I</div>
            <div class="element yellow"><span>54</span>Xe</div>
        </div>

        <div class="periodic-row">
            <div class="element">6</div>
            <div class="element red"><span>55</span>Cs</div>
            <div class="element red"><span>56</span>Ba</div>
            <div class="element blue relative"><span class="before">*</span><span>71</span>Lu</div>
            <div class="element blue"><span>72</span>Hf</div>
            <div class="element blue"><span>73</span>Ta</div>
            <div class="element blue"><span>74</span>W</div>
            <div class="element blue"><span>75</span>Re</div>
            <div class="element blue"><span>76</span>Os</div>
            <div class="element blue"><span>77</span>Ir</div>
            <div class="element blue"><span>78</span>Pt</div>
            <div class="element blue"><span>79</span>Au</div>
            <div class="element blue"><span>80</span>Hg</div>
            <div class="element yellow"><span>81</span>Ti</div>
            <div class="element yellow"><span>82</span>Pb</div>
            <div class="element yellow"><span>83</span>Bi</div>
            <div class="element yellow"><span>84</span>Po</div>
            <div class="element yellow"><span>85</span>At</div>
            <div class="element yellow"><span>86</span>Rn</div>
        </div>    
        
        <div class="periodic-row">
            <div class="element">7</div>
            <div class="element red"><span>87</span>Fr</div>
            <div class="element red"><span>88</span>Ra</div>
            <div class="element blue relative"><span class="before"><span>*</span>*</span><span>103</span>Lr</div>
            <div class="element blue"><span>104</span>Rf</div>
            <div class="element blue"><span>105</span>Db</div>
            <div class="element blue"><span>106</span>Sg</div>
            <div class="element blue"><span>107</span>Bh</div>
            <div class="element blue"><span>108</span>Hs</div>
            <div class="element blue"><span>109</span>Mt</div>
            <div class="element blue"><span>110</span>Ds</div>
            <div class="element blue"><span>111</span>Rg</div>
            <div class="element blue"><span>112</span>Cn</div>
            <div class="element yellow"><span>113</span>Nh</div>
            <div class="element yellow"><span>114</span>Fl</div>
            <div class="element yellow"><span>115</span>Mc</div>
            <div class="element yellow"><span>116</span>Lv</div>
            <div class="element yellow"><span>117</span>Ts</div>
            <div class="element yellow"><span>118</span>Og</div>
        </div> 

        <div class="periodic-row">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element green relative"><span class="before">*</span><span>57</span>La</div>
            <div class="element green"><span>58</span>Ce</div>
            <div class="element green"><span>59</span>Pr</div>
            <div class="element green"><span>60</span>Nd</div>
            <div class="element green"><span>61</span>Pm</div>
            <div class="element green"><span>62</span>Sm</div>
            <div class="element green"><span>63</span>Eu</div>
            <div class="element green"><span>64</span>Gd</div>
            <div class="element green"><span>65</span>Tb</div>
            <div class="element green"><span>66</span>Dy</div>
            <div class="element green"><span>67</span>Ho</div>
            <div class="element green"><span>68</span>Er</div>
            <div class="element green"><span>69</span>Tm</div>
            <div class="element green"><span>70</span>Yb</div>
            <div class="element"></div>
            <div class="element"></div>
        </div>

        <div class="periodic-row">
            <div class="element"></div>
            <div class="element"></div>
            <div class="element"></div>
            <div class="element green relative"><span class="before"><span>*</span>*</span><span>89</span>Ac</div>
            <div class="element green"><span>90</span>Th</div>
            <div class="element green"><span>91</span>Pa</div>
            <div class="element green"><span>92</span>U</div>
            <div class="element green"><span>93</span>Np</div>
            <div class="element green"><span>94</span>Pu</div>
            <div class="element green"><span>95</span>Am</div>
            <div class="element green"><span>96</span>Cm</div>
            <div class="element green"><span>97</span>Bk</div>
            <div class="element green"><span>98</span>Cr</div>
            <div class="element green"><span>99</span>Es</div>
            <div class="element green"><span>100</span>Fm</div>
            <div class="element green"><span>101</span>Md</div>
            <div class="element green"><span>102</span>No</div>
            <div class="element"></div>
            <div class="element"></div>
        </div>
      </div>
</body>
</html>
```

### CSS
```css
.periodic-table {
    width: 95vw;
    margin: auto;
    display: grid;
    grid-template-rows: repeat(10, 1fr); /* Adjust column count as needed */
    gap: 5px;
  }
  
  .periodic-row {
    display: grid;
    grid-template-columns: repeat(19, 1fr); /* Adjust column count as needed */
    gap: 10px;
  }

 
  
  .element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
  } 
  
  .title{
    font-size: 12px;
  }
  
  /* Example element styles */
  .red {
    background-color: #ff4000;
  }

  .yellow{
    background-color: rgb(255, 255, 59);
  }

  .blue{
    background-color: rgb(58, 58, 255);
  }

  .green{
    background-color: rgb(50, 255, 50);
  }

  .relative{
    position: relative;
    top: 0;
    left: 0;
  }

  .before{
    position: absolute;
    left: -8px;
    display: flex;
    flex-direction: column;
  }
```


## Q.10 Build Responsive Layout both desktop and mobile and Tablet, see below image for reference ?

> Solution

### Html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Responsive Layout</title>
</head>
<body>
    <header>
        <div class="logo"></div>
        <div class="header_search"></div>
    </header>

    <div class="hero"></div>

    <div class="container">
        <div class="container_items"></div>
        <div class="container_items"></div>
        <div class="container_items"></div>
    </div>

    <div class="hero promotional"></div>
</body>
</html>
```

### CSS
```css
*{
    padding: 0;
    margin: 0;
}

body,html{
    width: 100%;
    height: 100%;
}

header{
    width: 95vw;
    height: 100px;
    padding-top: 20px;
    margin: auto;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    gap: 20px;
}

.logo{
    width: 100%;
    height: 100%;
    background: #005597;
}

.header_search{
    width: 100%;
    height: 100%;
    background: #626262;
}

.hero{
    width: 95vw;
    height: 300px;
    background: #383838;
    margin: auto;   
    margin-top: 20px; 
}

.container{
    width: 95vw;
    height: 300px;
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 20px;
    margin: auto;
    margin-top: 20px;
}

.container_items{
    width: 100%;
    height: 100%;
    background: #2f66ffa9;
}

.promotional{
    background: #999999;
    margin-bottom: 20px;
}

@media screen and (max-width: 640px) {
    header{
        padding-top: 10px;
        height: 70px;
        gap: 10px;
    }

    .hero{
        height: 200px;
        margin-top: 10px;
    }

    .container{
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }

    .promotional{
        margin-top: 10px;
    }
}
```