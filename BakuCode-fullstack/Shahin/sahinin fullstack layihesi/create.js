document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const formData = {
        fullName: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch("http://localhost:8024/users/save", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log(formData);
        if (response.ok) {
            alert('Qeydiyyat uğurla tamamlandı!');
            window.location.href = './hesab.html';
        } else {
            const errorData = await response.json();
            alert(`Xəta: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Server ilə əlaqə qurularkən xəta baş verdi.');
    }
});
