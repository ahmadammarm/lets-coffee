// Alpine JS
document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {
                id: 1,
                name: "Robuste",
                img: "1.jpg",
                price: 10000,
            },
            {
                id: 2,
                name: "Arabica",
                img: "2.jpg",
                price: 10000,
            },
            {
                id: 3,
                name: "Kopi Dampit",
                img: "3.jpg",
                price: 10000,
            },
        ],
    }));
  
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
          // Cek apakah item sudah ada di cart
          const cartItem = this.items.find((item) => item.id === newItem.id);
          
          // Jika Cart masih kosong
          if(!cartItem){
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;
          }
          else {
            // Jika barang sudah ada, cek apakah barangnya sama atau tidak dengan yang sudah ada
            this.items = this.items.map((item) => {
              if(item.id !== newItem.id){
                return item;
              }
              else {
                // Jika barang sudah ada dan sama, maka tambahkan quantity dan total
                item.quantity++;
                item.total = item.price * item.quantity;
                this.quantity++;
                this.total += item.price;
                return item;
              }
            });
          }
        },
        remove(id) {
            // Ambil item yang mau dihapus
            const cartItem = this.items.find((item) => item.id === id);

            // Jika item lebih dari 1
            if(cartItem.quantity > 1){
                this.items = this.items.map((item) => {
                    // Jika bukan barang yang diklik
                    if(item.id !== id){
                        return item;
                    }
                    else {
                        // Kurangi quantity dan total
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            }
            else if (cartItem.quantity === 1){
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
  });
  
  
  // Konversi ke Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
  }
   