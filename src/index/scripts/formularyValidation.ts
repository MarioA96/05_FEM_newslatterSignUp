(() => {

    const elementButton = document.getElementById('btnSubmit');
    elementButton!.addEventListener("click", handleSubmit);

    function handleSubmit(event: Event){
        event.preventDefault();

        const emailInput = document.getElementById('email') as HTMLInputElement;
        const emailValue = emailInput.value;
        
        const isEmailValid = validateEmail(emailValue);

        const errorEmailLabel = document.getElementById('error-email-label') as HTMLLabelElement;

        if(isEmailValid){
            emailInput.style.border = '2px solid green';
            emailInput.style.color = 'black';
            emailInput.style.backgroundColor = 'white';
            errorEmailLabel.style.display = 'none';

            //redireccion con parametros en la url destino
            window.location.href = `/05_FEM_newslatterSignUp/success?id=${emailValue}`;

        }else{
            emailInput.style.border = '2px solid #ff614f';
            emailInput.style.color = '#ff614f';
            emailInput.style.backgroundColor = 'rgb(255, 99, 75, 0.2)';
            errorEmailLabel.style.display = 'flex';
        }
    }

    function validateEmail(email: string){
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return re.test(email);
    }

})();
