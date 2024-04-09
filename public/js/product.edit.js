//validaciones

// tratamiento de imágenes

const showImages = (images, idProduct) => {
  const boxImages = document.getElementById("box-images");
  boxImages.innerHTML = null;

  for (let i = 0; i < 2; i++) {
    if (images[i]) {
      boxImages.innerHTML += `

        <div class="position-relative">
            <img width="200px" src="/images/productos/${images[i].file}" alt="">
            <button 
                class="btn btn-sm btn-danger position-absolute bottom-0 end-0"
                onclick="onDeleteImageProduct('${images[i].id}', '${idProduct}')"
                type="button"
            >
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
          
      `;
    }else {

        boxImages.innerHTML += `
        
        <div class="position-relative">
            <img width="200px" src="/images/productos/no-image.jpg" alt="">
            <input 
                name="mainImage" 
                type="file" 
                class="form-control" 
                id="image${i}" 
                hidden 
                onchange="onAddImageProduct(event, '${idProduct}')"
                
                >
            <label 
                for="image${i}" 
                class="btn btn-sm btn-primary position-absolute bottom-0 end-0 cursor-pointer"
                ><i class="fa-solid fa-plus"></i></label>
        </div>

        `

    }
  }
};

const onAddImageProduct = async (e, idProduct) => {
  try {
    const data = new FormData();
    data.append("image", e.target.files[0]);

    const response = await fetch(
      `http://localhost:3000/apis/images/${idProduct}`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();

    showImages(result.images, idProduct)

  } catch (error) {
    console.log(error);
  }
};

const onDeleteImageProduct = async (idImage, idProduct) => {

    try {

        const response = await fetch(
            `http://localhost:3000/apis/images/${idImage}`,
            {
              method: "DELETE",
            }
          );

          const result = await response.json();

          showImages(result.images, idProduct)


    } catch (error) {
        console.log(error)
    }
}

const onChangeImageProduct = async (e, idProduct) => {
    try {
        const data = new FormData();
        data.append("image", e.target.files[0]);
    
        const response = await fetch(
          `http://localhost:3000/apis/images/${idProduct}/main`,
          {
            method: "POST",
            body: data,
          }
        );
    
        const result = await response.json();
        console.log(result);
        
        document.getElementById('main-image').setAttribute('src', URL.createObjectURL(e.target.files[0]));
    
      } catch (error) {
        console.log(error);
      }
}
