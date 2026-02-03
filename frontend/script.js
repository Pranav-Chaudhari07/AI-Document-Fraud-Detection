const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", () => {

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf,.doc,.docx,.jpg,.png,.jpeg";

    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];

        if (file) {
            console.log("Selected file:", file.name);

            const originalText = uploadBtn.innerHTML;

            uploadBtn.innerHTML = "✓ File Selected";
            uploadBtn.style.backgroundColor = "#10b981";

            setTimeout(() => {
                uploadBtn.innerHTML = originalText;
                uploadBtn.style.backgroundColor = "";
            }, 2000);
        }
    });

    fileInput.click();
});
