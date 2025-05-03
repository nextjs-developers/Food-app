import Image from "next/image";
import { useState } from "react";

function ShoppingList() {
  const [ShoppingItems, setShoppingItems] = useState([
    {
      id: 1,
      name: "pasta",
      discount: 15,
      price: 12000,
      quantity: 1,
    },
    {
      id: 2,
      name: "pizza",
      discount: 5,
      price: 18000,
      quantity: 1,
    },
    {
      id: 3,
      name: "chicken",
      discount: 0,
      price: 122000,
      quantity: 1,
    },
    {
      id: 4,
      name: "pasta Italy",
      discount: 5,
      price: 22000,
      quantity: 3,
    },
    {
      id: 5,
      name: "hamburger",
      discount: 0,
      price: 52000,
      quantity: 1,
    },
    {
      id: 6,
      name: "water",
      discount: 0,
      price: 72000,
      quantity: 2,
    },
  ]);

  const SumPrices = ShoppingItems.reduce((sum, item) => {
    return item.discount
      ? sum + item.price * item.quantity * ((100 - item.discount) / 100)
      : sum + item.price * item.quantity;
  }, 0);
  
  const shippingCost = 12000;
  
  const sumdiscound = ShoppingItems.reduce((sum, item) => {
    return item.discount > 0 
      ? sum + (item.discount / 100) * item.price * item.quantity 
      : sum;
  }, 0);
  
  const totalPrice = SumPrices + shippingCost;

  const increaseQuantity = (id) => {
    setShoppingItems(
      ShoppingItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id) => {
    setShoppingItems(
      ShoppingItems.map((item) =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity - 1) } 
          : item
      )
    );
  };

  const removeItem = (id) => {
    setShoppingItems(ShoppingItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {ShoppingItems.length === 0 ? (
        <div>Your shopping cart is empty.</div>
      ) : (
        <div className="  h-[200px] overflow-y-scroll border-b border-b-[#e1e1e1]">
          {ShoppingItems.map((item,index) => (
            <div key={item.id} className={`flex justify-between md:text-[16px] text-[14px]  items-center p-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <div className="">
          {item.discount ? <p className="body-sm">  {item.name} <span className="caption-md text-red-400">{item.discount}%</span> </p> : <p className="body-sm">{item.name}</p>}
               
                <span className="text-[#717171]">{item.price.toLocaleString()} $ </span>
              </div>

              <div className="flex justify-center items-center gap-[8px] bg-[#cae4d3] radius-4 px-[10px] h-fit py-1">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-primary cursor-pointer font-bold caption-md"
                >
                  -
                </button>

                <span className=" text-primary font-bold-">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-primary cursor-pointer font-bold caption-md"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  
                >
                <Image src="./icons/trash.svg" width={20} height={20} alt="trash" className="cursor-pointer"/>
                </button>
              </div>
            </div>
          ))}
          
       
        </div>
      )}
         <div className="mt-4  divide-y-1 divide-[#e1e1e1]">
            <p className="py-2 flex justify-between md:text-[16px] text-[14px]">Subtotal:<span>{SumPrices.toLocaleString()} $</span> </p>
            <p className="py-2 flex justify-between md:text-[16px] text-[14px]">Discount:<span> {sumdiscound.toLocaleString()} $</span></p>
            <p className="py-2 flex justify-between md:text-[16px] text-[14px]">Shipping:<span>{shippingCost.toLocaleString()} $</span> </p>
            <p className="py-2 flex justify-between md:text-[16px] text-[14px]">Total: <span>{totalPrice.toLocaleString()} $</span></p>
          </div>
          
    </div>
  );
}

export default ShoppingList;