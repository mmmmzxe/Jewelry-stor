import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";
import {fadeIn} from '../variants'
function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
var totalCart =0;
	return (
		
		<motion.div
		variants={fadeIn('up','tween' , 0.1 , 1)}
    initial='hidden'
    whileInView={'show'}
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header flex justify-center items-center text-center">
					<h2 className="h2 text-pink-900 text-[25px]"> Shopping cart</h2>
					<button
						className=" m-10 flex  rounded-full relative lg:flex-row flex-col"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30} className=" hover:text-pink-700 text-pink-900 "
						/>
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{products.map((product) => (
						totalCart+= product.price+product.price*product.count,
						<div
							className="cart-product flex lg:flex-row flex-col lg:gap-2 gap-1"
							key={product.id}>
							<img
								src={
									product.image
								}
								alt={product.name}
							/>
							<div className="product-info">
								<h3>
									{product.name}
								</h3>
								<span className="product-price text-pink-800">
									{product.price * product.count}
									$
								</span>
							</div>
							<select
								className="count"
								value={
									product.count
								}
								onChange={(
									event
								) => {
									onQuantityChange(
										product.id,
										event
											.target
											.value
									);
								}}>
								{[
									...Array(
										10
									).keys(),
								].map(
									(number) => {
										const num =
											number +
											1;
										return (
											<option
												value={
													num
												}
												key={
													num
												}>
												{
													num
												}
											</option>
										);
									}
								)}
							</select>
							<button
								className="btn remove-btn"
								onClick={() =>
									onProductRemove(
										product
									)
								}>
								<RiDeleteBin6Line
									size={20}
								/>
							</button>
						
						</div>
				
					))}
				
					{products.length > 0 && (
					
						<button className="btn checkout-btn">
							Proceed to checkout

						</button>
					)}
					
				</div>
			<div className="m-1 bg-white w-[200px] p-0 text-center total lg:p-5 lg:m-5 ">
			<h2 className="h2 text-pink-900 text-[20px] lg:text-[25px]">Total:</h2>
			<span>{totalCart} $</span>
			</div>
			<div>
				
			</div>
			</div>
		</motion.div>
	);
}

export default ShoppingCart;
