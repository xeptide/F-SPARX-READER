
# F* SPARX READER

F* Sparx reader is a simple extension created by Zin, (@zin.i on discord) that simply allows you to use AI to complete your sparx reader homework. it has an "answer" button in the bottom corner, that I will speak further on how to use correctly when completing this work.




## License

[MIT](https://choosealicense.com/licenses/mit/)

F* SPARX READER is not in affiliation with the [SPARX](https://sparx-learning.com/) company. F* SPARX READER is not liable for any damages or punishments lead to, by using our tool.


## Demo

https://streamable.com/vtyewf


# Installation ⬇️

### IMPORTANT
- First of all, you need to [create an api key using Cohere's TRIAL KEYS](https://dashboard.cohere.com/api-keys).
- After you've created your account, visit [this page](https://dashboard.cohere.com/api-keys) to view your Key. under the "Trial keys" section, there should be a key under the name "default". next to it, click on the eye 👁️ icon to view your key. copy this for later.
- Now, install the latest release to github.
- After extracting this to a folder, navigate to **line 70** of **content.js** where you can input your API key, withi the parameter that says **"KEY-HERE"**. for example, it would later look like:

(lines 69 - 72)
```js
  async function queryCohere(question, options, context) {
    const apiKey = 'ABCDEFGHIJKLMNOP';
    const response = await fetch('https://api.cohere.ai/generate', {
        method: 'POST',
```

### Easy Section

- After you've completed that step, you're ready to move onto the easy part.
- For each browser, you'll need to visit your [extensions](chrome://extensions) page. this hyperlink leads to the chrome one, but you'll need to navigate to your browser's designated one, for example **edge://extensions**.
- ![Image](https://i.ibb.co/cwZWcdQ/image.png) Enable Developer Mode.

- ![Image](https://i.ibb.co/vws9GQf/image.png) Next, a series of buttons should pop up. You'll need to click the "Load Unpacked" button.

- It will then open a file explorer window, in which you need to navigate to the folder that you've stored the extension in (the same place that **content.js** will be located).

- After you've completed those steps, this extension should pop up. ![Image](https://i.ibb.co/c1s0hMP/image.png)





## HOW TO USE 🎮

Currently, there is **some** simple manual steps in using this tool. here's a recommended process:

- **Recommended:** Scroll through the page slowly for 2-5 minutes, simulating that you've read the page. 
- **Necessary:** Copy all of the passage of the book that you're *supposed* to read. (Highlight, then CTRL + C).
- **Necessary:** Click on the *I have read up to here* button.
- **Necessary:** When a question pops up, simply click on the *ANSWER* button located in the top right. assuming everything has been installed correctly, it should automatically answer the *current question*, through which you can continue and repeat the process.

## ENJOY NO SPARX READER!