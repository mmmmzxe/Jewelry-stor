
import React, {
	useState,
	useEffect,
} from "react";
import {fadeIn} from '../variants'
import { motion } from "framer-motion";
import {
 
    FaCartPlus,
  } from 'react-icons/fa';
import '../slider.css';

import RatingStars from "./RatingStars";
import ShoppingCart from "./ShoppingCart";


const products = [
	{
		id: 1,
		name: "Vivamus vitae",
		rating: 4.3,
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 199,
		oldprice:90,
		image: require("../assets/img/product/1.png"),
	},
	{
		id: 2,
		name: "Fusce sit amet ipsum",
		rating: 4.2,
		description:
			"Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
		price: 229,
		oldprice:90,
		image: require("../assets/img/product/2.png"),
	},
	{
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		oldprice:90,
        image: require("../assets/img/product/3.png"),
	},
	
	{
		id: 5,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/4.png"),
	},
	{
		id: 6,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/5.png"),
	},
	{
		id: 7,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/6.png"),
	},
	{
		id: 8,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/7.png"),
	},
	{
		id: 9,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/8.png"),
	},
	{
		id: 10,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/9.png"),
	},
	{
		id: 10,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/10.png"),
	},
	{
		id: 10,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		oldprice:90,
		image: require("../assets/img/product/11.png"),
	},

];

function Products() {
	
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (

		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="flex justify-center items-center">
				<div>
					<h2 className="h2 text-pink-900">Products</h2>
				</div>
				<button
					className=" m-10 flex bg-pink-900 px-10 py-3 rounded-full relative hover:bg-pink-700 lg:flex-row flex-col"
					onClick={() =>
						setCartVisible(true)
					}>
					<FaCartPlus size={24} className="text-white" />
					{productsInCart.length >
						0 && (
						<span className="text-white text-[7px] px-2 ">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				
				<motion.div variants={fadeIn('up','tween' , 0.3 , 1.5)}
    initial='hidden'
    whileInView={'show'}  className="  justify-center items-center p-10 container mx-auto grid grid-cols gap-x-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-[30px]">
					{products.map((product) => (
						<motion.div variants={fadeIn('down','tween' , 0.1 , 1)}
						initial='hidden'
						whileInView={'show'}
							className="product "
							key={product.id} >
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name text-pink-900 font-bold">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<h5 className="text-bold text-stone-500 ">
								{
									product.description
								}
							</h5>
							<div className="flex-row lg:flex-row flex my-2">
							<span className="text-pink-900 px-5">
								{product.price} $
							</span>

							<span className="line-through">
								{product.oldprice} $
							</span>
							</div>
							<div className="buttons">
								
								
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</motion.div>
					))}
				</motion.div>
			</main>
		</div>
	);
}

export default Products;