
async function loadUserComputers() {
    try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (!username || !password) {
            alert("Təsdiqləmə üçün giriş etməlisiniz.");
            window.location.href = "./login.html";
            return;
        }

        const credentials = btoa(`${username}:${password}`);
        const response = await fetch("http://localhost:8024/computers/my-computers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${credentials}`,
            },
        });

        if (response.ok) {
            const computers = await response.json();
            const list = document.getElementById("computers");
            list.innerHTML = "";

            if (computers.length === 0) {
                list.innerHTML = "<tr><td colspan='5'>Heç bir kompüter yoxdur.</td></tr>";
            } else {
                computers.forEach((computer) => {
                    const tableRow = document.createElement("tr");
                    tableRow.innerHTML = `
                        <td>${computer.id}</td>
                        <td>${computer.brand}</td>
                      <td>
    ${
        computer.photo 
        ? `<img src="${computer.photo}" alt="Şəkil" style="width: 50px; height: 50px; object-fit: cover; cursor: pointer;" onclick="onShowImage(${computer.id})"/>`
        : "No image"
    }
</td>

                        <td>${computer.price}</td>
                        <td>
                            <button type="button" class="edit-btn" data-toggle="modal" data-target="#myModal" onclick="updateComputer(${computer.id})">Redaktə</button>
                            <button class="delete-btn" onclick="bilgisayarSil(${computer.id})">Sil</button>
                        </td>
                    `;
                    list.appendChild(tableRow);
                });
            }
        } else {
            alert("Kompüterləri yükləmək mümkün olmadı.");
        }
    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}



async function updateComputer(id) {
    try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (!username || !password) {
            alert("Təsdiqləmə üçün giriş etməlisiniz.");
            window.location.href = "./login.html";
            return;
        }

        const credentials = btoa(`${username}:${password}`);
        const response = await fetch(`http://localhost:8024/computers/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${credentials}`,
            },
        });

        if (response.ok) {
            const computer = await response.json();

            document.getElementById("computerId").value = computer.id;
            document.getElementById("brand").value = computer.brand;
            document.getElementById("model").value = computer.model;
            document.getElementById("price").value = computer.price;
            document.getElementById("description").value = computer.description;
            document.getElementById("ram").value = computer.ram;
            document.getElementById("cpu").value = computer.cpu;
            document.getElementById("rom").value = computer.rom;
            document.getElementById("photo").value ="";

         
            document.getElementById("modalTitle").innerText = "Kompüteri redaktə et";


            $("#myModal").modal("show");
        } else {
            alert("Kompüteri yükləmək mümkün olmadı.");
        }
    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}

async function saveProduct() {
    let formData = new FormData();
    
    let photo = document.getElementById("photo");
  
    if (photo && photo.files.length > 0) {
        formData.append("file", photo.files[0]);
    } else {
        alert("Fayl seçilməyib!");
        return;
    }

    const credentials = btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`);


    let response = await fetch(`http://localhost:8024/files/upload`, {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Basic ${credentials}`
        }
    });


    if (response.status == 200) {
       
    } else {
        alert("Şəkil yüklənmədi!");
    }
    
    var photoName=await response.json();
    saveComputer(photoName.fileName);
}



async function bilgisayarSil(id) {
    if (confirm("Bu kompüteri silmək istədiyinizdən əminsinizmi?")) {
        try {
            const response = await fetch(`http://localhost:8024/computers/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Basic ${btoa(
                        `${localStorage.getItem("username")}:${localStorage.getItem("password")}`
                    )}`,
                },
            });

            if (response.ok) {
                alert("Kompüter uğurla silindi.");
                loadUserComputers();
            } else {
                alert("Kompüteri silmək mümkün olmadı.");
            }
        } catch (error) {
            console.error("Xəta baş verdi:", error);
        }
    }
}
window.onload = loadUserComputers;


async function saveComputer(photo){
    
    try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (!username || !password) {
            alert("Təsdiqləmə üçün giriş etməlisiniz.");
            window.location.href = "./login.html";
            return;
        }

        const credentials = btoa(`${username}:${password}`);
        const computerId = document.getElementById("computerId").value;

        const productData = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    ram: document.getElementById("ram").value,
    cpu: document.getElementById("cpu").value,
    rom: document.getElementById("rom").value,
    photo: photo,
};


        let url = `http://localhost:8024/computers/save`;
        let method = "POST";

        if (computerId) {
            url = `http://localhost:8024/computers/${computerId}`;
            method = "PUT";
        }
        

        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${credentials}`,
            },
            body: JSON.stringify(productData),
        });

        if (response.ok) {
            alert(computerId ? "Kompüter uğurla güncəlləndi." : "Yeni kompüter uğurla saxlanıldı.");
            $("#myModal").modal("hide");
            loadUserComputers();
        } else {
            alert("Məlumatı saxlayarkən xəta baş verdi.");
        }
    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}
document.getElementById("photo").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("preview");
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

async function onShowImage(computerId) {
    try {
        const response = await fetch(`http://localhost:8024/computers/${computerId}`);
        if (!response.ok) {
            throw new Error("Kompüter məlumatını yükləmək mümkün olmadı");
        }

        const computer = await response.json();

       
        const imageUrl = computer.photo.startsWith("http")
            ? computer.photo
            : `http://localhost:8024/files/download/${computer.photo}`;

        document.getElementById("computer-photo").src = imageUrl;

        $("#imageModal").modal("show");

        console.log("Şəkil yükləndi:", imageUrl);
    } catch (error) {
        console.error("Xəta:", error);
        alert("Şəkili göstərmək mümkün olmadı.");
    }
}
