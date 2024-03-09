# Class Notes - Introduction to CSS

# Agenda:
- What is CSS
- Need for CSS
- CSS Selectors
- Properties of CSS (color, background, fonts, and texts)

So, lets start!


>Various ways of using CSS
They are: 
1. Inline
2. Internal
3. External


These are the things that we will discuss. Now, let us see them one by one.


- Create a basic HTML file and add a heading **h1** inside the body tag entitled: "Heading 1" and open it in a browser to show how it looks.
- Now, let us see how to add CSS to this element.


# Steps to add style tag:
- Add `<style>` and `</style>` tag inside the head tag of your HTML file. Inside this **style** tag, you can use all the CSS stylings.
- Select the element that you need to add CSS.
- For example, h1 and add curly braces to it. Inside this, you can define the CSS properties as shown below:

```HTML=
h1{
    color : brown;
}



# Using CSS in three different ways:

## 1. Internal CSS 
- When you write CSS in the same HTML file. (using the style tag)


## 2. Inline CSS
- It is writing CSS for a particular element. (using style attribute.) 

### Example
```
<h2 style = "color: red;"> I am heading 2 </h2>
```
- Here we are providing the CSS to that specific element "h2" only, known as Inline CSS. Always try to add a style tag inside the **head tag**.
- Inline CSS has more priority than Internal CSS.


## 3. External CSS
- You can create a separate file for CSS having the extension "**.css**".
- Here you do not need to use any HTML tag. You can directly write your CSS and properties.

### Example

```HTML=
H3{
    color: green;
}
```
To reflect these CSS into your HTML file, you need to link that CSS file to the HTML file.
- Use the "link" tag to do this as shown below.

```
<link rel="CSS_file_name" href="./CSS_file_name.css">
```
- You can add the file location in the **href** to add the CSS file if it is at some other location in your system.

> These are the three ways that can be used to apply CSS to your HTML file. Now we will discuss the ways of selecting a particular element.


- As we have seen in the previous example, **h1{}** was the selector. But there are more ways of selecting elements.
- Have a brief discussion about how the students can select an element as the previous method that we learned till now.

## Descendent selectors
- Anything down the order can be termed as a descendent. For example, a child is the descendent of their father and Grand Father as well.
- Now, you need to select the obvious list as shown in the image and make it blue color.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/035/original/upload_741aa927d48eecd0dcd6ec59f15eba43.png?1695311213)


- For that first discuss the "**descent selector**". 
- When you select **ol li{}** as the selector then all the elements will get blue. So you need to select the specific parents that are "div" as shown in the example.

- We will write the selector as:
```HTML=
div li{
    color: blue;
}
```
Now moving to Children Selectors.

## Children selectors
Let us take an example as shown below.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/036/original/upload_6e331819a556124295cda866b1ad80df.png?1695311277)


There are two span tags. Here we need to make the text "I am the direct son" blue using CSS.

- Use the greater than **">"** symbol to use direct children.

```html=
div > h1 > span{
    color: blue;

}
```
- It means that you are directing to apply CSS to the span element that is directly children to the **h1**.

Let's see another type of selector which is the Classes

## Classes

- It is a very important part when you are learning CSS.
- Classes are defined as separate entities of similar elements.
- For real real-life example, if you are in class 10, then all the students there should be in class 10 only.
- Similarly, in CSS, similar elements having the same behavior are separated in a specific class as shown below code:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/037/original/upload_130e57374ed680b30734deba9ee0b2c7.png?1695311313)


- We use dot (.) to select a class and apply CSS to them. Here the name of the class is test so we will apply CSS to this class as below:

```HTML=
.test{
    color: blue;
}
```
This will be applied to both the elements of the class namely the **test**.

> Discuss a question having two different classes namely **class1** and **class2** and apply CSS on them to make one class **blue** and one class **red**.
- Solution:
```HTML=
.class1{
    color: blue;
}:

.class2{
    color: red;
}
```


## Further Resources



### **4. Resources for Further Learning:**

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS): A comprehensive CSS resource.

- [CSS Tricks](https://css-tricks.com/): Articles, tips, and tricks for CSS.

### **5. Practice Resources:**

- [CSS Diner](https://flukeout.github.io/): A game for learning CSS selectors interactively.





