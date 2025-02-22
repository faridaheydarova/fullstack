async function addSeller(event) {
    event.preventDefault(); 
    console.log("addSeller funksiyası işə düşdü!"); 


    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch("http://localhost:8024/users/save-seller", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Qeydiyyat uğurla tamamlandı!');
            window.location.href = './login.html';
        } else {
            const errorData = await response.json();
            alert(`Xəta: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Server ilə əlaqə qurularkən xəta baş verdi.');
    }
}
