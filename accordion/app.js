var accordion= document.getElementsByClassName("container")
        for (const key in accordion) {
            console.log(key)
            key.addEventListener('click', function () {
                this.classList.toggle('active')
           })
        }