document.addEventListener('DOMContentLoaded',()=>{

    const uploadButton = document.getElementById("select");
    const imageInput = document.getElementById("img-input");
    const resetBtn = document.querySelector(".reset");
    const downloadBtn = document.querySelector(".download");
    const frame = document.querySelector(".frame");

    let selectedFile = null;
    let resultImgURL = null;

    uploadButton.addEventListener("click",()=>{
        imageInput.click();
    });
    
    frame.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
    frame.addEventListener('drop',(e)=>{
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    });

    imageInput.addEventListener('change',(e)=>{
        handleFile(e.target.files[0]);
    })

    function handleFile(file){
        if(file && file.type.startsWith("image/")){
            selectedFile = file;

            const reader = new FileReader();
            reader.onload = ()=>{
                displayImage(reader.result);
                removeBackground(selectedFile);
            };
            reader.readAsDataURL(file);
        } else{
            alert("Are Bhai kya kar rha hai yaar, Please Upload a valid image.")
        }
    }

    function displayImage(imageSrc) {
        frame.innerHTML = `
            <div class="preview-container" style="width: 100%; height: 100%;">
            <img src="${imageSrc}" alt="Original Image" class="uploaded-img" style="
                opacity: 0.4;
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 20px;
            ">
            <div class="spinner"></div>
            </div>
        `;
        resetBtn.classList.remove("hidden");
        downloadBtn.classList.add("hidden");
    }

    


    async function removeBackground(file) {
        const apiKey = "KjRSNg5j2thmvTry3iUJbtnJ";

        const formData = new FormData();
        formData.append("image_file", file);
        formData.append("size", "auto");

        try {
            const response = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: {
                "X-Api-Key": apiKey,
            },
            body: formData,
            });

            if (!response.ok) {
            const errorData = await response.json();
            console.error("Remove.bg Error:", errorData);
            throw new Error(errorData.errors ? errorData.errors[0].title : "Failed to remove background");
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            resultImgURL = imageUrl;

            showFinalImage(imageUrl);

        } catch (error) {
            console.error(error);
            frame.innerHTML = `<p>Error removing background: ${error.message}</p>`;
        }
    }


    function showFinalImage(imageUrl) {
        frame.innerHTML = `
            <img src="${imageUrl}" alt="Background Removed" class="uploaded-img" style="
            opacity: 1;
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 20px;
            ">
        `;
        downloadBtn.classList.remove("hidden");
    }


    downloadBtn.addEventListener('click',()=>{
        if(resultImgURL){
            const link = document.createElement('a');
            link.href = resultImgURL;
            link.download = "bg-removed.png";
            link.click();
        }
    });

    resetBtn.addEventListener("click", () => {
        selectedFile = null;
        resultImgURL = null;

        frame.innerHTML = `
        <div class="input-area">
            <button id="select"><span>+</span> Select a image from here
            <input type="file" id="img-input" hidden>
            </button>
            <p>Or drop an image here</p>
        </div>
        `;

        resetBtn.classList.add("hidden");
        downloadBtn.classList.add("hidden");

        // Re-attach event listeners to the new elements
        document.getElementById("select").addEventListener("click", () => {
            document.getElementById("img-input").click();
        });

        document.getElementById("img-input").addEventListener("change", (e) => {
            handleFile(e.target.files[0]);
        });
  });

})


















































