const form = document.getElementsByClassName('pricing-modal-form-wrapper')[0];
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const modal = document.getElementById("pricing-modal-wrapper");
const closeModal = document.getElementById("pricing-modal-close");
var openModalBtn;
const orderLabel = document.getElementById("order-accept");

const emailPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const BYPhonePattern = new RegExp(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/);

window.onclick = (event) => {
    if (event.target === modal)
        modal.style.display = "none";
}

closeModal.onclick = () => modal.style.display = "none";

const onOrderBtnClick = (event) => {

    modal.style.display = "flex";
    form.style.display = "flex";
    closeModal.style.display = "flex";
    orderLabel.style.display = "none";
    openModalBtn = document.getElementById(event.target.id);

    var userOrders = JSON.parse(window.localStorage.getItem('userOrders'));
    if (userOrders !== null && userOrders.includes(openModalBtn.id)) {
        form.style.display = "none";
        orderLabel.style.display = "block";
    }

}

const onFormChange = (event) => {
    const submitBtn = document.getElementsByClassName('pricing-modal-btn')[0];
    submitBtn.disabled = userName.value.length === 0 || !emailPattern.test(email.value) || !BYPhonePattern.test(phone.value); 
}

const onFieldChange = (event) => {
    var result = false;
    switch (event.target.id) {
        case "name" : result = event.target.value.length !== 0; break;
        case "email" : result = emailPattern.test(event.target.value); break;
        case "phone" : result = BYPhonePattern.test(event.target.value); break;
    }
    event.target.style.borderColor = result ? "#00897b" : "red";
}

const onFormSubmit = (event) => {

    var userOrders = window.localStorage.getItem('userOrders');
    userOrders = userOrders === null ? [] : JSON.parse(userOrders);
    userOrders.push(openModalBtn.id);
    window.localStorage.setItem('userOrders', JSON.stringify(userOrders));

    event.target.style.display = "none";
    closeModal.style.display = "none";
    orderLabel.style.display = "block";
    setTimeout(() => { modal.style.display = "none" }, 5000);    

}
// function check()
// 				{
		
// 					const name = document.getElementById("pricename").value;
// 					const email = document.getElementById("emailll").value;
// 					const phone = document.getElementById("pricephone").value;
// 					const btn = document.getElementById("modalSubmit");
		
// 					if (name.length != 0 && email.length != 0 && phone.length != 0 && email.indexOf('@') != -1)
// 					{
// 						btn.removeAttribute("disabled");
						
// 					}
// 					else 
// 					{
// 						btn.setAttribute("disabled", "disabled")
						
// 					}
// 				}