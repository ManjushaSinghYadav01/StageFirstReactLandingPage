import React from "react";

const CouponsList = () => {
  const coupons = [
    { id: 1, title: "50% Off on Electronics", code: "SAVE50" },
    { id: 2, title: "Buy 1 Get 1 Free on Clothing", code: "BOGO" },
    { id: 3, title: "30% Off on Food Delivery", code: "FOOD30" }
  ];

  return (
    <section className="coupons">
      <h2>Today's Best Deals</h2>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            <strong>{coupon.title}</strong> - Use code: <b>{coupon.code}</b>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CouponsList;