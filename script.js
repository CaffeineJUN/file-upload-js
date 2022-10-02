const form = document.querySelector('form')
const fileInput = document.querySelector('.file-input')
const progressArea = document.querySelector('.progress-area')
const uploadArea = document.querySelector('.uploaded-area')

form.addEventListener('click', () => {
    fileInput.click()
})

fileInput.onchange = ({target}) => {
    let file = target.files[0]
    if (file) {
        let fileName = file.name
        uploadFile(fileName)
    }
}
