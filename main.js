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

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!email.val()) {
        alert("Email Perlu Dimasukan")
    } else if(!subject.val()) {
        alert("Subject Perlu Dimasukan")
    } else if(!message.val()) {
        alert("Message Perlu Dimasukan")
    } else {
        alert("Form Submited")
        email.val("")
        subject.val("")
        message.val("")
    }
}