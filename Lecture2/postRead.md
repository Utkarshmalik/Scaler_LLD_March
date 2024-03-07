## List

In HTML you can structure your content in a more readable and organized manner using lists. There are two types of lists such as

1. Ordered lists `<ol>` and,
2. Unordered lists `<ul>`

## 1. Ordered List

An ordered list is used to create a list of items that have a specific sequence or order. Each item in an ordered list is typically numbered, and the numbers usually increment in a sequential manner.
Each list item is defined with the `<li>` (list item) element, this will be more clear further in this article.

An ordered list can store content in two ways as well:

1. Non-alphabetically ordered
2. Alphabetically ordered

#### 1.1 Ordered List

In the following code you can clearly see that the output generated is not structured alphabetically but listed in an orderely fashion

#### Pseudocode

```html
<!DOCTYPE html>
<html>
  <head>
    <title>List Examples</title>
  </head>
  <body>
    <ol>
      <li>Banana</li>
      <li>Apple</li>
      <li>Strawberry</li>
    </ol>
  </body>
</html>
```

#### Output:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/117/original/upload_2e99c2e6057a7cefa9e96c95d9c27f37.png?1695110158)

### 1.2. Alphabetical Ordered List

In order to structure list in alphabetical fashion we can use `type = "A"` between `<ol>` tags

#### Pseudocode

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Alphabetical Ordered List</title>
  </head>
  <body>
    <h1>Alphabetical Ordered List Example</h1>

    <ol type="A">
      <li>Banana</li>
      <li>Apple</li>
      <li>Strawberry</li>
    </ol>
  </body>
</html>
```

**Output:**
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/118/original/upload_ef0ce2a0099cb2aed2158fe245251153.png?1695110223)

### 2. Unordered List

Use `<ul>` tags for displaying a list with the help of symbols/shapes. In this case we're considering shapes.

#### Pseudocode

```html
<!DOCTYPE html>
<html>
<head>
    <title>List Examples</title>
</head>
<body>
    <ul type = "circle">
        <li>Banana</li>
        <li>Apple</li>
        <li>Strawberry</li>
    </ul
</body>
</html>
```

#### Output:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/119/original/upload_c4298d24e8363ee59290b3ea888e16ca.png?1695110251)

## Tables in HTML

tables are used to organize and display data in a structured format. Tables consist of rows and columns, where each cell is capable of storing data in form of text, images, links, or other HTML elements. But in-order to create tables in HTML one needs to be familiar with certain tags and attributes used such as:

1. `<table`: tag is used to define the beginning of a table 2.`<td>`: tag represents a table cell that contains data
2. `<tr>`: tag represents a table row
3. `<th>` : tag represents a table header and is used to label columns or provide additional information about the data
4. `<thead>`: tag is used to group the header content in a table. It typically contains one or more `<tr>` elements with `<th>` elements inside.
5. `<tbody>`: tag groups the body content of the table.
6. `<caption>`: tag is used to provide a title or caption for the table. It is placed immediately after the opening `<table>` tag.
7. **border attribute**: is used to specify the thickness of the border around the table and its cells.

#### Pseudocode

```html
<!DOCTYPE html>
<html>
  <head>
    <title>List Examples</title>
  </head>
  <body>
    <table border style="text-align: center;">
      <caption>
        Student's Marksheet
      </caption>
      <thead>
        <th>Student</th>
        <th>Roll No.</th>
        <th>Marks</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2016911</td>
          <td>98</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2015911</td>
          <td>78</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

#### Output:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/120/original/upload_051534e2f8bbaa444c5fff971dbba317.png?1695110359)

## Further Reading

**Table Accessibility:**

- _Using Captions and Summaries:_ Explore the use of `<caption>` and `<summary>` for better accessibility.
- _Incorporating Header and Data Cells:_ Understand the importance of distinguishing between header and data cells in tables.
