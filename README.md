# 🖼️ Background Remover Web App

A sleek web application to remove backgrounds from images in one click — for free!

---

## ✨ Features

✅ **Drag & Drop Upload**  
Drag your image or use the file picker to upload any photo.

✅ **Instant Preview**  
See your image immediately while background removal processes in the background.

✅ **Background Removal via remove.bg API**  
Uses [remove.bg](https://www.remove.bg/api) for high-quality background removal.

✅ **Download Result**  
Download your background-removed image as a transparent PNG.

✅ **Reset Option**  
Easily reset the workspace and upload a new image.

✅ **Responsive Design**  
Works beautifully on mobile, tablet, and desktop screens.

---

## 🚀 Demo

[🔗 View Live Demo](https://manishh-18.github.io/background-remover/)

---

## 🔧 How It Works

1. User uploads or drags an image into the app.
2. The app displays a **preview** with reduced opacity.
3. A loading spinner appears while sending the image to remove.bg.
4. Once the API returns the processed image:
    - The preview is replaced with the **background-removed** image.
    - A **Download** button appears for saving the result.
5. User can **reset** anytime to start over.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- [remove.bg API](https://www.remove.bg/api)

---

## 🗝️ API Key

To make this app work, you’ll need a remove.bg API key.

1. [Sign up on remove.bg](https://www.remove.bg/api#api-reference)  
2. Copy your API key from your dashboard.
3. Replace this line in `script.js`:

    ```js
    const apiKey = "YOUR_API_KEY_HERE";
    ```

---

## 💻 Running Locally

1. Clone this repo:

    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    cd YOUR_REPO_NAME
    ```

2. Add your remove.bg API key in `script.js`.

3. Open `index.html` in your browser!

*(No build tools needed — it’s pure HTML/CSS/JS.)*

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- Thanks to [remove.bg](https://www.remove.bg/api) for their amazing API.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## ⭐️ Show Your Support

If you like this project:

- ⭐️ Star this repo
- Share with others!

Happy coding! 🚀
