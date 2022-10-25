import '../components';

const applicantForm = document.getElementById('my-form')

function serializeForm(formNode) {
    return new FormData(formNode)
}

function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(applicantForm);
   alert('форма отправлена');
}

applicantForm.addEventListener('submit', handleFormSubmit)
