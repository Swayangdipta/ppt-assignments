## Q.1 ` <!DOCTYPE html> ` is it a tag of html? If not, what is it and why do we use it?
> Answer

`<!DOCTYPE html>` is not an HTML tag but rather a document type declaration that specifies the version of HTML being used. It ensures proper rendering of HTML documents and promotes compatibility across different web browsers.

## Q.2 Explain Semantic tags in html? And why do we need it?
> Answer

Semantic tags in HTML are elements that carry meaning or convey specific information about the content within them. They provide a way to structure and describe the different parts of a web page based on their meaning and purpose, rather than just their presentation.Ex: `<header>`,`<nav>`,`<footer>`

Semantic tags improve the structure and accessibility of a web page. They provide a more meaningful and organized way to represent content, making it easier for search engines, screen readers, and other assistive technologies to understand and navigate the page. This can positively impact search engine optimization (SEO) and improve the overall user experience.

## Q.3 Differentiate between HTML Tags and Elements?
> Answer

In HTML, the terms "tags" and "elements" are often used interchangeably, but they refer to slightly different concepts:

HTML Tags: HTML tags are the markup symbols or codes used to define the structure and elements of an HTML document. They consist of angle brackets (< and >), with the tag name enclosed between them. For example, `<p>`, `<div>`, `<img>`, `<a>`, etc. HTML tags are used to enclose and define the beginning and end of HTML elements.

HTML Elements: HTML elements are made up of HTML tags along with the content they enclose. An HTML element consists of a start tag, the content or text within the tags, and an end tag (in most cases).

## Q.4 Build Your Resume using HTML only
> Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
</head>
<body>
    <div style="margin: auto; margin-top: 30px; width: 90%;">
        <div  style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
            <div>
                <h1>Swayangdipta Das</h1>
                <h4>Full Stack Javascript Developer</h4>
                <div style="display: flex; gap: 20px;">
                    <span>swayangdiptacc@gmail.com</span>
                    <span>9732103890</span>
                    <span><a href="github.com/swayangdipta">github</a></span>
                </div>
            </div>
            <img style="border-radius: 50%;" width="150px" height="150px" src="https://avatars.githubusercontent.com/u/31970602?v=4" alt="">
        </div>
        <hr>

        <div style="width: 100%; display: flex; align-items: start; justify-content: space-between; gap: 100px;">
            <div>
                <div>
                    <h3>Objective</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum facere, voluptatibus rerum sequi voluptatum non unde dignissimos sed? Quaerat vero eveniet sapiente. Architecto, commodi. Eum cumque ipsum iusto temporibus mollitia.</p>
                </div>
                <div>
                    <h3>Projects</h3>
                    <ul>
                        <li>
                            <h4>E-commerce Website FullStack</h4>
                            <h5>Tech Stack: React, Node, Express, MongoDb</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius error necessitatibus quis architecto voluptatum in, ducimus provident dignissimos minima laudantium? Porro laboriosam nulla quisquam pariatur ipsum, voluptatum tenetur harum dolore iste ipsa! Fugit error, repellendus exercitationem sapiente accusantium cupiditate dolorem.</p>
                        </li>
                        <li>
                            <h4>E-commerce Website FullStack</h4>
                            <h5>Tech Stack: React, Node, Express, MongoDb</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius error necessitatibus quis architecto voluptatum in, ducimus provident dignissimos minima laudantium? Porro laboriosam nulla quisquam pariatur ipsum, voluptatum tenetur harum dolore iste ipsa! Fugit error, repellendus exercitationem sapiente accusantium cupiditate dolorem.</p>
                        </li>
                        <li>
                            <h4>E-commerce Website FullStack</h4>
                            <h5>Tech Stack: React, Node, Express, MongoDb</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius error necessitatibus quis architecto voluptatum in, ducimus provident dignissimos minima laudantium? Porro laboriosam nulla quisquam pariatur ipsum, voluptatum tenetur harum dolore iste ipsa! Fugit error, repellendus exercitationem sapiente accusantium cupiditate dolorem.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                        <li>NODE</li>
                        <li>MONGODB</li>
                        <li>EXPRESS</li>
                    </ul>
                </div>
            </div>

            <div style="width: 500px;">
                <div>
                    <h3>Education</h3>
                    <div>
                        <h5>Bengal Institute Of Technology and Management</h5>
                        <p>Computer Science and Engineering</p>
                        <p>2018-2021</p>
                    </div>
                    <div>
                        <h5>Nalhati Government Polytechnic</h5>
                        <p>Computer Science and Technology</p>
                        <p>2015-2018</p>
                    </div>
                </div>
                <div>
                    <h3>Certifications</h3>
                    <div>
                        <h5>FullStack Javascript Web Devleoper</h5>
                        <p>By- iNeuron Intelligence</p>
                    </div>
                    <div>
                        <h5>MERN Stack Devleoper Bootcamp</h5>
                        <p>By- LearnCodeOnline.in</p>
                    </div>
                    <div>
                        <h5>ReactJS Developer</h5>
                        <p>By- LearnCodeOnline.in</p>
                    </div>
                </div>
                <div>
                    <h3>Languages</h3>
                    <ul>
                        <li>Bengali</li>
                        <li>Hindi</li>
                        <li>English</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
