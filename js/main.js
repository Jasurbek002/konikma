
 

var Filimlist = document.getElementById('filim_list')

var Filimitemtemplate = document.getElementById('filim_item_template').content

var connectEl = document.querySelector('.connect')
connectEl.addEventListener('click', (e) => {
    if (!e.target.matches('.connect')) {
        connectEl.innerHTML = ''
    }
    console.log(e.target.matches('.connect'))
})

Filimlist.addEventListener('click', (event) => {
    if (event.target.matches('.bookmark-btn')) {
    const filimid = event.target.dataset.filimid
        console.log(filimid)
    }
    else if (event.target.matches('.more-btn')) {
        const filimid = event.target.dataset.filimid
        connectEl.innerHTML = null
        let moreEl = openModal()
        let fondetfilim = movies.find(movie => movie.id == filimid)
        let modalTitel = moreEl.querySelector('.filim-titel')
        modalTitel.textContent = fondetfilim.title
        let modalyear = moreEl.querySelector('.filim-info')
        modalyear.textContent = fondetfilim.year
        connectEl.appendChild(moreEl)
        console.log(filimid)
    }

})

function openModal() {
    let modaloverlay = document.getElementById('modal-overlay').content
    let Modael = document.importNode(modaloverlay, true)


    return Modael
}

rendermovies(movies)

function rendermovies(movies) {
    Filimlist.innerHTML = ''
    movies.forEach(element => {
        let filimitemEl = document.importNode(Filimitemtemplate, true)

        let filimtitle = filimitemEl.querySelector('.filim__titel')
        filimtitle.textContent = element.title

        let filimimg = filimitemEl.querySelector('.filim__img')

        if (element.imageUrl) {
            filimimg.setAttribute('src', element.imageUrl)
        }
        if (!element.imageUrl) {
            filimimg.setAttribute('src', "../img/imgurel.jpg")

        }

        let bookmark = filimitemEl.querySelector('.bookmark-btn')
        bookmark.dataset.filimid = element.id

        let more = filimitemEl.querySelector('.more-btn')
        more.dataset.filimid = element.id

        var filimnumber = filimitemEl.querySelector('.filim__number')
        filimnumber.textContent = element.id

        var filimYear = filimitemEl.querySelector('.filim__year')
        filimYear.textContent = element.year

        Filimlist.appendChild(filimitemEl)

    });

}

var idbtn = document.querySelector('.btnsort')

var bigselect = document.getElementById('bigcelect')

var distanceEl = document.getElementById('idsort')

var serchinput = document.getElementById('Searchinput')

var serchbtn = document.getElementById('serchbtn')

var form = document.getElementById('form')




form.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.matches('.btnsort') && bigselect.value == 'id' && distanceEl.value == 'kamayish') {
        renderidsortk(movies)
    }
    if (event.target.matches('.btnsort') && bigselect.value == 'id' && distanceEl.value == 'osish') {
        renderidsort(movies)
    }
    if (event.target.matches('.btnsort') && bigselect.value == 'name' && distanceEl.value == 'kamayish') {
        rendersortk(movies)
    }
    if (event.target.matches('.btnsort') && bigselect.value == 'name' && distanceEl.value == 'osish') {
        rendersort(movies)
    }
    if (event.target.matches('.btnsort') && bigselect.value == 'year' && distanceEl.value == 'kamayish') {
        yearsort(movies)
    }
    if (event.target.matches('.btnsort') && bigselect.value == 'year' && distanceEl.value == 'osish') {
        yearsortk(movies)
    }
    if(event.target.matches('#serchbtn')){
        let newArr = []
       movies.forEach(element=>{
         if(element.title.includes(serchinput.value)){
             console.log(element.title)
             newArr.push(element)
         }
       })
       rendermovies(newArr)
    }
})

function rendersortk(elementid) {
    let newSort = elementid.sort((frist, second) => {
        return second.title.charCodeAt() - frist.title.charCodeAt()
    })
    console.log(newSort)
    rendermovies(newSort)
}

function rendersort(elementid) {
    let newSort = elementid.sort((frist, second) => {
        return frist.title.charCodeAt() - second.title.charCodeAt()
    })
    console.log(newSort)
    rendermovies(newSort)
}

function renderidsort(elementid) {
    var newsort = elementid.sort((frist, second) => {
        return frist.id - second.id
    })
    rendermovies(newsort)
}

function renderidsortk(elementid) {
    var newsort = elementid.sort((frist, second) => {
        return second.id - frist.id
    })
    rendermovies(newsort)
}

function yearsort(moves) {
    let newsort = moves.sort((frist, second) => {
        return second.year - frist.year
    })
    rendermovies(newsort)
}

function yearsortk(moves) {
    let newsort = moves.sort((frist, second) => {
        return frist.year - second.year
    })
    rendermovies(newsort)
}

var sliderEl = document.querySelector('.silider')

var splide = new Splide( '.silider', {
    type  : 'fade',
    rewind: true,
  } );
  
  splide.mount();







