$(document).ready(function(){
	runContacts();
});

var contacts = [
	{
		name: "Joe Lozano",
	 	email: "joe.lozano@zumepizza.com",
		phone: "4087949926"
	},
	{
		name: "Edoe Cohen",
		email: "edoe@zumepizza.com",
		phone: "5033803940"
	}
];

function runContacts() {
	showAllContacts();

	$("form").on("submit", addNewContact);
	
	$(".show-contact-form").on("click", showContactForm);

	$(".go-to-all-contacts").on("click", goToContactsList);

	$(".contacts-list .content ul").on("click", "li", clickName);
}

function showAllContacts() {
	for(var index = 0; index < contacts.length; index++) {
		addNameToList(contacts[index].name);
	}
}

function addNewContact(event) {
	event.preventDefault();

	var contact = {};
	contact.name = $(".name").val();
	contact.phone = $(".phone").val();
	contact.email = $(".email").val();

	contacts.push(contact);
	addNameToList(contact.name);
	goToContactsList();
};

function addNameToList(name) {
	$(".contacts-list .content ul").append("<li>" + name + "</li>");
}

function clickName(element) {
	var clicked_name = element.currentTarget.textContent;
	var contact;

	console.log('clickName invoked!', clicked_name);
	for(var i=0; i < contacts.length; i++) {
		if(contacts[i].name === clicked_name) {
			contact = contacts[i];
			break;
		}
	}
	console.log('conact', contact);

	$(".contacts-list").hide();
	$(".individual-contact .header h1").text(contact.name);
	$(".individual-contact .content .phone").text(contact.phone);
	$(".individual-contact .content .email").text(contact.email);

	$(".individual-contact").show();
}

function showContactForm() {
	$(".new-address-form").show();
	$(".contacts-list").hide();
}

function goToContactsList() {
	$(".page-view").hide();
	$(".contacts-list").show();
}