```

## Q.5 Write HTML code so that it looks like the below image

> Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img width="80%" height="80%" src="https://mark43.com/wp-content/uploads/2022/04/Blog_ICT.png" alt="">

    <h3 style="margin-top: 100px;">We will be learning the follwing things this week:</h3>

    <table style="margin-top: 50px;">
        <tr>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
            <th>Day 4</th>
        </tr>
        <tr>
            <td>Linux 1</td>
            <td>HTML</td>
            <td>Linux 2</td>
            <td>Linux 3</td>
        </tr>
        <tr>
            <td>Git 1</td>
            <td>CSS</td>
            <td>Git 2</td>
            <td>Bootstrap</td>
        </tr>
    </table>

    <h3 style="margin-top: 50px;">If you want to cantact me, please fill in this form:</h3>
    <form action="#">
        <div style="margin-bottom: 10px; width: 250px; display: flex; justify-content: space-between;">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name">            
        </div>

        <div style="margin-bottom: 10px; width: 250px; display: flex; justify-content: space-between;">
            <label for="phone">Phone no:</label>
            <input type="text" name="phone" id="phone">            
        </div>

        <div style="margin-bottom: 10px; width: 250px; display: flex; justify-content: space-between;">
            <label for="email">Email id:</label>
            <input type="text" name="email" id="phone">
        </div>
    </form>

    <h1 style="margin-top: 50px;">The Following thing are imporant for a Programmer: </h1>
    <ul>
        <li><h4 style="padding: 0; margin: 0;">A problem solving mindset</h4></li>
        <li><h4 style="padding: 0; margin: 0;">Consistency</h4>
            <ul>
                <li><h4 style="padding: 0; margin: 0;">Clean code</h4></li>
                <li><h4 style="padding: 0; margin: 0;">Thorough knowledge of core concepts</h4></li>
                <li><h4 style="padding: 0; margin: 0;">Readable code</h4></li>
            </ul>
        </li>
        <li><h4 style="padding: 0; margin: 0;">Speed</h4></li>
    </ul>
</body>
</html>
```

## Q.6 What are some of the advantages of HTML5 over its previous versions?
> Answer

HTML5 introduced several advancements and improvements over its previous versions. Some of the key advantages of HTML5 include:

1. Improved Semantics: HTML5 introduced a set of semantic tags (e.g., `<header>`, `<nav>`, `<article>`, `<section>`) that provide clearer and more meaningful structure to web pages. This improves accessibility, search engine optimization, and the overall organization of content.

