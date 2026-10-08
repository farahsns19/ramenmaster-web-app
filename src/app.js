document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Ultimate Ramen US Beef', img: '2.jpg', price: 48750, description: 'Double Base Soup, Half Ajitama Egg, Roasted Nori, Green Onions' },
            { id: 2, name: 'Ultimate Ramen Chicken Chashu', img: '4.jpg', price: 45000, description: 'Double Base Soup + Half Ajitama Egg, Roasted Nori, Green Onions.' },
            { id: 3, name: 'Ultimate Ramen Classic', img: '5.jpg', price: 47500, description: 'Double Base Soup, Half Ajitama Egg, Roasted Nori, Green Onions' },
            { id: 4, name: 'Volcano Tantanmen Chicken Chashu', img: '6.jpg', price: 42500, description: 'Shoyu Chicken Broth, Half Ajitama Egg, Roasted Nori, Butter Corn, Bok Choy, Sesame Paste, Red Chili Oil.' },
            { id: 5, name: 'Volcano Tantanmen Dumpling', img: '7.jpg', price: 42500, description: 'Shoyu Chicken Broth, Half Ajitama Egg, Roasted Nori, Butter Corn, Bok Choy, Sesame Paste, Red Chili Oil' },
            { id: 6, name: 'Volcano Tantanmen Classic', img: '8.jpg', price: 35000, description: 'Shoyu Chicken Broth, Half Ajitama Egg, Roasted Nori, Butter Corn, Bok Choy, Sesame Paste, Red Chili Oil.' },
            { id: 7, name: 'Black Tokyo Chicken Chashu', img: '9.jpg', price: 40000, description: 'Shoyu Chicken Broth, Half Ajitama Egg, Roasted Nori, Green Onions, Kikurage, Smoky Black Garlic Mayu Oil.' },
            { id: 8, name: 'Black Tokyo Chicken Karaage', img: '10.jpg', price: 42500, description: 'Shoyu Chicken Broth, Half Ajitama Egg, Roasted Nori, Green Onions, Kikurage, Smoky Black Garlic Mayu Oil' },
            { id: 9, name: 'Black Tokyo Classic', img: '11.jpg', price: 32500, description: 'Shoyu Chicken Broth, Half Ajitama Egg, Roasted Nori, Green Onions, Kikurage, Smoky Black Garlic Mayu Oil.' },
            { id: 10, name: 'Sleeping Samurai US Beef', img: '12.jpg', price: 42500, description: 'Ramen dengan daging sapi US, bumbu miso, dan topping sayuran.' },
            { id: 11, name: 'Sleeping Samurai Chicken Chashu', img: '13.jpg', price: 40000, description: 'Spicy Miso Paste Base Broth With Half Ajitama Egg, Roasted Nori, Green Onions And Kikurage.' },
            { id: 12, name: 'Sleeping Samurai Classic', img: '14.jpg', price: 31250, description: 'Spicy miso paste base broth with half ajitama egg, roasted nori, green onions and kikurage.' }
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({...newItem, quantity:1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barang sudah ada, cek
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        //jika barang sudah ada, tambah quantity
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id) {
            // ambil item yang mau di remove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            //jika item lebih dari 1
            if(cartItem.quantity > 1) {
                // telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang di klik
                    if(item.id != id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1){
                // jika barangnya sisa 1 
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

// Konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};
