

const fetchdata =  async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            console.log(data)

            const container = document.getElementById('maincontainer')

            data.forEach( product =>{
                const div = document.createElement('div');
                div.classList.add('product');

                div.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description.slice(0, 100)}...</p>
            <p><strong>$${product.price}</strong></p>
          `;

          container.appendChild(div)
                
            })

        
        }catch (error){
            console.log(error)
        }
       }
       fetchdata()