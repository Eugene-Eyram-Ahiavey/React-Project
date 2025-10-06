import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { Product } from "./Product";
import userEvent from "@testing-library/user-event";
import axios from "axios";

/*Types of Tests
unit test - testing pieces/units of code like formatMoney 
Integration test - testing multiple units of code working together eg. Product Component

mock means to create a facke version of a function eg. loadCart
mocks don't do anything but just a fake version of the function we want to mock
*/

vi.mock("axios");

describe("Product component", () => {
  let product;

  let loadCart;

    beforeEach(() => {
      product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"]
    };

    loadCart = vi.fn();
    })

  it("displays product details correctly", () => {

    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );

    expect(screen.getByTestId("product-rating-stars-image")).toHaveAttribute(
      "src",
      `images/ratings/rating-45.png`
    );

    expect(screen.getByText("87")).toBeInTheDocument();
  });

  it("adds a product to the cart", async () => {

    render(<Product product={product} loadCart={loadCart} />);

    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1
    });

    expect(loadCart).toHaveBeenCalled();
  });

  // it('select a qantity', () => {
    
  // const quantitySelector = screen.getByTestId('quantity-selector');
  // expect(quantitySelector).toHaveValue('1')

  // });
  
});