2. Multimedia Support: HTML5 introduced native support for audio and video playback without requiring third-party plugins like Flash. This enables developers to embed multimedia content directly into web pages using the `<audio>` and `<video>` elements, providing a more seamless and consistent experience across different browsers and devices.

3. Canvas and SVG: HTML5 introduced the `<canvas>` element, which allows for dynamic rendering of graphics, animations, and interactive visualizations using JavaScript. Additionally, HTML5 included support for Scalable Vector Graphics (SVG), which enables the creation of resolution-independent and interactive vector-based graphics within web pages.

4. Local Storage and Offline Support: HTML5 introduced the Web Storage API (localStorage and sessionStorage) that allows web applications to store data locally on the user's device. This enables offline access and provides a way to build web applications that continue to function even when the user is not connected to the internet.

5. Geolocation and Device Access: HTML5 provides built-in support for accessing the user's geographical location through the Geolocation API. It also introduced other device APIs, such as the Device Orientation API and Web Bluetooth, allowing web applications to interact with device sensors and peripherals.

7. Improved Performance and Efficiency: HTML5 includes features like asynchronous script loading, native support for multimedia, and optimized rendering, resulting in faster page load times and improved overall performance.

## Q.7 Create a simple Music player using html only

> Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; background: #1b1b1b;">
        <audio controls>
            <source src="https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg" />
        </audio>        
    </div>

</body>
</html>
```

## Q.8 What is the difference between `<figure>` tag and `<img>` tag?
> Answer

The `<figure>` tag is used to group self-contained content, such as an image or video, along with an optional caption or description. On the other hand, the `<img>` tag is specifically used to embed images in an HTML document. The `<figure>` tag provides a semantic way to associate a caption or description with the content it wraps, enhancing accessibility and structure.

## Q.9 What’s the difference between html tag and attribute and give example of some global attributes?
> Answer

1. HTML Tags: HTML tags are used to define the structure and elements of an HTML document. They consist of angle brackets (`<` and `>`), with the tag name enclosed between them. For example, `<p>`, `<div>`, `<img>`, `<a>`, etc. HTML tags define the type of element and indicate where the element starts and ends.

2. HTML Attributes: HTML attributes provide additional information or properties to HTML elements. They are used within the opening tag of an HTML element and are composed of a name-value pair. Attributes enhance the behavior, appearance, or functionality of an HTML element. They are used to specify things like the source of an image, the destination of a link, styling properties, event handlers, etc.

Here are some examples of global attributes that can be used with various HTML elements:

- `class`
- `id`
- `style`
- `src`
- `href`
- `alt`
- `title`
- `disabled`

## Q.10 Write Html code so that it looks like the below image 

> Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1" align="center" style="width: 95vw; height: 95vh; margin: auto;" cellpadding="5" cellspacing="5">

        <tr style="border: 3px solid grey;">
        <th rowspan="3" >Day</th>
        <th colspan="3">seminar</th></tr>
        <tr>
        <th colspan="2">schedule</th>
        <th rowspan="2">topic</th>
        <tr>
        <th>begin</th><th>end</th>
        </tr>
        
        <tr>
        <td rowspan="2">Monday</td>
        <td rowspan="2">8:00 a.m.</td>
        <td rowspan="2">5:00 p.m.</td>
        <td >Introduction to XML</td>
        <tr><td >Validity: DTD and Relax NG</td>
        
        <tr>
        <td rowspan="3">Tuesday</td>
        <td>8:00 a.m.</td>
        <td>11:00 a.m.</td>
        <td>XPath</td><tr>
        <td>11:00 a.m.</td>
        <td> 2:00 p.m.</td>
        <td rowspan="2"> XSL Transformatics</td>
        <tr><td>2:00 p.m.</td>
        <td>5:00 p.m.</td>
        </tr>
        
        <tr>
        <td>Wednesday</td>
        <td>8:00 a.m.</td>
        <td>12:00 p.m.</td>
        <td>XSL Formatting Objects</td>
        </tr>
        
        </table>
</body>
</html>
```