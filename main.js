function toggleDetail(e) {
    const target = $(e.target)
    const item = $(target.parents(".about-exp-item"))
    const detail = $(item).children(".about-exp-item-detail")

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else{
        $(target).html("Less Info").addClass("active")
    }

    // $(target).html("Less Info")
    // $(target).addClass("active")


    $(detail).slideToggle()
    console.log()
}