const shareButtons=document.querySelectorAll('.tile-share',)
const linkShare= document.querySelectorAll('.share-button')
async function copyText(e){
    //prevent button from opening link
    e.preventDefault()
    const link= this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link: "+ link)
    } catch (err) {
        console.log(err)
    }

}
linkShare.forEach(b=>b.addEventListener('click',copyText))
shareButtons.forEach(shareButton=> shareButton.addEventListener('click',copyText))